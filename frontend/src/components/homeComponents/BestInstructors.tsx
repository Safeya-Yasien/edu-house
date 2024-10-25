"use client";
import React from "react";
import { ButtonLink, SectionHeader } from "../common";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowOutward } from "react-icons/md";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { CiPlay1 } from "react-icons/ci";
import Link from "next/link";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    bio: "Expert in web development with over 10 years of experience.",
    image: "https://via.placeholder.com/150",
    coursesCount: 12,
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "Specializes in data science and machine learning.",
    image: "https://via.placeholder.com/150",
    coursesCount: 8,
  },
  {
    id: 3,
    name: "Alice Johnson",
    bio: "Digital marketing guru and entrepreneur.",
    image: "https://via.placeholder.com/150",
    coursesCount: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    bio: "Mobile app development expert with experience in Android and iOS.",
    image: "https://via.placeholder.com/150",
    coursesCount: 15,
  },
  {
    id: 5,
    name: "Sarah White",
    bio: "Graphic design specialist and UI/UX expert.",
    image: "https://via.placeholder.com/150",
    coursesCount: 9,
  },
];

const BestInstructors = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - 4 Columns */}
          <div className="lg:col-span-4">
            <SectionHeader
              title="Learn from the Best Instructors"
              description="Meet our talented instructors who are here to guide you."
            />

            <ButtonLink href="#">
              View all instructors
              <MdOutlineArrowOutward />
            </ButtonLink>
          </div>

          {/* Right Side - 8 Columns Swiper */}
          <div className="lg:col-span-8">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {instructors.map((instructor, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 rounded-lg text-center flex flex-col">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <Link
                      href="#"
                      className="text-xl font-semibold mb-2 hover:text-customPurple dark:hover:text-purple-300"
                    >
                      {instructor.name}
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {instructor.bio}
                    </p>
                    <p
                      className="text-gray-600 dark:text-gray-300 mb-2 text-sm
                    flex items-center justify-center gap-1.5 "
                    >
                      <CiPlay1 className=" " />
                      {instructor.coursesCount} Courses
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestInstructors;
