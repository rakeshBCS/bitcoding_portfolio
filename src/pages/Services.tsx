import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Database, File as Mobile, Palette, Code } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom-built responsive websites that provide exceptional user experience across all devices."
  },
  {
    icon: Server,
    title: "Web Applications",
    description: "Scalable and secure web applications with robust backend infrastructure."
  },
  {
    icon: Mobile,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms."
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Efficient database design and implementation for optimal data management."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience and engagement."
  },
  {
    icon: Code,
    title: "API Development",
    description: "RESTful API development for seamless integration and communication."
  }
];

const Services = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive digital solutions for your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;