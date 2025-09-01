import { button } from 'motion/react-client';
import React from 'react'
import { supabase } from '../supabaseClient';


const Logout = () => {
     const handleLogout = async () => {
          const { error } = await supabase.auth.signOut();
        
          if (error) {
            console.error("❌ Logout error:", error.message);
            alert("Logout failed: " + error.message);
          } else {
            console.log("✅ User logged out successfully");
            navigate("/"); // only after success
            localStorage.removeItem("supabaseUser")
          }
        };
  return (
    <button onClick={handleLogout} className='bg-white  text-black capitalize px-4 py-[1px] rounded-lg'>
        logout 

    </button>
  )
}

export default Logout
