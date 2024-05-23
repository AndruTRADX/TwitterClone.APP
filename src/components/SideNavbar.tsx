import { BellIcon, BookmarkIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import twitterLogo from "../assets/twitter-logo.svg"

const SideNavbar = () => {
  return (
    <aside className="flex flex-col h-screen w-[320px] justify-between bg-dark border-r border-gray-3">
        <div>
          <div className="py-8 px-6">
            <img src={twitterLogo} className="w-8 h-8 cursor-pointer" />
          </div>

          <div className="flex flex-col mt-4 gap-y-4">
            <div className="flex items-center pl-6 border-l-[3px] gap-x-2 border-primary text-white font-medium cursor-pointer transition-colors hover:bg-gray-2 hover:text-white py-2">
              <HomeIcon className="w-5 h-5" />
              Home
            </div>

            <div className="flex items-center pl-6 border-l-[3px] gap-x-2 border-transparent text-white/65 font-medium cursor-pointer transition-colors hover:bg-gray-2 hover:text-white py-2">
              <MagnifyingGlassIcon className="w-5 h-5" />
              Search
            </div>

            <div className="flex items-center pl-6 border-l-[3px] gap-x-2 border-transparent text-white/65 font-medium cursor-pointer transition-colors hover:bg-gray-2 hover:text-white py-2">
              <BellIcon className="w-5 h-5" />
              Notifications
            </div>

            <div className="flex items-center pl-6 border-l-[3px] gap-x-2 border-transparent text-white/65 font-medium cursor-pointer transition-colors hover:bg-gray-2 hover:text-white py-2">
              <BookmarkIcon className="w-5 h-5" />
              Bookmarks
            </div>
          </div>
        </div>

        <div className="my-8 mx-6">
          <button className="w-full py-2 bg-primary rounded-3xl text-white font-semibold hover:bg-primary/75 transition-colors">
            Post
          </button>
        </div>
      </aside>
  )
}

export default SideNavbar