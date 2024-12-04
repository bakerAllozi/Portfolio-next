// components/Footer.js
import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold text-white">Contact Me</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://wa.me/YOUR_NUMBER" legacyBehavior>
            <a
              className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
              <span>WhatsApp</span>
            </a>
          </Link>
          <Link href="mailto:your-email@example.com" legacyBehavior>
            <a
              className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-red-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={24} />
              <span>Email</span>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/YOUR_PROFILE" legacyBehavior>
            <a
              className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-800 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </Link>
          <Link href="https://github.com/bakerAllozi" legacyBehavior>
            <a
              className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </Link>
          <div className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center space-x-2">
            <FaWhatsapp size={24} />
            <span>Your Phone Number</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
