'use client';

import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { XIcon } from './ui/XIcon';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    id: 'social-email',
    name: 'Email',
    icon: Mail,
    href: 'mailto:maximilian.wolf@uni-ulm.de',
  },
  {
    id: 'social-github',
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/WolfMaxi',
  },
  {
    id: 'social-twitter',
    name: 'Twitter',
    icon: XIcon,
    href: 'https://twitter.com/FabiKarl',
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Maximilian Wolf</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Computer Science Student at the University of Ulm
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Maximilian Wolf. All rights reserved.
          </p>

          <div className="flex gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button key={link.id} variant="ghost" size="icon" asChild>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith('mailto:') ? undefined : '_blank'
                    }
                    rel={
                      link.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={link.name}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                </Button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}