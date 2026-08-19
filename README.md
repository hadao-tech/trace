# TraceGuard — NFC/QR Traceability Prototype

Prototype hoàn chỉnh cho hệ thống truy xuất nguồn gốc và chứng thực chống hàng giả. Người dùng không cần cài ứng dụng: chạm NFC hoặc quét QR để mở cùng URL xác thực.

## Chạy local

Yêu cầu Node.js 20.9+ và pnpm/npm.

```bash
cp .env.example .env
pnpm install
pnpm prisma generate
pnpm prisma migrate dev
pnpm db:seed
pnpm dev
```

Mở `http://localhost:3000`. Admin prototype: `http://localhost:3000/admin`.

## Demo tokens

| Token | Kết quả |
|---|---|
| `8F7K29ABC` | Hợp lệ |
| `RISK88XYZ` | Có cờ rủi ro |
| `OFF000TAG` | Đã vô hiệu hóa |
| `HOTSCAN999` | Quét vượt ngưỡng |
| `TRACE5GOOD` | Hợp lệ, sản phẩm thứ hai |
| `NOTFOUND1` | Không tồn tại |

Lưu ý: mỗi lần mở trang/API xác thực là một lượt quét thật. Vì vậy token hợp lệ sẽ chuyển sang `EXCESSIVE_SCANS` khi vượt ngưỡng; chạy seed lại để đặt lại dữ liệu demo.

## Kiến trúc

- Next.js App Router + TypeScript + Tailwind CSS, mobile-first.
- Route Handlers cung cấp REST API trong cùng ứng dụng.
- Prisma ORM + SQLite local; schema không dùng đặc tính riêng của SQLite nên dễ chuyển datasource sang PostgreSQL.
- `AuthenticationProvider` là cổng trừu tượng. Prototype dùng `DatabaseAuthenticationProvider`; production có thể thay bằng provider kiểm tra chữ ký Secure NFC mà không đổi UI/API.
- Verification service chuẩn hóa token, kiểm tra tồn tại, trạng thái, cờ rủi ro, ngưỡng lượt quét và ghi audit log.

## Routes chính

- `/` — landing page
- `/verify` — nhập token / đọc Web NFC
- `/verify/[token]` — kết quả và truy xuất, QR, báo cáo
- `/admin` — dashboard
- `/admin/units/new` — tạo đơn vị và token ngẫu nhiên
- `/admin/units/[id]` — chi tiết, logs, QR, trạng thái, NFC writer development-only

## REST API

- `GET /api/verify/:token` — xác thực và ghi log
- `GET|POST /api/products` — liệt kê/tạo sản phẩm
- `POST /api/units` — tạo đơn vị với token ngẫu nhiên
- `PATCH /api/units/:id` — kích hoạt/vô hiệu hóa/thu hồi
- `GET|POST /api/reports` — báo cáo đáng ngờ
- `GET /api/brands` — thương hiệu

## Models

`Brand`, `Product`, `ProductUnit`, `TraceEvent`, `VerificationLog`, `SuspiciousReport`; enums cho trạng thái đơn vị, verdict và trạng thái báo cáo.

## Kiểm thử NFC thật

1. Dùng điện thoại Android có NFC và Chrome; bật NFC.
2. Khi chạy trên máy tính, phục vụ site qua HTTPS hoặc tunnel HTTPS. `localhost` chỉ được coi là secure context trên chính thiết bị đang chạy nó.
3. Mở trang chi tiết unit ở admin trong **development**, nhấn “Ghi URL lên NFC”, cấp quyền và chạm thẻ NDEF có thể ghi.
4. Khóa màn hình/mở lại theo yêu cầu thiết bị, chạm thẻ: hệ điều hành phải mở `/verify/<token>`.
5. Hoặc mở `/verify`, nhấn “Đọc NFC” và chạm thẻ. Web NFC hiện chủ yếu được hỗ trợ trên Chrome Android; iOS không cung cấp Web NFC API tương đương cho website.

Không có fallback giả NFC. Khi API không tồn tại hoặc quyền bị từ chối, UI nói rõ và đề nghị dùng QR/token.

## Giới hạn prototype & production hardening

- Admin chưa có đăng nhập/RBAC; bắt buộc thêm OIDC/session, CSRF và audit actor trước production.
- Token tĩnh/QR có thể bị sao chép. Production nên dùng NFC chống clone có cryptographic challenge/signature (SUN/SDM), khóa được quản lý bằng KMS/HSM, key rotation và provider xác thực chữ ký.
- Thêm rate-limit theo IP/device, geo-velocity, replay detection theo thời gian, hàng đợi sự kiện và cảnh báo.
- Dùng PostgreSQL managed, migration CI/CD, backup/PITR; không dùng SQLite nhiều instance.
- Không tin `x-forwarded-for` nếu proxy chưa được cấu hình trusted; bổ sung privacy/retention policy cho telemetry.
- Ảnh demo dùng URL bên ngoài. Nên chuyển sang object storage/CDN và scan upload.
- Thêm test unit/integration/E2E, observability, CSP/security headers, validation chi tiết và chống spam report.

## Cây thư mục

```text
prisma/
  schema.prisma
  seed.ts
  migrations/
src/
  app/
    api/{verify,products,units,reports,brands}/
    admin/units/
    verify/[token]/
  components/
  lib/authentication/
```
