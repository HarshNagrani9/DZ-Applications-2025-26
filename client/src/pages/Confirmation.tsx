import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckIcon, ArrowRight, Clock, Users, Award } from "lucide-react";

const Confirmation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col justify-center py-10 px-4"
    >
      <div className="max-w-lg mx-auto w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20
          }}
          className="mb-6 flex justify-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500">
            <CheckIcon size={32} />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-3">Application Submitted!</h1>
          <p className="text-neutral-600">
            Thank you for applying to DataZen for the 2025-26 academic year. We've received your application.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 mb-8"
        >
          <h3 className="font-bold text-xl mb-5 flex items-center">
            <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
              <ArrowRight size={18} />
            </span>
            Next Steps
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-neutral-100 p-2 rounded-md mr-3 text-neutral-700">
                <Clock size={18} />
              </div>
              <div>
                <p className="font-medium">Application Review</p>
                <p className="text-sm text-neutral-500">Our team will review your application within 7-10 days</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-neutral-100 p-2 rounded-md mr-3 text-neutral-700">
                <Users size={18} />
              </div>
              <div>
                <p className="font-medium">Interview Round</p>
                <p className="text-sm text-neutral-500">Shortlisted candidates will receive an email invitation</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-neutral-100 p-2 rounded-md mr-3 text-neutral-700">
                <Award size={18} />
              </div>
              <div>
                <p className="font-medium">Final Selection</p>
                <p className="text-sm text-neutral-500">Results will be announced by the end of the month</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/">
            <Button
              className="bg-primary hover:bg-primary/90 text-white font-medium transform transition-transform hover:scale-105"
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Confirmation;
