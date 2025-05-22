import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DatabaseIcon, ChartBarIcon, GraduationCapIcon } from "lucide-react";

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
      className="min-h-screen flex flex-col justify-center items-center py-16 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
          className="mb-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center"
            variants={item}
          >
            <GraduationCapIcon className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-primary">DataZen</span> Recruitment
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-neutral-600 mb-8"
          >
            Join the official Data Science Council of Somaiya Vidyavihar University for the 2025-26 academic year
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="flex items-center p-4 rounded-lg bg-neutral-50 border border-neutral-200">
              <ChartBarIcon className="h-8 w-8 text-primary mr-3" />
              <div className="text-left">
                <h3 className="font-semibold">Data Analysis</h3>
                <p className="text-sm text-neutral-500">Gain real-world experience</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 rounded-lg bg-neutral-50 border border-neutral-200">
              <DatabaseIcon className="h-8 w-8 text-primary mr-3" />
              <div className="text-left">
                <h3 className="font-semibold">Machine Learning</h3>
                <p className="text-sm text-neutral-500">Build innovative solutions</p>
              </div>
            </div>
          </motion.div>
          
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
      </div>
    </motion.div>
  );
};

export default Home;
