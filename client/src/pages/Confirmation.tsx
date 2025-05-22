import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const Confirmation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20, 
              delay: 0.2 
            }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center text-green-500 text-4xl">
              <CheckIcon size={40} />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Application Submitted!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-neutral-600 mb-8"
          >
            Thank you for applying to DataZen for the 2025-26 academic year. We have received your application and will review it shortly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
              alt="Abstract tech pattern"
              className="w-full h-48 object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-xl shadow border border-neutral-200 text-left mb-10"
          >
            <h3 className="font-bold text-xl mb-4">What's Next?</h3>
            <ol className="space-y-3">
              <li className="flex">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <p>Our team will review your application within the next 7-10 days</p>
              </li>
              <li className="flex">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <p>Shortlisted candidates will receive an email invitation for the interview round</p>
              </li>
              <li className="flex">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <p>Final selections will be announced by the end of the month</p>
              </li>
            </ol>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold transform transition-transform hover:scale-105"
              >
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Confirmation;
