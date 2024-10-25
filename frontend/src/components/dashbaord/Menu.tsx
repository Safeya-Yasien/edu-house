import React from "react";
import Link from "next/link";
import { MdAnnouncement, MdClass } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFileText,
  AiOutlineCheckSquare,
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai"; // Importing react-icons
import { FaUsers } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

const iconStyles = "h-4 w-5";

const menuItems = [
  {
    title: "Menu",
    items: [
      {
        icon: <AiOutlineHome className={iconStyles} />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <FaChalkboardTeacher className={iconStyles} />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FaUsers className={iconStyles} />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <AiOutlineBook className={iconStyles} />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <MdClass className={iconStyles} />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <AiOutlineFileText className={iconStyles} />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <AiOutlineCheckSquare className={iconStyles} />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AiOutlineCheckSquare className={iconStyles} />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AiOutlineBarChart className={iconStyles} />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AiOutlineCheckSquare className={iconStyles} />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AiOutlineCalendar className={iconStyles} />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AiOutlineMessage className={iconStyles} />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdAnnouncement className={iconStyles} />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AiOutlineBook className={iconStyles} />,
        label: "Resources",
        href: "/list/resources",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <AiOutlineMessage className={iconStyles} />,
        label: "Forum",
        href: "/list/forum",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <AiOutlineFileText className={iconStyles} />,
        label: "Tutorials",
        href: "/list/tutorials",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <AiOutlineBarChart className={iconStyles} />,
        label: "Reports",
        href: "/list/reports",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        icon: <AiOutlineUser className={iconStyles} />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AiOutlineSetting className={iconStyles} />,
        label: "Settings ",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AiOutlineLogout className={iconStyles} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-600 font-semibold text-md my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center gap-2 justify-center lg:justify-start text-gray-600 md:px-2 py-2 rounded-md hover:bg-lamaSkyLight"
            >
              {item.icon}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
