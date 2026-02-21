import { useState } from 'react';
import Button from '../../../components/base/Button';
import Card from '../../../components/base/Card';

const EnrollmentSection = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    startDate: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Validate required fields
      if (!formData.parentName || !formData.email || !formData.phone || !formData.childName || !formData.childAge || !formData.program) {
        throw new Error('Please fill in all required fields');
      }

      // Validate textarea length
      if (formData.additionalInfo.length > 500) {
        throw new Error('Additional information must be 500 characters or less');
      }

      const formDataToSend = new URLSearchParams();
      formDataToSend.append('parentName', formData.parentName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('childName', formData.childName);
      formDataToSend.append('childAge', formData.childAge);
      formDataToSend.append('program', formData.program);
      formDataToSend.append('startDate', formData.startDate);
      formDataToSend.append('additionalInfo', formData.additionalInfo);
      formDataToSend.append('recipient_email', 'starry.learning.hk@gmail.com');

      const response = await fetch('https://readdy.ai/api/form/d3nmj1m96su78r6her40', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          childName: '',
          childAge: '',
          program: '',
          startDate: '',
          additionalInfo: ''
        });
      } else {
        throw new Error('Failed to submit enrollment form');
      }
    } catch (error) {
      console.error('Enrollment form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppEnroll = () => {
    window.open('https://api.whatsapp.com/message/WS3WGPO24SGEJ1?autoload=1&app_absent=0', '_blank');
  };

  return (
    <section id="enrollment" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">立即報名</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            為您的孩子開啟STEAM教育的美好未來。填寫報名表格，我們將在24小時內與您聯繫。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              <Button
                size="lg"
                onClick={handleWhatsAppEnroll}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                透過 WhatsApp 立即報名
              </Button>
              <p className="text-sm text-gray-500 mt-4">或填寫以下表格</p>
            </div>

            <form id="enrollment-form" data-readdy-form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    家長/監護人姓名 *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="請輸入您的全名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    電子郵箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    聯絡電話 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="+852 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                    孩子全名 *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="請輸入孩子的全名"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                    孩子年齡組別 *
                  </label>
                  <select
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">請選擇年齡組別</option>
                    <option value="3-4 years">3-4 歲</option>
                    <option value="5-6 years">5-6 歲</option>
                    <option value="7-8 years">7-8 歲</option>
                    <option value="9-10 years">9-10 歲</option>
                    <option value="11-12 years">11-12 歲</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                    首選課程 *
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">請選擇課程</option>
                    <option value="Little Scientists (3-4 years)">小小科學家 (3-4 歲)</option>
                    <option value="Young Explorers (5-6 years)">小小探索家 (5-6 歲)</option>
                    <option value="Tech Innovators (7-8 years)">科技創新家 (7-8 歲)</option>
                    <option value="Future Engineers (9-10 years)">未來工程師 (9-10 歲)</option>
                    <option value="Advanced Creators (11-12 years)">進階創作家 (11-12 歲)</option>
                    <option value="Robotics Workshop">機器人工作坊</option>
                    <option value="Coding Bootcamp">編程訓練營</option>
                    <option value="Science Lab">科學實驗室</option>
                    <option value="Art & Design Studio">藝術設計工作室</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                  首選開課日期 <span className="text-gray-500 text-xs">(dd/mm/yyyy)</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  其他資訊（最多500字）
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  placeholder="請告訴我們您孩子的興趣、特殊需求或對課程的任何疑問..."
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.additionalInfo.length}/500 字
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <i className="ri-check-circle-fill mr-2"></i>
                    感謝您！您的報名申請已成功提交。我們將在24小時內與您聯繫，討論下一步安排。
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    <i className="ri-error-warning-fill mr-2"></i>
                    抱歉，提交報名申請時出現錯誤。請重試或直接與我們聯繫。
                  </p>
                </div>
              )}

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      正在提交申請...
                    </>
                  ) : (
                    <>
                      <i className="ri-user-add-fill mr-2"></i>
                      提交報名申請
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
