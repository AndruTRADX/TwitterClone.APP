import SideNavbar from "../components/SideNavbar";
import TweetsContainer from "../components/TweetsContainer";


const Dashboard = () => {
  return (
    <main className="flex h-screen">
      <SideNavbar />

      <TweetsContainer />

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
