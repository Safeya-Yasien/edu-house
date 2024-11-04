import {
  BecomeAStudentOrInstructor,
  BestInstructors,
  JoinUs,
  Landing,
  MostPopularCourses,
  StudentTestimonials,
  TopCategories,
  UpcomingEvents,
  WhyChooseUs,
} from "@/components/homeComponents";

export default function Home() {
  return (
    <>
      <Landing />
      <TopCategories />
      <MostPopularCourses />
      <JoinUs />
      <WhyChooseUs />
      <BestInstructors />
      <StudentTestimonials />
      <BecomeAStudentOrInstructor />
      <UpcomingEvents />
    </>
  );
}
