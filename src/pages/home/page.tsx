import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import AgeGroupsSection from './components/AgeGroupsSection';
import WorkshopsSection from './components/WorkshopsSection';
import EnrollmentSection from './components/EnrollmentSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import { SEO } from '../../utils/seo';

export default function HomePage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Starry Learning Centre",
    "description": "香港領先的STEAM教育課程，適合3至18歲學生。提供機器人、編程、科學、工程、藝術和數學課程。",
    "url": siteUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hung Hom",
      "addressRegion": "Kowloon",
      "addressCountry": "HK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.304",
      "longitude": "114.182"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "STEAM教育課程",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "機器人與人工智能",
          "description": "使用LEGO Mindstorms和Arduino學習機器人設計與編程",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Starry Learning Centre"
          }
        },
        {
          "@type": "Course",
          "name": "編程與編碼",
          "description": "從Scratch到Python，學習流行的編程語言",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Starry Learning Centre"
          }
        },
        {
          "@type": "Course",
          "name": "科學實驗室",
          "description": "物理、化學、生物和環境科學實驗",
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
        title="Starry Learning Centre -創新STEAM教育 全方位學習"
        description="香港領先的STEAM教育課程，適合3至18歲學生。提供機器人、編程、科學、工程、藝術和數學課程。立即報名，體驗創新學習！"
        keywords="STEAM education Hong Kong, robotics classes, coding for kids, science programs, engineering education, math classes, technology education, Hong Kong education"
        canonical={siteUrl}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <ProgramsSection />
        <AgeGroupsSection />
        <WorkshopsSection />
        <EnrollmentSection />
        <InstagramSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
