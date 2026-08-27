## 01. Bootstrap là gì?

**📝 Giới thiệu & Lý thuyết cơ bản:**
Bootstrap là một **CSS/HTML/JS Framework** mã nguồn mở miễn phí, được thiết kế để đẩy nhanh quá trình phát triển web (Rapid Web Development). 
*   **Mobile-First Approach:** Mọi thiết kế mặc định của Bootstrap đều ưu tiên cho thiết bị di động, sau đó mở rộng dần ra màn hình lớn.
*   **Sẵn sàng Responsive:** Tự động co giãn mượt mà trên mọi thiết bị nhờ hệ thống Grid thông minh.
*   **Tiết kiệm thời gian:** Cung cấp sẵn hàng trăm class tiện ích và component hoàn chỉnh giúp bạn không phải viết lại từ đầu.

---

## 02. Cách nhúng Bootstrap

**📝 Giới thiệu & Lý thuyết cơ bản:**
Có 2 cách chính để đưa Bootstrap vào dự án của bạn:
1.  **CDN (Content Delivery Network - Khuyên dùng cho test & dự án nhỏ):** Nhúng trực tiếp đường dẫn file CSS và JavaScript từ máy chủ đám mây vào thẻ `<head>` và trước thẻ đóng `<body>`.
2.  **Download / NPM:** Tải mã nguồn về hoặc cài đặt qua npm (`npm i bootstrap`) để tự chủ file khi làm dự án thực tế lớn.

**💻 Code mẫu khung HTML chuẩn với CDN:**
```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Starter Template</title>
    
    <!-- Bootstrap 5 CSS CDN -->
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>
    <h1>Xin chào Bootstrap!</h1>

    <!-- Bootstrap 5 JS Bundle CDN (Bắt buộc cho Modal, Dropdown...) -->
    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 03. Container & Layout - Khung chứa & Bố cục

**📝 Giới thiệu & Lý thuyết cơ bản:**
Container là thành phần nền tảng bắt buộc phải có trong Bootstrap. Chúng đóng vai trò là chiếc "khung chứa" có nhiệm vụ bao bọc, tạo khoảng đệm (padding) hai bên và căn giữa toàn bộ nội dung của trang web trên màn hình.

Bootstrap cung cấp 3 loại Container chính để bạn linh hoạt lựa chọn tùy theo mục đích thiết kế:

1.  **`.container` (Responsive Fixed-Width Container):**
    *   Đây là loại container phổ biến nhất. Nó có chiều rộng tối đa (max-width) thay đổi linh hoạt theo từng điểm gãy (breakpoint) của màn hình.
    *   Ví dụ: Trên màn hình máy tính lớn, nó sẽ giữ nội dung cố định ở một độ rộng vừa phải (ví dụ 1140px hoặc 1320px) và tự động căn giữa, giúp văn bản không bị trải dài quá rộng khó đọc. Trên điện thoại, nó sẽ tự động co lại chiếm 100% chiều rộng (trừ một khoảng padding nhỏ hai bên).

2.  **`.container-fluid` (Full-Width Container):**
    *   Chiếm trọn **100% chiều rộng** của màn hình ở mọi thiết bị (từ điện thoại nhỏ nhất cho đến màn hình 4K).
    *   Thường được dùng khi bạn muốn làm các phần giao diện tràn viền (Full-width sections) như thanh Header, Hero Banner lớn, hoặc Footer.

3.  **`.container-{breakpoint}` (Responsive Containers):**
    *   Cho phép container chiếm 100% chiều rộng cho đến khi đạt được một điểm gãy cụ thể, sau đó nó sẽ chuyển sang trạng thái cố định (fixed-width).
    *   Các biến thể gồm: `.container-sm`, `.container-md`, `.container-lg`, `.container-xl`, `.container-xxl`.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn đặt nội dung bên trong Container:** Không bao giờ đặt các hàng (`.row`) hoặc nội dung thuần túy trơ trọi ngay bên trong thẻ `<body>` mà không có Container bao ngoài.
*   **Không lồng các Container vào nhau:** Việc lồng container này vào container khác thường tạo ra các khoảng đệm thừa thãi không cần thiết và làm hỏng hệ thống lưới (Grid System).
*   **Kết hợp Container và Grid:** Cấu trúc chuẩn xác nhất trong Bootstrap luôn là: `Container` $\rightarrow$ `Row` $\rightarrow$ `Col`.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Container Bootstrap</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <!-- 1. CONTAINER CỐ ĐỊNH (Responsive Fixed-Width) -->
    <!-- Nội dung bên trong sẽ được căn giữa và giới hạn độ rộng tối đa trên màn hình lớn -->
    <div class="container my-4 bg-light p-4 rounded">
      <h2>Đây là .container tiêu chuẩn</h2>
      <p>Nội dung sẽ không bị trải quá dài, giúp người đọc dễ theo dõi.</p>
    </div>

    <!-- 2. CONTAINER TRÀN VIỀN (Full-Width 100%) -->
    <!-- Thường dùng cho các khối banner hoặc footer kéo dài hết màn hình -->
    <div class="container-fluid bg-dark text-white py-5">
      <div class="container">
        <!-- Mẹo: Bạn hoàn toàn có thể lồng một .container chuẩn bên trong .container-fluid 
             để giữ cho chữ căn giữa thẳng hàng với các phần khác của trang -->
        <h3>Đây là .container-fluid tràn viền</h3>
        <p>Phần nền màu tối chiếm trọn 100% màn hình, nhưng nội dung bên trong vẫn thẳng hàng.</p>
      </div>
    </div>

    <!-- 3. CONTAINER THEO ĐIỂM GÃY (.container-md) -->
    <!-- Sẽ chiếm 100% width khi ở điện thoại/tablet nhỏ, và cố định width khi từ màn hình md (768px) trở lên -->
    <div class="container-md bg-warning p-3 my-4">
      <p>Container này sẽ co giãn 100% cho đến khi đạt kích thước Medium (768px).</p>
    </div>

    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 04. Grid System - Hệ thống lưới 12 cột

**📝 Giới thiệu & Lý thuyết cơ bản:**
Hệ thống lưới (Grid System) của Bootstrap được xây dựng dựa trên mô hình **Flexbox**, cho phép bạn tạo ra các bố cục dạng hàng và cột một cách cực kỳ linh hoạt và mượt mà.

Cơ chế hoạt động cốt lõi của Grid System dựa trên nguyên tắc **12 cột**:
*   Toàn bộ chiều rộng của một hàng (`.row`) được chia đều thành **12 phần bằng nhau**.
*   Khi bạn định nghĩa các lớp cột (ví dụ: `.col-4`), bạn đang ra lệnh cho trình duyệt: *"Hãy cho phần tử này chiếm đúng 4 phần trong tổng số 12 phần (tương đương 1/3 chiều rộng của hàng)"*.
*   Nếu tổng số cột trong một hàng vượt quá 12 (ví dụ: `8 + 5 = 13`), phần cột thừa ra sẽ tự động bị đẩy xuống hàng tiếp theo (wrapping).

Cấu trúc phân cấp bắt buộc của Grid System:
1.  **Container** (`.container` hoặc `.container-fluid`) -> Tạo khung chứa tổng thể.
2.  **Row** (`.row`) -> Tạo một hàng ngang, có nhiệm vụ chứa các cột và tự động bù trừ khoảng cách âm (negative margin) ở hai bên để căn chỉnh thẳng hàng.
3.  **Column** (`.col-*`) -> Các cột đặt bên trong `.row`, nơi chứa nội dung thực tế của bạn.

**Các biến thể cột phổ biến:**
*   `.col`: Tự động chia đều không gian cho tất cả các cột trong hàng (ví dụ: 3 cột có class `.col` thì mỗi cột sẽ chiếm 33.33%).
*   `.col-{number}`: Cố định tỷ lệ phần trăm cụ thể (từ `.col-1` đến `.col-12`).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Không bao giờ để `.col` đứng một mình:** Luôn bọc các cột bên trong một `.row`, và luôn bọc `.row` bên trong một `.container`.
*   **Quản lý khoảng cách (Gutters):** Sử dụng các class tiện ích khoảng cách lưới như `gx-*` (khoảng cách ngang giữa các cột) hoặc `gy-*` (khoảng cách dọc khi xuống hàng) thay vì tự viết margin thủ công.
*   **Lồng lưới (Nesting):** Bạn hoàn toàn có thể đặt một `.row` hoàn chỉnh nằm bên trong một `.col` nếu muốn chia nhỏ bố cục sâu hơn nữa.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Bootstrap Grid System</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <div class="container my-4">
      
      <!-- 1. CHIA ĐỀU CỘT TỰ ĐỘNG (.col) -->
      <h3 class="mb-3">1. Chia đều tự động</h3>
      <div class="row mb-4 text-center">
        <div class="col bg-light border p-3">Cột tự động 1</div>
        <div class="col bg-secondary text-white border p-3">Cột tự động 2</div>
        <div class="col bg-light border p-3">Cột tự động 3</div>
      </div>

      <!-- 2. HỆ THỐNG LƯỚI TỔNG 12 CỘT CỐ ĐỊNH -->
      <h3 class="mb-3">2. Phân chia tỷ lệ theo 12 cột</h3>
      <div class="row mb-4 text-center">
        <!-- 4 phần / 12 (chiếm 1/3 màn hình) -->
        <div class="col-4 bg-primary text-white p-3">.col-4 (4 phần)</div>
        <!-- 8 phần / 12 (chiếm 2/3 màn hình) -->
        <div class="col-8 bg-success text-white p-3">.col-8 (8 phần)</div>
      </div>

      <!-- 3. LƯỚI 3 CỘT ĐỀU NHAU (4 + 4 + 4 = 12) -->
      <div class="row mb-4 text-center">
        <div class="col-4 bg-light border p-3">Cột 4 phần</div>
        <div class="col-4 bg-light border p-3">Cột 4 phần</div>
        <div class="col-4 bg-light border p-3">Cột 4 phần</div>
      </div>

      <!-- 4. LỒNG LƯỚI (NESTING) -->
      <h3 class="mb-3">4. Lồng các hàng và cột bên trong nhau</h3>
      <div class="row">
        <div class="col-8 bg-warning p-3">
          Cột chính (col-8)
          <div class="row mt-2">
            <div class="col-6 bg-white text-dark p-2 border">Sub-col 6</div>
            <div class="col-6 bg-white text-dark p-2 border">Sub-col 6</div>
          </div>
        </div>
        <div class="col-4 bg-info text-white p-3">Cột phụ (col-4)</div>
      </div>

    </div>

    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 05. Responsive Breakpoints - Các điểm gãy thích ứng

**📝 Giới thiệu & Lý thuyết cơ bản:**
Breakpoints (Điểm gãy) là các ngưỡng chiều rộng màn hình mà tại đó bố cục của trang web sẽ thay đổi để thích ứng tốt hơn với thiết bị của người dùng. Bootstrap được xây dựng dựa trên tư duy **Mobile-First (Ưu tiên di động)**, nghĩa là các đoạn mã CSS cơ bản áp dụng cho màn hình nhỏ nhất, sau đó mở rộng dần ra các màn hình lớn hơn thông qua các tiền tố điểm gãy.

Bootstrap 5 cung cấp 6 tầng điểm gãy mặc định dựa trên pixel (px):

| Tiền tố | Kích thước màn hình (Min-width) | Đối tượng thiết bị phổ biến |
| :--- | :--- | :--- |
| **None** (`.col-*`) | `< 576px` | Điện thoại di động siêu nhỏ (Mặc định) |
| **`sm`** (`.col-sm-*`) | `≥ 576px` | Điện thoại di động khổ lớn / Phablet |
| **`md`** (`.col-md-*`) | `≥ 768px` | Máy tính bảng (Tablet) |
| **`lg`** (`.col-lg-*`) | `≥ 992px` | Máy tính xách tay (Laptop nhỏ) |
| **`xl`** (`.col-xl-*`) | `≥ 1200px` | Máy tính để bàn / Laptop lớn |
| **`xxl`** (`.col-xxl-*`) | `≥ 1400px` | Màn hình máy tính độ phân giải cực cao (Desktop lớn) |

**Nguyên lý hoạt động:**
Khi bạn viết các lớp kết hợp như `col-md-6 col-lg-4`, Bootstrap hiểu rằng:
*   Mặc định trên điện thoại nhỏ, phần tử này sẽ chiếm 100% chiều rộng (`col-12`).
*   Từ màn hình Tablet (`md` $\ge$ 768px) trở lên, nó sẽ chiếm 6 phần (2 cột trên 1 hàng).
*   Từ màn hình Laptop (`lg` $\ge$ 992px) trở lên, nó sẽ tự động thu nhỏ lại chiếm 4 phần (3 cột trên 1 hàng).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn tư duy theo hướng Mobile-First:** Hãy bắt đầu thiết kế bố cục cho điện thoại trước (dùng class cơ bản không có tiền tố hoặc tiền tố nhỏ), sau đó mới viết thêm các lớp lớn hơn (`md`, `lg`) để mở rộng không gian trên màn hình lớn.
*   **Kiểm tra thực tế:** Luôn sử dụng công cụ Toggle Device Toolbar (F12 $\rightarrow$ biểu tượng điện thoại/máy tính bảng) trên trình duyệt để kiểm tra sự chuyển dịch mượt mà giữa các điểm gãy.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Responsive Breakpoints Bootstrap</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <div class="container my-4">
      <h2 class="mb-4 text-center">Hệ thống thẻ bài Responsive linh hoạt</h2>
      
      <!-- Hàng chứa các card tự động co giãn theo kích thước màn hình -->
      <div class="row g-4"> <!-- g-4 tạo khoảng cách (gap) đều giữa các cột -->
        
        <!-- Cột 1 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-4 bg-light border rounded shadow-sm h-100">
            <h4>Thẻ sản phẩm 1</h4>
            <p>Điện thoại: 1 cột (12/12)<br>Tablet: 2 cột (6/12)<br>Laptop: 3 cột (4/12)</p>
          </div>
        </div>

        <!-- Cột 2 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-4 bg-light border rounded shadow-sm h-100">
            <h4>Thẻ sản phẩm 2</h4>
            <p>Điện thoại: 1 cột (12/12)<br>Tablet: 2 cột (6/12)<br>Laptop: 3 cột (4/12)</p>
          </div>
        </div>

        <!-- Cột 3 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-4 bg-light border rounded shadow-sm h-100">
            <h4>Thẻ sản phẩm 3</h4>
            <p>Điện thoại: 1 cột (12/12)<br>Tablet: 2 cột (6/12)<br>Laptop: 3 cột (4/12)</p>
          </div>
        </div>

      </div>
    </div>

    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 06. Utilities - Các lớp tiện ích

**📝 Giới thiệu & Lý thuyết cơ bản:**
Utilities (Các lớp tiện ích) là một kho tàng các class CSS ngắn gọn, có tính năng duy nhất (single-purpose) giúp bạn nhanh chóng định dạng giao diện trực tiếp trên file HTML mà không cần mở file CSS riêng. 

Các nhóm tiện ích cốt lõi bao gồm:

1.  **Spacing (Khoảng cách - Margin & Padding):**
    Cú pháp đặt tên: `{property}{sides}-{size}` hoặc có thêm điểm gãy `{property}{sides}-{breakpoint}-{size}`.
    *   `{property}`: `m` (margin) hoặc `p` (padding).
    *   `{sides}`: 
        *   `t`: top (trên)
        *   `b`: bottom (dưới)
        *   `s`: start (trái - theo hướng đọc LTR)
        *   `e`: end (phải - theo hướng đọc LTR)
        *   `x`: theo chiều ngang (cả trái và phải)
        *   `y`: theo chiều dọc (cả trên và dưới)
        *   (bỏ trống): áp dụng cho cả 4 phía.
    *   `{size}`: Từ `0` đến `5` (mỗi cấp tương ứng với bội số của khoảng cách mặc định, ví dụ `3` thường là `1rem`), hoặc `auto` (chỉ dùng cho margin).
    *   *Ví dụ:* `mt-3` (margin-top), `px-4` (padding trái và phải).

2.  **Colors & Backgrounds (Màu sắc & Nền):**
    *   *Màu chữ (Text Colors):* `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-muted`, `text-white`.
    *   *Màu nền (Background Colors):* `bg-primary`, `bg-success`, `bg-light`, `bg-dark`, `bg-body-tertiary`, kèm theo hiệu ứng chuyển sắc `bg-gradient`.

3.  **Display & Visibility (Kiểu hiển thị & Ẩn hiện):**
    *   `d-none`, `d-block`, `d-flex`, `d-inline`, `d-inline-block`.
    *   Kết hợp điểm gãy cực kỳ mạnh mẽ để ẩn/hiện theo màn hình: `d-none d-md-block` (Ẩn trên điện thoại, hiển thị dạng block từ màn hình tablet `md` trở lên).

4.  **Sizing & Alignment (Kích thước & Căn chỉnh):**
    *   `w-25`, `w-50`, `w-75`, `w-100`, `w-auto` (chiếm phần trăm chiều rộng).
    *   `h-100` (chiếm 100% chiều cao).
    *   `text-start`, `text-center`, `text-end` (căn lề văn bản).
    *   `mx-auto` (căn giữa khối hộp theo chiều ngang, yêu cầu phần tử phải có định nghĩa `width`).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Tận dụng tối đa Spacing Utilities:** Thay vì viết file CSS riêng chỉ để chỉnh vài khoảng margin/padding nhỏ, hãy dùng hệ thống `m-*` và `p-*` của Bootstrap để giữ code đồng nhất.
*   **Responsive Display ẩn hiện thông minh:** Sử dụng tổ hợp `d-none d-lg-block` để làm các menu hoặc sidebar ẩn trên điện thoại nhưng tự động hiện ra trên máy tính, giúp tối ưu trải nghiệm người dùng di động.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Bootstrap Utilities</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <div class="container my-5">
      
      <!-- 1. VÍ DỤ VỀ SPACING (MARGIN & PADDING) -->
      <!-- pt-4: padding-top; mb-5: margin-bottom; px-3: padding ngang -->
      <div class="bg-light border p-4 mb-4 rounded shadow-sm">
        <h3 class="text-primary mb-3">1. Tiện ích khoảng cách (Spacing)</h3>
        <p class="bg-white p-3 border rounded">Đoạn văn này được bọc padding bên trong và cách lề dưới bằng utilities.</p>
      </div>

      <!-- 2. VÍ DỤ VỀ MÀU SẮC & NỀN -->
      <div class="row g-3 mb-4">
        <div class="col-md-6">
          <div class="p-4 bg-primary text-white rounded">
            Nền xanh dương chủ đạo (.bg-primary .text-white)
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-4 bg-warning text-dark rounded bg-gradient">
            Nền vàng kèm hiệu ứng chuyển sắc (.bg-warning .bg-gradient)
          </div>
        </div>
      </div>

      <!-- 3. VÍ DỤ VỀ DISPLAY & RESPONSIVE HIDING -->
      <div class="p-3 bg-secondary text-white rounded text-center">
        <!-- Thông báo thay đổi theo kích thước màn hình -->
        <span class="d-inline d-md-none">📱 Bạn đang xem trên Màn hình NHỎ (Điện thoại)</span>
        <span class="d-none d-md-inline">💻 Bạn đang xem trên Màn hình LỚN (Tablet hoặc Desktop)</span>
      </div>

    </div>

    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 07. Content - Typography & Images - Kiểu chữ & Hình ảnh

**📝 Giới thiệu & Lý thuyết cơ bản:**
Bootstrap cung cấp hệ thống định dạng nội dung sẵn có giúp các khối văn bản (Typography) và hình ảnh (Images) hiển thị đồng nhất, sắc nét và tự động responsive trên mọi thiết bị.

1.  **Typography (Kiểu chữ văn bản):**
    *   *Headings:* Mặc định các thẻ từ `<h1>` đến `<h6>` được thiết kế lại tỉ mỉ. Bạn cũng có thể dùng các lớp `.h1` đến `.h6` để biến bất kỳ thẻ nào thành tiêu đề.
    *   *Display Headings:* Các lớp `.display-1` đến `.display-6` tạo ra các tiêu đề siêu lớn, cực kỳ thích hợp cho các Hero Banner hoặc Landing Page cần gây ấn tượng mạnh.
    *   *Lead Paragraph:* Thêm class `.lead` vào thẻ đoạn văn (`<p>`) để làm nổi bật đoạn mở đầu bài viết (chữ to hơn và thoáng hơn một chút).
    *   *Inline Text Elements:* Các lớp định dạng nhanh như `.fw-bold` (chữ đậm), `.fw-normal`, `.fst-italic` (in nghiêng), `.text-decoration-underline` (gạch chân).

2.  **Images (Hình ảnh thích ứng):**
    *   *Responsive Images:* Thêm class `.img-fluid` vào thẻ `<img>` để biến ảnh thành dạng responsive (tự động co giãn theo chiều rộng của khung chứa, không bao giờ bị tràn viền hay vỡ khung).
    *   *Image Shapes (Hình dáng ảnh):*
        *   `.rounded`: Bo tròn nhẹ các góc.
        *   `.rounded-circle`: Biến hình ảnh thành hình tròn hoàn hảo (thường dùng cho ảnh đại diện - avatar).
        *   `.img-thumbnail`: Tạo khung viền mỏng dạng tem nhãn xung quanh ảnh.
    *   *Image Alignment:* Dùng các lớp căn lề như `.float-start`, `.float-end` hoặc biến ảnh thành khối riêng biệt căn giữa bằng tổ hợp `.mx-auto .d-block`.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn dùng `.img-fluid` cho ảnh nội dung:** Để tránh việc ảnh có kích thước gốc quá lớn làm vỡ bố cục giao diện trên điện thoại di động, hãy tập thói quen luôn gắn class `.img-fluid` cho mọi thẻ `<img>`.
*   **Sử dụng Display Headings có tiết chế:** Các tiêu đề `.display-*` tạo hiệu ứng thị giác rất tốt ở phần đầu trang, nhưng không nên lạm dụng quá nhiều trong nội dung bài viết chi tiết bên dưới.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Typography & Images Bootstrap</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <div class="container my-5">
      
      <!-- 1. VÍ DỤ VỀ TYPOGRAPHY -->
      <div class="mb-5">
        <!-- Display Heading siêu lớn -->
        <h1 class="display-4 fw-bold text-primary">Tiêu đề Display lớn</h1>
        
        <!-- Đoạn văn mở đầu nổi bật (.lead) -->
        <p class="lead text-secondary">
          Đây là đoạn văn dẫn dắt mở đầu bài viết với kích thước chữ được phóng to hơn bình thường để thu hút sự chú ý của người đọc ngay từ cái nhìn đầu tiên.
        </p>
        
        <p>Đoạn văn bản thông thường sử dụng phông chữ và khoảng cách dòng chuẩn được tinh chỉnh sẵn bởi Bootstrap.</p>
      </div>

      <hr class="my-4">

      <!-- 2. VÍ DỤ VỀ HÌNH ẢNH (IMAGES) -->
      <div>
        <h3 class="mb-3">Hình ảnh Responsive & Bo tròn</h3>
        <div class="row g-4">
          
          <!-- Ảnh responsive bình thường (.img-fluid) -->
          <div class="col-md-6">
            <h5>Ảnh Responsive tiêu chuẩn</h5>
            <img src="[https://picsum.photos/id/1015/600/300](https://picsum.photos/id/1015/600/300)" class="img-fluid rounded shadow-sm" alt="Sample Image">
          </div>

          <!-- Ảnh đại diện hình tròn (.rounded-circle) -->
          <div class="col-md-6 text-center">
            <h5>Ảnh đại diện (Avatar)</h5>
            <img src="[https://picsum.photos/id/64/200/200](https://picsum.photos/id/64/200/200)" class="rounded-circle img-thumbnail" alt="Avatar">
          </div>

        </div>
      </div>

    </div>

    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 08. Tables - Bảng dữ liệu

**📝 Giới thiệu & Lý thuyết cơ bản:**
Hiển thị dữ liệu dạng bảng (Table) là một nhu cầu cực kỳ phổ biến trong các trang quản trị (Admin Dashboard). Bootstrap biến các thẻ `<table>` thô sơ trở nên tinh tế, hiện đại chỉ với vài class tiện ích:

1.  **Lớp cơ bản (`.table`):**
    *   Thêm class `.table` vào thẻ `<table>` để kích hoạt giao diện mặc định của Bootstrap: tạo khoảng đệm (padding) thoáng đãng, đường viền nhẹ nhàng giữa các hàng và căn chỉnh tiêu đề chuẩn xác.

2.  **Các biến thể làm đẹp bảng:**
    *   **`.table-striped`:** Tạo hiệu ứng sọc bàn cờ (xen kẽ màu nền giữa các hàng chẵn và lẻ), giúp người dùng dễ dàng theo dõi các hàng dữ liệu dài mà không bị rối mắt.
    *   **`.table-hover`:** Kích hoạt hiệu ứng đổi màu nền khi con trỏ chuột di chuyển (hover) qua từng hàng dữ liệu.
    *   **`.table-bordered` / `.table-borderless`:** Thêm toàn bộ đường viền bao quanh các ô hoặc xóa sạch mọi đường viền.
    *   **Màu sắc trạng thái (`.table-primary`, `.table-success`, `.table-danger`...):** Dùng để tô màu riêng cho một hàng hoặc một ô cụ thể nhằm biểu thị trạng thái (ví dụ: hàng màu đỏ báo hiệu đơn hàng bị hủy).

3.  **Bảng thích ứng (`.table-responsive`):**
    *   Khi bảng có quá nhiều cột dữ liệu mà hiển thị trên màn hình điện thoại di động, nó rất dễ làm vỡ bố cục tổng thể của trang web. Bọc bảng bên trong một thẻ `<div>` có class `.table-responsive` sẽ tự động tạo ra một thanh cuộn ngang mượt mà khi màn hình quá hẹp.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn bọc bảng trong `.table-responsive`:** Đây là thói quen sống còn để đảm bảo giao diện trang web không bao giờ bị tràn viền (overflow) khi người dùng truy cập bằng điện thoại di động.
*   **Tuân thủ cấu trúc Semantic HTML:** Luôn phân chia rõ ràng phần đầu bảng bằng `<thead>` (chứa các thẻ `<th>`) và phần thân bảng bằng `<tbody>` (chứa các thẻ `<td>`) để trình duyệt và các công cụ hỗ trợ đọc màn hình (accessibility) hiểu chính xác cấu trúc dữ liệu.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Tables Bootstrap</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <div class="container my-5">
      <h3 class="mb-4">Danh sách đơn hàng (Bảng dữ liệu Responsive)</h3>

      <!-- Bọc bảng trong .table-responsive để tự động có thanh cuộn trên mobile -->
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle shadow-sm rounded overflow-hidden">
          
          <!-- Phần đầu bảng -->
          <thead class="table-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Khách hàng</th>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Tổng tiền</th>
            </tr>
          </thead>

          <!-- Phần thân bảng -->
          <tbody>
            <tr>
              <th scope="row">1001</th>
              <td>Nguyễn Văn A</td>
              <td>Áo thun thể thao Nam</td>
              <td><span class="badge bg-success">Đã giao</span></td>
              <td>350.000 đ</td>
            </tr>
            <tr>
              <th scope="row">1002</th>
              <td>Trần Thị B</td>
              <td>Giày chạy bộ Sneaker</td>
              <td><span class="badge bg-warning text-dark">Đang vận chuyển</span></td>
              <td>1.250.000 đ</td>
            </tr>
            <!-- Hàng tô màu cảnh báo trạng thái đặc biệt -->
            <tr class="table-danger">
              <th scope="row">1003</th>
              <td>Lê Văn C</td>
              <td>Balo Laptop chống nước</td>
              <td><span class="badge bg-danger">Đã hủy</span></td>
              <td>590.000 đ</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>

    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 09. Forms - Biểu mẫu

**📝 Giới thiệu & Lý thuyết cơ bản:**
Biểu mẫu (Forms) là thành phần không thể thiếu để tương tác với người dùng (đăng nhập, đăng ký, tìm kiếm, gửi liên hệ). Bootstrap định dạng lại toàn bộ các thẻ nhập liệu HTML nguyên bản giúp chúng đồng bộ, đẹp mắt và dễ dàng tùy biến giao diện:

1.  **Các lớp điều khiển cốt lõi:**
    *   **`.form-label`:** Dùng cho nhãn (`<label>`) để tạo khoảng cách và kiểu chữ tiêu chuẩn phía trên ô nhập liệu.
    *   **`.form-control`:** Áp dụng cho các thẻ `<input>`, `<textarea>`, và `<select>` cơ bản. Lớp này làm cho các trường nhập liệu tự động giãn rộng 100% chiều rộng khung chứa (`width: 100%`), bo góc mềm mại và tạo hiệu ứng phát sáng (focus ring) hiện đại khi người dùng click vào.
    *   **`.form-select`:** Dành riêng cho thẻ danh sách thả xuống (`<select>`), tạo icon mũi tên chỉ xuống tùy chỉnh đẹp mắt.
    *   **`.form-check`:** Lớp bọc dùng cho các ô Checkbox và Radio button, giúp căn chỉnh khoảng cách và bố cục chuẩn xác.

2.  **Floating Labels (Nhãn nổi hiện đại):**
    *   Bằng cách bọc `<input>` và `<label>` trong một thẻ `<div>` có class `.form-floating`, nhãn tên sẽ tự động dịch chuyển thành hiệu ứng nổi lên phía trên mượt mà khi người dùng nhập dữ liệu vào ô input.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn ghép nối `.form-label` và `.form-control`:** Mỗi ô input bắt buộc phải đi kèm một label có gắn class tương ứng để đảm bảo tính năng trợ năng (Accessibility - cho người khiếm thị dùng trình đọc màn hình).
*   **Sử dụng `.mb-3` tạo khoảng cách giữa các trường:** Luôn đặt các trường form vào trong một khối div bọc có thêm khoảng cách dưới (ví dụ `class="mb-3"`) để form không bị dính sát vào nhau.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Forms Bootstrap</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <div class="container my-5" style="max-width: 600px;">
      <div class="card shadow-sm p-4">
        <h3 class="mb-4 text-center">Form Đăng Ký Tài Khoản</h3>
        
        <form>
          <!-- 1. Ô Nhập liệu Text tiêu chuẩn -->
          <div class="mb-3">
            <label for="fullName" class="form-label">Họ và tên</label>
            <input type="text" class="form-control" id="fullName" placeholder="Nhập họ tên của bạn...">
          </div>

          <!-- 2. Ô Nhập liệu Email kèm Floating Label hiện đại -->
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
            <label for="floatingEmail">Địa chỉ Email</label>
          </div>

          <!-- 3. Thẻ Chọn (Select Dropdown) -->
          <div class="mb-3">
            <label for="citySelect" class="form-label">Tỉnh / Thành phố</label>
            <select class="form-select" id="citySelect">
              <option selected>Chọn tỉnh thành...</option>
              <option value="HN">Hà Nội</option>
              <option value="HCM">TP. Hồ Chí Minh</option>
              <option value="DN">Đà Nẵng</option>
            </select>
          </div>

          <!-- 4. Textarea (Khung nhập văn bản lớn) -->
          <div class="mb-3">
            <label for="userMessage" class="form-label">Lời nhắn / Góp ý</label>
            <textarea class="form-control" id="userMessage" rows="3" placeholder="Nhập nội dung..."></textarea>
          </div>

          <!-- 5. Checkbox (Đồng ý điều khoản) -->
          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" value="" id="termsCheck">
            <label class="form-check-label" for="termsCheck">
              Tôi đồng ý với các điều khoản và chính sách bảo mật
            </label>
          </div>

          <!-- 6. Nút Gửi (Submit Button) -->
          <button type="submit" class="btn btn-primary w-100 py-2">Đăng Ký Ngay</button>
        </form>

      </div>
    </div>

    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 10. Components - Nút bấm, Thẻ bài & Menu thả xuống

**📝 Giới thiệu & Lý thuyết cơ bản:**
Bootstrap cung cấp sẵn rất nhiều thành phần giao diện (Components) hoàn thiện từ kiểu dáng cho đến trạng thái tương tác. Ba thành phần phổ biến và quan trọng nhất bao gồm:

1.  **Buttons (Nút bấm):**
    *   Để biến một thẻ bất kỳ thành nút bấm chuẩn của Bootstrap, bạn cần kết hợp lớp cơ bản **`.btn`** cùng với các biến thể màu sắc thương hiệu như `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-danger`, `.btn-warning`, `.btn-info`, `.btn-light`, `.btn-dark`.
    *   *Biến thể viền (Outline Buttons):* Dùng `.btn-outline-*` để tạo nút có đường viền màu và trong suốt nền, hiện màu khi di chuột vào.
    *   *Kích thước:* `.btn-lg` (lớn) hoặc `.btn-sm` (nhỏ).

2.  **Cards (Thẻ bài nội dung):**
    *   Card là khối chứa cực kỳ linh hoạt để hiển thị thông tin dạng thẻ bài (ví dụ: sản phẩm, bài viết blog, hồ sơ cá nhân).
    *   Cấu trúc chuẩn của một Card bao gồm:
        *   `.card`: Thẻ bao ngoài cùng, tạo khung viền và bo góc.
        *   `.card-img-top`: Đặt hình ảnh lên vị trí trên cùng của thẻ.
        *   `.card-body`: Vùng chứa phần chữ bên trong (tiêu đề `.card-title`, đoạn văn `.card-text`).
        *   `.card-footer`: Khu vực chân thẻ (thường dùng để đặt nút bấm hoặc ngày tháng).

3.  **Dropdowns (Menu thả xuống):**
    *   Thành phần cho phép người dùng mở một danh sách các lựa chọn khi click vào nút.
    *   Yêu cầu cấu trúc có thẻ bọc `.dropdown`, nút kích hoạt `.dropdown-toggle` (đi kèm thuộc tính `data-bs-toggle="dropdown"`) và danh sách menu bên trong `.dropdown-menu`.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Dùng đúng thẻ HTML cho Buttons:** Nên dùng thẻ `<button type="button">` cho các hành động gửi form/xử lý JavaScript, và dùng thẻ `<a>` (kèm class `.btn`) khi muốn điều hướng sang trang khác.
*   **Card Grid:** Khi hiển thị danh sách nhiều card sản phẩm, hãy đặt chúng bên trong hệ thống lưới (`.row` và `.col-*`) để chúng tự động căn chỉnh khoảng cách đều đặn.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Components Bootstrap</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <div class="container my-5">
      <h3 class="mb-4">1. Các biến thể Nút bấm (Buttons)</h3>
      <div class="mb-5">
        <button type="button" class="btn btn-primary">Primary Button</button>
        <button type="button" class="btn btn-outline-success">Outline Success</button>
        <button type="button" class="btn btn-danger btn-lg">Nút Lớn (Danger)</button>
      </div>

      <h3 class="mb-4">2. Menu thả xuống (Dropdown)</h3>
      <div class="dropdown mb-5">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Tùy chọn tài khoản
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Hồ sơ cá nhân</a></li>
          <li><a class="dropdown-item" href="#">Cài đặt hệ thống</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item text-danger" href="#">Đăng xuất</a></li>
        </ul>
      </div>

      <h3 class="mb-4">3. Thẻ bài sản phẩm (Card Component)</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow-sm h-100">
            <img src="[https://picsum.photos/id/20/400/200](https://picsum.photos/id/20/400/200)" class="card-img-top" alt="Product Image">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Máy ảnh kỹ thuật số</h5>
              <p class="card-text text-secondary">Thiết kế nhỏ gọn, chụp ảnh sắc nét, phù hợp cho người mới bắt đầu.</p>
              <a href="#" class="btn btn-primary mt-auto">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Bắt buộc phải có file JS Bundle để Dropdown hoạt động -->
    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 11. Navigation - Điều hướng & Navbar

**📝 Giới thiệu & Lý thuyết cơ bản:**
Hệ thống điều hướng giúp người dùng di chuyển mượt mà giữa các trang web. Bootstrap cung cấp từ các danh sách liên kết đơn giản (Navs) cho đến thanh điều hướng tổng thể hoàn chỉnh (Navbar):

1.  **Navs (Danh sách liên kết điều hướng cơ bản):**
    *   Sử dụng cho menu phụ, tab nội dung hoặc footer.
    *   `.nav`: Khớp với thẻ `<ul>`, kết hợp cùng các thẻ `<li>` có class `.nav-item` và thẻ `<a>` có class `.nav-link`.
    *   *Biến thể:* `.nav-pills` (tạo nút bấm bo tròn cho từng link) hoặc `.nav-tabs` (tạo dạng thẻ tab chuyển đổi nội dung).

2.  **Navbar (Thanh điều hướng đỉnh trang):**
    *   Navbar là một khối điều hướng phức tạp, đầy đủ tính năng, thường nằm ở đỉnh của trang web.
    *   Cấu trúc cốt lõi của một Navbar Bootstrap 5:
        *   `.navbar`: Khớp với thẻ `<nav>`, kết hợp với màu nền (`bg-body-tertiary` hoặc `bg-dark text-white`) và chế độ sáng/tối (`navbar-light` / `navbar-dark`).
        *   `.navbar-expand-{breakpoint}` (ví dụ: `navbar-expand-lg`): Quyết định điểm gãy màn hình mà tại đó menu sẽ bung rộng ra thay vì bị thu gọn lại.
        *   `.container` (hoặc `.container-fluid`): Đặt bên trong navbar để canh lề nội dung.
        *   `.navbar-brand`: Logo hoặc tên thương hiệu ở góc trái.
        *   `.navbar-toggler`: Nút bấm hình hamburger (3 gạch ngang) xuất hiện trên điện thoại di động để ẩn/hiện menu.
        *   `.collapse.navbar-collapse`: Khối bọc danh sách menu (`.navbar-nav`), sẽ tự động thu gọn lại trên mobile và bung ra trên máy tính.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn cấu hình `navbar-expand-*` đúng cách:** Nếu bạn muốn menu tự động thu gọn trên điện thoại và bung ra từ màn hình Laptop (`≥ 992px`) trở lên, hãy sử dụng class `.navbar-expand-lg`.
*   **Kiểm tra tính tương thích JavaScript của Navbar Toggle:** Để nút hamburger trên điện thoại có thể bấm mở/đóng menu, bạn **bắt buộc** phải có đầy đủ các thuộc tính `data-bs-toggle="collapse"` và `data-bs-target="#id_cua_menu"` trùng khớp với ID của khối `.collapse`.

**💻 Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ Navbar Bootstrap</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <!-- THANH ĐIỀU HƯỚNG NAVBAR RESPONSIVE -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div class="container">
        
        <!-- 1. Logo hoặc Thương hiệu -->
        <a class="navbar-brand fw-bold text-primary" href="#">BrandLogo</a>

        <!-- 2. Nút Hamburger Toggle (Hiển thị trên điện thoại khi màn hình nhỏ hơn lg) -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- 3. Khối menu chính (Sẽ tự động collapse trên mobile) -->
        <div class="collapse navbar-collapse" id="mainNavbar">
          
          <!-- Danh sách link điều hướng căn bên trái -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sản phẩm</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Danh mục
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Thiết bị điện tử</a></li>
                <li><a class="dropdown-item" href="#">Thời trang nam nữ</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Liên hệ</a>
            </li>
          </ul>

          <!-- Ô tìm kiếm và nút hành động bên phải -->
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Tìm kiếm sản phẩm..." aria-label="Search">
            <button class="btn btn-outline-primary" type="submit">Tìm</button>
          </form>

        </div>
      </div>
    </nav>

    <!-- Nội dung minh họa trang -->
    <div class="container my-5">
      <h1>Nội dung trang web chính</h1>
      <p class="lead">Thu nhỏ kích thước trình duyệt dưới 992px để kiểm tra tính năng thu gọn của Navbar Bootstrap.</p>
    </div>

    <!-- Bắt buộc phải có file JS Bundle để nút Toggle Menu hoạt động -->
    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
  </body>
</html>
```
## 12. JavaScript Components - Tương tác nâng cao (Modal, Carousel, Collapse)

**📝 Giới thiệu & Lý thuyết cơ bản:**
Bên cạnh các lớp CSS tĩnh, Bootstrap tích hợp sẵn một hệ thống **JavaScript Plugins** mạnh mẽ giúp bạn tạo ra các thành phần tương tác động phức tạp mà không cần viết một dòng code JavaScript thủ công nào.

Các thành phần tương tác JS cốt lõi bao gồm:
1.  **Modal (Hộp thoại Popup):**
    *   Cửa sổ bật lên đè lên trên nội dung trang chính, dùng để hiển thị thông báo, form đăng nhập, hoặc chi tiết sản phẩm.
    *   Yêu cầu kết nối thuộc tính `data-bs-toggle="modal"` và `data-bs-target="#modalId"` trên nút kích hoạt.

2.  **Carousel (Trình chiếu Slide ảnh):**
    *   Thành phần slider trình chiếu hình ảnh hoặc banner quảng cáo tự động chạy xoay vòng, kèm theo các nút mũi tên điều hướng trái/phải và các chấm tròn chỉ mục (indicators).

3.  **Collapse & Accordion (Hiển thị / Ẩn nội dung):**
    *   Cho phép thu gọn hoặc mở rộng một khối nội dung khi người dùng click vào nút (thường dùng làm danh sách câu hỏi thường gặp - FAQ).

4.  **Tooltip & Popover (Hộp chú thích khi rê chuột):**
    *   Hiển thị một khung nhỏ chứa đoạn văn bản chú thích khi người dùng di chuột vào phần tử. *(Lưu ý: Tooltip yêu cầu phải được kích hoạt khởi tạo bằng JavaScript thủ công).*

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Bắt buộc nhúng file JS Bundle:** Tất cả các tính năng JavaScript của Bootstrap đều phụ thuộc vào file `bootstrap.bundle.min.js`. Nếu quên nhúng file này hoặc đặt sai vị trí (trước thẻ `<body>`), các tính năng như Modal hay Dropdown sẽ hoàn toàn không hoạt động.
*   **Khởi tạo Tooltip/Popover nếu dùng:** Không giống như Modal hay Carousel tự chạy qua thuộc tính data, Tooltip và Popover yêu cầu một đoạn mã JavaScript ngắn để kích hoạt (`new bootstrap.Tooltip(...)`).

**💻 Code minh họa chuyên sâu (Modal & Carousel):**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ví dụ JS Components Bootstrap</title>
    <link href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)" rel="stylesheet">
  </head>
  <body>

    <div class="container my-5">
      
      <!-- ==========================================
         1. NÚT KÍCH HOẠT MODAL (POPUP)
      =========================================== -->
      <h3 class="mb-3">1. Hộp thoại Popup (Modal)</h3>
      <button type="button" class="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Mở Hộp Thoại Modal
      </button>

      <!-- Cấu trúc Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Tiêu đề thông báo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Nội dung chi tiết thông báo hiển thị bên trong hộp thoại modal popup.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary">Lưu thay đổi</button>
            </div>
          </div>
        </div>
      </div>


      <!-- ==========================================
         2. TRÌNH CHIẾU SLIDE ẢNH (CAROUSEL)
      =========================================== -->
      <h3 class="mb-3">2. Trình chiếu Slide ảnh (Carousel)</h3>
      <div id="carouselExample" class="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel">
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="[https://picsum.photos/id/10/800/300](https://picsum.photos/id/10/800/300)" class="d-block w-100" alt="Slide 1">
          </div>
          <div class="carousel-item">
            <img src="[https://picsum.photos/id/20/800/300](https://picsum.photos/id/20/800/300)" class="d-block w-100" alt="Slide 2">
          </div>
          <div class="carousel-item">
            <img src="[https://picsum.photos/id/30/800/300](https://picsum.photos/id/30/800/300)" class="d-block w-100" alt="Slide 3">
          </div>
        </div>

        <!-- Nút chuyển slide trái / phải -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>

    </div>

    <!-- BẮT BUỘC: File JS Bundle để các thành phần Modal, Carousel chạy mượt mà -->
    <script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
    
    <!-- Script khởi tạo Tooltip (Nếu dự án có dùng Tooltip) -->
    <script>
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    </script>
  </body>
</html>
