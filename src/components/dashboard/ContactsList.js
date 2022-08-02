import contacts from "~/lib/contact-db";

export default function ContactsList() {
  //   console.log(contacts);
  return (
    <article className="contact-list overflow-hidden">
      <ul>
        {contacts.map((contact) => (
          <li className="hover:bg-gray-100 cursor-pointer" key={contact.id}>
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
          </li>
        ))}
      </ul>
    </article>
  );
}
