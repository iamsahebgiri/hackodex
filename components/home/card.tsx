import Link from "next/link";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  description,
  demo,
  large,
  slug,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
  slug: string;
}) {
  return (
    <div
      className={`group relative col-span-1 cursor-pointer overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-gray-900/5 transition hover:-translate-y-2 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-48 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md px-5 py-5 text-left">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 font-sans leading-normal text-gray-500 md:prose">
          <Balancer>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Balancer>
        </div>
        <Link
          href={`services/${slug}`}
          className="text-base font-semibold leading-7 text-gray-900 before:absolute before:inset-0 before:block before:h-full before:w-full"
        >
          Get started now <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
