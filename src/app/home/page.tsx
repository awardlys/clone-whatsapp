import Chat from "@/components/chat";
import Friends from "@/components/friends";

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2">
        <Friends />
      </div>
      <div className="col-span-10">
        <Chat />
      </div>
    </div>
  );
}
