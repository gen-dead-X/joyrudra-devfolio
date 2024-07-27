import React, { useEffect, useState } from 'react';
import Link from 'next/link';

/* Icons */
import { HiMiniBars2 } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { motion, type Variants } from 'framer-motion';

import './_navbar.scss';
import ThemeToggleButton from '../theme/themeToggleButton';
import useAuth from '@/app/hooks/useAuth';

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    display: 'none',
    height: '0',
  },
  visible: {
    opacity: 1,
    scale: 1,
    display: 'flex',
    height: '100%',
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const liVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: -500,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      animate={{
        height: navActive ? '100vh' : '',
      }}
      className={`fixed top-0 z-10 w-full p-5 ${
        (isScrolled || navActive) && 'nav-gradient'
      }`}
    >
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => setNavActive(!navActive)}>
          {navActive ? (
            <RxCross2 className="text-6xl" />
          ) : (
            <HiMiniBars2 className="text-6xl" />
          )}
        </button>
      </div>

      <motion.ul
        animate={navActive ? 'visible' : 'hidden'}
        variants={navVariants}
        className="flex h-full w-full flex-col items-start justify-center gap-5 text-4xl"
      >
        <motion.li variants={liVariants} className="pl-5">
          <ThemeToggleButton />
        </motion.li>
        <motion.li variants={liVariants} className="navlink">
          <Link href={'/'}>Home</Link>
        </motion.li>
        <motion.li variants={liVariants} className="navlink">
          <Link href={'#explore'}>Explore</Link>
        </motion.li>
        <motion.li variants={liVariants} className="navlink">
          <Link href={'/'}>Contacts</Link>
        </motion.li>
        <motion.li
          variants={liVariants}
          className="pl-[1.5rem] text-xl hover:text-red-500"
        >
          <button onClick={logout} type="button">
            Logout
          </button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
