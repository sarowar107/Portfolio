import { Code, BrainCircuit } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary/10 border border-primary/20 rounded-lg group-hover:bg-primary/20 transition-colors">
            <BrainCircuit className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold text-foreground">Sarowar Islam</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-lg">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
        </nav>
        <a href="#contact">
          <Button size="lg" className="hidden md:flex group relative">
            Contact Me
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
