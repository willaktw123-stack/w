import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function ThreeDCreativePage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const [activeVersion, setActiveVersion] = useState<'classic' | 'culture'>('classic');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnrollClick = () => {
    window.open('https://api.whatsapp.com/message/WS3WGPO24SGEJ1?autoload=1&app_absent=0', '_blank');
  };

  const classicLevels = [
    {
      level: 'Level 1',
      title: '3D探索者',
      age: '8-10歲',
      skills: '基礎建模、簡單動畫、3D列印概念',
      projects: [
        '設計自己的夢想小屋',
        '創作會動的機械寵物',
        '製作個性化手機架（可列印）'
      ],
      software: 'Tinkercad, SculptGL',
      outcome: '5-8個完整作品 + 1個3D列印實物',
      price: 4800,
      addons: [
        { name: '材料包', price: 300 },
        { name: '3D列印點數', price: 500 }
      ],
      color: 'bg-blue-500',
      icon: 'ri-cube-line'
    },
    {
      level: 'Level 2',
      title: '3D設計師',
      age: '11-13歲',
      skills: '中級建模、材質貼圖、基礎動畫',
      projects: [
        '科幻交通工具設計',
        '角色設計與簡單綁定',
        '產品包裝視覺化'
      ],
      software: 'Blender基礎, SketchUp',
      outcome: '3-4個精緻作品 + 作品集指導',
      price: 6200,
      addons: [
        { name: '作品集印刷', price: 400 },
        { name: '軟體授權支援', price: 600 }
      ],
      color: 'bg-purple-500',
      icon: 'ri-pencil-ruler-2-line'
    },
    {
      level: 'Level 3',
      title: '3D藝術家',
      age: '14-16歲',
      skills: '高級建模、燈光渲染、動畫製作',
      projects: [
        '短片場景與角色創作',
        '遊戲道具完整流程',
        '個人品牌動畫短片'
      ],
      software: 'Blender進階, Substance Painter基礎',
      outcome: '專業級作品集 + 競賽指導',
      price: 8800,
      addons: [
        { name: '1對1作品指導', price: 800 },
        { name: '競賽報名輔導', price: 1200 }
      ],
      color: 'bg-teal-500',
      icon: 'ri-palette-line'
    }
  ];

  const cultureLevels = [
    {
      level: 'Level 1',
      title: '香港小創客',
      age: '8-10歲',
      theme: '香港地標、交通工具、特色美食',
      projects: [
        '設計天星小輪3D模型',
        '製作「點心車」可動模型',
        '創作霓虹招牌風格名字燈箱',
        '香港動物（中華白海豚、盧氏小樹蛙）建模'
      ],
      crossSubject: ['數學：比例計算（維港建築）', '視藝：霓虹色彩學', '常識：香港交通發展史'],
      price: 5200,
      addons: [
        { name: '文化材料包', price: 400 },
        { name: '本地元素3D列印', price: 600 }
      ],
      color: 'bg-orange-500',
      icon: 'ri-ship-line'
    },
    {
      level: 'Level 2',
      title: '文化傳承者',
      age: '11-13歲',
      theme: '非物質文化遺產、傳統節慶、老店故事',
      projects: [
        '長洲太平清醮「飄色」人物設計',
        '港式茶餐廳互動場景建模',
        '旗袍/長衫的3D服飾設計',
        '大澳棚屋VR漫遊初體驗'
      ],
      software: 'Blender + CoSpaces VR',
      fieldTrip: '虛擬導覽 + 選修實地參觀（額外收費）',
      price: 7500,
      addons: [
        { name: '實地考察工作坊', price: 800 },
        { name: '傳統匠人分享會', price: 300 }
      ],
      color: 'bg-red-500',
      icon: 'ri-building-2-line'
    },
    {
      level: 'Level 3',
      title: '香港故事導演',
      age: '14-16歲',
      theme: '城市變遷、社會議題、未來想像',
      projects: [
        '「獅子山下」動畫短片製作',
        '香港未來城市設計提案',
        '非遺技藝（紮作、皮革）數位保存專案',
        '香港生態保護互動遊戲設計'
      ],
      outcomes: [
        '參加「香港青年創科比賽」',
        '連結本地文創品牌合作機會',
        '社區藝術裝置提案'
      ],
      price: 10200,
      addons: [
        { name: '文創品牌合作專案指導', price: 1500 },
        { name: '比賽作品集精修', price: 2000 }
      ],
      color: 'bg-pink-500',
      icon: 'ri-movie-2-line'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre - 3D創意課程",
    "description": "提供專業3D創作課程，包括經典國際版和香港文化版，適合8-16歲學生。",
    "url": `${siteUrl}/3d-creative`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "3D創意課程",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Future Creators 3D Academy",
          "description": "專注全球通行的3D創作技能，培養國際競爭力的數位創作者",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Starry Learning Centre"
          }
        },
        {
          "@type": "Course",
          "name": "維港創客 3D文化學堂",
          "description": "用科技說香港故事，結合本土文化、歷史與生活，創作具香港特色的3D作品",
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
        title="3D創意課程 - Starry Learning Centre"
        description="提供專業3D創作課程，包括經典國際版Future Creators 3D Academy和香港文化版維港創客3D文化學堂，適合8-16歲學生。"
        keywords="3D創作課程, 3D建模, Blender課程, 香港文化, STEM教育, 數位創作"
        canonical={`${siteUrl}/3d-creative`}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Students%20creating%20amazing%203D%20models%20and%20animations%20on%20computers%20in%20modern%20digital%20art%20studio%2C%20colorful%203D%20designs%20and%20characters%20on%20screens%2C%20creative%20technology%20workshop%20with%20young%20digital%20artists%20learning%203D%20modeling%20software%2C%20vibrant%20futuristic%20learning%20environment%20with%20holographic%20displays%20and%20innovative%20digital%20creations&width=1920&height=800&seq=3d-creative-hero&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-box-3-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              3D創意課程
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              用科技創造未來，用創意說故事
              <br />
              培養國際競爭力的數位創作者
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
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

        {/* Course Info */}
        <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <i className="ri-group-line text-4xl text-purple-600 mb-3"></i>
                <h3 className="font-bold text-gray-900 mb-2">小班制教學</h3>
                <p className="text-sm text-gray-600">8-16歲學生</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <i className="ri-calendar-line text-4xl text-pink-600 mb-3"></i>
                <h3 className="font-bold text-gray-900 mb-2">每期12週</h3>
                <p className="text-sm text-gray-600">每週2小時</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <i className="ri-computer-line text-4xl text-purple-600 mb-3"></i>
                <h3 className="font-bold text-gray-900 mb-2">實體/線上混合</h3>
                <p className="text-sm text-gray-600">靈活學習模式</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <i className="ri-tools-line text-4xl text-pink-600 mb-3"></i>
                <h3 className="font-bold text-gray-900 mb-2">提供設備</h3>
                <p className="text-sm text-gray-600">附送軟體安裝指導</p>
              </div>
            </div>
          </div>
        </section>

        {/* Version Selector */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">選擇您的課程版本</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                兩種版本，滿足不同學習需求
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveVersion('classic')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeVersion === 'classic'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="ri-global-line mr-2"></i>
                經典國際版
              </button>
              <button
                onClick={() => setActiveVersion('culture')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeVersion === 'culture'
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="ri-building-line mr-2"></i>
                香港文化版
              </button>
            </div>

            {/* Classic Version */}
            {activeVersion === 'classic' && (
              <div className="space-y-12">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Future Creators 3D Academy
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    專注全球通行的3D創作技能，培養國際競爭力的數位創作者
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <i className="ri-trophy-line text-2xl text-blue-600 mb-2"></i>
                      <p className="font-semibold text-gray-900">國際技能</p>
                      <p className="text-sm text-gray-600">升學履歷加分</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <i className="ri-medal-line text-2xl text-purple-600 mb-2"></i>
                      <p className="font-semibold text-gray-900">國際競賽</p>
                      <p className="text-sm text-gray-600">參賽指導支援</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <i className="ri-graduation-cap-line text-2xl text-blue-600 mb-2"></i>
                      <p className="font-semibold text-gray-900">作品集準備</p>
                      <p className="text-sm text-gray-600">海外升學支援</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {classicLevels.map((level, index) => (
                    <Card key={index} className="hover:shadow-2xl transition-all duration-300">
                      <div className={`w-16 h-16 ${level.color} rounded-xl flex items-center justify-center mb-6`}>
                        <i className={`${level.icon} text-3xl text-white`}></i>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-gray-500">{level.level}</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{level.age}</p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <i className="ri-star-line text-yellow-500 mr-2"></i>
                            重點技能
                          </h4>
                          <p className="text-sm text-gray-600">{level.skills}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <i className="ri-folder-line text-blue-500 mr-2"></i>
                            專案範例
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {level.projects.map((project, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <i className="ri-code-box-line text-purple-500 mr-2"></i>
                            使用軟體
                          </h4>
                          <p className="text-sm text-gray-600">{level.software}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <i className="ri-gift-line text-green-500 mr-2"></i>
                            課程成果
                          </h4>
                          <p className="text-sm text-gray-600">{level.outcome}</p>
                        </div>
                      </div>

                      <div className="border-t pt-4 mb-4">
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          HK${level.price.toLocaleString()}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">12週課程</p>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gray-700">附加選項：</p>
                          {level.addons.map((addon, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-gray-600">
                              <span>{addon.name}</span>
                              <span>+HK${addon.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        fullWidth
                        onClick={handleEnrollClick}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        立即報名
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Culture Version */}
            {activeVersion === 'culture' && (
              <div className="space-y-12">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    維港創客 3D文化學堂
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    用科技說香港故事，結合本土文化、歷史與生活，創作具香港特色的3D作品
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <i className="ri-heart-line text-2xl text-orange-600 mb-2"></i>
                      <p className="font-semibold text-gray-900">文化認同</p>
                      <p className="text-sm text-gray-600">在地連結</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <i className="ri-community-line text-2xl text-red-600 mb-2"></i>
                      <p className="font-semibold text-gray-900">社區參與</p>
                      <p className="text-sm text-gray-600">實體展覽機會</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <i className="ri-book-line text-2xl text-orange-600 mb-2"></i>
                      <p className="font-semibold text-gray-900">文化保育</p>
                      <p className="text-sm text-gray-600">數位化傳承</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {cultureLevels.map((level, index) => (
                    <Card key={index} className="hover:shadow-2xl transition-all duration-300">
                      <div className={`w-16 h-16 ${level.color} rounded-xl flex items-center justify-center mb-6`}>
                        <i className={`${level.icon} text-3xl text-white`}></i>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-gray-500">{level.level}</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{level.age}</p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <i className="ri-compass-line text-orange-500 mr-2"></i>
                            文化主題
                          </h4>
                          <p className="text-sm text-gray-600">{level.theme}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <i className="ri-folder-line text-red-500 mr-2"></i>
                            專案範例
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {level.projects.map((project, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {level.crossSubject && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <i className="ri-links-line text-blue-500 mr-2"></i>
                              跨學科連結
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {level.crossSubject.map((subject, idx) => (
                                <li key={idx}>• {subject}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {level.software && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <i className="ri-code-box-line text-purple-500 mr-2"></i>
                              使用軟體
                            </h4>
                            <p className="text-sm text-gray-600">{level.software}</p>
                          </div>
                        )}

                        {level.outcomes && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <i className="ri-trophy-line text-yellow-500 mr-2"></i>
                              成果應用
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {level.outcomes.map((outcome, idx) => (
                                <li key={idx}>• {outcome}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="border-t pt-4 mb-4">
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          HK${level.price.toLocaleString()}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">12週課程</p>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gray-700">文化附加體驗：</p>
                          {level.addons.map((addon, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-gray-600">
                              <span>{addon.name}</span>
                              <span>+HK${addon.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        fullWidth
                        onClick={handleEnrollClick}
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                      >
                        立即報名
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Package Deals */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">套裝優惠</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <i className="ri-calendar-2-line text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">報名2期</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">9折優惠</p>
                <p className="text-sm text-gray-600">連續學習更優惠</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <i className="ri-team-line text-4xl text-purple-600 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">兄弟姐妹同報</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">每人減$500</p>
                <p className="text-sm text-gray-600">家庭優惠</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <i className="ri-group-line text-4xl text-pink-600 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3人團報</h3>
                <p className="text-3xl font-bold text-pink-600 mb-2">各減$800</p>
                <p className="text-sm text-gray-600">揪團更划算</p>
              </div>
            </div>

            {activeVersion === 'culture' && (
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">香港文化版特別套餐</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">香港文化護照全年套餐</h4>
                    <p className="text-gray-600 mb-4">3期課程完整體驗</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 line-through">原價 HK$22,900</span>
                      <span className="text-3xl font-bold text-orange-600">HK$19,800</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ 3期完整課程</li>
                      <li>✓ 3次實地考察</li>
                      <li>✓ 年度作品展參展資格</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">家庭文化傳承套餐</h4>
                    <p className="text-gray-600 mb-4">家長+孩子共同參與</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500">8節親子課</span>
                      <span className="text-3xl font-bold text-red-600">HK$6,800</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ 親子共學體驗</li>
                      <li>✓ 文化傳承互動</li>
                      <li>✓ 家庭作品創作</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">課程特色服務</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
                <i className="ri-file-chart-line text-4xl text-blue-600 mb-4"></i>
                <h3 className="font-bold text-gray-900 mb-2">每月進度報告</h3>
                <p className="text-sm text-gray-600">家長隨時掌握學習狀況</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                <i className="ri-gallery-line text-4xl text-purple-600 mb-4"></i>
                <h3 className="font-bold text-gray-900 mb-2">線上作品展示</h3>
                <p className="text-sm text-gray-600">專屬平台展示學生作品</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6 text-center">
                <i className="ri-trophy-line text-4xl text-pink-600 mb-4"></i>
                <h3 className="font-bold text-gray-900 mb-2">國際競賽機會</h3>
                <p className="text-sm text-gray-600">參與線上國際競賽</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center">
                <i className="ri-presentation-line text-4xl text-orange-600 mb-4"></i>
                <h3 className="font-bold text-gray-900 mb-2">免費軟體工作坊</h3>
                <p className="text-sm text-gray-600">每月一次技能提升</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">增值服務</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">免費體驗課</h3>
                <p className="text-gray-600 mb-4">每月舉辦2次90分鐘體驗工作坊</p>
                <Button onClick={handleEnrollClick} className="bg-blue-600 hover:bg-blue-700 text-white">
                  預約體驗
                </Button>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">作品集諮詢</h3>
                <p className="text-gray-600 mb-4">升學作品集指導服務 - HK$800/小時</p>
                <Button onClick={handleEnrollClick} className="bg-purple-600 hover:bg-purple-700 text-white">
                  預約諮詢
                </Button>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">假期密集營</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">3日營：HK$2,800（經典版）/ HK$3,200（文化版）</p>
                  <p className="text-gray-600">5日營：HK$4,500（經典版）/ HK$5,000（文化版）</p>
                </div>
                <Button onClick={handleEnrollClick} className="bg-pink-600 hover:bg-pink-700 text-white">
                  查看營期
                </Button>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">線上學習社群</h3>
                <p className="text-gray-600 mb-4">課程學員專屬Discord群組，持續學習支援</p>
                <Button onClick={handleEnrollClick} className="bg-orange-600 hover:bg-orange-700 text-white">
                  加入社群
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">開啟3D創作之旅</h2>
            <p className="text-xl mb-8">
              立即報名，讓孩子掌握未來必備的數位創作技能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleEnrollClick}
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                立即報名
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-white text-white hover:bg-white/10"
              >
                聯絡我們
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
