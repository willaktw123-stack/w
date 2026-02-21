import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function RegularTutoringPage() {
  const navigate = useNavigate();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToEnrollment = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#enrollment');
    }
  };

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  const subjects = [
    {
      name: '中文',
      icon: 'ri-book-2-line',
      color: 'bg-red-500',
      description: '閱讀理解、寫作技巧、文言文、語文知識全面提升',
      levels: ['小學', '初中', '高中']
    },
    {
      name: '英文',
      icon: 'ri-english-input',
      color: 'bg-blue-500',
      description: 'Grammar, Writing, Reading, Speaking 四大技能訓練',
      levels: ['小學', '初中', '高中']
    },
    {
      name: '數學',
      icon: 'ri-calculator-line',
      color: 'bg-green-500',
      description: '代數、幾何、統計、應用題系統化學習',
      levels: ['小學', '初中', '高中']
    },
    {
      name: '科學',
      icon: 'ri-flask-line',
      color: 'bg-purple-500',
      description: '物理、化學、生物綜合科學課程',
      levels: ['小學', '初中', '高中']
    },
    {
      name: '通識/公民',
      icon: 'ri-global-line',
      color: 'bg-orange-500',
      description: '時事分析、批判思維、議題探討',
      levels: ['初中', '高中']
    },
    {
      name: '其他科目',
      icon: 'ri-book-open-line',
      color: 'bg-teal-500',
      description: '歷史、地理、經濟等選修科目',
      levels: ['初中', '高中']
    }
  ];

  const classTypes = [
    {
      title: '小班教學',
      students: '4-6人',
      icon: 'ri-group-line',
      color: 'bg-blue-100 text-blue-600',
      features: ['互動性強', '個別關注', '同儕學習', '性價比高']
    },
    {
      title: '一對一教學',
      students: '1人',
      icon: 'ri-user-line',
      color: 'bg-green-100 text-green-600',
      features: ['完全定制', '進度靈活', '針對性強', '效果顯著']
    },
    {
      title: '專題班',
      students: '8-12人',
      icon: 'ri-team-line',
      color: 'bg-purple-100 text-purple-600',
      features: ['考試衝刺', '專題訓練', '技巧提升', '系統複習']
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre - 常規全科補習",
    "description": "香港專業全科補習課程，涵蓋中英數科學等所有科目。小班教學、一對一輔導。",
    "url": `${siteUrl}/regular-tutoring`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "全科補習課程",
      "itemListElement": subjects.map(subject => ({
        "@type": "Course",
        "name": subject.name,
        "description": subject.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Starry Learning Centre"
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title="常規全科補習班 - Starry Learning Centre"
        description="香港專業全科補習課程，涵蓋中英數科學等所有科目。小班教學、一對一輔導，資深導師團隊，助學生全面提升成績。"
        keywords="全科補習, 香港補習, 中文補習, 英文補習, 數學補習, 科學補習, 小班教學, 一對一補習"
        canonical={`${siteUrl}/regular-tutoring`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20tutoring%20classroom%20with%20small%20groups%20of%20students%20studying%20various%20subjects%2C%20experienced%20teachers%20providing%20personalized%20guidance%2C%20organized%20study%20materials%20including%20textbooks%20and%20worksheets%2C%20bright%20comfortable%20learning%20environment%20with%20whiteboards%20and%20educational%20posters%2C%20focused%20students%20working%20on%20Chinese%20English%20math%20and%20science%20assignments&width=1920&height=800&seq=regular-tutoring-hero-professional&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-book-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              常規全科補習班
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              資深導師團隊，全科目覆蓋，小班教學與一對一輔導，
              助學生穩步提升學業成績
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToEnrollment}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/')}
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                返回首頁
              </Button>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                onClick={() => handleServiceClick('/steam-ai')}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-robot-line text-white"></i>
                </div>
                <span className="text-lg">🤖 STEAM教育與AI應用</span>
              </div>
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                onClick={() => handleServiceClick('/online-learning')}
              >
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <i className="ri-global-line text-white"></i>
                </div>
                <span className="text-lg">🚀 線上學習與學習筆記</span>
              </div>
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                onClick={() => handleServiceClick('/comprehensive-program')}
              >
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <i className="ri-book-line text-white"></i>
                </div>
                <span className="text-lg">🎯 常規全科補習班</span>
              </div>
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                onClick={() => handleServiceClick('/interview-prep')}
              >
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-user-star-line text-white"></i>
                </div>
                <span className="text-lg">👑 中學面試準備</span>
              </div>
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                onClick={() => handleServiceClick('/homework-support')}
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-pencil-line text-white"></i>
                </div>
                <span className="text-lg">✏️ 小學功課輔導</span>
              </div>
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                onClick={() => handleServiceClick('/workshops')}
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="ri-palette-line text-white"></i>
                </div>
                <span className="text-lg">🎨 校內及校外工作坊</span>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">補習科目</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                全面覆蓋各個學科，滿足不同學習需求
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${subject.color} rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`${subject.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{subject.name}</h3>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {subject.levels.map((level, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {level}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Class Types Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">課程類型</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                多種教學模式，滿足不同學習需求
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {classTypes.map((type, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-green-500 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${type.color} rounded-full mb-6`}>
                    <i className={`${type.icon} text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{type.students}</p>
                  <div className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">我們的優勢</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-star-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">資深導師</h3>
                <p className="text-gray-600">經驗豐富的專業教師團隊</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-file-list-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">系統教材</h3>
                <p className="text-gray-600">精心編制的教學資料</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-line-chart-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">進度追蹤</h3>
                <p className="text-gray-600">定期評估學習成效</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-parent-line text-3xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">家長溝通</h3>
                <p className="text-gray-600">定期反饋學習情況</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">提升學業成績，從現在開始</h2>
            <p className="text-xl mb-8 text-gray-100">
              立即報名常規補習班，讓專業導師助您的孩子學業進步
            </p>
            <Button 
              size="lg" 
              onClick={scrollToEnrollment}
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <i className="ri-rocket-line mr-2"></i>
              立即報名
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
