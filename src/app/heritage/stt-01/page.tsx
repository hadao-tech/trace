import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, ChevronDown, Fingerprint, Landmark, MapPin, ScrollText, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "STT-01 · Dấu ấn Hoàng triều | TraceGuard",
  description: "Hồ sơ truy xuất sản phẩm văn hóa lấy cảm hứng từ mũ thượng triều thời Nguyễn.",
};

const traceSteps = [
  { date: "01.08.2026", title: "Nghiên cứu tư liệu", place: "Hà Nội", text: "Đối chiếu hình thái mũ thượng triều, họa tiết rồng, mây, mặt trời và chuỗi hạt trang trí." },
  { date: "05.08.2026", title: "Phát triển thiết kế", place: "Xưởng thiết kế", text: "Chuyển hóa ngôn ngữ tạo hình cung đình thành vật phẩm lưu niệm ba lớp." },
  { date: "12.08.2026", title: "Chế tác & hoàn thiện", place: "Xưởng thủ công", text: "Tạo hình kim loại, phủ màu, mạ viền vàng, đính chi tiết và lắp nam châm." },
  { date: "15.08.2026", title: "Kiểm tra chất lượng", place: "Trung tâm kiểm định", text: "Kiểm tra kích thước, bề mặt, độ bám, độ chắc của chi tiết và đóng gói." },
];

export default function HeritageProductPage() {
  return (
    <main className="bg-[#f4efe5] text-[#261b15] -mt-16 pt-16">
      <section className="relative overflow-hidden bg-[#1f1512] text-[#f8ead0]">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#c9974d_0,transparent_30%),radial-gradient(circle_at_80%_60%,#7e151b_0,transparent_32%)]" />
        <div className="container-page relative py-6 flex items-center justify-between border-b border-[#d7b56d]/25">
          <Link href="/" className="font-serif text-xl tracking-wide">DẤU ẤN DI SẢN</Link>
          <span className="text-xs tracking-[.22em] text-[#d7b56d]">HỒ SƠ SẢN PHẨM · STT-01</span>
        </div>
        <div className="container-page relative grid lg:grid-cols-[.82fr_1.18fr] gap-10 items-center py-14 lg:py-20">
          <div className="z-10">
            <div className="flex items-center gap-2 text-[#d7b56d] text-sm tracking-[.18em]"><Landmark size={18}/> VĂN HÓA CUNG ĐÌNH VIỆT NAM</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[.96] mt-6">Dấu ấn<br/><i className="font-normal text-[#d7b56d]">Hoàng triều</i></h1>
            <p className="mt-6 text-lg text-[#e8d9c2] max-w-lg leading-relaxed">Miếng dán tủ lạnh nghệ thuật lấy cảm hứng từ mũ thượng triều thời Nguyễn—một lát cắt di sản được kể lại bằng ngôn ngữ thủ công đương đại.</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="rounded-full border border-[#d7b56d]/50 px-4 py-2 text-sm">Mã STT-01</span>
              <span className="rounded-full border border-[#d7b56d]/50 px-4 py-2 text-sm">70 × 60 × 8 mm</span>
              <span className="rounded-full bg-[#f5e2b8] text-[#301d14] px-4 py-2 text-sm font-bold flex gap-2 items-center"><ShieldCheck size={16}/> Hồ sơ truy xuất</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-[#c9974d]/15 blur-3xl" />
            <Image src="/heritage/stt-01-product.png" alt="Sản phẩm Dấu ấn Hoàng triều" width={1300} height={1217} priority className="relative w-full rounded-[2rem] shadow-2xl shadow-black/40" />
          </div>
        </div>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-[1.15fr_.85fr] gap-8">
        <article className="rounded-[2rem] bg-[#fffaf0] border border-[#d8c8aa] p-7 md:p-10">
          <span className="text-[#8b2c25] text-sm font-bold tracking-[.18em]">CÂU CHUYỆN THIẾT KẾ</span>
          <h2 className="font-serif text-4xl mt-3">Từ bảo vật cung đình<br/>đến ký ức mang về</h2>
          <p className="text-[#5f5045] leading-8 mt-6">Theo bảng ý tưởng STT-01 do đơn vị thiết kế cung cấp, sản phẩm tham chiếu mũ thượng triều thời Nguyễn, niên đại thế kỷ XIX–XX. Hình tượng rồng, mây, mặt trời và tua hạt được chắt lọc để giữ tinh thần trang nghiêm nhưng gần gũi với đời sống hôm nay.</p>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[['01','Nền mũ','Nền đen, viền vàng'],['02','Cánh chuồn','Rồng, mây và chuỗi hạt'],['03','Trung tâm','Mặt trời đỏ, mây và tua rua']].map(([n,t,d])=><div key={n} className="border-t border-[#bfa982] pt-4"><span className="font-serif text-3xl text-[#a23b30]">{n}</span><h3 className="font-bold mt-3">{t}</h3><p className="text-sm text-[#75675d] mt-1">{d}</p></div>)}
          </div>
        </article>

        <aside className="rounded-[2rem] bg-[#7d1e23] text-white p-7 md:p-9 relative overflow-hidden">
          <Sparkles className="absolute right-6 top-6 text-[#e8c778]" />
          <span className="text-[#edcc85] text-xs tracking-[.18em]">CHẤT LIỆU & HOÀN THIỆN</span>
          <h2 className="font-serif text-3xl mt-3">Sắc son · Ánh kim</h2>
          <dl className="mt-8 space-y-5 text-sm">
            <div className="border-b border-white/20 pb-4"><dt className="text-[#e9c984]">Vật liệu</dt><dd className="mt-1 text-lg">Kim loại, kính, chi tiết giả ngọc trai</dd></div>
            <div className="border-b border-white/20 pb-4"><dt className="text-[#e9c984]">Bảng màu</dt><dd className="mt-1 text-lg">Đen huyền, vàng kim, xanh ngọc, đỏ son</dd></div>
            <div><dt className="text-[#e9c984]">Công năng</dt><dd className="mt-1 text-lg">Gắn tủ lạnh, bảng từ hoặc bề mặt kim loại</dd></div>
          </dl>
        </aside>
      </section>

      <section className="bg-[#ded4c0] py-16">
        <div className="container-page">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8"><div><span className="text-[#7d1e23] text-sm font-bold tracking-[.18em]">TƯ LIỆU THAM CHIẾU</span><h2 className="font-serif text-4xl mt-2">Từ phác thảo đến vật phẩm</h2></div><span className="text-sm text-[#65594e]">Bảng concept STT-01 · do người dùng cung cấp</span></div>
          <Image src="/heritage/stt-01-concept-board.png" alt="Bảng ý tưởng sản phẩm STT-01" width={960} height={540} className="w-full rounded-[1.5rem] shadow-xl border border-white/60" />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-10">
          <div><span className="text-[#8b2c25] text-sm font-bold tracking-[.18em]">HÀNH TRÌNH SẢN PHẨM</span><h2 className="font-serif text-4xl mt-3">Mỗi công đoạn<br/>một dấu xác thực</h2><p className="mt-5 text-[#6f6156]">Mã truy xuất: <b className="font-mono text-[#261b15]">STT-01-HERITAGE</b></p></div>
          <div>{traceSteps.map((step,index)=><div key={step.title} className="grid grid-cols-[28px_1fr] gap-4"><div className="flex flex-col items-center"><span className="mt-1 w-4 h-4 rounded-full bg-[#8b2c25] ring-4 ring-[#e6c88a]"/>{index<traceSteps.length-1&&<span className="w-px grow bg-[#bcae98]"/>}</div><div className="pb-8 border-b border-[#d1c3ac] mb-7"><div className="flex flex-wrap justify-between gap-2"><h3 className="text-xl font-bold">{step.title}</h3><time className="font-mono text-sm text-[#8b2c25]">{step.date}</time></div><p className="mt-2 text-[#695b50]">{step.text}</p><p className="mt-3 text-xs flex gap-1 text-[#8a7b70]"><MapPin size={13}/>{step.place}</p></div></div>)}</div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-[2rem] bg-[#fffaf0] border-2 border-[#bb9654] overflow-hidden">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="bg-[#26352d] text-white p-8 md:p-12"><Award size={48} className="text-[#e7c477]"/><p className="mt-8 text-xs tracking-[.2em] text-[#e7c477]">HỒ SƠ DI SẢN & CHỨNG NHẬN</p><h2 className="font-serif text-4xl mt-3">Minh bạch giá trị<br/>văn hóa</h2><p className="mt-5 text-[#cfdbd2] leading-7">Khu vực này dành cho văn bản chứng nhận, đơn vị cấp, số hồ sơ và tài liệu đối chiếu chính thức.</p></div>
            <div className="p-8 md:p-12">
              <div className="flex gap-4 items-start"><ScrollText className="text-[#8b2c25] shrink-0"/><div><p className="text-sm text-[#78695e]">Đơn vị văn hóa được nêu trong hồ sơ thiết kế</p><h3 className="text-2xl font-serif mt-1">Bảo tàng Lịch sử Quốc gia</h3></div></div>
              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                <div className="rounded-xl bg-[#f2eadb] p-4"><p className="text-xs text-[#75685d]">Số chứng nhận</p><p className="mt-2 font-bold">Chưa cung cấp</p></div>
                <div className="rounded-xl bg-[#fff0d5] p-4"><p className="text-xs text-[#75685d]">Trạng thái đối chiếu</p><p className="mt-2 font-bold text-[#9a4e13]">Chờ hồ sơ chính thức</p></div>
              </div>
              <p className="mt-6 text-sm text-[#75685d] flex gap-2"><ShieldCheck size={18} className="shrink-0"/>Trang không tự tuyên bố chứng nhận khi chưa có văn bản hoặc mã xác minh do đơn vị có thẩm quyền cung cấp.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1512] text-white py-12">
        <div className="container-page flex flex-col md:flex-row gap-7 items-center justify-between">
          <div className="flex items-center gap-4"><span className="p-3 rounded-full bg-[#d6b15e] text-[#221713]"><Fingerprint/></span><div><p className="font-bold">Hồ sơ truy xuất STT-01</p><p className="text-sm text-[#cabbab]">Dữ liệu mẫu phục vụ trình diễn · cập nhật 19.08.2026</p></div></div>
          <div className="flex gap-6 text-sm"><span className="flex gap-2 items-center"><CheckCircle2 size={17} className="text-[#d6b15e]"/>Thiết kế đã ghi nhận</span><span className="flex gap-2 items-center"><ChevronDown size={17} className="text-[#d6b15e]"/>Xem toàn bộ hồ sơ</span></div>
        </div>
      </section>
    </main>
  );
}
