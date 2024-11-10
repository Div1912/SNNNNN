import { Clock, Users, Star, BookOpen, Award, CheckCircle } from 'lucide-react';

interface CourseDetailProps {
  darkMode: boolean;
  courseId: string;
}

export default function CourseDetail({ darkMode, courseId }: CourseDetailProps) {
  // In a real app, fetch course details based on courseId
  const course = {
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development with real-world projects',
    duration: '24 weeks',
    students: '15,000+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    price: 499,
    instructor: 'Sarah Johnson',
    modules: [
      'Introduction to Web Development',
      'HTML & CSS Fundamentals',
      'JavaScript Essentials',
      'React.js Frontend Development',
      'Node.js Backend Development',
      'Database Design & Implementation',
      'API Development',
      'Authentication & Authorization',
      'Deployment & DevOps',
      'Final Project'
    ],
    skills: [
      'Frontend Development',
      'Backend Development',
      'Database Management',
      'API Design',
      'DevOps',
      'Version Control'
    ]
  };

  return (
    <div className={`pt-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="col-span-2">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">{course.description}</p>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span>{course.rating} rating</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Course Content</h2>
              <div className={`border rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                {course.modules.map((module, index) => (
                  <div
                    key={index}
                    className={`p-4 flex items-center ${
                      index !== course.modules.length - 1
                        ? darkMode
                          ? 'border-b border-gray-700'
                          : 'border-b border-gray-200'
                        : ''
                    }`}
                  >
                    <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:pl-8">
            <div className={`sticky top-24 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
              <div className="text-3xl font-bold mb-4">${course.price}</div>
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-4">
                Enroll Now
              </button>
              <button className="w-full py-3 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700">
                Try Free Demo
              </button>
              
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Community support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}