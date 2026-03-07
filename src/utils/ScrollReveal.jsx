// import React, { useEffect, useRef, useState } from "react";

// const ScrollReveal = ({ children }) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.2, // trigger when 20% visible
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`scroll-reveal ${isVisible ? "show" : ""}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default ScrollReveal;

import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // trigger when 20% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          /* Default scroll reveal */
          .scroll-reveal {
            opacity: 0;
            transform: translateY(40px) scale(0.95); /* start slightly smaller */
            transition: all 0.6s ease-out; /* smooth animation */
          }

          .scroll-reveal.show {
            opacity: 1;
            transform: translateY(0) scale(1.05); /* slightly bigger pop */
          }
        `}
      </style>

      <div
        ref={ref}
        className={`scroll-reveal ${isVisible ? "show" : ""}`}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollReveal;