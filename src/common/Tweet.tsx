import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const Tweet = () => {
  return (
    <div className="flex flex-col border-b border-gray-3">
      <div className="flex p-8 gap-3">
        <img
          src="https://assetsio.gnwcdn.com/zelda-tears-of-the-kingdom-sky-island-link-selfie.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
          className="w-14 h-14 rounded-full"
        />

        <div className="flex flex-col">
          <div className="flex gap-2">
            <h2 className="text-white font-semibold">Link</h2>
            <p className="text-white/50 text-[15px]">@link</p>
          </div>
          <p className="text-white/90 pr-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus ipsum omnis fuga placeat sit non laboriosam,
            assumenda, voluptatum sunt facere ea veniam odio optio ducimus
            obcaecati dignissimos aut nihil doloremque.
          </p>
        </div>
      </div>

      <ul className="flex justify-between items-center px-24 pb-6">
        <li className="flex items-center text-xs gap-1.5 text-white/70 cursor-pointer">
          <ChatBubbleBottomCenterIcon className="w-5 h-5" />
          <p>3</p>
        </li>
        <li className="flex items-center text-xs gap-1.5 text-white/70 cursor-pointer">
          <PaperAirplaneIcon className="w-5 h-5" />
        </li>
        <li className="flex items-center text-xs gap-1.5 text-white/70 cursor-pointer">
          <HeartIcon className="w-5 h-5" />
          <p>15</p>
        </li>
        <li className="flex items-center text-xs gap-1.5 text-white/70 cursor-pointer">
          <BookmarkIcon className="w-5 h-5" />
        </li>
      </ul>
    </div>
  );
};

export default Tweet;
