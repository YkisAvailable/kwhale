import React from 'react';
import { Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center">
              <img 
                src="https://i.ibb.co/JxD1h1R/logo.png" 
                alt="鲲鲸AI Logo" 
                className="h-10 w-auto mr-2" 
                style={{objectFit: 'contain'}} 
              />
              <span className="text-xl font-bold text-primary">鲲鲸人工智能科技有限公司</span>
            </div>
            <p className="mt-2 text-gray-400">用AI赋能未来</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-primary transition-colors">概览</a></li>
              <li><a href="#technologies" className="text-gray-400 hover:text-primary transition-colors">技术</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-primary transition-colors">案例</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-primary transition-colors">团队</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">联系我们</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2023 鲲鲸人工智能科技有限公司（KWhale.AI）。保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;