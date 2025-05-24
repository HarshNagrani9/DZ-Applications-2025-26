import { Route, Switch } from "wouter";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProtectedRoute from "@/components/ProtectedRoute";

import Home from "@/pages/Home";
import Apply from "@/pages/Apply";
import Confirmation from "@/pages/Confirmation";
import EmailVerification from "@/pages/EmailVerification";
import NotFound from "@/pages/not-found";

import { useLocation } from "wouter";

function App() {
  const [location] = useLocation();

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Switch key={location}>
              <Route path="/" component={Home} />
              <Route path="/verify-email" component={EmailVerification} />
              <Route path="/apply">
                <ProtectedRoute>
                  <Apply />
                </ProtectedRoute>
              </Route>
              <Route path="/confirmation" component={Confirmation} />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
