import { be_vietnam_pro } from '@/app/fonts/fonts';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const navLinkCommonClassName = `${be_vietnam_pro.className}
                                    cursor-pointer
                                    hover:bg-white
                                    hover:text-black
                                    dark:hover:bg-black
                                    dark:hover:text-white
                                    p-2 rounded-full px-5
                                    transition-all duration-300`;

const navlinkContainerVariants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

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
      className="fixed left-0 top-10 z-50 flex w-full justify-center bg-none"
      animate={isNavlinkHovered ? 'open' : 'closed'}
    >
      <motion.div variants={navlinkContainerVariants}>
        <motion.div className="flex scroll-px-10 gap-5 rounded-full bg-black px-5 py-3 text-white dark:bg-white dark:text-black">
          <motion.div
            {...commonNavlinkFunctions}
            className={navLinkCommonClassName}
          >
            Contact Me
          </motion.div>

          <motion.div
            {...commonNavlinkFunctions}
            className={navLinkCommonClassName}
          >
            Contact Me
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
