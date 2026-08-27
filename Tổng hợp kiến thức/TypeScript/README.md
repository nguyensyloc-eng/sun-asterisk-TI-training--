## 01. JavaScript Foundation

**📝 Giới thiệu & Lý thuyết cơ bản:**
TypeScript thực chất là một siêu tập hợp (superset) của JavaScript, nghĩa là bất kỳ mã nguồn JavaScript hợp lệ nào cũng là mã nguồn TypeScript hợp lệ. Để học tốt TypeScript, bạn cần nắm vững các khái niệm cốt lõi của JavaScript hiện đại (ES6+):

1.  **`let` / `const` vs `var`:**
    *   `var` có phạm vi hàm (function scope) và bị hiện tượng hoisting (đẩy lên đầu).
    *   `let` và `const` có phạm vi khối (block scope) giới hạn trong cặp dấu `{}`. Luôn ưu tiên dùng `const` cho các biến không gán lại giá trị để mã nguồn an toàn hơn.

2.  **Data Types (Kiểu dữ liệu cơ bản trong JS):**
    *   *Primitive (Nguyên thủy):* `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
    *   *Reference (Tham chiếu):* `Object`, `Array`, `Function`.

3.  **Functions & Arrow Functions:**
    *   *Arrow Functions (`() => {}`):* Cú pháp ngắn gọn, không có ngữ cảnh `this` riêng của nó (lexical `this`), rất thích hợp dùng cho các callback function.

4.  **Destructuring & Spread/Rest Operators (`...`):**
    *   Giải cấu trúc đối tượng/mảng giúp trích xuất dữ liệu nhanh chóng. Toán tử spread (`...`) dùng để sao chép hoặc gộp mảng/object, tuân thủ tính bất biến (immutability).

5.  **Modules (`import` / `export`):**
    *   Cơ chế chia nhỏ mã nguồn thành các module độc lập để dễ dàng quản lý và tái sử dụng.

6.  **Promise & Async / Await:**
    *   Xử lý các tác vụ bất đồng bộ (như gọi API, đọc file) một cách tuần tự và dễ đọc thay vì rơi vào "callback hell".

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn dùng `const` mặc định:** Chỉ dùng `let` khi bạn thực sự cần thay đổi giá trị của biến đó (ví dụ: bộ đếm vòng lặp).
*   **Tận dụng Async/Await:** Thay vì viết `.then().catch()` dài dòng, hãy dùng `async/await` kết hợp với khối `try...catch` để xử lý lỗi bất đồng bộ gọn gàng nhất.

**💻 Code minh họa chuyên sâu (ES6+ Features):**

```js
// 1. Arrow Functions & Destructuring
const displayUserInfo = ({ name, age }: { name: string; age: number }) => {
  console.log(`Xin chào ${name}, bạn ${age} tuổi.`);
};

// 2. Spread Operator & Immutability
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Tạo mảng mới không làm thay đổi mảng cũ

// 3. Async / Await với Fetch API
async function fetchUserData(userId: number) {
  try {
    const response = await fetch(`[https://api.example.com/users/$](https://api.example.com/users/$){userId}`);
    if (!response.ok) throw new Error('Lỗi kết nối máy chủ');
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
    return null;
  }
}
```
## 02. TypeScript Foundation & Compiler

**📝 Giới thiệu & Lý thuyết cơ bản:**
TypeScript thực chất không chạy trực tiếp trên trình duyệt. Trình duyệt chỉ hiểu JavaScript. Do đó, TypeScript đóng vai trò là một "lớp bảo vệ thông minh" đứng trước JavaScript, giúp bạn kiểm soát lỗi trong quá trình viết mã.

1.  **Static Typing (Kiểu tĩnh):**
    *   Trong JavaScript (kiểu động - dynamic typing), bạn chỉ phát hiện ra lỗi (như gọi sai tên phương thức, truyền sai kiểu dữ liệu) khi chạy ứng dụng (runtime).
    *   Với TypeScript, hệ thống **Static Typing** giúp bắt các lỗi này ngay từ lúc bạn đang gõ code trên trình điều khiển (compile-time), giúp tăng độ tin cậy của phần mềm lên gấp nhiều lần.

2.  **Type Annotation (Khai báo kiểu tường minh):**
    *   Là việc lập trình viên chủ động khai báo rõ ràng kiểu dữ liệu cho biến, tham số hàm hoặc giá trị trả về bằng cú pháp `: type`.
    *   *Ví dụ:* `let count: number = 10;`

3.  **Type Inference (Suy luận kiểu thông minh):**
    *   TypeScript cực kỳ thông minh. Nếu bạn gán một giá trị khởi tạo cho biến mà không khai báo kiểu, trình biên dịch sẽ tự động **suy luận** ra kiểu dữ liệu dựa trên giá trị đó.
    *   *Ví dụ:* `let username = "Alice";` -> TS tự hiểu `username` có kiểu là `string`. Bạn không bắt buộc phải viết `let username: string = "Alice";`.

4.  **Compiler & `tsc` (TypeScript Compiler):**
    *   `tsc` là công cụ biên dịch chính thức của TypeScript. Nhiệm vụ của nó là đọc các file mã nguồn `.ts` của bạn, kiểm tra lỗi cú pháp/kiểu dữ liệu, sau đó "dịch" (transpile) chúng thành các file JavaScript thuần (`.js`) để chạy trên môi trường thực tế.
    *   *Lệnh biên dịch cơ bản:* `npx tsc index.ts`

5.  **`tsconfig.json` (Tệp cấu hình dự án):**
    *   Là tệp tin định dạng JSON nằm ở thư mục gốc của dự án, dùng để chỉ định các tùy chọn biên dịch (ví dụ: chuyển sang phiên bản ECMAScript nào, thư mục lưu file đầu ra, có bật chế độ kiểm tra nghiêm ngặt hay không).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn bật chế độ Strict Mode (`"strict": true`):** Trong file `tsconfig.json`, hãy luôn bật tùy chọn strict. Nó kích hoạt một loạt các quy tắc kiểm tra an toàn (như kiểm tra `null`/`undefined`), giúp dự án của bạn sạch sẽ và ít bug nhất có thể.
*   **Tận dụng Type Inference:** Đừng lạm dụng Type Annotation cho mọi biến có giá trị khởi tạo rõ ràng (ví dụ: `let isCompleted: boolean = true` là thừa vì TS đã tự suy luận được). Hãy dùng annotation chủ yếu cho tham số hàm hoặc các biến chưa có giá trị ngay lúc khởi tạo.

**💻 Code minh họa chuyên sâu:**

```ts
// 1. Type Annotation (Khai báo rõ kiểu) vs Type Inference (Tự suy luận)
let explicitNumber: number = 42; // Type Annotation
let implicitNumber = 42;        // Type Inference (TS tự hiểu là number)

// 2. Hàm ứng dụng Type Annotation cho tham số và kiểu trả về
function calculateArea(width: number, height: number): number {
  return width * height;
}

const totalArea = calculateArea(10, 5); // Biến totalArea tự suy luận kiểu là number
// 3. Ví dụ tiêu chuẩn cho tệp cấu hình tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",                  // Biên dịch ra chuẩn JavaScript hiện đại
    "module": "NodeNext",                // Hệ thống module sử dụng
    "lib": ["DOM", "ES2022"],            // Các thư viện chuẩn được hỗ trợ
    "strict": true,                      // Bật toàn bộ chế độ kiểm tra nghiêm ngặt (QUAN TRỌNG)
    "esModuleInterop": true,             // Cho phép tương thích module CommonJS và ES Modules
    "skipLibCheck": true,                // Bỏ qua kiểm tra kiểu của các file thư viện bên thứ ba (tăng tốc build)
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]                // Chỉ định thư mục mã nguồn cần biên dịch
}
```
## 03. Basic Types

**📝 Giới thiệu & Lý thuyết cơ bản:**
TypeScript cung cấp một hệ thống kiểu dữ liệu mạnh mẽ mở rộng từ JavaScript. Việc gán đúng kiểu dữ liệu giúp trình biên dịch kiểm soát chặt chẽ giá trị của biến ngay từ lúc viết mã.

Các kiểu dữ liệu cơ bản cốt lõi trong TypeScript bao gồm:

1.  **Primitive Types (`string`, `number`, `boolean`):**
    *   `string`: Biểu diễn chuỗi ký tự (ví dụ: `"Hello TypeScript"`).
    *   `number`: Biểu diễn cả số nguyên và số thực (TypeScript không phân tách riêng `int` hay `float`).
    *   `boolean`: Biểu diễn giá trị đúng/sai (`true` hoặc `false`).

2.  **Array (Mảng) & Tuple (Bộ giá trị):**
    *   *Array:* Khai báo kiểu mảng bằng cú pháp `type[]` hoặc `Array<type>` (ví dụ: `let numbers: number[] = [1, 2, 3];`).
    *   *Tuple:* Cho phép bạn định nghĩa một mảng có **số lượng phần tử cố định** và **kiểu dữ liệu xác định cho từng vị trí** cụ thể (ví dụ: `let user: [number, string] = [1, "Alice"];`).

3.  **Object (Đối tượng):**
    *   Định nghĩa cấu trúc hình dạng của một đối tượng thông qua kiểu dữ liệu object trực tiếp hoặc sử dụng Interface/Type Alias sau này.

4.  **Enum (Liệt kê):**
    *   Cho phép nhà phát triển định nghĩa một tập hợp các hằng số có tên rõ ràng (ví dụ: các trạng thái đơn hàng: `Pending`, `Shipping`, `Completed`), giúp mã nguồn tường minh hơn thay vì dùng các con số hoặc chuỗi magic strings khó hiểu.

5.  **`any` vs. `unknown` (Kiểu dữ liệu linh hoạt):**
    *   *`any`:* Tắt hoàn toàn hệ thống kiểm tra kiểu dữ liệu của TypeScript (giống như quay về JavaScript thuần). **Cực kỳ nguy hiểm nếu lạm dụng.**
    *   *`unknown`:* Là phiên bản "an toàn" của `any`. Bạn có thể gán bất kỳ giá trị nào cho biến kiểu `unknown`, nhưng **bạn không thể thao tác trực tiếp** với nó cho đến khi thực hiện kiểm tra kiểu (Type Narrowing).

6.  **`null` và `undefined`:**
    *   Đại diện cho sự vắng mặt của giá trị. Khi bật chế độ `"strict": true`, `null` và `undefined` có kiểu dữ liệu riêng biệt và không thể gán nhầm sang các kiểu khác trừ khi sử dụng Union Type (ví dụ: `string | null`).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Tránh dùng `any` bằng mọi giá:** Lạm dụng `any` sẽ làm mất đi toàn bộ lợi ích của TypeScript. Nếu bạn thực sự chưa biết trước kiểu dữ liệu của dữ liệu trả về (ví dụ: response từ API chưa rõ cấu trúc), hãy ưu tiên dùng **`unknown`**.
*   **Sử dụng Tuple khi trả về nhiều giá trị cố định:** Rất hữu ích khi viết các Custom Hooks trong React (ví dụ: `useState` trả về một mảng gồm giá trị và hàm cập nhật cố định cấu trúc `[value, setter]`).

**💻 Code minh họa chuyên sâu:**

```ts
// 1. Primitive Types & Array
let username: string = "Bob";
let age: number = 30;
let isActive: boolean = true;
let scores: number[] = [85, 90, 95];

// 2. Tuple (Cố định vị trí và kiểu dữ liệu)
let coordinates: [number, number] = [10.762622, 106.660172]; // [latitude, longitude]

// 3. Enum (Liệt kê trạng thái)
enum OrderStatus {
  Pending = "PENDING",
  Shipping = "SHIPPING",
  Completed = "COMPLETED",
}
let currentStatus: OrderStatus = OrderStatus.Shipping;

// 4. Any vs Unknown (Sự khác biệt về tính an toàn)
let flexibleAny: any = "Hello";
flexibleAny.toUpperCase(); // Hợp lệ (nhưng rủi ro nếu giá trị thực tế đổi thành số)

let safeUnknown: unknown = "World";
// safeUnknown.toUpperCase(); // LỖI BIÊN DỊCH: TS bắt buộc phải kiểm tra kiểu trước khi dùng
if (typeof safeUnknown === "string") {
  console.log(safeUnknown.toUpperCase()); // An toàn tuyệt đối sau khi Type Narrowing
}

// 5. Null & Undefined kết hợp Union Type
let userEmail: string | null = null; 
userEmail = "user@example.com"; // Hợp lệ
```
## 04. Type System (Hệ thống kiểu dữ liệu nâng cao)

**📝 Giới thiệu & Lý thuyết cơ bản:**
Hệ thống kiểu dữ liệu của TypeScript không chỉ dừng lại ở các kiểu nguyên thủy (`string`, `number`). Nó cung cấp các toán tử và công cụ linh hoạt để bạn mô hình hóa chính xác mọi cấu trúc dữ liệu phức tạp trong thực tế.

1.  **Union Types (`|` - Kiểu hợp):**
    *   Cho phép một biến hoặc tham số nhận vào **một trong nhiều kiểu dữ liệu khác nhau**. 
    *   *Ví dụ:* `let id: string | number;` (Biến `id` có thể là chuỗi hoặc số).

2.  **Literal Types (Kiểu giá trị cụ thể):**
    *   Thay vì cho phép mọi `string`, Literal Type cho phép bạn giới hạn biến chỉ được phép nhận **các giá trị cụ thể chính xác**. Thường kết hợp với Union Type để tạo ra các tập giá trị giới hạn (ví dụ: hướng đi `'up' | 'down' | 'left' | 'right'`).

3.  **Type Alias (`type` - Bí danh kiểu):**
    *   Cho phép bạn đặt một cái tên mới cho một kiểu dữ liệu phức tạp, giúp mã nguồn trở nên gọn gàng, dễ đọc và dễ tái sử dụng ở nhiều nơi.
    *   *Ví dụ:* `type UserID = string | number;`

4.  **Intersection Types (`&` - Kiểu giao):**
    *   Cho phép kết hợp nhiều kiểu dữ liệu lại với nhau thành một kiểu duy nhất chứa **tất cả các thuộc tính** của các thành phần tham gia.

5.  **Type Assertion (`as` - Khẳng định kiểu):**
    *   Là cách bạn "nói" với trình biên dịch TypeScript rằng: *"Tôi biết rõ kiểu dữ liệu của phần tử này hơn bạn, hãy coi nó là kiểu X đi"*. 
    *   Thường dùng khi lấy phần tử từ DOM hoặc chuyển đổi dữ liệu mà TypeScript không thể tự suy luận chính xác.

6.  **Type Guard (Thu hẹp kiểu):**
    *   Là các kỹ thuật kiểm tra thời gian chạy (runtime check) như `typeof`, `instanceof`, hoặc dùng toán tử `in` để TypeScript tự động "thu hẹp" (narrowing) một Union Type thành một kiểu cụ thể bên trong khối lệnh tương ứng.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Ưu tiên dùng Literal Type thay vì `string` chung chung:** Khi một biến chỉ nhận một vài giá trị cố định (ví dụ: trạng thái `loading`, `success`, `error`), hãy dùng Literal Union (`'loading' | 'success' | 'error'`) thay vì `string` để tránh gõ nhầm chính tả.
*   **Hạn chế lạm dụng Type Assertion (`as`):** Việc dùng `as` quá nhiều giống như việc tắt đi một phần tính năng kiểm tra an toàn của TypeScript. Chỉ dùng khi bạn chắc chắn 100% về cấu trúc dữ liệu thực tế.

**💻 Code minh họa chuyên sâu:**

```ts
// 1. Union Types & Literal Types
type Status = "pending" | "approved" | "rejected"; // Literal Union
let orderStatus: Status = "approved"; // Hợp lệ
// let orderStatus: Status = "running"; // LỖI BIÊN DỊCH: Giá trị không nằm trong tập hợp cho phép

// 2. Type Alias
type Point = {
  x: number;
  y: number;
};
const coordinate: Point = { x: 10, y: 20 };

// 3. Intersection Types (&)
interface Admin {
  adminLevel: number;
}
interface Employee {
  employeeId: string;
}
type AdminEmployee = Admin & Employee; // Gộp cả 2 thuộc tính

const staff: AdminEmployee = {
  adminLevel: 2,
  employeeId: "EMP123",
};

// 4. Type Assertion (as)
// Giả sử lấy một thẻ input từ DOM
const inputElement = document.getElementById("user-input") as HTMLInputElement;
// Hoặc cú pháp tương đương: const inputElement = <HTMLInputElement>document.getElementById("user-input");
if (inputElement) {
  console.log(inputElement.value);
}

// 5. Type Guard (Thu hẹp kiểu với typeof)
function formatValue(value: string | number) {
  if (typeof value === "string") {
    // Trong khối này, TS tự hiểu value chắc chắn là string
    return value.toUpperCase();
  } else {
    // Trong khối này, TS tự hiểu value chắc chắn là number
    return value.toFixed(2);
  }
}
```
## 05. Interfaces (Giao diện đối tượng)

**📝 Giới thiệu & Lý thuyết cơ bản:**
Trong TypeScript, **`interface`** là một công cụ mạnh mẽ dùng để định nghĩa hình dạng (shape) hoặc "hợp đồng" (contract) cho một đối tượng. Nó quy định rõ ràng một đối tượng cần phải có những thuộc tính nào, kiểu dữ liệu gì và các phương thức nào.

1.  **Interface cơ bản:**
    *   Dùng từ khóa `interface` theo sau là tên (thường viết hoa chữ cái đầu theo quy驼 convention như `User`, `Product`).
    *   Cung cấp một bộ khung cấu trúc rõ ràng cho các object trong ứng dụng.

2.  **Optional Property (`?` - Thuộc tính tùy chọn):**
    *   Nếu một thuộc tính không bắt buộc phải có ở mọi đối tượng, bạn thêm dấu hỏi chấm `?` vào sau tên thuộc tính (ví dụ: `phone?: string;`).

3.  **Readonly Property (`readonly` - Thuộc tính chỉ đọc):**
    *   Ngăn chặn việc thay đổi giá trị của thuộc tính sau khi đối tượng đã được khởi tạo lần đầu tiên. Giúp bảo vệ dữ liệu không bị ghi đè nhầm lẫn.

4.  **Extending Interfaces (`extends` - Kế thừa giao diện):**
    *   Cho phép một interface kế thừa lại toàn bộ các thuộc tính từ một hoặc nhiều interface khác, giúp tái sử dụng mã nguồn và mở rộng cấu trúc cực kỳ linh hoạt.

5.  **Implements (`implements` - Triển khai giao diện trong Class):**
    *   Dùng trong lập trình hướng đối tượng để ép buộc một `class` phải tuân thủ đúng cấu trúc định sẵn của một `interface`.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Interface vs. Type Alias:** Cả hai đều dùng để định nghĩa cấu trúc object. Tuy nhiên, **Interface** có tính năng *Declaration Merging* (tự động gộp các interface trùng tên) và thường được ưu tiên dùng để định nghĩa hình dạng object hoặc cấu trúc Class. Trong khi đó, **Type Alias** mạnh hơn khi dùng cho Union Types (`string | number`) hoặc các kiểu dữ liệu phức tạp.
*   **Luôn dùng `readonly` cho ID hoặc các khóa chính:** Những dữ liệu định danh không bao giờ nên thay đổi sau khi tạo (như `id`, `createdAt`) nên được gắn tiền tố `readonly`.

**💻 Code minh họa chuyên sâu:**

```ts
// 1. Định nghĩa Interface cơ bản với Optional và Readonly
interface User {
  readonly id: number;      // Chỉ đọc, không được gán lại giá trị sau khi tạo
  name: string;
  age: number;
  email?: string;           // Tùy chọn (có hoặc không có đều được)
}

const user1: User = {
  id: 1,
  name: 'Nguyễn Văn A',
  age: 25,
  // email không bắt buộc phải khai báo
};

// user1.id = 2; // LỖI BIÊN DỊCH: Không thể gán lại vì id là readonly


// 2. Kế thừa giao diện (Extends)
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}

const dev: Employee = {
  name: 'Trần Thị B',
  age: 28,
  employeeId: 'DEV001',
  department: 'Engineering',
};


// 3. Triển khai giao diện trong Lớp (Implements)
interface Logger {
  logMessage(message: string): void;
}

class ConsoleLogger implements Logger {
  logMessage(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

const logger = new ConsoleLogger();
logger.logMessage('Hệ thống khởi động thành công!');
```
## 06. OOP (Lập trình hướng đối tượng)

**📝 Giới thiệu & Lý thuyết cơ bản:**
Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một mô hình lập trình dựa trên khái niệm "lớp" (class) và "đối tượng" (object). TypeScript mở rộng hoàn toàn từ ES6 Classes, bổ sung thêm hệ thống kiểm soát quyền truy cập (Access Modifiers) và các tính năng nâng cao giúp mô hình hóa thế giới thực vào phần mềm một cách chuyên nghiệp.

Các khái niệm cốt lõi trong TypeScript OOP bao gồm:

1.  **Class & Constructor (Lớp & Hàm tạo):**
    *   `Class`: Bản thiết kế chung chứa các thuộc tính (properties) và phương thức (methods).
    *   `Constructor`: Hàm khởi tạo đặc biệt được tự động chạy ngay khi một đối tượng mới được tạo ra từ class thông qua từ khóa `new`.

2.  **Inheritance (`extends` & `super`):**
    *   *Kế thừa (`extends`):* Cho phép một lớp con (subclass) kế thừa toàn bộ thuộc tính và phương thức từ lớp cha (superclass).
    *   *Từ khóa `super`:* Dùng để gọi constructor hoặc phương thức của lớp cha bên trong lớp con.

3.  **Access Modifiers (Phạm vi truy cập):**
    *   `public` (Mặc định): Có thể truy cập ở bất kỳ đâu (bên trong class, lớp con, và ngoài class).
    *   `private`: Chỉ được phép truy cập **bên trong chính class đó**, bên ngoài hoặc lớp con đều không thể gọi được.
    *   `protected`: Cho phép truy cập bên trong class đó và các **lớp con kế thừa**, nhưng vẫn chặn bên ngoài.

4.  **Parameter Properties (Cú pháp rút gọn constructor):**
    *   TypeScript cho phép khai báo và gán trực tiếp access modifiers ngay trong tham số của constructor để giảm bớt mã thừa.

5.  **Static Members (`static`):**
    *   Các thuộc tính hoặc phương thức tĩnh thuộc về **chính cái Class đó** thay vì thuộc về từng đối tượng (instance) cụ thể. Truy cập trực tiếp qua tên class (ví dụ: `MathUtils.PI`).

6.  **Abstract Classes (`abstract` - Lớp trừu tượng):**
    *   Là lớp dùng làm "khung sườn chung", **không cho phép khởi tạo trực tiếp** bằng từ khóa `new`. Các lớp con kế thừa từ lớp trừu tượng bắt buộc phải viết lại (implement) các phương thức trừu tượng bên trong nó.

7.  **Getters & Setters:**
    *   Sử dụng từ khóa `get` và `set` để kiểm soát việc đọc hoặc ghi dữ liệu vào các thuộc tính riêng tư (`private`), giúp thực hiện các bước kiểm tra (validation) an toàn.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Encapsulation (Tính đóng gói):** Luôn che giấu dữ liệu quan trọng bằng từ khóa `private` hoặc `protected`, chỉ cho phép thay đổi thông qua các phương thức công khai hoặc Getter/Setter để bảo vệ trạng thái của đối tượng.
*   **Ưu tiên Abstract Class cho các kiến trúc dùng chung:** Khi xây dựng các service hoặc module có chung một cấu trúc xử lý nhưng khác biệt chi tiết thực thi, hãy dùng abstract class.

**💻 Code minh họa chuyên sâu:**

```ts
// 1. Lớp trừu tượng (Abstract Class) làm khung sườn chung
abstract class Animal {
  // Parameter Properties kết hợp protected
  constructor(protected name: string) {}

  // Phương thức trừu tượng (Lớp con bắt buộc phải viết lại)
  abstract makeSound(): void;

  // Phương thức thông thường
  move(): void {
    console.log(`${this.name} đang di chuyển...`);
  }
}

// 2. Kế thừa (Inheritance) và Triển khai
class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name); // Gọi constructor của lớp cha Animal
    this.breed = breed;
  }

  // Bắt buộc phải hiện thực hóa makeSound vì lớp cha là abstract
  makeSound(): void {
    console.log(`${this.name} (${this.breed}) sủa: Gâu gâu!`);
  }

  // Getter để đọc thuộc tính private an toàn
  get dogBreed(): string {
    return this.breed;
  }
}

// 3. Sử dụng Static Members & Đối tượng
class MathUtils {
  static readonly PI: number = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

// --- KIỂM THỰC THỰC TẾ ---
// const animal = new Animal("Test"); // LỖI BIÊN DỊCH: Không thể khởi tạo abstract class trực tiếp

const myDog = new Dog("Rex", "German Shepherd");
myDog.move();       // Rex đang di chuyển...
myDog.makeSound();  // Rex (German Shepherd) sủa: Gâu gâu!
console.log(myDog.dogBreed); // German Shepherd

// Gọi phương thức static không cần khởi tạo `new`
console.log(MathUtils.calculateCircumference(5)); // 31.4159
```
## 07. Generics (Lập trình tổng quát)

**📝 Giới thiệu & Lý thuyết chuyên sâu:**
Trong lập trình, khi bạn muốn viết một hàm hoặc một cấu trúc dữ liệu có thể hoạt động với **nhiều kiểu dữ liệu khác nhau** mà vẫn đảm bảo tính an toàn kiểu (type safety), **Generics** chính là giải pháp cốt lõi. 

Nếu không có Generics, bạn sẽ phải dùng kiểu `any` (làm mất đi độ an toàn) hoặc phải viết lặp lại rất nhiều hàm cho từng kiểu dữ liệu riêng biệt (`number`, `string`, `boolean`,...). Generics cho phép bạn truyền "kiểu dữ liệu như một tham số" thông qua các biến kiểu (thường được quy ước đặt tên là **`T`** - Type).

Các khái niệm cốt lõi trong Generics bao gồm:

1.  **Generic Functions (Hàm tổng quát):**
    *   Cho phép hàm nhận vào một hoặc nhiều kiểu dữ liệu động thông qua cú pháp đặt giữa dấu ngoặc nhọn góc `<T>` ngay trước danh sách tham số.
    *   *Ví dụ:* `function identity<T>(arg: T): T { return arg; }`

2.  **Generic Interfaces (Giao diện tổng quát):**
    *   Định nghĩa cấu trúc dữ liệu linh hoạt cho các object, API response, hoặc cấu trúc bảng dữ liệu mà không cần cố định kiểu giá trị bên trong.

3.  **Generic Classes (Lớp tổng quát):**
    *   Giúp định nghĩa các lớp (như cấu trúc dữ liệu Stack, Queue, Repository) có thể chứa bất kỳ kiểu dữ liệu nào được chỉ định khi khởi tạo bằng từ khóa `new`.

4.  **Multiple Type Parameters (Nhiều tham số kiểu):**
    *   Bạn hoàn toàn có thể khai báo nhiều biến kiểu cùng một lúc (ví dụ: `<T, U>`) để xử lý các hàm ánh xạ (mapping) hoặc cấu trúc dữ liệu kết hợp (như Key-Value pairs).

5.  **Generic Constraints (`extends` - Ràng buộc kiểu):**
    *   Mặc định, biến kiểu `T` có thể là bất cứ thứ gì. Tuy nhiên, nếu bạn muốn giới hạn `T` bắt buộc phải có một số thuộc tính nhất định (ví dụ: phải có thuộc tính `.length`), bạn dùng từ khóa `extends` để tạo ràng buộc (`<T extends { length: number }>`).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Ứng dụng tuyệt vời cho API Responses:** Khi viết hàm gọi API chung, dùng Generics giúp bạn dễ dàng chỉ định kiểu dữ liệu trả về cho từng endpoint cụ thể (`apiClient<User[]>('/users')` vs `apiClient<Post>('/posts/1')`).
*   **Đừng lạm dụng ký tự quá phức tạp:** Mặc định quy ước dùng `T` cho Type, `K` cho Key, `V` cho Value, `E` cho Element. Nếu có quá nhiều tham số kiểu, hãy đặt tên tường minh (ví dụ: `TRequest`, `TResponse`) để mã nguồn dễ đọc.

**💻 Code minh họa chuyên sâu:**

```ts
// 1. Generic Function & Multiple Type Parameters
// Hàm này nhận vào 2 đối tượng bất kỳ và gộp chúng lại
function mergeObjects<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const merged = mergeObjects({ name: 'Alice' }, { age: 30 });
// TS tự suy luận kết quả là đối tượng có cả name (string) và age (number)
console.log(merged.name, merged.age);


// 2. Generic Interface cho API Response chuẩn doanh nghiệp
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T; // Kiểu dữ liệu của data được linh hoạt thay đổi tùy theo gọi API nào
}

interface UserProfile {
  id: number;
  username: string;
}

// Sử dụng Generic Interface cho User
const userResponse: ApiResponse<UserProfile> = {
  success: true,
  message: 'Lấy thông tin thành công',
  data: { id: 1, username: 'nguyenvana' },
};


// 3. Generic Constraints (Ràng buộc kiểu dữ liệu với extends)
interface HasLength {
  length: number;
}

// Hàm này chỉ chấp nhận các đối tượng có thuộc tính length (như string, array)
function logLength<T HasLength extends>(item: T): T {
  console.log(`Độ dài là: ${item.length}`);
  return item;
}

logLength("Hello TypeScript"); // Hợp lệ (string có length)
logLength([1, 2, 3, 4, 5]);    // Hợp lệ (array có length)
// logLength(123);             // LỖI BIÊN DỊCH: number không có thuộc tính length
```
## 08. Advanced TypeScript (Các kỹ thuật nâng cao)

**📝 Giới thiệu & Lý thuyết chuyên sâu:**
Khi xây dựng các ứng dụng quy mô lớn hoặc phát triển các thư viện (libraries) tái sử dụng, bạn sẽ cần đến các tính năng cấp cao của TypeScript. Những công cụ này giúp mở rộng hành vi của lớp, định nghĩa kiểu cho mã nguồn JavaScript thuần bên ngoài, hoặc tương tác sâu với trình biên dịch.

Các khái niệm nâng cao cốt lõi bao gồm:

1.  **Decorators (Bộ trang trí):**
    *   Decorator là một cú pháp đặc biệt (bắt đầu bằng ký tự `@expression`) cho phép bạn gán các hàm sửa đổi hoặc bổ sung hành vi vào các `Class`, `Method` (phương thức), `Accessor`, `Property` (thuộc tính), hoặc `Parameter` (tham số).
    *   *(Lưu ý):* Để sử dụng decorators, bạn cần bật cờ `"experimentalDecorators": true` trong tệp `tsconfig.json`. Chúng thường được ứng dụng rộng rãi trong các framework lớn như NestJS hoặc Angular.

2.  **Declaration Files (`.d.ts`):**
    *   TypeScript biên dịch mã thành JavaScript, nhưng khi bạn viết một thư viện chia sẻ cho người khác dùng, làm sao họ biết các kiểu dữ liệu của hàm bạn viết? **Declaration Files** (`.d.ts`) chính là "bản công bố kiểu dữ liệu".
    *   Các file này **chỉ chứa khai báo kiểu** (types, interfaces) mà không chứa mã logic thực thi, giúp trình biên dịch hiểu được cấu trúc của các file JavaScript thuần.

3.  **Từ khóa `declare` (Khai báo định danh):**
    *   Dùng để "thông báo" với TypeScript rằng một biến, hằng số, hàm hoặc đối tượng toàn cục (global) đã tồn tại ở đâu đó (ví dụ: được tải qua thẻ `<script>` từ CDN hoặc biến toàn cục của trình duyệt như `window`, `process`), ngăn không cho TypeScript báo lỗi `Cannot find name`.

4.  **Tích hợp thư viện bên thứ ba (`@types/*`):**
    *   Hầu hết các thư viện JavaScript phổ biến (như Lodash, Express, React) không được viết trực tiếp bằng TypeScript. Cộng đồng đã xây dựng kho lưu trữ **DefinitelyTyped**, nơi bạn có thể cài đặt các gói định nghĩa kiểu thông qua npm (ví dụ: `npm install --save-dev @types/lodash`).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn tìm kiếm `@types/` khi dùng thư viện JS thuần:** Trước khi từ bỏ một thư viện JavaScript vì nó không hỗ trợ TypeScript, hãy kiểm tra trên npm xem có gói `@types/...` tương ứng hay không.
*   **Sử dụng `declare module` cho các file tài nguyên tĩnh:** Khi làm việc với các file như `.png`, `.css`, hoặc `.svg` trong các bundler như Vite/Webpack, bạn cần file `.d.ts` để khai báo module cho chúng để tránh lỗi biên dịch.

**💻 Code minh họa chuyên sâu:**

```ts
// 1. Ví dụ về Class Decorator cơ bản (Cần bật experimentalDecorators)
function Logger(target: Function) {
  console.log(`[LOG]: Lớp ${target.name} đã được khởi tạo thành công.`);
}

@Logger
class ServerController {
  constructor() {
    console.log('Khởi chạy Server Controller...');
  }
}

// Khi class được nạp, Decorator tự động thực thi và log ra console
const server = new ServerController();


// 2. Sử dụng từ khóa `declare` cho biến toàn cục hoặc thư viện bên ngoài
// Giả sử có một thư viện bên thứ ba tên là "analyticsSDK" được nhúng qua CDN ngoài
declare const analyticsSDK: {
  trackEvent(eventName: string, data: object): void;
};

// TypeScript sẽ không báo lỗi vì đã được "bảo lãnh" thông qua từ khóa declare
analyticsSDK.trackEvent('button_click', { userId: 123 });


// 3. Tự viết file Declaration (.d.ts) cho một module JavaScript thuần cũ
// (Đặt tên file ví dụ: custom-logger.d.ts)
declare module 'my-legacy-logger' {
  export function logInfo(message: string): void;
  export function logError(error: Error): void;
  export const version: string;
}
