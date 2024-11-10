import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import CourseDetail from './components/CourseDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const coursesRef = useRef<HTMLElement>(null);
  const curriculumRef = useRef<HTMLElement>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCurriculum = () => {
    curriculumRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero 
              darkMode={darkMode} 
              onStartLearning={scrollToCourses} 
              onViewCurriculum={scrollToCurriculum}
            />
            <section ref={coursesRef}>
              <Courses 
                darkMode={darkMode} 
                onCourseSelect={(courseId) => {
                  setSelectedCourseId(courseId);
                  setCurrentPage('courseDetail');
                }}
              />
            </section>
            <section ref={curriculumRef}>
              <Curriculum darkMode={darkMode} />
            </section>
            <Testimonials darkMode={darkMode} />
            <Footer darkMode={darkMode} />
          </>
        );
      case 'signin':
        return <SignIn darkMode={darkMode} />;
      case 'courseDetail':
        return selectedCourseId ? (
          <CourseDetail darkMode={darkMode} courseId={selectedCourseId} />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div className={darkMode ? 'dark bg-gray-900' : 'bg-white'}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        onNavigate={setCurrentPage}
      />
      {renderPage()}
    </div>
  );
}

export default App;