import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  show: boolean;
  message?: string;
}

const LoadingSpinner = ({ show, message = "Processing your application..." }: LoadingSpinnerProps) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white bg-opacity-80 dark:bg-background dark:bg-opacity-80 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-neutral-300 border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="text-neutral-600 dark:text-neutral-300 font-medium">{message}</p>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;
