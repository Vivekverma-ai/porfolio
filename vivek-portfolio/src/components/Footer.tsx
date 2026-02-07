import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/vivek-verma-biotechnology',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/vivekverma',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:vivek.verma@example.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Vivek Verma</h3>
            <p className="text-secondary-300 max-w-md">
              Passionate Biotechnology student dedicated to research, innovation, and advancing scientific knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary-800 rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <div className="space-y-2 text-secondary-300">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                vivek.verma@example.com
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-800 text-center">
          <p className="text-secondary-400">
            © {currentYear} Vivek Verma. All rights reserved. | Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
