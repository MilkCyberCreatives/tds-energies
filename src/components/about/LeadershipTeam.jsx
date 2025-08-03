import { 
  FaUsers, FaChevronRight, FaLinkedin, FaTwitter, FaEnvelope 
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Thandi Ndlovu",
      role: "CEO & Founder",
      bio: "20+ years in drilling and energy infrastructure. Passionate about transforming South Africa's energy landscape through sustainable solutions.",
      img: "/images/team/thandi.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:thandi@tdsenergies.com"
      }
    },
    {
      name: "James Khumalo",
      role: "Technical Director",
      bio: "Renewable energy and hydrogen specialist with a background in mechanical engineering and project management.",
      img: "/images/team/james.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:james@tdsenergies.com"
      }
    },
    {
      name: "Lerato Mbeki",
      role: "Operations Director",
      bio: "Leads water infrastructure projects with a focus on community impact and sustainable development.",
      img: "/images/team/lerato.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:lerato@tdsenergies.com"
      }
    }
  ];

  return (
    <section className="py-20 px-4">
      <motion.div 
        className="max-w-7xl mx-auto bg-[#2D2D2D]/50 backdrop-blur-lg rounded-2xl border border-[#ffffff]/10 shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="p-8 md:p-12">
          {/* Section header */}
          <motion.div 
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-full bg-[#FFD700]/10">
              <FaUsers className="text-3xl text-[#FFD700]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Meet Our <span className="text-[#FFD700]">Leadership</span>
            </h2>
          </motion.div>

          {/* Team grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((member, index) => (
              <motion.div
                key={index}
                className="bg-[#2D2D2D]/70 rounded-xl border border-[#ffffff]/10 overflow-hidden hover:border-[#FFD700]/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 to-transparent" />

                  {/* Social links */}
                  <motion.div 
                    className="absolute bottom-4 left-4 flex gap-2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-[#2D2D2D] text-[#BCBCBC] hover:text-[#0077B5] hover:bg-white transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      className="p-2 rounded-full bg-[#2D2D2D] text-[#BCBCBC] hover:text-[#1DA1F2] hover:bg-white transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaTwitter />
                    </motion.a>
                    <motion.a
                      href={member.social.email}
                      className="p-2 rounded-full bg-[#2D2D2D] text-[#BCBCBC] hover:text-[#D44638] hover:bg-white transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaEnvelope />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#FFD700] mb-3">{member.role}</p>
                  <p className="text-[#BCBCBC] mb-4">{member.bio}</p>
                  
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-sm text-[#FFD700] hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    Read full bio <FaChevronRight className="ml-1 text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#BCBCBC] mb-6 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience across energy, water, and infrastructure development.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg bg-[#FFD700] hover:bg-[#e6c800] text-[#1a1a1a] font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
