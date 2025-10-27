import '../pages/PageTemplate.css'
import './AIUsage.css'
import ChatGPTLogo from '../assets/chatgpt.svg'
import GithubCopilotLogo from '../assets/githubcopilot.svg'
import ClaudeLogo from '../assets/claude.svg'

function AIUsage() {
  return (
    <div className="page-container">
      <h1 className="page-title">AI Usage - Minh Bạch Sử Dụng Công Nghệ AI</h1>

      {/* Academic Integrity Commitment */}
      <section className="commitment-section">
        <div className="commitment-banner">
          <div className="commitment-icon">📜</div>
          <div className="commitment-content">
            <h2>Cam Kết Liêm Chính Học Thuật</h2>
            <p className="commitment-text">
              Chúng tôi cam kết rằng <strong>AI chỉ đóng vai trò hỗ trợ</strong> trong quá trình
              nghiên cứu và phát triển dự án này. Tất cả nội dung cuối cùng đã được{' '}
              <strong>kiểm chứng, chỉnh sửa và chịu trách nhiệm</strong> bởi nhóm sinh viên.
              AI không thay thế hoàn toàn công việc học thuật của chúng tôi.
            </p>
          </div>
        </div>
      </section>

      {/* AI Tools Used */}
      <section className="ai-tools-section">
        <h2 className="section-heading">🤖 Công Cụ AI Được Sử Dụng</h2>

        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <img src={ChatGPTLogo} alt="ChatGPT Logo" />
              </div>
              <h3>ChatGPT</h3>
            </div>
            <div className="tool-body">
              <div className="tool-purpose">
                <strong>Mục đích:</strong>
                <ul>
                  <li>Tạo sơ đồ minh họa khái niệm</li>
                  <li>Gợi ý cấu trúc nội dung</li>
                  <li>Hỗ trợ code React components</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <img src={GithubCopilotLogo} alt="Github Copilot Logo" />
              </div>
              <h3>GitHub Copilot</h3>
            </div>
            <div className="tool-body">
              <div className="tool-purpose">
                <strong>Mục đích:</strong>
                <ul>
                  <li>Hỗ trợ viết CSS animations</li>
                  <li>Tối ưu code JavaScript/React</li>
                  <li>Gợi ý best practices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <img src={ClaudeLogo} alt="Claude AI Logo" />
              </div>
              <h3>Claude AI</h3>
            </div>
            <div className="tool-body">
              <div className="tool-purpose">
                <strong>Mục đích:</strong>
                <ul>
                  <li>Phân tích và tóm tắt tài liệu</li>
                  <li>Kiểm tra logic nội dung</li>
                  <li>Đề xuất cải tiến giao diện</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Prompts & Results */}
      <section className="prompts-section">
        <h2 className="section-heading">📝 Prompt Chính & Kết Quả</h2>

        <div className="prompt-list">
          {/* Prompt 1 */}
          <div className="prompt-item">
            <div className="prompt-header">
              <span className="prompt-number">1</span>
              <h3>Tạo Sơ Đồ Khái Niệm</h3>
            </div>
            <div className="prompt-content">
              <div className="prompt-box">
                <h4>Prompt:</h4>
                <p className="prompt-text">
                  "Tạo một sơ đồ flowchart minh họa quá trình hình thành giá trị thặng dư tương đối,
                  bao gồm: điểm xuất phát từ quy trình sản xuất ban đầu, nâng cao năng suất lao động,
                  hạ thấp giá trị tư liệu sinh hoạt, và kết quả là tăng thặng dư cho chủ tư bản."
                </p>
              </div>
              <div className="result-box">
                <h4>Kết quả AI:</h4>
                <p>Sơ đồ flowchart với 4 bước logic và mũi tên chỉ dẫn</p>
              </div>
              <div className="edit-box">
                <h4>Chỉnh sửa của sinh viên:</h4>
                <ul>
                  <li>Điều chỉnh màu sắc theo theme tím của dự án</li>
                  <li>Thêm animations CSS để tăng tính tương tác</li>
                  <li>Kiểm chứng nội dung với Giáo trình</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prompt 2 */}
          <div className="prompt-item">
            <div className="prompt-header">
              <span className="prompt-number">2</span>
              <h3>Định Nghĩa Giá Trị Thặng Dư Siêu Ngạch</h3>
            </div>
            <div className="prompt-content">
              <div className="prompt-box">
                <h4>Prompt:</h4>
                <p className="prompt-text">
                  "Giải thích định nghĩa giá trị thặng dư siêu ngạch theo quan điểm của Karl Marx,
                  tập trung vào mối quan hệ giữa giá trị cá biệt và giá trị thị trường."
                </p>
              </div>
              <div className="result-box">
                <h4>Kết quả AI:</h4>
                <p>
                  Định nghĩa tổng quát về giá trị thặng dư siêu ngạch và mối quan hệ với giá trị cá biệt và giá trị thị trường
                </p>
              </div>
              <div className="edit-box">
                <h4>Chỉnh sửa của sinh viên:</h4>
                <ul>
                  <li>Dịch và hiệu chỉnh thuật ngữ sang tiếng Việt chính xác</li>
                  <li>Đối chiếu với "Tư bản" - Karl Marx</li>
                  <li>Tham khảo thêm từ vietnambiz.vn để có định nghĩa phù hợp bối cảnh VN</li>
                  <li>Thêm ví dụ minh họa từ tài liệu giảng viên</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prompt 3 */}
          {/* <div className="prompt-item">
            <div className="prompt-header">
              <span className="prompt-number">3</span>
              <h3>Tạo Interactive Quiz</h3>
            </div>
            <div className="prompt-content">
              <div className="prompt-box">
                <h4>Prompt:</h4>
                <p className="prompt-text">
                  "Tạo một bộ câu hỏi trắc nghiệm tương tác về giá trị thặng dư siêu ngạch,
                  bao gồm câu hỏi định nghĩa, cơ chế hoạt động, và đặc điểm."
                </p>
              </div>
              <div className="result-box">
                <h4>Kết quả AI:</h4>
                <p>10 câu hỏi trắc nghiệm với 4 đáp án mỗi câu</p>
              </div>
              <div className="edit-box">
                <h4>Chỉnh sửa của sinh viên:</h4>
                <ul>
                  <li>Lọc và chọn 5 câu hỏi phù hợp nhất</li>
                  <li>Kiểm chứng đáp án với Giáo trình LLCT</li>
                  <li>Thêm giải thích chi tiết cho mỗi đáp án</li>
                  <li>Code React component với state management tự viết</li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* Prompt 4 */}
          <div className="prompt-item">
            <div className="prompt-header">
              <span className="prompt-number">4</span>
              <h3>Ví Dụ Thực Tế</h3>
            </div>
            <div className="prompt-content">
              <div className="prompt-box">
                <h4>Prompt:</h4>
                <p className="prompt-text">
                  "Đề xuất các ví dụ thực tế về doanh nghiệp thu được giá trị thặng dư siêu ngạch
                  nhờ áp dụng công nghệ mới trước đối thủ."
                </p>
              </div>
              <div className="result-box">
                <h4>Kết quả AI:</h4>
                <p>Gợi ý các ví dụ chung về công nghệ, sản xuất tự động hóa</p>
              </div>
              <div className="edit-box">
                <h4>Chỉnh sửa của sinh viên:</h4>
                <ul>
                  <li>Tìm kiếm và sử dụng ví dụ thực từ bài báo Việt Nam</li>
                  <li>Tham khảo case study từ tài liệu giảng viên</li>
                  <li>Phân tích chi tiết hơn về cơ chế thu lợi nhuận</li>
                  <li>Liên hệ với bối cảnh kinh tế Việt Nam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Source Verification */}
      <section className="verification-section">
        <h2 className="section-heading">✅ Kiểm Chứng Nguồn Chính Thống</h2>

        <div className="source-grid">
          <div className="source-card primary-source">
            <div className="source-header">
              <div className="source-icon">📚</div>
              <h3>Nguồn Chính</h3>
            </div>
            <div className="source-body">
              <ul className="source-list">
                <li>
                  <strong>Giáo trình Lý Luận Chính Trị</strong>
                  <p>Chương về Học thuyết giá trị thặng dư</p>
                  <span className="verified-badge">✓ Đã kiểm chứng</span>
                </li>
                <li>
                  <strong>Tư Bản - Karl Marx</strong>
                  <p>Bản dịch tiếng Việt</p>
                  <span className="verified-badge">✓ Đã kiểm chứng</span>
                </li>
                <li>
                  <strong>Tài liệu giảng dạy</strong>
                  <p>Của giảng viên môn Lý Luận Chính Trị</p>
                  <span className="verified-badge">✓ Đã kiểm chứng</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="source-card secondary-source">
            <div className="source-header">
              <div className="source-icon">🔗</div>
              <h3>Nguồn Tham Khảo</h3>
            </div>
            <div className="source-body">
              <ul className="source-list">
                <li>
                  <strong>VietnamBiz.vn</strong>
                  <p>
                    <a
                      href="https://vietnambiz.vn/gia-tri-thang-du-sieu-ngach-extra-surplus-value-la-gi-20191024161643447.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Định nghĩa và ví dụ minh họa
                    </a>
                  </p>
                  <span className="reference-badge">Tham khảo</span>
                </li>
                <li>
                  <strong>Bài báo chuyên ngành</strong>
                  <p>Về ứng dụng công nghệ trong sản xuất</p>
                  <span className="reference-badge">Tham khảo</span>
                </li>
                     <li>
                  <strong>thitruongtaichinhtiente.vn</strong>
                  <p>
                    <a
                      href="https://thitruongtaichinhtiente.vn/6-thang-fpt-bao-loi-nhuan-truoc-thue-6-166-ty-dong-tang-truong-18-5-68984.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Về thu thập báo cáo doanh thu doanh nghiệp.
                    </a>
                  </p>
                  <span className="reference-badge">Tham khảo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs Student Work */}
      <section className="division-section">
        <h2 className="section-heading">🔀 Phân Định AI Output vs Công Việc Sinh Viên</h2>

        <div className="division-table">
          <div className="table-header">
            <div className="header-cell ai-header">AI Output</div>
            <div className="header-cell student-header">Sinh Viên Thực Hiện</div>
          </div>

          <div className="table-row">
            <div className="cell ai-cell">
              <span className="cell-icon">🤖</span>
              <p>Gợi ý cấu trúc flowchart</p>
            </div>
            <div className="cell student-cell">
              <span className="cell-icon">👨‍💻</span>
              <p>Code React component, thêm animations, kiểm chứng nội dung</p>
            </div>
          </div>

          <div className="table-row">
            <div className="cell ai-cell">
              <span className="cell-icon">🤖</span>
              <p>Định nghĩa ban đầu (tiếng Anh)</p>
            </div>
            <div className="cell student-cell">
              <span className="cell-icon">👨‍💻</span>
              <p>Dịch, hiệu chỉnh thuật ngữ, đối chiếu với giáo trình</p>
            </div>
          </div>

          <div className="table-row">
            <div className="cell ai-cell">
              <span className="cell-icon">🤖</span>
              <p>Tạo câu hỏi quiz cơ bản</p>
            </div>
            <div className="cell student-cell">
              <span className="cell-icon">👨‍💻</span>
              <p>Chọn lọc, kiểm chứng đáp án, code interactive component</p>
            </div>
          </div>

          <div className="table-row">
            <div className="cell ai-cell">
              <span className="cell-icon">🤖</span>
              <p>Gợi ý CSS animations</p>
            </div>
            <div className="cell student-cell">
              <span className="cell-icon">👨‍💻</span>
              <p>Tùy chỉnh animations, responsive design, optimization</p>
            </div>
          </div>

          <div className="table-row">
            <div className="cell ai-cell">
              <span className="cell-icon">🤖</span>
              <p>Đề xuất ví dụ chung</p>
            </div>
            <div className="cell student-cell">
              <span className="cell-icon">👨‍💻</span>
              <p>Tìm ví dụ thực tế từ bài báo, phân tích chi tiết</p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibility Statement */}
      <section className="responsibility-section">
        <div className="responsibility-box">
          <div className="responsibility-icon">⚖️</div>
          <div className="responsibility-content">
            <h2>Tuyên Bố Trách Nhiệm</h2>
            <p>
              Nhóm sinh viên <strong>chịu hoàn toàn trách nhiệm</strong> về tính chính xác,
              đầy đủ và phù hợp của toàn bộ nội dung trong dự án. Mọi thông tin đã được:
            </p>
            <ul className="responsibility-list">
              <li>
                <span className="check-icon">✓</span>
                Kiểm chứng với nguồn tài liệu chính thống
              </li>
              <li>
                <span className="check-icon">✓</span>
                Chỉnh sửa và bổ sung bởi sinh viên
              </li>
              <li>
                <span className="check-icon">✓</span>
                Đảm bảo phù hợp với yêu cầu học thuật
              </li>
              <li>
                <span className="check-icon">✓</span>
                Không phụ thuộc hoàn toàn vào AI
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="summary-section">
        <div className="summary-card">
          <h2>📊 Tóm Tắt Sử Dụng AI</h2>
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">30%</div>
              <div className="stat-label">AI Hỗ trợ</div>
            </div>
            <div className="stat-divider">+</div>
            <div className="stat-item">
              <div className="stat-number">70%</div>
              <div className="stat-label">Sinh viên thực hiện</div>
            </div>
            <div className="stat-divider">=</div>
            <div className="stat-item highlight-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Sản phẩm chất lượng</div>
            </div>
          </div>
          <p className="summary-text">
            AI được sử dụng như một <strong>công cụ hỗ trợ</strong>, không phải giải pháp thay thế.
            Mọi output của AI đều được <strong>kiểm chứng, chỉnh sửa và cải tiến</strong> bởi sinh viên
            để đảm bảo tính chính xác và phù hợp với yêu cầu học thuật.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AIUsage
