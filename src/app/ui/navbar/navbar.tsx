import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { UserContext } from "@/app/context/user.content";
import urls from "@/shared/enums/urls";
import type { Profile } from "@/shared/types/user.type";
import { useRouter } from "next/navigation";
import { Skeleton } from "antd";

/* Icons */
import { HiMiniBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";

import "./_navbar.scss";
import ThemeToggleButton from "../theme/themeToggleButton";
import useAuth from "@/app/hooks/useAuth";

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
    display: "none",
    height: "0",
  },
  visible: {
    opacity: 1,
    scale: 1,
    display: "flex",
    height: "100%",
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
  const { setProfile } = useContext(UserContext);
  const [navActive, setNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useRouter();
  const {
    data: profileData,
    isPending: isValidationPending,
    error,
  } = useQuery<Profile>({
    queryKey: [urls.profile],
  });

  useEffect(() => {
    if (profileData) {
      setProfile(profileData);
    }

    if (error) {
      navigate.push("/sign-in");
    }
  }, [profileData]);

  if (!profileData) {
    return <></>;
  }

  if (isValidationPending) {
    return (
      <Skeleton.Button
        active={true}
        size={"default"}
        shape={"default"}
        block={true}
        style={{
          height: "5rem",
        }}
      />
    );
  }

  return (
    <motion.nav
      animate={{
        height: navActive ? "100vh" : "",
      }}
      className={`fixed top-0 w-full p-5 z-10 ${
        (isScrolled || navActive) && "nav-gradient"
      }`}
    >
      <div className="flex justify-between items-center">
        <button type="button" onClick={() => setNavActive(!navActive)}>
          {navActive ? (
            <RxCross2 className="text-6xl" />
          ) : (
            <HiMiniBars2 className="text-6xl" />
          )}
        </button>
      </div>

      <motion.ul
        initial="hidden"
        animate={navActive ? "visible" : "hidden"}
        variants={navVariants}
        className="h-full flex w-full flex-col items-start justify-center text-4xl gap-5"
      >
        <motion.li variants={liVariants} className="pl-5">
          <ThemeToggleButton />
        </motion.li>
        <motion.li variants={liVariants} className="navlink">
          <Link href={"/"}>Home</Link>
        </motion.li>
        <motion.li variants={liVariants} className="navlink">
          <Link href={"/"}>Explore</Link>
        </motion.li>
        <motion.li variants={liVariants} className="navlink">
          <Link href={"/"}>Contacts</Link>
        </motion.li>
        <motion.li
          variants={liVariants}
          className="text-xl pl-[1.5rem] hover:text-red-500"
        >
          <button onClick={logout} type="button">
            Logout
          </button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
