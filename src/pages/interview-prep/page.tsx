import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function InterviewPrepPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnrollClick = () => {
    window.REACT_APP_NAVIGATE('/');
    setTimeout(() => {
      const enrollmentSection = document.getElementById('enrollment');
      if (enrollmentSection) {
        enrollmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const modules = [
    {
      title: '面試技巧訓練',
      description: '掌握面試禮儀、應對技巧和表達能力',
      icon: 'ri-user-voice-line',
      color: 'bg-blue-500',
      topics: ['自我介紹', '問答技巧', '肢體語言', '應變能力']
    },
    {
      title: '英語面試準備',
      description: '提升英語口語表達和聽力理解能力',
      icon: 'ri-english-input',
      color: 'bg-green-500',
      topics: ['英語會話', '聽力訓練', '詞彙擴充', '發音糾正']
    },
    {
      title: '中文面試準備',
      description: '加強中文表達能力和文化素養',
      icon: 'ri-book-2-line',
      color: 'bg-red-500',
      topics: ['普通話訓練', '粵語表達', '文化知識', '時事討論']
    },
    {
      title: '模擬面試實戰',
      description: '真實場景模擬，累積面試經驗',
      icon: 'ri-video-line',
      color: 'bg-purple-500',
      topics: ['個人面試', '小組面試', '即時反饋', '錄影分析']
    }
  ];

  const targetSchools = [
    '拔萃男書院', '拔萃女書院', '聖保羅男女中學', '喇沙書院',
    '皇仁書院', '英華書院', '聖士提反書院', '德望學校',
    '協恩中學', '瑪利諾修院學校', '嘉諾撒聖瑪利書院', '其他名校'
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre - 中學面試準備",
    "description": "專業中學面試培訓課程，涵蓋面試技巧、英語中文訓練、模擬面試實戰。",
    "url": `${siteUrl}/interview-prep`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "中學面試準備課程",
      "itemListElement": modules.map(module => ({
        "@type": "Course",
        "name": module.title,
        "description": module.description,
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
        title="中學面試準備 - Starry Learning Centre"
        description="專業中學面試培訓課程，涵蓋面試技巧、英語中文訓練、模擬面試實戰。資深導師團隊，助學生成功入讀心儀名校。"
        keywords="中學面試, 面試準備, 升中面試, 名校面試, 面試技巧, 英語面試, 中文面試, 香港中學"
        canonical={`${siteUrl}/interview-prep`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Empty%20Hong%20Kong%20secondary%20school%20campus%20with%20modern%20architecture%2C%20prestigious%20school%20building%20exterior%20with%20traditional%20Chinese%20and%20colonial%20British%20design%20elements%2C%20clean%20spacious%20classroom%20interior%20with%20rows%20of%20desks%20and%20blackboard%2C%20bright%20school%20hallway%20with%20lockers%20and%20notice%20boards%2C%20professional%20interview%20room%20setup%20with%20chairs%20and%20table%2C%20Hong%20Kong%20local%20school%20environment%20without%20any%20people%2C%20natural%20daylight%20streaming%20through%20windows%2C%20academic%20atmosphere%20with%20school%20badges%20and%20achievement%20displays%20on%20walls&width=1920&height=800&seq=hk-school-campus-empty-v3&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-user-voice-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              中學面試準備
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              專業面試培訓，全方位提升面試技巧與自信，
              助學生成功入讀心儀名校
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.REACT_APP_NAVIGATE('/')}
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                返回首頁
              </Button>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">課程模塊</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                系統化的面試培訓，全面提升面試能力
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${module.color} rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`${module.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 mb-6">{module.description}</p>
                  <div className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {topic}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Schools Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">目標學校</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                我們的學生成功入讀以下名校
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {targetSchools.map((school, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200 rounded-lg p-6 text-center hover:border-blue-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-school-line text-2xl text-blue-600"></i>
                  </div>
                  <p className="font-semibold text-gray-900">{school}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">培訓流程</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                系統化的培訓流程，確保最佳學習效果
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">評估分析</h3>
                <p className="text-sm text-gray-600">了解學生現況</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">定制計劃</h3>
                <p className="text-sm text-gray-600">制定培訓方案</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">技巧訓練</h3>
                <p className="text-sm text-gray-600">系統化學習</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">模擬實戰</h3>
                <p className="text-sm text-gray-600">累積經驗</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">持續優化</h3>
                <p className="text-sm text-gray-600">完善表現</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">團隊導師助你的孩子成功入讀心儀學校</h2>
            <p className="text-xl mb-8 text-gray-700">
              立即報名面試準備課程，讓專業導師助您的孩子脫穎而出
            </p>
            <Button 
              size="lg" 
              variant="primary"
              onClick={() => {
                window.REACT_APP_NAVIGATE('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              立即報名
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
