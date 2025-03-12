'use client';

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card";
import { Code2, Palette, Brain, Server, Lock, Sparkles } from "lucide-react";
import { calculateYears } from "@/lib/utils"

const skills = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Crafting responsive and intuitive user interfaces",
    icon: Code2
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Creating beatiful & user-friendly modern designs",
    icon: Palette
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Ensuring optimal performance, security & reliability",
    icon: Server
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Exploring possibilities using AI",
    icon: Brain
  },
  {
    id: "security",
    title: "Security",
    description: "Testing systems for security vulnerabilities",
    icon: Lock
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Creating user specific innovative solutions",
    icon: Sparkles
  }
];

const age = calculateYears(new Date(2005, 4, 6))

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <Card className="p-8 shadow-lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                About me
              </h2>
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a {age}-year-old Computer Science Student at the University of Ulm, currently pursuing my Bachelor Degree.
                  Ever since i started programming at the age of 13, i was fascinated by technology and its capabilities.
                  The fields i am particularly interested in are as follows:
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                const delay = (row * 3 + col) * 0.1;

                return (
                  <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay }}
                  viewport={{ once: true }}
                >
                  <Card key={skill.id} className="p-6 h-full hover:border-primary/50 hover:bg-primary/10 hover:scale-105 duration-300">
                    <div className="flex flex-col items-center text-center">
                      <skill.icon key={skill.id} className="w-8 h-8 shrink-0 mb-2" />
                      <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </Card>
                </motion.div>
                )
            })}
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}