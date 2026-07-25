# Sun* Asterisk Vietnam Landing Page Clone 🚀

Dự án clone giao diện trang chủ **Sun* Asterisk Vietnam** ([https://sun-asterisk.vn/](https://sun-asterisk.vn/)) được xây dựng kết hợp **HTML5**, **Tailwind CSS**, **BEM CSS Methodology** và **JavaScript Vanilla**.

---

## 📌 Công nghệ sử dụng (Tech Stack)

- **HTML5**: Cấu trúc ngữ nghĩa chuẩn SEO, responsive.
- **Tailwind CSS**: Utility-first CSS framework hỗ trợ layout & responsive nhanh chóng.
- **BEM Methodology**: Quy chuẩn đặt tên CSS (`Block__Element--Modifier`) giúp mã nguồn CSS rõ ràng, dễ bảo trì và phân cấu trúc vững chắc.
- **JavaScript (Vanilla JS)**: Xử lý tương tác Client-side (Sticky navbar, Animated counter, Hover state, Mobile Drawer menu, Back-to-top).
- **Vite**: Công cụ Dev Server thế hệ mới giúp khởi chạy và xem thay đổi tức thì (Hot Reload).

---

## 📂 Cấu trúc thư mục dự án

```text
d:\GitLearning\src
├── index.html        # Trang HTML5 chính chứa toàn bộ bố cục trang web
├── css/
│   └── style.css     # File CSS tùy chỉnh tuân thủ nghiêm ngặt chuẩn BEM
├── js/
│   └── main.js        # File JavaScript chứa các xử lý tương tác giao diện
├── package.json      # File cấu hình dự án & quản lý lệnh npm (npm run dev)
├── .gitignore        # Cấu hình bỏ qua các thư mục node_modules, build... khi dùng Git
└── README.md         # Tài liệu hướng dẫn cài đặt và sử dụng dự án
```

---

## 🚀 Hướng dẫn khởi chạy dự án

### 1. Cài đặt thư viện phụ trợ (Chỉ làm lần đầu)
Mở cửa sổ dòng lệnh (Terminal/PowerShell) tại thư mục dự án và chạy:
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Server)
Để bắt đầu chạy dự án với tính năng tự động tải lại khi chỉnh sửa code:
```bash
npm run dev
```
Sau khi chạy lệnh, trình duyệt sẽ tự động mở hoặc bạn có thể truy cập địa chỉ: `http://localhost:5173`.

### 3. Đóng gói cho Production (Build)
Khi muốn đóng gói website ra các file tĩnh hoàn chỉnh:
```bash
npm run build
```
Các file sau khi build sẽ nằm trong thư mục `dist/`.

---

## 🎨 Cấu trúc BEM CSS tiêu biểu trong dự án

Dự án được phân chia thành các Block BEM độc lập:

- **`.header`**: Thanh điều hướng chính
  - `.header__logo`: Logo thương hiệu
  - `.header__nav-list`: Danh sách liên kết điều hướng
  - `.header__nav-link--active`: Trạng thái menu đang kích hoạt
- **`.hero`**: Banner video đầu trang
  - `.hero__video-wrapper`: Container video nền
  - `.hero__title`: Tiêu đề chính
- **`.business`**: Lĩnh vực kinh doanh
  - `.business-card`: Thẻ bài viết dịch vụ
  - `.business-card--dark` / `.business-card--light`: Modifier thay đổi màu thẻ
- **`.stats`**: Khối thống kê con số
  - `.stats__number`: Số đếm nhảy tự động khi cuộn tới
- **`.project-card`**: Thẻ hiển thị dự án tiêu biểu
- **`.news-card`**: Thẻ bài viết tin tức & sự kiện
- **`.footer`**: Chân trang hệ thống văn phòng toàn cầu

---

## 📝 Giấy phép (License)
Dự án được tạo dựng cho mục đích học tập và tham khảo giao diện (Educational Purpose).
