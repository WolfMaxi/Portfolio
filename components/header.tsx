'use client';

import { MapPin, Download, Mail, Github, CodeXml} from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function Header() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-32 h-32 md:w-40 md:h-40 lg:h-48 lg:w-48 mb-8 group"
        >
          <img
            src="/assets/hero/avatar.jpeg"
            className="rounded-full relative shadow-[0_5px_20px_5px_rgba(0,0,0,0.2)] dark:shadow-[0_0px_20px_5px_rgba(255,255,255,0.1)] z-10 w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          Maximilian Wolf
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <p className="text-xl md:text-2xl text-foreground">Bachelor Student</p>
          <div className="flex gap-2 text-muted-foreground">
            <CodeXml />
            <span>Computer Science</span>
            <MapPin />
            <span>University of Ulm</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="gap-2 bg-primary transition-transform hover:scale-105 duration-300 shadow-[0_0_4px_2px_rgba(0,115,255,0.5)]"
            asChild
          >
            <a href="/resources/CV_Wolf_Maximilian.pdf" download>
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group hover:border-primary/50 transition-transform hover:scale-105 duration-300 hover:bg-primary/10 shadow-md"
          >
            <a
              href="mailto:maximilian.wolf@uni-ulm.de"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Mail className="w-4 h-4" />
              Mail
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group hover:border-primary/50 transition-transform hover:scale-105 duration-300 hover:bg-primary/10 shadow-md"
          >
            <a
              href="https://github.com/WolfMaxi"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce"
            onClick={scrollToNextSection}
          >
            <span className="sr-only">Scroll down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Button>
        </motion.div>
      </motion.header>
    </section>
  );
}
