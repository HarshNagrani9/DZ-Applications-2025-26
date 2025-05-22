import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckIcon, LineChartIcon, BrainCircuitIcon, PresentationIcon } from "lucide-react";

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h1 
                variants={item}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                We at <span className="text-primary">DataZen</span> are recruiting
              </motion.h1>
              <motion.p 
                variants={item}
                className="text-lg md:text-xl text-neutral-500 mb-8"
              >
                Join the official Data Science Council of Somaiya Vidyavihar University and be part of the data revolution.
              </motion.p>
              <motion.div variants={item}>
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-bold transform transition-transform hover:scale-105"
                  >
                    Apply Now
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Data Science Visualization"
                className="rounded-xl shadow-lg w-full max-w-md h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <FeatureCard 
              icon={<LineChartIcon className="h-8 w-8" />}
              title="Data Analysis"
              description="Learn how to analyze complex datasets and extract meaningful insights through various analytical techniques."
            />
            
            <FeatureCard 
              icon={<BrainCircuitIcon className="h-8 w-8" />}
              title="Machine Learning"
              description="Explore the fascinating world of machine learning algorithms and their applications in solving real-world problems."
            />
            
            <FeatureCard 
              icon={<PresentationIcon className="h-8 w-8" />}
              title="Workshops & Events"
              description="Participate in hands-on workshops, hackathons, and guest lectures from industry experts in data science."
            />
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Abstract data visualization"
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:pl-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2 
                variants={item}
                className="text-3xl font-bold mb-6"
              >
                Why Join DataZen?
              </motion.h2>
              <motion.ul 
                className="space-y-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <BenefitItem text="Gain hands-on experience with real-world data science projects" />
                <BenefitItem text="Network with industry professionals and like-minded peers" />
                <BenefitItem text="Enhance your resume with prestigious council experience" />
                <BenefitItem text="Access to exclusive workshops, competitions, and learning resources" />
                <BenefitItem text="Opportunity to work on interdisciplinary projects that make an impact" />
              </motion.ul>
              <motion.div 
                variants={item}
                className="mt-8"
              >
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-bold transform transition-transform hover:scale-105"
                  >
                    Join Our Team
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <TestimonialCard
              initials="RP"
              name="Rahul Patel"
              role="Computer Science, 2024"
              quote="Being part of DataZen has transformed my understanding of data science. The workshops and projects gave me practical skills that I couldn't learn just from classroom lectures."
            />
            
            <TestimonialCard
              initials="AS"
              name="Ananya Sharma"
              role="Data Science, 2023"
              quote="The connections I made through DataZen helped me secure an internship at a top tech company. The mentorship from seniors and exposure to industry problems was invaluable."
            />
            
            <TestimonialCard
              initials="KM"
              name="Karan Mehta"
              role="AI & ML, 2024"
              quote="The hackathons organized by DataZen pushed me to apply my knowledge in creative ways. Working with a diverse team taught me collaboration skills that are essential in the industry."
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animated-background text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your DataZen Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Applications for the 2025-26 academic year are now open. Join us in shaping the future of data science at Somaiya Vidyavihar University.
            </p>
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100 font-bold transform transition-transform hover:scale-105"
              >
                Apply for 2025-26
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-neutral-200 transform transition hover:-translate-y-1"
  >
    <div className="text-primary text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-neutral-500">{description}</p>
  </motion.div>
);

// Benefit Item Component
interface BenefitItemProps {
  text: string;
}

const BenefitItem = ({ text }: BenefitItemProps) => (
  <motion.li
    variants={{
      hidden: { opacity: 0, x: -10 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }}
    className="flex items-start"
  >
    <div className="text-primary mr-3 mt-1">
      <CheckIcon className="h-5 w-5" />
    </div>
    <p>{text}</p>
  </motion.li>
);

// Testimonial Card Component
interface TestimonialCardProps {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

const TestimonialCard = ({ initials, name, role, quote }: TestimonialCardProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-neutral-200"
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold mr-4">
        {initials}
      </div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-neutral-500 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-neutral-600 italic">{quote}</p>
  </motion.div>
);

export default Home;
