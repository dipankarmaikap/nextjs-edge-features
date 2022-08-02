import UnreadIcon from "./icons/UnreadIcon";

export default function SearchSection() {
  return (
    <div className="search flex items-center space-x-2 px-3 py-2">
      <input
        className="rounded-md bg-gray-100 flex-1 placeholder:text-sm px-3 py-2 focus:outline-none"
        type="text"
        placeholder="Search or start new chat"
      />
      <div className="text-gray-500 flex-shrink-0">
        <UnreadIcon />
      </div>
    </div>
  );
}
