import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { SEO } from '../../utils/seo';

interface ProgramDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  overview: string;
  ageGroups: {
    title: string;
    age: string;
    description: string;
    curriculum: string[];
    duration: string;
    price: string;
  }[];
  features: string[];
  outcomes: string[];
  equipment: string[];
  schedule: {
    day: string;
    time: string;
    level: string;
    spots: number;
  }[];
}

const programsData: { [key: string]: ProgramDetail } = {
  'robotics-ai': {
    id: 'robotics-ai',
    title: '機器人與人工智能',
    description: '使用LEGO Mindstorms、Arduino和先進的AI概念建造和編程機器人。',
    icon: 'ri-robot-line',
    color: 'bg-blue-500',
    image: 'https://readdy.ai/api/search-image?query=Advanced%20robotics%20and%20AI%20laboratory%20with%20students%20building%20and%20programming%20sophisticated%20robots%20using%20LEGO%20Mindstorms%20EV3%20and%20Arduino%20microcontrollers%2C%20modern%20STEAM%20classroom%20with%20robotic%20competition%20mats%2C%20sensors%2C%20and%20programming%20workstations%2C%20bright%20educational%20environment%20with%20high-tech%20equipment&width=800&height=400&seq=robotics-detail&orientation=landscape',
    overview: '我們的機器人與人工智能課程透過實作建造和編程體驗，向學生介紹機器人和人工智能的迷人世界。學生學習設計、建造和編程機器人，同時探索基本的AI概念。',
    ageGroups: [
      {
        title: '機器人建造者',
        age: '6-8歲',
        description: '使用LEGO WeDo和簡單編程概念介紹機器人技術。',
        curriculum: ['基本機器人構造', '簡單編程積木', '感應器介紹', '移動模式'],
        duration: '8週',
        price: 'HK$1,200'
      },
      {
        title: '機器人程式設計師',
        age: '9-12歲',
        description: '使用LEGO Mindstorms EV3的進階機器人技術和競賽準備。',
        curriculum: ['複雜機器人設計', 'EV3編程', '感應器整合', '競賽挑戰'],
        duration: '12週',
        price: 'HK$1,800'
      },
      {
        title: 'AI創新者',
        age: '13-18歲',
        description: 'Arduino編程、機器學習基礎和AI應用。',
        curriculum: ['Arduino編程', '機器學習概念', '電腦視覺', 'AI專案開發'],
        duration: '16週',
        price: 'HK$2,400'
      }
    ],
    features: [
      'LEGO Mindstorms EV3套件',
      'Arduino微控制器',
      '各種感應器和致動器',
      '競賽準備',
      '帶回家的專案',
      '小班教學（最多8名學生）'
    ],
    outcomes: [
      '邏輯思維和解決問題的能力',
      '編程基礎',
      '理解AI概念',
      '團隊合作和協作',
      '創意設計思維',
      '技術故障排除能力'
    ],
    equipment: [
      'LEGO Mindstorms EV3教育套裝',
      'Arduino Uno R3開發板',
      '超音波、顏色和觸控感應器',
      '伺服馬達和LED陣列',
      '競賽墊和挑戰道具',
      '編程平板電腦和筆記型電腦'
    ],
    schedule: [
      { day: '星期六', time: '上午9:00 - 上午11:00', level: '初級（6-8歲）', spots: 5 },
      { day: '星期六', time: '上午11:30 - 下午1:30', level: '中級（9-12歲）', spots: 3 },
      { day: '星期日', time: '下午2:00 - 下午4:00', level: '進階（13-18歲）', spots: 2 },
      { day: '星期三', time: '下午4:00 - 下午6:00', level: '中級（9-12歲）', spots: 6 }
    ]
  },
  'programming-coding': {
    id: 'programming-coding',
    title: '程式設計與編碼',
    description: '透過有趣的專案和互動挑戰學習流行的編程語言。',
    icon: 'ri-code-line',
    color: 'bg-teal-500',
    image: 'https://readdy.ai/api/search-image?query=Modern%20programming%20classroom%20with%20students%20aged%208-16%20learning%20to%20code%20on%20computers%2C%20colorful%20programming%20interfaces%20including%20Scratch%20and%20Python%20on%20multiple%20screens%2C%20engaging%20coding%20projects%20and%20games%2C%20bright%20contemporary%20computer%20lab%20with%20ergonomic%20workstations&width=800&height=400&seq=programming-detail&orientation=landscape',
    overview: '我們的程式設計與編碼課程透過引人入勝的專案和遊戲教授學生基本的編程技能。從Scratch的視覺化編程到進階的Python開發，學生在學習運算思維的同時建立真實的應用程式。',
    ageGroups: [
      {
        title: '程式碼探索者',
        age: '6-8歲',
        description: '使用Scratch的視覺化編程和基本電腦技能。',
        curriculum: ['Scratch編程基礎', '動畫和遊戲', '用程式碼說故事', '基本除錯'],
        duration: '10週',
        price: 'HK$1,000'
      },
      {
        title: '應用程式創作者',
        age: '9-12歲',
        description: 'Python編程和行動應用程式開發基礎。',
        curriculum: ['Python基礎', '遊戲開發', '網頁基礎（HTML/CSS）', '應用程式設計原則'],
        duration: '14週',
        price: 'HK$1,600'
      },
      {
        title: '軟體開發者',
        age: '13-18歲',
        description: '使用多種語言和框架的進階編程。',
        curriculum: ['進階Python', 'JavaScript和網頁開發', '資料庫基礎', '軟體專案管理'],
        duration: '18週',
        price: 'HK$2,200'
      }
    ],
    features: [
      '個人編程工作站',
      '多種編程語言',
      '真實世界專案開發',
      '程式碼作品集創建',
      '業界標準工具',
      '同儕編程課程'
    ],
    outcomes: [
      '運算思維技能',
      '多種編程語言',
      '問題分解能力',
      '理解軟體開發生命週期',
      '除錯和測試技能',
      '創意數位表達'
    ],
    equipment: [
      '高效能編程筆記型電腦',
      '多種IDE軟體授權',
      'Raspberry Pi開發套件',
      '設計用繪圖板',
      '外接螢幕和鍵盤',
      '版本控制系統存取'
    ],
    schedule: [
      { day: '星期二', time: '下午4:00 - 下午5:30', level: '初級（6-8歲）', spots: 4 },
      { day: '星期四', time: '下午4:00 - 下午6:00', level: '中級（9-12歲）', spots: 7 },
      { day: '星期六', time: '下午2:00 - 下午4:30', level: '進階（13-18歲）', spots: 3 },
      { day: '星期日', time: '上午10:00 - 中午12:00', level: '初級（6-8歲）', spots: 8 }
    ]
  },
  'science-labs': {
    id: 'science-labs',
    title: '科學實驗室',
    description: '涵蓋物理、化學、生物和環境科學的實作實驗。',
    icon: 'ri-flask-line',
    color: 'bg-purple-500',
    image: 'https://readdy.ai/api/search-image?query=Well-equipped%20science%20laboratory%20with%20children%20aged%206-14%20conducting%20colorful%20chemistry%20experiments%20and%20physics%20demonstrations%2C%20safety%20equipment%20and%20modern%20lab%20instruments%2C%20exciting%20chemical%20reactions%20and%20scientific%20discoveries%2C%20bright%20educational%20laboratory%20setting&width=800&height=400&seq=science-detail&orientation=landscape',
    overview: '我們的科學實驗室課程透過令人興奮的實作實驗和調查，讓科學變得生動有趣。學生探索物理、化學、生物和環境科學，同時培養科學思維和探究技能。',
    ageGroups: [
      {
        title: '小小科學家',
        age: '6-8歲',
        description: '介紹基本科學概念的安全有趣實驗。',
        curriculum: ['簡單化學反應', '運動物理學', '植物和動物研究', '天氣和季節'],
        duration: '8週',
        price: 'HK$900'
      },
      {
        title: '實驗室調查員',
        age: '9-12歲',
        description: '使用適當實驗室技術的更複雜實驗。',
        curriculum: ['化學反應和方程式', '電和磁', '人體系統', '環境監測'],
        duration: '12週',
        price: 'HK$1,400'
      },
      {
        title: '研究科學家',
        age: '13-18歲',
        description: '進階實驗和獨立研究專案。',
        curriculum: ['有機化學基礎', '進階物理概念', '微生物學研究', '科學研究方法'],
        duration: '16週',
        price: 'HK$2,000'
      }
    ],
    features: [
      '設備齊全的科學實驗室',
      '安全設備和規程',
      '真實的科學儀器',
      '實驗記錄',
      '科學展覽準備',
      '實地考察機會'
    ],
    outcomes: [
      '理解科學方法',
      '實驗室安全意識',
      '資料收集和分析技能',
      '批判性思維發展',
      '環境意識',
      '研究和簡報能力'
    ],
    equipment: [
      '數位顯微鏡和載玻片',
      '化學套裝和玻璃器皿',
      'pH計和溫度計',
      '電路元件',
      '生物標本和模型',
      '安全護目鏡和實驗袍'
    ],
    schedule: [
      { day: '星期一', time: '下午4:00 - 下午5:30', level: '初級（6-8歲）', spots: 6 },
      { day: '星期三', time: '下午4:00 - 下午6:00', level: '中級（9-12歲）', spots: 4 },
      { day: '星期五', time: '下午4:00 - 下午6:30', level: '進階（13-18歲）', spots: 5 },
      { day: '星期六', time: '上午9:00 - 上午11:00', level: '初級（6-8歲）', spots: 8 }
    ]
  },
  'engineering-design': {
    id: 'engineering-design',
    title: '工程設計',
    description: '透過工程挑戰運用設計思維過程解決現實世界的問題。',
    icon: 'ri-tools-line',
    color: 'bg-orange-500',
    image: 'https://readdy.ai/api/search-image?query=Engineering%20design%20workshop%20with%20students%20aged%208-16%20working%20on%203D%20design%20projects%20and%20building%20mechanical%20prototypes%2C%203D%20printers%20in%20action%2C%20CAD%20software%20on%20computers%2C%20bridge%20building%20challenges%2C%20modern%20maker%20space%20with%20engineering%20tools&width=800&height=400&seq=engineering-detail&orientation=landscape',
    overview: '我們的工程設計課程挑戰學生像工程師一樣思考，透過設計思維過程解決現實世界的問題。學生學習CAD設計、3D列印，並建造從橋樑到機械系統的各種作品。',
    ageGroups: [
      {
        title: '年輕工程師',
        age: '8-10歲',
        description: '透過建造挑戰學習基本工程概念。',
        curriculum: ['簡單機械原理', '橋樑建造基礎', 'CAD入門', '材料特性'],
        duration: '10週',
        price: 'HK$1,100'
      },
      {
        title: '設計思考者',
        age: '11-14歲',
        description: '使用3D列印和原型製作的進階設計專案。',
        curriculum: ['3D設計和列印', '機械系統', '原型開發', '工程文件'],
        duration: '14週',
        price: 'HK$1,700'
      },
      {
        title: '創新工程師',
        age: '15-18歲',
        description: '複雜的工程專案和競賽準備。',
        curriculum: ['進階CAD建模', '工程分析', '專案管理', '競賽工程'],
        duration: '18週',
        price: 'HK$2,300'
      }
    ],
    features: [
      '專業3D列印機',
      'CAD軟體培訓',
      '工程挑戰競賽',
      '現實世界問題解決',
      '原型開發',
      '業界導師訪問'
    ],
    outcomes: [
      '設計思維方法論',
      '3D建模和列印技能',
      '工程問題解決',
      '專案管理能力',
      '技術文件技能',
      '創新和創造力'
    ],
    equipment: [
      '專業3D列印機（FDM和SLA）',
      'CAD軟體授權（Fusion 360）',
      '工程建造材料',
      '精密測量工具',
      '電子原型套件',
      '工作坊手工具和安全設備'
    ],
    schedule: [
      { day: '星期二', time: '下午4:00 - 下午6:00', level: '初級（8-10歲）', spots: 5 },
      { day: '星期四', time: '下午4:00 - 下午6:30', level: '中級（11-14歲）', spots: 3 },
      { day: '星期六', time: '上午10:00 - 下午1:00', level: '進階（15-18歲）', spots: 4 },
      { day: '星期日', time: '下午2:00 - 下午4:30', level: '初級（8-10歲）', spots: 7 }
    ]
  },
  'digital-arts': {
    id: 'digital-arts',
    title: '數位藝術',
    description: '透過數位藝術、動畫和多媒體將創意與科技結合。',
    icon: 'ri-palette-line',
    color: 'bg-pink-500',
    image: 'https://readdy.ai/api/search-image?query=Creative%20digital%20arts%20studio%20with%20students%20aged%208-16%20creating%20colorful%20digital%20artwork%20on%20tablets%20and%20computers%2C%20animation%20software%20interfaces%2C%20graphic%20design%20projects%2C%20artistic%20learning%20environment%20with%20inspiring%20visual%20displays%20and%20modern%20technology&width=800&height=400&seq=digital-arts-detail&orientation=landscape',
    overview: '我們的數位藝術課程將創意與尖端科技結合。學生探索數位插畫、動畫、影片製作和平面設計，同時培養藝術技能和技術熟練度。',
    ageGroups: [
      {
        title: '數位創作者',
        age: '8-10歲',
        description: '數位藝術工具和基本動畫入門。',
        curriculum: ['數位繪畫基礎', '簡單動畫', '色彩理論', '基本照片編輯'],
        duration: '8週',
        price: 'HK$1,000'
      },
      {
        title: '媒體藝術家',
        age: '11-14歲',
        description: '進階數位藝術技術和多媒體專案。',
        curriculum: ['進階插畫', '2D動畫', '影片編輯', '平面設計原則'],
        duration: '12週',
        price: 'HK$1,500'
      },
      {
        title: '創意專業人士',
        age: '15-18歲',
        description: '專業級數位藝術和作品集開發。',
        curriculum: ['專業插畫', '動態圖形', '品牌設計', '作品集創建'],
        duration: '16週',
        price: 'HK$2,100'
      }
    ],
    features: [
      '專業繪圖板',
      '業界標準軟體',
      '動畫和影片工具',
      '作品集開發',
      '藝術展覽機會',
      '客座藝術家工作坊'
    ],
    outcomes: [
      '數位藝術創作技能',
      '動畫和動態圖形',
      '視覺傳達能力',
      '創意問題解決',
      '技術軟體熟練度',
      '藝術作品集開發'
    ],
    equipment: [
      'Wacom繪圖板和觸控筆',
      'Adobe Creative Suite授權',
      '高解析度螢幕',
      '數位相機和照明設備',
      '動畫軟體（Toon Boom）',
      '影片編輯工作站'
    ],
    schedule: [
      { day: '星期一', time: '下午4:00 - 下午6:00', level: '初級（8-10歲）', spots: 6 },
      { day: '星期三', time: '下午4:00 - 下午6:30', level: '中級（11-14歲）', spots: 4 },
      { day: '星期五', time: '下午4:00 - 下午7:00', level: '進階（15-18歲）', spots: 2 },
      { day: '星期日', time: '下午1:00 - 下午3:30', level: '初級（8-10歲）', spots: 8 }
    ]
  },
  'applied-mathematics': {
    id: 'applied-mathematics',
    title: '應用數學',
    description: '透過現實世界應用和解決問題讓數學變得有趣且實用。',
    icon: 'ri-calculator-line',
    color: 'bg-indigo-500',
    image: 'https://readdy.ai/api/search-image?query=Interactive%20mathematics%20classroom%20with%20students%20aged%208-16%20working%20on%20practical%20math%20problems%20using%20calculators%2C%20geometric%20models%2C%20and%20statistical%20charts%2C%20engaging%20problem-solving%20activities%2C%20modern%20educational%20environment%20with%20mathematical%20displays%20and%20tools&width=800&height=400&seq=math-detail&orientation=landscape',
    overview: '我們的應用數學課程透過將數學概念與現實世界應用連結，讓數學變得引人入勝且相關。學生在探索統計學、幾何學和財務知識的同時，培養強大的解決問題能力。',
    ageGroups: [
      {
        title: '數學探索者',
        age: '8-10歲',
        description: '有趣的數學遊戲和基本概念的實際應用。',
        curriculum: ['數字模式和序列', '基本幾何形狀', '簡單統計', '金錢和測量'],
        duration: '10週',
        price: 'HK$800'
      },
      {
        title: '問題解決者',
        age: '11-14歲',
        description: '進階問題解決和競賽準備。',
        curriculum: ['代數應用', '幾何證明', '資料分析', '數學奧林匹克問題'],
        duration: '14週',
        price: 'HK$1,200'
      },
      {
        title: '數學分析師',
        age: '15-18歲',
        description: '進階數學和現實世界建模。',
        curriculum: ['微積分應用', '統計建模', '財務數學', '研究專案'],
        duration: '16週',
        price: 'HK$1,600'
      }
    ],
    features: [
      '互動式數學軟體',
      '現實世界問題情境',
      '競賽準備',
      '財務知識重點',
      '統計分析工具',
      '數學奧林匹克培訓'
    ],
    outcomes: [
      '強大的解決問題能力',
      '數學推理能力',
      '統計分析能力',
      '理解財務知識',
      '競賽準備就緒',
      '現實世界應用技能'
    ],
    equipment: [
      '圖形計算機（TI-84 Plus）',
      '數學軟體授權',
      '幾何建模套件',
      '統計分析工具',
      '互動式白板',
      '數學競賽題庫'
    ],
    schedule: [
      { day: '星期二', time: '下午4:00 - 下午5:30', level: '初級（8-10歲）', spots: 8 },
      { day: '星期四', time: '下午4:00 - 下午6:00', level: '中級（11-14歲）', spots: 5 },
      { day: '星期六', time: '上午9:00 - 上午11:30', level: '進階（15-18歲）', spots: 3 },
      { day: '星期日', time: '上午10:00 - 中午12:00', level: '初級（8-10歲）', spots: 7 }
    ]
  }
};

export default function ProgramDetail() {
  const { programId } = useParams<{ programId: string }>();
  const navigate = useNavigate();
  const [program, setProgram] = useState<ProgramDetail | null>(null);
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    if (programId && programsData[programId]) {
      setProgram(programsData[programId]);
    } else {
      navigate('/');
    }
  }, [programId, navigate]);

  const scrollToEnrollment = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#enrollment');
    }
  };

  if (!program) {
    return <div>載入中...</div>;
  }

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": program.title,
    "description": program.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "星啟學習中心",
      "url": siteUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "香港九龍紅磡葵涌道The Vantage 1樓7號舖",
        "addressLocality": "紅磡",
        "addressRegion": "九龍",
        "addressCountry": "HK"
      }
    },
    "hasCourseInstance": program.ageGroups.map(group => ({
      "@type": "CourseInstance",
      "name": group.title,
      "description": group.description,
      "courseMode": "onsite",
      "duration": group.duration,
      "offers": {
        "@type": "Offer",
        "price": group.price.replace('HK$', '').replace(',', ''),
        "priceCurrency": "HKD",
        "availability": "https://schema.org/InStock"
      }
    })),
    "educationalLevel": program.ageGroups.map(g => g.age).join(', '),
    "teaches": program.outcomes,
    "image": program.image,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
      <SEO
        title={`${program.title} - 星啟學習中心 | 香港STEAM教育`}
        description={`${program.description} 為${program.ageGroups[0].age}至${program.ageGroups[program.ageGroups.length - 1].age}提供全面的${program.title}課程。專業導師、實作學習和最先進的設備。`}
        keywords={`${program.title}, STEAM教育, 香港, ${program.title}課程, 兒童教育, 科技教育, ${program.ageGroups.map(g => g.age).join(', ')}`}
        canonical={`${siteUrl}/programs/${programId}`}
        ogImage={program.image}
        schema={programSchema}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center`}>
                    <i className={`${program.icon} text-white text-2xl`}></i>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">{program.title}</h1>
                    <p className="text-xl text-gray-600 mt-2">{program.description}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">{program.overview}</p>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button onClick={scrollToEnrollment} size="lg">
                    <i className="ri-user-add-line mr-2"></i>
                    立即報名
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => navigate('/')}>
                    <i className="ri-arrow-left-line mr-2"></i>
                    返回課程
                  </Button>
                </div>
              </div>
              
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Age Groups & Curriculum */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">年齡組別與課程</h2>
              <p className="text-xl text-gray-600">為不同年齡組別設計的結構化學習路徑</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {program.ageGroups.map((group, index) => (
                <Card key={index} hover className="h-full">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900">{group.title}</h3>
                      <p className="text-lg font-medium text-blue-600">{group.age}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{group.price}</p>
                      <p className="text-sm text-gray-600">{group.duration}</p>
                    </div>

                    <p className="text-gray-700">{group.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">課程重點：</h4>
                      <ul className="space-y-2">
                        {group.curriculum.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <i className="ri-check-line text-teal-500 mt-1"></i>
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button onClick={scrollToEnrollment} fullWidth>
                      報名{group.title}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Outcomes */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">課程特色</h2>
                <div className="space-y-4">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 ${program.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">學習成果</h2>
                <div className="space-y-4">
                  {program.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-lightbulb-line text-white"></i>
                      </div>
                      <span className="text-lg text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Tools */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">設備與工具</h2>
              <p className="text-xl text-gray-600">最先進的實作學習設備</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.equipment.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <i className="ri-tools-line text-white text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">課程時間表</h2>
              <p className="text-xl text-gray-600">靈活的時間選擇以配合您的日程</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {program.schedule.map((slot, index) => (
                <Card key={index} hover>
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">{slot.day}</h3>
                      <p className="text-blue-600 font-medium">{slot.time}</p>
                      <p className="text-gray-600">{slot.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-teal-600">{slot.spots}</p>
                      <p className="text-sm text-gray-600">剩餘名額</p>
                      <Button size="sm" className="mt-2" onClick={scrollToEnrollment}>
                        立即預約
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              準備好開始您的{program.title}之旅了嗎？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              加入數百名已經發現他們對STEAM學習熱情的學生。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                onClick={scrollToEnrollment} 
                size="lg" 
                className="bg-pink-500 text-white hover:bg-pink-600"
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
              >
                <i className="ri-customer-service-line mr-2"></i>
                諮詢問題
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
