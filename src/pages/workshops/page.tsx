import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function WorkshopsPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnrollClick = () => {
    // Use proper navigation method
    if (typeof window.REACT_APP_NAVIGATE === 'function') {
      window.REACT_APP_NAVIGATE('/');
      setTimeout(() => {
        const enrollmentSection = document.getElementById('enrollment');
        if (enrollmentSection) {
          enrollmentSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Fallback to window.location if custom navigation is not available
      window.location.href = '/#enrollment';
    }
  };

  const schoolWorkshops = [
    {
      title: 'STEAM工作坊和課程',
      description: '互動科學實驗，激發學生對科學的興趣',
      icon: 'ri-flask-line',
      color: 'bg-purple-500',
      duration: '2-3小時',
      participants: '20-40人',
      image: 'https://readdy.ai/api/search-image?query=Modern%20STEAM%20science%20laboratory%20workspace%20without%20people%20showing%20colorful%20chemistry%20equipment%20beakers%20test%20tubes%20microscopes%20robotics%20kits%20coding%20tablets%20educational%20technology%20tools%20arranged%20on%20clean%20white%20tables%20bright%20natural%20lighting%20inspiring%20learning%20environment%20with%20scientific%20instruments%20and%20educational%20materials&width=600&height=400&seq=steam-workshop-lab&orientation=landscape'
    },
    {
      title: '創意藝術工作坊',
      description: '培養創造力和藝術表達能力',
      icon: 'ri-palette-line',
      color: 'bg-pink-500',
      duration: '2-3小時',
      participants: '20-40人',
      image: 'https://readdy.ai/api/search-image?query=Creative%20art%20studio%20workspace%20without%20people%20displaying%20colorful%20paint%20palettes%20brushes%20canvases%20art%20supplies%20craft%20materials%20arranged%20on%20tables%20vibrant%20artistic%20environment%20with%20paintings%20drawings%20sculptures%20bright%20cheerful%20atmosphere%20inspiring%20creativity%20and%20artistic%20expression&width=600&height=400&seq=creative-art-workshop&orientation=landscape'
    },
    {
      title: '環保科技工作坊',
      description: '學習環保知識，製作環保小發明',
      icon: 'ri-leaf-line',
      color: 'bg-green-500',
      duration: '2-3小時',
      participants: '20-40人',
      image: 'https://readdy.ai/api/search-image?query=Eco-friendly%20technology%20workshop%20space%20without%20people%20showing%20recycled%20materials%20solar%20panels%20wind%20turbine%20models%20environmental%20science%20equipment%20green%20plants%20sustainable%20inventions%20eco-gadgets%20arranged%20on%20clean%20workspace%20bright%20natural%20lighting%20promoting%20environmental%20awareness%20and%20green%20innovation&width=600&height=400&seq=eco-tech-workshop&orientation=landscape'
    },
    {
      title: '中華文化工作坊',
      description: '體驗傳統中華文化，學習書法、國畫、剪紙等藝術',
      icon: 'ri-book-line',
      color: 'bg-red-500',
      duration: '2-3小時',
      participants: '20-40人',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20culture%20workshop%20space%20without%20people%20displaying%20calligraphy%20brushes%20ink%20stones%20rice%20paper%20Chinese%20painting%20materials%20paper%20cutting%20tools%20traditional%20art%20supplies%20arranged%20elegantly%20on%20wooden%20tables%20serene%20cultural%20atmosphere%20with%20Chinese%20decorative%20elements%20promoting%20heritage%20and%20artistic%20traditions&width=600&height=400&seq=chinese-culture-workshop&orientation=landscape'
    }
  ];

  const publicWorkshops = [
    {
      title: '週末親子工作坊',
      description: '家長與孩子一起參與的趣味活動',
      icon: 'ri-parent-line',
      color: 'bg-orange-500',
      age: '5-12歲',
      schedule: '週末'
    },
    {
      title: '假期特訓營',
      description: '暑假、寒假密集式學習體驗',
      icon: 'ri-calendar-event-line',
      color: 'bg-blue-500',
      age: '6-15歲',
      schedule: '假期'
    },
    {
      title: '主題興趣班',
      description: '深入探索特定主題的專題課程',
      icon: 'ri-focus-line',
      color: 'bg-red-500',
      age: '8-16歲',
      schedule: '定期'
    },
    {
      title: '競賽準備工作坊',
      description: '為各類科技競賽做準備',
      icon: 'ri-trophy-line',
      color: 'bg-yellow-500',
      age: '10-18歲',
      schedule: '賽前'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre - 工作坊",
    "description": "提供多元化的STEAM工作坊服務，包括校內工作坊、週末親子活動、假期特訓營等。",
    "url": `${siteUrl}/workshops`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "STEAM工作坊",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "STEAM科學工作坊",
          "description": "互動科學實驗，激發學生對科學的興趣",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Starry Learning Centre"
          }
        },
        {
          "@type": "Course",
          "name": "創意藝術工作坊",
          "description": "培養創造力和藝術表達能力",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Starry Learning Centre"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="校內及校外工作坊 - Starry Learning Centre"
        description="提供多元化的STEAM工作坊服務，包括校內工作坊、週末親子活動、假期特訓營等。適合學校、機構和家庭參與。"
        keywords="STEAM工作坊, 學校工作坊, 親子活動, 假期營, 科學實驗, 機器人工作坊, 創意藝術"
        canonical={`${siteUrl}/workshops`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Vibrant%20creative%20workshop%20with%20children%20engaged%20in%20hands-on%20STEAM%20activities%2C%20colorful%20art%20supplies%20and%20science%20materials%2C%20instructor%20demonstrating%20exciting%20experiments%2C%20students%20building%20robots%20and%20creating%20art%20projects%2C%20energetic%20collaborative%20learning%20environment%20with%20diverse%20group%20activities%2C%20bright%20cheerful%20classroom%20filled%20with%20creativity%20and%20innovation&width=1920&height=800&seq=workshops-hero-vibrant&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-palette-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              校內及校外工作坊
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              多元化的STEAM工作坊體驗，激發創意思維，
              培養動手能力，讓學習充滿樂趣
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  if (typeof window.REACT_APP_NAVIGATE === 'function') {
                    window.REACT_APP_NAVIGATE('/');
                  } else {
                    window.location.href = '/';
                  }
                }}
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                返回首頁
              </Button>
            </div>
          </div>
        </section>

        {/* School Workshops Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">校內/機構工作坊</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                為學校提供專業的STEAM工作坊服務，豐富學生的學習體驗
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {schoolWorkshops.map((workshop, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className={`absolute top-4 left-4 w-12 h-12 ${workshop.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <i className={`${workshop.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{workshop.title}</h3>
                  <p className="text-gray-600 mb-6">{workshop.description}</p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <i className="ri-time-line text-blue-500 mr-2"></i>
                      時長：{workshop.duration}
                    </div>
                    <div className="flex items-center">
                      <i className="ri-group-line text-green-500 mr-2"></i>
                      人數：{workshop.participants}
                    </div>
                  </div>
                  <Button 
                    fullWidth
                    onClick={handleEnrollClick}
                  >
                    立即報名
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Public Workshops Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">校外工作坊</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                面向公眾的多元化工作坊，適合不同年齡和興趣的學生
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {publicWorkshops.map((workshop, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${workshop.color} rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`${workshop.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{workshop.title}</h3>
                  <p className="text-gray-600 mb-6">{workshop.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <i className="ri-user-line text-blue-500 mr-2"></i>
                      年齡：{workshop.age}
                    </div>
                    <div className="flex items-center">
                      <i className="ri-calendar-line text-green-500 mr-2"></i>
                      時間：{workshop.schedule}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">工作坊特色</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-hand-heart-line text-3xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">互動體驗</h3>
                <p className="text-gray-600">動手實踐，親身體驗</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-3xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">創意啟發</h3>
                <p className="text-gray-600">激發創新思維</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">團隊合作</h3>
                <p className="text-gray-600">培養協作精神</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-star-line text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">專業導師</h3>
                <p className="text-gray-600">經驗豐富團隊</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">開啟創意學習之旅</h2>
            <p className="text-xl mb-8 text-gray-600">
              立即報名參加我們的工作坊，讓孩子在實踐中學習，在創造中成長
            </p>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleEnrollClick}
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
