import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { SEO } from '../../utils/seo';

export default function PartnersPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Starry Learning Centre - 合作夥伴",
    "description": "Starry Learning Centre的合作公司和教育夥伴，共同推動創新教育發展",
    "url": `${siteUrl}/partners`
  };

  const handleImageError = (e) => {
    e.target.src = '/placeholder-logo.png';
  };

  const scrollToSection = (elementId) => {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  };

  const handleNavigateToContact = () => {
    try {
      window.location.href = '/#contact';
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleOnlineConsultation = () => {
    try {
      const chatButton = document.querySelector('#vapi-widget-floating-button');
      if (chatButton) {
        chatButton.click();
      } else {
        console.warn('Chat widget not found');
      }
    } catch (error) {
      console.error('Error opening chat widget:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
      <SEO
        title="合作公司/夥伴 - Starry Learning Centre"
        description="了解Starry Learning Centre的合作夥伴網絡，包括科技、金融、創業等領域的優質合作機構，共同推動創新教育發展。"
        keywords="教育合作夥伴, 科技合作, 金融教育, 創業孵化, STEM教育, 香港教育機構"
        canonical={`${siteUrl}/partners`}
        schema={schema}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20empty%20corporate%20office%20space%20with%20glass%20walls%20and%20natural%20lighting%2C%20sleek%20conference%20room%20with%20large%20table%20and%20chairs%2C%20professional%20business%20environment%20with%20technology%20displays%20showing%20global%20network%20connections%20and%20partnership%20diagrams%2C%20minimalist%20workspace%20with%20blue%20and%20teal%20accent%20colors%2C%20collaborative%20innovation%20hub%20interior%20without%20any%20people%2C%20clean%20contemporary%20design%20with%20digital%20screens%20and%20holographic%20interfaces&width=1920&height=1080&seq=partners-hero-no-people-v2&orientation=landscape')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <i className="ri-team-line text-white text-xl"></i>
                <span className="text-white font-semibold">攜手共創未來</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                合作公司/夥伴
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                與優質合作夥伴攜手，為學生提供最優質的教育資源和實踐機會
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              成為我們的合作夥伴
            </h2>
            <p className="text-xl text-white/90 mb-8">
              如果您的機構致力於推動創新教育，歡迎與我們聯繫，探討合作機會
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                onClick={handleNavigateToContact}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-teal-600 whitespace-nowrap"
              >
                <i className="ri-mail-line mr-2"></i>
                聯繫我們
              </Button>
              <Button 
                size="lg" 
                onClick={handleOnlineConsultation}
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 whitespace-nowrap"
              >
                <i className="ri-customer-service-line mr-2"></i>
                在線諮詢
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
