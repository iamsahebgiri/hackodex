import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <div className="fixed h-screen w-full bg-[#6e352c]" />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Hackodex logo"
              width="200"
              height="200"
              className="mr-2 rounded-sm"
            />
            {/*<p>Hackodex &apos;23</p>*/}
          </Link>
          <div>
            {/* <AnimatePresence>
              {!session && status !== "loading" ? (
                <motion.button
                  className="rounded-full border border-[#e3c598] bg-[#e3c598] p-2 px-4 text-sm text-[#6e612f] transition-all hover:bg-[#6e612f] hover:text-[#e3c598]"
                  onClick={() => setShowSignInModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Sign In
                </motion.button>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence> */}
          </div>
        </div>
      </div>
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      {/* <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="text-gray-500">
          Binary Tree
        </p>
      </div> */}
    </>
  );
}
