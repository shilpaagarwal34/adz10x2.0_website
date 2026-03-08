//-------------------------CODE PART:2----------------------------
import React from "react";
import {
  FaBroadcastTower,
  FaStore,
  FaBuilding,
  FaClipboardList,
  FaDoorOpen,
  FaCalendarAlt,
} from "react-icons/fa";
import data from "../../data.json";

const Inventory = () => {
  const { title, subtitle, items } = data.inventory;

  const iconMap = {
    "Digital Assets": FaBroadcastTower,
    "Society Kiosk Activities": FaStore,
    "Lift Branding Panels": FaBuilding,
    "Notice Board Advertising": FaClipboardList,
    "Main Gate Branding": FaDoorOpen,
    "Society Event Sponsorship": FaCalendarAlt,
  };

  return (
    <>
      <style>{`

/* SECTION */

.inventory_section{
position:relative;
background:linear-gradient(180deg,rgba(1,150,228,0.06),rgba(9,74,23,0.06));
}

/* PATH CONTAINER */

.inventory_path_shell{
position:relative;
padding:50px 10px;

/* hide scrollbar */
overflow-x:hidden;

/* enable 3D depth */
perspective:1200px;
}

/* GRID */

.inventory_path_grid{
width:100%;
display:grid;
grid-template-columns:repeat(6,minmax(180px,1fr));
gap:18px;
align-items:start;
position:relative;
z-index:2;
}

/* PATH LINE */

.inventory_path_line{
position:absolute;
left:0;
right:0;
top:50%;
height:12px;
border-radius:999px;
transform:translateY(-50%);
background:linear-gradient(90deg,#01AA23,#0193FF);
box-shadow:0 10px 24px rgba(0,0,0,0.2);
}

/* CARD */

.inventory_path_node{

position:relative;

border-radius:18px;
background:white;
padding:18px;

min-height:170px;

border:1px solid rgba(255,255,255,0.6);

box-shadow:0 15px 25px rgba(0,0,0,0.12);

transition:
transform .35s ease,
box-shadow .35s ease;

/* fix blur */
backface-visibility:hidden;
transform-style:preserve-3d;
}

/* ZIG ZAG */

.inventory_path_node.up{
transform:translateY(-32px);
}

.inventory_path_node.down{
transform:translateY(32px);
}

/* CONNECTOR LINE */

.inventory_path_node::before{
content:"";
position:absolute;
left:50%;
width:2px;
height:26px;
background:rgba(45,83,145,0.35);
transform:translateX(-50%);
}

.inventory_path_node.up::before{bottom:-26px;}
.inventory_path_node.down::before{top:-26px;}

/* DOT */

.inventory_path_node::after{
content:"";
position:absolute;
left:50%;
width:10px;
height:10px;
border-radius:50%;
background:#1d6fe2;
transform:translateX(-50%);
box-shadow:0 0 0 3px rgba(29,111,226,0.2);
}

.inventory_path_node.up::after{bottom:-31px;}
.inventory_path_node.down::after{top:-31px;}

/* ICON */

.inventory_icon{
width:38px;
height:38px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(135deg,#01AA23,#0193FF);
color:white;
font-size:16px;
}

/* TITLE ROW */

.inventory_path_node_title{
display:flex;
align-items:center;
gap:10px;
margin-bottom:10px;
}

/* TITLE */

.inventory_path_node h3{
font-size:20px;
font-weight:700;
margin:0;
}

/* DESCRIPTION */

.inventory_path_node p{
font-size:14px;
color:#3f4c58;
}

/* STEP BADGE */

.inventory_step_badge{
position:absolute;
right:12px;
top:12px;
width:24px;
height:24px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:12px;
font-weight:800;
background:linear-gradient(135deg,#01AA23,#0193FF);
color:white;
}

/* CLEAN 3D POP OUT (NO BLUR) */

.inventory_path_node.up:hover{
transform:
translateY(-32px)
translateZ(60px)
scale(1.08);

box-shadow:0 40px 70px rgba(0,0,0,0.35);
z-index:10;
}

.inventory_path_node.down:hover{
transform:
translateY(32px)
translateZ(60px)
scale(1.08);

box-shadow:0 40px 70px rgba(0,0,0,0.35);
z-index:10;
}

      `}</style>

      <section className="inventory_section section_padding">
        <div className="container">
          <h1 className="gradient-text mb-2">{title}</h1>
          <p className="mb-4">{subtitle}</p>

          <div className="inventory_path_shell">
            <div className="inventory_path_line"></div>

            <div className="inventory_path_grid">
              {items.map((item, index) => (
                <article
                  className={`inventory_path_node ${
                    index % 2 === 0 ? "up" : "down"
                  }`}
                  key={item.title}
                >
                  <span className="inventory_step_badge">
                    {index + 1}
                  </span>

                  <div className="inventory_path_node_title">
                    <span className="inventory_icon">
                      {React.createElement(
                        iconMap[item.title] || FaBroadcastTower
                      )}
                    </span>

                    <h3>{item.title}</h3>
                  </div>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inventory;



//-------------------------CODE PART:0----------------------------
// import React from "react";
// import {
//   FaBroadcastTower,
//   FaStore,
//   FaBuilding,
//   FaClipboardList,
//   FaDoorOpen,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import data from "../../data.json";

// const Inventory = () => {
//   const { title, subtitle, items } = data.inventory;
//   const iconMap = {
//     "Digital Assets": FaBroadcastTower,
//     "Kiosk / Canopy": FaStore,
//     "Lift Branding Panels": FaBuilding,
//     "Notice Board Sponsorship": FaClipboardList,
//     "Gate Entry/Exit Branding": FaDoorOpen,
//     "Event Sponsorship": FaCalendarAlt,
//   };

//   return (
//     <section className="inventory_section section_padding">
//       <div className="container">
//         <h1 className="gradient-text mb-2">{title}</h1>
//         <p className="mb-4">{subtitle}</p>

//         <div className="inventory_path_shell">
//           <div className="inventory_path_line" />
//           <div className="inventory_path_grid">
//           {items.map((item, index) => (
//               <article
//                 className={`inventory_path_node ${index % 2 === 0 ? "up" : "down"}`}
//                 key={item.title}
//               >
//                 <span className="inventory_step_badge">{index + 1}</span>
//                 <div className="inventory_path_node_title">
//                   <span className="inventory_icon">
//                     {React.createElement(iconMap[item.title] || FaBroadcastTower)}
//                   </span>
//                   <h3>{item.title}</h3>
//                 </div>
//                 <p>{item.description}</p>
//               </article>
//           ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Inventory;
