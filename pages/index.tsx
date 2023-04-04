import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import Sponsor from "@/components/sponsor";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="relative px-6 py-28 lg:w-1/2 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#f59a44] sm:text-6xl">
                <Balancer>Hack and learn with hackodex</Balancer>
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#e3c598]">
                Your open source journey begins with a pull request. We&apos;ve
                curated a list of beginner friendly issues for you to check out.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <motion.a
                  href="/register"
                  className="rounded-md bg-[#f59a44] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#e3c598] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start hacking
                </motion.a>
                <motion.a
                  href="/info"
                  className="text-base font-semibold leading-7 text-[#e3c598]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more <span aria-hidden="true">→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative px-6 lg:px-8">
            <img src="/octocat_main.png" alt="img" className="" />
           
        </div>
      </div>
      <div className="relative px-6 py-10 lg:px-8 ">
        <h1 className="mb-9 text-center text-xl text-[#e3c598]">
          In Collaboration with
        </h1>
        <Sponsor/>
      </div>
    </Layout>
  );
}
