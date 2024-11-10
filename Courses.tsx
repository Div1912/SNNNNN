import { Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development with real-world projects',
    duration: '24 weeks',
    students: '15,000+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
  },
  {
    id: '2',
    title: 'Data Structures & Algorithms',
    description: 'Ace technical interviews with comprehensive DSA preparation',
    duration: '16 weeks',
    students: '20,000+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
  },
  {
    id: '3',
    title: 'Machine Learning',
    description: 'Learn ML concepts and implement real-world AI solutions',
    duration: '20 weeks',
    students: '10,000+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: '4',
    title: 'Cloud Computing',
    description: 'Master AWS, Azure, and Google Cloud platforms',
    duration: '18 weeks',
    students: '8,000+',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
  },
  {
    id: '5',
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps using React Native',
    duration: '22 weeks',
    students: '12,000+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: '6',
    title: 'DevOps & CI/CD',
    description: 'Learn modern deployment and automation techniques',
    duration: '14 weeks',
    students: '5,000+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];

interface CoursesProps {
  darkMode: boolean;
  onCourseSelect: (courseId: string) => void;
}

export default function Courses({ darkMode, onCourseSelect }: CoursesProps) {
  return (
    <section id="courses" className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Popular Courses</h2>
          <p className="text-gray-600 dark:text-gray-300">Choose from our industry-relevant courses</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} cursor-pointer transform transition-transform hover:scale-105`}
              onClick={() => onCourseSelect(course.id)}
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-sm text-yellow-500">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    {course.rating}
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}