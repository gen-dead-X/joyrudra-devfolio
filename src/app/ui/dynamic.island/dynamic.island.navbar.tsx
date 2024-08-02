import { be_vietnam_pro } from '@/app/fonts/fonts';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ThemeToggleButton from '../theme/themeToggleButton';

const navLinkCommonClassName = `${be_vietnam_pro.className}
                                    cursor-pointer
                                    hover:bg-white
                                    hover:text-black
                                    dark:hover:bg-black
                                    dark:hover:text-white
                                    py-2 rounded-full px-5
                                    transition-all duration-300 flex justify-center items-center`;

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
        className="flex flex-col gap-10 rounded-3xl bg-black px-5 py-3 dark:bg-white"
        // variants={navlinkContainerVariants}
      >
        <motion.div className="flex gap-5 rounded-full text-white dark:text-black">
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
          </motion.div>
        </motion.div>
        <div className="flex gap-5 px-20 py-5">
          <div className="h-[20rem] w-[15rem] overflow-hidden rounded-3xl object-cover">
            <img
              src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="profile-image"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div>
              <div className="relative z-0 h-3 w-3 animate-pulse rounded-full bg-green-500">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-5 w-5 animate-ping" />
              </div>
              <p>Available For Work</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
