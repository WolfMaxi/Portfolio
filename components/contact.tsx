'use client';

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card";
import { XIcon } from './ui/XIcon';
import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      href: 'mailto:maximilian.wolf@uni-ulm.de',
      description: 'Send me an email',
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/WolfMaxi',
      description: 'Check out my code',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: XIcon,
      href: 'https://twitter.com/MaxiWolf645',
      description: 'Follow me on Twitter',
    },
] as const;

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background/30">
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
                Get in touch
              </h2>
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                    Reach out to me on these platforms
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                const delay = (row * 3 + col) * 0.2;
                return (
                  <motion.div
                  key={social.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay }}
                  viewport={{ once: true }}
                >
		            <Link key={social.id} href={social.href}>
		              <Card className="p-6 h-full shadow-md hover:bg-primary/10 hover:border-primary/50 hover:scale-105 duration-300">
		                <div className="flex flex-col items-center text-center">
		                  <social.icon key={social.id} className="w-8 h-8 shrink-0 mb-2" />
		                  <h3 className="text-md font-semibold mb-2">{social.name}</h3>
		                  <p className="text-muted-foreground">{social.description}</p>
		                </div>
		              </Card>
		            </Link>
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