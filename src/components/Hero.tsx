import React from 'react';
import { ArrowRight } from 'lucide-react';
import CodeAnimation from './CodeAnimation';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 relative overflow-hidden">
      <CodeAnimation />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">智能带来增长</h1>
          <p className="text-xl mb-8">业务模型新概念重塑</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            即刻获取AI新链路
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      <img 
        src="https://i.ibb.co/B36SKYR/790205276155473945.png" 
        alt="AI背景" 
        className="absolute inset-0 w-full h-full object-cover opacity-20" 
      />
    </section>
  );
};

export default Hero;