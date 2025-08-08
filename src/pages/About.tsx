import { motion } from 'framer-motion';
import { Code2, Users, Target, Zap } from 'lucide-react';

const values = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "We maintain high standards in our code and development practices."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with you to achieve your goals."
  },
  {
    icon: Target,
    title: "Result-Driven",
    description: "We focus on delivering solutions that create real business impact."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead with the latest technologies and industry trends."
  }
];

const About = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Building digital excellence since 2020
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <p className="text-gray-600">
              Bitcoding Solution is a leading IT services company specializing in web development,
              mobile applications, and UI/UX design. As part of Divine Enterprise, we bring years
              of expertise and innovation to every project we undertake.
            </p>
            <p className="text-gray-600">
              Our team of skilled developers and designers work together to create
              digital solutions that help businesses thrive in the modern digital landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with innovative digital solutions that drive growth
              and success in an ever-evolving technological landscape. We strive to deliver
              excellence in every project while maintaining the highest standards of quality
              and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;