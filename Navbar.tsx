import { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onNavigate: (page: string) => void;
}

export default function Navbar({ darkMode, toggleDarkMode, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div 
              className="flex-shrink-0 font-bold text-2xl cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <span className="text-blue-600">Tech</span>Academy
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <NavLink onClick={() => onNavigate('courses')}>Courses</NavLink>
                <NavLink onClick={() => onNavigate('practice')}>Practice</NavLink>
                <NavLink onClick={() => onNavigate('events')}>Events</NavLink>
                <div className="relative group">
                  <button className="flex items-center hover:text-blue-600">
                    Resources <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5 hidden group-hover:block`}>
                    <div className="py-1">
                      <DropdownLink onClick={() => onNavigate('blog')}>Blog</DropdownLink>
                      <DropdownLink onClick={() => onNavigate('tutorials')}>Tutorials</DropdownLink>
                      <DropdownLink onClick={() => onNavigate('community')}>Community</DropdownLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => onNavigate('signin')}
              className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign In
            </button>
            <button className="px-4 py-2 rounded-md border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              Try For Free
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mr-2">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <MobileNavLink onClick={() => { onNavigate('courses'); setIsOpen(false); }}>
              Courses
            </MobileNavLink>
            <MobileNavLink onClick={() => { onNavigate('practice'); setIsOpen(false); }}>
              Practice
            </MobileNavLink>
            <MobileNavLink onClick={() => { onNavigate('events'); setIsOpen(false); }}>
              Events
            </MobileNavLink>
            <MobileNavLink onClick={() => { onNavigate('resources'); setIsOpen(false); }}>
              Resources
            </MobileNavLink>
            <div className="mt-4 flex flex-col space-y-2">
              <button 
                onClick={() => { onNavigate('signin'); setIsOpen(false); }}
                className="w-full px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </button>
              <button className="w-full px-4 py-2 rounded-md border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                Try For Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick} className="hover:text-blue-600">
    {children}
  </button>
);

const DropdownLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
    {children}
  </button>
);

const MobileNavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
    {children}
  </button>
);