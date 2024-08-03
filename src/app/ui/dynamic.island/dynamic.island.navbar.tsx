import { be_vietnam_pro } from '@/app/fonts/fonts';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ThemeToggleButton from '../theme/themeToggleButton';
import Menu from './menus/menus';

const navLinkCommonClassName = `${be_vietnam_pro.className}
                                    cursor-pointer
                                    hover:bg-white
                                    hover:text-black
                                    dark:hover:bg-black
                                    dark:hover:text-white
                                    py-2 rounded-full px-5
                                    transition-all duration-300 flex justify-center items-center
                                    w-[10rem]`;

// const navlinkContainerVariants = {
//   open: {
//     clipPath: 'circle(1200px at 50px 50px)',
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//     },
//   },
//   closed: {
//     clipPath: 'circle(1200px at 50px 50px)',
//     transition: {
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

export default function DynamicIslandNavbar() {
  const [isNavlinkHovered, setIsNavlinkHovered] = useState(false);
  const commonNavlinkFunctions = {
    onMouseEnter: () => setIsNavlinkHovered(true),
    onMouseLeave: () => setIsNavlinkHovered(false),
    transition: {
      duration: '200',
      type: 'spring',
      damping: 500,
      stiffness: 20,
    },
  };

  useEffect(() => {
    console.log(isNavlinkHovered);
  }, [isNavlinkHovered]);

  return (
    <motion.div
      className="fixed left-0 top-10 z-10 flex w-full justify-center bg-none"
      animate={isNavlinkHovered ? 'open' : 'closed'}
    >
      <motion.div
        className="flex flex-col gap-10 rounded-[5rem] bg-black/90 px-5 py-3 shadow-2xl shadow-black backdrop-blur-md dark:bg-white/90"
        // variants={navlinkContainerVariants}
      >
        <motion.div className="flex justify-center gap-5 rounded-full text-white dark:text-black">
          <motion.div
            {...commonNavlinkFunctions}
            className={navLinkCommonClassName}
          >
            Contact Me
          </motion.div>

          <ThemeToggleButton />

          <motion.div
            {...commonNavlinkFunctions}
            className={navLinkCommonClassName}
          >
            Menus
            {/* Hello */}
          </motion.div>
        </motion.div>

        {isNavlinkHovered && <Menu />}
      </motion.div>
    </motion.div>
  );
}
