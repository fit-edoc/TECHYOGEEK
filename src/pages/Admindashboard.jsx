import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { div } from "motion/react-client";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

// console.log(ADMIN_UUID)  // 👈 replace with your Supabase admin user id

// const ADMIN_UUID = "e6eab30f-6d8f-4bfb-9402-3f914f491fce"

// const admins =["e6eab30f-6d8f-4bfb-9402-3f914f491fce","70c036ff-601b-44f8-9cdf-0525b08de2a2"]

const ADMIN_UUID = import.meta.env.VITE_ADMIN_ID



const admins= [ADMIN_UUID]


const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ fetch all events
  const fetchAllEvents = async () => {
    setLoading(true);
    let { data, error } = await supabase.from("Events").select("*");
    if (error) {
      console.error(error.message);
    } else {
      setEvents(data);
    }
    setLoading(false);
  };

  // ✅ approve an event
  const approveEvent = async (id) => {
    let { error } = await supabase
      .from("Events")
      .update({ is_verify: true })
      .eq("id", id);

    if (error) {
      console.error(error.message);
    } else {
      fetchAllEvents(); // refresh
    }
  };

  // ✅ check admin & fetch events
 useEffect(() => {
  const checkAdmin = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setIsAdmin(false);
      return;
    }

    const isAdmin = admins.includes(user.id);

    if (isAdmin) {
      setIsAdmin(true);
      fetchAllEvents();
    } else {
      setIsAdmin(false);
    }
  };

  checkAdmin();
}, []);


  if (!isAdmin) {
    return <div className="h-screen md:h-screen flex items-center justify-center">
      <Link className="absolute left-0 top-0 px-2 py-2 bg-white rounded-md" to={"/"}> <Home/></Link>
      <img src="/rej.gif" className="h-full" alt="" />
    </div>;
  }

  if (loading) {
    return <h2>Loading events...</h2>;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {events.length === 0 ? (
          <p>No events found</p>
        ) : (
          events.map((event) => (
            <li key={event.id} style={{ marginBottom: "10px" }}>
              <strong>{event.title}</strong> - {event.date} at {event.location}
              {event.is_verify ? (
                <span style={{ color: "green", marginLeft: "10px" }}>
                  ✅ Approved
                </span>
              ) : (
                <button
                  onClick={() => approveEvent(event.id)}
                  style={{ marginLeft: "10px" }}
                  className="px-2 py-2 bg-neutral-700 text-white rounded-sm"
                >
                  Approve
                </button>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AdminDashboard;
