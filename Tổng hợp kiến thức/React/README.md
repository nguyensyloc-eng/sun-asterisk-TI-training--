## 01. Tổng quan ReactJS

**📝 Giới thiệu & Lý thuyết cơ bản:**
React là một thư viện JavaScript mã nguồn mở được phát triển bởi Meta (Facebook) dùng để xây dựng giao diện người dùng (UI) dựa trên các thành phần (components).

1.  **Virtual DOM (DOM ảo):**
    *   DOM thật của trình duyệt rất chậm khi phải thao tác (thêm/sửa/xóa node) liên tục. React tạo ra một bản sao DOM ảo trên bộ nhớ RAM (Virtual DOM).
    *   Khi state thay đổi, React tính toán sự khác biệt giữa DOM ảo cũ và mới thông qua thuật toán **Diffing/Reconciliation**, sau đó chỉ cập nhật những phần thay đổi nhỏ nhất lên DOM thật (Selective DOM Updates).

2.  **Vì sao dùng React?**
    *   *Component-based:* Chia nhỏ giao diện thành các mảnh độc lập, dễ tái sử dụng và bảo trì.
    *   *Unidirectional Data Flow:* Luồng dữ liệu một chiều giúp kiểm soát trạng thái ứng dụng dễ dàng hơn.
    *   *Ecosystem cực lớn:* Cộng đồng khổng lồ, hàng ngàn thư viện hỗ trợ sẵn có.

3.  **So sánh với SPA / MVC truyền thống:**
    *   Mô hình MVC truyền thống (như jQuery kết hợp backend template) thường render toàn bộ trang từ server hoặc thao tác trực tiếp DOM thủ công, dễ dẫn đến rối loạn mã nguồn khi ứng dụng lớn. React mang đến trải nghiệm Single Page Application (SPA) mượt mà, chuyển trang không cần load lại trình duyệt.

---

## 02. Thiết lập môi trường & Công cụ

**📝 Giới thiệu & Lý thuyết cơ bản:**
Để phát triển ứng dụng React hiện đại, chúng ta không còn dùng Create React App (đã lỗi thời) mà chuyển sang sử dụng các công cụ siêu tốc:

1.  **Vite Scaffolding:**
    *   Vite là công cụ build tool thế hệ mới cực kỳ nhanh chóng nhờ tận dụng Native ESM trong quá trình phát triển (development).
    *   *Lệnh khởi tạo project:*
        ```bash
        npm create vite@latest my-react-app -- --template react-ts
        ```

2.  **Tailwind CSS:**
    *   Thư viện CSS Utility-first được tích hợp sẵn giúp định hình giao diện trực tiếp bằng các class ngắn gọn ngay trong file JSX.

---

## 03. JSX — Nền tảng cú pháp

**📝 Giới thiệu & Lý thuyết cơ bản:**
JSX (JavaScript XML) là phần mở rộng cú pháp của JavaScript cho phép bạn viết mã HTML trực tiếp bên trong file JS.

1.  **Cú pháp & Biểu thức:**
    *   Bạn có thể nhúng bất kỳ biểu thức JavaScript nào vào trong JSX thông qua cặp dấu ngoặc nhọn `{}`.
2.  **Quy tắc đặt tên & Thuộc tính (Gotchas):**
    *   *`className` thay vì `class`:* Do `class` là từ khóa của JavaScript, JSX sử dụng `className` để đặt tên lớp CSS.
    *   *CamelCase:* Các thuộc tính DOM như `onclick` chuyển thành `onClick`, `tabindex` thành `tabIndex`.
    *   *Đóng thẻ:* Mọi thẻ JSX bắt buộc phải được đóng kín (ví dụ: `<br />`, `<img />`).
    *   *Comments trong JSX:* Viết bên trong dấu ngoặc nhọn dạng `{/* nội dung comment */}`.

**💻 Code minh họa:**
```tsx
export default function UserGreeting() {
  const name = "Lập trình viên";
  const isLoggedIn = true;

  return (
    <div className="p-4 bg-light rounded shadow">
      {/* Sử dụng biểu thức JavaScript bên trong JSX */}
      <h1 className="text-xl font-bold">Xin chào, {name}!</h1>
      <p>{isLoggedIn ? "Bạn đã đăng nhập hệ thống." : "Vui lòng đăng nhập."}</p>
    </div>
  );
}
```
## 04. Component & Props

**📝 Giới thiệu & Lý thuyết cơ bản:**
Giao diện trong React được xây dựng dựa trên các **Components** (thành phần). Một component giống như một khối LEGO độc lập, có thể tái sử dụng, tự quản lý giao diện và nhận dữ liệu thông qua **Props**.

1.  **Functional Component vs. Class Component:**
    *   **Functional Component (Tiêu chuẩn hiện đại):** Là một hàm JavaScript nhận vào tham số là `props` và trả về mã JSX. Nhờ sự hỗ trợ của React Hooks, Functional Component đã trở thành tiêu chuẩn vàng, thay thế hoàn toàn Class Component cũ.
    *   **Class Component (Lỗi thời/Legacy):** Sử dụng cú pháp class của ES6, kế thừa từ `React.Component` và có phương thức `render()`. Hiện ít được dùng trong các dự án mới trừ khi bảo trì mã nguồn cũ.

2.  **Props (Properties - Thuộc tính truyền dữ liệu):**
    *   Props là cách để component cha truyền dữ liệu và hàm xử lý xuống cho component con (Luồng dữ liệu một chiều - Unidirectional Data Flow).
    *   *Quy tắc tối quan trọng (Read-Only):* **Props có tính bất biến**. Component con **tuyệt đối không được thay đổi** giá trị của props nhận từ cha. Nếu cần thay đổi dữ liệu theo hành động người dùng, hãy dùng `state` bên trong component con đó.

3.  **Render danh sách với phương thức `.map()`:**
    *   Khi bạn có một mảng dữ liệu (ví dụ: danh sách sản phẩm, danh sách bài viết), bạn dùng phương thức `.map()` kết hợp với props để chuyển đổi mảng dữ liệu đó thành một loạt các component con hiển thị trên giao diện một cách cực kỳ gọn gàng.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Nguyên tắc Đơn Trách Nhiệm (Single Responsibility Principle):** Mỗi component chỉ nên đảm nhận một nhiệm vụ duy nhất (ví dụ: một component chỉ chuyên hiển thị nút bấm, một component chuyên hiển thị khung card sản phẩm). Nếu một component quá dài (trên 150-200 dòng), hãy tách nhỏ nó ra.
*   **Sử dụng TypeScript Interfaces hoặc PropTypes:** Luôn định nghĩa rõ kiểu dữ liệu cho props ngay từ đầu (ví dụ dùng Interface trong TS) để tránh truyền sai kiểu dữ liệu và giúp công cụ gợi ý mã (IntelliSense) hoạt động hiệu quả.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Định nghĩa kiểu dữ liệu cho Props bằng TypeScript Interface
interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  onAddToCart: (title: string) => void; // Truyền hàm callback qua props
}

// 2. Component con: Nhận props và hiển thị giao diện thẻ sản phẩm
function ProductCard({ title, price, description, onAddToCart }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-blue-600 font-semibold">${price}</span>
        {/* Gọi hàm callback nhận từ component cha khi người dùng click */}
        <button 
          onClick={() => onAddToCart(title)}
          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}

// 3. Component cha: Quản lý danh sách dữ liệu và truyền xuống component con bằng .map()
export default function ProductCatalog() {
  // Dữ liệu mẫu (thường lấy từ API)
  const products = [
    { id: '1', title: 'Áo thun thể thao', price: 25, description: 'Chất liệu cotton thoáng mát, co giãn 4 chiều.' },
    { id: '2', title: 'Quần Jean nam', price: 45, description: 'Form dáng trẻ trung, bền bỉ theo thời gian.' },
    { id: '3', title: 'Giày chạy bộ Sneaker', price: 90, description: 'Êm ái, siêu nhẹ, hỗ trợ vận động tối đa.' },
  ];

  // Hàm xử lý sự kiện khi mua hàng
  const handleAddToCart = (productName: string) => {
    alert(`Đã thêm "${productName}" vào giỏ hàng thành công!`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Danh mục sản phẩm nổi bật</h2>
      
      {/* Hệ thống lưới hiển thị danh sách sử dụng .map() */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(item => (
          <ProductCard (sẽ // 07) Bắt buộc có description="{item.description}" học key kỹ lập mục onAddToCart="{handleAddToCart}" phải price="{item.price}" title="{item.title}" độc ở/>
        ))}
      </div>
    </div>
  );
}
```
## 05. State & Vòng đời Render

**📝 Giới thiệu & Lý thuyết cơ bản:**
Nếu `props` là dữ liệu được truyền từ bên ngoài vào, thì **`state`** chính là "trí nhớ nội bộ" của riêng một component. State cho phép component ghi nhớ thông tin thay đổi theo thời gian (ví dụ: trạng thái mở/đóng menu, giá trị ô input, giỏ hàng, số lượt thích).

1.  **`useState` Hook:**
    *   Là Hook cơ bản nhất để khai báo state trong Functional Component.
    *   Cú pháp: `const [state, setState] = useState(initialValue);` trả về một mảng chứa giá trị hiện tại và một hàm dùng để cập nhật giá trị đó.

2.  **Vòng đời Render & Commit (Render & Commit Cycle):**
    Mỗi khi state thay đổi, React thực hiện một tiến trình gồm 3 bước:
    *   *Trigger (Kích hoạt):* Sự kiện xảy ra yêu cầu render (ví dụ: gọi hàm `setState`).
    *   *Render (Tính toán):* React chạy lại hàm component để tính toán cấu trúc JSX mới dựa trên state mới.
    *   *Commit (Cập nhật DOM):* React cập nhật các thay đổi đó lên DOM thật của trình duyệt để người dùng nhìn thấy.

3.  **State as a Snapshot (Bức ảnh chụp tại thời điểm gọi):**
    *   Giá trị của state **không thay đổi ngay lập tức** ngay sau khi bạn gọi hàm `setState` trong cùng một vòng đời thực thi hàm. Nó hoạt động như một "bức ảnh chụp" (snapshot) tại thời điểm sự kiện được kích hoạt.

4.  **Batching (Gộp trạng thái tối ưu):**
    *   React tự động gom nhóm nhiều lệnh `setState` liên tiếp thành một lần render duy nhất để tiết kiệm tài nguyên xử lý và tối ưu hiệu suất.

5.  **Tính bất biến (Immutability):**
    *   **Tuyệt đối không bao giờ được thay đổi trực tiếp state** (ví dụ: `user.name = 'A'` hoặc `arr.push(item)`). 
    *   Bạn bắt buộc phải tạo ra một bản sao hoàn toàn mới (sử dụng toán tử spread `...` hoặc các phương thức mảng không làm thay đổi mảng gốc như `.map()`, `.filter()`) rồi mới truyền bản sao đó vào hàm cập nhật state.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Dùng Functional Updates khi phụ thuộc vào state cũ:** Nếu trạng thái tiếp theo phụ thuộc vào giá trị state trước đó (ví dụ: tăng bộ đếm `count + 1`), hãy truyền một hàm vào `setState` thay vì truyền trực tiếp giá trị: `setCount(prevCount => prevCount + 1)`.
*   **Đặt State ở vị trí hợp lý:** Đừng đưa mọi state lên cấp cao nhất nếu nó chỉ cần thiết ở một component con. Hãy giữ state gần với nơi nó được sử dụng nhất.

**💻 Code minh họa chuyên sâu:**

```tsx
'use client';
import { useState } from 'react';

interface UserProfile {
  name: string;
  age: number;
}

export default function StateDemoComponent() {
  // 1. Khởi tạo state dạng nguyên thủy (Primitive)
  const [count, setCount] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // 2. Khởi tạo state dạng Object phức tạp
  const [user, setUser] = useState<UserProfile>({
    name: 'Nguyễn Văn A',
    age: 25,
  });

  // 3. Khởi tạo state dạng Mảng (Array)
  const [tasks, setTasks] = useState<string[]>(['Học React', 'Làm bài tập']);
  const [newTaskInput, setNewTaskInput] = useState<string>('');

  // Xử lý tăng bộ đếm dùng functional update
  const handleIncrement = () => {
    setCount(prev => prev + 1); // Đảm bảo luôn lấy giá trị mới nhất chính xác
  };

  // Cập nhật Object tuân thủ tính bất biến (Immutability)
  const handleUpdateAge = () => {
    setUser(prevState => ({
      ...prevState, // Giữ lại các thuộc tính cũ (name)
      age: prevState.age + 1, // Thay đổi thuộc tính cần thiết
    }));
  };

  // Cập nhật Mảng tuân thủ tính bất biến
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;

    // Dùng toán tử spread [...] để tạo mảng mới thay vì dùng .push() trực tiếp
    setTasks(prevTasks => [...prevTasks, newTaskInput]);
    setNewTaskInput(''); // Reset ô input
  };

  return (
    <div className={`p-6 max-w-md mx-auto rounded shadow ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-xl font-bold mb-4">Minh họa State & Immutability</h2>

      {/* Phần 1: Count & Theme */}
      <div className="mb-6 p-4 border rounded">
        <p className="mb-2">Bộ đếm: <span className="font-bold">{count}</span></p>
        <button onClick={handleIncrement} className="px-3 py-1 bg-blue-600 text-white rounded mr-2 text-sm">
          Tăng giá trị
        </button>
        <button 
          onClick={() => setIsDarkMode(prev => !prev)} 
          className="px-3 py-1 bg-gray-600 text-white rounded text-sm"
        >
          Đổi giao diện ({isDarkMode ? 'Tối' : 'Sáng'})
        </button>
      </div>

      {/* Phần 2: Cập nhật Object */}
      <div className="mb-6 p-4 border rounded">
        <p className="mb-1">Họ tên: {user.name}</p>
        <p className="mb-2">Tuổi: {user.age}</p>
        <button onClick={handleUpdateAge} className="px-3 py-1 bg-green-600 text-white rounded text-sm">
          Tăng tuổi thêm 1
        </button>
      </div>

      {/* Phần 3: Cập nhật Mảng (Array) */}
      <div className="p-4 border rounded">
        <form onSubmit={handleAddTask} className="flex gap-2 mb-3">
          <input 
            type="text" 
            placeholder="Nhập việc cần làm..." 
            value={newTaskInput}
            onChange={(e) => setNewTaskInput(e.target.value)}
            className="border p-1 text-sm rounded flex-1 text-black"
          />
          <button type="submit" className="px-3 py-1 bg-purple-600 text-white rounded text-sm">Thêm</button>
        </form>
        
        <ul className="list-disc pl-5 text-sm space-y-1">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
```
## 06. Sự kiện & Forms

**📝 Giới thiệu & Lý thuyết cơ bản:**
Xử lý sự kiện và thu thập dữ liệu từ người dùng là cầu nối tương tác cốt lõi của mọi ứng dụng web. React mang đến một mô hình sự kiện đồng nhất và hệ thống quản lý biểu mẫu mạnh mẽ.

1.  **SyntheticEvent (Sự kiện tổng hợp):**
    *   React không gắn trực tiếp event listener vào từng DOM node riêng lẻ mà sử dụng cơ chế **Event Delegation** tập trung tại gốc ứng dụng. Các sự kiện trong React (`onClick`, `onChange`, `onSubmit`) là các `SyntheticEvent` – những đối tượng bao bọc (wrapper) giúp chuẩn hóa hành vi, đảm bảo tính tương thích tuyệt đối trên mọi trình duyệt.
    *   *(Lưu ý lịch sử):* Cơ chế *Event Pooling* (gom nhóm sự kiện tối ưu bộ nhớ) đã chính thức bị loại bỏ từ React 17, cho phép bạn thoải mái truy cập sự kiện bất cứ lúc nào mà không sợ bị trả về giá trị `null`.

2.  **Controlled vs. Uncontrolled Components:**
    *   **Controlled Component (Khuyên dùng):** Giá trị của các trường form được kiểm soát hoàn toàn bởi React State (`value={state}` kết hợp với hàm `onChange`). Mô hình này giúp bạn dễ dàng validate dữ liệu ngay lúc gõ, định dạng văn bản hoặc chặn ký tự không hợp lệ.
    *   **Uncontrolled Component:** Dữ liệu form do chính DOM tự quản lý bên dưới. Bạn sử dụng hook `useRef` để tham chiếu trực tiếp tới phần tử DOM và lấy giá trị khi cần thiết (thường dùng cho input kiểu file hoặc tích hợp với các thư viện bên thứ ba).

3.  **Xử lý các loại Input cơ bản:**
    *   `input` (text/number), `textarea`, và `select` đều tuân theo mô hình Controlled Component thông qua thuộc tính `value` và `onChange`.
    *   Riêng input kiểu file (`type="file"`) bắt buộc phải dùng dạng Uncontrolled vì thuộc tính `value` của nó có tính chất read-only (chỉ đọc) trên trình duyệt.

4.  **Form Actions (React 19+):**
    *   Từ các phiên bản gần đây, React hỗ trợ nguyên bản cơ chế xử lý form thông qua các hàm Async Actions, cho phép bạn truyền trực tiếp hàm bất đồng bộ vào thuộc tính `action` của thẻ `<form>`, đồng thời kết hợp với `useActionState` và `useFormStatus` để tự động quản lý trạng thái loading mà không cần viết nhiều dòng code quản lý state thủ công.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Ưu tiên Controlled Component cho form dữ liệu thông thường:** Giúp bạn nắm quyền kiểm soát toàn bộ trạng thái input, dễ dàng thực hiện form validation trực tiếp trước khi người dùng bấm submit.
*   **Dùng Uncontrolled cho File Upload:** Vì input file không thể gán giá trị `value` bằng state, hãy sử dụng `useRef` để trích xuất file khi người dùng gửi form.

**💻 Code minh họa chuyên sâu:**

```tsx
'use client';
import { useState, useRef } from 'react';

export default function AdvancedFormDemo() {
  // 1. Quản lý State cho Controlled Components
  const [formData, setFormData] = useState({
    username: '',
    role: 'developer',
    isAccepted: false,
  });

  // 2. Sử dụng useRef cho Uncontrolled Component (File Upload)
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Xử lý thay đổi chung cho mọi input text/select/checkbox
  const handleChange = (e: React.ChangeEvent<HTMLInputElement HTMLSelectElement |>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: val,
    }));
  };

  // Xử lý sự kiện Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    // Lấy file từ Uncontrolled Input thông qua ref
    const uploadedFile = fileInputRef.current?.files?.[0];

    // Giả lập quá trình gửi dữ liệu bất đồng bộ lên server
    setTimeout(() => {
      console.log('Dữ liệu form:', formData);
      console.log('Tệp tải lên:', uploadedFile ? uploadedFile.name : 'Không có tệp');
      
      setLoading(false);
      setSuccessMessage('Đăng ký tài khoản thành công!');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto border rounded shadow space-y-4">
      <h2 className="text-xl font-bold mb-4">Đăng ký thông tin thành viên</h2>

      {successMessage && (
        <div className="p-3 bg-green-100 text-green-700 rounded text-sm">{successMessage}</div>
      )}

      {/* Controlled Input: Text */}
      <div>
        <label className="block text-sm font-medium mb-1">Tên hiển thị</label>
        <input 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange}
          required
          placeholder="Nhập tên của bạn..."
          className="w-full border p-2 rounded text-sm" 
        />
      </div>

      {/* Controlled Input: Select Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Chuyên môn</label>
        <select 
          name="role" 
          value={formData.role} 
          onChange={handleChange} 
          className="w-full border p-2 rounded text-sm"
        >
          <option value="developer">Lập trình viên</option>
          <option value="designer">Thiết kế giao diện</option>
          <option value="manager">Quản lý dự án</option>
        </select>
      </div>

      {/* Uncontrolled Input: File Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">Ảnh đại diện (File)</label>
        <input 
          type="file" 
          ref={fileInputRef} 
          className="w-full border p-1 rounded text-sm" 
        />
      </div>

      {/* Controlled Input: Checkbox */}
      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          name="isAccepted" 
          checked={formData.isAccepted} 
          onChange={handleChange} 
          id="acceptCheck"
        />
        <label htmlFor="acceptCheck" className="text-sm">Tôi đồng ý với các điều khoản bảo mật</label>
      </div>

      {/* Nút Submit kèm trạng thái Loading */}
      <button 
        type="submit" 
        disabled={loading || !formData.isAccepted}
        className="w-full bg-blue-600 text-white p-2 rounded text-sm font-medium hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Đang xử lý...' : 'Gửi thông tin'}
      </button>
    </form>
  );
}
```
## 07. Lists & Keys

**📝 Giới thiệu & Lý thuyết cơ bản:**
Khi phát triển giao diện, việc hiển thị các danh sách dữ liệu (như danh sách sản phẩm, bài viết, tin nhắn) bằng phương thức `.map()` của JavaScript là cực kỳ phổ biến. Tuy nhiên, React đòi hỏi một cơ chế định danh nghiêm ngặt thông qua thuộc tính **`key`**.

1.  **Nguyên tắc cốt lõi của Key:**
    *   Thuộc tính `key` là một chuỗi hoặc số duy nhất giúp React nhận diện phần tử nào đã thay đổi, được thêm vào, hay bị xóa đi trong quá trình thuật toán **Diffing/Reconciliation** (so sánh DOM ảo).
    *   *Cạm bẫy chí mạng (Tuyệt đối tránh dùng chỉ số mảng - Index làm Key):* Khi danh sách có tính chất động (ví dụ: người dùng thêm phần tử mới lên đầu, xóa phần tử ở giữa, hoặc sắp xếp lại thứ tự), việc dùng `index` làm key sẽ khiến React bị nhầm lẫn vị trí các DOM node thực tế. Điều này dẫn đến các lỗi giao diện trầm trọng, mất trạng thái state nội bộ của component con hoặc hiệu suất render bị suy giảm nghiêm trọng.
    *   *Giải pháp chuẩn:* Luôn sử dụng các ID duy nhất có sẵn từ cơ sở dữ liệu (ví dụ: `item.id`, `product.uuid`) làm giá trị cho `key`.

2.  **Lỗi thường gặp khi tách Component con:**
    *   Khi bạn tách một item trong `.map()` thành một Component riêng biệt nhưng lại đặt thuộc tính `key` ở bên trong component con đó, React sẽ báo lỗi đỏ.
    *   *Quy tắc vàng:* **Thuộc tính `key` phải được đặt trực tiếp ở ngay phần tử ngoài cùng nằm ngay bên trong callback của hàm `.map()`**, chứ không được đặt bên trong định nghĩa của component con.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn dùng ID duy nhất:** Hãy đảm bảo dữ liệu trả về từ API luôn có một trường định danh độc nhất (như `id`). Nếu dữ liệu hoàn toàn tĩnh và không bao giờ thay đổi thứ tự hay bị xóa, bạn mới có thể tạm dùng `index` làm trường hợp ngoại lệ.
*   **Đặt Key ở đúng vị trí:** Khi trả về một Fragment `<></>` hoặc một thẻ bao bọc trong `.map()`, `key` phải gắn trực tiếp vào thẻ đó.

**💻 Code minh họa chuyên sâu:**

```tsx
'use client';
import { useState } from 'react';

interface Task {
  id: string; // ID duy nhất (Bắt buộc dùng làm Key)
  text: string;
}

export default function DynamicTodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 'task-1', text: 'Học cơ chế Virtual DOM' },
    { id: 'task-2', text: 'Nắm vững cách dùng Props và State' },
    { id: 'task-3', text: 'Thực hành quản lý Lists & Keys' },
  ]);

  const [inputVal, setInputVal] = useState('');

  // Thêm công việc mới lên đầu mảng (Kiểm chứng tính đúng đắn của Key)
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newTask: Task = {
      id: `task-${Date.now()}`, // Tạo ID duy nhất giả lập từ thời gian hiện tại
      text: inputVal,
    };

    setTasks(prev => [newTask, ...prev]); // Thêm vào đầu danh sách
    setInputVal('');
  };

  // Xóa công việc theo ID
  const handleDeleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Quản lý danh sách công việc</h2>

      {/* Form thêm mới */}
      <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Nhập công việc mới..." 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border p-2 rounded text-sm flex-1 text-black"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
          Thêm
        </button>
      </form>

      {/* Hiển thị danh sách sử dụng .map() kèm Key chuẩn */}
      <ul className="space-y-2">
        {tasks.map(task => (
          /* ĐẶT KEY TRỰC TIẾP Ở ĐÂY: Dùng task.id thay vì index */
          <li key={task.id} className="flex items-center justify-between p-3 border rounded bg-gray-50 text-sm">
            <span className="text-gray-700">{task.text}</span>
            <button 
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700 font-medium text-xs px-2 py-1 border border-red-200 rounded"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
## 08. Side Effects — useEffect

**📝 Giới thiệu & Lý thuyết cơ bản:**
Trong React, các Functional Component lý tưởng nhất là các "hàm thuần túy" (pure functions): nhận vào `props` và trả về `JSX` mà không làm thay đổi gì bên ngoài phạm vi của nó. Tuy nhiên, trong thực tế, ứng dụng luôn cần tương tác với thế giới bên ngoài: gọi API lấy dữ liệu, thiết lập bộ đếm thời gian (`setInterval`), đăng ký lắng nghe sự kiện trình duyệt (`window.addEventListener`), hoặc thao tác trực tiếp với DOM. Những tác vụ này được gọi là **Side Effects** (Tác dụng phụ). Hook **`useEffect`** sinh ra để quản lý chúng.

1.  **3 bước cốt lõi để viết một Effect:**
    *   **Bước 1:** Khai báo hook `useEffect` và viết logic xử lý side-effect bên trong hàm callback của nó.
    *   **Bước 2:** Xác định thời điểm chạy thông qua **Dependency Array** (mảng phụ thuộc).
    *   **Bước 3:** Viết hàm **Cleanup Function** (nếu cần) để dọn dẹp tài nguyên khi component bị hủy hoặc trước khi chạy lại effect lần tiếp theo.

2.  **Cấu trúc Dependency Array và cơ chế hoạt động:**
    *   `useEffect(() => { ... })` (Không truyền mảng): Code chạy **sau mỗi lần render** của component. (Rất ít khi dùng vì dễ gây vòng lặp vô hạn).
    *   `useEffect(() => { ... }, [])` (Mảng rỗng): Code chỉ chạy **đúng một lần duy nhất** khi component vừa hiển thị lần đầu tiên lên màn hình (Mount).
    *   `useEffect(() => { ... }, [prop, state])` (Có biến phụ thuộc): Code chạy lần đầu khi mount, và chạy lại **mỗi khi một trong các giá trị bên trong mảng thay đổi**.

3.  **Cleanup Function (Hàm dọn dẹp):**
    *   Là một hàm được trả về từ bên trong callback của `useEffect`. 
    *   React sẽ tự động gọi hàm cleanup này trong 2 trường hợp: trước khi component biến mất khỏi màn hình (**Unmount**) và ngay trước khi chạy lại effect ở lần render tiếp theo (nếu dependency thay đổi). Giúp ngăn chặn triệt để hiện tượng rò rỉ bộ nhớ (Memory Leak) như quên hủy kết nối WebSocket, quên xóa sự kiện hoặc interval.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Tránh lạm dụng `useEffect` cho việc tính toán dữ liệu:** Nếu một giá trị có thể tính toán trực tiếp từ state hoặc props hiện tại, hãy tính nó trực tiếp trong thân component chứ đừng dùng `useEffect` để lưu nó vào một state riêng (giúp tránh việc component bị render thừa thãi).
*   **Hủy đăng ký sự kiện hoặc Interval:** Luôn luôn viết hàm cleanup khi bạn dùng `setInterval`, `setTimeout`, hoặc đăng ký sự kiện `window.addEventListener`.

**💻 Code minh họa chuyên sâu (Theo dõi kích thước cửa sổ trình duyệt):**

```tsx
'use client';
import { useState, useEffect } from 'react';

export default function WindowResizeTracker() {
  // Khởi tạo state lưu chiều rộng màn hình
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    // 1. Định nghĩa hàm xử lý sự kiện resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 2. Đăng ký lắng nghe sự kiện resize của trình duyệt (Side Effect)
    window.addEventListener('resize', handleResize);

    // 3. Cleanup Function: Hủy đăng ký sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Đã dọn dẹp và hủy bỏ event listener resize!');
    };
  }, []); // Mảng rỗng nghĩa là chỉ đăng ký 1 lần duy nhất khi component mount

  return (
    <div className="p-6 max-w-sm mx-auto border rounded shadow bg-white text-center">
      <h3 className="text-lg font-bold mb-2">Trình theo dõi màn hình</h3>
      <p className="text-gray-600 text-sm">
        Chiều rộng cửa sổ hiện tại: <span className="font-bold text-blue-600">{windowWidth}px</span>
      </p>
    </div>
  );
}
```
## 09. Kiến trúc Component nâng cao

**📝 Giới thiệu & Lý thuyết cơ bản:**
Khi ứng dụng React lớn dần lên, cấu trúc cây component trở nên phức tạp. Việc quản lý luồng dữ liệu và chia sẻ logic giữa các component đòi hỏi các mẫu thiết kế (design patterns) và kiến trúc chuẩn mực.

1.  **Context API (Giải quyết Prop Drilling):**
    *   *Prop Drilling (Hiện tượng "khoan truyền dữ liệu"):* Xảy ra khi bạn phải truyền props qua hàng loạt component trung gian chỉ để đưa nó đến một component con nằm ở tận sâu bên dưới (dù các component trung gian hoàn toàn không dùng đến dữ liệu đó).
    *   *Context API:* Cho phép tạo ra một "kho dữ liệu toàn cục" (Global Scope) tại một cấp độ cha bất kỳ. Bất kỳ component con nào nằm sâu bên trong cây cũng có thể truy xuất trực tiếp dữ liệu đó thông qua hook `useContext` mà không cần thông qua các tầng trung gian.

2.  **Component Composition (Giải pháp thay thế Context hiệu quả):**
    *   Thay vì bọc Context cho toàn bộ ứng dụng (dễ gây re-render thừa toàn bộ cây), bạn có thể tận dụng **Component Composition** (truyền component con thông qua prop `children` hoặc props tùy chỉnh). 
    *   *Lợi ích:* Giúp tách biệt rõ ràng trách nhiệm của layout và logic, đồng thời giữ nguyên trạng thái state của component cha mà không bị re-render không cần thiết.

3.  **Higher-Order Components (HOC - Thành phần cấp cao):**
    *   Là một mẫu thiết kế nâng cao trong đó một hàm nhận vào một component và trả về một component mới đã được bổ sung thêm tính năng, logic hoặc dữ liệu (ví dụ: `withAuth(MyComponent)` dùng để kiểm tra quyền đăng nhập). *(Lưu ý: Khái niệm Mixins cũ đã bị khai tử từ lâu, HOC và Custom Hooks hiện tại là chuẩn mực thay thế).*

4.  **Cấu trúc chuẩn của một Component:**
    *   Một file component chuyên nghiệp thường tuân theo thứ tự: Định nghĩa TypeScript Interfaces/Types $\rightarrow$ Khởi tạo Component $\rightarrow$ Khai báo Hooks (`useState`, `useEffect`) $\rightarrow$ Các hàm xử lý sự kiện (Handlers) $\rightarrow$ Khối trả về JSX ở cuối cùng.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Khi nào dùng Context?** Dùng cho dữ liệu toàn cục ít thay đổi cấu trúc hoặc tần suất thấp (như Theme sáng/tối, Ngôn ngữ giao diện, Thông tin người dùng đăng nhập). Không nên dùng Context cho dữ liệu thay đổi liên tục từng mili-giây (như tọa độ chuột) vì sẽ làm re-render toàn bộ component con bọc trong đó.
*   **Ưu tiên Custom Hooks và Composition:** Trước khi nghĩ đến Redux hay Context phức tạp, hãy cân nhắc xem bài toán có thể giải quyết bằng cách tách Custom Hook hoặc dùng Component Composition hay không.

**💻 Code minh họa chuyên sâu (Context API & Custom Hook):**

```tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Định nghĩa kiểu dữ liệu cho Theme Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Khởi tạo Context với giá trị mặc định là undefined
const ThemeContext = createContext<ThemeContextType undefined |>(undefined);

// 2. Tạo Provider Component quản lý trạng thái
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider theme, toggleTheme value="{{" }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Xây dựng Custom Hook để tiêu thụ Context an toàn và tiện lợi
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme bắt buộc phải được sử dụng bên trong một ThemeProvider');
  }
  return context;
}

// 4. Component con tiêu thụ Context trực tiếp mà không cần Prop Drilling
export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
        theme === 'light' ? 'bg-gray-800 text-white' : 'bg-yellow-400 text-gray-900'
      }`}
    >
      Chuyển sang chế độ: {theme === 'light' ? 'Tối (Dark)' : 'Sáng (Light)'}
    </button>
  );
}
```
## 10. Quản lý State toàn cục — Redux

**📝 Giới thiệu & Lý thuyết chuyên sâu:**
Khi ứng dụng React mở rộng và có nhiều component ở các nhánh cây khác nhau cần chia sẻ chung một trạng thái (ví dụ: thông tin giỏ hàng, trạng thái đăng nhập của user), việc truyền props qua lại trở nên bất khả thi. **Redux** sinh ra để giải quyết bài toán quản lý state toàn cục (Global State) một cách tập trung và có thể dự đoán được.

1.  **Luồng dữ liệu một chiều trong Redux (Redux Data Flow):**
    *   **Action:** Một plain JavaScript object mô tả sự kiện xảy ra trong ứng dụng (ví dụ: `{ type: 'cart/addItem', payload: product }`).
    *   **Reducer:** Một hàm thuần túy (pure function) nhận vào state hiện tại và một action, sau đó tính toán và trả về một state mới hoàn toàn (tuân thủ tính bất biến).
    *   **Store:** Kho lưu trữ trung tâm nắm giữ toàn bộ cây state của toàn bộ ứng dụng.

2.  **Redux Toolkit (RTK - Tiêu chuẩn hiện đại):**
    *   Trước đây, Redux nổi tiếng là "nặng nề" vì đòi hỏi quá nhiều mã boilerplate (viết actions, action types, switch-cases thủ công). **Redux Toolkit** là bộ công cụ chuẩn chính thức được khuyến nghị hiện nay, giúp lược bỏ toàn bộ sự cồng kềnh đó.
    *   `configureStore`: Tự động cấu hình store tích hợp sẵn middleware mặc định và DevTools.
    *   `createSlice`: Tự động sinh ra action creators và action types dựa trên các reducer bạn viết.

3.  **Middleware (Redux Thunk & Redux Saga):**
    *   Mặc định, Redux reducer chỉ xử lý các tác vụ đồng bộ. Middleware đứng ở giữa chu kỳ Dispatch và Reducer để xử lý các **Side Effects bất đồng bộ** (như gọi API lấy dữ liệu).
    *   *Redux Thunk (Mặc định trong RTK):* Cho phép bạn viết một action creator trả về một hàm (thay vì object) để thực thi logic bất đồng bộ một cách đơn giản.
    *   *Redux Saga:* Thư viện nâng cao sử dụng Generator Functions (`function*`) để quản lý các luồng side-effect cực kỳ phức tạp và có tính điều phối cao.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Không lạm dụng Redux cho mọi state:** Chỉ đưa vào Redux những trạng thái thực sự cần chia sẻ toàn cục (User Auth, Theme, Shopping Cart). Các state cục bộ mang tính nội bộ của một component (như `isOpen` của một dropdown) hãy giữ nguyên trong `useState`.
*   **Tận dụng Hooks chuẩn của RTK:** Luôn sử dụng `useSelector` để đọc state và `useDispatch` để gửi action thay vì cách kết nối `connect()` cũ.

**💻 Code minh họa chuyên sâu (Cấu hình Redux Toolkit & Slice):**

```ts
// 1. Tạo Counter Slice (features/counter/counterSlice.ts)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  status: 'idle' | 'loading';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // RTK sử dụng Immer.js bên dưới cho phép viết code "có vẻ đột biến" nhưng thực tế vẫn giữ tính bất biến an toàn
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
// 2. Sử dụng trong Component React (components/CounterComponent.tsx)
'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store'; // Khai báo type store chuẩn
import { increment, decrement } from '@/features/counter/counterSlice';

export default function CounterComponent() {
  // Lấy dữ liệu từ Global Store
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-6 max-w-sm mx-auto border rounded shadow bg-white text-center">
      <h3 className="text-lg font-bold mb-4">Quản lý State với Redux Toolkit</h3>
      <p className="text-2xl font-bold text-blue-600 mb-4">{count}</p>
      
      <div className="flex justify-center gap-2">
        <button 
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-600 text-white rounded text-sm font-medium"
        >
          Giảm (-)
        </button>
        <button 
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-600 text-white rounded text-sm font-medium"
        >
          Tăng (+)
        </button>
      </div>
    </div>
  );
}
```
## 11. Routing — React Router v6

**📝 Giới thiệu & Lý thuyết chuyên sâu:**
Trong các ứng dụng Single Page Application (SPA), thay vì tải lại toàn bộ trang từ server khi người dùng bấm vào một đường dẫn, **React Router** giúp quản lý việc thay đổi giao diện mượt mà ở phía client. Phiên bản **v6+** mang đến cú pháp hoàn toàn mới, gọn gàng, hiệu suất cao và hỗ trợ mô hình định tuyến dựa trên dữ liệu (Data Router).

1.  **Các API và Component cốt lõi (v6+):**
    *   `createBrowserRouter`: Khởi tạo hệ thống định tuyến hiện đại dựa trên mảng đối tượng, hỗ trợ các tính năng tối ưu như lazy loading và data loading trực tiếp.
    *   `RouterProvider`: Thành phần bao bọc lấy router để cung cấp hệ thống định tuyến cho toàn bộ ứng dụng.
    *   `Outlet`: Thành phần đóng vai trò là "vùng chứa" (placeholder) giúp hiển thị các route con bên trong một Layout chung (Nested Routes).
    *   `Link` / `NavLink`: Thẻ chuyển hướng không làm reload lại trình duyệt. `NavLink` có sẵn tính năng tự động thêm trạng thái `active` giúp dễ dàng tùy chỉnh CSS cho menu.

2.  **Bảng quy đổi tương đương (React Router v5 → v6):**

| Tính năng | Cú pháp cũ (v5 - Lỗi thời) | Cú pháp hiện đại (v6+) |
| :--- | :--- | :--- |
| **Khai báo bộ định tuyến** | `<Switch>` | `<Routes>` hoặc `createBrowserRouter` |
| **Chuyển hướng (Redirect)** | `<Redirect to="/login" />` | `<Navigate to="/login" replace />` |
| **Khai báo thành phần** | `component={Home}` hoặc `render={() => ...}` | `element={<Home />}` |
| **Định nghĩa Nested Routes** | Viết lồng ghép thủ công phức tạp | Sử dụng thuộc tính `children: [...]` trong mảng router |
| **Lấy tham số động (Params)** | `match.params.id` | Sử dụng Hook `useParams()` |

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn dùng `createBrowserRouter` cho các dự án mới:** Đây là tiêu chuẩn khuyên dùng của đội ngũ phát triển React Router từ v6.4 trở đi, giúp mở đường cho việc tích hợp các tính năng nâng cao như Error Boundary theo từng route.
*   **Sử dụng `NavLink` cho Navbar:** Thay vì tự viết logic kiểm tra URL thủ công để tô sáng (highlight) menu đang chọn, hãy tận dụng tính chất của `NavLink`.

**💻 Code minh họa chuyên sâu (Cấu hình Router nâng cao & Layout):**

```tsx
// App.tsx
import { createBrowserRouter, RouterProvider, Outlet, Link, NavLink } from 'react-router-dom';

// 1. Component Layout chung cho toàn bộ ứng dụng (chứa Header và Footer)
function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Thanh điều hướng Header */}
      <header className="bg-white border-b px-6 py-4 flex gap-6 shadow-sm">
        <NavLink className="{({" isActive to="/"> isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}
        >
          Trang chủ
        </NavLink>
        <NavLink className="{({" isActive to="/products"> isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}
        >
          Sản phẩm
        </NavLink>
        <NavLink className="{({" isActive to="/about"> isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}
        >
          Giới thiệu
        </NavLink>
      </header>

      {/* Vùng chứa nội dung thay đổi theo URL */}
      <main className="flex-1 p-6 max-w-4xl mx-auto w-full">
        <Outlet/> 
      </main>

      <footer className="bg-white border-t p-4 text-center text-xs text-gray-500">
        © 2026 ReactJS Mastery Handbook. All rights reserved.
      </footer>
    </div>
  );
}

// 2. Khai báo hệ thống định tuyến qua mảng đối tượng
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { 
        index: true, 
        element: <div className="text-xl font-bold">Chào mừng đến với Trang chủ!</div> 
      },
      { 
        path: 'products', 
        element: <div className="text-xl font-bold">Danh sách sản phẩm mẫu...</div> 
      },
      { 
        path: 'about', 
        element: <div className="text-xl font-bold">Thông tin giới thiệu về chúng tôi.</div> 
      },
      // Xử lý trang 404 cho các đường dẫn không tồn tại
      { 
        path: '*', 
        element: <div className="text-xl font-bold text-red-600">404 - Không tìm thấy trang!</div> 
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router="{router}"/>;
}
```
## 12. Kết nối Backend & Thực chiến (Thinking in React)

**📝 Giới thiệu & Lý thuyết chuyên sâu:**
Một ứng dụng Frontend thực tế không thể đứng độc lập mà cần phải giao tiếp với hệ thống Backend (Database, API) để lưu trữ và xử lý dữ liệu. Phần này sẽ tổng kết các kỹ thuật kết nối API thông qua **Axios**, tìm hiểu về **Server-Side Rendering (SSR)** và áp dụng toàn bộ tư duy thiết kế hệ thống thông qua mô hình **"Thinking in React"**.

1.  **Kết nối RESTful API với Axios & JSON Server:**
    *   *Axios:* Thư viện HTTP client dựa trên Promise hỗ trợ gửi các yêu cầu `GET`, `POST`, `PUT`, `DELETE`, tự động chuyển đổi dữ liệu JSON và cung cấp các tính năng mạnh mẽ như Interceptors (chặn request/response để gắn token xác thực).
    *   *JSON Server:* Công cụ tuyệt vời giúp tạo ra một REST API giả lập (mock API) hoàn chỉnh chỉ trong 30 giây dựa trên một file `db.json`, cực kỳ hữu ích cho việc thực hành lập trình client-side trước khi có backend thật.

2.  **Server-Side Rendering (SSR) trong hệ sinh thái React:**
    *   *Cơ chế:* Khác với Single Page Application (SPA) thuần túy hiển thị trang trắng rồi mới tải JavaScript, SSR thực hiện render mã nguồn HTML hoàn chỉnh ngay trên máy chủ (Server) trước khi trả về trình duyệt.
    *   *Ưu điểm:* Tối ưu hóa tuyệt vời cho SEO (công cụ tìm kiếm đọc được nội dung ngay) và cải thiện tốc độ hiển thị ban đầu (First Contentful Paint).
    *   *Nhược điểm:* Tăng tải cho server và yêu cầu cơ sở hạ tầng phức tạp hơn. (Trong thực tế hiện đại, điều này được giải quyết trọn gói bởi các framework full-stack như **Next.js** hoặc **Remix**).

3.  **Tư duy thiết kế "Thinking in React" (Quy trình 5 bước xây dựng ứng dụng):**
    *   **Bước 1: Chia nhỏ giao diện thành cấu trúc phân cấp (Component Hierarchy):** Vẽ khung giao diện thành các hình chữ nhật lồng nhau, xác định rõ component nào là cha, component nào là con.
    *   **Bước 2: Xây dựng phiên bản tĩnh (Static Version):** Viết code React hiển thị giao diện sử dụng hoàn toàn `props` mà chưa cần dùng `state`. Mục đích là tạo khung xương trực quan nhanh chóng.
    *   **Bước 3: Xác định cấu trúc State tối thiểu cần thiết:** Tự hỏi dữ liệu nào thực sự thay đổi theo thời gian người dùng tương tác để khai báo `useState`. Tránh tạo thừa state gây rối loạn.
    *   **Bước 4: Xác định vị trí đặt State (Lifting State Up):** Nếu nhiều component cần dùng chung một state, hãy đưa state đó lên component cha chung gần nhất của chúng.
    *   **Bước 5: Thêm luồng dữ liệu ngược chiều (Inverse Data Flow):** Truyền các hàm callback từ component cha xuống component con qua props để cho phép con thay đổi state của cha.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Xử lý lỗi API tập trung:** Luôn bọc các lệnh gọi Axios bên trong khối `try...catch` hoặc sử dụng các Custom Hook quản lý trạng thái tải (`loading`, `error`, `data`) để nâng cao trải nghiệm người dùng khi mạng chậm hoặc mất kết nối.
*   **Áp dụng Thinking in React cho mọi dự án mới:** Đừng vội cắm đầu vào code ngay. Hãy dành 15 phút phác thảo cấu trúc component và luồng dữ liệu theo 5 bước trên giấy trước khi viết dòng code đầu tiên.

**💻 Code minh họa chuyên sâu (Ứng dụng thực tế quản lý danh sách sản phẩm kết nối API):**

```tsx
// ProductManagementApp.tsx
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Định nghĩa kiểu dữ liệu sản phẩm
interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductManagementApp() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newProductName, setNewProductName] = useState<string>('');

  // 1. Gọi API lấy dữ liệu khi component Mount (useEffect)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Giả lập gọi API từ JSON Server hoặc API thực tế
        const response = await axios.get<Product[]>('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)');
        // Chuyển đổi dữ liệu mẫu sang định dạng sản phẩm
        const formattedData = response.data.map(item => ({
          id: item.id,
          name: item.name,
          price: item.id * 15,
        }));
        setProducts(formattedData);
      } catch (err) {
        setError('Không thể tải dữ liệu từ máy chủ. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 2. Thêm mới sản phẩm (Xử lý dữ liệu gửi lên Backend)
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName.trim()) return;

    try {
      // Gửi request POST lên API
      const response = await axios.post('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)', {
        name: newProductName,
        price: 99,
      });

      // Tạo object sản phẩm mới giả lập từ kết quả trả về
      const createdProduct: Product = {
        id: Date.now(), // ID tạm thời
        name: newProductName,
        price: 99,
      };

      // Cập nhật State bất biến (Immutability)
      setProducts(prev => [createdProduct, ...prev]);
      setNewProductName('');
    } catch (err) {
      alert('Thêm sản phẩm thất bại!');
    }
  };

  if (loading) return <div className="p-6 text-center text-gray-500">Đang tải hệ thống dữ liệu...</div>;
  if (error) return <div className="p-6 text-center text-red-600 font-bold">{error}</div>;

  return (
    <div className="p-6 max-w-xl mx-auto border rounded-lg shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Quản lý Sản phẩm Fullstack</h2>

      {/* Form thêm sản phẩm */}
      <form onSubmit={handleAddProduct} className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder="Nhập tên sản phẩm mới..." 
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          className="border p-2 rounded text-sm flex-1 text-black"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
          Thêm sản phẩm
        </button>
      </form>

      {/* Hiển thị danh sách sản phẩm */}
      <div className="space-y-2">
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between p-3 border rounded bg-gray-50 text-sm">
            <span className="font-medium text-gray-700">{product.name}</span>
            <span className="text-blue-600 font-bold">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
