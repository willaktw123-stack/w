import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

export default function StarryCreatorProgram() {
  const [activeLevel, setActiveLevel] = useState('all');
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  const levels = [
    { id: 'all', name: '全部課程', icon: 'ri-apps-line' },
    { id: 'beginner', name: '啟航課程', icon: 'ri-rocket-line' },
    { id: 'intermediate', name: '加速課程', icon: 'ri-speed-line' },
    { id: 'advanced', name: '巔峰課程', icon: 'ri-trophy-line' },
    { id: 'kidz', name: 'Starry系列', icon: 'ri-star-smile-line' }
  ];

  const corePrograms = [
    {
      id: 'beginner',
      level: 'beginner',
      title: '星創者啟航課程',
      subtitle: '小小創業家：從點子到原型',
      age: '8-11歲',
      duration: '12週',
      price: 'HK$2,800',
      sessions: '24堂課',
      color: 'bg-blue-500',
      icon: 'ri-rocket-line',
      image: 'https://readdy.ai/api/search-image?query=Young%20children%20aged%208-11%20learning%20entrepreneurship%20and%20design%20thinking%20in%20modern%20classroom%2C%20creating%20product%20prototypes%20with%203D%20printers%20and%20Scratch%20programming%20on%20computers%2C%20colorful%20business%20plan%20posters%20and%20creative%20inventions%2C%20bright%20educational%20environment%20with%20innovation%20tools&width=800&height=400&seq=starry-beginner&orientation=landscape',
      goal: '建立最基礎的創業、科技與金融概念，激發興趣',
      modules: [
        {
          title: '創業思維',
          icon: 'ri-lightbulb-line',
          color: 'bg-amber-500',
          content: '什麼是需求與解決方案？透過遊戲學習「設計思維」，為同學或家人設計一個解決小麻煩的產品。'
        },
        {
          title: 'STEM科技應用',
          icon: 'ri-code-line',
          color: 'bg-teal-500',
          content: '使用圖形化程式設計（如Scratch）為你的產品創意製作一個互動介紹；學習3D列印基礎，列印出產品的實體模型。'
        },
        {
          title: '金融科技知識',
          icon: 'ri-coin-line',
          color: 'bg-green-500',
          content: '學習「貨幣的演變」，從貝殼到數位貨幣。透過桌遊理解基礎記帳、收入與支出。'
        }
      ],
      finalProject: '設計一個產品原型，並為其製作一份包含產品圖、簡介和簡單定價的「海報式商業計劃書」。',
      features: [
        '設計思維工作坊',
        'Scratch圖形化編程',
        '3D列印實作體驗',
        '金融桌遊互動學習',
        '產品原型製作',
        '商業計劃書指導'
      ]
    },
    {
      id: 'intermediate',
      level: 'intermediate',
      title: '星創者加速課程',
      subtitle: '未來CEO實驗室',
      age: '12-15歲',
      duration: '16週',
      price: 'HK$4,200',
      sessions: '32堂課',
      color: 'bg-purple-500',
      icon: 'ri-speed-line',
      image: 'https://readdy.ai/api/search-image?query=Teenagers%20aged%2012-15%20working%20on%20business%20model%20canvas%20and%20Python%20programming%2C%20building%20smart%20hardware%20prototypes%20with%20Arduino%20and%20Micro:bit%2C%20analyzing%20market%20data%20and%20creating%20financial%20statements%2C%20modern%20innovation%20lab%20with%20advanced%20technology%20equipment&width=800&height=400&seq=starry-intermediate&orientation=landscape',
      goal: '深入學習與應用三大領域的知識，完成一個完整的專案',
      modules: [
        {
          title: '創業思維',
          icon: 'ri-bar-chart-line',
          color: 'bg-amber-500',
          content: '學習「商業模式圖」，分析真實公司的商業模式。進行市場調研，定義目標用戶。'
        },
        {
          title: 'STEM科技應用',
          icon: 'ri-cpu-line',
          color: 'bg-teal-500',
          content: '學習Python程式設計基礎，用於資料分析和自動化；使用Micro:bit或Arduino製作一個具備簡單功能的智慧硬體原型（如智慧存錢筒）。'
        },
        {
          title: '金融科技知識',
          icon: 'ri-line-chart-line',
          color: 'bg-green-500',
          content: '什麼是現金流？學習編製簡易的損益表。深入探討「行動支付」與「區塊鏈」的原理，並建立一個簡單的「區塊鏈雜湊值」來理解其不可篡改性。'
        }
      ],
      finalProject: '以小組為單位，提出一個基於科技的創業點子，打造一個可演示的智慧硬體或軟體原型，並完成一份完整的商業計劃書和財務預算。',
      features: [
        '商業模式圖分析',
        'Python程式設計',
        'Arduino智慧硬體開發',
        '區塊鏈原理實作',
        '財務報表編製',
        '團隊專案管理'
      ]
    },
    {
      id: 'advanced',
      level: 'advanced',
      title: '星創者巔峰課程',
      subtitle: 'Starry 創業領航計劃',
      age: '15-18歲',
      duration: '20週',
      price: 'HK$5,800',
      sessions: '40堂課',
      color: 'bg-red-500',
      icon: 'ri-trophy-line',
      image: 'https://readdy.ai/api/search-image?query=High%20school%20students%20aged%2015-18%20developing%20MVP%20products%20with%20AI%20integration%20and%20web%20development%2C%20presenting%20startup%20pitches%20to%20investors%2C%20advanced%20programming%20and%20fintech%20analysis%2C%20professional%20startup%20incubator%20environment%20with%20modern%20technology&width=800&height=400&seq=starry-advanced&orientation=landscape',
      goal: '模擬真實創業環境，打造一個具備融資潛力的MVP（最簡可行產品）',
      modules: [
        {
          title: '創業思維',
          icon: 'ri-presentation-line',
          color: 'bg-amber-500',
          content: '精實創業方法論、用戶成長策略、股權結構設計、融資路演技巧。'
        },
        {
          title: 'STEM科技應用',
          icon: 'ri-brain-line',
          color: 'bg-teal-500',
          content: '應用AI APIs（如ChatGPT、影像識別）為自己的專案添加智慧功能；使用更高階的程式語言和框架進行Web或APP開發。'
        },
        {
          title: '金融科技知識',
          icon: 'ri-stock-line',
          color: 'bg-green-500',
          content: '學習新創公司估值方法、讀懂財務報表。深入研究加密貨幣、DeFi（去中心化金融）等前沿領域，並探討其商業應用與風險。'
        }
      ],
      finalProject: '在導師指導下，組建團隊，完成一個高擬真的MVP，並在成果發表日上向真實的投資人、企業家進行路演。',
      features: [
        '精實創業方法論',
        'AI API整合開發',
        'Web/APP高階開發',
        'DeFi與加密貨幣研究',
        '投資人路演訓練',
        '真實導師指導'
      ]
    },
    {
      id: 'kidz-entrepreneurship',
      level: 'kidz',
      title: 'Starry Entrepreneurship 兒童創業課程',
      subtitle: '從零到一，將創意變成生意',
      age: '7-12歲',
      duration: '10週',
      price: 'HK$2,400',
      sessions: '20堂課',
      color: 'bg-amber-500',
      icon: 'ri-lightbulb-line',
      image: 'https://readdy.ai/api/search-image?query=Young%20children%20running%20a%20colorful%20lemonade%20stand%20business%2C%20learning%20about%20entrepreneurship%20with%20price%20tags%20and%20money%2C%20creative%20product%20displays%2C%20engaging%20business%20education%20environment%20with%20kids%20as%20young%20entrepreneurs%20selling%20handmade%20eco-friendly%20products&width=800&height=400&seq=kidz-entrepreneurship&orientation=landscape',
      goal: '培養商業思維、創造力、解決問題的能力與堅韌品格',
      modules: [
        {
          title: '創意與需求',
          icon: 'ri-lightbulb-line',
          color: 'bg-amber-500',
          content: '學習如何發現生活中的問題，並提出創意解決方案。透過腦力激盪和設計思維，培養創新思維。'
        },
        {
          title: '產品開發',
          icon: 'ri-shopping-bag-line',
          color: 'bg-orange-500',
          content: '動手製作自己的產品原型，學習產品設計、包裝和品牌命名。'
        },
        {
          title: '市場營銷',
          icon: 'ri-megaphone-line',
          color: 'bg-pink-500',
          content: '學習如何推廣產品，設計海報、撰寫廣告文案，並進行實際銷售演練。'
        }
      ],
      finalProject: '創建一個真實的小型生意（如手工藝品、環保產品），並在校內或社區市集進行銷售。',
      features: [
        '設計思維工作坊',
        '產品原型製作',
        '品牌設計與包裝',
        '市場營銷策略',
        '財務規劃基礎',
        '實際銷售體驗'
      ]
    },
    {
      id: 'kidz-stem',
      level: 'kidz',
      title: 'Starry STEM 兒童STEM課程',
      subtitle: '動手探索，成為改變世界的小科學家',
      age: '7-12歲',
      duration: '10週',
      price: 'HK$2,600',
      sessions: '20堂課',
      color: 'bg-cyan-500',
      icon: 'ri-rocket-line',
      image: 'https://readdy.ai/api/search-image?query=Children%20building%20Mars%20base%20models%20with%203D%20design%20software%20and%20LEGO%20robotics%2C%20engineering%20projects%20including%20robotic%20arms%20and%20water%20filtration%20systems%2C%20hands-on%20STEM%20learning%20environment%20with%20futuristic%20space-themed%20educational%20activities&width=800&height=400&seq=kidz-stem&orientation=landscape',
      goal: '培養邏輯思維、工程素養與科學探究能力',
      modules: [
        {
          title: '3D建模與設計',
          icon: 'ri-box-3-line',
          color: 'bg-teal-500',
          content: '使用Tinkercad等工具學習3D建模，設計並列印自己的創意作品。'
        },
        {
          title: '機械工程',
          icon: 'ri-settings-3-line',
          color: 'bg-blue-500',
          content: '透過LEGO或其他工具，學習齒輪、槓桿、滑輪等機械原理，製作可動的機械裝置。'
        },
        {
          title: '科學實驗',
          icon: 'ri-flask-line',
          color: 'bg-purple-500',
          content: '進行有趣的科學實驗，探索物理、化學和生物的奧秘。'
        }
      ],
      finalProject: '設計並製作一個解決實際問題的STEM專案（如智慧垃圾分類器、自動澆水系統）。',
      features: [
        '3D建模與列印',
        'LEGO機械工程',
        '科學實驗探索',
        '邏輯思維訓練',
        '團隊協作項目',
        '創意問題解決'
      ]
    },
    {
      id: 'kidz-fintech',
      level: 'kidz',
      title: 'Starry Fintech 兒童金融科技課程',
      subtitle: '玩轉數字時代的新金融',
      age: '8-13歲',
      duration: '8週',
      price: 'HK$2,200',
      sessions: '16堂課',
      color: 'bg-emerald-500',
      icon: 'ri-coin-line',
      image: 'https://readdy.ai/api/search-image?query=Children%20learning%20about%20digital%20finance%20and%20blockchain%20technology%20through%20interactive%20games%2C%20designing%20budget%20management%20apps%20on%20tablets%2C%20creating%20smart%20piggy%20banks%20with%20Micro:bit%2C%20modern%20fintech%20education%20with%20cryptocurrency%20concepts%20for%20kids&width=800&height=400&seq=kidz-fintech&orientation=landscape',
      goal: '建立財商基礎，理解數字貨幣、支付科技及其背後的原理',
      modules: [
        {
          title: '金錢與財商',
          icon: 'ri-money-dollar-circle-line',
          color: 'bg-green-500',
          content: '學習金錢的價值、儲蓄的重要性，以及如何制定簡單的預算計劃。'
        },
        {
          title: '數字支付',
          icon: 'ri-smartphone-line',
          color: 'bg-blue-500',
          content: '了解行動支付、電子錢包的運作原理，並學習安全使用數字支付工具。'
        },
        {
          title: '區塊鏈入門',
          icon: 'ri-links-line',
          color: 'bg-purple-500',
          content: '透過遊戲和動畫，理解區塊鏈和加密貨幣的基本概念。'
        }
      ],
      finalProject: '設計一個簡單的預算管理APP原型，或製作一個智慧存錢筒。',
      features: [
        '財商教育基礎',
        '數字支付認知',
        '區塊鏈概念入門',
        'APP設計體驗',
        '智慧硬體製作',
        '金融遊戲互動'
      ]
    },
    {
      id: 'kidz-english',
      level: 'kidz',
      title: 'Starry English 兒童英文課程',
      subtitle: '用英語，探索更廣闊的世界',
      age: '7-12歲',
      duration: '12週',
      price: 'HK$2,800',
      sessions: '24堂課',
      color: 'bg-rose-500',
      icon: 'ri-global-line',
      image: 'https://readdy.ai/api/search-image?query=Children%20giving%20TEDx-style%20presentations%20in%20English%2C%20filming%20creative%20advertising%20videos%2C%20conducting%20mock%20interviews%20with%20diverse%20cultural%20backgrounds%2C%20dynamic%20English%20communication%20classroom%20with%20public%20speaking%20and%20cross-cultural%20learning%20activities&width=800&height=400&seq=kidz-english&orientation=landscape',
      goal: '超越應試，聚焦於溝通、表達與跨文化理解能力',
      modules: [
        {
          title: '公眾演講',
          icon: 'ri-presentation-line',
          color: 'bg-red-500',
          content: '學習如何用英語進行自信的演講和展示，培養表達能力和自信心。'
        },
        {
          title: '創意表達',
          icon: 'ri-movie-line',
          color: 'bg-pink-500',
          content: '透過製作短片、廣告、故事創作等方式，提升英語創意表達能力。'
        },
        {
          title: '跨文化交流',
          icon: 'ri-earth-line',
          color: 'bg-blue-500',
          content: '了解不同文化背景，學習如何與來自世界各地的人進行有效溝通。'
        }
      ],
      finalProject: '製作一個英語短片或進行一場TEDx風格的演講。',
      features: [
        '公眾演講訓練',
        '創意影片製作',
        '跨文化理解',
        '實用溝通技巧',
        '自信表達培養',
        '國際視野拓展'
      ]
    }
  ];

  const starryLabs = [
    {
      id: 'ai-marketing',
      title: 'AI行銷官：用ChatGPT打造爆款文案',
      description: '學習如何向AI下指令，為特定產品生成社群媒體文案、廣告口號和電子郵件行銷內容。',
      fusion: '融合創業行銷與AI科技',
      duration: '3小時',
      price: 'HK$480',
      age: '12-18歲',
      icon: 'ri-chat-ai-line',
      color: 'bg-blue-500',
      image: 'https://readdy.ai/api/search-image?query=Teenagers%20learning%20AI%20marketing%20with%20ChatGPT%20creating%20viral%20social%20media%20content%20and%20advertising%20copy%20on%20computers%2C%20colorful%20marketing%20campaigns%20and%20creative%20copywriting%2C%20modern%20digital%20marketing%20workshop%20with%20AI%20tools&width=400&height=300&seq=lab-ai-marketing&orientation=landscape'
    },
    {
      id: 'smart-piggy-bank',
      title: '智慧存錢筒工程師',
      description: '用Micro:bit和感測器製作一個能自動記錄金額、設定儲蓄目標的智慧存錢筒，並學習行動支付的原理。',
      fusion: '融合金融科技與硬體程式設計',
      duration: '3小時',
      price: 'HK$520',
      age: '10-16歲',
      icon: 'ri-save-line',
      color: 'bg-green-500',
      image: 'https://readdy.ai/api/search-image?query=Children%20building%20smart%20piggy%20bank%20with%20Micro:bit%20microcontroller%20and%20sensors%2C%20electronic%20components%20and%20LED%20displays%20showing%20savings%20goals%2C%20fintech%20hardware%20workshop%20with%20young%20engineers%20learning%20mobile%20payment%20principles&width=400&height=300&seq=lab-piggy-bank&orientation=landscape'
    },
    {
      id: 'nft-artist',
      title: 'NFT藝術家與策展人',
      description: '學習NFT的概念，親手創作自己的數位藝術品並鑄造在測試鏈上，同時學習如何為一系列NFT制定發行與行銷策略。',
      fusion: '融合藝術、區塊鏈金融與創業',
      duration: '3.5小時',
      price: 'HK$580',
      age: '13-18歲',
      icon: 'ri-nft-line',
      color: 'bg-purple-500',
      image: 'https://readdy.ai/api/search-image?query=Teenagers%20creating%20digital%20NFT%20artwork%20and%20learning%20blockchain%20minting%20on%20computers%2C%20colorful%20crypto%20art%20and%20NFT%20collections%2C%20modern%20blockchain%20workshop%20with%20young%20artists%20developing%20marketing%20strategies&width=400&height=300&seq=lab-nft&orientation=landscape'
    },
    {
      id: 'business-model-game',
      title: '商業模式桌遊挑戰賽',
      description: '在一款定制桌遊中，小組透過抽取「科技卡」（如AI演算法、大數據）和「市場卡」，快速建構商業模式並進行PK，理解科技與商業的結合。',
      fusion: '融合創業思維與科技應用',
      duration: '2.5小時',
      price: 'HK$420',
      age: '11-17歲',
      icon: 'ri-gamepad-line',
      color: 'bg-orange-500',
      image: 'https://readdy.ai/api/search-image?query=Students%20playing%20custom%20business%20model%20board%20game%20with%20technology%20cards%20and%20market%20cards%2C%20colorful%20game%20pieces%20and%20strategic%20business%20planning%2C%20interactive%20entrepreneurship%20workshop%20with%20team%20competition&width=400&height=300&seq=lab-business-game&orientation=landscape'
    },
    {
      id: 'data-analyst',
      title: '資料分析師初體驗：洞察市場秘密',
      description: '使用簡單的資料分析工具，分析真實的消費資料集，發現商業洞察，並以此為基礎提出產品改進建議。',
      fusion: '融合STEM資料分析與商業決策',
      duration: '3小時',
      price: 'HK$480',
      age: '12-18歲',
      icon: 'ri-bar-chart-box-line',
      color: 'bg-cyan-500',
      image: 'https://readdy.ai/api/search-image?query=Teenagers%20analyzing%20real%20consumer%20data%20using%20data%20analysis%20tools%20on%20computers%2C%20colorful%20charts%20and%20business%20insights%20visualizations%2C%20modern%20data%20science%20workshop%20with%20young%20analysts%20making%20business%20recommendations&width=400&height=300&seq=lab-data-analysis&orientation=landscape'
    }
  ];

  const filteredPrograms = activeLevel === 'all' 
    ? corePrograms 
    : corePrograms.filter(p => p.level === activeLevel);

  const scrollToEnrollment = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry 星創者計劃",
    "description": "融合創業、STEM科技與金融科技的創新教育課程，培養未來創業家",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Starry Learning Centre",
      "url": siteUrl
    },
    "hasCourseInstance": corePrograms.map(program => ({
      "@type": "CourseInstance",
      "name": program.title,
      "description": program.goal,
      "courseMode": "onsite",
      "duration": program.duration,
      "offers": {
        "@type": "Offer",
        "price": program.price.replace('HK$', '').replace(',', ''),
        "priceCurrency": "HKD"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
      <SEO
        title="Starry 星創者計劃 - 創業×科技×金融 創新教育課程"
        description="融合創業思維、STEM科技與金融科技的三合一創新教育課程。從8歲到18歲的完整學習路徑，包含Starry系列課程，培養未來創業家與科技領袖。"
        keywords="創業教育, STEM教育, 金融科技, 青少年創業, 程式設計, 商業思維, 香港教育, 創新課程, Starry課程"
        canonical={`${siteUrl}/starry-creator`}
        schema={schema}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20futuristic%20technology%20workspace%20without%20people%2C%20sleek%20empty%20desks%20with%20glowing%20computer%20screens%20displaying%20code%20and%20financial%20data%2C%20holographic%20interfaces%20showing%20blockchain%20networks%20and%20cryptocurrency%20visualizations%2C%20AI%20neural%20network%20diagrams%20floating%20in%20space%2C%20robotic%20arms%20and%203D%20printers%20on%20clean%20white%20tables%2C%20minimalist%20office%20interior%20with%20glass%20walls%20and%20blue%20LED%20lighting%2C%20natural%20sunlight%20through%20large%20windows%2C%20high-tech%20equipment%20and%20smart%20devices%20arranged%20neatly%2C%20digital%20displays%20showing%20STEM%20projects%20and%20entrepreneurship%20concepts%2C%20clean%20professional%20atmosphere%20with%20blue%20and%20teal%20accent%20colors%2C%20inspiring%20innovation%20environment%20focused%20on%20technology%20and%20finance%20education%2C%20no%20humans%20visible&width=1920&height=1080&seq=starry-creator-hero-tech-only-v3&orientation=landscape')`
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <i className="ri-star-line text-yellow-300 text-xl"></i>
                <span className="text-white font-semibold">核心課程體系 + Starry系列</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-blue-300">Starry 星創者計劃</span>
              </h1>
              
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                融合<strong className="text-amber-300">創業思維</strong>、<strong className="text-teal-300">STEM科技</strong>與<strong className="text-green-300">金融科技</strong>的創新教育課程
              </p>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                讓學生像真正的創業家一樣，運用科技工具解決真實世界的問題，並理解其背後的商業與金融邏輯
              </p>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-lightbulb-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">創業思維</h3>
                  <p className="text-blue-100 text-sm">設計思維、商業模式、市場分析、融資路演</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-code-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">STEM科技</h3>
                  <p className="text-blue-100 text-sm">程式設計、AI應用、智慧硬體、Web開發</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-coin-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">金融科技</h3>
                  <p className="text-blue-100 text-sm">財務管理、區塊鏈、加密貨幣、DeFi應用</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
                <Button 
                  size="lg" 
                  onClick={scrollToEnrollment}
                  className="bg-pink-500 text-white hover:bg-pink-600 shadow-xl"
                >
                  <i className="ri-user-add-line mr-2"></i>
                  立即報名
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600"
                  onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                >
                  <i className="ri-customer-service-line mr-2"></i>
                  諮詢課程
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Programs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">完整課程體系</h2>
              <p className="text-xl text-gray-600">從啟航到巔峰，包含Starry系列，完整的創業家培養路徑</p>
            </div>

            {/* Level Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveLevel(level.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                    activeLevel === level.id
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <i className={`${level.icon} text-lg`}></i>
                  <span>{level.name}</span>
                </button>
              ))}
            </div>

            {/* Programs Grid */}
            <div className="space-y-16">
              {filteredPrograms.map((program, index) => (
                <div key={program.id} className={`${index % 2 === 0 ? '' : 'bg-gray-50'} rounded-3xl p-8 lg:p-12`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className={`absolute -top-6 -left-6 w-24 h-24 ${program.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                          <i className={`${program.icon} text-white text-4xl`}></i>
                        </div>
                        {program.level === 'kidz' && (
                          <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            ⭐ Starry系列
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div>
                        <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          {program.age} · {program.duration}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{program.title}</h3>
                        <p className="text-xl text-purple-600 font-semibold mb-4">{program.subtitle}</p>
                        <p className="text-lg text-gray-700 mb-6">{program.goal}</p>
                      </div>

                      {/* Modules */}
                      <div className="space-y-4">
                        {program.modules.map((module, idx) => (
                          <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className="flex items-start space-x-3">
                              <div className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <i className={`${module.icon} text-white`}></i>
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 mb-1">{module.title}</h4>
                                <p className="text-sm text-gray-600">{module.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Final Project */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                          <i className="ri-trophy-line text-purple-600 mr-2"></i>
                          最終專案
                        </h4>
                        <p className="text-gray-700">{program.finalProject}</p>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <p className="text-3xl font-bold text-gray-900">{program.price}</p>
                          <p className="text-sm text-gray-600">{program.sessions}</p>
                        </div>
                        <Button 
                          size="lg" 
                          onClick={scrollToEnrollment}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <i className="ri-user-add-line mr-2"></i>
                          立即報名
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <i className="ri-check-line text-teal-600"></i>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Starry Labs Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-100 px-6 py-3 rounded-full mb-6">
                <i className="ri-flask-line text-purple-600 text-xl"></i>
                <span className="text-purple-900 font-semibold">單次主題工作坊</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Starry Labs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                快速體驗三大領域的交叉魅力，作為核心課程的引流和補充
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {starryLabs.map((lab) => (
                <Card key={lab.id} hover className="group">
                  <div className="space-y-4">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={lab.image}
                        alt={lab.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute top-4 left-4 w-12 h-12 ${lab.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <i className={`${lab.icon} text-white text-xl`}></i>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {lab.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {lab.description}
                      </p>
                      <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {lab.fusion}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <i className="ri-time-line text-blue-600"></i>
                        <span>{lab.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i className="ri-user-line text-purple-600"></i>
                        <span>{lab.age}</span>
                      </div>
                      <div className="font-bold text-gray-900">{lab.price}</div>
                    </div>

                    {/* Button */}
                    <Button 
                      fullWidth 
                      onClick={scrollToEnrollment}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <i className="ri-calendar-check-line mr-2"></i>
                      立即預約
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">為什麼選擇星創者計劃？</h2>
              <p className="text-xl text-gray-900">三合一創新教育，培養未來領袖</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'ri-lightbulb-flash-line',
                  title: '真實專案導向',
                  description: '不只學理論，更要動手做。每個課程都以真實專案為核心，培養實戰能力。'
                },
                {
                  icon: 'ri-team-line',
                  title: '業界導師指導',
                  description: '邀請真實創業家、工程師和投資人擔任導師，分享第一手經驗。'
                },
                {
                  icon: 'ri-trophy-line',
                  title: '競賽與路演機會',
                  description: '定期舉辦成果發表會，讓學生向真實投資人展示作品，獲得寶貴反饋。'
                },
                {
                  icon: 'ri-road-map-line',
                  title: '完整學習路徑',
                  description: '從8歲到18歲，三階段進階課程，系統化培養創業思維與技術能力。'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-800">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="enrollment" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              準備好開啟創業家之旅了嗎？
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              加入星創者計劃，讓孩子在創業、科技與金融的交叉領域中，發現無限可能
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                onClick={scrollToEnrollment}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名課程
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
              >
                <i className="ri-customer-service-line mr-2"></i>
                預約免費諮詢
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              <i className="ri-gift-line mr-1"></i>
              現在報名享早鳥優惠，並獲贈Starry Labs工作坊體驗券
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
