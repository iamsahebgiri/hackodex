import React from "react";
import Timeline from "@/components/timeline";
import ContributorGuidelines from "@/components/contributors";
import Resources from "@/components/resources";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Link from "next/link";

const Info: React.FC = () => {
  return (
    <div className=" bg-[#6e352c] px-4 sm:h-screen md:h-full lg:h-full">
      <div className="md:mb-8 mb-4 flex items-center md:items-start">
        <Link href="/" className="cursor-pointer mx-auto md:mx-0">
          <img className="h-14 md:h-18" src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="mx-auto md:grid md:grid-cols-2 items-center justify-center gap-40 py-8 ">
        <h2 className="mb-4 md:text-left md:text-6xl text-3xl text-center font-bold text-[#f59a44]">
          Begin Your Open Source Journey with Hackodex 2.0
        </h2>
        <img
          src="/octocat.png"
          alt="Hackodex 2.0 Logo"
          className="h-full w-full object-contain "
        />
      </div>

      <div className="md:pl-2">
        <h1 className="mb-10 text-4xl md:text-left text-center font-bold text-[#f59a44]">About</h1>
        <p className="mb-4 md:w-5/6 text-lg md:text-left text-center  text-[#e3c598]">
          HACKODEX is an initiative by CODEX Club of ITER, SOA University for
          the students, who have little or no experience in open source software
          development, to get them involved during the whole month and break the
          ice of Open Source contributions. All the work is going to be on
          GitHub.
        </p>
        <p className="mb-4 md:w-5/6 text-lg md:text-left text-center text-[#e3c598]">
          HACKODEX similarly, is aimed at introducing new students to the area
          and helping them make PRs, in fact, a first for many of them, and also
          gaining confidence that will help them continue their open source
          journey.
        </p>
      </div>

      {/*-- Event timeline --*/}

      <div className="mt-12 md:w-3/5 md:pl-2">
        <h2 className="mb-2 text-4xl font-bold md:text-left text-center text-[#f59a44]">
          Event Details
        </h2>
        <Timeline />
      </div>
      {/*-- Contributor guideline --*/}
      <div className="mt-12 md:w-5/6 pl-2">
        <ContributorGuidelines />
      </div>
      {/*-- Resources --*/}
      <div className="md:w-1/2 md:pl-2">
        <h2 className="mt-12 text-4xl md:text-left text-center font-bold text-[#f59a44]">
          Resources For Beginners
        </h2>
        <Resources />
      </div>
      {/*-- FAQs --*/}
      <div className="md:w-2/3 md:pl-2">
        <h2 className="mt-12 mb-6 text-4xl font-bold md:text-left text-center text-[#f59a44]">FAQS</h2>
        <Faq />
      </div>
      <div className="mt-28 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Info;
