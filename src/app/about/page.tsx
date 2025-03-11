"use client";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          🌿 Snowy Clinic – Kiến Tạo Vẻ Đẹp Hoàn Hảo 🌿
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Tại <strong className="text-blue-600">Snowy Clinic</strong>, chúng tôi tin rằng mỗi người đều xứng đáng sở hữu một vẻ đẹp rạng rỡ và tự tin theo cách riêng của mình.  
          Với công nghệ thẩm mỹ tiên tiến, đội ngũ chuyên viên giàu kinh nghiệm và dịch vụ tận tâm, Snowy Clinic cam kết mang đến những giải pháp làm đẹp 
          <span className="text-blue-500 font-semibold"> an toàn, hiệu quả</span>, giúp bạn tỏa sáng mỗi ngày.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "🌟 Dịch vụ hàng đầu", desc: "Triệt lông, trẻ hóa da, điều trị sắc tố, phun môi thẩm mỹ..." },
          { title: "💎 Công nghệ hiện đại", desc: "Ứng dụng Plasma, Laser tiên tiến mang lại kết quả vượt trội." },
          { title: "👩‍⚕️ Chuyên viên tận tâm", desc: "Đội ngũ được đào tạo bài bản, tư vấn giải pháp phù hợp nhất." },
          { title: "🏡 Không gian đẳng cấp", desc: "Thiết kế sang trọng, giúp bạn thư giãn trong từng trải nghiệm." },
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="/services" 
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Khám Phá Dịch Vụ
        </a>
      </div>
    </section>
  );
}
