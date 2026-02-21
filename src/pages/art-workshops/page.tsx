import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function ArtWorkshopsPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnrollClick = () => {
    if (typeof window.REACT_APP_NAVIGATE === 'function') {
      window.REACT_APP_NAVIGATE('/');
      setTimeout(() => {
        const enrollmentSection = document.getElementById('enrollment');
        if (enrollmentSection) {
          enrollmentSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.href = '/#enrollment';
    }
  };

  const artPrograms = [
    {
      title: '小朋友生日派對',
      description: '為您的孩子打造獨特難忘的生日派對，包含藝術創作、遊戲互動和精美佈置',
      icon: 'ri-cake-3-line',
      color: 'bg-pink-500',
      age: '適合所有年齡',
      duration: '2-3小時/場',
      category: '活動'
    },
    {
      title: '節日親子活動',
      description: '配合不同節日主題的親子工作坊，讓家長和孩子一起創作節日裝飾和禮物',
      icon: 'ri-gift-line',
      color: 'bg-red-500',
      age: '3-12歲親子',
      duration: '2小時/場',
      category: '活動'
    },
    {
      title: 'Team Building活動',
      description: '為企業和團隊設計的藝術團建活動，通過創意協作增進團隊凝聚力',
      icon: 'ri-team-line',
      color: 'bg-blue-500',
      age: '成人團隊',
      duration: '2-4小時/場',
      category: '活動'
    },
    {
      title: '機構/品牌合作',
      description: '為機構和品牌提供定制化藝術活動方案，包括工作坊、展覽和品牌推廣活動',
      icon: 'ri-building-line',
      color: 'bg-purple-500',
      age: '客製化',
      duration: '按需定制',
      category: '合作'
    }
  ];

  const categories = [
    { name: '全部', icon: 'ri-apps-line', color: 'bg-gray-600' },
    { name: '活動', icon: 'ri-calendar-event-line', color: 'bg-pink-500' },
    { name: '合作', icon: 'ri-handshake-line', color: 'bg-purple-600' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredPrograms = selectedCategory === '全部' 
    ? artPrograms 
    : artPrograms.filter(program => program.category === selectedCategory);

  const features = [
    {
      title: '專業導師',
      description: '經驗豐富的藝術教育專家',
      icon: 'ri-user-star-line',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: '小班教學',
      description: '確保每位學生獲得充分指導',
      icon: 'ri-group-line',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: '優質材料',
      description: '提供專業級藝術創作材料',
      icon: 'ri-palette-line',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: '作品展示',
      description: '定期舉辦學生作品展覽',
      icon: 'ri-gallery-line',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const gallery = [
    {
      title: '繪畫作品展示',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20children%20art%20gallery%20displaying%20colorful%20paintings%20and%20drawings%20on%20white%20walls%2C%20vibrant%20watercolor%20artworks%2C%20oil%20paintings%2C%20sketches%20created%20by%20young%20artists%2C%20well-lit%20exhibition%20space%20with%20professional%20presentation%2C%20diverse%20artistic%20styles%20from%20abstract%20to%20realistic%2C%20cheerful%20creative%20atmosphere%20showcasing%20student%20achievements&width=600&height=400&seq=art-gallery-paintings&orientation=landscape'
    },
    {
      title: '手工藝創作',
      image: 'https://readdy.ai/api/search-image?query=Handmade%20crafts%20workshop%20display%20with%20pottery%20ceramics%2C%20woven%20textiles%2C%20paper%20crafts%2C%20origami%20creations%20on%20clean%20white%20background%2C%20colorful%20handcrafted%20items%20made%20by%20children%2C%20artistic%20arrangement%20of%20diverse%20craft%20projects%2C%20bright%20natural%20lighting%20highlighting%20textures%20and%20details&width=600&height=400&seq=art-gallery-crafts&orientation=landscape'
    },
    {
      title: '數碼藝術設計',
      image: 'https://readdy.ai/api/search-image?query=Digital%20art%20studio%20with%20children%20creating%20artwork%20on%20tablets%20and%20computers%2C%20colorful%20digital%20illustrations%20displayed%20on%20screens%2C%20modern%20creative%20workspace%20with%20clean%20white%20walls%2C%20young%20artists%20working%20on%20graphic%20design%20and%20animation%2C%20bright%20contemporary%20learning%20environment&width=600&height=400&seq=art-gallery-digital&orientation=landscape'
    },
    {
      title: '立體雕塑作品',
      image: 'https://readdy.ai/api/search-image?query=Three%20dimensional%20sculpture%20exhibition%20with%20clay%20models%2C%20paper%20mache%20creations%2C%20mixed%20media%20sculptures%20on%20white%20pedestals%2C%20colorful%20artistic%20installations%20created%20by%20students%2C%20well-lit%20gallery%20space%20showcasing%20dimensional%20artworks%2C%20creative%20spatial%20compositions&width=600&height=400&seq=art-gallery-sculpture&orientation=landscape'
    },
    {
      title: '書法水墨藝術',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20calligraphy%20and%20ink%20painting%20display%20on%20white%20walls%2C%20elegant%20black%20ink%20brushwork%2C%20beautiful%20characters%20and%20landscape%20paintings%2C%20artistic%20presentation%20of%20student%20calligraphy%20works%2C%20serene%20gallery%20atmosphere%20with%20cultural%20artistic%20heritage&width=600&height=400&seq=art-gallery-calligraphy&orientation=landscape'
    },
    {
      title: 'Art Jam 體驗',
      image: 'https://readdy.ai/api/search-image?query=Art%20jam%20studio%20with%20people%20painting%20together%2C%20colorful%20canvases%20and%20art%20supplies%2C%20creative%20workshop%20atmosphere%2C%20bright%20modern%20space%20with%20natural%20lighting%2C%20diverse%20participants%20enjoying%20artistic%20activities%2C%20relaxed%20social%20painting%20environment&width=600&height=400&seq=art-gallery-artjam&orientation=landscape'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Serenity Art Studio - Starry Learning Centre",
    "description": "Serenity Art Studio 提供多元化的藝術教育課程和Art Jam體驗，包括繪畫、手工藝、數碼藝術等，培養孩子的創造力和藝術素養。",
    "url": `${siteUrl}/art-workshops`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "藝術工作坊課程",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Art Jam 藝術體驗",
          "description": "自由創作的藝術空間，提供專業畫材和指導",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Serenity Art Studio"
          }
        },
        {
          "@type": "Course",
          "name": "繪畫工作坊",
          "description": "從基礎素描到水彩、油畫，系統化學習繪畫技巧",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Serenity Art Studio"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Serenity Art Studio - 藝術工作坊 | Starry Learning Centre"
        description="Serenity Art Studio 提供多元化的藝術教育課程和Art Jam體驗，包括繪畫、手工藝、數碼藝術等，培養孩子的創造力和藝術素養。"
        keywords="Serenity Art Studio, Art Jam, 藝術工作坊, 繪畫課程, 手工藝, 數碼藝術, 兒童藝術教育"
        canonical={`${siteUrl}/art-workshops`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Artistic%20creative%20workshop%20with%20children%20painting%20and%20creating%20art%2C%20colorful%20paint%20palettes%20and%20brushes%2C%20vibrant%20artwork%20displays%2C%20young%20artists%20engaged%20in%20creative%20activities%2C%20inspiring%20art%20studio%20environment%20with%20natural%20light%2C%20diverse%20artistic%20materials%20and%20projects%2C%20cheerful%20collaborative%20atmosphere&width=1920&height=800&seq=art-workshops-hero&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-palette-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Serenity Art Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4">
              藝術工作坊 | Art Jam | Workshop
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              激發創意潛能，培養藝術素養，
              讓孩子在藝術的世界中自由探索與成長
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleEnrollClick}
                className="bg-gray-900 text-white hover:bg-gray-800"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  window.open('https://www.instagram.com/serenity_art_studio/', '_blank');
                }}
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <i className="ri-instagram-line mr-2"></i>
                關注我們
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">關於 Serenity Art Studio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Serenity Art Studio 是一個充滿創意與靈感的藝術空間，我們致力於提供專業的藝術教育和輕鬆愉快的 Art Jam 體驗。
                無論您是初學者還是有經驗的藝術愛好者，我們都能為您提供合適的課程和指導。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-instagram-line text-3xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">社交媒體</h3>
                <p className="text-gray-600 mb-4">關注我們的 Instagram 獲取最新課程資訊</p>
                <a 
                  href="https://www.instagram.com/serenity_art_studio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 font-semibold cursor-pointer"
                >
                  @serenity_art_studio
                </a>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-brush-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Art Jam</h3>
                <p className="text-gray-600">自由創作的藝術空間，享受繪畫的樂趣</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-graduation-cap-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">專業工作坊</h3>
                <p className="text-gray-600">系統化的藝術課程，提升創作技巧</p>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <i className="ri-instagram-line text-4xl text-pink-600"></i>
                <h2 className="text-4xl font-bold text-gray-900">Instagram 精彩瞬間</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                關注 @serenity_art_studio 查看更多學生作品和工作坊活動
              </p>
              <a 
                href="https://www.instagram.com/serenity_art_studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all cursor-pointer"
              >
                <i className="ri-instagram-line text-xl"></i>
                關注我們的 Instagram
              </a>
            </div>

            {/* Instagram Embed */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="max-w-4xl mx-auto">
                <iframe
                  src="https://www.instagram.com/serenity_art_studio/embed"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="rounded-lg"
                  title="Serenity Art Studio Instagram Feed"
                ></iframe>
              </div>
            </div>

            {/* Activity Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-cake-3-line text-3xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">小朋友生日派對</h3>
                <p className="text-gray-600">奶油膠、黏土、輕黏土手作，讓生日派對充滿創意與歡樂</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-gift-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">節日親子活動</h3>
                <p className="text-gray-600">彩繪流體兔、擴香石等節日主題創作，增進親子互動</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Building 活動</h3>
                <p className="text-gray-600">機構品牌合作，通過藝術創作提升團隊凝聚力</p>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Activities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">工作坊活動精彩回顧</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                從節日親子活動到生日派對，從手工藝創作到團隊建設，
                我們為不同需求提供豐富多彩的藝術體驗
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-auto">
                <img 
                  src="https://static.readdy.ai/image/93d2c8adbfe5ae8fa6e0f96f100cb340/62af2cdf753c9ca8d31d30c40abe04d8.png" 
                  alt="Serenity Art Studio 工作坊活動集錦 - 包括節日親子活動、小朋友生日派對、Team Building、外授工作坊等精彩瞬間"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-cake-3-line text-3xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">小朋友生日派對</h3>
                <p className="text-gray-600">奶油膠、黏土、輕黏土手作，讓生日派對充滿創意與歡樂</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-gift-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">節日親子活動</h3>
                <p className="text-gray-600">彩繪流體兔、擴香石等節日主題創作，增進親子互動</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Building 活動</h3>
                <p className="text-gray-600">機構品牌合作，通過藝術創作提升團隊凝聚力</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">聯絡我們</h2>
            <p className="text-xl mb-8 text-gray-600">
              想要了解更多關於 Serenity Art Studio 的資訊，
              或是預約課程，請隨時聯繫我們。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleEnrollClick}
                className="bg-gray-900 text-white hover:bg-gray-800"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button 
                size="lg" 
                onClick={() => {
                  window.open('https://www.instagram.com/serenity_art_studio/', '_blank');
                }}
                className="bg-transparent border-2 border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                <i className="ri-instagram-line mr-2"></i>
                關注 Instagram
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
