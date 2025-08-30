import { BrainCircuit } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-primary" />
          <span className="font-semibold">Sarowar Islam</span>
        </div>
        <p className="text-muted-foreground text-sm mt-4 sm:mt-0">
          &copy; {currentYear} Sarowar Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
