import React from 'react';

const teamMembers = [
  {
    name: "何斐斐",
    role: "首席科学家",
    image: "https://i.ibb.co/k3VcD41/786966986778399310.png",
    bio: "在AI领域拥有近10年经验，专注于机器学习算法优化。"
  },
  {
    name: "王新平",
    role: "首席工程师",
    image: "https://i.ibb.co/WtfDKtN/789505080521963086.png",
    bio: "30余年全栈开发专家，主导了多个大型AI项目的架构设计。"
  },
  {
    name: "熊宇琦",
    role: "首席执行官",
    image: "https://i.ibb.co/37ps0fr/786975430683946774.png",
    bio: "连续创业者，曾进修于舒立赫商学院，在AI商业化应用方面有丰富经验。"
  },
  {
    name: "不便提及的支持",
    role: "额外支持",
    image: "https://i.ibb.co/khY3msJ/DALL-E-2024-10-28-13-30-56-A-mysterious-looking-question-mark-with-dark-foggy-surroundings-The-quest.webp",
    bio: "前军工技术团队，为公司提供技术指导和战略洞察。"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">我们的专家团队</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
              <p className="text-gray-600 mb-3 text-center">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;