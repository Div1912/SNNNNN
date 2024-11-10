import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-600">Skill</span>Navigator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Navigate your tech career with confidence through expert-led courses and mentorship.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Instagram} />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <FooterLinks
              links={[
                'Full Stack Development',
                'Data Structures',
                'Machine Learning',
                'Cloud Computing',
                'DevOps'
              ]}
            />
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <FooterLinks
              links={[
                'Blog',
                'Tutorials',
                'Documentation',
                'Community',
                'Career Guide'
              ]}
            />
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <FooterLinks
              links={[
                'About Us',
                'Careers',
                'Partners',
                'Contact Us',
                'Terms of Service'
              ]}
            />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2024 SkillNavigator. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
    <Icon className="h-5 w-5" />
  </a>
);

const FooterLinks = ({ links }: { links: string[] }) => (
  <ul className="space-y-2">
    {links.map((link, index) => (
      <li key={index}>
        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 text-sm">
          {link}
        </a>
      </li>
    ))}
  </ul>
);