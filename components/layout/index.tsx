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
      <div className="w-full bg-[#6e352c]" />
        <div className="flex h-16 max-w-screen-xl items-center justify-center md:justify-start">
          <Link href="/" className="flex items-center font-display text-2xl mx-auto md:mx-2">
            <Image
              src="/logo.png"
              alt="Hackodex logo"
              width="200"
              height="200"
              className="md:ml-16 rounded-sm"
            />
          </Link>
      </div>
      <main className="flex w-full flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
