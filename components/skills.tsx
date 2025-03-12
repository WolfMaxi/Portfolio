'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'C#', level: 80 },
  { name: 'HTML', level: 70 },
  { name: 'PHP', level: 80 },
  { name: 'Haskell', level: 70 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        <Card className="p-8 shadow-lg mx-auto max-w-4xl">
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-4" />
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
