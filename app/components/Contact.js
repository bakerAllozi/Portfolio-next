import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 py-12  mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* العنوان الرئيسي */}
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>

        {/* أيقونات التواصل */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="https://wa.me/+962770033028" legacyBehavior>
            <a
              className="bg-green-500 text-white px-5 py-3 rounded-full flex items-center space-x-3 hover:bg-green-600 transition-all duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
              <span>WhatsApp</span>
            </a>
          </Link>

          <Link href="mailto:bakerdes654@gmail.com" legacyBehavior>
            <a
              className="bg-red-500 text-white px-5 py-3 rounded-full flex items-center space-x-3 hover:bg-red-600 transition-all duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={24} />
              <span>Email</span>
            </a>
          </Link>

          <Link
            href="https://www.linkedin.com/in/baker-obid-112575332"
            legacyBehavior
          >
            <a
              className="bg-blue-600 text-white px-5 py-3 rounded-full flex items-center space-x-3 hover:bg-blue-700 transition-all duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </Link>

          <Link href="https://github.com/bakerAllozi" legacyBehavior>
            <a
              className="bg-gray-700 text-white px-5 py-3 rounded-full flex items-center space-x-3 hover:bg-gray-800 transition-all duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </Link>
        </div>

        {/* رقم الهاتف */}
        <div className="bg-gray-700 text-white px-5 py-3 rounded-full flex items-center space-x-3 shadow-md">
          <FaWhatsapp size={24} />
          <span>+962 7 7003 3028</span>
        </div>

        {/* الحقوق محفوظة */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Baker Allozi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
