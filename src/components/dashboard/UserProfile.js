import CircleIcon from "./icons/CircleIcon";
import DotsIcon from "./icons/DotsIcon";
import PlusIcon from "./icons/PlusIcon";

export default function UserProfile() {
  return (
    <div className="bg-gray-100 px-4 py-2">
      <div className="flex items-center">
        <img
          className="shrink-0 border rounded-full w-12 h-12"
          src="https://dipankarmaikap.com/resume/assets/My-Profile-Picture.png"
          alt="Dipankar Maikap"
        />
        <div className="flex-1 flex justify-end">
          <div className="flex text-gray-500 space-x-4">
            <CircleIcon />
            <PlusIcon />
            <DotsIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
