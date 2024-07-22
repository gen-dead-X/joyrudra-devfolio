import "./_ThemeToggleButton.scss";
import { useContext } from "react";
import { LuSunMedium } from "react-icons/lu";
import { UserContext } from "@/app/context/user.content";
import { MdDarkMode } from "react-icons/md";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeToggleButton() {
  const { darkMode, setDarkMode } = useContext(UserContext);

  function handleThemeChange() {
    if (darkMode) {
      document.querySelector("body")?.classList.remove("dark");
      localStorage.setItem("dark", "false");
      setDarkMode(false);

      return;
    }

    document.querySelector("body")?.classList.add("dark");
    setDarkMode(true);
    localStorage.setItem("dark", "true");
  }

  return (
    <motion.div>
      <motion.button
        type="button"
        onClick={handleThemeChange}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0 }}
        className="text-4xl"
      >
        {!darkMode ? (
          <LuSunMedium className="h-full w-full p-1 hover:text-amber-500" />
        ) : (
          <BsFillCloudMoonFill className="h-full w-full p-1 hover:text-slate-500" />
        )}
      </motion.button>
    </motion.div>
  );
}
