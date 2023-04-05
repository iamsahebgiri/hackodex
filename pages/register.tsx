import { RegistrationInstruction, registrationInstructions } from "../seed";
import { motion } from "framer-motion";
import { useSignInModal } from "../components/layout/sign-in-modal";
import  Link  from "next/link";

const RegisterPage = () => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  return (
    <>
    <div className="flex h-screen items-center justify-center bg-[#6e352c] p-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="mx-auto max-w-3xl"
      >

      <div className="md:mb-8 mb-4 flex items-center mt-28 md:mt-0">
        <Link href="/" className="cursor-pointer mx-auto">
          <img className="h-14" src="/logo.png" alt="Logo" />
        </Link>
      </div>
        <h1 className="md:mb-12 mb-6 md:text-4xl text-2xl font-bold md:mt-0 text-center md:text-left text-[#f59a44]">
          Mentor Registration Instructions
        </h1>

        {registrationInstructions.map(
          (instruction: RegistrationInstruction) => (
            <motion.div
              key={instruction.step}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="mb-4 grid grid-flow-col lg:auto-cols-max"
            >
              <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-[#e3c598] ">
                <span className="font-bold text-white text-center">{instruction.step}</span>
              </div>
              <p className="pl-2 text-[#f59a44]">{instruction.description}</p>
            </motion.div>
          ),
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="mt-20 flex flex-col justify-between sm:flex-row"
        >
          <motion.a
            href="https://forms.gle/12hNqJos3uJPtMSj7"
            className="mb-4 rounded bg-[#cf5230] py-2 px-4 text-white sm:mb-0 sm:mr-4 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.a>

          <SignInModal/>
          {/* <motion.a
            href="/repos"
            className="rounded bg-[#f59a44] py-2 px-4 text-white text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Start Contributing
          </motion.a> */}
        </motion.div>
      </motion.div>
    </div>
    <div className="md:my-10">&nbsp;</div>
    </>
  );
};

export default RegisterPage;
