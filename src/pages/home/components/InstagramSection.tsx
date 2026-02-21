import Button from '../../../components/base/Button';

export default function InstagramSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="ri-instagram-line text-4xl text-white"></i>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            關注我們的 Instagram
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            追蹤我們的最新動態，查看學生作品、課堂花絮和精彩活動。
            與我們一起分享 STEAM 學習的樂趣！
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://www.instagram.com/starry.learning.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 text-white shadow-lg"
              >
                <i className="ri-instagram-line mr-2 text-xl"></i>
                @starry.learning.hk
              </Button>
            </a>
          </div>

          {/* Instagram Embed */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
            <div className="max-w-3xl mx-auto">
              <iframe
                src="https://www.instagram.com/starry.learning.hk/embed"
                width="100%"
                height="800"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="rounded-lg"
                title="Starry Learning Centre Instagram Feed"
              ></iframe>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            追蹤我們獲取更多精彩內容和最新課程資訊
          </p>
        </div>
      </div>
    </section>
  );
}
