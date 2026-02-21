import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';
import { useNavigate } from 'react-router-dom';

export default function AgeGroupsSection() {
  const navigate = useNavigate();

  const scrollToUpcomingClasses = () => {
    const upcomingSection = document.getElementById('upcoming-classes');
    if (upcomingSection) {
      upcomingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEnrollment = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ageGroups = [
    {
      title: '小小探索家',
      age: '3-5歲',
      description: '透過遊戲和實踐活動培養好奇心和基礎技能。',
      icon: 'ri-seedling-line',
      color: 'from-green-400 to-emerald-500',
      features: ['感官探索', '基礎科學概念', '創意藝術', '團隊協作']
    },
    {
      title: '小小發明家',
      age: '6-8歲',
      description: '建立STEAM基礎，培養解決問題的能力。',
      icon: 'ri-lightbulb-line',
      color: 'from-yellow-400 to-orange-500',
      features: ['基礎編程', '簡單機械', '科學實驗', '數學遊戲']
    },
    {
      title: '科技創造者',
      age: '9-12歲',
      description: '深入學習技術概念，開發創新項目。',
      icon: 'ri-rocket-line',
      color: 'from-blue-400 to-indigo-500',
      features: ['進階編程', '機器人技術', '3D設計', '項目開發']
    },
    {
      title: '創新領袖',
      age: '13-18歲',
      description: '掌握高級技能，為未來職業做好準備。',
      icon: 'ri-trophy-line',
      color: 'from-purple-400 to-pink-500',
      features: ['人工智能', '應用開發', '工程設計', '創業思維']
    }
  ];

  return (
    <section id="age-groups" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            適齡學習軌道
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精心設計的課程路徑隨著孩子成長，
            在每個階段逐步建立知識和技能。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ageGroups.map((group, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${group.color} rounded-full mb-6`}>
                <i className={`${group.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{group.title}</h3>
              <p className="text-lg font-semibold text-gray-600 mb-4">{group.age}</p>
              <p className="text-gray-600 mb-6">{group.description}</p>
              <ul className="space-y-3 mb-8">
                {group.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <Button
                  onClick={scrollToEnrollment}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  立即報名
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
