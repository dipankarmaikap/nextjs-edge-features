import SearchSection from "./SearchSection";
import UserProfile from "./UserProfile";

export default function AccountInfo() {
  return (
    <div className="border-b">
      <UserProfile />
      <SearchSection />
    </div>
  );
}
