import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
// if using shadcn

const EventCard = ({ event, index }) => (

  <>
  
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group cursor-pointer"
    > 
 
    <div className="bg-[#271c3d] text-white/50 font-bold rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-100 transition-all duration-200 border border-white/20 min-h-[20%]">
      

      <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

      <div className="space-y-2  mb-4">
        <div className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-2 text-primary" /> {event.date}
        </div>
        <div className="flex items-center  text-sm">
          <Clock className="h-4 w-4 mr-2 text-primary" /> {event.starting_time} AM - {event.closing_time} PM
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-2 text-primary" /> {event.location}
        </div>
        <div className="flex items-center text-sm">
          <Users className="h-4 w-4 mr-2 text-primary" /> {event.attendees} attending
        </div>
        <div className="flex items-center  gap-4 text-sm">
          <button className="px-6 py-2 text-black bg-gradient-to-r from-purple-600 to-purple-200 rounded-md">view details</button>
                    <button className="px-6 py-2 text-black bg-gradient-to-r from-purple-600 to-purple-200 rounded-md">apply</button>
        </div>
      </div>
    </div>
  </motion.div>
</>
);

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("Events")
        .select("*")
        .eq("is_verify", true);

      if (error) {
        console.error(error);
      } else {
        setEvents(data || []);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
     <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="events"
            className="text-center  bg-[#0b0915] text-white py-8 h-[40vh]"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Upcoming <span className="bg-gradient-to-r from-purple-600 to-purple-200 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto">
              Discover carefully curated events happening in your community. 
              From tech meetups to art exhibitions, find your next adventure.
            </p>
          </motion.div>
    <div className=" min-h-[70vh] w-screen grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-8 bg-[#0b0915]">
      
      {events.map((event, idx) => (
        <EventCard key={event.id} event={event} index={idx} />
      ))}
    </div>
      </>
  );
};

export default AllEvents;
