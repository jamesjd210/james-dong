import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image';
import JamesPic from '@/../public/images/JamesSquare.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-4 rounded-full overflow-hidden">
            {/* Logo */}
            <Link href="/" className="block" aria-label="JamesPic">
              <Image src={JamesPic} alt="James" className="w-20 h-20 fill-current" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-blue-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="font-medium text-blue-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-medium text-blue-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="font-medium text-blue-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/jamesjd210"
                  className="font-medium text-blue-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  target="_blank"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.linkedin.com/in/james-dong-1024/" 
                  className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3"
                  target="_blank"
                  >
                    Linkedin
                </Link>
              </li>
            </ul>
          </nav>

          {/* <MobileMenu /> */}

        </div>
      </div>
    </header>
  )
}
