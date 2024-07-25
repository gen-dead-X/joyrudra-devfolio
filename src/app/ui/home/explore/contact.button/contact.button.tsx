import { motion } from 'framer-motion';

type Props = {
  isContainerView: boolean;
};

const DURATION = 0.25;
const STAGGER = 0.025;

export default function ContactButton({ isContainerView }: Readonly<Props>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={isContainerView && { opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 2,
        duration: 0.2,
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
      className="flex h-[12rem] w-[12rem] items-center justify-center rounded-full bg-black dark:bg-white"
    >
      <motion.button
        type="button"
        initial="initial"
        whileHover="hovered"
        onClick={() => console.log('Clicked')}
        className="relative block cursor-none overflow-hidden whitespace-nowrap text-2xl font-bold text-white dark:text-black"
      >
        <div>
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER,
            }}
            className="inline-block"
          >
            HOVER ME
          </motion.span>
        </div>
        <div className="absolute inset-0">
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER,
            }}
            className="inline-block"
          >
            CONTACT ME
          </motion.span>
        </div>
      </motion.button>
    </motion.div>
  );
}
