import { Route, Switch } from "wouter";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Apply from "@/pages/Apply";
import Confirmation from "@/pages/Confirmation";
import NotFound from "@/pages/not-found";

import { useLocation } from "wouter";

function App() {
  const [location] = useLocation();

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          <AnimatePresence mode="wait">
            <Switch key={location}>
              <Route path="/" component={Home} />
              <Route path="/apply" component={Apply} />
              <Route path="/confirmation" component={Confirmation} />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
