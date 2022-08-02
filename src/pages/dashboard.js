import AccountInfo from "~/components/dashboard/AccountInfo";
import ContactsList from "~/components/dashboard/ContactsList";

export default function Dashboard() {
  return (
    <section className="flex w-full h-screen bg-gray-100">
      <div className="flex w-full h-full">
        <aside className="flex flex-col w-96 bg-white h-full border-r">
          <AccountInfo />
          <div className="flex-1 overflow-y-scroll contact-list">
            <ContactsList />
          </div>
        </aside>
        <main className="flex-1">
          <p>Hello</p>
        </main>
      </div>
    </section>
  );
}
