import { useState } from 'react';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

export default function WorkshopsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部工作坊', icon: 'ri-apps-line' },
    { id: 'tech', name: '科技與創新', icon: 'ri-robot-line' },
    { id: 'business', name: '創業與商業', icon: 'ri-lightbulb-line' },
    { id: 'creative', name: '創意表達與藝術', icon: 'ri-palette-line' },
    { id: 'science', name: '科學', icon: 'ri-microscope-line' },
    { id: 'finance', name: '金融與理財', icon: 'ri-coin-line' },
    { id: 'leadership', name: '軟實力與領袖', icon: 'ri-team-line' }
  ];

  const workshops = [
    // A. 科技與創新系列
    {
      id: 'robotic-arm',
      category: 'tech',
      title: '機械臂工程師',
      description: '學習基礎機械原理，親手組裝並程式控制一個簡易的液壓機械臂，夾起目標物。',
      price: 'HK$480',
      image: 'https://readdy.ai/api/search-image?query=Children%20building%20and%20programming%20hydraulic%20robotic%20arm%20in%20STEAM%20workshop%2C%20hands-on%20mechanical%20engineering%20project%20with%20colorful%20components%2C%20students%20controlling%20robotic%20gripper%20to%20pick%20up%20objects%2C%20modern%20maker%20space%20with%20engineering%20tools%20and%20equipment&width=400&height=300&seq=workshop-robotic-arm&orientation=landscape',
      color: 'bg-blue-500',
      icon: 'ri-robot-line'
    },
    {
      id: 'ai-artist',
      category: 'tech',
      title: 'AI 小畫家：生成式藝術體驗',
      description: '認識人工智能如何創作藝術，學習使用簡單的AI繪圖工具，並創造出屬於自己的奇幻畫作。',
      price: 'HK$420',
      image: 'https://readdy.ai/api/search-image?query=Children%20creating%20digital%20art%20using%20AI%20generative%20art%20tools%20on%20tablets%20and%20computers%2C%20colorful%20fantasy%20artwork%20on%20screens%2C%20creative%20AI%20art%20workshop%20with%20young%20artists%20exploring%20artificial%20intelligence%20drawing%20software%2C%20vibrant%20digital%20paintings&width=400&height=300&seq=workshop-ai-art&orientation=landscape',
      color: 'bg-purple-500',
      icon: 'ri-palette-line'
    },
    {
      id: 'drone-coding',
      category: 'tech',
      title: '無人機編程挑戰賽',
      description: '學習編寫飛行路徑，讓無人機自主穿越障礙，完成運送任務，理解自動化控制的邏輯。',
      price: 'HK$580',
      image: 'https://readdy.ai/api/search-image?query=Students%20programming%20drones%20to%20navigate%20obstacle%20courses%20autonomously%2C%20colorful%20drones%20flying%20through%20challenge%20gates%2C%20coding%20workshop%20with%20flight%20path%20programming%20on%20computers%2C%20modern%20technology%20classroom%20with%20drone%20racing%20setup&width=400&height=300&seq=workshop-drone&orientation=landscape',
      color: 'bg-cyan-500',
      icon: 'ri-flight-takeoff-line'
    },
    {
      id: 'minecraft-redstone',
      category: 'tech',
      title: '我的世界：紅石電路密室逃脫',
      description: '在《我的世界》遊戲中，運用紅石電路原理，設計並建造一個充滿機關的密室。',
      price: 'HK$380',
      image: 'https://readdy.ai/api/search-image?query=Children%20playing%20Minecraft%20building%20complex%20redstone%20circuits%20and%20escape%20room%20mechanisms%2C%20computer%20screens%20showing%20intricate%20redstone%20contraptions%20and%20puzzle%20rooms%2C%20gaming%20workshop%20with%20creative%20engineering%20challenges%20in%20blocky%20virtual%20world&width=400&height=300&seq=workshop-minecraft&orientation=landscape',
      color: 'bg-green-500',
      icon: 'ri-gamepad-line'
    },
    {
      id: 'app-inventor',
      category: 'tech',
      title: '手機APP發明家',
      description: '使用低代碼平台，設計並原型化一個解決生活小問題的手機APP界面。',
      price: 'HK$450',
      image: 'https://readdy.ai/api/search-image?query=Teenagers%20designing%20mobile%20app%20interfaces%20using%20low-code%20platforms%20on%20computers%2C%20colorful%20app%20prototypes%20and%20UI%20designs%20on%20screens%2C%20modern%20app%20development%20workshop%20with%20young%20inventors%20creating%20problem-solving%20applications&width=400&height=300&seq=workshop-app&orientation=landscape',
      color: 'bg-indigo-500',
      icon: 'ri-smartphone-line'
    },
    {
      id: '3d-printing',
      category: 'tech',
      title: '3D打印：從想象到實物',
      description: '學習基礎3D建模，為自己設計一個獨一無二的钥匙扣或迷你花瓶，並現場觀看打印過程。',
      price: 'HK$480',
      image: 'https://readdy.ai/api/search-image?query=Children%20learning%203D%20modeling%20and%20watching%203D%20printers%20create%20custom%20keychains%20and%20mini%20vases%2C%20colorful%203D%20design%20software%20on%20computers%2C%20modern%20maker%20space%20with%20multiple%203D%20printers%20in%20action%20printing%20student%20designs&width=400&height=300&seq=workshop-3dprint&orientation=landscape',
      color: 'bg-orange-500',
      icon: 'ri-printer-line'
    },
    {
      id: 'microbit',
      category: 'tech',
      title: 'Micro:bit 智能小發明',
      description: '利用Micro:bit微電腦板，製作一個計步器、骰子或簡易訊息傳送器。',
      price: 'HK$420',
      image: 'https://readdy.ai/api/search-image?query=Children%20programming%20Micro:bit%20microcontrollers%20to%20create%20step%20counters%20and%20message%20devices%2C%20colorful%20LED%20displays%20and%20electronic%20components%2C%20hands-on%20coding%20workshop%20with%20young%20inventors%20building%20smart%20gadgets&width=400&height=300&seq=workshop-microbit&orientation=landscape',
      color: 'bg-teal-500',
      icon: 'ri-cpu-line'
    },

    // B. 創業與商業系列
    {
      id: 'brand-design',
      category: 'business',
      title: '創業家第一課：我的品牌設計',
      description: '為自己想創辦的「公司」設計Logo、口號和品牌故事，學習基本的品牌思維。',
      price: 'HK$380',
      image: 'https://readdy.ai/api/search-image?query=Young%20entrepreneurs%20designing%20company%20logos%20and%20brand%20stories%20on%20tablets%20and%20paper%2C%20colorful%20brand%20identity%20sketches%20and%20slogans%2C%20creative%20business%20workshop%20with%20children%20learning%20branding%20concepts%20and%20marketing%20fundamentals&width=400&height=300&seq=workshop-brand&orientation=landscape',
      color: 'bg-amber-500',
      icon: 'ri-brush-line'
    },
    {
      id: 'tiktok-marketing',
      category: 'business',
      title: '營銷達人：為你的產品拍一支TikTok廣告！',
      description: '學習短視頻營銷技巧，分組為一款產品策劃並拍攝一支15秒的創意廣告。',
      price: 'HK$450',
      image: 'https://readdy.ai/api/search-image?query=Teenagers%20filming%20creative%20TikTok%20advertisements%20for%20products%20using%20smartphones%20and%20ring%20lights%2C%20video%20production%20setup%20with%20colorful%20props%20and%20backdrops%2C%20social%20media%20marketing%20workshop%20with%20young%20content%20creators%20learning%20short-form%20video%20skills&width=400&height=300&seq=workshop-tiktok&orientation=landscape',
      color: 'bg-pink-500',
      icon: 'ri-video-line'
    },
    {
      id: 'auction-game',
      category: 'business',
      title: '小小拍賣師：價值發現遊戲',
      description: '透過模擬拍賣會，學習談判技巧、價值評估與市場供需概念。',
      price: 'HK$380',
      image: 'https://readdy.ai/api/search-image?query=Children%20participating%20in%20mock%20auction%20game%20learning%20negotiation%20and%20value%20assessment%2C%20colorful%20auction%20paddles%20and%20items%20for%20bidding%2C%20interactive%20business%20education%20workshop%20with%20young%20auctioneers%20understanding%20market%20supply%20and%20demand&width=400&height=300&seq=workshop-auction&orientation=landscape',
      color: 'bg-yellow-500',
      icon: 'ri-auction-line'
    },
    {
      id: 'eco-entrepreneur',
      category: 'business',
      title: '環保創業家：升級再造工作坊',
      description: '利用廢舊衣物或物料，設計並製作一件新的環保產品，並為其定價。',
      price: 'HK$420',
      image: 'https://readdy.ai/api/search-image?query=Children%20upcycling%20old%20clothes%20and%20materials%20into%20new%20eco-friendly%20products%2C%20creative%20recycling%20workshop%20with%20colorful%20fabrics%20and%20craft%20supplies%2C%20sustainable%20entrepreneurship%20education%20with%20young%20designers%20creating%20and%20pricing%20green%20products&width=400&height=300&seq=workshop-eco&orientation=landscape',
      color: 'bg-emerald-500',
      icon: 'ri-recycle-line'
    },

    // C. 創意表達與藝術系列
    {
      id: 'stop-motion',
      category: 'creative',
      title: '動畫導演夢工廠',
      description: '使用Stop Motion定格動畫技術，創作一部屬於自己的短篇動畫。',
      price: 'HK$480',
      image: 'https://readdy.ai/api/search-image?query=Children%20creating%20stop%20motion%20animation%20with%20clay%20figures%20and%20miniature%20sets%2C%20colorful%20animation%20studio%20setup%20with%20cameras%20and%20lighting%2C%20creative%20filmmaking%20workshop%20with%20young%20directors%20producing%20frame-by-frame%20animated%20stories&width=400&height=300&seq=workshop-animation&orientation=landscape',
      color: 'bg-violet-500',
      icon: 'ri-film-line'
    },
    {
      id: 'digital-painting',
      category: 'creative',
      title: '數位繪畫創想營',
      description: '學習使用Procreate等軟體，掌握數位繪畫的基本技巧，完成一幅數字藝術作品。',
      price: 'HK$450',
      image: 'https://readdy.ai/api/search-image?query=Young%20artists%20creating%20digital%20paintings%20on%20iPads%20using%20Procreate%20software%2C%20colorful%20digital%20artwork%20and%20illustrations%20on%20screens%2C%20modern%20art%20workshop%20with%20stylus%20pens%20and%20graphics%20tablets%2C%20vibrant%20creative%20learning%20environment&width=400&height=300&seq=workshop-digital-art&orientation=landscape',
      color: 'bg-fuchsia-500',
      icon: 'ri-brush-2-line'
    },
    {
      id: 'architecture',
      category: 'creative',
      title: '建築師的夢想城市',
      description: '學習基礎建築結構與設計，用卡紙、木棒等材料搭建一座承重橋或未來建築模型。',
      price: 'HK$420',
      image: 'https://readdy.ai/api/search-image?query=Children%20building%20architectural%20models%20of%20bridges%20and%20futuristic%20buildings%20using%20cardboard%20and%20wooden%20sticks%2C%20colorful%20construction%20materials%20and%20structural%20designs%2C%20hands-on%20architecture%20workshop%20with%20young%20builders%20learning%20engineering%20principles&width=400&height=300&seq=workshop-architecture&orientation=landscape',
      color: 'bg-slate-500',
      icon: 'ri-building-line'
    },
    {
      id: 'youtuber',
      category: 'creative',
      title: 'YouTuber初體驗：我是小網紅',
      description: '學習影片拍攝、剪輯基礎，並親自錄製一段開箱或分享影片。',
      price: 'HK$480',
      image: 'https://readdy.ai/api/search-image?query=Teenagers%20learning%20video%20production%20and%20editing%20for%20YouTube%2C%20filming%20unboxing%20videos%20with%20professional%20lighting%20and%20cameras%2C%20content%20creator%20workshop%20with%20young%20influencers%20recording%20and%20editing%20their%20first%20videos&width=400&height=300&seq=workshop-youtube&orientation=landscape',
      color: 'bg-red-500',
      icon: 'ri-youtube-line'
    },

    // D. 科學系列
    {
      id: 'detective',
      category: 'science',
      title: '偵探學園：科學鑑證體驗',
      description: '透過指紋採集、纖維分析等科學方法，破解一個模擬的「案件」。',
      price: 'HK$420',
      image: 'https://readdy.ai/api/search-image?query=Children%20conducting%20forensic%20science%20investigations%20collecting%20fingerprints%20and%20analyzing%20fibers%2C%20detective%20workshop%20with%20magnifying%20glasses%20and%20evidence%20collection%20tools%2C%20mystery-solving%20activity%20with%20young%20investigators%20using%20scientific%20methods&width=400&height=300&seq=workshop-detective&orientation=landscape',
      color: 'bg-gray-600',
      icon: 'ri-search-line'
    },
    {
      id: 'chemistry-lab',
      category: 'science',
      title: '化學魔法實驗室',
      description: '在安全的環境下進行有趣的化學實驗，觀察化學反應的奇妙現象，製作彩虹試管和火山爆發。',
      price: 'HK$450',
      image: 'https://readdy.ai/api/search-image?query=Children%20conducting%20colorful%20chemistry%20experiments%20in%20safe%20laboratory%20environment%2C%20rainbow%20test%20tubes%20and%20volcano%20eruption%20demonstrations%2C%20exciting%20chemical%20reactions%20with%20bubbling%20liquids%20and%20color%20changes%2C%20young%20scientists%20wearing%20safety%20goggles%20in%20modern%20science%20lab&width=400&height=300&seq=workshop-chemistry&orientation=landscape',
      color: 'bg-pink-600',
      icon: 'ri-flask-line'
    },
    {
      id: 'physics-exploration',
      category: 'science',
      title: '物理探索工作坊',
      description: '通過力學、光學、電學實驗，理解物理原理，製作簡易電路和光學萬花筒。',
      price: 'HK$480',
      image: 'https://readdy.ai/api/search-image?query=Students%20exploring%20physics%20principles%20through%20hands-on%20experiments%20with%20mechanics%20optics%20and%20electricity%2C%20building%20simple%20circuits%20and%20optical%20kaleidoscopes%2C%20colorful%20physics%20demonstrations%20with%20light%20prisms%20and%20electrical%20components%2C%20interactive%20science%20workshop&width=400&height=300&seq=workshop-physics&orientation=landscape',
      color: 'bg-blue-600',
      icon: 'ri-lightbulb-flash-line'
    },
    {
      id: 'environmental-science',
      category: 'science',
      title: '環境科學工作坊',
      description: '學習生態保護知識，進行水質檢測、土壤分析，了解環境保護的重要性。',
      price: 'HK$420',
      image: 'https://readdy.ai/api/search-image?query=Children%20conducting%20environmental%20science%20experiments%20testing%20water%20quality%20and%20analyzing%20soil%20samples%2C%20ecological%20protection%20activities%20with%20young%20environmentalists%2C%20colorful%20pH%20test%20strips%20and%20soil%20testing%20kits%2C%20hands-on%20environmental%20education%20workshop&width=400&height=300&seq=workshop-environment&orientation=landscape',
      color: 'bg-emerald-600',
      icon: 'ri-leaf-line'
    },

    // E. 金融與理財系列
    {
      id: 'monopoly-finance',
      category: 'finance',
      title: '大富翁理財競賽',
      description: '在改良版的「大富翁」遊戲中，學習收入、支出、儲蓄與投資的基礎概念。',
      price: 'HK$380',
      image: 'https://readdy.ai/api/search-image?query=Children%20playing%20enhanced%20Monopoly%20board%20game%20learning%20financial%20literacy%20concepts%2C%20colorful%20game%20board%20with%20money%20and%20property%20cards%2C%20financial%20education%20workshop%20with%20young%20players%20understanding%20income%20savings%20and%20investment%20basics&width=400&height=300&seq=workshop-monopoly&orientation=landscape',
      color: 'bg-green-600',
      icon: 'ri-money-dollar-circle-line'
    },
    {
      id: 'nft-zoo',
      category: 'finance',
      title: '加密動物園：認識NFT',
      description: '透過類比遊戲，輕鬆理解NFT（非同質化代幣）的概念，並設計一個自己的「數字藏品」。',
      price: 'HK$450',
      image: 'https://static.readdy.ai/image/93d2c8adbfe5ae8fa6e0f96f100cb340/17a563f42f2fa60875a51a0dcbf84e59.png',
      color: 'bg-purple-600',
      icon: 'ri-nft-line'
    },
    {
      id: 'budget-challenge',
      category: 'finance',
      title: '預算小管家：一日城市生存挑戰',
      description: '模擬一日生活，在有限的預算內做出合理的消費選擇，學習編制預算。',
      price: 'HK$380',
      image: 'https://readdy.ai/api/search-image?query=Children%20participating%20in%20budget%20management%20simulation%20game%20making%20spending%20decisions%2C%20colorful%20city%20survival%20challenge%20with%20shopping%20scenarios%20and%20financial%20choices%2C%20practical%20money%20management%20workshop%20with%20young%20learners%20budgeting%20daily%20expenses&width=400&height=300&seq=workshop-budget&orientation=landscape',
      color: 'bg-blue-600',
      icon: 'ri-wallet-line'
    },

    // F. 軟實力與領袖系列
    {
      id: 'ted-speaker',
      category: 'leadership',
      title: 'TED小演說家',
      description: '學習公眾演講的結構與技巧，克服緊張情緒，並就一個自己熱愛的話題發表一段短演講。',
      price: 'HK$450',
      image: 'https://readdy.ai/api/search-image?query=Young%20students%20giving%20TED-style%20presentations%20on%20stage%20with%20microphone%20and%20spotlight%2C%20public%20speaking%20workshop%20with%20confident%20children%20delivering%20speeches%2C%20professional%20presentation%20setup%20with%20audience%20and%20inspiring%20learning%20environment&width=400&height=300&seq=workshop-ted&orientation=landscape',
      color: 'bg-red-600',
      icon: 'ri-mic-line'
    },
    {
      id: 'team-escape',
      category: 'leadership',
      title: '團隊合作大作戰：逃出未來實驗室',
      description: '在一個實體解謎遊戲中，通過團隊溝通、分工與協作，共同解決難題，完成挑戰。',
      price: 'HK$480',
      image: 'https://readdy.ai/api/search-image?query=Children%20working%20together%20in%20futuristic%20escape%20room%20solving%20puzzles%20and%20challenges%2C%20teamwork%20activity%20with%20colorful%20high-tech%20laboratory%20setting%2C%20collaborative%20problem-solving%20workshop%20with%20young%20teams%20communicating%20and%20cooperating&width=400&height=300&seq=workshop-escape&orientation=landscape',
      color: 'bg-cyan-600',
      icon: 'ri-team-line'
    }
  ];

  const filteredWorkshops = activeCategory === 'all' 
    ? workshops 
    : workshops.filter(w => w.category === activeCategory);

  const handleEnrollClick = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="workshops" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            主題工作坊
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            每月精選主題工作坊，讓孩子在短時間內深度體驗不同領域，發掘潛能與興趣
          </p>
          
          {/* Pricing Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-teal-50 border border-teal-200 rounded-lg px-6 py-3">
              <i className="ri-price-tag-3-line text-teal-600 mr-2"></i>
              <span className="font-semibold text-teal-900">單堂：HK$380 - 580</span>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-6 py-3">
              <i className="ri-ticket-line text-blue-600 mr-2"></i>
              <span className="font-semibold text-blue-900">5堂套票：85折優惠</span>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg px-6 py-3">
              <i className="ri-gift-line text-purple-600 mr-2"></i>
              <span className="font-semibold text-purple-900">送核心課程體驗券</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <i className={`${cat.icon} text-lg`}></i>
              <span>{cat.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === cat.id ? 'bg-teal-500' : 'bg-gray-200'
              }`}>
                {cat.id === 'all' ? workshops.length : workshops.filter(w => w.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((workshop) => (
            <Card key={workshop.id} hover className="group">
              <div className="space-y-4">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 ${workshop.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <i className={`${workshop.icon} text-white text-xl`}></i>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {workshop.description}
                  </p>
                </div>

                {/* Button */}
                <Button 
                  fullWidth 
                  onClick={handleEnrollClick}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <i className="ri-calendar-check-line mr-2"></i>
                  立即報名
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            工作坊專屬福利
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-list-3-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">潛能觀察報告</h4>
              <p className="text-sm text-gray-600">
                工作坊結束後，向家長提供孩子的潛能觀察報告，了解孩子的興趣與天賦
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-coupon-line text-3xl text-blue-600"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">核心課程體驗券</h4>
              <p className="text-sm text-gray-600">
                參與工作坊的學員可獲得「星啟系列課程」體驗券，深入探索感興趣的領域
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-event-line text-3xl text-purple-600"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">主題月優惠</h4>
              <p className="text-sm text-gray-600">
                每月設定主題（科技月、創業月等），集中推廣相關工作坊並提供組合優惠
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={handleEnrollClick}
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg"
          >
            <i className="ri-calendar-line mr-2"></i>
            查看完整時間表並報名
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            名額有限，先到先得！立即預約您孩子的探索之旅
          </p>
        </div>
      </div>
    </section>
  );
}