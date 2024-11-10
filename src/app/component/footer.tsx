import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-purple-200">
      <footer className="flex flex-col items-center py-8 px-4 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Destination</h2>
          <nav className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-purple-800">
                Naran Kaghan tour packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-800">
                Skardu tour packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-800">
                Malam Jabba tour packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-800">
                Islamabad tour packages
              </a>
            </li>
          </nav>
        </div>

        <div className="text-center my-4 md:my-0">
          <p className="text-gray-600">© Made by Asifa Qasim 💗</p>
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61556456222532"
            target="_blank"
            className="text-gray-500 hover:text-blue-600"
          >
            <FaFacebook className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/AsfaQasim?tab=repositories"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/asifa-muhammad-qasim-006120305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="text-gray-500 hover:text-blue-600"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
