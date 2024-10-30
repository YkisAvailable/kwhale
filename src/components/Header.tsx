import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/JxD1h1R/logo.png" 
            alt="鲲鲸AI Logo" 
            className="h-10 w-auto mr-2" 
            style={{objectFit: 'contain'}} 
          />
          <span className="text-xl font-bold text-primary">鲲鲸人工智能科技有限公司</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#overview" className="text-gray-600 hover:text-primary transition-colors">概览</a>
          <a href="#technologies" className="text-gray-600 hover:text-primary transition-colors">技术</a>
          <a href="#case-studies" className="text-gray-600 hover:text-primary transition-colors">案例</a>
          <a href="#team" className="text-gray-600 hover:text-primary transition-colors">团队</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">联系我们</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-primary">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <a href="#overview" className="text-gray-600 hover:text-primary transition-colors">概览</a>
            <a href="#technologies" className="text-gray-600 hover:text-primary transition-colors">技术</a>
            <a href="#case-studies" className="text-gray-600 hover:text-primary transition-colors">案例</a>
            <a href="#team" className="text-gray-600 hover:text-primary transition-colors">团队</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">联系我们</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;