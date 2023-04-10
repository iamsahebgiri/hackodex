import {
  RegistrationInstruction,
  registrationInstructions,
  contributionInstructions,
} from "../seed";
import { motion } from "framer-motion";
import { useSignInModal } from "../components/layout/sign-in-modal";
import Link from "next/link";
import Head from "next/head";

const RegisterPage = () => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  return (
    <>
      <Head>
        <title>Hackodex - A Month-Long Open-Source Coding Event for College Students</title>
      </Head>
      <div className="mb-4 flex items-center justify-center md:mb-8">
        <Link href="/" className="mx-auto cursor-pointer text-center">
          <img className="h-14" src="/logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="flex h-screen justify-center bg-[#6e352c] p-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="mx-auto"
        >
         
          <div className="">
            <h1 className="mb-6 text-center text-2xl font-bold text-[#f59a44] md:mb-12 md:mt-0 md:text-left md:text-4xl">
              Mentor Registration Instructions
            </h1>

            {registrationInstructions.map(
              (instruction: RegistrationInstruction) => (
                <motion.div
                  key={instruction.step}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="mb-4 flex"
                >
                  <div className="flex">
                    <div className="flex h-8 w-8 shrink-0 grow-0 items-center justify-center rounded-full bg-[#e3c598] ">
                      <span className="text-center font-bold text-white">
                        {instruction.step}
                      </span>
                    </div>
                    <div className="">
                      <p className="pl-2 text-[#f59a44]">
                        {instruction.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ),
            )}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="mt-10 flex flex-col justify-between sm:flex-row"
            >
              <motion.a
                href="https://bit.ly/regmtrhackodex"
                className="mb-4 rounded bg-[#cf5230] px-4 py-2 text-center text-white sm:mb-0 sm:mr-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register as a Mentor
              </motion.a>

              <SignInModal />
              {/* <motion.a
            href="/repos"
            className="rounded bg-[#f59a44] py-2 px-4 text-white text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Start Contributing
          </motion.a> */}
            <motion.a
          href="https://discord.gg/gpwyF73trn"
          className="my-auto grid grid-flow-col rounded-md bg-[#7289DA] px-3.5 py-1.5 text-base font-semibold leading-7 text-[#fff]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex justify-center">
          <img
            src="/discord.png"
            width="24px"
            height="24px"
            className="my-auto mx-1"
          />
          <span>Discord</span>
          </div>
        </motion.a>
            </motion.div>

            <div className="flex justify-center md:justify-end">
            <motion.a
                  href="/register"
                  className="text-base font-semibold leading-7 text-[#e3c598] mx-auto md:mx-0 my-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Participate as a Contributor <span aria-hidden="true">→</span>
                </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
      <div className="md:my-10">&nbsp;</div>
    </>
  );
};

export default RegisterPage;
