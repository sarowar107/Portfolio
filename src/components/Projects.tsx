import { PROJECTS_DATA } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">My Projects</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one was a unique challenge and a learning opportunity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <Card key={project.title} className="bg-background/50 border-2 border-border/50 rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-muted/30 border-t-2 border-border/50">
                <div className="flex items-center justify-between w-full">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
