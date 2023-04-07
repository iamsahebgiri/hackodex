import Balancer from "react-wrap-balancer";
import Layout from "@/components/layout";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr/immutable";
import { fetcher } from "@/lib/utils";

const ListAllPRs = ({ prs, error, isLoading }: any) => {
  if (error) return <div className="p-5">failed to load</div>;
  if (isLoading) return <div className="p-5">loading...</div>;

  if (prs.items.length === 0) {
    return (
      <div className="mx-auto px-5 py-8">
        <div className="flex items-center justify-center py-6">
          <Image alt="Pull requests" src="/mentor.png" width={62} height={62} />
        </div>
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold text-transparent md:text-2xl md:font-normal">
          <Balancer>You have not made any pull request yet</Balancer>
        </h2>
        <div className="text-center font-sans leading-normal text-gray-500">
          Check all the repos by clicking on the user dropdown.
        </div>
      </div>
    );
  }

  const filteredPrs = prs.items.filter((item: any) => (new Date(item.created_at)).getFullYear() >= 2023);

  return (
    <div>
      <div className="flex p-4">
        <p className="text-3xl font-semibold text-[#6e352c]">Your contributions</p>
      </div>
      <div className="px-2 pb-2">
        {filteredPrs.map((item: any) => (
          <div
            key={item.id}
            className="group w-full cursor-pointer select-none rounded-md  hover:bg-[#f59a44]"
          >
            <div className="px-3 py-3">
              <div className="flex flex-row">
                <a
                  title={item.title}
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-juniper text-xl font-bold text-[#cf5230]"
                >
                  {item.title}
                </a>
              </div>
              {/* <div className="flex flex-row overflow-auto py-1 text-sm">
              {item.description}
            </div> */}
              <div className="text-vanilla-400 flex flex-row py-1 font-mono text-sm">
                <div className="mr-4 text-[#6e612f]">
                  <span className="text-[#f59a44]">state: </span>
                  {item.state}
                </div>
                <div className="mr-4 text-[#6e612f]">
                  <span className="text-[#6e352c]">created at: </span>
                  {new Date(item.created_at).toDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Progress = ({ count, max }: { count: number; max: number }) => {
  count = Math.min(count, max);
  return (
    <div className="group relative col-span-1 overflow-hidden rounded-lg bg-[#e3c598] shadow-md ring-1 ring-[#cf5230]/5">
      <div className="flex p-4">
        <p className="font-sans text-xl font-semibold text-[#6e352c]">Your progress</p>
      </div>
      <div className="mx-auto space-y-2 px-4 py-4 text-left">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-lg font-bold text-transparent md:text-xl md:font-normal">
          <Balancer className="text-[#6e612f]">
            {count} out of {max} PRs
          </Balancer>
        </h2>
        <div className="h-2.5 w-full rounded-full bg-gray-200">
          <div
            className="h-2.5 rounded-full bg-[#cf5230]"
            style={{ width: `${(count / max) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { data: session } = useSession();
  const {
    data: prs,
    error,
    isLoading,
  } = useSWR(
    `https://api.github.com/search/issues?q=is:pr+archived:false+is:closed+author:${session?.user.username}+label:hackodex2023-accepted&page=1&per_page=100`,
    (url) =>
      fetcher(url, {
        headers: {
          Authorization: `token ${session?.user.token}`,
        },
      }),
  );

  // TODO: find a way store the number of PRs in firebase

  return (
    <Layout>
      <div className="grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <div className="group relative col-span-1 overflow-hidden rounded-lg bg-[#e3c598] shadow-md ring-1 ring-[#cf5230]/5 md:col-span-2">
          <ListAllPRs prs={prs} error={error} isLoading={isLoading} />
        </div>

        <div>
          {!isLoading ? <Progress count={prs.items.length} max={4} /> : null}
        </div>
      </div>
    </Layout>
  );
};

Dashboard.auth = true;

export default Dashboard;
