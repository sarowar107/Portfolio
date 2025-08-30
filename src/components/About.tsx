import { GraduationCap, Code, BrainCircuit, Award, University } from 'lucide-react';

const academicJourney = [
    {
        institution: "Chittagong University of Engineering & Technology",
        degree: "B.Sc. in Computer Science & Engineering",
        metric: "CGPA: 3.93",
        icon: University,
        iconColor: "text-primary",
    },
    {
        institution: "Adhyapak Abdul Majid College",
        degree: "Higher Secondary Certificate (Science)",
        metric: "GPA: 5.00",
        icon: Award,
        iconColor: "text-secondary",
    }
];

const expertisePillars = [
  {
    icon: Code,
    title: "Full-Stack Expertise",
    description:
      "I specialize in crafting end-to-end web solutions — from designing intuitive, responsive user interfaces with React to building secure and scalable backends using Django and REST APIs. My goal is to deliver seamless, high-performance applications that blend functionality with exceptional user experience.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: BrainCircuit,
    title: "Exploring Machine Learning",
    description:
      "I am deeply passionate about the intersection of data and intelligence. With a growing focus on Machine Learning, I aim to explore advanced algorithms, develop innovative models, and contribute to research-driven solutions that empower smarter, data-informed decision-making.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  }
];
const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A curious learner and BSc Engineering student with a passion for building scalable web apps and exploring machine learning to create impactful, intelligent technologies.
          </p>
        </div>

        <div className="space-y-20">
          {/* Academic Journey */}
          <div className="relative border border-border rounded-3xl p-8 bg-muted/20">
             <div className="absolute top-8 left-8 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
             </div>
             <h3 className="text-2xl font-bold mb-8 pl-16">Academic Journey</h3>
             <div className="relative pl-6">
                <div className="absolute left-[35px] top-2 h-[calc(100%-1rem)] w-0.5 bg-border/50"></div>
                <ul className="space-y-10">
                    {academicJourney.map((item, index) => (
                        <li key={index} className="relative flex items-start gap-6">
                            <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center">
                                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold">{item.institution}</h4>
                                <p className="text-muted-foreground">{item.degree}</p>
                                <span className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary`}>
                                    {item.metric}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
             </div>
          </div>

          {/* Expertise Pillars */}
          <div className="space-y-12">
            {expertisePillars.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-6 border border-border rounded-3xl p-8 bg-muted/20">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl border border-border flex items-center justify-center ${item.iconBg}`}>
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <div className="mt-2 sm:mt-0">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
