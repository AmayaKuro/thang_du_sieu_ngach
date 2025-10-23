import '../pages/PageTemplate.css'

function KhaiNiem() {
  return (
    <>
      <div className="page-container">
        <h1 className="page-title">Khái Niệm - Thặng Dư Siêu Ngạch</h1>

        {/* Ôn bài cũ Section */}
        <section className="review-section">
          <h2 className="section-heading">📚 Ôn Bài Cũ</h2>

          <div className="diagram-container">
            <h3 className="diagram-title">
              <span className="icon-definition">�</span>
              Giá Trị Thặng Dư Tương Đối
            </h3>

            <div className="flowchart">
              <div className="flow-row">
                <div className="flow-box start-box">
                  <div className="box-icon">🏭</div>
                  <div className="box-content">
                    <h4>Điểm Xuất Phát</h4>
                    <p>Quy trình sản xuất ban đầu</p>
                  </div>
                </div>

                <div className="flow-arrow">→</div>

                <div className="flow-box process-box">
                  <div className="box-icon">📈</div>
                  <div className="box-content">
                    <h4>Nâng Cao</h4>
                    <p>Năng suất lao động</p>
                  </div>
                </div>
              </div>

              <div className="flow-divider">
                <div className="divider-line"></div>
                <span className="divider-text">KẾT QUẢ</span>
                <div className="divider-line"></div>
              </div>

              <div className="flow-row">
                <div className="flow-box result-box">
                  <div className="box-icon">📉</div>
                  <div className="box-content">
                    <h4>Hạ Thấp</h4>
                    <p>Tư liệu sinh hoạt</p>
                  </div>
                </div>

                <div className="flow-arrow">→</div>

                <div className="flow-box end-box">
                  <div className="box-icon">💰</div>
                  <div className="box-content">
                    <h4>Tăng Thặng Dư</h4>
                    <p>Cho chủ sở hữu tư bản</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="diagram-summary">
              <p>
                <strong>Giá trị thặng dư tương đối: </strong> Tăng năng suất
                <span className="math-symbol">⇒</span> Giảm giá tư liệu sinh hoạt
                <span className="math-symbol">⇒</span> Tăng thặng dư
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Separator */}
      <div className="section-divider">
        <div className="divider-line-full"></div>
      </div>

      {/* Full Screen Quote Landing Page */}
      <div className="quote-landing-page">
        <div className="quote-landing-content">
          <div className="quote-landing-icon">💭</div>
          <blockquote className="quote-landing-text">
            <p className="quote-main-text">
              Giá trị thặng dư siêu ngạch là hình thức
              <span className="highlight-landing"> biến tướng </span>
              của giá trị thặng dư tương đối
            </p>
            <footer className="quote-author">
              <cite>— Karl Marx</cite>
            </footer>
          </blockquote>
          <div className="scroll-indicator">
            <span>Cuộn xuống để tiếp tục</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </div>

      <div className="page-container">
        {/* Main Theory Section */}
        <section className="theory-section">
          <h2 className="section-heading">🎯 Lý Thuyết Cơ Bản</h2>

          {/* Definition Card */}
          <div className="theory-card definition-card">
            <div className="card-header">
              <span className="card-icon">📖</span>
              <h3>Định Nghĩa</h3>
            </div>
            <div className="card-body">
              <p>
                <strong className="term-highlight">Giá trị thặng dư siêu ngạch</strong> là phần
                giá trị thặng dư thu được do <span className="highlight">áp dụng công nghệ mới sớm hơn</span> các
                xí nghiệp khác làm cho <span className="highlight">giá trị cá biệt của hàng hóa</span> thấp
                hơn giá trị thị trường của nó.
              </p>
            </div>
          </div>

          {/* Mechanism Card */}
          <div className="theory-card mechanism-card">
            <div className="card-header">
              <span className="card-icon">⚙️</span>
              <h3>Cơ Chế Hoạt Động</h3>
            </div>
            <div className="card-body">
              <div className="mechanism-flow">
                <div className="mech-step">
                  <div className="step-number">1</div>
                  <p>
                    Nhà tư bản <span className="highlight">bỏ ra ít chi phí hơn</span> các
                    nhà tư bản khác nhờ công nghệ tiên tiến
                  </p>
                </div>
                <div className="mech-arrow">⬇</div>
                <div className="mech-step">
                  <div className="step-number">2</div>
                  <p>
                    Vẫn <span className="highlight">bán được với giá như</span> các nhà
                    tư bản khác (giá thị trường)
                  </p>
                </div>
                <div className="mech-arrow">⬇</div>
                <div className="mech-step highlight-step">
                  <div className="step-number">3</div>
                  <p>
                    <strong>Thu được giá trị thặng dư cao hơn</strong> so với đối thủ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Characteristics Grid */}
          <div className="characteristics-grid">
            <div className="char-card temporary-card">
              <div className="char-icon">⏱️</div>
              <h4>Tính Tạm Thời</h4>
              <p>
                Khi <span className="highlight">số đông các xí nghiệp đều đổi mới</span> kĩ
                thuật và công nghệ một cách phổ biến thì giá trị thặng dư siêu ngạch
                của doanh nghiệp đó <strong>sẽ không còn nữa</strong>.
              </p>
              <div className="char-label temporary-label">Cấp Xí Nghiệp</div>
            </div>

            <div className="char-card persistent-card">
              <div className="char-icon">♾️</div>
              <h4>Tính Thường Xuyên</h4>
              <p>
                Trong từng xí nghiệp, giá trị thặng dư siêu ngạch là
                một <span className="highlight">hiện tượng tạm thời</span>, nhưng
                <span className="highlight"> phạm vi xã hội</span> thì nó lại
                trong <strong>thường xuyên tồn tại</strong>.
              </p>
              <div className="char-label persistent-label">Cấp Xã Hội</div>
            </div>
          </div>

          {/* Motivation Card */}
          <div className="theory-card motivation-card">
            <div className="card-header">
              <span className="card-icon">🚀</span>
              <h3>Động Lực Đổi Mới</h3>
            </div>
            <div className="card-body">
              <div className="motivation-content">
                <div className="motivation-icon">⚡</div>
                <p>
                  Giá trị thặng dư siêu ngạch là <strong className="emphasis-text">động lực
                    mạnh nhất</strong> để thúc đẩy các nhà tư bản:
                </p>
                <ul className="motivation-list">
                  <li>
                    <span className="list-icon">✓</span>
                    Đổi mới công nghệ liên tục
                  </li>
                  <li>
                    <span className="list-icon">✓</span>
                    Tăng năng suất lao động cá biệt
                  </li>
                  <li>
                    <span className="list-icon">✓</span>
                    Đánh bại đối thủ trong cạnh tranh
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="concept-summary">
            <div className="summary-icon">💡</div>
            <div className="summary-content">
              <h4>Tóm Tắt Khái Niệm</h4>
              <p>
                <strong>Giá trị thặng dư siêu ngạch</strong> là lợi nhuận bổ sung mà doanh nghiệp
                tiên phong thu được nhờ áp dụng công nghệ mới trước đối thủ. Mặc dù chỉ tồn tại
                tạm thời ở từng doanh nghiệp, nó là động lực thúc đẩy sự đổi mới công nghệ không ngừng
                trong toàn bộ nền kinh tế.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default KhaiNiem