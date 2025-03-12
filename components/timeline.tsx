"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Calendar } from "lucide-react"

const timelineItems = [
  {
    year: "2024",
    title: "B.Sc. in Computer Science",
    description: "University of Ulm",
    icon: Calendar
  },
  {
    year: "2022",
    title: "High School",
    description: "Pestalozzi-Gymnasium Biberach a.d. Riß",
    icon: Calendar
  },
  {
    year: "2016",
    title: "Middle School",
    description: "Caspar-Mohr-Progymnasium Bad Schussenried",
    icon: Calendar
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Timeline
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div 
            className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
            style={{ marginTop: "24px" }}
          />

          <div className="space-y-24">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Center marker with animated ring */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:scale-125 transition-transform duration-300" />
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center z-10 shadow-lg border-4 border-background relative">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                      {/* Connector lines */}
                      <div 
                        className={`absolute top-1/2 h-0.5 from-primary/50 to-transparent
                          ${index % 2 === 0 
                            ? 'bg-gradient-to-l right-full w-[calc(24rem-6px)]' 
                            : 'bg-gradient-to-r left-full w-[calc(24rem-6px)]'
                          }
                          hidden md:block
                        `}
                      />
                    </div>
                  </div>
                  <div className="mt-2 px-4 py-1 rounded-full bg-muted shadow-sm border">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                  <motion.div
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 0 ? 'md:pr-16' : 'md:col-start-2 md:pl-16'}`}
                  >
                    <Card className="p-6 shadow-lg relative overflow-hidden group-hover:bg-primary/10 group-hover:border-primary/50 group-hover:scale-105 duration-300">
                      <div className="relative">
                        <h3 className="font-bold text-xl mb-3 text-foreground/90">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}