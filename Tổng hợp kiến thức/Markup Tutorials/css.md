## 01. CSS là gì?

**📝 Giới thiệu & Lý thuyết cơ bản:**
CSS viết tắt của **Cascading Style Sheets** (Bảng định kiểu tầng). Nếu HTML là bộ khung xương của trang web, thì CSS chính là "lớp da thịt, trang phục và trang sức" quyết định giao diện, màu sắc, phông chữ và bố cục hiển thị.

Tính chất cốt lõi của CSS nằm ở từ **"Cascading" (Tính xếp tầng/kế thừa)**: Các quy tắc kiểu dáng có thể chảy từ trên xuống, đè lên nhau hoặc được kế thừa từ phần tử cha xuống phần tử con theo các quy tắc ưu tiên rõ ràng.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Tách biệt nội dung và giao diện (Separation of Concerns):** Tuyệt đối không nhồi nhét style vào trong file HTML. Giữ cho file HTML sạch sẽ chỉ làm nhiệm vụ cấu trúc, mọi việc trang trí hãy để CSS lo.
*   **Tư duy Mobile-First:** Khi viết CSS hiện đại, luôn ưu tiên thiết kế cho màn hình điện thoại trước, sau đó dùng Media Queries mở rộng ra cho màn hình máy tính lớn.

---

## 02. Cách sử dụng CSS

**📝 Giới thiệu & Lý thuyết cơ bản:**
Có 3 cách chính để nhúng CSS vào tài liệu web:
1.  **Inline CSS:** Viết trực tiếp vào thuộc tính `style` của thẻ HTML.
2.  **Internal CSS:** Viết bên trong thẻ `<style>` nằm ở phần `<head>` của file HTML.
3.  **External CSS:** Viết ra một file riêng biệt có phần mở rộng `.css` (ví dụ: `style.css`) và liên kết vào HTML bằng thẻ `<link>`. Đây là tiêu chuẩn vàng trong lập trình web thực tế.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **KHÔNG BAO GIỜ dùng Inline CSS:** Ngoại trừ các trường hợp thay đổi động cực kỳ đặc biệt bằng JavaScript, việc dùng Inline CSS sẽ làm hỏng tính tái sử dụng, làm phình to mã nguồn và cực kỳ khó ghi đè (vì nó có độ ưu tiên cao nhất).
*   **Luôn dùng External CSS:** Giúp trình duyệt có thể lưu bộ nhớ đệm (Caching) file CSS, từ đó làm trang web tải nhanh hơn ở những lần truy cập sau và quản lý mã nguồn của hàng trăm trang web chỉ qua một file duy nhất.

**💻 Cách dùng & Code minh họa chuyên sâu:**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Cách dùng CSS</title>
    
    <!-- 1. External CSS (KHUYÊN DÙNG TUYỆT ĐỐI) -->
    <link rel="stylesheet" href="./css/style.css" />
    
    <!-- 2. Internal CSS (Chỉ dùng cho các trang landing page siêu nhỏ hoặc test nhanh) -->
    <style>
      body {
        background-color: #f4f4f4;
      }
    </style>
  </head>
  
  <body>
    <!-- 3. Inline CSS (❌ TRÁNH DÙNG) -->
    <h1 style="color: red; font-size: 24px;">Tiêu đề bài viết</h1>
    
    <p class="text-content">Đoạn văn bản được định dạng bằng External CSS.</p>
  </body>
</html>
/* Định dạng cho class text-content */
.text-content {
  color: #333333;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
}
```
## 03. Selectors - Bộ chọn

**📝 Giới thiệu & Lý thuyết cơ bản:**
Selectors (Bộ chọn) là cú pháp dùng để "nhắm mục tiêu" vào các phần tử HTML mà bạn muốn trang trí. Nếu không có bộ chọn, trình duyệt sẽ không biết đoạn mã CSS áp dụng cho thẻ nào.

Các nhóm bộ chọn phổ biến bao gồm:
1.  **Bộ chọn cơ bản:**
    *   *Universal Selector (`*`):* Chọn toàn bộ phần tử trên trang.
    *   *Element Selector (Thẻ HTML):* Chọn tất cả các thẻ cùng loại (ví dụ: `p`, `h1`, `a`).
    *   *Class Selector (`.className`):* Chọn các phần tử có chung class.
    *   *ID Selector (`#idName`):* Chọn duy nhất một phần tử có ID tương ứng.
    *   *Attribute Selector (`[attribute]`):* Chọn các phần tử có chứa thuộc tính cụ thể (ví dụ: `[disabled]`, `[type="text"]`).
2.  **Bộ chọn kết hợp (Combinators):**
    *   *Descendant (`A B`):* Chọn mọi phần tử `B` nằm *bên trong* phần tử `A` (ở bất kỳ cấp độ nào).
    *   *Child (`A > B`):* Chọn phần tử `B` là **con trực tiếp** (cấp liền kề ngay bên dưới) của `A`.
    *   *Adjacent Sibling (`A + B`):* Chọn phần tử `B` nằm **ngay liền kề phía sau** của `A`.
    *   *General Sibling (`A ~ B`):* Chọn mọi phần tử `B` nằm phía sau `A` (chung một thẻ cha).
3.  **Nhóm bộ chọn (Grouping):** Dùng dấu phẩy (`,`) để áp dụng cùng một khối style cho nhiều bộ chọn khác nhau.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Ưu tiên dùng Class:** Luôn ưu tiên dùng Class cho việc định kiểu giao diện vì tính linh hoạt và tái sử dụng cao. Tránh lạm dụng ID cho CSS vì độ ưu tiên của nó quá cao, khó ghi đè.
*   **Tránh chọn quá sâu:** Không viết các chuỗi selector dài ngoằng kiểu `.header nav ul li a span` vì nó làm tăng độ phức tạp không cần thiết và làm chậm tốc độ render của trình duyệt.

**💻 Cách dùng & Code minh họa chuyên sâu:**

```css
/* 1. Bộ chọn cơ bản */
* { box-sizing: border-box; } /* Universal */
h1 { color: darkblue; }       /* Element */
.card { background: #fff; }   /* Class */
#main-banner { padding: 20px; } /* ID */
input[type="email"] { border: 1px solid gray; } /* Attribute */

/* 2. Bộ chọn kết hợp */
/* Chọn mọi thẻ <a> nằm bên trong .sidebar */
.sidebar a { color: blue; } 

/* Chỉ chọn thẻ <li> là con TRỰC TIẾP của ul.menu */
ul.menu > li { list-style: none; } 

/* Chọn thẻ <p> nằm ngay sau thẻ <h2> */
h2 + p { font-weight: bold; } 

/* 3. Nhóm bộ chọn chung style */
h1, h2, h3 {
  font-family: 'Helvetica', sans-serif;
  color: #111;
}
```
## 03. Selectors - Bộ chọn

**📝 Giới thiệu & Lý thuyết cơ bản:**
Selectors (Bộ chọn) là cú pháp dùng để "nhắm mục tiêu" vào các phần tử HTML mà bạn muốn trang trí. Nếu không có bộ chọn, trình duyệt sẽ không biết đoạn mã CSS áp dụng cho thẻ nào.

Các nhóm bộ chọn phổ biến bao gồm:
1.  **Bộ chọn cơ bản:**
    *   *Universal Selector (`*`):* Chọn toàn bộ phần tử trên trang.
    *   *Element Selector (Thẻ HTML):* Chọn tất cả các thẻ cùng loại (ví dụ: `p`, `h1`, `a`).
    *   *Class Selector (`.className`):* Chọn các phần tử có chung class.
    *   *ID Selector (`#idName`):* Chọn duy nhất một phần tử có ID tương ứng.
    *   *Attribute Selector (`[attribute]`):* Chọn các phần tử có chứa thuộc tính cụ thể (ví dụ: `[disabled]`, `[type="text"]`).
2.  **Bộ chọn kết hợp (Combinators):**
    *   *Descendant (`A B`):* Chọn mọi phần tử `B` nằm *bên trong* phần tử `A` (ở bất kỳ cấp độ nào).
    *   *Child (`A > B`):* Chọn phần tử `B` là **con trực tiếp** (cấp liền kề ngay bên dưới) của `A`.
    *   *Adjacent Sibling (`A + B`):* Chọn phần tử `B` nằm **ngay liền kề phía sau** của `A`.
    *   *General Sibling (`A ~ B`):* Chọn mọi phần tử `B` nằm phía sau `A` (chung một thẻ cha).
3.  **Nhóm bộ chọn (Grouping):** Dùng dấu phẩy (`,`) để áp dụng cùng một khối style cho nhiều bộ chọn khác nhau.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Ưu tiên dùng Class:** Luôn ưu tiên dùng Class cho việc định kiểu giao diện vì tính linh hoạt và tái sử dụng cao. Tránh lạm dụng ID cho CSS vì độ ưu tiên của nó quá cao, khó ghi đè.
*   **Tránh chọn quá sâu:** Không viết các chuỗi selector dài ngoằng kiểu `.header nav ul li a span` vì nó làm tăng độ phức tạp không cần thiết và làm chậm tốc độ render của trình duyệt.

**💻 Cách dùng & Code minh họa chuyên sâu:**

```css
/* 1. Bộ chọn cơ bản */
* { box-sizing: border-box; } /* Universal */
h1 { color: darkblue; }       /* Element */
.card { background: #fff; }   /* Class */
#main-banner { padding: 20px; } /* ID */
input[type="email"] { border: 1px solid gray; } /* Attribute */

/* 2. Bộ chọn kết hợp */
/* Chọn mọi thẻ <a> nằm bên trong .sidebar */
.sidebar a { color: blue; } 

/* Chỉ chọn thẻ <li> là con TRỰC TIẾP của ul.menu */
ul.menu > li { list-style: none; } 

/* Chọn thẻ <p> nằm ngay sau thẻ <h2> */
h2 + p { font-weight: bold; } 

/* 3. Nhóm bộ chọn chung style */
h1, h2, h3 {
  font-family: 'Helvetica', sans-serif;
  color: #111;
}
```
## 05. Colors, Units & Values - Màu sắc, Đơn vị & Giá trị

**📝 Giới thiệu & Lý thuyết cơ bản:**
Để trang trí và định hình bố cục giao diện, CSS cung cấp một hệ thống phong phú các định dạng màu sắc và các đơn vị đo lường khác nhau:

1.  **Hệ thống Màu sắc (Colors):**
    *   *Named Colors:* Tên màu định sẵn (ví dụ: `red`, `blue`, `transparent`, `aliceblue`).
    *   *HEX:* Mã thập lục phân dựa trên hệ cơ số 16 (ví dụ: `#ff0000`, `#333333`, `#2b2b2b`). Hỗ trợ cả mã alpha 8 ký tự để chỉnh độ trong suốt (ví dụ: `#ff000088`).
    *   *RGB / RGBA:* Hệ màu Đỏ - Xanh lá - Xanh dương (Red, Green, Blue) với giá trị từ `0` đến `255`, kèm theo kênh độ mờ Alpha (`rgba(0, 0, 0, 0.5)`).
    *   *HSL / HSLA:* Hệ màu Sắc độ - Độ bão hòa - Độ sáng (Hue, Saturation, Lightness). Ví dụ: `hsl(210, 100%, 50%)`. Đây là hệ màu rất trực quan khi bạn muốn tinh chỉnh tông màu (đổi màu nhưng giữ nguyên độ đậm nhạt).

2.  **Đơn vị đo lường (Units):**
    *   *Tuyệt đối (Absolute):* `px` (pixel). Là đơn vị cố định, không thay đổi kích thước trên mọi màn hình.
    *   *Tương đối (Relative):* 
        *   `rem` (Root Em): Tỷ lệ thuận với kích thước chữ của thẻ gốc `<html>` (thường mặc định là `16px`). Đây là chuẩn vàng hiện đại cho layout và khoảng cách.
        *   `em`: Tỷ lệ thuận với kích thước chữ của **thẻ cha trực tiếp** chứa nó (dễ gây lỗi cộng dồn nếu lồng nhau nhiều cấp).
        *   `%`: Tỷ lệ phần trăm tính theo kích thước của phần tử cha trực tiếp.
        *   `vw` / `vh`: Tính theo tỷ lệ màn hình (`1vw = 1%` chiều rộng khung nhìn viewport, `1vh = 1%` chiều cao viewport).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn ưu tiên dùng `rem` thay vì `px` cho khoảng cách và chữ:** Dùng `rem` giúp website tự động co giãn linh hoạt khi người dùng thay đổi kích thước chữ mặc định trong cài đặt trình duyệt, đảm bảo tính năng Accessibility (a11y).
*   **Chỉ dùng `px` cho viền mỏng (Border):** Các đường viền mảnh (ví dụ `border: 1px solid #ddd`) là trường hợp hiếm hoi nên giữ cố định bằng `px` để đảm bảo độ sắc nét trên mọi màn hình thiết bị.
*   **Sử dụng HSL cho thiết kế Theme:** Khi làm tính năng chuyển đổi giao diện (Light/Dark Mode), dùng HSL sẽ giúp bạn chỉ cần thay đổi thông số độ sáng (Lightness) mà không phải đổi toàn bộ mã màu phức tạp.

**💻 Cách dùng & Code minh họa chuyên sâu:**

```css
.card-container {
  /* Sử dụng màu sắc hiện đại với RGB và kênh độ trong suốt Alpha */
  background-color: rgba(255, 255, 255, 0.95);
  
  /* Sử dụng HSL để quản lý màu sắc trực quan */
  color: hsl(210, 29%, 24%);
  
  /* Sử dụng đơn vị tương đối rem cho kích thước và khoảng cách */
  font-size: 1.2rem;       /* 1.2 lần so với kích thước gốc của thẻ html */
  padding: 2.5rem;         /* Khoảng cách đệm linh hoạt */
  margin-bottom: 1.5rem;   /* Khoảng cách ngoài */
  
  /* Sử dụng % và đơn vị chiều rộng màn hình vw */
  width: 90%;
  max-width: 1200px;       /* Giới hạn chiều rộng tối đa */
  min-height: 50vh;        /* Chiếm tối thiểu 50% chiều cao màn hình */
  
  /* Viền tinh tế bằng đơn vị px truyền thống */
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
```
## 06. Typography - Chữ và văn bản

**📝 Giới thiệu & Lý thuyết cơ bản:**
Typography chiếm phần lớn nội dung trên bất kỳ trang web nào. Việc thiết lập kiểu chữ đúng cách không chỉ làm tăng tính thẩm mỹ mà còn cải thiện trải nghiệm đọc (Readability) của người dùng.

Các thuộc tính cốt lõi trong CSS Typography bao gồm:
1.  **`font-family`:** Định nghĩa họ phông chữ sẽ sử dụng. Trình duyệt sẽ đọc từ trái sang phải, nếu máy người dùng không có phông đầu tiên, nó sẽ tự động chuyển sang các phông dự phòng tiếp theo.
2.  **`font-size`:** Kích thước chữ (thường dùng đơn vị `rem`).
3.  **`font-weight`:** Độ đậm/nhạt của chữ. Có thể dùng các từ khóa như `normal` (400), `bold` (700) hoặc các giá trị số từ `100` đến `900`.
4.  **`font-style`:** Kiểu chữ (thường dùng `italic` để in nghiêng).
5.  **`line-height`:** Chiều cao của dòng (khoảng cách theo chiều dọc giữa các dòng chữ).
6.  **`letter-spacing` & `word-spacing`:** Khoảng cách giữa các ký tự chữ cái và giữa các từ với nhau.
7.  **`text-align`:** Căn lề văn bản (`left`, `right`, `center`, `justify`).
8.  **`text-transform`:** Biến đổi kiểu chữ (`uppercase` - viết hoa toàn bộ, `lowercase` - viết thường, `capitalize` - viết hoa chữ cái đầu).
9.  **`text-decoration`:** Trang trí văn bản (ví dụ: `underline` để gạch chân, `none` để bỏ gạch chân của thẻ link).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn định nghĩa Fallback Font:** Phải luôn kết thúc thuộc tính `font-family` bằng một họ phông chung (generic family) như `sans-serif`, `serif` hoặc `monospace` để phòng hờ trường hợp phông chính không tải được.
*   **Sử dụng `line-height` không đơn vị (Unitless):** Khi viết `line-height: 1.5;` (không kèm theo `px` hay `rem`), trình duyệt sẽ tự động lấy tỷ lệ `1.5` nhân với kích thước chữ (`font-size`) của chính phần tử đó. Đây là cách tính chuẩn xác nhất và giúp các thẻ con dễ dàng kế thừa mà không bị lỗi.
*   **Giới hạn độ dài dòng (Line Length):** Để người dùng không bị mỏi mắt khi đọc, một dòng văn bản tối ưu chỉ nên chứa từ **45 đến 75 ký tự**. Hãy sử dụng thuộc tính `max-width` (ví dụ `max-width: 65ch`) cho các thẻ chứa đoạn văn (`<p>`).

**💻 Cách dùng & Code minh họa chuyên sâu:**

```css
/* Thiết lập kiểu chữ tổng thể cho toàn bộ trang web */
body {
  /* Khai báo font chính đi kèm các phông dự phòng an toàn trên mọi hệ điều hành */
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  
  font-size: 1rem; /* Chuẩn 16px */
  
  /* Sử dụng line-height không đơn vị giúp văn bản thoáng và dễ đọc */
  line-height: 1.6;
  
  color: #1a202c;
}

/* Định dạng cho tiêu đề chính */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.05em; /* Tạo khoảng cách nhẹ giữa các chữ cái cho tiêu đề */
  color: #2d3748;
}

/* Định dạng cho các đoạn văn bản (Paragraph) */
p {
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  
  /* Giới hạn chiều rộng dòng văn bản giúp tối ưu trải nghiệm đọc */
  max-width: 65ch; 
}

/* Tùy chỉnh riêng cho các liên kết */
a {
  color: #3182ce;
  text-decoration: none; /* Xóa gạch chân mặc định của trình duyệt */
}

a:hover {
  text-decoration: underline; /* Hiện gạch chân khi di chuột vào */
}
```
## 07. Box Model - Mô hình hộp

**📝 Giới thiệu & Lý thuyết cơ bản:**
Trong CSS, mọi phần tử HTML đều được coi là một **chiếc hộp hình chữ nhật (Box)**. Mô hình hộp (Box Model) chính là cấu trúc quy định cách mà chiếc hộp này chiếm không gian và tương tác với các phần tử xung quanh.

Một Box Model tiêu chuẩn bao gồm 4 lớp (tính từ trong ra ngoài):
1.  **Content (Nội dung):** Vùng chứa nội dung cốt lõi bên trong (văn bản, hình ảnh...). Kích thước của nó được xác định bằng `width` và `height`.
2.  **Padding (Khoảng đệm):** Khoảng không gian nằm giữa nội dung và đường viền (Border). Padding nằm bên trong phần tử và sẽ bị ảnh hưởng bởi màu nền (background-color).
3.  **Border (Đường viền):** Đường viền bao quanh phần đệm và nội dung.
4.  **Margin (Khoảng cách ngoài):** Khoảng không gian trống nằm ở bên ngoài cùng, dùng để đẩy các phần tử khác ra xa (không có màu nền).

**Vấn đề kinh điển với Box-Sizing:**
Mặc định của trình duyệt (`content-box`), khi bạn set `width: 200px` và `padding: 20px`, tổng chiều rộng thực tế của phần tử sẽ bị cộng dồn thành `200 + 20 + 20 = 240px`, gây ra hiện tượng phá vỡ bố cục (tràn màn hình). 
Để giải quyết triệt để vấn đề này, lập trình viên hiện đại luôn sử dụng **`box-sizing: border-box;`**, giúp tính tổng kích thước bao gồm cả padding và border nằm gọn trong giá trị `width` đã định nghĩa.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn áp dụng Border-Box toàn cục:** Hãy luôn thêm đoạn code chuẩn hóa `* { box-sizing: border-box; }` vào ngay những dòng đầu tiên của file CSS để việc tính toán kích thước giao diện trở nên trực quan và dễ dàng hơn.
*   **Hiểu rõ Margin Collapse (Hiện tượng sụp đổ Margin):** Khi hai thẻ khối (block) nằm chồng lên nhau, khoảng cách margin trên và dưới của chúng sẽ không cộng dồn lại với nhau, mà sẽ lấy giá trị **lớn nhất** trong hai margin đó. Hãy lưu ý điều này khi căn khoảng cách trên dưới.
*   **Dùng Padding để tạo không gian bấm (Click Area):** Thay vì tăng kích thước nút bằng margin, hãy dùng padding để mở rộng vùng nhận diện cú click chuột, giúp trải nghiệm người dùng trên điện thoại tốt hơn.

**💻 Cách dùng & Code minh họa chuyên sâu:**

```css
/* ==========================================
   1. CHUẨN HÓA BỘ KHUNG TOÀN CỤC (QUAN TRỌNG)
=========================================== -->
*, *::before, *::after {
  box-sizing: border-box; /* Ép mọi phần tử tính kích thước chuẩn border-box */
}

/* ==========================================
   2. VÍ DỤ CỤ THỂ VỀ CẤU TRÚC BOX MODEL
=========================================== -->
.product-card {
  /* Kích thước tổng thể của hộp sẽ đúng bằng 300px (đã gồm padding và border) */
  width: 300px;
  
  /* Khoảng cách ngoài: Căn giữa khối hộp (auto trái/phải) và cách lề dưới 2rem */
  margin: 0 auto 2rem auto; 
  
  /* Khoảng cách đệm bên trong hộp */
  padding: 1.5rem; 
  
  /* Đường viền */
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  
  /* Màu nền (sẽ bao trùm cả vùng Content và Padding) */
  background-color: #ffffff;
  
  /* Đổ bóng cho hộp */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```
## 08. Backgrounds & Borders - Hình nền & Đường viền

**📝 Giới thiệu & Lý thuyết cơ bản:**
Nhóm thuộc tính này giúp trang web của bạn trở nên sinh động, có chiều sâu và phân định rõ ràng các khối giao diện:
1.  **Background (Nền):**
    *   `background-color`: Đặt màu nền.
    *   `background-image`: Chèn hình ảnh hoặc hiệu ứng màu chuyển sắc (gradients).
    *   `background-size`: Kích thước hiển thị của ảnh nền (`cover` - phủ kín khung, `contain` - vừa vặn bên trong khung).
    *   `background-position`: Vị trí đặt ảnh (`center`, `top`, `left`).
    *   `background-repeat`: Kiểm soát lặp lại ảnh (`no-repeat`, `repeat-x`, `repeat-y`).
2.  **Borders & Shadows (Đường viền & Đổ bóng):**
    *   `border`: Gom nhóm độ dày, kiểu viền (solid, dashed) và màu sắc.
    *   `border-radius`: Bo tròn các góc của khối hộp.
    *   `box-shadow`: Tạo hiệu ứng đổ bóng đa chiều, tạo chiều sâu 3D cho phần tử (nổi lên trên mặt phẳng).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Sử dụng Shorthand thông minh:** Thay vì viết rời rạc từng dòng `background-color`, `background-image`, hãy gộp chúng vào thuộc tính viết tắt `background` hoặc `background-image` đi kèm gradient để tối ưu mã nguồn.
*   **Tối ưu ảnh nền:** Luôn nén hình ảnh trước khi dùng làm `background-image` để tránh làm chậm tốc độ tải trang (performance).

**💻 Code minh họa chuyên sâu:**
```css
.hero-banner {
  /* Kết hợp màu nền, hình nền và gradient overlay hiện đại */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('./images/hero-bg.jpg') no-repeat center center / cover;
  
  /* Bo góc và đổ bóng tạo chiều sâu */
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}
```
## 09. Display & Visibility - Kiểu hiển thị & Khả năng nhìn thấy

**📝 Giới thiệu & Lý thuyết cơ bản:**
Thuộc tính `display` quyết định cách một phần tử cư xử trong luồng bố cục của trang web:
1.  **`block`:** Chiếm toàn bộ chiều rộng có sẵn, luôn bắt đầu bằng một dòng mới (ví dụ: `<div>`, `<p>`, `<h1>`).
2.  **`inline`:** Chỉ chiếm chiều rộng vừa đúng nội dung bên trong, nằm trên cùng một dòng, **không nhận** kích thước `width` hay `height` (ví dụ: `<span>`, `<a>`).
3.  **`inline-block`:** Vừa nằm trên cùng một dòng (inline), vừa có thể tùy chỉnh kích thước `width`, `height`, `padding`, `margin` (block).
4.  **`none`:** Xóa hoàn toàn phần tử khỏi bố cục trang (trình duyệt bỏ qua hoàn toàn, không chiếm không gian).

Mặt khác, thuộc tính **`visibility`**:
*   `hidden`: Giống như `display: none` là làm biến mất phần tử, nhưng điểm khác biệt cốt lõi là nó **vẫn giữ nguyên khoảng không gian trống** mà phần tử đó đang chiếm chỗ trên giao diện.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Phân biệt `display: none` và `visibility: hidden`:** Dùng `display: none` khi bạn muốn ẩn hoàn toàn khối giao diện (ví dụ: ẩn popup modal). Dùng `visibility: hidden` khi bạn muốn tạm giấu một thành phần nhưng không muốn phần tử bên dưới bị xô lệch vị trí.

**💻 Code minh họa chuyên sâu:**

```css
/* Biến thẻ span thành khối inline-block để tùy chỉnh kích thước và padding */
.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  width: 120px;
  text-align: center;
}

/* Ẩn hoàn toàn phần tử và giải phóng không gian */
.is-hidden {
  display: none; 
}

/* Ẩn phần tử nhưng vẫn giữ khoảng trống chỗ ngồi */
.is-invisible {
  visibility: hidden;
}
```
## 10. Position - Định vị không gian

**📝 Giới thiệu & Lý thuyết cơ bản:**
Thuộc tính `position` cho phép bạn "bẻ cong" các quy tắc bố cục tự nhiên để đặt một phần tử vào vị trí chính xác trên màn hình thông qua các tọa độ `top`, `right`, `bottom`, `left`.

Có 5 giá trị vị trí chính:
1.  **`static`:** Mặc định của trình duyệt, tuân theo luồng chảy tự nhiên.
2.  **`relative`:** Tương đối. Phần tử vẫn giữ nguyên vị trí cũ trong luồng, nhưng bạn có thể dịch chuyển nó đi một khoảng dựa trên chính tọa độ gốc của nó.
3.  **`absolute`:** Tuyệt đối. Phần tử bị bứt ra khỏi luồng tài liệu. Nó sẽ được định vị dựa trên **thẻ cha gần nhất có position khác static** (nếu không có, nó sẽ neo theo khung nhìn trình duyệt).
4.  **`fixed`:** Cố định. Phần tử được neo chặt vào màn hình trình duyệt, **không bị trôi** khi người dùng cuộn chuột (thường dùng làm thanh Navbar dính ở đầu trang).
5.  **`sticky`:** Bán cố định. Phần tử hoạt động như `relative` cho đến khi người dùng cuộn tới một ngưỡng nhất định, sau đó nó sẽ đứng yên như `fixed`.

**`z-index`:** Quy định tầng hiển thị trên dưới. Phần tử nào có `z-index` lớn hơn sẽ nằm đè lên phần tử có `z-index` nhỏ hơn (chỉ hoạt động với các phần tử có position khác static).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Quy tắc vàng cho Absolute:** Khi dùng `position: absolute` cho phần tử con (ví dụ: nút dấu X đóng khung ảnh), **bắt buộc** thẻ cha bao ngoài nó phải được gán `position: relative` để phần tử con không bị trôi đi lung tung trên toàn trang.

**💻 Code minh họa chuyên sâu:**

```css
/* Thẻ cha làm điểm tựa định vị */
.card-wrapper {
  position: relative; 
}

/* Nút icon đóng góc phải được định vị tuyệt đối so với thẻ cha */
.card-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10; /* Đảm bảo luôn nằm đè lên trên ảnh */
  background: red;
  color: white;
  border-radius: 50%;
}

/* Thanh điều hướng dính chặt ở đỉnh màn hình khi cuộn chuột */
.sticky-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
}
```
## 11. Flexbox - Mô hình dàn trang linh hoạt

**📝 Giới thiệu & Lý thuyết cơ bản:**
Flexbox (Flexible Box Layout) là một mô hình dàn trang một chiều (1-dimensional), chuyên dùng để sắp xếp, căn chỉnh khoảng cách và phân bố các phần tử bên trong một container theo hàng ngang (Row) hoặc cột dọc (Column) một cách cực kỳ mượt mà.

Để sử dụng Flexbox, bạn chỉ cần tác động lên 2 đối tượng:
1.  **Flex Container (Thẻ cha):** Khai báo `display: flex;` (hoặc `inline-flex`). Từ khoảnh khắc này, tất cả các thẻ con trực tiếp của nó sẽ tự động biến thành **Flex Items**.
2.  **Flex Items (Các thẻ con bên trong):** Tự động dàn trải và có thể điều chỉnh kích thước linh hoạt theo các thuộc tính căn chỉnh.

**Các thuộc tính cốt lõi cho Flex Container (Thẻ cha):**
*   `flex-direction`: Hướng sắp xếp (`row` - hàng ngang, `column` - cột dọc).
*   `justify-content`: Căn chỉnh theo **trục chính (Main Axis)** (ví dụ: `flex-start`, `center`, `space-between`, `space-around`).
*   `align-items`: Căn chỉnh theo **trục vuông góc (Cross Axis)** (ví dụ: `center`, `flex-start`, `stretch`).
*   `flex-wrap`: Cho phép các phần tử tự động xuống hàng khi màn hình quá nhỏ (`nowrap` vs `wrap`).
*   `gap`: Tạo khoảng cách đều giữa các items mà không cần dùng margin phức tạp.

**Các thuộc tính cốt lõi cho Flex Items (Thẻ con):**
*   `flex-grow`: Khả năng phình ra chiếm không gian thừa.
*   `flex-shrink`: Khả năng co lại khi màn hình nhỏ đi.
*   `flex-basis`: Kích thước cơ ban đầu trước khi chia không gian.
*   (Hoặc viết tắt gọn gàng bằng thuộc tính `flex: grow shrink basis`, ví dụ: `flex: 1` tương đương `flex: 1 1 0`).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Căn giữa tuyệt đối (Centering):** Thay vì dùng margin auto phức tạp như xưa, chỉ cần 3 dòng code `display: flex; justify-content: center; align-items: center;` là phần tử con sẽ nằm chính giữa tuyệt đối cả chiều ngang lẫn chiều dọc.
*   **Tạo Navbar tự động giãn cách:** Dùng `display: flex; justify-content: space-between; align-items: center;` để làm thanh menu gồm Logo ở bên trái và danh sách menu ở bên phải một cách hoàn hảo.

**💻 Cách dùng & Code minh họa chuyên sâu:**

```css
/* Thiết lập Flex Container cho Thanh điều hướng (Navbar) */
.navbar {
  display: flex;
  justify-content: space-between; /* Đẩy Logo sang trái, Menu sang phải tối đa */
  align-items: center;             /* Căn giữa theo chiều dọc */
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Thiết lập Flex Container cho danh sách sản phẩm (Card Grid) */
.product-grid {
  display: flex;
  flex-wrap: wrap;       /* Tự động xuống dòng khi hết chỗ */
  gap: 1.5rem;           /* Khoảng cách đều 24px giữa các card */
}

/* Thiết lập cho từng Card con bên trong */
.product-card {
  /* Mỗi card chiếm tối thiểu 280px, tự động giãn nở đều trên các màn hình */
  flex: 1 1 280px; 
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
}
```
## 12. CSS Grid - Mô hình dàn trang lưới 2 chiều

**📝 Giới thiệu & Lý thuyết cơ bản:**
Nếu Flexbox chuyên trị dàn trang 1 chiều (hoặc theo hàng, hoặc theo cột), thì **CSS Grid Layout** được sinh ra để xử lý các bố cục phức tạp **2 chiều (cả hàng lẫn cột cùng lúc)**. 

Để sử dụng CSS Grid, bạn cần tác động lên 2 đối tượng chính:
1.  **Grid Container (Thẻ cha):** Khai báo `display: grid;` (hoặc `inline-grid`). Từ đây, bạn chia không gian thành các cột và hàng bằng hai thuộc tính:
    *   `grid-template-columns`: Định nghĩa số lượng và chiều rộng của các cột.
    *   `grid-template-rows`: Định nghĩa chiều cao của các hàng.
    *   *Đơn vị đặc biệt `fr` (Fraction):* Đại diện cho một phần không gian trống còn lại trong lưới. (Ví dụ: `grid-template-columns: 1fr 2fr 1fr;` chia tổng chiều rộng thành 4 phần, cột giữa gấp đôi 2 cột bìa).
    *   `gap`: Tạo khoảng cách đều giữa các ô lưới (cả hàng lẫn cột).
2.  **Grid Items (Các thẻ con bên trong):** Có thể chiếm số lượng ô tùy ý thông qua:
    *   `grid-column`: Quyết định item chiếm từ cột mấy đến cột mấy (Ví dụ: `grid-column: 1 / 3` nghĩa là chiếm từ đường lưới số 1 đến số 3).
    *   `grid-row`: Quyết định chiều chiếm theo hàng tương tự.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Grid cho Layout tổng thể - Flexbox cho thành phần con:** Quy tắc vàng trong thiết kế hiện đại là dùng **CSS Grid** để chia bố cục lớn của toàn trang web (Header, Sidebar, Main Content, Footer), và dùng **Flexbox** để canh chỉnh các thành phần nhỏ bên trong (như căn giữa icon với chữ trong một nút bấm).
*   **Tạo lưới tự động thông minh (`auto-fit` / `auto-fill` kết hợp `minmax`):** Kỹ thuật này giúp bạn tạo ra một danh sách sản phẩm (Product Grid) tự động co giãn số lượng cột theo kích thước màn hình mà **không cần viết một dòng Media Query nào**.

**💻 Code minh họa chuyên sâu:**

```css
/* ==========================================
   1. BỐ CỤC LƯỚI TỔNG THỂ (DASHBOARD LAYOUT)
=========================================== */
.dashboard-layout {
  display: grid;
  /* Chia 2 cột: Sidebar rộng 250px, phần nội dung chiếm toàn bộ phần còn lại (1fr) */
  grid-template-columns: 250px 1fr;
  
  /* Chia 3 hàng: Header tự động, Main chiếm hết không gian còn lại, Footer tự động */
  grid-template-rows: auto 1fr auto;
  
  min-height: 100vh;
}

/* Định vị các khối bên trong Grid Layout */
.sidebar {
  grid-row: 1 / -1; /* Trải dài từ hàng đầu tiên đến hàng cuối cùng */
}

/* ==========================================
   2. LƯỚI SẢN PHẨM TỰ ĐỘNG RESPONSIVE (AUTO-FIT)
=========================================== */
.product-showcase {
  display: grid;
  /* Mỗi cột tối thiểu rộng 280px, nếu màn hình rộng hơn sẽ tự động sinh thêm cột */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem; /* Khoảng cách tự động đều đặn cả hàng lẫn cột */
  padding: 2rem;
}
```
## 13. Spacing & Sizing - Khoảng cách & Kích thước

**📝 Giới thiệu & Lý thuyết cơ bản:**
Kiểm soát kích thước (Sizing) và khoảng cách (Spacing) là hai yếu tố cốt lõi tạo nên sự thoáng đãng và cân đối cho giao diện. 

1.  **Sizing (Kích thước):**
    *   `width` / `height`: Định chiều rộng và chiều cao cố định hoặc tương đối.
    *   `min-width` / `max-width`: Giới hạn kích thước tối thiểu và tối đa của phần tử theo chiều ngang. Đây là "vũ khí bí mật" để tạo giao diện Responsive mà không sợ bị bóp méo trên màn hình nhỏ.
    *   `min-height` / `max-height`: Giới hạn chiều cao tương tự.
    *   *Giá trị nội dung tự động:* `fit-content` (vừa đúng nội dung bên trong), `max-content`, `min-content`.
2.  **Spacing (Khoảng cách):**
    *   Khoảng cách trong CSS được quản lý chủ yếu bằng `margin` (khoảng cách ngoài) và `padding` (khoảng cách đệm).
    *   *Logical Properties (Thuộc tính logic hiện đại):* Thay vì dùng `margin-top`/`margin-bottom`, CSS hiện đại hỗ trợ các thuộc tính theo hướng dòng đọc như `margin-block` (khoảng cách trên/dưới) và `margin-inline` (khoảng cách trái/phải), hỗ trợ cực tốt cho các ngôn ngữ đọc từ phải sang trái (RTL).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Tránh cố định `width` tuyệt đối cho các khối chứa (Container):** Thay vì viết `width: 600px;` (khiến giao diện bị tràn viền và vỡ trên điện thoại màn hình hẹp), hãy luôn ưu tiên dùng **`max-width: 600px; width: 100%;`**. Điều này giúp khối hộp tự động co giãn nhỏ lại trên điện thoại nhưng không vượt quá 600px trên máy tính.
*   **Sử dụng `min-height` cho các phần Hero/Banner:** Để đảm bảo banner luôn phủ kín một phần màn hình điện thoại hoặc máy tính bảng mà không bị cụt nội dung khi màn hình thay đổi chiều cao, hãy dùng `min-height: 50vh;` thay vì `height: 500px;`.

**💻 Code minh họa chuyên sâu:**

```css
/* ==========================================
   1. KỸ THUẬT QUẢN LÝ KÍCH THƯỚC THÔNG MINH
=========================================== */
.container-box {
  /* Khối hộp linh hoạt: Chiếm tối đa 100% chiều rộng, nhưng không vượt quá 1200px */
  width: 100%;
  max-width: 1200px;
  
  /* Căn giữa khối hộp tự động bằng margin ngang */
  margin-inline: auto; 
  
  /* Khoảng cách đệm an toàn cho các cạnh */
  padding-inline: 1.5rem;
}

/* ==========================================
   2. XỬ LÝ HÌNH ẢNH RESPONSIVE TRÁNH TRÀN KHUNG
=========================================== */
img.responsive-img {
  /* Đảm bảo ảnh không bao giờ bị phình to hơn kích thước gốc của nó, 
     nhưng sẽ tự co nhỏ lại khi màn hình hẹp hơn */
  max-width: 100%;
  height: auto;
  display: block;
}

/* ==========================================
   3. KHỐI NỘI DUNG CÓ CHIỀU CAO TỐI THIỂU
=========================================== */
.hero-section {
  min-height: 70vh; /* Luôn chiếm tối thiểu 70% chiều cao màn hình thiết bị */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```
## 14. Responsive Design - Thiết kế thích ứng

**📝 Giới thiệu & Lý thuyết cơ bản:**
Responsive Design là kỹ thuật giúp giao diện trang web tự động co giãn và thay đổi bố cục mượt mà trên mọi thiết bị (từ điện thoại di động, máy tính bảng cho đến màn hình máy tính lớn). 
Công cụ cốt lõi là **Media Queries** (`@media`), cho phép bạn áp dụng các đoạn mã CSS khác nhau dựa trên điều kiện của thiết bị (ví dụ: chiều rộng màn hình `max-width`).

**🎯 Best Practices (Mobile-First):**
*   **Tư duy Mobile-First:** Luôn viết CSS cơ bản cho màn hình điện thoại trước, sau đó dùng `@media (min-width: ...)` để mở rộng giao diện cho màn hình lớn hơn. Cách này giúp code nhẹ hơn và tối ưu hiệu suất cho di động.
*   **Tránh dùng điểm gãy (Breakpoints) cố định quá nhiều:** Chỉ đặt breakpoints tại các mốc thay đổi bố cục thực tế (ví dụ: `768px` cho tablet, `1024px` cho desktop) thay vì phụ thuộc vào kích thước của một dòng điện thoại cụ thể nào đó.

**💻 Code minh họa:**
```css
/* Mặc định: Giao diện cho điện thoại (Mobile-First) */
.sidebar {
  display: none; 
}

/* Khi màn hình từ 768px trở lên (Tablet & Desktop) */
@media (min-width: 768px) {
  .sidebar {
    display: block;
    width: 250px;
  }
}
```
## 15. Pseudo-classes & Pseudo-elements - Bộ chọn giả & Thành phần giả

**📝 Giới thiệu & Lý thuyết cơ bản:**
CSS cung cấp các bộ chọn đặc biệt giúp bạn nhắm mục tiêu vào các phần tử dựa trên **trạng thái** của chúng hoặc tạo ra các phần tử **"ảo"** không có sẵn trong mã HTML.

1.  **Pseudo-classes (Bộ chọn giả - Ký hiệu một dấu `:`):**
    Dùng để chọn phần tử khi chúng nằm ở một trạng thái cụ thể hoặc có vị trí xác định trong cây DOM:
    *   *Trạng thái tương tác:* `:hover` (khi di chuột qua), `:focus` (khi chọn vào input/button), `:active` (khi đang click giữ chuột).
    *   *Trạng thái biểu mẫu:* `:checked` (checkbox/radio được chọn), `:disabled` / `:enabled`, `:valid` / `:invalid`.
    *   *Bộ chọn cấu trúc (Structural):* `:first-child`, `:last-child`, `:nth-child(n)` (chọn phần tử thứ n, ví dụ chọn hàng chẵn lẻ để làm bảng sọc bàn cờ).
    *   *Phủ định:* `:not(selector)` (chọn tất cả trừ phần tử khớp với điều kiện trong ngoặc).

2.  **Pseudo-elements (Thành phần giả - Ký hiệu hai dấu `::`):**
    Dùng để định dạng một **phần cụ thể** của phần tử hoặc chèn thêm nội dung ảo vào giao diện mà không cần sửa file HTML:
    *   `::before`: Tạo ra một phần tử con ảo nằm **ngay trước** nội dung của phần tử chính.
    *   `::after`: Tạo ra một phần tử con ảo nằm **ngay sau** nội dung của phần tử chính.
    *   `::first-letter`: Định dạng chữ cái đầu tiên của đoạn văn.
    *   `::placeholder`: Tùy chỉnh kiểu dáng cho chữ gợi ý mờ bên trong ô input.
    *   `::selection`: Tùy chỉnh màu sắc khi người dùng bôi đen (highlight) văn bản trên trang.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn phân biệt rõ 1 dấu `:` và 2 dấu `::`:** Mặc dù trình duyệt hiện đại đôi khi vẫn châm chước cho phép viết `:before`, nhưng theo chuẩn CSS3, bạn **phải viết hai dấu (`::before`, `::after`)** cho Pseudo-elements để phân biệt rõ với Pseudo-classes.
*   **Bắt buộc có `content` cho `::before` và `::after`:** Hai thành phần giả này sẽ **không bao giờ xuất hiện** trên giao diện nếu bạn quên khai báo thuộc tính `content`. Ngay cả khi chỉ muốn tạo một hình khối trang trí không có chữ, bạn vẫn phải viết `content: "";`.
*   **Sử dụng `:not()` để tối ưu hóa code:** Thay vì viết style rồi lại viết thêm một đoạn ghi đè để tắt nó đi, hãy dùng `:not(.is-active)` để loại trừ ngay từ đầu.

**💻 Cách dùng & Code minh họa chuyên sâu:**

```css
/* ==========================================
   1. PSEUDO-CLASSES (TRẠNG THÁI & CẤU TRÚC)
=========================================== */
/* Hiệu ứng tương tác cho nút bấm */
.btn {
  background-color: #3182ce;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #2b6cb0; /* Sáng màu hơn khi hover */
}

.btn:active {
  transform: scale(0.98); /* Hiệu ứng lún xuống khi click */
}

/* Tạo bảng sọc bàn cờ cho danh sách hàng (Chỉ chọn hàng chẵn) */
tr:nth-child(even) {
  background-color: #f7fafc;
}

/* Chọn mọi thẻ input ngoại trừ loại checkbox */
input:not([type="checkbox"]) {
  width: 100%;
  padding: 0.5rem;
}


/* ==========================================
   2. PSEUDO-ELEMENTS (TRANG TRÍ VÀ THÀNH PHẦN ẢO)
=========================================== */
/* Thêm dấu sao đỏ báo hiệu trường bắt buộc nhập vào trước label */
.field-required::before {
  content: "* ";
  color: #e53e3e;
  font-weight: bold;
}

/* Tùy chỉnh màu nền và màu chữ khi người dùng bôi đen văn bản trên trang */
::selection {
  background-color: #ebf8ff;
  color: #2b6cb0;
}

/* Tùy chỉnh phong cách chữ gợi ý (placeholder) trong input */
input::placeholder {
  color: #a0aec0;
  font-style: italic;
}
```
## 16. Transitions, Transforms & Animations - Hiệu ứng chuyển động

**📝 Giới thiệu & Lý thuyết cơ bản:**
Để giao diện web không bị cứng nhắc, CSS cung cấp bộ công cụ mạnh mẽ để tạo ra các hiệu ứng chuyển động mượt mà mà không cần dùng đến JavaScript:

1.  **CSS Transitions (Chuyển đổi trạng thái):**
    Cho phép một thuộc tính CSS thay đổi giá trị một cách từ từ (có độ trễ về thời gian) thay vì giật cục ngay lập tức khi trạng thái thay đổi (ví dụ: khi người dùng đưa chuột vào `:hover`).
    *   `transition-property`: Tên thuộc tính áp dụng hiệu ứng (ví dụ: `background-color`, `transform`).
    *   `transition-duration`: Thời gian diễn ra hiệu ứng (ví dụ: `0.3s` hoặc `300ms`).
    *   `transition-timing-function`: Tốc độ gia tốc (`ease`, `linear`, `ease-in-out`, `cubic-bezier`).
    *   `transition-delay`: Thời gian chờ trước khi bắt đầu hiệu ứng.
    (Có thể viết tắt gọn gàng bằng shorthand: `transition: transform 0.3s ease-in-out;`)

2.  **CSS Transforms (Biến đổi hình học):**
    Cho phép bạn thay đổi hình dạng, vị trí hoặc góc quay của phần tử trong không gian 2D hoặc 3D mà không làm ảnh hưởng đến luồng bố cục xung quanh:
    *   `translate(x, y)`: Dịch chuyển phần tử theo trục hoành hoặc tung.
    *   `scale(n)`: Phóng to hoặc thu nhỏ phần tử.
    *   `rotate(deg)`: Xoay phần tử theo góc độ (ví dụ: `45deg`).
    *   `skew(x, y)`: Làm nghiêng phần tử.

3.  **CSS Animations & Keyframes (Hoạt ảnh phức tạp):**
    Cho phép tạo ra các chuỗi chuyển động phức tạp tự động chạy hoặc lặp lại nhiều lần mà không cần sự can thiệp từ trạng thái `:hover` hay `:focus`. Sử dụng quy tắc `@keyframes` để định nghĩa từng cột mốc (từ `0%` đến `100%`) của hoạt ảnh.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Tối ưu hiệu suất tuyệt đối (GPU Acceleration):** Khi làm hiệu ứng chuyển động, **chỉ nên animate hai thuộc tính `transform` và `opacity`**. Trình duyệt sẽ đẩy các tác vụ này sang card đồ họa (GPU) xử lý giúp chuyển động đạt 60fps siêu mượt. 
*   **Tránh Animating Layout Properties:** Tuyệt đối tránh animate các thuộc tính kích thước hoặc tọa độ như `width`, `height`, `top`, `left`, `margin`. Việc này buộc trình duyệt phải tính toán lại toàn bộ bố cục (Layout Thrashing), gây ra hiện tượng giật lag (jank) rất khó chịu.

**💻 Cách dùng & Code minh họa chuyên sâu:**

```css
/* ==========================================
   1. TRANSITIONS & TRANSFORMS (HIỆU ỨNG KHI HOVER)
=========================================== */
.product-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  /* Khai báo transition cho các thuộc tính sẽ thay đổi */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  /* Kết hợp dịch chuyển lên trên và phóng to nhẹ bằng transform */
  transform: translateY(-8px) scale(1.02);
  
  /* Tăng độ sâu bóng đổ khi nổi lên */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}


/* ==========================================
   2. CSS ANIMATIONS & KEYFRAMES (HOẠT ẢNH TỰ ĐỘNG)
=========================================== */
/* Định nghĩa các mốc thời gian cho hoạt ảnh xoay vòng tròn (Spinner tải dữ liệu) */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Áp dụng hoạt ảnh vào phần tử vòng quay */
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top-color: #3182ce; /* Tạo điểm nhấn màu sắc cho vòng quay */
  border-radius: 50%;
  
  /* Gọi animation: tên_keyframes | thời gian | kiểu chuyển động | lặp lại vô hạn */
  animation: spin 0.8s linear infinite;
}
```
## 17. CSS Functions & Custom Properties - Biến & Hàm CSS

**📝 Giới thiệu & Lý thuyết cơ bản:**
CSS hiện đại không chỉ là những dòng code tĩnh mà đã được trang bị các công cụ lập trình mạnh mẽ như biến số và các hàm toán học tích hợp sẵn:

1.  **Custom Properties (Biến CSS / CSS Variables):**
    Cho phép bạn lưu trữ các giá trị hay dùng (mã màu, khoảng cách, phông chữ, kích thước) vào trong một biến có tiền tố `--` để tái sử dụng xuyên suốt toàn bộ dự án. Khi cần thay đổi, bạn chỉ cần sửa ở một nơi duy nhất thay vì tìm sửa hàng trăm dòng code.
    *   Thường được khai báo toàn cục bên trong bộ chọn giả **`:root`** (tương ứng với thẻ gốc `<html>`).

2.  **CSS Functions (Các hàm tính toán & xử lý thông minh):**
    *   `var(--variable-name)`: Hàm gọi và sử dụng giá trị của biến CSS.
    *   `calc(expression)`: Cho phép thực hiện các phép tính toán học kết hợp giữa các đơn vị khác nhau (ví dụ: `width: calc(100% - 50px);`).
    *   `clamp(min, preferred, max)`: Hàm cực kỳ mạnh mẽ để tạo kích thước linh hoạt (responsive), tự động co giãn theo màn hình nhưng bị chặn giới hạn an toàn ở mức tối thiểu và tối đa.
    *   `min()` / `max()`: Chọn ra giá trị nhỏ nhất hoặc lớn nhất trong các tham số truyền vào.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Xây dựng Theme (Light/Dark Mode) cực kỳ dễ dàng:** Bằng cách gom toàn bộ màu sắc vào các biến CSS, bạn chỉ cần thay đổi giá trị của các biến đó khi người dùng chuyển sang chế độ tối mà không cần viết lại cấu trúc selector phức tạp.
*   **Tránh dùng giá trị cứng (Magic Numbers):** Thay vì gán các con số ngẫu nhiên khó hiểu khắp nơi, hãy đưa chúng vào biến hệ thống (như `--spacing-sm`, `--color-primary`) để duy trì tính nhất quán (design system) cho giao diện.

**💻 Code minh họa chuyên sâu:**

```css
/* ==========================================
   1. KHAI BÁO BIẾN TOÀN CỤC Ở :ROOT
=========================================== */
:root {
  /* Hệ thống màu sắc */
  --primary-color: #3182ce;
  --primary-hover: #2b6cb0;
  --bg-color: #f7fafc;
  --text-main: #2d3748;
  
  /* Hệ thống khoảng cách chuẩn */
  --space-unit: 1rem;
  --border-radius-md: 8px;
}

/* Biến thay đổi tự động khi kích hoạt Dark Mode */
[data-theme="dark"] {
  --bg-color: #1a202c;
  --text-main: #f7fafc;
}

/* ==========================================
   2. SỬ DỤNG BIẾN VÀ HÀM TRONG THỰC TẾ
=========================================== */
body {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: system-ui, sans-serif;
}

.card {
  background-color: var(--bg-color);
  
  /* Sử dụng hàm calc() để tính toán khoảng cách linh hoạt */
  padding: calc(var(--space-unit) * 1.5);
  
  border-radius: var(--border-radius-md);
  
  /* Sử dụng hàm clamp() để kích thước chữ tự động co giãn mượt mà theo màn hình 
     (Không bao giờ nhỏ hơn 1.2rem, ưu tiên theo 2.5vw, và không lớn hơn 2rem) */
  font-size: clamp(1.2rem, 2.5vw, 2rem);
}

.button-primary {
  background-color: var(--primary-color);
  color: #ffffff;
  padding: var(--space-unit) calc(var(--space-unit) * 2);
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  
  /* Sử dụng biến cho hiệu ứng chuyển động */
  transition: background-color 0.2s ease;
}

.button-primary:hover {
  background-color: var(--primary-hover);
}
```
## 18. Modern CSS - Các tính năng CSS hiện đại

**📝 Giới thiệu & Lý thuyết cơ bản:**
CSS đã có những bước tiến hóa thần kỳ trong những năm gần đây. Các trình duyệt hiện đại đã hỗ trợ nguyên bản (native) những tính năng cực kỳ mạnh mẽ mà trước đây lập trình viên buộc phải dùng thư viện hoặc bộ tiền xử lý mới có thể làm được:

1.  **Native CSS Nesting (Lồng nhau cú pháp chuẩn):**
    Cho phép bạn viết các quy tắc CSS lồng vào bên trong nhau (giống như Sass/SCSS) mà không cần cài đặt thêm công cụ biên dịch nào. Sử dụng ký tự đại diện `&` để chỉ định chính phần tử cha.

2.  **The `:has()` Selector (Bộ chọn phần tử cha - Parent Selector):**
    Được mệnh danh là "chén thánh" trong lịch sử CSS. Nó cho phép bạn **chọn và tác động lên phần tử cha** dựa trên điều kiện của phần tử con chứa bên trong nó (trước đây việc này hoàn toàn bất khả thi nếu không dùng JavaScript).

3.  **Cascade Layers (`@layer`):**
    Giúp quản lý tính xếp tầng (Cascade) và độ ưu tiên một cách chủ động. Bạn có thể phân chia các đoạn mã CSS thành từng lớp (layers) riêng biệt để kiểm soát xem nhóm style nào sẽ được ưu tiên ghi đè, giải quyết triệt để vấn đề xung đột Specificity.

4.  **Container Queries (`@container`):**
    Tiến hóa vượt bậc hơn Media Queries. Thay vì co giãn giao diện dựa theo kích thước màn hình thiết bị, Container Queries cho phép một thành phần (component) tự thay đổi giao diện dựa theo **kích thước của thẻ chứa nó**, giúp component trở nên cực kỳ linh hoạt (tái sử dụng ở bất cứ đâu).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Tận dụng Native Nesting hợp lý:** Hãy lồng nhau tối đa từ 2 đến 3 cấp để code dễ đọc. Tránh lạm dụng lồng nhau quá sâu làm tăng độ phức tạp của Specificity ẩn phía sau.
*   **Ứng dụng `:has()` cho Form & UI States:** Dùng `:has()` để đổi màu toàn bộ thẻ `.card` khi có một checkbox bên trong được check, hoặc làm sáng giao diện form ngay khi người dùng bắt đầu gõ chữ vào input.

**💻 Code minh họa chuyên sâu:**

```css
/* ==========================================
   1. NATIVE CSS NESTING (LỒNG NHAU CHUẨN)
=========================================== */
.product-card {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;

  /* Lồng thẻ con trực tiếp bên trong bằng dấu & */
  & .product-title {
    font-size: 1.25rem;
    color: #1a202c;
  }

  /* Lồng trạng thái hover */
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
}


/* ==========================================
   2. THE :HAS() SELECTOR (CHỌN THẺ CHA THÔNG MINH)
=========================================== */
/* Đổi màu viền và nền của thẻ card nếu có một input checkbox bên trong đang được check */
.card:has(input[type="checkbox"]:checked) {
  border-color: #4f46e5;
  background-color: #eef2ff;
}

/* Đổi màu nhãn (label) nếu ô input tương ứng đang được focus */
.form-group:has(input:focus) {
  color: #3182ce;
}


/* ==========================================
   3. CASCADE LAYERS (@LAYER) - QUẢN LÝ ĐỘ ƯU TIÊN
=========================================== */
/* Khai báo thứ tự ưu tiên của các lớp (Lớp viết sau cùng sẽ có quyền ghi đè cao nhất) */
@layer reset, base, components, utilities;

@layer reset {
  * { box-sizing: border-box; margin: 0; }
}

@layer components {
  .btn { padding: 0.5rem 1rem; background: gray; }
}

@layer utilities {
  .bg-blue { background: blue !important; }
}
```
## 19. CSS Architecture & Best Practices - Kiến trúc & Quy chuẩn

**📝 Giới thiệu & Lý thuyết cơ bản:**
Khi một dự án web phát triển từ vài chục trang lên đến hàng nghìn dòng code CSS, nếu không có một kiến trúc tổ chức rõ ràng, mã nguồn sẽ nhanh chóng trở thành một "đống mì tôm" hỗn độn: các quy tắc ghi đè lẫn nhau lung tung, không ai dám xóa dòng code cũ vì sợ làm hỏng giao diện trang khác.

Để giải quyết triệt để vấn đề này, lập trình viên áp dụng các **phương pháp kiến trúc (CSS Methodologies)**, phổ biến và thực chiến nhất là **BEM**.

1.  **Phương pháp BEM (Block - Element - Modifier):**
    BEM là quy chuẩn đặt tên class giúp mã CSS của bạn có cấu trúc rõ ràng, độc lập và dễ hiểu:
    *   **Block (Khối độc lập):** Thành phần lớn có ý nghĩa tự thân (ví dụ: `.card`, `.navbar`, `.form`).
    *   **Element (Thành phần con):** Thành phần nhỏ nằm bên trong Block, gắn liền với Block đó. Được phân tách bằng **hai dấu gạch dưới (`__`)** (ví dụ: `.card__title`, `.card__image`).
    *   **Modifier (Biến thể / Trạng thái):** Phiên bản thay đổi về hình dáng hoặc trạng thái của Block hoặc Element. Được phân tách bằng **hai dấu gạch ngang (`--`)** (ví dụ: `.card--highlight`, `.btn--primary`).

2.  **Tổ chức cấu trúc thư mục (File Structure):**
    Chia nhỏ code thành nhiều file riêng biệt thay vì dồn tất cả vào một file `style.css` khổng lồ:
    *   `base/`: Reset CSS, kiểu chữ chung, biến toàn cục (`:root`).
    *   `layouts/`: Bố cục lớn của trang (Header, Footer, Grid tổng thể).
    *   `components/`: Các thành phần nhỏ tái sử dụng (Buttons, Cards, Modals, Dropdowns).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Giữ độ ưu tiên phẳng (Flat Specificity):** Luôn đặt tên class độc lập theo chuẩn BEM thay vì viết lồng nhau sâu hoắm kiểu `.sidebar .menu ul li a`. Điều này giữ cho trọng số Specificity luôn bằng `0,1,0`, giúp bạn dễ dàng ghi đè style bất cứ lúc nào mà không cần dùng đến `!important`.
*   **Nói KHÔNG với ID trong CSS:** Tuyệt đối không dùng `#id` để định kiểu giao diện vì trọng số của ID quá cao, phá vỡ tính linh hoạt của hệ thống. Hãy dành ID độc quyền cho JavaScript.

**💻 Code minh họa chuẩn BEM:**

```css
/* ==========================================
   CHUẨN ĐẶT TÊN BEM CHO MỘT THÀNH PHẦN CARD
=========================================== */

/* 1. Block: Khối thẻ card độc lập */
.product-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* 2. Element: Tiêu đề bên trong card */
.product-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

/* 2. Element: Giá tiền bên trong card */
.product-card__price {
  font-size: 1.1rem;
  color: #3182ce;
  font-weight: 600;
}

/* 3. Modifier: Biến thể nổi bật (Được áp dụng thêm khi sản phẩm là hàng Hot) */
.product-card--featured {
  border: 2px solid #ecc94b;
  background-color: #fffaf0;
}

/* 3. Modifier: Trạng thái khi sản phẩm đã hết hàng */
.product-card--out-of-stock {
  opacity: 0.6;
  filter: grayscale(100%);
}
```
## 20. Debugging CSS & Mini Projects - Gỡ lỗi & Thực chiến

**📝 Giới thiệu & Lý thuyết cơ bản:**
CSS là một ngôn ngữ trực quan, vì vậy công cụ gỡ lỗi tốt nhất chính là DevTools tích hợp sẵn trong mọi trình duyệt hiện đại (Chrome, Edge, Firefox).

1.  **Quy trình Gỡ lỗi CSS chuẩn (Debugging Checklist):**
    *   *Bước 1: Kiểm tra phần tử (Inspect Element):* Nhấn chuột phải vào thành phần bị lỗi trên trang web và chọn **Inspect** (hoặc nhấn `F12`).
    *   *Bước 2: Kiểm tra tab Styles (Bên phải):* Xem các dòng CSS nào đang tác động lên phần tử. Những dòng bị gạch ngang (strikethrough) nghĩa là đã bị ghi đè bởi dòng khác có độ ưu tiên cao hơn.
    *   *Bước 3: Kiểm tra tab Computed (Bên cạnh tab Styles):* Xem sơ đồ Box Model thực tế của phần tử để biết chính xác kích thước, padding, margin và border đang chiếm bao nhiêu không gian.

2.  **Các lỗi kinh điển và cách khắc phục:**
    *   *Lỗi 1: Code CSS viết rồi nhưng không thấy thay đổi?* $\rightarrow$ Kiểm tra lại độ ưu tiên (Specificity) hoặc xem có bị lỗi chính tả/thiếu dấu ngoặc nhọn ở đoạn code phía trên không.
    *   *Lỗi 2: Bố cục bị tràn ngang màn hình (Overflow)?* $\rightarrow$ Kiểm tra xem có phần tử nào đang bị set cứng chiều rộng bằng `width: [số_lớn]px` thay vì dùng `max-width: 100%` không.
    *   *Lỗi 3: Khoảng cách giữa các thẻ khối bị cộng dồn kỳ lạ?* $\rightarrow$ Do hiện tượng sụp đổ Margin (Margin Collapse), hãy chuyển sang dùng `gap` trong Flexbox/Grid để quản lý khoảng cách an toàn hơn.


