import { TCourse } from "@/types/courseType";
import Image from "next/image";
import React from "react";
import { FaCartPlus, FaRegStar, FaStar } from "react-icons/fa";

const CourseCard = ({ course }: { course: TCourse }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col ">
      <div className="relative h-64 w-full bg-slate-100">
        <Image
          src={course.image_url}
          alt={course.title}
          fill
          sizes="25vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>

        <div className="flex justify-between items-center  text-gray-600 dark:text-gray-400">
          <span>{course.hours}</span>
          <span>{course.lessons} lessons</span>
        </div>

        <div className=" justify-between items-center hidden">
          <span className="text-lg font-bold text-customPurple dark:text-white">
            {course.price}
          </span>
          {course.instructor && (
            <div className="flex items-center">
              <Image
                src={
                  course.instructor.image_url ||
                  "/images/instructors_images/instructor_1.jpeg"
                }
                alt={course.instructor.name}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <span className="text-gray-600 dark:text-gray-300">
                {course.instructor.name}
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-yellow-500 flex items-center gap-2">
            {Array.from({ length: 5 }, (_, index) =>
              index < Math.floor(course.rating) ? (
                <FaStar key={index} />
              ) : (
                <FaRegStar key={index} />
              )
            )}
          </span>
          <span className="text-gray-600 dark:text-gray-300">
            {course.level}
          </span>
        </div>

        <button className="flex items-center justify-center bg-customPurple text-white rounded-lg py-2 hover:bg-purple-600 transition-all w-full ">
          <FaCartPlus className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
