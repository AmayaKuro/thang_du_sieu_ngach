import { useState } from 'react'
import '../pages/PageTemplate.css'

function ViDu() {
  const [selectedCompany, setSelectedCompany] = useState(null)

  const vietnamCompanies = [
    {
      id: 'fpt',
      name: "FPT Corporation",
      subtitle: "Chuyển đổi số và AI",
      year: "2025",
      image: "https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-fpt-inkythuatso-1-01-01-14-33-35.jpg",
      imageDetail:"https://fptsoftware.com/-/media/project/fpt-software/fso/newsroom/news---press-release/social-1200x627.webp?modified=20240516023614&extension=webp&hash=407627FC04DDB03B78D3861045562791",
      revenue: "32.683 tỷ đồng (6 tháng đầu năm)",
      profit: "6.166 tỷ đồng, tăng 18,5%",
      tech: "AI, điện toán đám mây, chuyển đổi số",
      surplus: "Tăng trưởng lợi nhuận cao nhờ đầu tư công nghệ mới, đặc biệt trong mảng dịch vụ CNTT nước ngoài với mức tăng 16,6%",
      description: "FPT Corporation là tập đoàn công nghệ hàng đầu Việt Nam, tiên phong trong chuyển đổi số và ứng dụng AI. Với chiến lược đầu tư mạnh mẽ vào công nghệ tiên tiến, FPT đã tạo ra giá trị thặng dư siêu ngạch đáng kể thông qua việc nâng cao năng suất và mở rộng thị trường quốc tế."
    },
    {
      id: 'viettel',
      name: "Viettel Group",
      subtitle: "Công nghệ 5G",
      year: "2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Viettel_Telecom_banner.jpg/1200px-Viettel_Telecom_banner.jpg",
      imageDetail: "https://dangkyviettel.com.vn/public/upload/images/5G-Viettel-Ha-Noi.jpg",
      revenue: "190 nghìn tỷ đồng",
      profit: "51 nghìn tỷ đồng, tăng 11,3%",
      tech: "Là nhà mạng đầu tiên triển khai 5G tại Việt Nam với 6.500 trạm phát sóng",
      surplus: "5,5 triệu thuê bao 5G trong 5 tháng đầu, tạo lợi thế độc quyền tạm thời",
      description: "Viettel là nhà mạng viễn thông hàng đầu Việt Nam, tiên phong triển khai công nghệ 5G. Việc đầu tư sớm vào hạ tầng 5G đã giúp Viettel tạo ra lợi thế cạnh tranh vượt trội và thu được lợi nhuận siêu ngạch trong giai đoạn đầu triển khai."
    },
    // {
    //   id: 'vng',
    //   name: "VNG Corporation",
    //   subtitle: "Hệ sinh thái số",
    //   year: "2025",
    //   image: "https://mondialbrand.com/wp-content/uploads/2024/02/vng_corporation-logo_brandlogos.net_ysr15.png",
    //   imageDetail: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a1/a6/5f/a1a65fcc-2623-16f9-b2e5-1f248a2f9ed9/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
    //   revenue: "Zalo với 77 triệu người dùng hoạt động hàng tháng",
    //   profit: "Đang mở rộng mạnh mẽ",
    //   tech: "Phát triển AI, trí tuệ nhân tạo và hạ tầng đám mây",
    //   surplus: "Tạo ra từ việc độc quyền ứng dụng nhắn tin số 1 Việt Nam và mở rộng sang các lĩnh vực công nghệ mới",
    //   description: "VNG Corporation là công ty công nghệ tiên phong tại Việt Nam với nền tảng Zalo chiếm lĩnh thị trường. Bằng việc xây dựng hệ sinh thái số toàn diện và đầu tư vào AI, VNG đã tạo ra giá trị thặng dư siêu ngạch từ hiệu ứng mạng lưới và tính độc quyền của nền tảng."
    // }
  ]

  const worldCompanies = [
    {
      id: 'apple',
      name: "Apple",
      subtitle: "Hệ sinh thái công nghệ",
      year: "2025",
      image: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      imageDetail: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/157855/Originals/he-sinh-thai-apple-157855%20(4).jpg",
      revenue: "94,04 tỷ USD (Quý III/2025), tăng 10%",
      profit: "24,43 tỷ USD",
      tech: "iPhone 17 với chip AI, camera nâng cấp",
      surplus: "Biên lợi nhuận cao (26%) nhờ công nghệ độc quyền và hệ sinh thái khép kín",
      description: "Apple là biểu tượng của giá trị thặng dư siêu ngạch trong kỷ nguyên số. Với hệ sinh thái khép kín và công nghệ độc quyền, Apple duy trì biên lợi nhuận vượt trội 26% - cao hơn hầu hết các đối thủ trong ngành. Chiến lược tích hợp phần cứng, phần mềm và dịch vụ đã tạo ra rào cản cạnh tranh khó vượt qua."
    },
    {
      id: 'tesla',
      name: "Tesla",
      subtitle: "Xe điện và tự động hóa",
      year: "2025",
      image: "https://www.logoai.com/uploads/articles/2024/03/05/tesla-logo-white-1709619543.jpg",
      imageDetail: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/1b1f/live/57cf8850-3881-11ef-b390-fb401932e653.jpg.webp",
      revenue: "Chi phí sản xuất giảm 6% xuống 35.100 USD/xe",
      profit: "2,5 tỷ USD (Quý III), tăng 8%",
      tech: "Xe điện, pin năng lượng, tự lái",
      surplus: "Là công ty duy nhất có lợi nhuận trong ngành xe điện Mỹ, biên lợi nhuận 17%",
      description: "Tesla đã cách mạng hóa ngành công nghiệp ô tô bằng công nghệ xe điện và tự lái. Là công ty duy nhất trong ngành xe điện Mỹ có lợi nhuận, Tesla tạo ra giá trị thặng dư siêu ngạch thông qua đổi mới công nghệ liên tục, tự động hóa sản xuất và tích hợp dọc trong chuỗi giá trị."
    },
    // {
    //   id: 'microsoft',
    //   name: "Microsoft",
    //   subtitle: "Điện toán đám mây và AI",
    //   year: "2025",
    //   image: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
    //   imageDetail: "https://www.pacisoft.vn/wp-content/uploads/2023/08/Microsoft-Azure-banner.jpg",
    //   revenue: "76,4 tỷ USD, tăng 18%",
    //   profit: "27,2 tỷ USD",
    //   tech: "Azure (75 tỷ USD doanh thu, tăng 34%), AI",
    //   surplus: "Tỷ suất lợi nhuận gộp Azure phi AI đạt 73%, cao nhất ngành",
    //   description: "Microsoft đang dẫn đầu cuộc đua điện toán đám mây và AI với nền tảng Azure. Tỷ suất lợi nhuận gộp 73% của Azure thể hiện giá trị thặng dư siêu ngạch khổng lồ từ việc đầu tư sớm vào hạ tầng đám mây và tích hợp AI, tạo ra lợi thế cạnh tranh bền vững."
    // }
  ]

  const CompanyCard = ({ company, onClick }) => (
    <div 
      onClick={() => onClick(company)}
      style={{
        background: 'rgba(20, 20, 40, 0.6)',
        border: '1px solid rgba(138, 43, 226, 0.3)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.6)'
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 12px 48px rgba(138, 43, 226, 0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}>
      <div style={{
        width: '100%',
        height: '280px',
        background: 'rgba(10, 10, 20, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(138, 43, 226, 0.3)'
      }}>
        {company.image ? (
          <img src={company.image} alt={company.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ color: '#666', fontSize: '3rem' }}>🏢</div>
        )}
      </div>
      
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          color: '#da70d6',
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
          fontWeight: '700'
        }}>
          {company.name}
        </h3>
        
        <p style={{ color: '#9370db', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          {company.year}
        </p>
        
        <p style={{
          color: '#ba68c8',
          fontSize: '1.1rem',
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          {company.subtitle}
        </p>
        
        <div style={{
          marginTop: 'auto',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(218, 112, 214, 0.2), rgba(138, 43, 226, 0.2))',
          borderRadius: '8px',
          textAlign: 'center',
          fontWeight: '600',
          color: '#da70d6',
          border: '1px solid rgba(138, 43, 226, 0.3)'
        }}>
          Khám phá →
        </div>
      </div>
    </div>
  )

  const CompanyDetail = ({ company, onBack }) => (
    <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
      <button
        onClick={onBack}
        style={{
          background: 'rgba(138, 43, 226, 0.2)',
          border: '1px solid rgba(138, 43, 226, 0.4)',
          borderRadius: '8px',
          padding: '0.75rem 1.5rem',
          color: '#da70d6',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '2rem',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(138, 43, 226, 0.3)'
          e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.6)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(138, 43, 226, 0.2)'
          e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.4)'
        }}
      >
        ← Quay lại danh sách
      </button>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        gap: '2rem',
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr'
        }
      }}>
        <div>
          <div style={{
            width: '100%',
            height: 'auto',
            background: 'rgba(10, 10, 20, 0.5)',
            borderRadius: '12px',
            border: '1px solid rgba(138, 43, 226, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '1rem'
          }}>
            {company.imageDetail || company.image ? (
              <img src={company.imageDetail || company.image} alt={company.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              <div style={{ color: '#666', fontSize: '5rem' }}>🏢</div>
            )}
          </div>
        </div>

        <div>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem', marginRight: '1rem' }}>📊</span>
            <h2 style={{
              display: 'inline',
              color: '#da70d6',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              {company.name}
            </h2>
          </div>

          <p style={{ color: '#9370db', fontSize: '1.1rem', marginBottom: '1rem' }}>
            {company.year}
          </p>

          <div style={{
            background: 'rgba(138, 43, 226, 0.15)',
            border: '1px solid rgba(138, 43, 226, 0.3)',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#ba68c8', fontSize: '1.3rem', marginBottom: '1rem' }}>
              {company.subtitle}
            </h3>
          </div>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#c0c0c0',
            marginBottom: '2rem',
            textAlign: 'justify'
          }}>
            {company.description}
          </p>

          <div style={{
            background: 'rgba(20, 20, 40, 0.6)',
            border: '1px solid rgba(138, 43, 226, 0.3)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ color: '#da70d6', fontSize: '1.3rem', marginBottom: '1rem' }}>
              📈 Thông tin tài chính
            </h3>
            <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c0c0c0' }}>
              <p style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#da70d6' }}>Doanh thu:</strong> {company.revenue}
              </p>
              <p style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#da70d6' }}>Lợi nhuận:</strong> {company.profit}
              </p>
              <p style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#da70d6' }}>Công nghệ áp dụng:</strong> {company.tech}
              </p>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(147, 112, 219, 0.1))',
            border: '2px solid rgba(138, 43, 226, 0.4)',
            borderRadius: '12px',
            padding: '1.5rem',
            borderLeft: '5px solid #8a2be2'
          }}>
            <h3 style={{ color: '#da70d6', fontSize: '1.3rem', marginBottom: '1rem' }}>
              💎 Giá trị thặng dư siêu ngạch
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e0e0e0' }}>
              {company.surplus}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  if (selectedCompany) {
    return (
      <div className="page-container">
        <CompanyDetail company={selectedCompany} onBack={() => setSelectedCompany(null)} />
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Ví Dụ - Thặng Dư Siêu Ngạch</h1>
      <div className="page-content">
        <h2> Ví dụ từ các doanh nghiệp tiên phong</h2>
        
        <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Ví dụ từ các doanh nghiệp Việt Nam</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {vietnamCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} onClick={setSelectedCompany} />
          ))}
        </div>

        <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>2.2. Ví dụ từ doanh nghiệp toàn cầu </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {worldCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} onClick={setSelectedCompany} />
          ))}
        </div>

        <blockquote style={{ marginTop: '3rem' }}>
          <strong>Kết luận:</strong> Các doanh nghiệp tiên phong trong việc áp dụng công nghệ mới đã tạo ra giá trị thặng dư siêu ngạch đáng kể, với biên lợi nhuận vượt trội so với trung bình ngành. Đây là minh chứng rõ ràng cho vai trò của đổi mới công nghệ trong việc gia tăng lợi nhuận và tạo lợi thế cạnh tranh.
        </blockquote>
      </div>
    </div>
  )
}

export default ViDu