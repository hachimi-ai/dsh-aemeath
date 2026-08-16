import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

/** Package root (assets/ lives one level above lib/). */
const ROOT = dirname(fileURLToPath(import.meta.url))
const ASSET_DIR = join(ROOT, '..', 'assets')

/** Tool name → [animation track, bubble text]. Mirrors the aemeath pet hook states. */
const TOOL_STATES = {
  read: ['running', '正在读取文件...'],
  grep: ['running', '正在搜索代码...'],
  glob: ['running', '正在查找文件...'],
  write: ['building', '正在构建...'],
  edit: ['building', '正在修改文件...'],
  bash: ['running', '正在执行命令...'],
  pwsh: ['running', '正在执行命令...'],
  subagent: ['analyzing', '正在分析...'],
  workflow: ['analyzing', '正在编排任务...'],
  web_fetch: ['fetching', '正在获取网络内容...'],
  web_search: ['searching', '正在搜索网络...'],
  ask_user_question: ['waving', '等待你的指示...'],
  todo_write: ['waiting', '整理任务清单...'],
  skill: ['review', '学习中...'],
}

/** Hard dependency: the browser HTTP carrier (registers /aemeath-skin/* routes). */
const inject = ['webServer']

function apply(ctx) {
  const webServer = ctx.webServer

  // ---------- asset cache + serving ----------
  const cache = new Map()
  async function loadAsset(name) {
    if (cache.has(name)) return cache.get(name)
    try {
      const bytes = await readFile(join(ASSET_DIR, name))
      cache.set(name, bytes)
      return bytes
    } catch (err) {
      console.error('[dsh-aemeath] asset load failed', name, err)
      cache.set(name, null)
      return null
    }
  }

  function serveAsset(name, mime) {
    return async (req, res) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.writeHead(405)
        res.end()
        return
      }
      const body = await loadAsset(name)
      if (!body) {
        res.writeHead(404)
        res.end('aemeath asset not found')
        return
      }
      res.writeHead(200, {
        'content-type': mime,
        'content-length': String(body.byteLength),
        'cache-control': 'public, max-age=3600',
      })
      if (req.method === 'HEAD') {
        res.end()
        return
      }
      res.end(body)
    }
  }

  // ---------- pet status machine ----------
  let state = { animation: 'idle', bubble: '', core: 'idle' }
  let busyCount = 0
  let agentRunning = false
  let celebratingTimer = null

  function setState(patch) {
    Object.assign(state, patch)
  }
  function clearCelebrating() {
    if (celebratingTimer) {
      clearTimeout(celebratingTimer)
      celebratingTimer = null
    }
  }
  function scheduleCelebratingEnd() {
    clearCelebrating()
    celebratingTimer = setTimeout(() => {
      celebratingTimer = null
      if (agentRunning) setState({ animation: 'chatting', bubble: '继续努力中~', core: 'chatting' })
      else setState({ animation: 'idle', bubble: '', core: 'idle' })
    }, 1600)
  }

  ctx.on('agent/inbox/inserted', () => {
    clearCelebrating()
    setState({ animation: 'chatting', bubble: '正在组织回复...', core: 'chatting' })
  })

  ctx.on('agent/status', (payload) => {
    const status = payload && payload.status
    if (status === 'running') {
      agentRunning = true
    } else if (status === 'idle') {
      agentRunning = false
      if (busyCount <= 0) {
        clearCelebrating()
        setState({ animation: 'idle', bubble: '', core: 'idle' })
      }
    }
  })

  ctx.on('tools/pre-execute', async (exec, next) => {
    try {
      const name = exec && exec.name
      if (typeof name === 'string') {
        const m = TOOL_STATES[name] || ['running', '工作中...']
        busyCount += 1
        clearCelebrating()
        setState({ animation: m[0], bubble: m[1], core: 'running' })
      }
    } catch (_) {}
    return next()
  })

  ctx.on('tools/result', () => {
    if (busyCount > 0) busyCount -= 1
    if (busyCount > 0) return
    clearCelebrating()
    setState({ animation: 'celebrating', bubble: '太棒了!', core: 'ready' })
    scheduleCelebratingEnd()
  })

  // ---------- routes ----------
  ctx.effect(
    () => webServer.register({
      kind: 'exact',
      path: '/aemeath-skin/wallpaper.jpg',
      handler: serveAsset('wallpaper.jpg', 'image/jpeg'),
    }),
    'dsh-aemeath: wallpaper route',
  )
  ctx.effect(
    () => webServer.register({
      kind: 'exact',
      path: '/aemeath-skin/spritesheet.webp',
      handler: serveAsset('spritesheet.webp', 'image/webp'),
    }),
    'dsh-aemeath: spritesheet route',
  )
  ctx.effect(
    () => webServer.register({
      kind: 'exact',
      path: '/aemeath-skin/status',
      handler: (req, res) => {
        if (req.method !== 'GET') {
          res.writeHead(405)
          res.end()
          return
        }
        res.writeHead(200, {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-cache',
        })
        res.end(JSON.stringify({ animation: state.animation, bubble: state.bubble, core: state.core }))
      },
    }),
    'dsh-aemeath: status route',
  )
}

export { apply, inject }
