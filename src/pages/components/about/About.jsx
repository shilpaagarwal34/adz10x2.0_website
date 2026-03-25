import React, { useEffect, useRef } from 'react'
import data from "../../data.json"

const About = () => {
  const { title, description_one, description_two } = data.about_us
  const canvasRef = useRef()
  const animRef   = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* ── nodes: center + 4 satellites ── */
    const CX = () => canvas.width  * 0.5
    const CY = () => canvas.height * 0.5

    /* flowing energy packets along edges */
    const edges = [
      { from: 0, to: 1 }, { from: 1, to: 0 },
      { from: 0, to: 2 }, { from: 2, to: 0 },
      { from: 0, to: 3 }, { from: 3, to: 0 },
      { from: 0, to: 4 }, { from: 4, to: 0 },
    ]

    const packets = edges.map((e, i) => ({
      ...e,
      t: (i * 0.22) % 1,
      speed: 0.003 + Math.random() * 0.002,
      color: e.from === 0 ? '#01aa23' : '#0193ff',
    }))

    /* background particles */
    const dust = Array.from({ length: 35 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      a: Math.random() * 0.3 + 0.07,
      c: Math.random() > 0.5 ? '#01aa23' : '#0193ff',
    }))

    let t = 0

    const getNodePos = () => {
      const cx = CX(), cy = CY()
      const rx = Math.min(cx, cy) * 0.62
      return [
        { x: cx,           y: cy            },          // 0 center
        { x: cx,           y: cy - rx       },          // 1 top
        { x: cx + rx,      y: cy            },          // 2 right
        { x: cx,           y: cy + rx       },          // 3 bottom
        { x: cx - rx,      y: cy            },          // 4 left
      ]
    }

    const draw = () => {
      t += 0.008
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const W = canvas.width, H = canvas.height
      const nodes = getNodePos()

      /* dust */
      dust.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0) d.x = 1; if (d.x > 1) d.x = 0
        if (d.y < 0) d.y = 1; if (d.y > 1) d.y = 0
        ctx.beginPath()
        ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2)
        ctx.fillStyle = d.c + Math.floor(d.a * 255).toString(16).padStart(2, '0')
        ctx.fill()
      })

      /* edge lines — curved bezier */
      edges.forEach(e => {
        const a = nodes[e.from], b = nodes[e.to]
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2
        const nx = -(b.y - a.y) * 0.18, ny = (b.x - a.x) * 0.18
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.quadraticCurveTo(mx + nx, my + ny, b.x, b.y)
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
        grad.addColorStop(0, 'rgba(1,170,35,0.35)')
        grad.addColorStop(1, 'rgba(1,147,255,0.35)')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.2
        ctx.setLineDash([5, 6])
        ctx.stroke()
        ctx.setLineDash([])
      })

      /* energy packets */
      packets.forEach(pk => {
        pk.t += pk.speed
        if (pk.t > 1) pk.t = 0
        const a = nodes[pk.from], b = nodes[pk.to]
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2
        const nx = -(b.y - a.y) * 0.18, ny = (b.x - a.x) * 0.18
        const tt = pk.t
        const x = (1-tt)*(1-tt)*a.x + 2*(1-tt)*tt*(mx+nx) + tt*tt*b.x
        const y = (1-tt)*(1-tt)*a.y + 2*(1-tt)*tt*(my+ny) + tt*tt*b.y
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 7)
        glow.addColorStop(0, pk.color + 'ff')
        glow.addColorStop(1, pk.color + '00')
        ctx.beginPath()
        ctx.arc(x, y, 7, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = pk.color
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <style>{`

        /* ═══ SECTION ═══ */
        .about_content { overflow: hidden; }

        /* ═══ DIAGRAM WRAPPER ═══ */
        .afd_wrap {
          position: relative;
          width: 100%;
          height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .afd_canvas {
          position: absolute;
          inset: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 1;
        }

        /* ═══ AURORA ═══ */
        .afd_aurora {
          position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
        }
        .aur1 {
          width: 380px; height: 380px; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          background: radial-gradient(circle, rgba(1,170,35,0.09) 0%, rgba(1,147,255,0.06) 50%, transparent 75%);
          animation: aurPulse 7s ease-in-out infinite;
        }
        .aur2 {
          width: 220px; height: 220px; top: 5%; right: 10%;
          background: radial-gradient(circle, rgba(1,147,255,0.1) 0%, transparent 70%);
          animation: aurDrift 11s ease-in-out infinite;
        }
        .aur3 {
          width: 180px; height: 180px; bottom: 5%; left: 8%;
          background: radial-gradient(circle, rgba(1,170,35,0.09) 0%, transparent 70%);
          animation: aurDrift 9s 2s ease-in-out infinite reverse;
        }
        @keyframes aurPulse {
          0%,100%{ transform:translate(-50%,-50%) scale(1);   opacity:0.7; }
          50%    { transform:translate(-50%,-50%) scale(1.15); opacity:1;   }
        }
        @keyframes aurDrift {
          0%,100%{ transform:scale(1) translate(0,0);        opacity:0.6; }
          50%    { transform:scale(1.2) translate(10px,-8px); opacity:1;   }
        }

        /* ═══ NODE GRID LAYOUT ═══ */
        .afd_grid {
          position: relative;
          width: 440px;
          height: 440px;
          z-index: 2;
        }

        /* ═══ CENTER NODE ═══ */
        .afd_center_node {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          animation: centerFloat 4.5s ease-in-out infinite;
        }
        @keyframes centerFloat {
          0%,100%{ transform:translate(-50%,-50%) translateY(0)   scale(1);    }
          50%    { transform:translate(-50%,-50%) translateY(-9px) scale(1.02); }
        }

        .center_card {
          width: 120px;
          padding: 20px 14px 16px;
          border-radius: 24px;
          background: linear-gradient(145deg, #01aa23 0%, #0193ff 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow:
            0 0 0 1.5px rgba(255,255,255,0.2) inset,
            0 8px 30px rgba(1,170,35,0.45),
            0 20px 60px rgba(1,147,255,0.25),
            0 3px 8px rgba(0,0,0,0.2);
        }
        .center_card::before {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(120deg, rgba(255,255,255,0.22) 0%, transparent 55%);
          border-radius:24px;
          pointer-events:none;
        }
        .center_card::after {
          content:'';
          position:absolute; bottom:0; left:0; right:0;
          height:40%;
          background:linear-gradient(to top, rgba(0,0,0,0.12), transparent);
          border-radius:0 0 24px 24px;
          pointer-events:none;
        }
        /* shimmer */
        .center_shimmer {
          position:absolute; inset:0; border-radius:24px;
          background:linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          background-size:250% 100%;
          animation:shimmerRun 3s ease-in-out infinite;
          pointer-events:none;
        }
        @keyframes shimmerRun {
          0%  { background-position:250% 0; }
          100%{ background-position:-250% 0; }
        }
        .center_icon {
          font-size: 22px; margin-bottom: 6px; display: block;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        .center_card h5 {
          margin:0 0 2px; font-size:11px; font-weight:800;
          letter-spacing:1px; opacity:0.95;
        }
        .center_card p {
          margin:0 0 10px; font-size:9px; opacity:0.75; font-weight:500;
        }
        .live_badge {
          display:inline-flex; align-items:center; gap:4px;
          padding:3px 9px; border-radius:20px;
          background:rgba(255,255,255,0.22);
          font-size:8.5px; font-weight:700; letter-spacing:0.6px;
        }
        .lpip {
          width:5px;height:5px;border-radius:50%;background:#fff;
          animation:lpip 1.3s ease-in-out infinite;
        }
        @keyframes lpip {
          0%,100%{opacity:1;transform:scale(1);}
          50%    {opacity:0.3;transform:scale(1.6);}
        }

        /* ═══ SATELLITE NODES ═══ */
        .afd_node {
          position: absolute;
          z-index: 8;
        }

        /* positions */
        .nd_top    { top:0;   left:50%; transform:translateX(-50%); animation:nft 5.2s ease-in-out infinite; }
        .nd_right  { top:50%; right:0;  transform:translateY(-50%); animation:nfr 4.7s ease-in-out infinite; }
        .nd_bottom { bottom:0;left:50%; transform:translateX(-50%); animation:nfb 5.8s ease-in-out infinite; }
        .nd_left   { top:50%; left:0;   transform:translateY(-50%); animation:nfl 5.0s ease-in-out infinite; }

        @keyframes nft { 0%,100%{transform:translateX(-50%) translateY(0);}   50%{transform:translateX(-50%) translateY(-10px);}  }
        @keyframes nfr { 0%,100%{transform:translateY(-50%) translateX(0);}   50%{transform:translateY(-50%) translateX(8px);}   }
        @keyframes nfb { 0%,100%{transform:translateX(-50%) translateY(0);}   50%{transform:translateX(-50%) translateY(10px);}  }
        @keyframes nfl { 0%,100%{transform:translateY(-50%) translateX(0);}   50%{transform:translateY(-50%) translateX(-8px);}  }

        /* ── GLASS CARD STYLE ── */
        .sat_card {
          width: 100px;
          padding: 13px 11px 11px;
          border-radius: 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .sat_card:hover { transform: scale(1.07); }

        /* glass overlay */
        .sat_card::before {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 100%);
          border-radius:20px;
          pointer-events:none;
        }
        .sat_card::after {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1px;
          background:rgba(255,255,255,0.9);
          border-radius:20px 20px 0 0;
        }

        .sc_green {
          background: rgba(220,252,231,0.85);
          border: 1px solid rgba(1,170,35,0.25);
          box-shadow: 0 8px 32px rgba(1,170,35,0.2), 0 2px 8px rgba(0,0,0,0.06),
                      inset 0 0 0 1px rgba(1,170,35,0.12);
          backdrop-filter: blur(12px);
        }
        .sc_blue {
          background: rgba(219,234,254,0.85);
          border: 1px solid rgba(1,147,255,0.25);
          box-shadow: 0 8px 32px rgba(1,147,255,0.2), 0 2px 8px rgba(0,0,0,0.06),
                      inset 0 0 0 1px rgba(1,147,255,0.12);
          backdrop-filter: blur(12px);
        }
        .sc_amber {
          background: rgba(255,251,235,0.88);
          border: 1px solid rgba(245,158,11,0.25);
          box-shadow: 0 8px 32px rgba(245,158,11,0.18), 0 2px 8px rgba(0,0,0,0.06),
                      inset 0 0 0 1px rgba(245,158,11,0.12);
          backdrop-filter: blur(12px);
        }
        .sc_purple {
          background: rgba(245,243,255,0.88);
          border: 1px solid rgba(139,92,246,0.25);
          box-shadow: 0 8px 32px rgba(139,92,246,0.18), 0 2px 8px rgba(0,0,0,0.06),
                      inset 0 0 0 1px rgba(139,92,246,0.12);
          backdrop-filter: blur(12px);
        }

        .sat_icon {
          width: 38px; height: 38px; border-radius: 12px;
          display:flex; align-items:center; justify-content:center;
          font-size:18px;
          position:relative; z-index:1;
        }
        .si_g { background:linear-gradient(135deg,#01aa23,#22c55e); box-shadow:0 4px 14px rgba(1,170,35,0.4); }
        .si_b { background:linear-gradient(135deg,#0193ff,#38bdf8); box-shadow:0 4px 14px rgba(1,147,255,0.4); }
        .si_a { background:linear-gradient(135deg,#f59e0b,#fcd34d); box-shadow:0 4px 14px rgba(245,158,11,0.4); }
        .si_p { background:linear-gradient(135deg,#8b5cf6,#c084fc); box-shadow:0 4px 14px rgba(139,92,246,0.4); }

        .sat_title {
          font-size:10.5px; font-weight:800; line-height:1.25;
          margin:0; position:relative; z-index:1;
        }
        .sat_sub {
          font-size:8.5px; font-weight:500; opacity:0.6;
          margin:0; position:relative; z-index:1; line-height:1.3;
        }
        .sc_green  .sat_title { color:#064e11; }
        .sc_blue   .sat_title { color:#0a3060; }
        .sc_amber  .sat_title { color:#78350f; }
        .sc_purple .sat_title { color:#3b0764; }

        /* ═══ STAT CHIPS ═══ */
        .afd_chip {
          position:absolute;
          background:rgba(255,255,255,0.94);
          backdrop-filter:blur(16px);
          border-radius:14px;
          padding:10px 15px;
          z-index:6;
          display:flex; flex-direction:column; gap:2px;
          pointer-events:none;
          border:1px solid rgba(255,255,255,0.85);
        }
        .afd_chip .cv { font-size:17px; font-weight:800; line-height:1; }
        .afd_chip .cl { font-size:9px; font-weight:600; opacity:0.5; text-transform:uppercase; letter-spacing:0.7px; }

        .chip_a { top:4%;   left:0;  box-shadow:0 6px 20px rgba(1,170,35,0.14);  animation:cf1 7s   ease-in-out infinite; }
        .chip_b { top:4%;   right:0; box-shadow:0 6px 20px rgba(1,147,255,0.14); animation:cf2 8.5s ease-in-out infinite; }
        .chip_c { bottom:5%;left:0;  box-shadow:0 6px 20px rgba(245,158,11,0.14);animation:cf3 6.5s ease-in-out infinite; }
        .chip_d { bottom:5%;right:0; box-shadow:0 6px 20px rgba(139,92,246,0.14);animation:cf4 9s   ease-in-out infinite; }
        .chip_e { top:44%;  right:0; box-shadow:0 6px 20px rgba(1,170,35,0.14);  animation:cf5 7.5s ease-in-out infinite; }

        .chip_a .cv { color:#01aa23; }
        .chip_b .cv { color:#0193ff; }
        .chip_c .cv { color:#f59e0b; }
        .chip_d .cv { color:#8b5cf6; }
        .chip_e .cv { color:#01aa23; }

        @keyframes cf1 { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-9px);}  }
        @keyframes cf2 { 0%,100%{transform:translateY(0);}  50%{transform:translateY(9px);}   }
        @keyframes cf3 { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-8px);}  }
        @keyframes cf4 { 0%,100%{transform:translateY(0);}  50%{transform:translateY(8px);}   }
        @keyframes cf5 { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-7px);}  }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width:1200px) {
          .afd_wrap { height:440px; }
          .afd_grid { width:400px; height:400px; }
        }
        @media (max-width:992px) {
          .afd_wrap { height:400px; }
          .afd_grid { width:360px; height:360px; }
          .center_card { width:108px; padding:16px 12px 14px; }
          .sat_card { width:90px; padding:11px 9px 9px; }
          .sat_icon { width:32px; height:32px; font-size:15px; border-radius:10px; }
          .sat_title { font-size:9.5px; }
          .sat_sub   { font-size:8px; }
        }
        @media (max-width:768px) {
          .afd_wrap { height:360px; margin-top:20px; }
          .afd_grid { width:310px; height:310px; }
          .center_card { width:96px; padding:14px 10px 12px; }
          .center_icon { font-size:18px; }
          .center_card h5 { font-size:10px; }
          .sat_card { width:80px; padding:9px 8px 8px; }
          .sat_icon { width:28px; height:28px; font-size:13px; border-radius:9px; }
          .afd_chip { padding:7px 11px; }
          .afd_chip .cv { font-size:14px; }
          .afd_chip .cl { font-size:8px; }
          .chip_c,.chip_d { display:none; }
        }
        @media (max-width:600px) {
          .afd_wrap { height:310px; }
          .afd_grid { width:268px; height:268px; }
          .center_card { width:84px; padding:12px 9px 10px; }
          .sat_card { width:70px; padding:8px 7px; gap:4px; border-radius:16px; }
          .sat_icon { width:24px;height:24px;font-size:12px;border-radius:8px; }
          .sat_title { font-size:8.5px; }
          .sat_sub   { display:none; }
          .chip_b,.chip_c,.chip_d,.chip_e { display:none; }
        }
        @media (max-width:480px) {
          .afd_wrap { height:270px; }
          .afd_grid { width:230px; height:230px; }
          .center_card { width:74px; padding:10px 7px; }
          .center_card p { display:none; }
          .sat_card { width:60px; padding:7px 6px; gap:3px; border-radius:14px; }
          .sat_icon { width:22px;height:22px;font-size:11px;border-radius:7px; }
          .sat_title { font-size:8px; }
          .nd_bottom .sat_card { display:none; }
          .afd_chip { padding:6px 10px; }
          .afd_chip .cv { font-size:12px; }
        }

      `}</style>

      <section className="about_content section_padding" id="about">
        <div className="container">
          <div className="row">

            {/* ── LEFT TEXT (untouched) ── */}
            <div className="col-lg-5">
              <h1 className="gradient-text mb-3">{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: description_one }} />
              <p className="paragraph2">{description_two}</p>
            </div>

            {/* ── RIGHT DIAGRAM ── */}
            <div className="about_img col-lg-7 mt-4 mt-lg-0">
              <div className="afd_wrap">

                {/* canvas — draws bezier edges + energy packets + dust */}
                <canvas className="afd_canvas" ref={canvasRef} />

                {/* aurora blobs */}
                <div className="afd_aurora aur1" />
                <div className="afd_aurora aur2" />
                <div className="afd_aurora aur3" />

                {/* ── STAT CHIPS ── */}
                <div className="afd_chip chip_a">
                  <span className="cv">10X</span>
                  <span className="cl">Hyperlocal Reach</span>
                </div>
                <div className="afd_chip chip_b">
                  <span className="cv">Trusted</span>
                  <span className="cl">Active Brands</span>
                </div>
                <div className="afd_chip chip_c">
                  <span className="cv">Flexible</span>
                  <span className="cl">Income Created</span>
                </div>
                <div className="afd_chip chip_d">
                  <span className="cv">High</span>
                  <span className="cl">Avg ROI</span>
                </div>
                <div className="afd_chip chip_e">
                  <span className="cv">98%</span>
                  <span className="cl">Satisfaction</span>
                </div>

                {/* ── NODE GRID ── */}
                <div className="afd_grid">

                  {/* CENTER */}
                  <div className="afd_center_node">
                    <div className="center_card">
                      <div className="center_shimmer" />
                      <span className="center_icon">⚡</span>
                      <h5>ADZ10X</h5>
                      <p>Platform</p>
                      <div className="live_badge">
                        <span className="lpip" /> LIVE
                      </div>
                    </div>
                  </div>

                  {/* TOP — Hyperlocal Reach */}
                  <div className="afd_node nd_top">
                    <div className="sat_card sc_blue">
                      <div className="sat_icon si_b">📍</div>
                      <p className="sat_title">Hyperlocal<br/>Reach</p>
                      <p className="sat_sub">Monetizable<br/>Screens</p>
                    </div>
                  </div>

                  {/* RIGHT — Brands */}
                  <div className="afd_node nd_right">
                    <div className="sat_card sc_purple">
                      <div className="sat_icon si_p">🏷</div>
                      <p className="sat_title">Brands &amp;<br/>Campaigns</p>
                      <p className="sat_sub">Verified<br/>Advertisers</p>
                    </div>
                  </div>

                  {/* BOTTOM — Income Flow */}
                  <div className="afd_node nd_bottom">
                    <div className="sat_card sc_amber">
                      <div className="sat_icon si_a">💰</div>
                      <p className="sat_title">Income<br/>Flow</p>
                      <p className="sat_sub">For Societies</p>
                    </div>
                  </div>

                  {/* LEFT — Residential Societies */}
                  <div className="afd_node nd_left">
                    <div className="sat_card sc_green">
                      <div className="sat_icon si_g">🏘</div>
                      <p className="sat_title">Residential<br/>Societies</p>
                      <p className="sat_sub">Gated<br/>Communities</p>
                    </div>
                  </div>

                </div>{/* /afd_grid */}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About

// import React from 'react'
// import data from "../../data.json"


// const About = () => {

//     const { title, description_one, description_two, image } = data.about_us

//     return (
//         <>

//             {/* <!--about us content start--> */}
//             <section className="about_content section_padding" id='about'>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-5">
//                             <h1 className="gradient-text mb-3">{title}</h1>
//                               <div
//                                 dangerouslySetInnerHTML={{ __html: description_one }}
//                             />
//                             <p className="paragraph2">{description_two}</p>
//                         </div>

//                         <div className="about_img col-lg-7 mt-4 mt-lg-0">
//                             <img src={image || "/about-us-flow.png"} alt="about us flow" />
//                         </div>

//                     </div>
//                 </div>
//             </section>
//             {/* <!--about us content end--> */}

//         </>
//     )
// }

// export default About