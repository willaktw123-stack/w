import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isWorkshopsOpen, setIsWorkshopsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: '首頁', path: '/' },
    { name: '課程', path: '/programs' },
    { name: '全方位創學園', path: '/comprehensive-program' },
    { name: '星創者計劃', path: '/starry-creator' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (path: string, sectionId?: string) => {
    setIsMenuOpen(false);
    
    if (path === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (path === '/starry-creator') {
      navigate('/starry-creator');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname === '/') {
        scrollToSection(sectionId || '');
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId || ''), 100);
      }
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // You can implement search logic here
      console.log('Searching for:', searchQuery);
      // For now, we'll just close the search
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleWorkshopsClick = () => {
    navigate('/workshops');
    setIsMenuOpen(false);
  };

  const handleThemeWorkshopsClick = () => {
    navigate('/');
    setTimeout(() => {
      const workshopsSection = document.getElementById('workshops');
      if (workshopsSection) {
        workshopsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const handleArtWorkshopsClick = () => {
    navigate('/art-workshops');
    setIsMenuOpen(false);
    setIsWorkshopsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="https://static.readdy.ai/image/93d2c8adbfe5ae8fa6e0f96f100cb340/9da439056eda58c2885ac8e5bfe6e778.png" 
              alt="Starry Learning Centre Logo" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-xl font-bold text-gray-800">Starry Learning</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => navigate('/')}
              className="px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              首頁
            </button>
            
            {/* Workshops Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsWorkshopsOpen(true)}
              onMouseLeave={() => setIsWorkshopsOpen(false)}
            >
              <button 
                onClick={handleWorkshopsClick}
                className="px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100 flex items-center gap-1"
              >
                工作坊
                <i className={`ri-arrow-down-s-line transition-transform ${isWorkshopsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isWorkshopsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <button
                    onClick={handleThemeWorkshopsClick}
                    className="w-full text-left px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer flex items-center gap-3"
                  >
                    <i className="ri-calendar-event-line text-lg"></i>
                    <span>主題工作坊</span>
                  </button>
                  <button
                    onClick={handleWorkshopsClick}
                    className="w-full text-left px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer flex items-center gap-3"
                  >
                    <i className="ri-building-line text-lg"></i>
                    <span>外授工作坊</span>
                  </button>
                  <button
                    onClick={handleArtWorkshopsClick}
                    className="w-full text-left px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer flex items-center gap-3"
                  >
                    <i className="ri-palette-line text-lg"></i>
                    <span>Serenity Art Studio</span>
                  </button>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button className="px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100 flex items-center gap-1">
                課程
                <i className={`ri-arrow-down-s-line transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isProgramsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg py-2 min-w-[200px] border border-gray-100">
                  {/* STEAM與AI */}
                  <button
                    onClick={() => {
                      navigate('/steam-ai');
                      setIsProgramsOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-gray-700 hover:bg-teal-50 transition-colors cursor-pointer font-medium flex items-center"
                  >
                    <i className="ri-robot-line text-teal-600 mr-2"></i>
                    STEAM與AI
                  </button>
                  
                  {/* Starry 星創者計劃 */}
                  <button
                    onClick={() => {
                      navigate('/starry-creator');
                      setIsProgramsOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-gray-700 hover:bg-purple-50 transition-colors cursor-pointer font-medium flex items-center"
                  >
                    <i className="ri-star-line text-purple-600 mr-2"></i>
                    Starry 星創者計劃
                  </button>
                  
                  {/* 全方位創學園 */}
                  <button
                    onClick={() => {
                      navigate('/comprehensive-program');
                      setIsProgramsOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-gray-700 hover:bg-teal-50 transition-colors cursor-pointer font-medium flex items-center"
                  >
                    <i className="ri-book-line text-teal-600 mr-2"></i>
                    全方位創學園
                  </button>
                  
                  <div className="border-t border-gray-100 my-2"></div>
                  
                  {/* 線上學習與學習筆記 */}
                  <button 
                    onClick={() => navigate('/online-learning')}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    線上學習與學習筆記
                  </button>
                  
                  {/* 中學面試準備 */}
                  <button 
                    onClick={() => navigate('/interview-prep')}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    中學面試準備
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigate('/partners')}
              className="px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              合作夥伴
            </button>
            <button 
              onClick={() => window.open('https://api.whatsapp.com/message/WS3WGPO24SGEJ1?autoload=1&app_absent=0', '_blank')}
              className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              聯繫我們
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-blue-600 cursor-pointer p-2"
              aria-label="Search"
            >
              <i className="ri-search-line text-xl"></i>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fadeIn">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜尋課程、工作坊..."
                className="w-full px-4 py-3 pl-12 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                autoFocus
              />
              <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-lg"></i>
                </button>
              )}
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/');
                setIsMenuOpen(false);
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              首頁
            </button>
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/');
                setIsMenuOpen(false);
                setTimeout(() => {
                  const programsSection = document.getElementById('programs');
                  if (programsSection) {
                    programsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              課程
            </button>
            {/* STEAM與AI */}
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/steam-ai');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-2 text-gray-600 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer text-sm flex items-center"
            >
              <i className="ri-robot-line text-teal-600 mr-2"></i>
              STEAM與AI
            </button>
            {/* Starry 星創者計劃 */}
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/starry-creator');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-2 text-gray-600 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer text-sm flex items-center"
            >
              <i className="ri-star-line text-purple-600 mr-2"></i>
              Starry 星創者計劃
            </button>
            {/* 全方位創學園 */}
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/comprehensive-program');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-2 text-gray-600 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer text-sm flex items-center"
            >
              <i className="ri-book-line text-teal-600 mr-2"></i>
              全方位創學園
            </button>
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/online-learning');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              線上學習與學習筆記
            </button>
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/interview-prep');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              中學面試準備
            </button>
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/');
                setIsMenuOpen(false);
                setTimeout(() => {
                  const workshopsSection = document.getElementById('workshops');
                  if (workshopsSection) {
                    workshopsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              工作坊
            </button>
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/');
                setIsMenuOpen(false);
                setTimeout(() => {
                  const artSection = document.getElementById('art-workshops');
                  if (artSection) {
                    artSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="block w-full text-left px-6 py-2 text-gray-600 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer text-sm flex items-center"
            >
              <i className="ri-palette-line text-lg mr-2"></i>
              Serenity Art Studio
            </button>
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/starry-creator');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>星創者計劃</span>
            </button>
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/partners');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              合作公司/夥伴
            </button>
            <button
              onClick={() => {
                window.REACT_APP_NAVIGATE('/');
                setIsMenuOpen(false);
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              聯絡我們
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
