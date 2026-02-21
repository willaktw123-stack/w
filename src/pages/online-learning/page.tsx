import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function OnlineLearningPage() {
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

  const features = [
    {
      title: '互動式學習平台',
      description: '先進的線上學習系統，支持實時互動和即時反饋',
      icon: 'ri-computer-line',
      color: 'bg-blue-500'
    },
    {
      title: '智能學習筆記',
      description: 'AI輔助筆記系統，自動整理重點和知識圖譜',
      icon: 'ri-file-edit-line',
      color: 'bg-green-500'
    },
    {
      title: '個性化學習路徑',
      description: '根據學生程度定制專屬學習計劃和進度',
      icon: 'ri-route-line',
      color: 'bg-purple-500'
    },
    {
      title: '24/7 學習支援',
      description: '隨時隨地訪問學習資源，靈活安排學習時間',
      icon: 'ri-time-line',
      color: 'bg-orange-500'
    }
  ];

  const subjects = [
    {
      name: '中文',
      icon: 'ri-book-2-line',
      topics: ['閱讀理解', '寫作技巧', '文言文', '語文知識']
    },
    {
      name: '英文',
      icon: 'ri-english-input',
      topics: ['Grammar', 'Writing', 'Reading', 'Speaking']
    },
    {
      name: '數學',
      icon: 'ri-calculator-line',
      topics: ['代數', '幾何', '統計', '應用題']
    },
    {
      name: '科學',
      icon: 'ri-flask-line',
      topics: ['物理', '化學', '生物', '實驗']
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre - 線上學習",
    "description": "創新的線上學習平台，提供互動式課程、智能學習筆記和個性化學習路徑。",
    "url": `${siteUrl}/online-learning`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "線上學習課程",
      "itemListElement": subjects.map(subject => ({
        "@type": "Course",
        "name": subject.name,
        "description": subject.topics.join('、'),
        "courseMode": "online",
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
        title="線上學習與學習筆記 - Starry Learning Centre"
        description="創新的線上學習平台，提供互動式課程、智能學習筆記和個性化學習路徑。隨時隨地高效學習，全科目支援。"
        keywords="線上學習, 網上補習, 學習筆記, 互動學習, 個性化教育, 香港線上課程"
        canonical={`${siteUrl}/online-learning`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section with Coming Soon */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Modern%20online%20learning%20environment%20with%20students%20using%20tablets%20and%20laptops%20for%20interactive%20digital%20education%2C%20smart%20note-taking%20apps%20with%20AI%20features%2C%20virtual%20classroom%20with%20video%20conferencing%2C%20organized%20digital%20study%20materials%2C%20cloud-based%20learning%20platform%20interface%2C%20bright%20contemporary%20home%20study%20space%20with%20technology%20integration%20and%20engaged%20learners&width=1920&height=800&seq=online-learning-hero-modern&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 shadow-lg">
              <i className="ri-time-line text-2xl"></i>
              <span>即將推出</span>
            </div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-computer-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              線上學習與學習筆記
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              突破時空限制，隨時隨地高效學習。
              智能筆記系統助你輕鬆掌握知識重點
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
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

        {/* Coming Soon Notice Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-5xl text-white"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">精彩內容即將上線</h2>
              <p className="text-xl text-gray-600 mb-8">
                我們正在精心打造全新的線上學習平台，為您帶來更優質的學習體驗。
                敬請期待！
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleEnrollClick}
                  className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white"
                >
                  <i className="ri-notification-line mr-2"></i>
                  預先登記
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.REACT_APP_NAVIGATE('/')}
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  <i className="ri-home-line mr-2"></i>
                  探索其他課程
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">平台特色</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                結合最新科技，打造最優質的線上學習體驗
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${feature.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">涵蓋科目</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                全面的學科支援，滿足不同學習需求
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {subjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${subject.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{subject.name}</h3>
                  <div className="space-y-2">
                    {subject.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Process Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">學習流程</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                簡單四步，開啟高效學習之旅
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">註冊登入</h3>
                <p className="text-gray-600">創建個人學習帳戶</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">選擇課程</h3>
                <p className="text-gray-600">根據需求選擇科目</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">互動學習</h3>
                <p className="text-gray-600">參與線上課程互動</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">複習鞏固</h3>
                <p className="text-gray-600">使用智能筆記複習</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
