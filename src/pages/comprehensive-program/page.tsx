import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function ComprehensiveProgramPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToEnrollment = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.REACT_APP_NAVIGATE('/');
      setTimeout(() => {
        const section = document.getElementById('enrollment');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const weeklySchedule = [
    {
      day: '星期一',
      theme: 'STEAM 科技探索',
      color: 'bg-blue-500',
      icon: 'ri-robot-line',
      skills: '邏輯思維、解決問題、科學探究',
      examples: 'Scratch/Python編程、3D建模與打印、科學實驗（如製作空氣炮）、機械人組裝',
      image: 'https://readdy.ai/api/search-image?query=Elementary%20and%20middle%20school%20students%20learning%20STEAM%20technology%20with%20Scratch%20Python%20programming%203D%20modeling%20and%20robotics%20assembly%20in%20modern%20classroom%2C%20colorful%20coding%20interfaces%20and%20robot%20components%2C%20hands-on%20science%20experiments%20with%20air%20cannons%2C%20bright%20educational%20technology%20lab%20environment&width=400&height=300&seq=comp-monday&orientation=landscape'
    },
    {
      day: '星期三',
      theme: '藝術創意表達',
      color: 'bg-purple-500',
      icon: 'ri-palette-line',
      skills: '美感、創造力、耐心與專注力',
      examples: '數位繪畫、水彩/壓克力繪畫、版畫製作、環保材料雕塑、混合媒介創作',
      image: 'https://readdy.ai/api/search-image?query=Young%20students%20creating%20diverse%20art%20projects%20including%20digital%20painting%20watercolor%20acrylic%20painting%20printmaking%20and%20eco-friendly%20sculpture%2C%20colorful%20mixed%20media%20artwork%20and%20creative%20materials%2C%20inspiring%20art%20studio%20with%20tablets%20and%20traditional%20art%20supplies&width=400&height=300&seq=comp-wednesday&orientation=landscape'
    },
    {
      day: '星期五',
      theme: '軟實力協作工坊',
      color: 'bg-teal-500',
      icon: 'ri-team-line',
      skills: '公開演講、團隊合作、批判性思考、領導力',
      examples: '小組辯論、專題研習匯報、模擬商業挑戰、團隊遊戲設計、領導力情景模擬',
      image: 'https://readdy.ai/api/search-image?query=Students%20developing%20soft%20skills%20through%20group%20debates%20presentations%20business%20simulations%20and%20leadership%20activities%2C%20confident%20young%20speakers%20and%20collaborative%20teams%2C%20professional%20learning%20environment%20with%20presentation%20stage%20and%20teamwork%20areas&width=400&height=300&seq=comp-friday&orientation=landscape'
    }
  ];

  const dailySchedule = [
    {
      time: '16:00 - 17:30',
      title: '專注學習坊',
      subtitle: '常規功課輔導',
      icon: 'ri-book-open-line',
      color: 'bg-green-500',
      points: [
        '專業導師提供學科指導，解答課業疑難',
        '培養學生的時間管理和自主學習習慣',
        '營造安靜、專注的學習環境，高效完成當天作業'
      ]
    },
    {
      time: '17:30 - 17:45',
      title: '小休 & 轉換',
      subtitle: '休息與準備',
      icon: 'ri-cup-line',
      color: 'bg-orange-500',
      points: [
        '學生休息、用茶點',
        '為動態課程做準備'
      ]
    },
    {
      time: '17:45 - 19:15',
      title: '主題工作坊',
      subtitle: '核心素養培育',
      icon: 'ri-lightbulb-line',
      color: 'bg-pink-500',
      points: [
        '每週固定主題，進行深入的動手實踐',
        '小組協作與項目式學習',
        '培養面向未來的綜合能力'
      ]
    }
  ];

  const corePricing = [
    {
      category: '初小班',
      grade: '小一至小三',
      price: 'HKD 2,800 - 3,200',
      features: [
        '每週3天（週一、三、五）',
        '每天3小時完整課程',
        '1.5小時功課輔導',
        '1.5小時專題工作坊',
        '所有基礎學習材料'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: 'ri-user-smile-line'
    },
    {
      category: '高小班',
      grade: '小四至中三',
      price: 'HKD 3,200 - 3,600',
      features: [
        '每週3天（週一、三、五）',
        '每天3小時完整課程',
        '1.5小時功課輔導',
        '1.5小時專題工作坊',
        '包含更複雜的項目材料'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: 'ri-user-star-line',
      featured: true
    }
  ];

  const flexibleOptions = [
    {
      name: '單日體驗券',
      price: 'HKD 300 - 380/節',
      description: '供新生體驗或靈活補課之用',
      icon: 'ri-ticket-line',
      color: 'bg-yellow-500'
    },
    {
      name: '單修工作坊',
      price: 'HKD 220 - 280/節',
      description: '可單獨報名特定日子的「主題工作坊」（17:45-19:15）',
      icon: 'ri-calendar-check-line',
      color: 'bg-teal-500'
    }
  ];

  const additionalFees = [
    {
      item: '報名費',
      price: 'HKD 300',
      description: '首次報名時收取，包含學生評估、書包、文件夾等',
      icon: 'ri-file-list-line'
    },
    {
      item: '專項材料費',
      price: 'HKD 150 - 250/項目',
      description: '對於涉及昂貴材料的特殊項目（如3D打印物料、高級畫材、特定實驗套件），會提前通知並酌情收取',
      icon: 'ri-tools-line'
    }
  ];

  const discounts = [
    {
      title: '早鳥優惠',
      description: '開課前一個月報名，享受9折優惠',
      icon: 'ri-time-line',
      color: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      title: '兄弟姐妹折扣',
      description: '第二位子女報讀，享受95折；第三位及以上享受9折',
      icon: 'ri-group-line',
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    },
    {
      title: '推薦優惠',
      description: '推薦新生成功報讀，雙方均可獲得HKD 200學費抵扣券',
      icon: 'ri-gift-line',
      color: 'bg-pink-100 text-pink-700 border-pink-200'
    },
    {
      title: '季度繳費優惠',
      description: '一次性繳納一季（3個月）費用，可享受總價95折',
      icon: 'ri-calendar-2-line',
      color: 'bg-teal-100 text-teal-700 border-teal-200'
    }
  ];

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "全方位創學園 · 週一三五精修班",
    "description": "每週3天系統化培養孩子的STEAM科技素養、藝術創意素養與軟實力素養。功課輔導+專題工作坊，全面提升學業與綜合能力。",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Starry Learning Centre",
      "url": siteUrl
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "初小班",
        "courseMode": "onsite",
        "offers": {
          "@type": "Offer",
          "price": "2800-3200",
          "priceCurrency": "HKD"
        }
      },
      {
        "@type": "CourseInstance",
        "name": "高小班",
        "courseMode": "onsite",
        "offers": {
          "@type": "Offer",
          "price": "3200-3600",
          "priceCurrency": "HKD"
        }
      }
    ]
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre - 綜合課程",
    "description": "全面的STEAM教育綜合課程，培養學生多元能力。",
    "url": `${siteUrl}/comprehensive-program`
  };

  return (
    <>
      <SEO
        title="綜合課程 - Starry Learning Centre"
        description="全面的STEAM教育綜合課程，培養學生多元能力，提供系統化學習體驗。"
        keywords="綜合課程, STEAM教育, 全方位學習, 香港教育課程"
        canonical={`${siteUrl}/comprehensive-program`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20empty%20educational%20technology%20workspace%20with%20glowing%20computer%20screens%20showing%20holographic%20interfaces%20blockchain%20visualization%20AI%20neural%20networks%20digital%20displays%20robotic%20equipment%20and%203D%20printers%2C%20clean%20minimalist%20high-tech%20environment%20with%20blue%20lighting%20STEM%20and%20entrepreneurship%20visual%20elements%2C%20futuristic%20learning%20space%20without%20any%20people&width=1920&height=1080&seq=comp-hero-bg&orientation=landscape"
              alt="Background"
              className="w-full h-full object-cover object-top opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
              <span className="text-white font-medium">全新推出 · 系統化素養培育</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              全方位創學園
            </h1>
            <p className="text-3xl text-blue-200 mb-8">
              週一三五精修班
            </p>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              每週3天（週一、三、五），每天3小時
              <br />
              1.5小時功課輔導 + 1.5小時專題工作坊
              <br />
              系統化培養STEAM科技素養、藝術創意素養、軟實力素養
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={scrollToEnrollment}
                className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg whitespace-nowrap cursor-pointer"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-price-tag-3-line mr-2"></i>
                查看價目
              </Button>
            </div>
          </div>
        </section>

        {/* Core Concept */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">核心理念</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                我們以「功課輔導」鞏固學業基礎，並透過三大核心素養工作坊——「STEAM科技素養」、「藝術創意素養」、「軟實力素養」——系統化地培養孩子面向未來的綜合能力。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hover className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-robot-line text-4xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">STEAM科技素養</h3>
                <p className="text-gray-600 leading-relaxed">
                  培養邏輯思維、解決問題能力與科學探究精神，透過編程、3D建模、機械人組裝等實踐項目，掌握未來科技技能。
                </p>
              </Card>

              <Card hover className="text-center bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-palette-line text-4xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">藝術創意素養</h3>
                <p className="text-gray-600 leading-relaxed">
                  發展美感、創造力與專注力，透過數位繪畫、傳統藝術、版畫製作等多元媒介，激發孩子的藝術潛能與創意表達。
                </p>
              </Card>

              <Card hover className="text-center bg-gradient-to-br from-teal-50 to-green-50 border-teal-200">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-team-line text-4xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">軟實力素養</h3>
                <p className="text-gray-600 leading-relaxed">
                  提升公開演講、團隊合作、批判性思考與領導力，透過辯論、專題研習、商業模擬等活動，培養未來領袖特質。
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">每日課程時間表</h2>
              <p className="text-xl text-gray-600">週一、三、五 · 每天3小時完整學習體驗</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dailySchedule.map((session, index) => (
                <Card key={index} hover className="relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-2 h-full ${session.color}`}></div>
                  <div className="pl-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${session.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${session.icon} text-2xl text-white`}></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{session.time}</p>
                        <h3 className="text-xl font-bold text-gray-900">{session.title}</h3>
                      </div>
                    </div>
                    <p className="text-teal-600 font-medium mb-4">{session.subtitle}</p>
                    <ul className="space-y-2">
                      {session.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <i className="ri-check-line text-green-600 mt-0.5"></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Themes */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">每週主題工作坊</h2>
              <p className="text-xl text-gray-600">三大核心素養 · 系統化深度培育</p>
            </div>

            <div className="space-y-8">
              {weeklySchedule.map((workshop, index) => (
                <Card key={index} hover className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={workshop.image}
                        alt={workshop.theme}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className={`absolute top-4 left-4 w-16 h-16 ${workshop.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <i className={`${workshop.icon} text-3xl text-white`}></i>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-4 self-start">
                        <span className="font-bold text-gray-900">{workshop.day}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{workshop.theme}</h3>
                      <div className="mb-6">
                        <p className="text-sm font-medium text-gray-500 mb-2">核心培養能力</p>
                        <p className="text-lg text-teal-600 font-medium">{workshop.skills}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-2">內容舉例</p>
                        <p className="text-gray-600 leading-relaxed">{workshop.examples}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">價目表</h2>
              <p className="text-xl text-gray-600">靈活選擇 · 全面支持孩子成長</p>
            </div>

            {/* Core Packages */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                核心套餐（每週3天：週一、三、五）
              </h3>
              <p className="text-center text-gray-600 mb-8">
                主推產品 · 提供連貫且全面的素養培育
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {corePricing.map((plan, index) => (
                  <Card
                    key={index}
                    hover
                    className={`relative overflow-hidden ${plan.featured ? 'ring-2 ring-pink-500 shadow-xl' : ''}`}
                  >
                    {plan.featured && (
                      <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 text-sm font-bold">
                        推薦
                      </div>
                    )}
                    <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center`}>
                          <i className={`${plan.icon} text-3xl text-white`}></i>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">{plan.category}</h4>
                          <p className="text-gray-600">{plan.grade}</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <p className="text-4xl font-bold text-gray-900">{plan.price}</p>
                        <p className="text-gray-500">每月</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <i className="ri-check-line text-green-600 text-xl mt-0.5"></i>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        fullWidth
                        onClick={scrollToEnrollment}
                        className={`${
                          plan.featured
                            ? 'bg-pink-500 hover:bg-pink-600'
                            : 'bg-teal-600 hover:bg-teal-700'
                        } text-white whitespace-nowrap cursor-pointer`}
                      >
                        <i className="ri-user-add-line mr-2"></i>
                        立即報名
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Flexible Options */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                靈活套餐
              </h3>
              <p className="text-center text-gray-600 mb-8">
                為需要更彈性安排或希望專注特定領域的學生設計
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {flexibleOptions.map((option, index) => (
                  <Card key={index} hover>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <i className={`${option.icon} text-2xl text-white`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h4>
                        <p className="text-2xl font-bold text-teal-600 mb-2">{option.price}</p>
                        <p className="text-gray-600 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Fees */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                附加費用
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {additionalFees.map((fee, index) => (
                  <Card key={index}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className={`${fee.icon} text-2xl text-gray-600`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{fee.item}</h4>
                          <p className="text-lg font-bold text-gray-900">{fee.price}</p>
                        </div>
                        <p className="text-gray-600 text-sm">{fee.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Discounts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                迎新與折扣策略
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {discounts.map((discount, index) => (
                  <Card key={index} hover className={`border ${discount.color}`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <i className={`${discount.icon} text-3xl`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2">{discount.title}</h4>
                        <p className="text-sm">{discount.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">目標對象</h2>
              <p className="text-xl text-gray-600">小一至中三學生（按年級分班）</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { grade: '小一至小三', icon: 'ri-user-smile-line', color: 'bg-blue-500' },
                { grade: '小四至小六', icon: 'ri-user-star-line', color: 'bg-purple-500' },
                { grade: '中一至中二', icon: 'ri-user-heart-line', color: 'bg-teal-500' },
                { grade: '中三', icon: 'ri-user-settings-line', color: 'bg-pink-500' }
              ].map((item, index) => (
                <Card key={index} hover className="text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${item.icon} text-3xl text-white`}></i>
                  </div>
                  <p className="font-bold text-gray-900">{item.grade}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              開啟孩子的全方位成長之旅
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              功課輔導鞏固學業基礎，三大核心素養工作坊培養未來能力
              <br />
              系統化、專業化、全面化的教育方案
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={scrollToEnrollment}
                className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg whitespace-nowrap cursor-pointer"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  window.REACT_APP_NAVIGATE('/');
                }}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-home-line mr-2"></i>
                返回首頁
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
