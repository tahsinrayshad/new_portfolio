import Link from "next/link"
import { Github, Linkedin, Facebook, ExternalLink, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tahsin Islam</h3>
              <p className="text-gray-300 mb-4">
                Software Engineering Student & Full-Stack Developer passionate about creating innovative solutions and
                contributing to the tech community.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://linkedin.com/in/tahsinrayshad"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/tahsinrayshad"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com/tahsinrayshad"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://kaggle.com/tahsinrayshad"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#achievements" className="text-gray-300 hover:text-white transition-colors">
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>tahsinrayshad.2016@gmail.com</p>
                <p>(+880) 1554749897</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
