import { useNavigate } from 'react-router-dom';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

export default function ProgramsSection() {
  const navigate = useNavigate();

  const programs = [
    {
      id: 'steam-ai',
      title: 'STEAM與AI',
      description: '全面的STEAM教育課程,涵蓋機器人、編程、科學、工程、數碼藝術和應用數學,培養未來創新者。',
      icon: 'ri-robot-line',
      color: 'bg-teal-500',
      image: 'https://readdy.ai/api/search-image?query=Comprehensive%20STEAM%20education%20center%20with%20children%20engaged%20in%20diverse%20activities%20including%20robotics%20programming%20with%20LEGO%20Mindstorms%2C%20coding%20on%20computers%2C%20science%20experiments%20with%20colorful%20chemicals%2C%203D%20printing%20and%20engineering%20design%2C%20digital%20art%20creation%20on%20tablets%2C%20and%20mathematics%20problem%20solving%2C%20modern%20innovative%20classroom%20with%20cutting-edge%20technology%20and%20collaborative%20learning%20spaces&width=400&height=300&seq=steam-comprehensive-program&orientation=landscape',
      features: ['機器人與AI', '編程與編碼', '科學實驗室', '工程設計', '數碼藝術', '應用數學'],
      subPrograms: [
        { name: '機器人與人工智能', icon: 'ri-robot-line' },
        { name: '編程與編碼', icon: 'ri-code-line' },
        { name: '科學實驗室', icon: 'ri-flask-line' },
        { name: '工程設計', icon: 'ri-tools-line' },
        { name: '數碼藝術', icon: 'ri-palette-line' },
        { name: '應用數學', icon: 'ri-calculator-line' }
      ]
    },
    {
      id: 'starry-creator',
      title: 'Starry 星創者計劃',
      description: '融合創業思維、STEM科技與金融科技的三合一創新教育課程,培養未來創業家與科技領袖。',
      icon: 'ri-star-line',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      image: 'https://readdy.ai/api/search-image?query=Young%20teenage%20students%20learning%20entrepreneurship%20business%20planning%20with%20business%20model%20canvas%20on%20whiteboard%2C%20STEM%20technology%20projects%20with%20Python%20coding%20Arduino%20robotics%20and%20AI%20applications%20on%20computers%2C%20fintech%20education%20with%20blockchain%20cryptocurrency%20DeFi%20concepts%20and%20financial%20statements%20analysis%2C%20modern%20innovation%20classroom%20with%20startup%20pitch%20presentations%20and%20complete%20learning%20pathway%20from%20beginner%20to%20advanced%20levels%2C%20bright%20collaborative%20workspace%20with%20technology%20equipment%20and%20business%20planning%20materials&width=400&height=300&seq=starry-creator-entrepreneurship-stem-fintech-v2&orientation=landscape',
      features: ['創業思維培養', 'STEM科技應用', '金融科技知識', '完整學習路徑'],
      isStarry: true,
      subPrograms: [
        { name: 'Starry Entrepreneurship', icon: 'ri-lightbulb-line' },
        { name: 'Starry STEM', icon: 'ri-rocket-line' },
        { name: 'Starry Fintech', icon: 'ri-coin-line' },
        { name: 'Starry English', icon: 'ri-global-line' }
      ]
    },
    {
      id: 'comprehensive-program',
      title: '全方位創學園',
      description: '系統化素養培育課程,包含線上學習、常規補習、功課輔導和中學面試準備,全面支援學生學習需求。',
      icon: 'ri-book-line',
      color: 'bg-blue-500',
      image: 'https://readdy.ai/api/search-image?query=Students%20studying%20and%20receiving%20tutoring%20in%20bright%20modern%20classroom%2C%20focused%20homework%20support%20with%20teachers%20providing%20one-on-one%20guidance%2C%20organized%20study%20desks%20with%20textbooks%20notebooks%20and%20learning%20materials%2C%20professional%20tutoring%20environment%20with%20whiteboard%20explanations%20and%20academic%20assistance%2C%20warm%20educational%20atmosphere%20with%20concentrated%20learning%20and%20personalized%20instruction&width=400&height=300&seq=comprehensive-studying-tutoring-v2&orientation=landscape',
      features: ['線上學習支援', '常規補習課程', '功課輔導服務', '面試準備訓練'],
      subPrograms: [
        { name: '線上學習與學習筆記', icon: 'ri-computer-line' },
        { name: '常規補習', icon: 'ri-book-open-line' },
        { name: '功課輔導', icon: 'ri-edit-line' },
        { name: '中學面試準備', icon: 'ri-user-voice-line' }
      ]
    }
  ];

  const handleEnrollClick = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = (programId: string) => {
    if (programId === 'starry-creator') {
      navigate('/starry-creator');
    } else if (programId === 'steam-ai') {
      navigate('/steam-ai');
    } else {
      navigate(`/programs/${programId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            我們的全面課程
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            從STEAM教育到學術支援，我們提供全方位的學習課程，
            旨在培養孩子發展的各個方面。
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* First Row: STEAM與AI and 全方位創學園 side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.filter(p => p.id === 'steam-ai' || p.id === 'comprehensive-program').map((program) => (
              <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 ${program.color} rounded-full flex items-center justify-center`}>
                    <i className={`${program.icon} text-white text-xl`}></i>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                  
                  {program.subPrograms && (
                    <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs font-semibold text-purple-900 mb-2">包含課程：</p>
                      <div className="grid grid-cols-2 gap-2">
                        {program.subPrograms.map((sub, idx) => (
                          <div key={idx} className="flex items-center text-xs text-purple-700">
                            <i className={`${sub.icon} mr-1`}></i>
                            <span>{sub.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2 mb-6 flex-1">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button 
                      onClick={handleEnrollClick}
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                    >
                      <i className="ri-user-add-line mr-2"></i>
                      立即報名
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleLearnMore(program.id)}
                      className="group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-1"
                    >
                      了解更多
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Second Row: Starry 星創者計劃 full width */}
          {programs.filter(p => p.id === 'starry-creator').map((program) => (
            <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 ${program.color} rounded-full flex items-center justify-center`}>
                    <i className={`${program.icon} text-white text-xl`}></i>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ 特色課程
                  </div>
                </div>
                
                <div className="md:w-3/5 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  {program.subPrograms && (
                    <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <p className="text-sm font-semibold text-purple-900 mb-3">包含課程：</p>
                      <div className="grid grid-cols-2 gap-3">
                        {program.subPrograms.map((sub, idx) => (
                          <div key={idx} className="flex items-center text-sm text-purple-700">
                            <i className={`${sub.icon} mr-2 text-lg`}></i>
                            <span>{sub.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={handleEnrollClick}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1"
                    >
                      <i className="ri-user-add-line mr-2"></i>
                      立即報名
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleLearnMore(program.id)}
                      className="group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300 flex-1"
                    >
                      了解更多
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={handleEnrollClick} className="bg-teal-600 hover:bg-teal-700">
            <i className="ri-calendar-line mr-2"></i>
            預約諮詢
          </Button>
        </div>
      </div>
    </section>
  );
}
