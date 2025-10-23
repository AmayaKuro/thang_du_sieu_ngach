import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Thặng Dư Siêu Ngạch
          </h1>
          <h2 className="hero-subtitle">
            Công nghệ và giá trị thặng dư siêu ngạch trong kỷ nguyên 4.0
          </h2>
          <p className="hero-description">
            Khám phá những giá trị vượt ngoài giới hạn truyền thống trong thời đại số hóa
          </p>
        </div>
        
        <div className="cosmic-animation">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Nội Dung Khám Phá</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-number">01</div>
            <h4>Khái Niệm</h4>
            <p>Định nghĩa và phân tích lý thuyết về thặng dư siêu ngạch</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">02</div>
            <h4>Ví Dụ</h4>
            <p>Các trường hợp thực tế và ứng dụng trong công nghệ 4.0</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">03</div>
            <h4>Ý Nghĩa</h4>
            <p>Tác động và ý nghĩa đối với xã hội và kinh tế</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">04</div>
            <h4>Sự Kiện Lớp</h4>
            <p>Hoạt động nghiên cứu và thảo luận của lớp học</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">05</div>
            <h4>AI Report</h4>
            <p>Phân tích và báo cáo từ góc nhìn trí tuệ nhân tạo</p>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <blockquote className="philosophical-quote">
          <p>
            "Wow có người lướt xuống dưới đây này ( ͡° ͜ʖ ͡°)"
          </p>
          <cite>— Quà cho người chịu tìm tòi: <a href="/present-register">Click me 🎁</a></cite>
        </blockquote>
      </section>
    </div>
  )
}

export default Home
