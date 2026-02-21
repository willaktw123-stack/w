
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';
import { useNavigate } from 'react-router-dom';

export default function UpcomingClassesSection() {
  const navigate = useNavigate();

  const scrollToEnrollment = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const upcomingClasses = [
    {
      title: '機器人錦標賽準備',
      date: '2024年1月15-19日',
      time: '上午10:00 - 中午12:00',
      age: '9-12歲',
      spots: 5,
      total: 12,
      price: 'HK$880',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20robotics%20competition%20preparation%20class%20with%20children%20aged%209-12%20working%20on%20competitive%20robot%20designs%2C%20focused%20students%20programming%20and%20testing%20robots%20on%20challenge%20courses%2C%20modern%20STEAM%20classroom%20with%20competition%20mats%20and%20technical%20equipment&width=300&height=200&seq=class-1&orientation=landscape',
      level: '進階',
      featured: true,
      program: 'STEAM與AI',
      category: '機器人與人工智能'
    },
    {
      title: 'Python初學者課程',
      date: '2024年1月22-26日',
      time: '下午2:00 - 下午4:00',
      age: '10-14歲',
      spots: 8,
      total: 15,
      price: 'HK$750',
      image: 'https://readdy.ai/api/search-image?query=Python%20programming%20class%20for%20beginners%20with%20students%20aged%2010-14%20learning%20to%20code%20on%20computers%2C%20colorful%20programming%20interface%20on%20screens%2C%20engaging%20teacher%20demonstration%2C%20bright%20modern%20computer%20lab%20with%20ergonomic%20furniture&width=300&height=200&seq=class-2&orientation=landscape',
      level: '初級',
      featured: false,
      program: 'STEAM與AI',
      category: '編程與編碼'
    },
    {
      title: '科學實驗室探險',
      date: '2024年1月29日 - 2月2日',
      time: '上午9:00 - 上午11:00',
      age: '6-8歲',
      spots: 3,
      total: 10,
      price: 'HK$680',
      image: 'https://readdy.ai/api/search-image?query=Elementary%20science%20laboratory%20class%20with%20children%20aged%206-8%20conducting%20safe%20hands-on%20experiments%2C%20colorful%20chemical%20reactions%20and%20simple%20physics%20demonstrations%2C%20excited%20children%20wearing%20safety%20goggles%2C%20well-equipped%20science%20lab%20with%20child-friendly%20equipment&width=300&height=200&seq=class-3&orientation=landscape',
      level: '初級',
      featured: false,
      program: 'STEAM與AI',
      category: '科學實驗室'
    },
    {
      title: '3D設計與打印工作坊',
      date: '2024年2月5-9日',
      time: '上午11:00 - 下午1:00',
      age: '11-15歲',
      spots: 7,
      total: 12,
      price: 'HK$950',
      image: 'https://readdy.ai/api/search-image?query=3D%20design%20and%20printing%20workshop%20with%20teenagers%20aged%2011-15%20using%20computer-aided%20design%20software%20and%203D%20printers%2C%20students%20designing%20and%20creating%20physical%20prototypes%2C%20modern%20maker%20space%20with%20multiple%203D%20printers%20and%20design%20workstations&width=300&height=200&seq=class-4&orientation=landscape',
      level: '中級',
      featured: true,
      program: 'STEAM與AI',
      category: '工程設計'
    },
    {
      title: 'AI與機器學習入門',
      date: '2024年2月12-16日',
      time: '下午3:00 - 下午5:00',
      age: '13-18歲',
      spots: 4,
      total: 8,
      price: 'HK$1200',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20AI%20and%20machine%20learning%20class%20with%20teenage%20students%20aged%2013-18%20working%20on%20artificial%20intelligence%20projects%2C%20complex%20algorithms%20and%20data%20visualization%20on%20computer%20screens%2C%20high-tech%20laboratory%20setting%20with%20modern%20computers%20and%20AI%20development%20tools&width=300&height=200&seq=class-5&orientation=landscape',
      level: '進階',
      featured: false,
      program: 'STEAM與AI',
      category: '機器人與人工智能'
    },
    {
      title: '創意數碼藝術',
      date: '2024年2月19-23日',
      time: '下午1:00 - 下午3:00',
      age: '8-12歲',
      spots: 6,
      total: 14,
      price: 'HK$720',
      image: 'https://readdy.ai/api/search-image?query=Digital%20arts%20and%20animation%20class%20with%20children%20aged%208-12%20creating%20colorful%20digital%20artwork%20on%20tablets%20and%20computers%2C%20creative%20drawings%20and%20animations%20on%20screens%2C%20artistic%20learning%20environment%20with%20graphic%20design%20tools%20and%20inspiring%20visual%20displays&width=300&height=200&seq=class-6&orientation=landscape',
      level: '初級',
      featured: false,
      program: 'STEAM與AI',
      category: '數碼藝術'
    }
  ];

  const handleEnrollClick = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProgram = () => {
    navigate('/steam-ai');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case '初級': return 'bg-green-100 text-green-700';
      case '中級': return 'bg-yellow-100 text-yellow-700';
      case '進階': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getSpotStatus = (spots: number, total: number) => {
    const percentage = (spots / total) * 100;
    if (percentage <= 25) return 'text-red-600';
    if (percentage <= 50) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '機器人與人工智能': return 'ri-robot-line';
      case '編程與編碼': return 'ri-code-line';
      case '科學實驗室': return 'ri-flask-line';
      case '工程設計': return 'ri-tools-line';
      case '數碼藝術': return 'ri-palette-line';
      case '應用數學': return 'ri-calculator-line';
      default: return 'ri-book-line';
    }
  };

  return (
    <section id="upcoming-classes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            即將開課
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            參加我們精彩的即將開課課程和營隊。名額有限 - 
            請儘早報名以確保您孩子在我們熱門課程中的位置。
          </p>
        </div>

        {/* Program Badge */}
        <div className="flex justify-center mb-8">
          <div 
            onClick={handleViewProgram}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-3 rounded-full border-2 border-teal-200 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <i className="ri-robot-line text-white text-xl"></i>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-600">所有課程來自</p>
              <p className="text-lg font-bold text-gray-900">STEAM與AI</p>
            </div>
            <i className="ri-arrow-right-line text-teal-600"></i>
          </div>
        </div>

        {/* Featured Classes */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <i className="ri-star-line text-yellow-500 mr-2"></i>
            精選課程
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingClasses.filter(cls => cls.featured).map((classItem, index) => (
              <Card key={index} hover className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(classItem.level)}`}>
                          {classItem.level}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                          精選
                        </span>
                        <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs font-medium flex items-center">
                          <i className={`${getCategoryIcon(classItem.category)} mr-1`}></i>
                          {classItem.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{classItem.title}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{classItem.price}</p>
                    </div>
                  </div>

                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <i className="ri-calendar-line text-blue-600"></i>
                      <span>{classItem.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-time-line text-blue-600"></i>
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-user-line text-blue-600"></i>
                      <span>{classItem.age}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-team-line text-blue-600"></i>
                      <span className={getSpotStatus(classItem.spots, classItem.total)}>
                        剩餘{classItem.spots}/{classItem.total}名額
                      </span>
                    </div>
                  </div>

                  <Button onClick={handleEnrollClick} fullWidth>
                    <i className="ri-user-add-line mr-2"></i>
                    立即報名
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Upcoming Classes */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">所有即將開課</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingClasses.map((classItem, index) => (
              <Card key={index} hover className="h-full">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(classItem.level)}`}>
                        {classItem.level}
                      </span>
                      {classItem.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                          精選
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <i className={`${getCategoryIcon(classItem.category)} text-teal-600`}></i>
                      <span className="text-xs text-teal-600 font-medium">{classItem.category}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{classItem.title}</h4>
                    <p className="text-2xl font-bold text-blue-600">{classItem.price}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <i className="ri-calendar-line text-gray-500"></i>
                      <span>{classItem.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-time-line text-gray-500"></i>
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-user-line text-gray-500"></i>
                      <span>{classItem.age}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-team-line text-gray-500"></i>
                      <span className={getSpotStatus(classItem.spots, classItem.total)}>
                        剩餘{classItem.spots}名額
                      </span>
                    </div>
                  </div>

                  <Button onClick={handleEnrollClick} fullWidth size="sm">
                    立即報名
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <i className="ri-calendar-check-line text-3xl text-blue-600 mb-2"></i>
            <h4 className="text-2xl font-bold text-gray-900">52</h4>
            <p className="text-gray-600">本月課程</p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <i className="ri-user-star-line text-3xl text-teal-600 mb-2"></i>
            <h4 className="text-2xl font-bold text-gray-900">25+</h4>
            <p className="text-gray-600">專業導師</p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <i className="ri-time-line text-3xl text-purple-600 mb-2"></i>
            <h4 className="text-2xl font-bold text-gray-900">彈性</h4>
            <p className="text-gray-600">時間選擇</p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <i className="ri-award-line text-3xl text-orange-600 mb-2"></i>
            <h4 className="text-2xl font-bold text-gray-900">98%</h4>
            <p className="text-gray-600">滿意度</p>
          </div>
        </div>
      </div>
    </section>
  );
}
