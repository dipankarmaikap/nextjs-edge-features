import Image from "next/future/image";
import test from "~/images/slazzer-edit-image.png";

export default function EmptyState() {
  return (
    <div className="max-w-lg text-center">
      <Image role="presentation" src={test} alt="Hero background image" />
      <h1 className="font-light text-3xl text-gray-700 mb-4">
        WhatsApp for Web
      </h1>
      <p className="text-sm leading-relaxed text-gray-600">
        Now send and receive messages without keeping your phone online.
        <br />
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </p>
      <hr className="border-t my-6" />
      <p className="text-sm text-gray-600">
        Make calls from desktop with WhatsApp for Windows.{" "}
        <a
          className="text-green-500"
          href="https://www.whatsapp.com/download"
          target="_blank"
        >
          Get it here
        </a>
        .
      </p>
    </div>
  );
}
