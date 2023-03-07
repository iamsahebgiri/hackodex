import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <Layout>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <Balancer>Hack and learn with hackodex</Balancer>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your open source journey begins with a pull request. We&apos;ve curated
              a list of beginner friendly issues for you to check out.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start hacking
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-7 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
