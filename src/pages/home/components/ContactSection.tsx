
import { useState } from 'react';
import Button from '../../../components/base/Button';
import Card from '../../../components/base/Card';

export default function ContactSection() {
  const scrollToEnrollment = () => {
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">聯絡我們</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            準備好開始您孩子的STEAM學習之旅了嗎？立即聯絡我們，了解更多關於我們的課程並安排參觀。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">聯絡資訊</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">電郵地址</h4>
                    <p className="text-gray-600">starry.learning.hk@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">電話號碼 Whatasapp</h4>
                    <a 
                      href="https://wa.me/message/WS3WGPO24SGEJ1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
                    >
                      +852 6485 7582
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">辦公時間</h4>
                    <p className="text-gray-600">週一至週六：上午9:00 - 下午6:00</p>
                    <p className="text-gray-600">週日：休息</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="w-full">
              <Button onClick={scrollToEnrollment} fullWidth className="bg-green-600 hover:bg-green-700">
                <i className="ri-user-add-line mr-2"></i>
                立即報名
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">尋找我們</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2345678901234!2d114.1854511!3d22.3120547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401874ef38aeb%3A0x92417d4815f70939!2sThe%20Vantage!5e0!3m2!1szh-TW!2shk!4v1234567890123!5m2!1szh-TW!2shk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="星啟學習中心位置"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              位於紅磡中心地帶，港鐵及巴士均可輕鬆到達
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
