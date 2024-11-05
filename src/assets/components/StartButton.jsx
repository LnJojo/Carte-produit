import { Sword, Swords } from "lucide-react";

export default function StartButton() {
  return (
    <div>
      <button className="flex justify-center items-center border-[1px] border-[#E4E4EB] rounded-xl w-[190px] h-[43px] font-medium text-lg custom-shadow">
        <Swords />
        Start Challenge
      </button>
    </div>
  );
}
