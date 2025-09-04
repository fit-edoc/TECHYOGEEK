import React, { useState } from 'react'
import {motion} from 'motion/react'
import { Calendar, Menu, X, Plus, Settings,LogInIcon } from "lucide-react";
import { useSupabase } from '../context/supabaseProvider';
import GoogleLogin from './GoogleLogin';
import Logout from './Logout';
import { Link, useNavigate } from 'react-router-dom';


const Nav = ({onCreateClick}) => {


  const navigate = useNavigate()
const {user} = useSupabase()

<<<<<<< HEAD
console.log(user)
=======

>>>>>>> 87dec24 (new)

     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Events", href: "#events" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];







  return (
    <motion.header 
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20 text-white"
>
  <div className="container mx-auto h-[60px] px-2 flex items-center justify-between">
    
    {/* Logo Section */}
    <motion.div 
      className="flex items-center space-x-2 bg-gradient-to-b from-[#280c45] border-b-2 border-r-2 border-white rounded-md py-1 px-1"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      
    <a href="#hero">  <span className="text-xl font-logo text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-200">
        TYGN
      </span></a>
    </motion.div>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.href}
          className="text-foreground/80 hover:text-foreground transition-colors duration-300 relative group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
      ))}
    </nav>

    {/* Action Buttons (Fixed Height Box) */}
    <div className="hidden md:flex items-center justify-center gap-2 h-full">
      <Link to="/admin">
        <button className="flex gap-2 bg-[#151124] px-2 py-1 rounded-md items-center">
          <Settings className="h-4 w-4" /> Admin
        </button>
      </Link>

      {/* Keep same height always */}
      <div className="flex items-center justify-evenly gap-2">
        {user ? (
          <button 
            className="px-2 py-[1px] text-black bg-purple-400 rounded-md"  
            onClick={onCreateClick}
          >
            + Post Event
          </button>
        ) : (
          <GoogleLogin />
        )}
        {user && <Logout />}
      </div>
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden p-2 text-foreground"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </div>

  {/* Mobile Menu */}
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className={`md:hidden   overflow-hidden transition-all duration-300 ${
      isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <nav className="flex flex-col space-y-4 p-4">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-foreground/80 hover:text-foreground transition-colors duration-300 px-2 py-1"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </a>
      ))}

      <div className="flex flex-col gap-2  space-y-2 pt-4 border-t border-border/50">
        <Link to="/admin" className='flex   justify-center '>
          <button className="flex px-7 py-1 bg-[#151124]  rounded-md">
            <Settings className="p-1 ml-1"/> Admin
          </button>
        </Link>

        {user ? (
          <button className="p-1 text-black bg-gradient-to-r from-purple-600 to-purple-200 rounded-md" onClick={onCreateClick}>
            + Post Event
          </button>
        ) : (
          <GoogleLogin />
        )}
        {user && <Logout />}
      </div>
    </nav>
  </motion.div>
</motion.header>

  )
}

export default Nav
