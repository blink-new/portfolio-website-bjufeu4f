
import { motion } from 'framer-motion'
import { Code2, Palette, Server, Smartphone, Lightbulb, Gauge } from 'lucide-react'

const skills = {
  frontend: {
    icon: Code2,
    title: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js/WebGL', level: 85 },
    ],
  },
  design: {
    icon: Palette,
    title: 'Design & Animation',
    skills: [
      { name: 'UI/UX Design', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'GSAP', level: 80 },
      { name: 'CSS Animation', level: 90 },
    ],
  },
  backend: {
    icon: Server,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'GraphQL', level: 85 },
      { name: 'AWS', level: 75 },
    ],
  },
  mobile: {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 90 },
      { name: 'iOS/Swift', level: 75 },
      { name: 'Android/Kotlin', level: 70 },
      { name: 'Mobile UI Design', level: 85 },
    ],
  },
}

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Python', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'AWS', 'Git', 'CI/CD', 'Jest',
  'Cypress', 'Webpack', 'Vite', 'Sass', 'Tailwind CSS'
]

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {Object.entries(skills).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Technologies I Work With</h3>
            <p className="text-text/60">A comprehensive list of technologies in my toolkit</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}