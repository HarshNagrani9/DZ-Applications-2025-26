import { Link } from "wouter";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                DZ
              </div>
              <span className="text-xl font-bold">DataZen</span>
            </div>
            <p className="text-neutral-400">
              The official Data Science Council of Somaiya Vidyavihar University
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/apply">
                  <span className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Apply
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <span className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#testimonials">
                  <span className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Testimonials
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:datazen@somaiya.edu"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors text-xl"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors text-xl"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors text-xl"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
            <p className="text-neutral-400">Email: datazen@somaiya.edu</p>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} DataZen - Somaiya Vidyavihar University. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
