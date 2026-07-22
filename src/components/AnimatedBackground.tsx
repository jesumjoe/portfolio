import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * AnimatedBackground — topographic contour line texture.
 * Organic SVG path curves drift very slowly across the background,
 * mimicking the topo-map aesthetic of landonorris.com.
 * Now includes a parallax effect tied to scroll position.
 */
const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  
  // Use a much softer spring for a more "floaty" and fluid parallax effect
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 30, // Lower stiffness = softer spring
    damping: 15,   // Lower damping = more bounciness/fluidity
    mass: 1,
    restDelta: 0.001
  });

  // Moves the background up at 15% of the scroll speed for a subtle parallax effect
  const y = useTransform(smoothScrollY, (value) => -(value * 0.15));

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
    >
      <motion.div
        style={{ 
          y,
          // Force hardware acceleration to prevent browser paint lag during scroll
          willChange: "transform",
          z: 0
        }}
        className="w-full h-[150%]"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          className="topo-drift"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary/20"
          >
            {/* Outermost contour — spans full canvas */}
            <path d="M -150,480 C 60,100 480,20 900,160 C 1320,300 1560,140 1720,380 C 1880,620 1820,840 1480,880 C 1140,920 660,960 320,800 C -20,640 -360,860 -150,480 Z" />

            {/* Second ring */}
            <path d="M -60,490 C 110,150 460,80 870,210 C 1280,340 1500,200 1660,420 C 1820,640 1760,830 1440,870 C 1120,910 670,930 360,790 C 50,650 -280,830 -60,490 Z" />

            {/* Third ring */}
            <path d="M 40,498 C 170,200 440,140 840,265 C 1240,390 1440,265 1600,460 C 1760,655 1700,820 1400,860 C 1100,900 680,905 400,780 C 120,655 -200,800 40,498 Z" />

            {/* Fourth */}
            <path d="M 140,506 C 230,250 420,200 810,320 C 1200,440 1380,330 1540,500 C 1700,670 1640,810 1360,850 C 1080,890 690,880 440,770 C 190,660 -120,770 140,506 Z" />

            {/* Fifth */}
            <path d="M 230,515 C 290,295 400,255 780,370 C 1160,485 1320,390 1480,545 C 1640,700 1580,800 1320,840 C 1060,880 700,855 480,760 C 260,665 -40,740 230,515 Z" />

            {/* Sixth — getting tighter */}
            <path d="M 320,524 C 360,340 400,305 760,415 C 1120,525 1270,445 1420,585 C 1570,725 1520,795 1285,830 C 1050,865 710,832 520,748 C 330,664 40,715 320,524 Z" />

            {/* Seventh */}
            <path d="M 400,534 C 420,385 460,355 730,452 C 1000,549 1190,490 1350,610 C 1510,730 1460,795 1240,825 C 1020,855 720,810 560,735 C 400,660 120,688 400,534 Z" />

            {/* Innermost — smallest, center region */}
            <path d="M 500,545 C 490,430 540,410 720,480 C 900,550 1060,510 1200,610 C 1340,710 1320,790 1140,815 C 960,840 750,800 620,740 C 490,680 510,660 500,545 Z" />

            {/* Extra accent curves — partial arcs for edge interest */}
            <path d="M -300,200 C -100,50 200,0 500,120 C 800,240 1000,150 1200,280 C 1400,410 1380,600 1100,650" />
            <path d="M 1500,700 C 1600,600 1700,450 1650,280 C 1600,110 1500,50 1380,80" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
