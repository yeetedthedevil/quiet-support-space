
import { useEffect } from 'react';
import { Mail } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import BackgroundEffect from '@/components/BackgroundEffect';
import ContactButton from '@/components/ContactButton';
import { Card } from '@/components/ui/card';

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "IT Helpdesk - Service Update";
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 relative">
      {/* Background effect */}
      <BackgroundEffect />
      
      {/* Theme toggle positioned in top right */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      {/* Main content card */}
      <Card className="max-w-xl w-full glass-panel glass-panel-dark py-10 px-6 sm:p-10 rounded-2xl">
        {/* Logo or icon - using a simple circle as placeholder */}
        <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mx-auto mb-8 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail size={32} className="text-primary" />
          </div>
        </div>
        
        {/* Main heading */}
        <div className="space-y-1 text-center mb-3">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Service Update</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">IT Helpdesk Closed</h1>
        </div>
        
        {/* Message content */}
        <div className="mt-6 mb-8">
          <p className="text-center text-muted-foreground leading-relaxed mb-4">
            Our IT support system is currently closed. 
            For all technical support needs, please contact us via email.
          </p>
          <p className="text-center text-sm text-muted-foreground mb-6">
            We aim to respond to all inquiries within one business day.
          </p>
          
          {/* Contact info */}
          <div className="bg-secondary/50 rounded-lg p-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-muted-foreground">Email us at:</span>
            <a 
              href="mailto:support@lyndonsac.co.uk" 
              className="text-primary font-medium hover:underline"
            >
              support@lyndonsac.co.uk
            </a>
          </div>
        </div>
        
        {/* Contact button */}
        <div className="flex justify-center">
          <ContactButton email="support@lyndonsac.co.uk" />
        </div>
      </Card>
      
      {/* Footer */}
      <div className="mt-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Lyndons Academy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
