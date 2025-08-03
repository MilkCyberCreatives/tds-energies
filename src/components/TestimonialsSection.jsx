import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "TDS Energies transformed our water infrastructure with sustainable solutions that reduced costs by 40% while improving community access.",
      author: "Thandi Nkosi",
      role: "Municipal Manager, Govan Mbeki Municipality",
      logo: "/images/testimonials/municipality.png"
    },
    {
      id: 2,
      quote: "Their solar installation expertise helped us achieve energy independence. Professional team that delivered ahead of schedule.",
      author: "James Khumalo",
      role: "Operations Director, Mining Corp SA",
      logo: "/images/testimonials/mining.jpg"
    },
    {
      id: 3,
      quote: "As a fellow woman-led business, we're proud to partner with TDS. Their hydrogen research is groundbreaking for our industry.",
      author: "Dr. Lindiwe van der Merwe",
      role: "CEO, Future Energy Africa",
      logo: "/images/testimonials/energy.jpg"
    },
    {
      id: 4,
      quote: "The drilling team's precision and safety standards exceeded our expectations. Will definitely contract them again.",
      author: "Peter van Niekerk",
      role: "Project Manager, Civil Engineering Ltd",
      logo: "/images/testimonials/engineering.png"
    }
  ];

  const partners = [
    "/images/testimonials/partner1.jpg",
    "/images/testimonials/partner2.jpg",
    "/images/testimonials/partner3.jpg",
    "/images/testimonials/partner4.jpg",
    "/images/testimonials/partner5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    resetInterval();
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    resetInterval();
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section id="testimonials" className="relative py-20 px-4">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/testimonials/grid-pattern.jpg')] bg-cover opacity-10" />
      
      <motion.div
        className="relative max-w-7xl mx-auto glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-[#ffffff]/10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FFD700]">Trusted</span> By Industry Leaders
          </motion.h2>

          {/* Testimonials */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="glass-testimonial hover:glass-testimonial-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <FaQuoteLeft className="text-[#FFD700] text-2xl mb-4 opacity-70" />
                  <p className="text-[#BCBCBC] italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.author}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-[#BCBCBC]">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Arrows */}
            <motion.button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full glass-arrow"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 215, 0, 0.1)" }}
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full glass-arrow"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 215, 0, 0.1)" }}
            >
              <FaChevronRight />
            </motion.button>
          </div>

          {/* Indicators */}
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToIndex(index)}
                className={`h-3 rounded-full transition-all cursor-pointer ${
                  currentIndex === index ? 'bg-[#FFD700]' : 'bg-[#BCBCBC]/30'
                }`}
                initial={{ width: 12 }}
                animate={{ width: currentIndex === index ? 24 : 12 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Partners */}
        <div className="p-8 md:p-12">
          <motion.h3
            className="text-xl font-semibold text-[#BCBCBC] mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            OUR STRATEGIC PARTNERS
          </motion.h3>

          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="p-4 glass-partner hover:glass-partner-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Global Styles */}
      <style jsx>{`
        .glass-panel {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .glass-testimonial {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          transition: all 0.3s ease;
          height: 100%;
        }
        .glass-testimonial-hover {
          background: rgba(45, 45, 45, 0.8);
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 0 8px 24px rgba(255, 215, 0, 0.1);
        }
        .glass-arrow {
          background: rgba(45, 45, 45, 0.8);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #BCBCBC;
          transition: all 0.3s ease;
        }
        .glass-partner {
          background: rgba(45, 45, 45, 0.5);
          backdrop-filter: blur(4px);
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-partner-hover {
          background: rgba(45, 45, 45, 0.7);
          border-color: rgba(255, 215, 0, 0.3);
        }
      `}</style>
    </section>
  );
}