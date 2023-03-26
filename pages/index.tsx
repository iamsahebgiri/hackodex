import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";


export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
  return (
    <Layout>
      <motion.div
        className="relative px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={variants}
        >
        <motion.div
        className="mx-auto max-w-2xl py-32"
        variants={variants}
        >
        <motion.div
        className="text-center"
        variants={variants}
        >
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#f59a44] sm:text-6xl">
              <Balancer>Hack and learn with hackodex</Balancer>
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#e3c598]">
              Your open source journey begins with a pull request. We&apos;ve curated
              a list of beginner friendly issues for you to check out.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                href="#"
                className="rounded-md bg-[#f59a44] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#e3c598] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start hacking
              </motion.a>
              <motion.a
                href="#"
                className="text-base font-semibold leading-7 text-[#e3c598]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </motion.div>
    </motion.div>  
    </Layout>
  );
}
