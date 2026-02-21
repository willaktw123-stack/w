import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function SteamAIPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnrollClick = () => {
    navigate('/');
    setTimeout(() => {
      const enrollmentSection = document.getElementById('enrollment');
      if (enrollmentSection) {
        enrollmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const phase1Units = [
    {
      title: '單元一：AI在身邊',
      duration: '2週',
      icon: 'ri-search-eye-line',
      color: 'bg-blue-500',
      activities: [
        'AI尋寶大冒險：找出生活中的AI，製作「AI偵探筆記本」',
        'AI怎麼想：用「教寵物」比喻，訓練AI識別表情'
      ],
      outcome: '孩子能說出3個AI應用，完成第一次AI訓練',
      image: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20concept%20workspace%20with%20tablet%20displaying%20neural%20network%20diagrams%2C%20colorful%20data%20visualization%20charts%2C%20machine%20learning%20algorithms%20on%20screen%2C%20modern%20educational%20technology%20setup%20with%20bright%20lighting%20and%20clean%20minimalist%20background%20without%20any%20people&width=800&height=600&seq=ai-unit1-workspace&orientation=landscape'
    },
    {
      title: '單元二：AI的五感',
      duration: '3週',
      icon: 'ri-eye-line',
      color: 'bg-purple-500',
      activities: [
        '視覺：教AI認識自己的玩具，學習數據收集與優化',
        '聽覺：訓練AI識別聲音，製作聲音控制遊戲'
      ],
      outcome: '可識別3種物品的AI模型 + 聲音互動程式',
      image: 'https://readdy.ai/api/search-image?query=Computer%20vision%20and%20audio%20recognition%20technology%20display%20showing%20colorful%20waveforms%2C%20sound%20patterns%2C%20image%20recognition%20interface%20with%20toy%20objects%20being%20scanned%2C%20educational%20AI%20learning%20tools%20on%20modern%20desk%20with%20soft%20natural%20lighting%20and%20simple%20clean%20background&width=800&height=600&seq=ai-unit2-senses&orientation=landscape'
    },
    {
      title: '單元三：AI藝術家',
      duration: '3週',
      icon: 'ri-palette-line',
      color: 'bg-pink-500',
      activities: [
        '文字變圖畫：學習提示詞技巧，為故事創作插畫',
        '實用設計：用AI設計個人化T恤'
      ],
      outcome: 'AI藝術作品集 + 可打印的設計稿',
      image: 'https://readdy.ai/api/search-image?query=Digital%20art%20creation%20workspace%20with%20tablet%20showing%20AI%20generated%20colorful%20illustrations%2C%20artistic%20design%20tools%2C%20paint%20palette%2C%20creative%20drawing%20interface%2C%20vibrant%20artwork%20displays%20on%20screen%20in%20bright%20modern%20studio%20setting%20with%20artistic%20materials%20scattered%20around%20without%20people&width=800&height=600&seq=ai-unit3-artist&orientation=landscape'
    },
    {
      title: '單元四：AI作家',
      duration: '2週',
      icon: 'ri-quill-pen-line',
      color: 'bg-amber-500',
      activities: [
        '故事創作：與AI合寫冒險故事，學習三幕劇結構',
        '詩歌創作：創作押韻詩歌，搭配插畫'
      ],
      outcome: '原創故事 + 詩歌作品',
      image: 'https://readdy.ai/api/search-image?query=Creative%20writing%20workspace%20with%20laptop%20displaying%20story%20text%2C%20colorful%20storybook%20pages%2C%20poetry%20manuscripts%2C%20creative%20writing%20software%20interface%2C%20notebooks%20with%20handwritten%20notes%2C%20warm%20cozy%20lighting%20in%20modern%20study%20environment%20without%20any%20people&width=800&height=600&seq=ai-unit4-writer&orientation=landscape'
    },
    {
      title: '單元五：AI玩家',
      duration: '2週',
      icon: 'ri-gamepad-line',
      color: 'bg-green-500',
      activities: [
        'AI猜拳大師：訓練能預測人類出拳的AI',
        '井字棋教練：教AI識別好棋與壞棋'
      ],
      outcome: '理解模式識別與決策樹概念',
      image: 'https://readdy.ai/api/search-image?query=Game%20development%20workspace%20showing%20tic-tac-toe%20game%20interface%20on%20screen%2C%20colorful%20game%20boards%2C%20strategy%20diagrams%2C%20decision%20tree%20flowcharts%2C%20gaming%20controllers%20and%20educational%20game%20design%20tools%20on%20modern%20desk%20with%20playful%20bright%20lighting%20without%20people&width=800&height=600&seq=ai-unit5-gamer&orientation=landscape'
    },
    {
      title: '單元六：成果展',
      duration: '2週',
      icon: 'ri-trophy-line',
      color: 'bg-red-500',
      activities: [
        '作品集設計：整理學習歷程，製作個人展示頁面',
        'AI創客嘉年華：公開展示作品'
      ],
      outcome: '完整的AI作品集 + 公開展示經驗',
      image: 'https://readdy.ai/api/search-image?query=Achievement%20showcase%20display%20with%20golden%20trophies%2C%20colorful%20certificates%2C%20portfolio%20presentation%20on%20large%20screen%2C%20exhibition%20booth%20setup%20with%20project%20displays%2C%20award%20ribbons%2C%20bright%20celebratory%20lighting%20in%20modern%20gallery%20space%20without%20any%20people&width=800&height=600&seq=ai-unit6-showcase&orientation=landscape'
    }
  ];

  const phase2Modules = [
    {
      title: '模組一：數據科學家',
      duration: '4週',
      icon: 'ri-bar-chart-box-line',
      color: 'bg-cyan-500',
      learning: '數據收集 → 清理 → 分析 → 預測',
      project: '班級興趣調查 + 學習成績預測模型',
      tools: 'Google Data Studio、可視化分析工具',
      outcome: '數據分析報告 + 預測模型',
      badges: ['數據偵探', '預測大師', '可視化達人'],
      image: 'https://readdy.ai/api/search-image?query=Data%20science%20workspace%20with%20multiple%20monitors%20displaying%20colorful%20bar%20charts%2C%20pie%20graphs%2C%20statistical%20analysis%20dashboards%2C%20data%20visualization%20tools%2C%20spreadsheets%20with%20numbers%2C%20analytics%20software%20interface%20in%20modern%20office%20with%20professional%20lighting%20without%20people&width=1000&height=600&seq=ai-module1-data&orientation=landscape'
    },
    {
      title: '模組二：數位藝術家',
      duration: '4週',
      icon: 'ri-brush-line',
      color: 'bg-purple-500',
      learning: '藝術風格分析 → AI繪圖 → 動畫製作',
      project: '藝術史風格作品 + 30秒AI動畫短片',
      tools: 'Midjourney、RunwayML、影片編輯軟體',
      outcome: 'AI藝術作品集 + 動畫短片',
      badges: ['風格大師', '動畫導演', '策展人'],
      image: 'https://readdy.ai/api/search-image?query=Digital%20art%20studio%20with%20drawing%20tablet%2C%20stylus%20pen%2C%20computer%20screen%20showing%20vibrant%20digital%20paintings%2C%20animation%20timeline%2C%20art%20style%20references%2C%20color%20palettes%2C%20creative%20design%20software%20in%20bright%20artistic%20workspace%20without%20any%20people&width=1000&height=600&seq=ai-module2-artist&orientation=landscape'
    },
    {
      title: '模組三：程式設計師',
      duration: '4週',
      icon: 'ri-code-s-slash-line',
      color: 'bg-blue-500',
      learning: 'API串接 → 聊天機器人開發',
      project: '天氣查詢機器人 + 學科輔助機器人',
      tools: 'Python、Dialogflow、Google Colab',
      outcome: '可運行的聊天機器人',
      badges: ['API串接高手', '對話設計師', '部署專家'],
      image: 'https://readdy.ai/api/search-image?query=Programming%20workspace%20with%20laptop%20showing%20colorful%20Python%20code%2C%20chatbot%20interface%2C%20API%20documentation%2C%20terminal%20windows%20with%20code%20execution%2C%20programming%20books%2C%20coffee%20mug%2C%20modern%20developer%20desk%20setup%20with%20dual%20monitors%20in%20bright%20office%20without%20people&width=1000&height=600&seq=ai-module3-coding&orientation=landscape'
    },
    {
      title: '模組四：3D建模師',
      duration: '4週',
      icon: 'ri-box-3-line',
      color: 'bg-orange-500',
      learning: '3D建模 → AI輔助設計 → 3D打印',
      project: '夢想房間設計 + 可動機械玩具',
      tools: 'Tinkercad、AI生成3D工具、切片軟體',
      outcome: '3D打印實物作品',
      badges: ['空間建築師', '打印工程師', '機械設計師'],
      image: 'https://readdy.ai/api/search-image?query=3D%20modeling%20workspace%20with%20computer%20displaying%20colorful%203D%20room%20design%2C%20mechanical%20toy%20models%2C%203D%20printer%20in%20action%2C%20printed%20objects%2C%20modeling%20software%20interface%2C%20design%20blueprints%2C%20modern%20maker%20space%20with%20bright%20lighting%20without%20any%20people&width=1000&height=600&seq=ai-module4-3d&orientation=landscape'
    }
  ];

  const teachingFeatures = [
    {
      title: '遊戲化學習系統',
      icon: 'ri-gamepad-line',
      color: 'bg-green-500',
      features: [
        { name: '技能徽章制度', desc: '每完成一個挑戰獲得徽章' },
        { name: 'AI創客作品廊', desc: '線上展示平台，同儕互評' },
        { name: '挑戰任務制', desc: '完成任務解鎖新技能' }
      ]
    },
    {
      title: '專業工具鏈',
      icon: 'ri-tools-line',
      color: 'bg-blue-500',
      phase1Tools: [
        'Google Teachable Machine',
        'Machine Learning for Kids',
        'Craiyon AI繪圖',
        'Scratch + AI擴展'
      ],
      phase2Tools: [
        'Midjourney / DALL-E',
        'Python + Google Colab',
        'Tinkercad 3D建模',
        '3D打印實務操作'
      ]
    },
    {
      title: '科學評估體系',
      icon: 'ri-medal-line',
      color: 'bg-purple-500',
      criteria: [
        { name: '技術能力', weight: '40%', desc: '工具熟練度、問題解決、作品難度' },
        { name: '創意表達', weight: '30%', desc: '原創性、美學表現、敘事能力' },
        { name: '學習態度', weight: '30%', desc: '課堂參與、團隊合作、反思深度' }
      ]
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre - STEAM與AI創客課程",
    "description": "培養8-13歲孩子成為AI時代的創造者，兩階段完整課程體系：AI探索啟蒙（8-10歲）和AI創客工具（11-13歲）。",
    "url": `${siteUrl}/steam-ai`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI創客課程體系",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "第一階段：AI探索啟蒙",
          "description": "適合8-10歲學生，14週課程，讓孩子像交朋友一樣認識AI",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Starry Learning Centre"
          }
        },
        {
          "@type": "Course",
          "name": "第二階段：AI創客工具",
          "description": "適合11-13歲學生，16週課程，掌握四大未來超能力",
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
        title="STEAM與AI創客課程 - 培養AI時代創造者 - Starry Learning Centre"
        description="香港領先的AI創客教育課程，兩階段完整體系（8-13歲）。第一階段AI探索啟蒙（8-10歲，14週），第二階段AI創客工具（11-13歲，16週）。培養數據科學、數位藝術、程式設計、3D建模四大超能力。"
        keywords="AI教育, 人工智能課程, 機器學習, 生成式AI, 兒童編程, 數據科學, 3D建模, 香港AI課程, 青少年科技教育, STEAM教育"
        canonical={`${siteUrl}/steam-ai`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat pt-24 pb-16 md:pt-32 md:pb-24"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Futuristic%20AI%20and%20STEAM%20education%20concept%20with%20holographic%20displays%20showing%20neural%20networks%2C%20robotic%20arms%2C%203D%20modeling%20interfaces%2C%20data%20visualization%2C%20digital%20art%20creation%20tools%2C%20programming%20code%2C%20scientific%20experiments%2C%20all%20integrated%20in%20a%20modern%20innovative%20learning%20environment%20with%20glowing%20blue%20and%20purple%20technology%20elements&width=1920&height=800&seq=steam-ai-hero-future&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="ri-brain-line text-3xl md:text-4xl text-white"></i>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              STEAM與AI創客課程
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto mb-6 md:mb-10 leading-relaxed px-2">
              🎯 培養8-13歲孩子成為AI時代的創造者<br/>而非被動消費者
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Button 
                size="lg" 
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleHomeClick}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                返回首頁
              </Button>
            </div>
          </div>
        </section>

        {/* Phase 1 Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base mb-4">
                📚 第一階段
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">AI探索啟蒙</h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                8-10歲 ｜ 12週 ｜ 讓孩子像交朋友一樣認識AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {phase1Units.map((unit, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden p-4 md:p-6">
                  {/* Image */}
                  <div className="w-full h-36 md:h-44 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={unit.image} 
                      alt={unit.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${unit.color} rounded-lg flex items-center justify-center mb-3`}>
                    <i className={`${unit.icon} text-xl md:text-2xl text-white`}></i>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">{unit.title}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    {unit.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-green-500 text-sm mt-0.5 flex-shrink-0"></i>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{activity}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-1 text-xs flex items-center">
                      <i className="ri-trophy-line text-purple-600 mr-1"></i>
                      成果
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed">{unit.outcome}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 2 Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base mb-4">
                🔧 第二階段
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">AI創客工具</h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                11-13歲 ｜ 16週 ｜ 掌握四大未來超能力
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {phase2Modules.map((module, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="w-full h-48 md:h-64">
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  <div className="p-4 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
                      {/* Left: Icon and Title */}
                      <div className="lg:w-1/4">
                        <div className={`w-14 h-14 md:w-16 md:h-16 ${module.color} rounded-xl flex items-center justify-center mb-3`}>
                          <i className={`${module.icon} text-2xl md:text-3xl text-white`}></i>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                        <span className="inline-block text-xs md:text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          {module.duration}
                        </span>
                      </div>

                      {/* Right: Content */}
                      <div className="lg:w-3/4 space-y-4 md:space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base flex items-center">
                              <i className="ri-book-open-line text-blue-600 mr-2"></i>
                              學習路徑
                            </h4>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{module.learning}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base flex items-center">
                              <i className="ri-file-list-line text-green-600 mr-2"></i>
                              專案實作
                            </h4>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{module.project}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base flex items-center">
                            <i className="ri-tools-line text-purple-600 mr-2"></i>
                            使用工具
                          </h4>
                          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{module.tools}</p>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base flex items-center">
                            <i className="ri-trophy-line text-amber-600 mr-2"></i>
                            學習成果
                          </h4>
                          <p className="text-xs md:text-sm text-gray-700 mb-3 leading-relaxed">{module.outcome}</p>
                          <div className="flex flex-wrap gap-2">
                            {module.badges.map((badge, idx) => (
                              <span key={idx} className="px-3 py-1 text-xs font-semibold text-amber-700 rounded-full border border-amber-300">
                                🏅 {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Features Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">🎪 教學特色</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                創新的教學模式，確保每位學生都能獲得最佳學習體驗
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {teachingFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 p-4 md:p-6">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <i className={`${feature.icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
                  
                  {feature.features && (
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="p-2 md:p-3 bg-green-50 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-1 text-xs flex items-center">
                            <i className="ri-check-line text-green-600 mr-1"></i>
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.phase1Tools && (
                    <div className="space-y-2">
                      <div className="p-2 md:p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2 text-xs">第一階段（入門）</h4>
                        <ul className="space-y-1">
                          {feature.phase1Tools.map((tool, idx) => (
                            <li key={idx} className="text-xs text-gray-700 flex items-start">
                              <i className="ri-checkbox-circle-fill text-blue-500 mr-1 mt-0.5 flex-shrink-0 text-xs"></i>
                              <span>{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-2 md:p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2 text-xs">第二階段（進階）</h4>
                        <ul className="space-y-1">
                          {feature.phase2Tools.map((tool, idx) => (
                            <li key={idx} className="text-xs text-gray-700 flex items-start">
                              <i className="ri-checkbox-circle-fill text-purple-500 mr-1 mt-0.5 flex-shrink-0 text-xs"></i>
                              <span>{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {feature.criteria && (
                    <div className="space-y-2">
                      {feature.criteria.map((criterion, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center font-bold text-purple-600 text-xs">
                            {criterion.weight}
                          </span>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-xs mb-0.5">{criterion.name}</h4>
                            <p className="text-xs text-gray-600">{criterion.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Class Experience Highlights Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">🏫 課堂體驗亮點</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                👨‍👩‍👧‍👦 家長最愛的環節
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300 bg-white p-3 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                  <i className="ri-lightbulb-flash-line text-lg md:text-xl text-white"></i>
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">「AI不是黑魔法」</h3>
                <p className="text-xs text-gray-600">用孩子語言解釋複雜概念</p>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 bg-white p-3 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-3">
                  <i className="ri-gift-line text-lg md:text-xl text-white"></i>
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">「今天我做什麼？」</h3>
                <p className="text-xs text-gray-600">每堂課都有可帶回家的作品</p>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 bg-white p-3 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <i className="ri-parent-line text-lg md:text-xl text-white"></i>
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">「爸媽一起玩」</h3>
                <p className="text-xs text-gray-600">家庭作業是親子AI探索任務</p>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 bg-white p-3 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3">
                  <i className="ri-robot-line text-lg md:text-xl text-white"></i>
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">「我的AI朋友」</h3>
                <p className="text-xs text-gray-600">孩子為自己的AI模型取名、設計個性</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pain Points Solution Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">🎯 解決家長痛點</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                從根本改變孩子與科技的關係
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 md:p-6 border border-red-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <i className="ri-smartphone-line text-lg text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">「孩子沉迷玩手機」</h3>
                    <div className="flex items-center gap-1 text-green-600 font-semibold text-xs md:text-sm">
                      <i className="ri-arrow-right-line"></i>
                      <span>變成「用手機創造」</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 md:p-6 border border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className="ri-rocket-line text-lg text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">「怕孩子落後科技」</h3>
                    <div className="flex items-center gap-1 text-green-600 font-semibold text-xs md:text-sm">
                      <i className="ri-arrow-right-line"></i>
                      <span>超前學習未來技能</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 md:p-6 border border-purple-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <i className="ri-book-line text-lg text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">「補習只為考試」</h3>
                    <div className="flex items-center gap-1 text-green-600 font-semibold text-xs md:text-sm">
                      <i className="ri-arrow-right-line"></i>
                      <span>培養真實能力與自信</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 md:p-6 border border-green-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <i className="ri-compass-line text-lg text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">「不知孩子興趣」</h3>
                    <div className="flex items-center gap-1 text-green-600 font-semibold text-xs md:text-sm">
                      <i className="ri-arrow-right-line"></i>
                      <span>透過多元模組探索潛能</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Benefits Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">🎁 學生收穫</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                全方位提升孩子的未來競爭力
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
              {/* Ability Enhancement */}
              <Card className="hover:shadow-lg transition-all duration-300 p-4 md:p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-brain-line text-xl text-white"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">🧠 能力提升</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-cpu-line text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs mb-0.5">AI素養</h4>
                      <p className="text-xs text-gray-600">理解AI原理，破除科技迷信</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="ri-lightbulb-line text-purple-600 text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs mb-0.5">創造力</h4>
                      <p className="text-xs text-gray-600">從構想到實現的完整流程</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-flow-chart text-green-600 text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs mb-0.5">邏輯思維</h4>
                      <p className="text-xs text-gray-600">數據分析、問題分解能力</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <i className="ri-presentation-line text-orange-600 text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs mb-0.5">表達能力</h4>
                      <p className="text-xs text-gray-600">作品展示與公開演說技巧</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Practical Benefits */}
              <Card className="hover:shadow-lg transition-all duration-300 p-4 md:p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-line-chart-line text-xl text-white"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">📈 實際效益</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-graduation-cap-line text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs mb-0.5">升學優勢</h4>
                      <p className="text-xs text-gray-600">獨特作品集，面試加分項</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="ri-award-line text-purple-600 text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs mb-0.5">國際認證</h4>
                      <p className="text-xs text-gray-600">課程完成證書 + 技能徽章</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-team-line text-green-600 text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs mb-0.5">社群連結</h4>
                      <p className="text-xs text-gray-600">加入AI創客同儕網絡</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <i className="ri-time-line text-orange-600 text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs mb-0.5">未來準備</h4>
                      <p className="text-xs text-gray-600">掌握未來10年關鍵技能</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment ROI Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">💰 投资回报</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                对比传统补习，看见真正的价值
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Comparison Table */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 md:p-8 shadow-md mb-6 md:mb-8">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {/* Traditional Tutoring */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center">
                        <i className="ri-book-2-line text-lg text-white"></i>
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-gray-900">传统补习</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-600 text-xs">
                        <i className="ri-close-circle-line text-red-500 mt-0.5 flex-shrink-0"></i>
                        <span>被动接受知识</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600 text-xs">
                        <i className="ri-close-circle-line text-red-500 mt-0.5 flex-shrink-0"></i>
                        <span>只为考试分数</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600 text-xs">
                        <i className="ri-close-circle-line text-red-500 mt-0.5 flex-shrink-0"></i>
                        <span>学完就忘</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600 text-xs">
                        <i className="ri-close-circle-line text-red-500 mt-0.5 flex-shrink-0"></i>
                        <span>单一学科</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600 text-xs">
                        <i className="ri-close-circle-line text-red-500 mt-0.5 flex-shrink-0"></i>
                        <span>短期效益</span>
                      </li>
                    </ul>
                  </div>

                  {/* AI Creator Course */}
                  <div className="bg-gradient-to-br from-teal-500 to-purple-600 rounded-lg p-4 text-white shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <i className="ri-rocket-line text-lg text-white"></i>
                      </div>
                      <h3 className="text-sm md:text-base font-bold">AI创客课程</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs">
                        <i className="ri-checkbox-circle-fill text-green-300 mt-0.5 flex-shrink-0"></i>
                        <span>主动创造作品</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs">
                        <i className="ri-checkbox-circle-fill text-green-300 mt-0.5 flex-shrink-0"></i>
                        <span>培养真实能力</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs">
                        <i className="ri-checkbox-circle-fill text-green-300 mt-0.5 flex-shrink-0"></i>
                        <span>作品永久保存</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs">
                        <i className="ri-checkbox-circle-fill text-green-300 mt-0.5 flex-shrink-0"></i>
                        <span>跨领域整合</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs">
                        <i className="ri-checkbox-circle-fill text-green-300 mt-0.5 flex-shrink-0"></i>
                        <span>长期竞争力</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Parent Testimonial */}
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:shadow-lg transition-all duration-300 p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <i className="ri-double-quotes-l text-lg md:text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">家长见证</h3>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      「学费比钢琴课便宜，但学到的東西影响孩子一輩子。」
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">培養AI時代的創造者</h2>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-10 text-gray-100 leading-relaxed px-2">
              立即報名STEAM與AI創客課程，讓孩子掌握AI時代的核心競爭力，
              從AI探索啟蒙到AI創客工具，開啟無限可能的未來
            </p>
            <Button 
              size="lg" 
              onClick={handleEnrollClick}
              className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
            >
              <i className="ri-rocket-line mr-2"></i>
              立即報名課程
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
