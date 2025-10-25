import '../pages/PageTemplate.css'

function YNghia() {
  return (
    <div className="page-container">
      {/* ✅ SỬA TIÊU ĐỀ */}
      <h1 className="section-heading">
        <span className="icon-definition">💎</span>
        Giá Trị Thặng Dư Siêu Ngạch
      </h1>
      
      <div className="page-content">
        {/* Diagram - Ý nghĩa kinh tế */}
        <div className="diagram-container">
          <div className="diagram-title">
            <span className="icon-definition">💼</span>
            Ý Nghĩa Kinh Tế
          </div>
          
          <div className="flowchart">
            <div className="flow-row">
              <div className="flow-box start-box">
                <div className="box-icon">🚀</div>
                <div className="box-content">
                  <h4>Đổi Mới Công Nghệ</h4>
                  <p>Thúc đẩy đổi mới công nghệ, nâng cao năng suất lao động</p>
                </div>
              </div>
              
              <span className="flow-arrow">→</span>
              
              <div className="flow-box process-box">
                <div className="box-icon">⚡</div>
                <div className="box-content">
                  <h4>Động Lực Cạnh Tranh</h4>
                  <p>Tạo động lực cạnh tranh và tích lũy tư bản</p>
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              margin: '2.5rem 0',
              padding: '0 2rem'
            }}>
              <div style={{
                flex: 1,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #8a2be2, #da70d6)',
              }}></div>
              
              <div style={{
                background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(147, 112, 219, 0.2))',
                border: '2px solid rgba(138, 43, 226, 0.6)',
                borderRadius: '50px',
                padding: '0.8rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#da70d6',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 15px rgba(138, 43, 226, 0.4)',
              }}>
                KẾT QUẢ
              </div>
              
              <div style={{
                flex: 1,
                height: '2px',
                background: 'linear-gradient(90deg, #da70d6, #8a2be2, transparent)',
              }}></div>
            </div>

            <div className="flow-row">
              <div className="flow-box result-box">
                <div className="box-icon">🏭</div>
                <div className="box-content">
                  <h4>Chuyển Dịch Cơ Cấu</h4>
                  <p>Góp phần chuyển dịch cơ cấu kinh tế, công nghiệp hóa, hiện đại hóa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section - Tác động xã hội */}
        <div className="review-section">
          <h2 className="section-heading">
            <span className="icon-definition">🌍</span>
            Tác Động Xã Hội
          </h2>

          <div className="characteristics-grid">
            <div className="char-card positive-char">
              <div className="char-header">
                <div className="char-icon">✅</div>
                <h4>Tích Cực</h4>
              </div>
              <div className="char-content">
                <ul className="motivation-list">
                  <li><strong>Năng suất cao:</strong> Gia tăng hiệu quả sản xuất</li>
                  <li><strong>Thu nhập tăng:</strong> Cải thiện đời sống người lao động</li>
                  <li><strong>Phát triển công nghệ:</strong> Thúc đẩy tiến bộ khoa học kỹ thuật</li>
                </ul>
              </div>
            </div>

            <div className="char-card negative-char">
              <div className="char-header">
                <div className="char-icon">⚠️</div>
                <h4>Tiêu Cực</h4>
              </div>
              <div className="char-content">
                <ul className="motivation-list">
                  <li><strong>Chênh lệch giàu nghèo:</strong> Khoảng cách thu nhập gia tăng</li>
                  <li><strong>Thất nghiệp cơ cấu:</strong> Tự động hóa thay thế lao động</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="definition-box">
            <div className="definition-content">
              <p>
                <span className="highlight">→ Giải pháp:</span> Cần định hướng công nghệ theo hướng 
                <span className="highlight"> phát triển bền vững</span>, 
                <span className="highlight"> con người là trung tâm</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Kết luận */}
        <div className="concept-summary">
          <div className="summary-icon">🎯</div>
          <div className="summary-content">
            <h4>Kết Luận</h4>
            <p>
              Theo đuổi giá trị thặng dư siêu ngạch = theo đuổi 
              <span className="highlight"> sáng tạo</span>, 
              <span className="highlight"> năng suất</span>, và 
              <span className="highlight"> tiến bộ xã hội</span>.
            </p>
            <p className="emphasis-text">
              Là động lực nội tại cho sự phát triển của nền kinh tế trong kỷ nguyên 4.0.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YNghia