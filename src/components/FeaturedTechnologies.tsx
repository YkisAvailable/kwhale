import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

const FeaturedTechnologies = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    {
      image: "https://i.ibb.co/wQ6W2h1/ginas-background.jpg",
      title: "Ginas客服",
      description: "Guided Interactive Notification and Assistance System",
      features: ["7x24在线", "千人千面", "使命必达", "降本增效"],
      intro: "Ginas客服是一款革命性的AI客服系统，能够24/7为您的客户提供专业、高效的服务。它能够定制多种沟通风格，确保每位客户都能获得个性化的体验。",
      qrCode: "https://i.ibb.co/h9PrWwp/d414c2276c408c604393e41760fbb49.jpg"
    },
    {
      image: "https://i.ibb.co/7JdW4h5/Resized-robot-analysis-image.png",
      title: "Zevion智能分析",
      description: "Zeal-Vision-On",
      features: ["实时问卷", "专业延展", "计划定制", "深度分析"],
      intro: "Zevion智能分析系统利用先进的AI技术，为您提供实时的数据分析和洞察。从问卷设计到深度分析，Zevion都能为您的决策提供强有力的支持。",
      qrCode: "https://i.ibb.co/h9PrWwp/d414c2276c408c604393e41760fbb49.jpg"
    },
    {
      image: "https://i.ibb.co/F5Jx74g/DALL-E-2024-10-21-15-49-58-A-futuristic-nutrition-metrics-dashboard-with-a-sleek-high-tech-design-di.webp",
      title: "NutriSense健康管理",
      description: "Sense the unseen",
      features: ["营养监测", "健康管理", "流程自动化", "知识管理"],
      intro: "NutriSense健康管理系统是您的个人健康助手，它不仅能够监测您的营养摄入，还能为您制定个性化的健康管理计划。",
      qrCode: "https://i.ibb.co/h9PrWwp/d414c2276c408c604393e41760fbb49.jpg"
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">我们的AI技术</h2>
        <div className="grid grid-cols-1 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300"
            >
              <div className="flex flex-col md:flex-row h-auto md:h-[300px]">
                <div 
                  className="md:w-1/3 cursor-pointer h-64 md:h-full"
                  onClick={() => setSelectedTech(tech)}
                >
                  <div className="relative h-full">
                    <img 
                      src={tech.image} 
                      alt={tech.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
                      <h3 className="text-2xl font-semibold mb-2">{tech.title}</h3>
                      <p className="text-sm">{tech.description}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="hidden md:block mb-4">
                      <h3 className="text-2xl font-semibold mb-2">{tech.title}</h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-700">
                          <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="w-full md:w-auto bg-primary text-white px-8 py-2 rounded-md hover:bg-secondary transition duration-300"
                    onClick={() => setSelectedTech(tech)}
                  >
                    了解更多
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedTech && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative animate-fadeIn">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedTech(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedTech.title}</h3>
            <p className="text-gray-600 mb-6">{selectedTech.intro}</p>
            <div className="flex justify-center">
              <img src={selectedTech.qrCode} alt="体验二维码" className="w-48 h-48 object-cover rounded-lg shadow-md" />
            </div>
            <p className="text-center mt-4 text-sm text-gray-500">扫描二维码体验{selectedTech.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedTechnologies;