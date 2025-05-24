import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "./LoadingSpinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [_, navigate] = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) {
          // No user is signed in, redirect to email verification
          navigate("/verify-email");
          return;
        }

        // Check if email is a Somaiya email
        if (!user.email?.endsWith("@somaiya.edu")) {
          await auth.signOut();
          toast({
            title: "Invalid email address",
            description: "Please use your Somaiya email address (@somaiya.edu)",
            variant: "destructive",
          });
          navigate("/verify-email");
          return;
        }

        // Check if user has already applied
        const applicationRef = doc(db, "applications", user.email);
        const applicationDoc = await getDoc(applicationRef);

        if (applicationDoc.exists()) {
          await auth.signOut();
          toast({
            title: "Already Applied",
            description: "You have already submitted an application with this email address.",
            variant: "destructive",
          });
          navigate("/verify-email");
          return;
        }

        // If we get here, user is authenticated with a valid Somaiya email
        // and hasn't applied yet
        setIsLoading(false);
      } catch (error) {
        console.error("Auth state change error:", error);
        navigate("/verify-email");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate, toast]);

  if (isLoading) {
    return <LoadingSpinner show={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 