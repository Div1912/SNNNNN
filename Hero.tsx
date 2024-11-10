import { ArrowRight, Code, Users, Trophy } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onStartLearning: () => void;
  onViewCurriculum: () => void;
}

export default function Hero({ darkMode, onStartLearning, onViewCurriculum }: HeroProps) {
  return (
    <div className={`pt-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Navigate Your <span className="text-blue-600">Tech Career</span> With Confidence
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Master in-demand skills, build real projects, and accelerate your career with expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={onStartLearning}
                className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center transform transition-transform hover:scale-105"
              >
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={onViewCurriculum}
                className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center justify-center"
              >
                View Curriculum
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex justify-center mb-2">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">500+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Practice Problems</p>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">50,000+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Students</p>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">1000+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Placements</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}