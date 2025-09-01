import React, { useState } from 'react'
import Hero from './Hero'
import {motion} from 'motion/react'
import AllEvents from './AllEvents'
import Nav from '../components/Nav'
import CreateEvent from './CreateEvent'


const Home = () => {


    const [show ,setShow ]  = useState(false)

  return (
    <>
    <div className='min-h-screen relative w-screen bg-[#0b0915]'>

        <Nav  onCreateClick={() =>setShow(true)}/>

            {show &&( <CreateEvent onCreateClick={() =>setShow(false)}/>) }
<section id='hero'><Hero  onCreateClick={() =>setShow(true)} /></section>
<section id="events" className="py-20 relative">
    <AllEvents/>
</section>
 <section id="about" className="py-20 bg-card/30 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-600 to-purple-200 bg-clip-text text-transparent text-nowrap"> <span>TechYoGeek</span><span>Nirvana ? </span> </span>
            </h2>
            <p className="text-xl text-white/40 mb-12">
              We're more than just an event platform. We're building a community 
              where meaningful connections happen and amazing experiences unfold.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Curated Quality</h3>
                <p className="text-white/50">Every event is reviewed by our team to ensure high-quality experiences.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Community First</h3>
                <p className="text-white/50">Connect with like-minded people and build lasting relationships.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Easy to Use</h3>
                <p className="text-white/50">Post events or find them with our intuitive, user-friendly platform.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    
    </>
  )
}

export default Home
