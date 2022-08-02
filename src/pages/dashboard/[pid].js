import Sidebar from "~/components/dashboard/Sidebar";
import contacts from "~/lib/contact-db";

export default function IndividualPage({ user }) {
  console.log(user);
  return (
    <section className="flex w-full h-screen bg-gray-100">
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="flex-1">
          <p>Hello</p>
        </main>
      </div>
    </section>
  );
}
export async function getStaticProps({ params: { pid } }) {
  let user = contacts.find(
    (contact) => contact.id.toString() === pid.toString()
  );
  return {
    props: { user }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  let paths = contacts.map((contact) => {
    return { params: { pid: contact.id.toString() } };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
