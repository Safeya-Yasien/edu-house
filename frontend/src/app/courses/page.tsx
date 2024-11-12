"use client";
import { CourseCard, SectionHeader } from "@/components/common";
import {
  CategoryFilter,
  InstructorsFilter,
  LevelFilter,
  RatingFilter,
} from "@/components/coursesComponents";
import { actGetCourses } from "@/redux/courses/actGetCourses";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Courses = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { courses, loading, error } = useAppSelector((state) => state.courses);
  // const courses = useAppSelector((state) => state.courses.courses);

  useEffect(() => {
    console.log("Dispatching actGetCourses action...");

    dispatch(actGetCourses());
  }, [dispatch]);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="mb-12">
          <SectionHeader
            title="Courses"
            description="Write an introductory description of the category."
            isCenter={true}
          />
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* filter section */}
          <div
            className={`col-span-12 lg:col-span-3 lg:block ${
              open ? "block" : "hidden"
            }`}
          >
            <Disclosure as="div" className="p-6 border-b-2" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl font-medium  text-black dark:text-white dark:group-data-[hover]:text-white/80">
                  Category
                </span>
                <IoIosArrowDown className="size-5 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-6 text-sm/5 dark:text-white/50 space-y-3">
                {/* category filter */}
                <CategoryFilter />
              </DisclosurePanel>
            </Disclosure>

            {/* rating filter */}
            <Disclosure as="div" className="p-6 border-b-2 " defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl font-medium  text-black dark:text-white dark:group-data-[hover]:text-white/80">
                  Ratings
                </span>
                <IoIosArrowDown className="size-5 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-6 text-sm/5 dark:text-white/50 space-y-3">
                <RatingFilter />
              </DisclosurePanel>
            </Disclosure>

            {/* instructors filter */}
            <Disclosure as="div" className="p-6 border-b-2 " defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl font-medium  text-black dark:text-white dark:group-data-[hover]:text-white/80">
                  Instructors
                </span>
                <IoIosArrowDown className="size-5 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-6 text-sm/5 dark:text-white/50 space-y-3">
                {/* instructor filter */}
                <InstructorsFilter />
              </DisclosurePanel>
            </Disclosure>

            {/* level filter */}
            <Disclosure as="div" className="p-6 " defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl font-medium  text-black dark:text-white dark:group-data-[hover]:text-white/80">
                  Level
                </span>
                <IoIosArrowDown className="size-5 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-6 text-sm/5 dark:text-white/50 space-y-3">
                {/* level filter */}
                <LevelFilter />
              </DisclosurePanel>
            </Disclosure>
          </div>

          {/* courses section */}
          <div className="col-span-12 lg:col-span-9 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                Showing
                <span> 7 </span>
                total results
              </div>
              <div className="block lg:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 bg-lightGray p-4 py-2 rounded-lg hover:bg-indigo-100 
                transition-all duration-300 dark:bg-customPurple dark:hover:bg-purple-600"
                >
                  <RiBarChartHorizontalLine />
                  Filter
                </button>
              </div>
            </div>

            {loading === "pending" && (
              <div className="text-center text-xl">Loading courses...</div>
            )}

            {loading === "failed" && (
              <div className="text-red-500 text-center">Error: {error}</div>
            )}

            {loading === "succeeded" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course._id} course={course} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
