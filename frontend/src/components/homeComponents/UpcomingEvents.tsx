import React from "react";
import { EventCard } from "../common";

// Event Data
const events = [
  {
    id: 1,
    title: "React Conference 2024",
    date: "March 15, 2024",
    location: "San Francisco, CA",
    description: "A one-day conference featuring the latest in React.",
    imageUrl: "/images/events_images/event1.jpg",
  },
  {
    id: 2,
    title: "JavaScript Global Summit",
    date: "April 22, 2024",
    location: "New York, NY",
    description: "Join the global leaders in JavaScript development.",
    imageUrl: "/images/events_images/event2.jpg",
  },
  {
    id: 3,
    title: "UX/UI Design Workshop",
    date: "May 10, 2024",
    location: "London, UK",
    description: "A hands-on workshop to learn the best UX/UI practices.",
    imageUrl: "/images/events_images/event3.jpg",
  },
];


const UpcomingEvents = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Upcoming Events
        </h2>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id}  title={event.title} imageUrl={event.imageUrl}
            date={event.date} location={event.location} description={event.description}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
