import { Star } from 'lucide-react';

export default function Testimonials({ darkMode }: { darkMode: boolean }) {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Software Engineer at Google',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      text: 'The structured curriculum and hands-on projects helped me land my dream job. The mentorship was invaluable.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      text: 'I went from zero coding knowledge to building full-stack applications. The community support is amazing.',
      rating: 5
    },
    {
      name: 'Michael Park',
      role: 'Tech Lead at Microsoft',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      text: 'The advanced tracks helped me upgrade my skills and take on more senior roles. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-300">Join thousands of successful graduates</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } p-6 rounded-lg shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}