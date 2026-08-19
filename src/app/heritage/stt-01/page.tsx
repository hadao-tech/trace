import type { Metadata } from "next";
import Image from "next/image";
import { Award, Check, ChevronDown, Diamond, Fingerprint, Landmark, MapPin, PackageCheck, ScrollText, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "Dấu ấn Hoàng triều · STT-01", description: "Hồ sơ sản phẩm văn hóa lấy cảm hứng từ mũ thượng triều thời Nguyễn." };
const BASE = "/trace";
const details = [
  ["01", "Nền mũ", "Sắc đen huyền, viền kim loại ánh vàng."],
  ["02", "Cánh chuồn", "Hình rồng, mây cách điệu và chuỗi hạt."],
  ["03", "Tâm điểm", "Mặt trời đỏ, mây ngũ sắc và tua son."],
];
const traceSteps = [
  ["01.08.2026", "Nghiên cứu di sản", "Hà Nội", "Đối chiếu hình thái mũ thượng triều cùng hệ biểu tượng rồng, mây, mặt trời và chuỗi hạt."],
  ["05.08.2026", "Phát triển thiết kế", "Xưởng sáng tạo", "Chuyển hóa ngôn ngữ cung đình thành vật phẩm lưu niệm ba lớp, phù hợp đời sống đương đại."],
  ["12.08.2026", "Chế tác thủ công", "Xưởng hoàn thiện", "Tạo hình, phủ màu, mạ viền, đính chi tiết trang trí và lắp nam châm."],
  ["15.08.2026", "Kiểm tra chất lượng", "Bộ phận QC", "Kiểm tra bề mặt, màu sắc, độ chắc của chi tiết, lực bám và quy cách đóng gói."],
];

export default function HeritageProductPage() {
  return <main className="heritage-page">
    <header className="site-header"><div className="page-shell header-inner">
      <a href="#top" className="brand"><span className="brand-seal"><Landmark size={18}/></span><span><b>Dấu Ấn</b><small>Di sản Việt</small></span></a>
      <a href="#certificate" className="header-status"><ShieldCheck size={16}/> Hồ sơ sản phẩm</a>
    </div></header>

    <section id="top" className="hero"><div className="hero-pattern"/><div className="page-shell hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={15}/> Tuyển phẩm văn hóa cung đình</p>
        <h1>Dấu ấn<br/><em>Hoàng triều</em></h1>
        <p className="hero-lead">Một lát cắt di sản triều Nguyễn được kể lại qua ngôn ngữ thủ công đương đại.</p>
        <div className="hero-meta"><span><small>Mã sản phẩm</small><strong>STT-01</strong></span><i/><span><small>Phiên bản</small><strong>Di sản Việt</strong></span></div>
        <a href="#story" className="discover-link">Khám phá câu chuyện <ChevronDown size={18}/></a>
      </div>
      <div className="hero-visual">
        <div className="edition-stamp"><span>STT</span><b>01</b></div>
        <div className="hero-image-frame"><Image src={`${BASE}/heritage/stt-01-product.png`} alt="Miếng dán tủ lạnh Dấu ấn Hoàng triều" width={1300} height={1217} priority sizes="(max-width: 900px) 100vw, 56vw"/></div>
        <div className="verified-chip"><span><Check size={15}/></span><p><small>Hồ sơ đã ghi nhận</small><b>Thông tin truy xuất</b></p></div>
      </div>
    </div></section>

    <section className="quick-facts"><div className="page-shell facts-grid">
      <div><Diamond/><span><small>Kích thước dự kiến</small><b>70 × 60 × 8 mm</b></span></div>
      <div><PackageCheck/><span><small>Công năng</small><b>Vật phẩm nam châm</b></span></div>
      <div><Fingerprint/><span><small>Mã truy xuất</small><b>STT-01-HERITAGE</b></span></div>
    </div></section>

    <section id="story" className="story-section page-shell">
      <div className="section-heading"><p className="eyebrow dark">Câu chuyện thiết kế</p><h2>Từ bảo vật cung đình<br/>đến ký ức mang về</h2><p>Hình tượng chiếc mũ thượng triều được chắt lọc thành một vật phẩm nhỏ gọn—giữ tinh thần trang nghiêm, giàu biểu tượng nhưng gần gũi với đời sống hôm nay.</p></div>
      <div className="story-layout">
        <div className="detail-image"><Image src={`${BASE}/heritage/stt-01-product.png`} alt="Chi tiết họa tiết rồng và mây" width={1300} height={1217} sizes="(max-width: 900px) 100vw, 48vw"/><span>Chi tiết tạo hình · phiên bản minh họa</span></div>
        <div className="details-panel"><p className="panel-kicker">Ngôn ngữ tạo hình</p>
          {details.map(([number,title,copy])=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          <blockquote>“Giữ hồn cốt di sản, kể bằng một hình thức mới.”</blockquote>
        </div>
      </div>
    </section>

    <section className="materials-section"><div className="page-shell materials-grid">
      <div className="materials-intro"><p className="eyebrow gold">Chất liệu & hoàn thiện</p><h2>Sắc son.<br/>Ánh kim.<br/>Nét ngọc.</h2><p>Bảng màu gợi nhắc mỹ thuật cung đình, tạo chiều sâu thị giác và vẻ trang trọng cho một vật phẩm lưu niệm nhỏ.</p></div>
      <div className="material-cards">
        <article><span className="swatch black"/><small>01</small><h3>Đen huyền</h3><p>Làm nền, tôn đường nét ánh kim.</p></article>
        <article><span className="swatch gold"/><small>02</small><h3>Vàng thếp</h3><p>Gợi vẻ uy nghi của mỹ thuật cung đình.</p></article>
        <article><span className="swatch jade"/><small>03</small><h3>Xanh ngọc</h3><p>Cân bằng sắc độ, tạo vẻ thanh nhã.</p></article>
        <article><span className="swatch vermilion"/><small>04</small><h3>Đỏ son</h3><p>Tạo điểm nhấn ở tâm và tua trang trí.</p></article>
      </div>
    </div></section>

    <section className="concept-section"><div className="page-shell">
      <div className="concept-heading"><div><p className="eyebrow dark">Tư liệu sản phẩm</p><h2>Từ ý tưởng đến vật phẩm</h2></div><p>Bảng phát triển ý tưởng STT-01<br/><span>Vuốt ngang để xem trên điện thoại</span></p></div>
      <div className="concept-scroll"><Image src={`${BASE}/heritage/stt-01-concept-board.png`} alt="Bảng ý tưởng thiết kế STT-01" width={960} height={540} sizes="(max-width: 768px) 860px, 100vw"/></div>
    </div></section>

    <section id="trace" className="trace-section page-shell">
      <div className="trace-heading"><p className="eyebrow dark">Hành trình sản phẩm</p><h2>Mỗi công đoạn,<br/>một dấu xác thực</h2><div className="trace-code"><Fingerprint/><span><small>Mã hồ sơ</small><b>STT-01-HERITAGE</b></span></div></div>
      <div className="timeline">{traceSteps.map(([date,title,place,copy],index)=><article key={title}><div className="timeline-mark"><span>{String(index+1).padStart(2,"0")}</span></div><div className="timeline-copy"><time>{date}</time><h3>{title}</h3><p>{copy}</p><small><MapPin size={13}/>{place}</small></div></article>)}</div>
    </section>

    <section id="certificate" className="certificate-section"><div className="page-shell certificate-card">
      <div className="certificate-title"><div className="certificate-emblem"><Award size={34}/></div><p className="eyebrow gold">Hồ sơ văn hóa</p><h2>Minh bạch<br/>giá trị di sản</h2><p>Thông tin xác nhận chỉ được công bố khi có văn bản và mã đối chiếu chính thức từ đơn vị có thẩm quyền.</p></div>
      <div className="certificate-body"><div className="museum-line"><Landmark/><div><small>Đơn vị văn hóa được nêu trong hồ sơ thiết kế</small><h3>Bảo tàng Lịch sử Quốc gia</h3></div></div><div className="certificate-fields"><div><small>Số chứng nhận</small><b>Chưa cung cấp</b></div><div><small>Trạng thái đối chiếu</small><b>Chờ hồ sơ chính thức</b></div></div><div className="disclaimer"><ScrollText/><p>Trang giới thiệu không tự tuyên bố sản phẩm đã được bảo tàng chứng nhận khi chưa có văn bản xác minh chính thức.</p></div></div>
    </div></section>

    <footer className="footer"><div className="page-shell footer-inner"><div className="brand inverse"><span className="brand-seal"><Landmark size={18}/></span><span><b>Dấu Ấn</b><small>Di sản Việt</small></span></div><p>Dữ liệu mẫu phục vụ trình diễn<br/>Cập nhật 19.08.2026</p></div></footer>
    <nav className="mobile-nav"><a href="#trace"><Fingerprint/>Truy xuất</a><a href="#certificate"><Award/>Hồ sơ</a></nav>
  </main>;
}
