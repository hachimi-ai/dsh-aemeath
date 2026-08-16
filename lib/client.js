window.__ModuleLoader__.load({
  id: 'dsh-aemeath',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    const React = require('react')

    // -------------------------------------------------------------------------
    // Skin CSS: wallpaper (crisp 4K), independent dark mask, panel glass, the
    // full ice-blue / deep-space palette, and the pet styles.
    // -------------------------------------------------------------------------
    const SKIN_CSS = [
      'body { background-color: #0b0f26; }',
      "body::before { content: ''; position: fixed; inset: 0; z-index: -2; pointer-events: none; background-image: url('/aemeath-skin/wallpaper.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; }",
      "body::after { content: ''; position: fixed; inset: 0; z-index: -1; pointer-events: none; background: rgba(8,10,24,0.26); }",
      '.uV2eYG_card, .gdEzaW_bubble { backdrop-filter: blur(6px); }',
      'html body { --dsw-alias-bg-layer-3: rgba(255,255,255,0.82); --dsw-alias-bg-module-platform: rgba(240,243,255,0.75); --dsw-alias-bg-multi-select: rgba(240,243,255,0.75); --dsw-alias-border-l3: rgba(2,132,199,0.30); --dsw-alias-border-l4: rgba(2,132,199,0.38); --dsw-alias-button-primary-hover: #0369a1; --dsw-alias-button-info-fill: #0284c7; --dsw-alias-button-info-hover: #0ea5e9; --dsw-alias-button-contrast-fill: #1b2340; --dsw-alias-button-elevated-fill: rgba(255,255,255,0.85); --dsw-alias-button-floating-fill: rgba(255,255,255,0.88); --dsw-alias-button-floating-hover: rgba(240,243,255,0.90); --dsw-alias-button-ghost-active-fill: rgba(2,132,199,0.10); --dsw-alias-button-ghost-active-hover: rgba(2,132,199,0.16); --dsw-alias-button-ghost-active-border: rgba(2,132,199,0.40); --dsw-alias-button-tool-bar-fill: rgba(2,132,199,0.10); --dsw-alias-button-tool-bar-hover: rgba(2,132,199,0.16); --dsw-alias-button-tool-bar-fill-invisible: rgba(2,132,199,0.08); --dsw-alias-button-primary-dimmed: rgba(2,132,199,0.12); --dsw-alias-interactive-bg-hover: rgba(2,132,199,0.08); --dsw-alias-interactive-bg-hover-accent: rgba(2,132,199,0.14); --dsw-alias-interactive-bg-hover-solid: rgba(2,132,199,0.12); --dsw-alias-interactive-bg-active: rgba(2,132,199,0.12); --dsw-alias-label-caption: #7b87a6; --dsw-alias-label-tertiary: #6a7390; --dsw-alias-label-dimmed: rgba(90,100,133,0.60); --dsw-alias-label-primary-dimmed: #3a4566; --dsw-alias-label-primary-bluish: #0f4c81; --dsw-alias-label-primary-foreground: #ffffff; --dsw-alias-label-primary-inverted: #ffffff; --dsw-alias-markdown-code-block: rgba(244,241,251,0.72); --dsw-alias-markdown-code-block-banner: rgba(240,243,255,0.78); --dsw-alias-markdown-inline-code: rgba(2,132,199,0.10); --dsw-alias-markdown-code-segment-selected: rgba(240,243,255,0.90); --dsw-alias-markdown-code-segment-unselected: rgba(244,241,251,0.72); --dsw-alias-markdown-tag: rgba(2,132,199,0.10); --dsw-alias-markdown-placeholder: rgba(240,243,255,0.78); --dsw-alias-markdown-citation: rgba(2,132,199,0.10); --dsw-alias-scrollbar-bg-l1: rgba(2,132,199,0.35); --dsw-alias-scrollbar-bg-l2: rgba(2,132,199,0.35); --dsw-alias-scrollbar-hover-l1: rgba(2,132,199,0.55); --dsw-alias-scrollbar-hover-l2: rgba(2,132,199,0.55); --dsw-alias-state-business-primary: #0284c7; --dsw-alias-state-business-tertiary: rgba(2,132,199,0.12); --dsw-alias-toast-bg: rgba(27,35,64,0.96); --dsw-alias-tooltip-bg: rgba(27,35,64,0.96); --dsw-specific-bubble: rgba(224,242,254,0.60); --dsw-specific-bubble-highlight: rgba(199,230,254,0.70); --dsw-specific-input-major: rgba(255,255,255,0.80); --dsw-specific-login-input: rgba(255,255,255,0.88); --dsw-specific-selector: rgba(240,243,255,0.80); --dsw-specific-tip: rgba(240,243,255,0.80); --dsw-specific-sidebar-nav-item-hover: rgba(2,132,199,0.08); --dsw-specific-sidebar-nav-item-active: rgba(2,132,199,0.14); --dsw-specific-sidebar-nav-item-active-accent: #0284c7; --dsw-alias-bg-base: rgba(244,241,251,0.62); --dsw-alias-bg-layer-1: rgba(255,255,255,0.74); --dsw-alias-bg-layer-2: rgba(250,247,255,0.78); --dsw-alias-bg-overlay: rgba(255,255,255,0.90); --dsw-alias-border-l1: rgba(2,132,199,0.14); --dsw-alias-border-l2: rgba(2,132,199,0.24); --dsw-alias-brand-primary: #0284c7; --dsw-alias-label-primary: #1b2340; --dsw-alias-label-secondary: #5a6485; --dsw-specific-sidebar-fill: rgba(240,243,255,0.55); }',
      'html body[data-ds-dark-theme] { --dsw-alias-bg-layer-3: rgba(30,40,82,0.70); --dsw-alias-bg-module-platform: rgba(26,34,72,0.75); --dsw-alias-bg-multi-select: rgba(26,34,72,0.75); --dsw-alias-border-l3: rgba(125,211,252,0.32); --dsw-alias-border-l4: rgba(125,211,252,0.40); --dsw-alias-button-primary-hover: #a5e3ff; --dsw-alias-button-info-fill: #38bdf8; --dsw-alias-button-info-hover: #7dd3fc; --dsw-alias-button-contrast-fill: #eef2ff; --dsw-alias-button-elevated-fill: rgba(30,40,82,0.80); --dsw-alias-button-floating-fill: rgba(20,27,56,0.80); --dsw-alias-button-floating-hover: rgba(30,40,82,0.85); --dsw-alias-button-ghost-active-fill: rgba(56,84,150,0.50); --dsw-alias-button-ghost-active-hover: rgba(70,100,170,0.55); --dsw-alias-button-ghost-active-border: rgba(125,211,252,0.50); --dsw-alias-button-tool-bar-fill: rgba(30,40,82,0.55); --dsw-alias-button-tool-bar-hover: rgba(40,52,100,0.60); --dsw-alias-button-tool-bar-fill-invisible: rgba(30,40,82,0.40); --dsw-alias-button-primary-dimmed: rgba(56,84,150,0.60); --dsw-alias-interactive-bg-hover: rgba(125,211,252,0.10); --dsw-alias-interactive-bg-hover-accent: rgba(125,211,252,0.20); --dsw-alias-interactive-bg-hover-solid: rgba(40,52,100,0.85); --dsw-alias-interactive-bg-active: rgba(125,211,252,0.16); --dsw-alias-label-caption: rgba(150,170,200,0.75); --dsw-alias-label-tertiary: #93a4c4; --dsw-alias-label-dimmed: rgba(180,200,230,0.55); --dsw-alias-label-primary-dimmed: #cfe0f5; --dsw-alias-label-primary-bluish: #eef6ff; --dsw-alias-label-primary-foreground: rgb(9,13,32); --dsw-alias-label-primary-inverted: rgb(9,13,32); --dsw-alias-markdown-code-block: rgba(12,16,38,0.60); --dsw-alias-markdown-code-block-banner: rgba(17,24,52,0.60); --dsw-alias-markdown-inline-code: rgba(56,84,150,0.35); --dsw-alias-markdown-code-segment-selected: rgba(40,52,100,0.85); --dsw-alias-markdown-code-segment-unselected: rgba(12,16,38,0.60); --dsw-alias-markdown-tag: rgba(56,84,150,0.35); --dsw-alias-markdown-placeholder: rgba(17,24,52,0.60); --dsw-alias-markdown-citation: rgba(56,84,150,0.40); --dsw-alias-scrollbar-bg-l1: rgba(125,211,252,0.35); --dsw-alias-scrollbar-bg-l2: rgba(125,211,252,0.35); --dsw-alias-scrollbar-hover-l1: rgba(125,211,252,0.55); --dsw-alias-scrollbar-hover-l2: rgba(125,211,252,0.55); --dsw-alias-state-business-primary: #7dd3fc; --dsw-alias-state-business-tertiary: rgba(30,50,90,0.80); --dsw-alias-toast-bg: rgba(30,40,82,0.95); --dsw-alias-tooltip-bg: rgba(30,40,82,0.95); --dsw-specific-bubble: rgba(74,130,200,0.28); --dsw-specific-bubble-highlight: rgba(110,160,220,0.40); --dsw-specific-input-major: rgba(17,24,52,0.55); --dsw-specific-login-input: rgba(13,18,42,0.75); --dsw-specific-selector: rgba(30,40,82,0.75); --dsw-specific-tip: rgba(24,32,66,0.70); --dsw-specific-sidebar-nav-item-hover: rgba(30,40,82,0.60); --dsw-specific-sidebar-nav-item-active: rgba(56,84,150,0.60); --dsw-specific-sidebar-nav-item-active-accent: #7dd3fc; --dsw-alias-bg-base: rgba(9,13,32,0.45); --dsw-alias-bg-layer-1: rgba(17,24,52,0.60); --dsw-alias-bg-layer-2: rgba(24,32,66,0.66); --dsw-alias-bg-overlay: rgba(30,40,82,0.85); --dsw-alias-border-l1: rgba(125,211,252,0.16); --dsw-alias-border-l2: rgba(125,211,252,0.26); --dsw-alias-brand-primary: #7dd3fc; --dsw-alias-label-primary: #eef2ff; --dsw-alias-label-secondary: #b9c4e0; --dsw-alias-state-error-primary: #f87171; --dsw-alias-state-success-primary: #34d399; --dsw-alias-state-warn-primary: #fbbf24; --dsw-specific-sidebar-fill: rgba(11,16,40,0.48); }',
      '::selection { background: rgba(244,114,182,0.30); }',
      '* { scrollbar-width: thin; scrollbar-color: rgba(125,211,252,0.35) transparent; }',
      '::-webkit-scrollbar { width: 8px; height: 8px; }',
      '::-webkit-scrollbar-thumb { background: rgba(125,211,252,0.35); border-radius: 4px; }',
      '::-webkit-scrollbar-thumb:hover { background: rgba(125,211,252,0.55); }',
      '::-webkit-scrollbar-track { background: transparent; }',
      '.aem-pet{position:fixed;z-index:1200;pointer-events:none;user-select:none;font-family:"Microsoft YaHei","PingFang SC",sans-serif}',
      '.aem-pet-sprite{pointer-events:auto;cursor:grab;width:160px;height:174px;background-image:url("/aemeath-skin/spritesheet.webp");background-size:1280px 2600px;background-repeat:no-repeat;image-rendering:pixelated;filter:drop-shadow(0 6px 16px rgba(244,114,182,.45));transition:filter .2s ease}',
      '.aem-pet-sprite:hover{filter:drop-shadow(0 8px 20px rgba(244,114,182,.65))}',
      '.aem-pet-sprite.aem-dragging{cursor:grabbing;opacity:.85}',
      '.aem-pet-bubble{position:absolute;left:50%;bottom:182px;transform:translateX(-50%);pointer-events:auto;background:rgba(23,31,66,.88);border:1px solid rgba(125,211,252,.4);color:#eef2ff;border-radius:14px;padding:8px 14px;font-size:13px;line-height:1.5;white-space:nowrap;box-shadow:0 6px 20px rgba(0,0,0,.35);animation:aem-pop .18s ease}',
      '.aem-pet-bubble::after{content:"";position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);border:7px solid transparent;border-top-color:rgba(23,31,66,.88)}',
      '.aem-pet-menu{position:absolute;left:50%;bottom:186px;transform:translateX(-50%);pointer-events:auto;background:rgba(23,31,66,.92);border:1px solid rgba(125,211,252,.45);border-radius:14px;padding:6px;min-width:158px;box-shadow:0 8px 24px rgba(0,0,0,.45);display:flex;flex-direction:column;gap:2px;animation:aem-pop .18s ease}',
      '.aem-pet-menu button{display:block;width:100%;text-align:left;padding:8px 12px;border:none;border-radius:9px;background:transparent;color:#e9eeff;font-size:13px;font-family:inherit;cursor:pointer;white-space:nowrap}',
      '.aem-pet-menu button:hover{background:rgba(125,211,252,.22)}',
      '.aem-pet-summon{pointer-events:auto;width:44px;height:44px;border-radius:50%;background:rgba(23,31,66,.9);border:1px solid rgba(125,211,252,.5);color:#a5d8ff;font-size:20px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;animation:aem-pop .2s ease}',
      '.aem-pet-summon:hover{background:rgba(42,54,106,.95)}',
      '@keyframes aem-pop{from{opacity:0;transform:translateX(-50%) scale(.85)}to{opacity:1;transform:translateX(-50%) scale(1)}}',
    ].join('\n')

    // Frame map (row, col) per animation, from the 15-row atlas (used cells only).
    const FRAMES = {
      idle: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5]],
      'running-right': [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]],
      'running-left': [[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7]],
      waving: [[3,0],[3,1],[3,2],[3,3]],
      jumping: [[4,0],[4,1],[4,2],[4,3],[4,4]],
      failed: [[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7]],
      waiting: [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5]],
      running: [[7,0],[7,1],[7,2],[7,3],[7,4],[7,5]],
      review: [[8,0],[8,1],[8,2],[8,3],[8,4],[8,5]],
      chatting: [[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7]],
      fetching: [[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7]],
      searching: [[11,0],[11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7]],
      analyzing: [[12,0],[12,1],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7]],
      building: [[13,0],[13,1],[13,2],[13,3],[13,4],[13,5],[13,6],[13,7]],
      celebrating: [[14,0],[14,1],[14,2],[14,3],[14,4],[14,5],[14,6],[14,7]],
    }

    // Left-click reactions: a random little animation + bubble line.
    const REACTIONS = [
      { anim: 'waving', text: '嗨~ 我在呢！' },
      { anim: 'jumping', text: '嘿嘿，怎么啦~' },
      { anim: 'chatting', text: '抱抱你~' },
      { anim: 'waving', text: '有什么我可以帮忙的吗？' },
    ]

    function apply(ctx) {
      const slots = ctx.get('slots')

      // ---- inject skin CSS ----
      const style = document.createElement('style')
      style.dataset.pluginCss = 'dsh-aemeath'
      style.textContent = SKIN_CSS
      document.head.appendChild(style)
      const disposers = [() => style.remove()]

      // ---- localStorage helpers ----
      function readLS(key, fallback) {
        try {
          const v = window.localStorage.getItem('dsh.aemeath.' + key)
          return v === null ? fallback : v
        } catch (_) { return fallback }
      }
      function writeLS(key, value) {
        try { window.localStorage.setItem('dsh.aemeath.' + key, value) } catch (_) {}
      }

      // ---- shared drag / position state ----
      let savedPos = null
      try { savedPos = JSON.parse(readLS('pos', 'null')) } catch (_) {}
      const posState = {
        right: savedPos && Number.isFinite(savedPos.right) ? savedPos.right : 28,
        bottom: savedPos && Number.isFinite(savedPos.bottom) ? savedPos.bottom : 28,
      }
      function persistPos() {
        writeLS('pos', JSON.stringify({ right: posState.right, bottom: posState.bottom }))
      }

      // Stable drag state — must live outside Pet so the mount-once window
      // listeners and the re-attached onPointerDown share the SAME object.
      const drag = { active: false, moved: false, sx: 0, sy: 0, sr: 0, sb: 0 }

      let overrideUntil = 0
      function playTemp(animName, ms) {
        overrideUntil = Date.now() + ms
        if (window.__aemSetAnim) window.__aemSetAnim(animName)
      }

      // ---- pet component ----
      function Pet() {
        const [hidden, setHidden] = React.useState(() => readLS('hidden', '0') === '1')
        const [anim, setAnim] = React.useState('idle')
        const [frame, setFrame] = React.useState(0)
        const [bubble, setBubble] = React.useState({ text: '你好呀，我是爱弥斯~', persistent: false })
        const [menuOpen, setMenuOpen] = React.useState(false)
        const [dragging, setDragging] = React.useState(false)

        window.__aemSetAnim = setAnim

        function onReact() {
          const r = REACTIONS[Math.floor(Math.random() * REACTIONS.length)]
          setMenuOpen(false)
          overrideUntil = Date.now() + 2300
          setAnim(r.anim)
          setBubble({ text: r.text, persistent: false })
        }

        // frame ticker
        React.useEffect(() => {
          const frames = FRAMES[anim] || FRAMES.idle
          setFrame(0)
          const t = setInterval(() => setFrame((f) => (f + 1) % frames.length), 180)
          return () => clearInterval(t)
        }, [anim])

        // status poll
        React.useEffect(() => {
          let alive = true
          const tick = async () => {
            try {
              const r = await fetch('/aemeath-skin/status')
              if (!alive || !r.ok) return
              const data = await r.json()
              const core = String(data.core || 'idle')
              const text = String(data.bubble || '')
              if (Date.now() >= overrideUntil) setAnim(String(data.animation || 'idle'))
              if (text) {
                setBubble({ text, persistent: core === 'running' || core === 'chatting' || core === 'waiting' })
              } else if (core !== 'running' && core !== 'chatting' && core !== 'waiting') {
                setBubble((b) => (b.text ? { text: '', persistent: false } : b))
              }
            } catch (_) {}
          }
          tick()
          const t = setInterval(tick, 900)
          return () => { alive = false; clearInterval(t) }
        }, [])

        // non-persistent bubble auto-hide
        React.useEffect(() => {
          if (bubble.persistent || !bubble.text) return
          const t = setTimeout(() => setBubble({ text: '', persistent: false }), 4200)
          return () => clearTimeout(t)
        }, [bubble])

        // idle random animations
        React.useEffect(() => {
          if (anim !== 'idle') return
          const t = setTimeout(() => {
            const pick = ['waving', 'jumping', 'chatting'][Math.floor(Math.random() * 3)]
            overrideUntil = Date.now() + 2300
            setAnim(pick)
            setTimeout(() => { if (Date.now() >= overrideUntil) setAnim('idle') }, 2200)
          }, 12000 + Math.random() * 26000)
          return () => clearTimeout(t)
        }, [anim])

        // drag + click (drag object is defined in apply scope, not here)
        const onPointerDown = (e) => {
          if (e.button !== 0) return
          drag.active = true
          drag.moved = false
          drag.sx = e.clientX
          drag.sy = e.clientY
          drag.sr = posState.right
          drag.sb = posState.bottom
        }
        React.useEffect(() => {
          const move = (e) => {
            if (!drag.active) return
            const dx = e.clientX - drag.sx
            const dy = e.clientY - drag.sy
            if (!drag.moved && Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true
            if (!drag.moved) return
            setDragging(true)
            posState.right = Math.max(4, Math.round(drag.sr - dx))
            posState.bottom = Math.max(4, Math.round(drag.sb - dy))
            setMenuOpen(false)
          }
          const up = () => {
            if (!drag.active) return
            const wasMoved = drag.moved
            drag.active = false
            setDragging(false)
            if (wasMoved) persistPos()
            else onReact()
          }
          window.addEventListener('pointermove', move)
          window.addEventListener('pointerup', up)
          return () => {
            window.removeEventListener('pointermove', move)
            window.removeEventListener('pointerup', up)
          }
        }, [])

        if (hidden) {
          return React.createElement('div', {
            className: 'aem-pet',
            style: { right: posState.right, bottom: posState.bottom },
          }, React.createElement('button', {
            className: 'aem-pet-summon',
            title: '召唤爱弥斯',
            onClick: () => { setHidden(false); writeLS('hidden', '0') },
          }, '🪄'))
        }

        const frames = FRAMES[anim] || FRAMES.idle
        const cell = frames[frame % frames.length]
        const spriteStyle = { backgroundPosition: '-' + (cell[1] * 160) + 'px -' + (cell[0] * 173.33).toFixed(1) + 'px' }

        const children = []
        if (bubble.text) {
          children.push(React.createElement('div', { className: 'aem-pet-bubble', key: 'b' }, bubble.text))
        }
        if (menuOpen) {
          children.push(React.createElement('div', { className: 'aem-pet-menu', key: 'm' },
            React.createElement('button', { onClick: () => { setMenuOpen(false); playTemp(['waving', 'jumping', 'chatting'][Math.floor(Math.random() * 3)], 2300) } }, '🐾 换个表情'),
            React.createElement('button', { onClick: () => { setMenuOpen(false); setBubble({ text: '你好呀，我是爱弥斯~ 一起加油吧！', persistent: false }) } }, '💬 打招呼'),
            React.createElement('button', { onClick: () => { setMenuOpen(false); setHidden(true); writeLS('hidden', '1') } }, '✕ 隐藏桌宠'),
          ))
        }
        children.push(React.createElement('div', {
          key: 's',
          className: 'aem-pet-sprite' + (dragging ? ' aem-dragging' : ''),
          style: spriteStyle,
          onPointerDown: onPointerDown,
          onContextMenu: (e) => { e.preventDefault(); setMenuOpen((o) => !o) },
        }))

        return React.createElement('div', {
          className: 'aem-pet',
          style: { right: posState.right, bottom: posState.bottom },
        }, ...children)
      }

      // ---- register pet in the frame-wide overlay slot ----
      if (slots) {
        disposers.push(slots.inject('shell.overlay', () => slots.register(
          { name: 'shell.overlay', id: 'aemeath-pet', order: 10, label: '爱弥斯桌宠' },
          () => React.createElement(Pet, null),
        )))
      }

      ctx.effect(() => () => {
        for (const d of disposers) { try { d() } catch (_) {} }
      }, 'dsh-aemeath: client cleanup')
    }

    exports.apply = apply
    return module.exports
  },
})
