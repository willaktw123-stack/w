import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
              Starry Learning Centre
            </h3>
            <p className="text-blue-100 text-sm">
              透過香港創新的全面教育課程啟發下一代。
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">課程項目</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('/steam-ai')}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                >
                  STEAM與AI全方位課程
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/starry-creator')}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                >
                  Starry 星創者計劃
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/comprehensive-program')}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                >
                  全方位創學園
                </button>
              </li>
            </ul>
          </div>

          {/* Workshops */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">工作坊</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('/art-workshops')}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                >
                  Serenity Art Studio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/workshops')}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                >
                  校內及校外工作坊
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">聯絡</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex items-start space-x-2">
                <i className="ri-mail-line mt-1 flex-shrink-0"></i>
                <span>starry.learning.hk@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-phone-line flex-shrink-0"></i>
                <a 
                  href="https://wa.me/message/WS3WGPO24SGEJ1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  +852 6485 7582
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-mail-line flex-shrink-0"></i>
                <span>starry.learning.hk@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200/30 mt-12 pt-8 text-center text-sm text-blue-100">
          <p>© 2024 星啟學習中心。版權所有。<a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">由 Readdy 提供支援</a></p>
        </div>
      </div>
    </footer>
  );
}
