import { BookOpen, Clock, Award, CheckCircle } from 'lucide-react';

export default function Curriculum({ darkMode }: { darkMode: boolean }) {
  const curriculumData = {
    overview: {
      duration: '6 months',
      projects: 12,
      certificates: 6,
      mentorship: 'Weekly 1:1'
    },
    tracks: [
      {
        title: 'Foundation',
        duration: '4 weeks',
        topics: [
          'Programming Fundamentals',
          'Data Structures',
          'Algorithms',
          'Problem Solving'
        ]
      },
      {
        title: 'Web Development',
        duration: '8 weeks',
        topics: [
          'HTML, CSS, JavaScript',
          'React & Modern Frontend',
          'Node.js & Express',
          'Database Design'
        ]
      },
      {
        title: 'Advanced Concepts',
        duration: '8 weeks',
        topics: [
          'System Design',
          'Cloud Services',
          'DevOps & CI/CD',
          'Security Best Practices'
        ]
      },
      {
        title: 'Specialization',
        duration: '4 weeks',
        topics: [
          'Choose Your Path',
          'Deep Dive Projects',
          'Industry Mentorship',
          'Career Preparation'
        ]
      }
    ]
  };

  return (
    <div className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Curriculum</h2>
          <p className="text-gray-600 dark:text-gray-300">Structured learning path to master software development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(curriculumData.overview).map(([key, value]) => (
            <div key={key} className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-lg text-center`}>
              <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
              <p className="text-2xl font-bold text-blue-600">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8">
          {curriculumData.tracks.map((track, index) => (
            <div key={index} className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-lg p-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{track.title}</h3>
                <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {track.duration}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {track.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center">
            Download Full Syllabus <BookOpen className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}