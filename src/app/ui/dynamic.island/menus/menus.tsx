import { motion } from 'framer-motion';
import React from 'react';

export default function Menu() {
  return (
    <div className="flex gap-5 px-20 py-5 pb-20">
      <div
        data-name="left"
        className="h-[20rem] w-[15rem] overflow-hidden rounded-[3rem] object-cover"
      >
        <img
          src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="profile"
          className="h-full w-full object-cover"
        />
      </div>

      <motion.div
        data-name="right"
        className="flex flex-col justify-center gap-5 text-white dark:text-black"
      >
        <div className="flex items-center gap-2">
          <div className="relative z-0 h-3 w-3 animate-pulse rounded-full bg-green-400">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-5 w-5 animate-ping" />
          </div>
          <p className="bg-green-700/30 text-xs text-green-400">
            Available For Work
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <h4 className="text-3xl">Joyrudra Biswas</h4>
          <p>Full Stack Developer</p>
        </div>
      </motion.div>
    </div>
  );
}
