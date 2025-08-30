import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">Let's get in touch via email.</p>
                <a href="mailto:sarowar107@gmail.com" className="text-primary hover:underline">
                  Send an Email
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <Linkedin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <p className="text-muted-foreground">Connect with me professionally.</p>
                <a href="https://www.linkedin.com/in/md-sarowar-islam-89b2282aa/" className="text-secondary hover:underline">
                  View LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <Github className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">GitHub</h3>
                <p className="text-muted-foreground">Check out my code and projects.</p>
                <a href="https://github.com/sarowar107" className="text-accent hover:underline">
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
          
          <form className="space-y-6 bg-muted/20 p-8 rounded-2xl border border-border">
            <div className="grid sm:grid-cols-2 gap-6">
              <Input type="text" placeholder="Your Name" className="py-6 bg-background" />
              <Input type="email" placeholder="Your Email" className="py-6 bg-background" />
            </div>
            <Input type="text" placeholder="Subject" className="py-6 bg-background" />
            <Textarea placeholder="Your Message" rows={6} className="bg-background" />
            <Button type="submit" size="lg" className="w-full py-6 text-lg font-bold">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
