import React from 'react';
import { Zap, Shield, Cpu } from 'lucide-react';

const CompanyOverview = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">由鲲鲸提供</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="创新解决方案" className="w-full h-40 object-cover rounded-lg mb-4" />
            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI化业务解决方案</h3>
            <p className="text-gray-600">为您的业务场景量身定制尖端AI技术，开启新链路，随业务增长而灵活扩展</p>
          </div>
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="安全可靠" className="w-full h-40 object-cover rounded-lg mb-4" />
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">降本增效</h3>
            <p className="text-gray-600">企业增长不再受限于团队规模</p>
          </div>
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="可扩展架构" className="w-full h-40 object-cover rounded-lg mb-4" />
            <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">统一性</h3>
            <p className="text-gray-600">越大的事情，越简单，不卷SOP，技术即标准</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;