import React from "react";
import cx from "classnames";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import localFont from "@next/font/local";
import { Analytics } from "@vercel/analytics/react";

import type { NextPage } from "next";
import type { Session } from "next-auth";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

const inter = localFont({
  src: "../styles/inter-roman.var.woff2",
  variable: "--font-inter",
});

export type NextPageWithAuthAndLayout = NextPage & {
  auth?: boolean;
};

type AppPropsWithAuthAndLayout = AppProps & {
  Component: NextPageWithAuthAndLayout;
  pageProps: {
    session: Session | null;
  };
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithAuthAndLayout) {
  return (
    <SessionProvider session={session}>
      <RWBProvider>
        <div className={cx(inter.variable, "font-sans")}>
          {Component.auth ? (
            <Auth>{<Component {...pageProps} />}</Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
  );
}

function Auth({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return null;
}
