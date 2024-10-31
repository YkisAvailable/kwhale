import React from 'react';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">成功案例</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <img src="https://i.ibb.co/YX2s5Pt/DALL-E-2024-10-30-10-17-41-A-business-office-scene-showing-a-person-sitting-at-a-desk-with-multiple.webp" alt="案例研究 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">To B:大健康私域全链重构</h3>
            <p className="text-gray-600">引流、运营、售前、售后一人控制全标生物全链路，一人等于若干团队，服务300w+C端用户</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <img src="https://i.ibb.co/Tby3Gqp/DALL-E-2024-10-30-10-19-57-An-educational-decision-making-flowchart-showing-steps-from-evaluating-a.webp" alt="案例研究 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">To B:教培择校智能系统</h3>
            <p className="text-gray-600">根据学生实际情况，让家长学生与校方信息交互，解决政策，流程，资格疑虑，选择最佳的去向</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <img src="https://i.ibb.co/y8v7crY/DALL-E-2024-10-30-10-22-24-A-large-network-diagram-with-over-200-nodes-connecting-to-a-central-hub-r.webp" alt="案例研究 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">To C：200+代理商分销石榴统一客服</h3>
            <p className="text-gray-600">源头标准化赋能代理商</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
