"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function VerifyClient() {
  const [token, setToken] = useState("");
  const router = useRouter();

  function verify() {
    const normalized = token.trim();
    if (normalized) router.push(`/verify/${encodeURIComponent(normalized)}`);
  }

  return (
    <div className="card p-6 md:p-8 max-w-xl mx-auto">
      <label className="label" htmlFor="token">Mã xác thực</label>
      <div className="flex gap-2">
        <input
          id="token"
          className="input font-mono uppercase"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && verify()}
          placeholder="Ví dụ: 8F7K29ABC"
        />
        <button className="btn btn-primary" onClick={verify} aria-label="Kiểm tra">
          <Search size={19} />
        </button>
      </div>
      <p className="text-sm text-slate-600 mt-5">Chạm tem NFC hoặc quét QR sẽ mở trực tiếp trang hồ sơ sản phẩm. Bạn cũng có thể nhập mã trên tem tại đây.</p>
    </div>
  );
}
