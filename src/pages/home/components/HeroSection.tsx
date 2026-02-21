import Button from '../../../components/base/Button';

export default function HeroSection() {
  const handleEnrollClick = () => {
    window.open('https://api.whatsapp.com/message/WS3WGPO24SGEJ1?autoload=1&app_absent=0', '_blank');
  };

  const handleServiceClick = (path: string) => {
    window.REACT_APP_NAVIGATE(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://public.readdy.ai/ai/video_res/ab86ed0b-ec64-4586-bead-eb974cc7154e.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                全方位
                <span className="text-teal-400"> 學習 </span>
                卓越
              </h1>
              <p className="text-xl text-gray-200 max-w-lg">
                從STEAM教育到學術支援、面試準備到創意工作坊 - 
                以全面的教育卓越培育香港未來領袖。
              </p>
            </div>

            {/* Educational Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => handleServiceClick('/steam-ai')}
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <i className="ri-robot-line text-white"></i>
                </div>
                <span className="text-lg">🤖 STEAM教育與AI應用</span>
              </div>
              <div 
                onClick={() => handleServiceClick('/online-learning')}
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-computer-line text-white"></i>
                </div>
                <span className="text-lg">🚀 線上學習與學習筆記</span>
              </div>
              <div 
                onClick={() => handleServiceClick('/comprehensive-program')}
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <i className="ri-calendar-line text-white"></i>
                </div>
                <span className="text-lg">🎯 全方位創學園</span>
              </div>
              <div 
                onClick={() => handleServiceClick('/interview-prep')}
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-user-voice-line text-white"></i>
                </div>
                <span className="text-lg">👑 中學面試準備</span>
              </div>
              <div 
                onClick={() => handleServiceClick('/starry-creator')}
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-star-line text-white"></i>
                </div>
                <span className="text-lg">⭐ Starry 星創者計劃</span>
              </div>
              <div 
                onClick={() => handleServiceClick('/workshops')}
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-palette-line text-white"></i>
                </div>
                <span className="text-lg">🎨 校內及校外工作坊</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleEnrollClick} className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white">
                <i className="ri-rocket-line mr-2"></i>
                開啟孩子的學習之旅
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <i className="ri-play-circle-line mr-2"></i>
                課程資訊
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Panel */}
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">快速聯絡</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">校區位置</h4>
                    <p className="text-sm text-gray-600">紅磡 The Vantage</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <i className="ri-phone-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">電話</h4>
                    <a 
                      href="https://api.whatsapp.com/send?phone=85264857582" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
                    >
                      +852 6485 7582
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <i className="ri-time-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">辦公時間</h4>
                    <p className="text-sm text-gray-600">週一至週六：上午9時至下午6時</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">電郵</h4>
                    <p className="text-sm text-gray-600">starry.learning.hk@gmail.com</p>
                  </div>
                </div>
              </div>

              <Button 
                fullWidth 
                className="mt-6"
                onClick={handleEnrollClick}
              >
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
