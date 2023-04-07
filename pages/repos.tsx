import React from "react";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import useSWR from "swr/immutable";
import { fetcher } from "@/lib/utils";
import { useSession } from "next-auth/react";

const Repositories = () => {
  const { data: session } = useSession();
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/search/repositories?q=hackodex2023&page=1&per_page=100",
    (url) =>
      fetcher(url, {
        headers: {
          Authorization: `token ${session?.user.token}`,
        },
      }),
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div className="grid animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-2  md:grid-cols-2">
      {data.items.map((item: any) => (
        <div
          key={item.id}
          className="group w-full cursor-pointer select-none rounded-md border border-[#e3c598s] bg-[#e3c598] hover:bg-[#f59a44]"
        >
          <div className="px-5 py-3">
            <div className="flex flex-row">
              <a
                title={item.full_name}
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-juniper text-xl font-bold text-[#6e352c]"
              >
                {item.full_name}
              </a>
              <span className="flex-1"></span>
              <span className="text-white ml-2 hidden rounded-full bg-[#cf5230] px-3 py-1 text-sm font-semibold md:inline">
                {item.open_issues_count} issues
              </span>
            </div>
            <div className="flex flex-row overflow-auto py-1 text-sm">
              {item.description}
            </div>
            <div className="text-vanilla-400 flex flex-row py-1 font-mono text-sm">
              <div className="mr-4 text-[#f59a44]">
                <span className="text-[#6e612f]">lang: </span>
                {item.language}
              </div>
              <div className="mr-4 text-[#6e612f]">
                <span className="text-[#cf5230]">stars: </span>
                {item.stargazers_count}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const RepositoriesPage = () => {
  const { status } = useSession();
  return (
    <Layout>
      <div className="relative w-full max-w-screen-xl space-y-4 px-5 xl:px-0">
        <h1 className="text-center text-4xl font-bold tracking-tight text-[#f59a44]">
          <Balancer>List of Repositories</Balancer>
        </h1>
        <Repositories />

        <div className="mx-auto">
          <a
            href="https://github.com/topics/hackodex"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md       px-4 py-2 font-semibold leading-7 text-[#f59a44] shadow-sm hover:bg-[#6e352c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e352c]"
          >
            View all repositories
          </a>
        </div>
      </div>
    </Layout>
  );
};

RepositoriesPage.auth = true;

export default RepositoriesPage;
