import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "../context/supabaseProvider";
import { FaArrowLeft } from "react-icons/fa";




export default function CreateEvent({onCreateClick}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    starting_time: "",
    closing_time: "",
    location: "",
  });


  const navigate = useNavigate()
  const [status, setStatus] = useState(null);
  
const {user} = useSupabase()


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data, error } = await supabase.auth.getUser();
  //     if (error) {
  //       console.error("Error fetching user:", error.message);
  //     } else {
  //       setUser(data.user);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");
    if(!user){
      alert("you must login ")
      return;
    }


    const { error } = await supabase.from("Events").insert([
      {

        user_id:user.id,
        title: formData.title,
        description: formData.description,
        date: formData.date || null,
        starting_time: formData.starting_time || null,
        closing_time: formData.closing_time || null,
        location: formData.location,
        is_verify: false, 
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("❌ Error: " + error.message);
    } else {
      setStatus("✅ Event saved! Waiting for admin approval.");
      setFormData({
        title: "",
        description: "",
        date: "",
        starting_time: "",
        closing_time: "",
        location: "",
      });
    }
  };


  


  return (
   <div className="h-screen w-screen fixed bg-[#ffffff25] backdrop-blur-xl flex items-center justify-center z-50">
     <div className="max-w-md mx-auto p-4 border rounded shadow my-auto ">
 
     <div className="flex items-center justify-between text-white"> <h2 className="text-xl font-bold mb-4">Create Event</h2><FaArrowLeft  className="bg-purple-400 rounded-full h-8 p-[1px] w-8 text-black mb-2 " onClick={onCreateClick}/> </div>

      <form onSubmit={handleSubmit} className="space-y-3 my-auto">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="time"
          name="starting_time"
          value={formData.starting_time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="time"
          name="closing_time"
          value={formData.closing_time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-purple-200 text-white px-4 py-2 rounded hover:opacity-85"
        >
          Save Event
        </button>
      </form>

      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
   </div>
  );
}
