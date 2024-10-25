import { SectionHeader } from "../common";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience.",
      icon: "👩‍🏫",
    },
    {
      id: 2,
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere, at your own pace.",
      icon: "⏰",
    },
    {
      id: 3,
      title: "Comprehensive Curriculum",
      description: "Courses designed to cover everything you need to succeed.",
      icon: "📚",
    },
    {
      id: 4,
      title: "Community Support",
      description: "Join a vibrant community of learners and educators.",
      icon: "🤝",
    },
    {
      id: 5,
      title: "Certification",
      description: "Earn certificates that are recognized in the industry.",
      icon: "🏆",
    },
    {
      id: 6,
      title: "Work Opportunities",
      description: "Get access to job placements and internships.",
      icon: "💼",
    },
  ];

  const renderReasons = reasons.map((reason) => (
    <div
      key={reason.id}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-indigo-100 dark:hover:bg-indigo-900"
    >
      <div className="text-4xl mb-4">{reason.icon}</div>
      <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
    </div>
  ));

  return (
    <div className="py-16 ">
      <div className="container text-center mx-auto">
        <SectionHeader
          title="Why Learn with Our Courses?"
          description="Discover the benefits of choosing our learning platform."
        />

        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderReasons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
