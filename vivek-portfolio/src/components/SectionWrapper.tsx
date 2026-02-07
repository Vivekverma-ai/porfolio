import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

const SectionWrapper = ({ id, title, subtitle, children, className = '' }: SectionWrapperProps) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="section-container">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
