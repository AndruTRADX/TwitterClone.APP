import { BellIcon, BookmarkIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import twitterLogo from "../assets/twitter-logo.svg"


const Dashboard = () => {
  return (
    <main className="flex h-screen">
      <aside className="flex flex-col h-screen w-[320px] justify-between bg-dark border-r border-gray-3">
        <div>
          <div className="py-8 px-6">
            <img src={twitterLogo} className="w-8 h-8" />
          </div>

          <div className="flex flex-col mt-4 gap-y-6">
            <div className="flex items-center pl-6 border-l-[3px] gap-x-2 border-primary text-white font-medium cursor-pointer">
              <HomeIcon className="w-5 h-5" />
              Home
            </div>

            <div className="flex items-center pl-6 border-l-[3px] gap-x-2 border-transparent text-white/70 font-medium cursor-pointer">
              <MagnifyingGlassIcon className="w-5 h-5" />
              Search
            </div>

            <div className="flex items-center pl-6 border-l-[3px] gap-x-2 border-transparent text-white/70 font-medium cursor-pointer">
              <BellIcon className="w-5 h-5" />
              Notifications
            </div>

            <div className="flex items-center pl-6 border-l-[3px] gap-x-2 border-transparent text-white/70 font-medium cursor-pointer">
              <BookmarkIcon className="w-5 h-5" />
              Bookmarks
            </div>
          </div>
        </div>

        <div className="my-8 mx-6">
          <button className="w-full py-2 bg-primary rounded-2xl text-white font-semibold hover:bg-primary/75 transition-colors">
            Post
          </button>
        </div>
      </aside>

      <article className="flex flex-col relative min-h-screen w-full bg-dark">
        <nav className="flex sticky top-0 justify-center gap-x-8 border-b border-gray-3">
          <div className="p-4 text-white font-semibold border-b-[3px] border-primary">
            For you
          </div>
          <div className="p-4 text-white/50 font-semibold">Following</div>
        </nav>
      </article>

      <aside className="flex flex-col h-screen w-[360px] justify-between bg-dark border-l border-gray-3 p-4">
        <input
          className="py-2.5 px-2.5 rounded-lg bg-gray-2 border border-gray-3 text-white/90 outline-none text-sm"
          placeholder="Search here..."
        />
      </aside>
    </main>
  );
};

export default Dashboard;
