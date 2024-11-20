// pages/contact.js
import Link from "next/link";
import { FaWhatsapp, FaFacebookMessenger, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <p className="text-lg mb-4">Get in touch with me via:</p>
        <div className="flex flex-col items-center space-y-4">
          <Link href="https://wa.me/YOUR_NUMBER" passHref>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition duration-300">
              <FaWhatsapp size={24} />
              <span>WhatsApp</span>
            </button>
          </Link>
          <Link href="https://m.me/YOUR_PROFILE" passHref>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition duration-300">
              <FaFacebookMessenger size={24} />
              <span>Facebook Messenger</span>
            </button>
          </Link>
          <Link href="mailto:your-email@example.com" passHref>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition duration-300">
              <FaEnvelope size={24} />
              <span>Email</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
