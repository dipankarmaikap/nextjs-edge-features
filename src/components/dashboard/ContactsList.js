import contacts from "~/lib/contact-db";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ContactsList() {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <article className="contact-list overflow-hidden">
      <ul>
        {contacts.map((contact) => {
          let url = `/dashboard/${contact.id}`;
          let isActive = currentRoute === url;
          return (
            <li key={contact.id}>
              <Link href={url}>
                <a
                  className={`block hover:bg-gray-200 cursor-pointer ${
                    isActive ? "bg-gray-200" : ""
                  }`}
                >
                  <div className="px-3 flex space-x-3 items-center">
                    <img
                      className="shrink-0 border rounded-full"
                      src={contact.avatar_url}
                      alt={contact.name}
                    />
                    <div className="w-full overflow-hidden border-b py-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{contact.name}</h3>
                        <p className="text-xs">{contact.last_seen}</p>
                      </div>
                      <p className="text-sm truncate">{contact.last_msg}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
