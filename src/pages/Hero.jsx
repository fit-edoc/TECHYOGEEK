import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Sparkles } from "lucide-react";


const Hero = ({onCreateClick}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#130f21] text-white">
      {/* Background Elements */}
      <div className=".back absolute inset-0 "></div>
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-[#362c5b] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#362c5b] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass border-[0.1px] border-white/40"
          >
            <Sparkles className="h-4 w-4 text-purple-300 mr-2" />
            <span className="text-sm text-foreground/80">Welcome to the Future of Events</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Discover Amazing{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-200 bg-clip-text text-transparent">Events</span>
            <br />
            Near You
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-gray-400"
          >
            Connect with your community through carefully curated events. 
            Post your own events and let others discover what you're passionate about.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 text-black font-semibold"
          >
            <button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-200 px-8 py-2 rounded-md  flex justify-center items-center hover:shadow-glow text-lg group"
            >
              <a href="#events">Explore Events</a>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-6 py-2 text-white bg-[#271f43] border-white/40  rounded-md border-[0.1px]"
           onClick={onCreateClick} >
              Post an Event
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;