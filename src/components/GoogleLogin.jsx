// src/components/GoogleAuth.jsx
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const [user, setUser] = useState(null);

 const navigate = useNavigate()
  // Check current user on mount
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) setUser(data.user);
    };

    getUser();

    // Listen for login/logout changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
    
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          navigate("/")
               localStorage.setItem("supabaseUser", JSON.stringify(user));
          console.log("User saved to localStorage:", user);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );


    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Login with Google
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    
   
    if (error) console.error("Google login error:", error.message);
  };

  // Logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Logout error:", error.message);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4">
     <button
          onClick={handleLogin}
          className="bg-white  text-black capitalize px-4 py-[1px] rounded-lg flex items-center gap-3"
        >
          <h1>login with</h1>
          <img src="/google.png" className="h-[20px]" alt="" />
        </button>
    </div>
  );
}
