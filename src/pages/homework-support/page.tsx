import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function HomeworkSupportPage() {
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

  const services = [
    {
      title: '功課輔導',
      description: '協助完成日常功課，解答學習疑難',
      icon: 'ri-pencil-line',
      color: 'bg-green-500',
      features: ['中英數常', '功課檢查', '錯題講解', '重點複習']
    },
    {
      title: '溫習指導',
      description: '教授有效溫習方法，提升學習效率',
      icon: 'ri-book-open-line',
      color: 'bg-blue-500',
      features: ['溫習計劃', '記憶技巧', '筆記整理', '考試準備']
    },
    {
      title: '專題研習',
      description: '指導專題研習項目，培養研究能力',
      icon: 'ri-file-search-line',
      color: 'bg-purple-500',
      features: ['選題指導', '資料搜集', '報告撰寫', '演示技巧']
    },
    {
      title: '學習習慣',
      description: '培養良好學習習慣，建立自主學習能力',
      icon: 'ri-calendar-check-line',
      color: 'bg-orange-500',
      features: ['時間管理', '專注訓練', '自律培養', '目標設定']
    }
  ];

  const grades = [
    {
      level: '小一至小二',
      focus: '基礎建立',
      description: '培養學習興趣，建立良好學習習慣',
      color: 'bg-green-100 text-green-600'
    },
    {
      level: '小三至小四',
      focus: '能力提升',
      description: '加強基礎知識，提升解題能力',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      level: '小五至小六',
      focus: '升中準備',
      description: '全面複習鞏固，準備升中考試',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre - 小學功課輔導",
    "description": "專業小學功課輔導服務，提供功課指導、溫習支援、專題研習協助。",
    "url": `${siteUrl}/homework-support`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "小學功課輔導服務",
      "itemListElement": services.map(service => ({
        "@type": "Course",
        "name": service.title,
        "description": service.description,
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
        title="小學功課輔導 - Starry Learning Centre"
        description="專業小學功課輔導服務，提供功課指導、溫習支援、專題研習協助。培養良好學習習慣，提升學習效率。"
        keywords="功課輔導, 小學補習, 功課班, 溫習指導, 專題研習, 學習習慣, 香港小學"
        canonical={`${siteUrl}/homework-support`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Warm%20and%20supportive%20homework%20help%20classroom%20with%20primary%20school%20children%20receiving%20caring%20guidance%20from%20patient%20teachers%2C%20organized%20study%20desks%20with%20colorful%20educational%20materials%2C%20students%20focused%20on%20completing%20assignments%20with%20smiles%2C%20bright%20cheerful%20learning%20environment%20with%20books%20pencils%20and%20worksheets%2C%20encouraging%20atmosphere%20for%20young%20learners%20developing%20good%20study%20habits&width=1920&height=800&seq=homework-support-hero-warm&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-pencil-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              小學功課輔導
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              專業導師悉心指導，協助完成功課，培養良好學習習慣，
              讓孩子輕鬆應對學業挑戰
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
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

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">輔導服務</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                全方位的功課輔導支援，助孩子學業進步
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`${service.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Grades Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">年級分組</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                根據不同年級特點，提供針對性輔導
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {grades.map((grade, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-green-500 transition-all duration-300">
                  <div className={`inline-block px-4 py-2 ${grade.color} rounded-full font-bold text-lg mb-4`}>
                    {grade.level}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{grade.focus}</h3>
                  <p className="text-gray-600">{grade.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">我們的優勢</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-heart-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">耐心指導</h3>
                <p className="text-gray-600">細心解答每個疑問</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-group-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">小班教學</h3>
                <p className="text-gray-600">確保每位學生得到關注</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">彈性時間</h3>
                <p className="text-gray-600">配合家長工作時間</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-parent-line text-3xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">家校溝通</h3>
                <p className="text-gray-600">定期反饋學習進度</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">讓孩子愛上學習</h2>
            <p className="text-xl mb-8 text-gray-100">
              立即報名功課輔導班，讓專業導師陪伴孩子快樂成長
            </p>
            <Button 
              size="lg" 
              onClick={handleEnrollClick}
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
