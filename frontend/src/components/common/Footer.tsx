import React from "react";
import SocialMediaIcons from "../SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white  ">
            Edu City
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Empowering learners worldwide with top-notch educational content.
            Your gateway to a brighter future.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-1">
            {["About Us", "Courses", "Instructors", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-gray-900 dark:hover:text-white transition duration-300 ease-in-out"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            Contact Us
          </h4>
          <ul className="space-y-1">
            <li>
              Email:{" "}
              <span className="text-gray-600 dark:text-gray-400">
                support@educity.com
              </span>
            </li>
            <li>
              Phone:{" "}
              <span className="text-gray-600 dark:text-gray-400">
                +1 234 567 890
              </span>
            </li>
            <li>
              Address:{" "}
              <span className="text-gray-600 dark:text-gray-400">
                123 Edu City Road, Learning Town, USA
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            Follow Us
          </h4>
          <div className="flex space-x-3">
            <SocialMediaIcons />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center border-t border-gray-300 dark:border-gray-700 pt-4">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Edu City. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
