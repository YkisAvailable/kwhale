import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="联系我们" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-6 text-gray-600">
                感谢您的关注！扫描下方二维码，我们将为您免费定制AI解决方案。
              </p>
              <div className="flex justify-center mb-6">
                <img src="https://i.ibb.co/h9PrWwp/d414c2276c408c604393e41760fbb49.jpg" alt="联系我们二维码" className="w-48 h-48 object-cover" />
              </div>
              <p className="text-center text-sm text-gray-500 mb-4">
                扫描二维码，获取免费定制方案
              </p>
              <div className="flex justify-center space-x-4">
                <a href="tel:+8618823389114" className="flex items-center text-blue-600 hover:text-blue-800">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>18823389114</span>
                </a>
                <a href="mailto:contact@kunwhale.tech" className="flex items-center text-blue-600 hover:text-blue-800">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contact@kunwhale.tech</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;