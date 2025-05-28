import React from "react";
import useMeasure from "react-use-measure";
import {
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

interface ContactBarProps {
  open: boolean;
  setOpen: (e: boolean) => void;
}
export const ContactBar = ({ open, setOpen }: ContactBarProps) => {

  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0 h-[75vh] w-[60vw] overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}

          >
            <div className="relative z-0 h-full p-30">
              <header className='w-full mb-20 no-wrap flex space-y-4'>
                <button className=' text-white font-normal text-2xl'>Ready to talk about
                  <span className='text-primary text-4xl font-[Titillium] lowercase italic'> your </span> project?</button>
              </header>
              <div className="max-w-2xl space-y-4 text-neutral-400">
                <h2 className="text-4xl font-bold text-neutral-200">
                  Have an idea for a website and need an experienced developer
                  or designer?
                </h2>
                <p>
                  Together, we’ll create a modern and
                  functional project tailored to your needs. Drop me a message,
                  and let’s discuss the details!
                </p>
              </div>
              <div className=' text-white flex w-full mt-10 justify-between items-center'>
                <div className="flex mr-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f60797" className="size-6 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p className='text-justify truncate'>+48 693 518 447</p>
                </div>
                <div className="flex mr-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f60797" className="size-6 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <p className='text-justify truncate'>megfa@yahoo.com</p>
                </div>
                <div className="flex mr-5 items-center flex-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f60797" className="size-6 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p className='text-justify truncate'>Warsaw, Poland, Europe</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};