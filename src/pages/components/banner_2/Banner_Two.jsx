import React, { useRef, useEffect, useState } from "react";
import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";

const Banner_Two = () => {
  const { title, features } = data.banner_2;
  const ref = useRef();
  const canvasRef = useRef();
  const animRef = useRef();
  const [count, setCount] = useState(0);

  /* ── counter animation ── */
  useEffect(() => {
    let start = 0;
    const end = 120;
    const duration = 2200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 600);
    return () => clearTimeout(timer);
  }, []);

  /* ── particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.4 + 0.5,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      alpha: Math.random() * 0.45 + 0.12,
      color: Math.random() > 0.5 ? "#01aa23" : "#0193ff",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(1,147,255,${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.floor(p.alpha * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── 3D tilt (disabled on touch) ── */
  const handleMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.transform = `rotateX(${(y / rect.height - 0.5) * -12}deg) rotateY(${(x / rect.width - 0.5) * 12}deg)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <style>{`

        /* ═══════════════════════════════════════
           BASE / DESKTOP STYLES
        ═══════════════════════════════════════ */

        .b2_section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .b2_canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        /* aurora blobs */
        .b2_aurora {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .b2_aurora_1 {
          width: 520px; height: 520px;
          top: -130px; left: -110px;
          background: radial-gradient(circle, rgba(1,170,35,0.14) 0%, transparent 70%);
          animation: auroraDrift1 9s ease-in-out infinite;
        }
        .b2_aurora_2 {
          width: 440px; height: 440px;
          bottom: -100px; right: 2%;
          background: radial-gradient(circle, rgba(1,147,255,0.13) 0%, transparent 70%);
          animation: auroraDrift2 11s ease-in-out infinite;
        }
        .b2_aurora_3 {
          width: 300px; height: 300px;
          top: 35%; left: 42%;
          background: radial-gradient(circle, rgba(1,170,35,0.07) 0%, transparent 70%);
          animation: auroraDrift1 7s 2s ease-in-out infinite;
        }
        @keyframes auroraDrift1 {
          0%,100% { transform: scale(1) translate(0,0);          opacity: 0.6; }
          50%      { transform: scale(1.2) translate(20px,-20px); opacity: 1;   }
        }
        @keyframes auroraDrift2 {
          0%,100% { transform: scale(1) translate(0,0);           opacity: 0.5; }
          50%      { transform: scale(1.15) translate(-20px,14px); opacity: 0.9; }
        }

        .b2_section > .container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* ── LEFT VISUAL ── */
        .b2_visual {
          position: relative;
          height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── 6 ORBIT RINGS ── */
        .orb {
          position: absolute;
          top: 50%; left: 50%;
          border-radius: 50%;
          pointer-events: none;
        }
        .orb_1 { width:155px;  height:155px;  margin:-77px  0 0 -77px;  border:1.5px solid rgba(1,170,35,0.38);   animation:orbitSpin  8s linear infinite;         z-index:2; }
        .orb_2 { width:255px;  height:255px;  margin:-127px 0 0 -127px; border:1px dashed rgba(1,147,255,0.3);    animation:orbitSpin 14s linear infinite reverse; z-index:2; }
        .orb_3 { width:355px;  height:355px;  margin:-177px 0 0 -177px; border:1px dashed rgba(1,170,35,0.2);     animation:orbitSpin 21s linear infinite;         z-index:2; }
        .orb_4 { width:460px;  height:460px;  margin:-230px 0 0 -230px; border:1px dashed rgba(1,147,255,0.15);   animation:orbitSpin 30s linear infinite reverse; z-index:1; }
        .orb_5 { width:560px;  height:560px;  margin:-280px 0 0 -280px; border:1px dashed rgba(1,170,35,0.09);    animation:orbitSpin 40s linear infinite;         z-index:1; }
        .orb_6 { width:650px;  height:650px;  margin:-325px 0 0 -325px; border:1px solid  rgba(1,147,255,0.06);   animation:orbitSpin 55s linear infinite reverse; z-index:1; }

        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .orb_dot { position:absolute; border-radius:50%; top:-5px; left:50%; }
        .od_1 { width:10px;height:10px;margin-left:-5px;background:#01aa23;box-shadow:0 0 12px rgba(1,170,35,1); }
        .od_2 { width:9px; height:9px; margin-left:-4px;background:#0193ff;box-shadow:0 0 10px rgba(1,147,255,0.9);top:auto;bottom:-4px; }
        .od_3 { width:8px; height:8px; margin-left:-4px;background:#01aa23;box-shadow:0 0 9px  rgba(1,170,35,0.8); }
        .od_4 { width:7px; height:7px; margin-left:-3px;background:#0193ff;box-shadow:0 0 8px  rgba(1,147,255,0.8);top:auto;bottom:-3px; }
        .od_5 { width:6px; height:6px; margin-left:-3px;background:#01aa23;box-shadow:0 0 7px  rgba(1,170,35,0.7); }
        .od_6 { width:5px; height:5px; margin-left:-2px;background:#0193ff;box-shadow:0 0 6px  rgba(1,147,255,0.6);top:auto;bottom:-2px; }

        /* ── 3D MOCKUP ── */
        .dashboard_mockup_3d {
          position: relative;
          width: 420px;
          height: 420px;
          perspective: 1100px;
          transition: transform 0.3s ease;
          z-index: 5;
        }

        .dashboard_layer { position:absolute; border-radius:16px; }

        /* MAIN CARD */
        .main_card {
          top:50%; left:50%;
          transform: translate(-50%,-50%) translateZ(60px);
          width: 200px;
          padding: 24px 18px;
          background: linear-gradient(135deg, #01aa23, #0193ff);
          color: white;
          text-align: center;
          box-shadow: 0 28px 65px rgba(0,0,0,0.32), 0 0 50px rgba(1,170,35,0.3), inset 0 0 0 1px rgba(255,255,255,0.1);
          z-index: 6;
          animation: floatMain 4s ease-in-out infinite;
          overflow: hidden;
        }
        .main_card::before {
          content:""; position:absolute; inset:0;
          background: linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.16) 50%, transparent 75%);
          background-size: 300% 100%;
          animation: shimmerSweep 3.5s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes shimmerSweep {
          0%   { background-position:300% 0; }
          100% { background-position:-300% 0; }
        }
        .main_card h4           { margin:0 0 4px; font-size:13px; font-weight:700; opacity:0.88; }
        .main_card .stat_number { font-size:42px; font-weight:800; line-height:1; margin:6px 0 2px; letter-spacing:-1.5px; }
        .main_card .stat_label  { font-size:10px; opacity:0.78; margin:0 0 12px; }
        .main_card .badge {
          display:inline-flex; align-items:center; gap:5px;
          padding:3px 10px; border-radius:20px;
          background:rgba(255,255,255,0.2);
          font-size:10px; font-weight:700; letter-spacing:0.8px;
        }
        .live_dot {
          width:6px; height:6px; border-radius:50%;
          background:#fff; display:inline-block;
          animation:livePulse 1.3s ease-in-out infinite;
        }
        @keyframes livePulse {
          0%,100% { opacity:1;   transform:scale(1);   box-shadow:0 0 0 0 rgba(255,255,255,0.5); }
          50%     { opacity:0.6; transform:scale(1.4); box-shadow:0 0 0 5px rgba(255,255,255,0); }
        }
        @keyframes floatMain {
          0%,100% { transform:translate(-50%,-50%) translateZ(60px); }
          50%     { transform:translate(-50%, calc(-50% - 13px)) translateZ(60px); }
        }

        /* ── 7 SMALL FLOATING CARDS ── */
        .small_card {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(16px);
          padding: 8px 12px;
          font-size: 12px;
          font-weight: 700;
          color: #111;
          box-shadow: 0 10px 26px rgba(0,0,0,0.14);
          border: 1px solid rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          z-index: 5;
        }
        .sc_icon {
          width:26px; height:26px; border-radius:7px;
          display:flex; align-items:center; justify-content:center;
          font-size:13px; flex-shrink:0;
        }

        
        /* Positions — spread across all 4 quadrants, no overlap with main */
        /* top-left */
        .card1 { top:3%;   left:0%;   animation:fc1 5.5s ease-in-out infinite; }
        /* top-right */
        .card2 { top:3%;   right:0%;  animation:fc2 4.8s ease-in-out infinite; }
        /* mid-left */
        .card3 { top:34%;  left:-16%;  animation:fc3 6.0s 0.4s ease-in-out infinite; }
        /* mid-right */
        .card4 { top:34%;  right:-13%; animation:fc4 5.2s 0.6s ease-in-out infinite; }
        /* lower-left */
        .card5 { bottom:20%; left:-10%;  animation:fc5 6.8s 0.2s ease-in-out infinite; }
        /* lower-right */
        .card6 { bottom:22%; right:-8%; animation:fc6 5.0s 0.8s ease-in-out infinite; }
        /* bottom-center */
        .card7 { bottom:3%;  left:46%; margin-left:-68px; animation:fc7 6.4s 0.3s ease-in-out infinite; }


        .card1 .sc_icon { background:rgba(1,170,35,0.12); }
        .card2 .sc_icon { background:rgba(1,147,255,0.12); }
        .card3 .sc_icon { background:rgba(155,89,182,0.12); }
        .card4 .sc_icon { background:rgba(231,76,60,0.12); }
        .card5 .sc_icon { background:rgba(243,156,18,0.12); }
        .card6 .sc_icon { background:rgba(26,188,156,0.12); }
        .card7 .sc_icon { background:rgba(52,152,219,0.12); }

        @keyframes fc1{0%,100%{transform:translateZ(30px) translateY(0);}  50%{transform:translateZ(30px) translateY(-12px);}}
        @keyframes fc2{0%,100%{transform:translateZ(40px) translateY(0);}  50%{transform:translateZ(40px) translateY(12px);}}
        @keyframes fc3{0%,100%{transform:translateZ(25px) translateY(0);}  50%{transform:translateZ(25px) translateY(-10px);}}
        @keyframes fc4{0%,100%{transform:translateZ(35px) translateY(0);}  50%{transform:translateZ(35px) translateY(10px);}}
        @keyframes fc5{0%,100%{transform:translateZ(20px) translateY(0);}  50%{transform:translateZ(20px) translateY(-11px);}}
        @keyframes fc6{0%,100%{transform:translateZ(28px) translateY(0);}  50%{transform:translateZ(28px) translateY(9px);}}
        @keyframes fc7{0%,100%{transform:translateZ(15px) translateY(0);}  50%{transform:translateZ(15px) translateY(-9px);}}

        /* ── 5 STAT CHIPS ── */
        .stat_chip {
          position: absolute;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.85);
          border-radius: 12px;
          padding: 10px 14px;
          z-index: 4;
          box-shadow: 0 8px 22px rgba(0,0,0,0.10);
          display: flex;
          flex-direction: column;
          gap: 3px;
          pointer-events: none;
        }
        .stat_chip .chip_val { font-size:18px; font-weight:800; line-height:1; }
        .stat_chip .chip_lbl { font-size:10px; font-weight:500; opacity:0.55; text-transform:uppercase; letter-spacing:0.6px; }

        .chip_green  .chip_val { color:#01aa23; }
        .chip_blue   .chip_val { color:#0193ff; }
        .chip_orange .chip_val { color:#f39c12; }
        .chip_purple .chip_val { color:#9b59b6; }
        .chip_teal   .chip_val { color:#1abc9c; }

        /* positions — spread around the visual */
        .chip_tl  { top:4%;    left:2%;             animation:floatC1 7.0s       ease-in-out infinite; }
        .chip_tr  { top:4%;    right:2%;             animation:floatC2 8.0s 0.5s  ease-in-out infinite; }
        .chip_ml  { top:53%;   left:-5%;  transform:translateY(-50%); animation:floatC3 6.5s 1.0s ease-in-out infinite; }
        .chip_br  { bottom:6%; right:12%;             animation:floatC4 7.5s 0.8s  ease-in-out infinite; }
        .chip_bc  { bottom:8%; left:29%; margin-left:-52px; animation:floatC5 9.0s 0.3s ease-in-out infinite; }

        @keyframes floatC1{0%,100%{transform:translateY(0);}   50%{transform:translateY(-10px);}}
        @keyframes floatC2{0%,100%{transform:translateY(0);}   50%{transform:translateY(10px);}}
        @keyframes floatC3{0%,100%{transform:translateY(-50%);}50%{transform:translateY(calc(-50% - 9px));}}
        @keyframes floatC4{0%,100%{transform:translateY(0);}   50%{transform:translateY(-10px);}}
        @keyframes floatC5{0%,100%{transform:translateY(0);}   50%{transform:translateY(8px);}}

        /* ── RIGHT SIDE ENTRANCE ── */
        .b2_right_content h1                          { animation:fadeUp 0.7s 0.1s  ease both; }
        .banner5_text .custom-square-list li          { animation:fadeUp 0.6s ease both; }
        .banner5_text .custom-square-list li:nth-child(1) { animation-delay:0.2s; }
        .banner5_text .custom-square-list li:nth-child(2) { animation-delay:0.35s; }
        .banner5_text .custom-square-list li:nth-child(3) { animation-delay:0.5s; }
        .banner5_text .custom-square-list li:nth-child(4) { animation-delay:0.65s; }
        .b2_cta_btn { animation:fadeUp 0.6s 0.8s ease both; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }


        /* ═══════════════════════════════════════
           RESPONSIVE — ≤1024px  (tablets landscape)
        ═══════════════════════════════════════ */
        @media (max-width:1024px) {
          .b2_visual { height:580px; }
          .dashboard_mockup_3d { width:360px; height:360px; }
          .orb_5 { width:480px;height:480px;margin:-240px 0 0 -240px; }
          .orb_6 { width:560px;height:560px;margin:-280px 0 0 -280px; }
          .main_card { width:185px; padding:20px 16px; }
          .main_card .stat_number { font-size:36px; }
        }


        /* ═══════════════════════════════════════
           RESPONSIVE — ≤768px  (tablets portrait / large phones)
        ═══════════════════════════════════════ */
        @media (max-width:768px) {

          .b2_visual {
            height: 520px;
            margin-bottom: 32px;
          }

          /* scale down orbit rings */
          .orb_1 { width:120px;height:120px;margin:-60px  0 0 -60px; }
          .orb_2 { width:200px;height:200px;margin:-100px 0 0 -100px; }
          .orb_3 { width:280px;height:280px;margin:-140px 0 0 -140px; }
          .orb_4 { width:360px;height:360px;margin:-180px 0 0 -180px; }
          .orb_5 { width:440px;height:440px;margin:-220px 0 0 -220px; }
          .orb_6 { width:510px;height:510px;margin:-255px 0 0 -255px; }

          /* mockup */
          .dashboard_mockup_3d { width:300px; height:300px; }
          .main_card { width:165px; padding:18px 14px; }
          .main_card .stat_number { font-size:32px; }
          .main_card h4           { font-size:12px; }

          /* small cards — tighten padding */
          .small_card { padding:7px 10px; font-size:11px; gap:6px; }
          .sc_icon    { width:22px; height:22px; font-size:11px; }

          /* reposition remaining cards tighter */
          .card1 { top:2%;    left:1%; }
          .card2 { top:2%;    right:1%; }
          .card3 { top:40%;   left:-40%; }
          .card4 { top:40%;   right:-35%; }
          .card7 { bottom:2%; }

          /* stat chips — smaller */
          .stat_chip            { padding:8px 11px; border-radius:10px; }
          .stat_chip .chip_val  { font-size:15px; }
          .stat_chip .chip_lbl  { font-size:9px; }

          /* hide mid-left chip on tablet to avoid clutter */
          .chip_ml { display:none; }
        }


        /* ═══════════════════════════════════════
           RESPONSIVE — ≤600px  (large phones)
        ═══════════════════════════════════════ */
        @media (max-width:600px) {

          .b2_visual { height: 460px; }

          .orb_1 { width:100px;height:100px;margin:-50px  0 0 -50px; }
          .orb_2 { width:170px;height:170px;margin:-85px  0 0 -85px; }
          .orb_3 { width:240px;height:240px;margin:-120px 0 0 -120px; }
          .orb_4 { width:310px;height:310px;margin:-155px 0 0 -155px; }
          .orb_5 { width:380px;height:380px;margin:-190px 0 0 -190px; }
          .orb_6 { width:440px;height:440px;margin:-220px 0 0 -220px; }

          .dashboard_mockup_3d { width:260px; height:260px; }
          .main_card { width:150px; padding:16px 12px; }
          .main_card .stat_number { font-size:28px; }

          /* hide bottom-two small cards on small phones */
          .card5, .card6 { display:none; }

          /* reposition remaining cards tighter */
          .card1 { top:2%;    left:1%; }
          .card2 { top:2%;    right:1%; }
          .card3 { top:40%;   left:-40%; }
          .card4 { top:40%;   right:-35%; }
          .card7 { bottom:2%; }

          /* only 3 chips visible */
          .chip_tr, .chip_bc { display:none; }

          .stat_chip .chip_val { font-size:14px; }
        }


        /* ═══════════════════════════════════════
           RESPONSIVE — ≤480px  (small phones)
        ═══════════════════════════════════════ */
        @media (max-width:480px) {

          .b2_visual { height: 400px; }

          .orb_1 { width:85px; height:85px; margin:-42px  0 0 -42px; }
          .orb_2 { width:145px;height:145px;margin:-72px  0 0 -72px; }
          .orb_3 { width:205px;height:205px;margin:-102px 0 0 -102px; }
          .orb_4 { width:265px;height:265px;margin:-132px 0 0 -132px; }
          .orb_5 { width:320px;height:320px;margin:-160px 0 0 -160px; }
          .orb_6 { display:none; }

          .dashboard_mockup_3d { width:220px; height:220px; }
          .main_card { width:130px; padding:14px 10px; left:29%; top:57%; }
          .main_card .stat_number { font-size:24px; letter-spacing:-1px; }
          .main_card h4           { font-size:11px; }
          .main_card .stat_label  { font-size:9px; margin:0 0 8px; }

          /* only 4 small cards */
          .card3, .card4, .card5, .card6 { display:none; }
          .card1 { top:40%; left:-55%; }
          .card2 { top:5%; right:-2%; }
          .card7 { bottom:-10%; }

  /* 2 chips visible — top-left (2.4M Total Reach) and top-right (50K+ Active Brands) */
  .chip_bc, .chip_br, .chip_tr { display:none; }
  .chip_tl { top:10%; left:1%; }
  .chip_ml { top:-30%; left:60%; position:relative; transform:none; display:flex; }

          .stat_chip .chip_val { font-size:13px; }
          .stat_chip .chip_lbl { font-size:8px; }

          .small_card { padding:6px 9px; font-size:10px; }
          .sc_icon    { width:20px; height:20px; font-size:10px; }
        }


/* ═══════════════════════════════════════
   RESPONSIVE — ≤360px  (extra-small phones)
═══════════════════════════════════════ */
@media (max-width:360px) {

  .b2_visual { height: 380px; }

  .orb_1 { width:70px; height:70px; margin:-35px  0 0 -35px; }
  .orb_2 { width:120px;height:120px;margin:-60px  0 0 -60px; }
  .orb_3 { width:172px;height:172px;margin:-86px  0 0 -86px; }
  .orb_4 { width:224px;height:224px;margin:-112px 0 0 -112px; }
  .orb_5, .orb_6 { display:none; }

  .dashboard_mockup_3d { width:185px; height:185px; }
  .main_card { width:115px; padding:12px 9px;left:24% }
  .main_card .stat_number { font-size:20px; }
  .main_card h4           { font-size:10px; }

  /* 3 small cards visible — card1 top-left, card2 top-right, card7 bottom-center */
  .card3, .card4, .card5, .card6 { display:none; }
  .card1 { top:1%;    left:-30%; }
  .card2 { top:1%;    right:0%; }
  .card7 { bottom:-15%; left:27%; margin-left:-58px; }

  /* 2 chips visible — top-left (2.4M Total Reach) and top-right (50K+ Active Brands) */
  .chip_bc, .chip_br, .chip_tr { display:none; }
  .chip_tl { top:2%; left:1%; }
  .chip_ml { top:-35%; left:60%; position:relative; transform:none; display:flex; }

  .stat_chip .chip_val { font-size:12px; }

  .small_card { padding:5px 8px; font-size:10px; gap:5px; }
  .sc_icon    { width:18px; height:18px; font-size:9px; }
}

      `}</style>

      <section
        className="banner_rightside_content section_padding b2_section"
        id="company"
      >
        <canvas className="b2_canvas" ref={canvasRef} />
        <div className="b2_aurora b2_aurora_1" />
        <div className="b2_aurora b2_aurora_2" />
        <div className="b2_aurora b2_aurora_3" />

        <div className="container">
          <div className="row align-items-center">
            {/* ── LEFT SIDE ── */}
            <div className="col-lg-7">
              <div className="b2_visual">
                {/* 6 orbit rings */}
                <div className="orb orb_1">
                  <div className="orb_dot od_1" />
                </div>
                <div className="orb orb_2">
                  <div className="orb_dot od_2" />
                </div>
                <div className="orb orb_3">
                  <div className="orb_dot od_3" />
                </div>
                <div className="orb orb_4">
                  <div className="orb_dot od_4" />
                </div>
                <div className="orb orb_5">
                  <div className="orb_dot od_5" />
                </div>
                <div className="orb orb_6">
                  <div className="orb_dot od_6" />
                </div>

                {/* ── 5 STAT CHIPS ── */}
                <div className="stat_chip chip_green chip_tl">
                  <span className="chip_val">10X</span>
                  <span className="chip_lbl">Wide Reach</span>
                </div>

                <div className="stat_chip chip_blue chip_tr">
                  <span className="chip_val">98%</span>
                  <span className="chip_lbl">Satisfaction</span>
                </div>

                <div className="stat_chip chip_orange chip_ml">
                  <span className="chip_val">Trusted</span>
                  <span className="chip_lbl">Active Brands</span>
                </div>

                <div className="stat_chip chip_teal chip_br">
                  <span className="chip_val">High</span>
                  <span className="chip_lbl">Society Network</span>
                </div>

                <div className="stat_chip chip_purple chip_bc">
                  <span className="chip_val">Fast</span>
                  <span className="chip_lbl">PACED</span>
                </div>

                {/* 3D mockup */}
                <div
                  className="dashboard_mockup_3d"
                  ref={ref}
                  onMouseMove={handleMove}
                  onMouseLeave={handleLeave}
                >
                  <div className="dashboard_layer main_card">
                    <h4>Ad Performance</h4>
                    <div className="stat_number">↑{count}%</div>
                    <p className="stat_label">Engagement this month</p>
                    <span className="badge">
                      <span className="live_dot" /> LIVE
                    </span>
                  </div>

                  <div className="dashboard_layer small_card card1">
                    <div className="sc_icon">✅</div>
                    <span>Verified Audience</span>
                  </div>
                  <div className="dashboard_layer small_card card2">
                    <div className="sc_icon">🚀</div>
                    <span>Action Focused</span>
                  </div>
                  <div className="dashboard_layer small_card card3">
                    <div className="sc_icon">💰</div>
                    <span>Secure Payments</span>
                  </div>
                  <div className="dashboard_layer small_card card4">
                    <div className="sc_icon">📊</div>
                    <span>Live Analytics</span>
                  </div>
                  <div className="dashboard_layer small_card card5">
                    <div className="sc_icon">🎯</div>
                    <span>Hyperlocal Targeting</span>
                  </div>
                  <div className="dashboard_layer small_card card6">
                    <div className="sc_icon">🔒</div>
                    <span>Strong Recall</span>
                  </div>
                  <div className="dashboard_layer small_card card7">
                    <div className="sc_icon">⚡</div>
                    <span>Flexible Ad Formats</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT SIDE ── */}
            <div className="col-lg-5 b2_right_content">
              <h1 className="gradient-text">{title}</h1>
              <div className="banner5_text">
                <ul className="custom-square-list">
                  {features.map((item, index) => (
                    <li key={index}>
                      <h3>{item.heading}</h3>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
                <div className="b2_cta_btn mt-5">
                  <GetStartedBtn accountType="company" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner_Two;
