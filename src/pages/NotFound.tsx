
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackgroundEffect from "@/components/BackgroundEffect";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page Not Found - IT Helpdesk";
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 relative">
      <BackgroundEffect />
      
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <Card className="max-w-md w-full glass-panel glass-panel-dark py-10 px-6 sm:p-10 rounded-2xl opacity-0 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">404</h1>
        <p className="text-xl text-muted-foreground text-center mb-8">
          This page does not exist
        </p>
        
        <div className="flex justify-center">
          <Button 
            asChild
            className="bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-5 rounded-xl text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <a href="/">
              <Home size={18} className="mr-2" />
              Return to Home
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
