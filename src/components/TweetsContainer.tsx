import Tweet from "../common/Tweet"


const TweetsContainer = () => {
  return (
    <article className="flex flex-col relative min-h-screen w-full bg-dark items-center">
        <nav className="w-full flex top-0 justify-center gap-x-8 border-b border-gray-3">
          <div className="p-4 text-white font-semibold border-b-[3px] border-primary">
            For you
          </div>
          <div className="p-4 text-white/50 font-semibold">Following</div>
        </nav>

        <div className="flex flex-col overflow-y-auto">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </article>
  )
}

export default TweetsContainer