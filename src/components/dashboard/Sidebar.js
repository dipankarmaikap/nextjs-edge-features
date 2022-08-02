import AccountInfo from "./AccountInfo";
import ContactsList from "./ContactsList";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-96 bg-white h-full border-r">
      <AccountInfo />
      <div className="flex-1 overflow-y-scroll contact-list">
        <ContactsList />
      </div>
    </aside>
  );
}
