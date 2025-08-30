import { SKILLS_DATA } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Technical Skills</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A collection of technologies and tools I use to build modern web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category) => (
            <Card key={category.category} className="bg-muted/20 border-2 border-border/50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 p-6 bg-muted/30 border-b-2 border-border/50">
                <category.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-bold">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <TooltipProvider key={skill.name} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="bg-background p-3 rounded-lg border border-border cursor-pointer transition-transform duration-200 hover:scale-110 hover:border-secondary">
                            {typeof skill.icon === 'string' ? (
                              <img src={skill.icon} alt={skill.name} className="h-8 w-8" />
                            ) : (
                              <skill.icon className="h-8 w-8" />
                            )}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
