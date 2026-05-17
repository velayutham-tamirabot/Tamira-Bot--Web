import { motion } from 'framer-motion'

export default function Section({ children, className = '', bg = 'white', id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`py-20 md:py-28 px-6 ${bg === 'gray' ? 'bg-bg' : 'bg-surface'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  )
}
