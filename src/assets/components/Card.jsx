import StartButton from "./StartButton";
import DropdownMenu from "./DropdownMenu";

// Card.jsx
export default function Card({
  image,
  title = "Raycast Wallpaper #1",
  description = "Recreate this wallpaper using AI.",
  isPremium = false,
  className = "",
}) {
  return (
    <div
      className={`relative flex flex-col items-center bg-white border-[1px] border-[#E4E4EB] rounded-3xl w-full max-w-[411px] h-[475px] p-4 sm:mx-auto sm:px-4 ${className}`}
    >
      <div className="rounded-2xl w-full h-[263px] max-w-[375px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl mt-4 mb-2">{title}</h1>
        {isPremium && (
          <h2 className="flex justify-center items-center text-xs font-medium bg-slate-200 w-[62px] h-[26px] rounded-md mt-1">
            Premium
          </h2>
        )}
      </div>
      <div className="flex justify-start w-full">
        <h2 className="text-sm font-normal">{description}</h2>
      </div>

      <div className="flex justify-between items-end w-full relative mt-16">
        <StartButton />
        <DropdownMenu />
      </div>
    </div>
  );
}
