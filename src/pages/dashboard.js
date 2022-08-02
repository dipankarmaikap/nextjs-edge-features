import EmptyState from "~/components/dashboard/EmptyState";
import Sidebar from "~/components/dashboard/Sidebar";

export default function Dashboard() {
  return (
    <section className="flex w-full h-screen bg-gray-100">
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center">
          <EmptyState />
        </main>
      </div>
    </section>
  );
}
