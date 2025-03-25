
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactButtonProps {
  email: string;
}

const ContactButton = ({ email }: ContactButtonProps) => {
  const handleContact = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Button 
      onClick={handleContact}
      className="bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-6 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
    >
      <Mail size={18} className="mr-1" />
      Contact Support
    </Button>
  );
};

export default ContactButton;
