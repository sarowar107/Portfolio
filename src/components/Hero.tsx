import { ArrowDown, Github, Linkedin, Mail, User } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)/0.15),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 transition-transform duration-300 hover:scale-105 shadow-xl shadow-primary/20">
              <div className="w-full h-full rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/pictures/Profile.png"
                  alt="Sarowar Islam"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-icon')) {
                      const icon = document.createElement('div');
                      icon.className = 'fallback-icon';
                      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                      parent.appendChild(icon);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 transition-all duration-300 hover:from-neutral-100 hover:to-neutral-300">
            Sarowar Islam
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
           Engineering Student • Full-Stack Developer • ML Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            As a BSc Engineering student, I develop robust and efficient web applications while pursuing my passion for machine learning, aiming to combine software engineering and data-driven intelligence to build smarter solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-105">
                View My Work
              </Button>
            </a>
            <a href="/resume.pdf" download>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full font-bold border-2 border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-105">
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
        </a>
      </div>

      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <a href="https://github.com/sarowar107" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-2 hover:bg-primary/10">
            <Github className="h-6 w-6" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/md-sarowar-islam-89b2282aa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-2 hover:bg-primary/10">
            <Linkedin className="h-6 w-6" />
          </Button>
        </a>
        <a href="mailto:sarowar107@gmail.com" aria-label="Email">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-2 hover:bg-primary/10">
            <Mail className="h-6 w-6" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
