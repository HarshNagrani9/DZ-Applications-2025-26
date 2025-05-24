import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ArrowLeft } from "lucide-react";

const EmailVerification = () => {
  const [_, navigate] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.email?.endsWith("@somaiya.edu")) {
        await auth.signOut();
        toast({
          title: "Invalid email address",
          description: "Please use your Somaiya email address (@somaiya.edu)",
          variant: "destructive",
        });
        return;
      }

      // Check if user has already applied and submitted the form
      const applicationRef = doc(db, "applications", user.email);
      const applicationDoc = await getDoc(applicationRef);

      if (applicationDoc.exists()) {
        const data = applicationDoc.data();
        if (data.formSubmitted) {
          await auth.signOut();
          toast({
            title: "Already Applied",
            description: "You have already submitted an application with this email address.",
            variant: "destructive",
          });
          return;
        } else {
          // User has started but not submitted the form
          toast({
            title: "Continue Application",
            description: "You have a saved application. Please complete and submit it.",
            variant: "default",
          });
          navigate("/apply");
          return;
        }
      }

      // If everything is valid, redirect to application form
      navigate("/apply");
    } catch (error: any) {
      console.error("Sign in error:", error);
      let errorMessage = "Please try again later.";
      
      if (error.code === 'auth/popup-blocked') {
        errorMessage = "Please allow popups for this website or disable your ad blocker.";
      } else if (error.code === 'auth/cancelled-popup-request') {
        errorMessage = "Sign in was cancelled. Please try again.";
      } else if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "Sign in popup was closed. Please try again.";
      }

      toast({
        title: "Sign in failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col justify-center py-10 px-4"
    >
      <div className="max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-primary">DataZen</span> Application
          </h1>
          <p className="text-neutral-600">
            Sign in with your Somaiya email to continue
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-neutral-200"
        >
          <div className="space-y-6">
            <Button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 font-medium py-3 rounded-lg transform transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <LoadingSpinner show={true} />
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              )}
              {isLoading ? "Signing in..." : "Continue with Google"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neutral-500">
                  Use your Somaiya email (@somaiya.edu)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-neutral-600 hover:text-neutral-900"
            disabled={isLoading}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EmailVerification; 