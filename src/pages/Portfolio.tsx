import React from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../data/portfolio';
import { ExternalLink, ChevronDown, ChevronUp, Figma } from 'lucide-react';

const Portfolio = () => {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-blue-100">
            Showcasing our best work and successful projects
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            >
              {item.status === 'ongoing' && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Ongoing
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-sm font-medium text-blue-600">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-2">{item.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      {item.figmaLink && (
                        <a
                          href={item.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-purple-600 hover:text-purple-700"
                          title="View Figma Design"
                        >
                          <Figma className="h-5 w-5" />
                        </a>
                      )}
                      {item.link && item.link !== '#' && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-700"
                          title="View Project"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    {expandedId === item.id ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp className="h-5 w-5 ml-1" />
                      </>
                    ) : (
                      <>
                        <span>Show More</span>
                        <ChevronDown className="h-5 w-5 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {expandedId === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>

                    <h4 className="font-semibold mb-2">Project Details:</h4>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;