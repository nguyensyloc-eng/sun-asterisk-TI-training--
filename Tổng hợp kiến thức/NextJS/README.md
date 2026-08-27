## 01. Tổng quan Next.js

**📝 Giới thiệu & Lý thuyết cơ bản:**
Next.js là một React Framework được phát triển bởi Vercel, cung cấp cấu trúc, tính năng và các tối ưu hóa mà một thư viện thuần như React không có sẵn.

1.  **Next.js là gì?**
    *   Là một full-stack React framework cho phép xây dựng ứng dụng web từ phía client cho đến server.
    *   Hỗ trợ mạnh mẽ các chiến lược rendering như SSR (Server-Side Rendering), SSG (Static Site Generation), và ISR (Incremental Static Regeneration).
    *   Tích hợp sẵn hệ thống định tuyến file-system (App Router), tối ưu hình ảnh, phông chữ và SEO.

2.  **React vs Next.js:**
    *   **React (Library):** Chỉ là một UI library. Bạn cần tự chọn thư viện định tuyến (React Router), tự cấu hình Webpack/Vite, tự xây dựng cơ chế SSR hoặc cấu hình fetch dữ liệu.
    *   **Next.js (Framework):** Đã đóng gói sẵn mọi thứ ("batteries-included"). Có sẵn routing, code-splitting tự động, tối ưu hiệu suất và hỗ trợ backend trực tiếp trong project.

3.  **Kiến trúc tổng quan:**
    *   Mặc định các component trong Next.js (App Router) là **Server Components**.
    *   Cho phép thực thi logic phía server (kết nối database trực tiếp, bảo mật API keys) trước khi trả về HTML tinh gọn cho client.

---

## 02. Khởi tạo Project

**📝 Giới thiệu & Lý thuyết cơ bản:**
Để bắt đầu một dự án Next.js hiện đại, công cụ chính thức được khuyến nghị là `create-next-app`.

1.  **Lệnh khởi tạo (`create-next-app`):**
    Mở terminal và chạy lệnh tương tác để tạo project mới:
    ```bash
    npx create-next-app@latest my-next-app
    ```
    *Trong quá trình cài đặt, bạn sẽ được hỏi các tùy chọn cấu hình:*
    *   TypeScript? (Nên chọn **Yes**)
    *   Tailwind CSS? (Nên chọn **Yes**)
    *   App Router? (Bắt buộc chọn **Yes** để dùng kiến trúc mới nhất)
    *   Import alias (`@/*`)? (Chọn **Yes** để viết đường dẫn tương đối sạch sẽ)

2.  **Cấu trúc thư mục cốt lõi (App Router):**
    *   `app/`: Chứa các trang, layout và route (file-system routing).
    *   `public/`: Chứa các file tĩnh như hình ảnh, fonts, icons.
    *   `.env.local`: Chứa các biến môi trường bảo mật.
    *   `next.config.js`: File cấu hình nâng cao cho Next.js.

3.  **Các lệnh vận hành cơ bản:**
    *   `npm run dev`: Chạy môi trường phát triển (Development Server) tại `http://localhost:3000`.
    *   `npm run build`: Tạo bản build tối ưu cho môi trường Production.
    *   `npm run start`: Chạy thử nghiệm bản build production trên máy local.

**🎯 Best Practices:**
*   Luôn sử dụng cấu trúc **App Router** (`app/ directory`) cho các dự án mới thay vì cấu trúc cũ `pages/ directory` để tận dụng Server Components và các tính năng caching hiện đại.
## 03. App Router & Routing

**📝 Giới thiệu & Lý thuyết cơ bản:**
Trong Next.js App Router, các thư mục và file bên trong thư mục `app/` đóng vai trò trực tiếp định hình nên cấu trúc URL của trang web (File-system Routing). Bạn không cần cài đặt thêm thư viện định tuyến bên ngoài như React Router.

Các khái niệm và quy ước cốt lõi trong Routing bao gồm:

1.  **`page.tsx` (Trang giao diện):**
    *   File đặc biệt có nhiệm vụ hiển thị UI cho một route cụ thể. Mặc định các file `page.tsx` là Server Components.
    *   *Ví dụ:* `app/about/page.tsx` sẽ tương ứng với đường dẫn công khai `yoursite.com/about`.

2.  **`layout.tsx` (Bố cục chung):**
    *   UI chung được chia sẻ giữa nhiều trang. Layout bao bọc các `page.tsx` hoặc các layout con bên trong nó. Khi chuyển trang, layout được giữ nguyên trạng thái và không bị re-render lại.

3.  **Nested Routes (Đường dẫn lồng nhau):**
    *   Bằng cách lồng các thư mục vào nhau, URL sẽ tự động lồng theo. 
    *   *Ví dụ:* Thư mục `app/dashboard/settings/page.tsx` $\rightarrow$ Đường dẫn: `/dashboard/settings`.

4.  **Dynamic Routes (Đường dẫn động):**
    *   Khi bạn không biết trước tên đoạn đường dẫn (ví dụ: ID của bài viết), hãy bọc tên thư mục trong dấu ngoặc vuông `[param]`.
    *   *Ví dụ:* `app/posts/[id]/page.tsx` $\rightarrow$ Khớp với `/posts/1`, `/posts/abc`. Bạn có thể đọc giá trị `id` thông qua tham số `params`.

5.  **Catch-all Routes & Optional Catch-all:**
    *   *Catch-all (`[...slug]`):* Bắt tất cả các đường dẫn phía sau (ví dụ: `app/shop/[...slug]/page.tsx` khớp với `/shop/clothes/tops/1`).
    *   *Optional Catch-all (`[[...slug]]`):* Giống catch-all nhưng khớp cả trường hợp không có tham số nào phía sau (ví dụ: khớp cả `/shop`).

6.  **Route Groups (Nhóm đường dẫn - `(folder)`):**
    *   Bọc tên thư mục trong dấu ngoặc tròn để tổ chức mã nguồn gọn gàng mà **không làm thay đổi URL**. 
    *   *Ví dụ:* `app/(marketing)/about/page.tsx` vẫn có URL là `/about` (bỏ qua từ `(marketing)`). Giúp tách biệt layout giữa trang quản trị (`(dashboard)`) và trang khách hàng (`(marketing)`).

7.  **Parallel Routes (Đường dẫn song song - `@folder`):**
    *   Cho phép hiển thị đồng thời nhiều trang độc lập trong cùng một layout thông qua các "slots" (thư mục bắt đầu bằng dấu `@`). Thường dùng cho các phần giao diện phức tạp như dashboard chia nhiều ô độc lập.

8.  **Intercepting Routes (`(.folder)`):**
    *   Cho phép "bắt" (intercept) một route từ ngữ cảnh của route hiện tại (ví dụ: hiển thị một bức ảnh dưới dạng Modal popup khi click vào từ trang feed, nhưng khi người dùng copy link paste vào tab mới thì nó lại hiển thị dạng trang độc lập).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Tổ chức Route Groups hợp lý:** Hãy dùng `(auth)` để gom nhóm các trang Login/Register dùng chung một layout tối giản, và dùng `(dashboard)` cho các trang quản trị cần sidebar.
*   **Tránh lồng thư mục quá sâu:** Mặc dù Next.js hỗ trợ lồng nhau vô hạn, nhưng việc lồng quá 4-5 cấp thư mục sẽ khiến việc quản lý đường dẫn trở nên khó khăn.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Dynamic Route: app/posts/[id]/page.tsx
// Cách nhận tham số động [id] từ URL trong Server Component
interface PageProps {
  params: Promise<{ id: string }>; // Từ Next.js 15+, params là một Promise
}

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Chi tiết bài viết ID: {id}</h1>
      <p>Đang hiển thị nội dung cho bài viết số {id}...</p>
    </main>
  );
}
// 2. Sử dụng Route Groups để phân tách Layout:
// app/(marketing)/layout.tsx -> Chỉ áp dụng layout này cho nhóm trang marketing
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing-wrapper">
      <header className="py-4 border-b">Header chung cho Marketing</header>
      <main>{children}</main>
      <footer className="py-4 border-t">Footer chung cho Marketing</footer>
    </div>
  );
}
```
## 04. Layout & Navigation

**📝 Giới thiệu & Lý thuyết cơ bản:**
Next.js cung cấp hệ thống quản lý bố cục giao diện và điều hướng tối ưu, giúp người dùng chuyển trang cực kỳ mượt mà thông qua cơ chế tải trước (Prefetching) mà không cần tải lại toàn bộ trang (Full page reload).

Các khái niệm cốt lõi bao gồm:

1.  **Layout (`layout.tsx`):**
    *   Bố cục chung bao bọc các trang con hoặc các layout cấp dưới. 
    *   *Đặc điểm quan trọng:* Layout có tính **bền vững (persistent)**. Khi người dùng chuyển qua lại giữa các trang dùng chung layout, layout **không bị re-render** và vẫn giữ nguyên trạng thái (state) của nó (ví dụ: trạng thái mở/đóng của một thanh Sidebar được bảo lưu nguyên vẹn).

2.  **Template (`template.tsx`):**
    *   Tương tự như Layout ở chỗ nó bao bọc các trang con, nhưng điểm khác biệt chí mạng là **mỗi khi người dùng điều hướng sang trang mới, một instance (bản sao) hoàn toàn mới của Template sẽ được tạo ra**.
    *   *Ứng dụng:* Dùng khi bạn muốn chạy lại hiệu ứng chuyển động (animation) mỗi khi đổi trang, hoặc reset trạng thái của `useEffect` / `useState`.

3.  **Link Component (`next/link`):**
    *   Thẻ điều hướng chuẩn trong Next.js (thay thế cho thẻ `<a>` thuần).
    *   *Cơ chế tự động:* Next.js sẽ tự động **prefetch** (tải trước) trang đích ngầm ngay khi thẻ `Link` xuất hiện trong khung nhìn (viewport) của người dùng. Nhờ đó, khi người dùng click vào, trang mới hiện lên ngay lập tức gần như không có độ trễ.

4.  **`useRouter` Hook (`next/navigation`):**
    *   Hook chuyên dùng để điều hướng chương trình (Programmatic Navigation) từ phía Client Component (ví dụ: chuyển trang sau khi người dùng bấm nút đăng nhập thành công).
    *   *Lưu ý:* Trong App Router, `useRouter` phải được import từ `next/navigation` (chứ không phải `next/router` của Pages Router cũ).

5.  **URL Hooks khác (`next/navigation`):**
    *   `usePathname()`: Lấy về đường dẫn hiện tại của URL (ví dụ: `/dashboard/settings`). Thường dùng để làm tính năng active menu.
    *   `useSearchParams()`: Lấy về các query parameters trên URL (ví dụ: `?search=react&page=2`).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn ưu tiên dùng `<Link>` thay vì thẻ `<a>` thuần:** Trừ khi bạn muốn chuyển hướng ra một tên miền bên ngoài (external link), còn lại mọi điều hướng nội bộ đều phải dùng `<Link>` để tận dụng cơ chế prefetch tăng tốc độ.
*   **Phân biệt rõ Layout và Template:** 95% trường hợp bạn chỉ cần dùng `layout.tsx`. Chỉ dùng `template.tsx` khi thực sự cần reset state hoặc chạy lại animation mỗi lần chuyển trang.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Sử dụng Link component và usePathname để làm Active Menu
'import client'; // Nếu dùng hook phải đánh dấu client component
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link '/' 'text-blue-600 'text-gray-600'} : ? className="{pathname" font-bold' href="/">
        Trang chủ
      </Link>
      
      <Link '/dashboard' 'text-blue-600 'text-gray-600'} : ? className="{pathname" font-bold' href="/dashboard">
        Dashboard
      </Link>
    </nav>
  );
}
```
## 05. Server & Client Components

**📝 Giới thiệu & Lý thuyết cơ bản:**
Một trong những điểm khác biệt lớn nhất của Next.js App Router so với các ứng dụng React truyền thống là mô hình **React Server Components (RSCs)**. Mặc định, mọi component trong thư mục `app/` đều là **Server Components**.

1.  **Server Component (Mặc định):**
    *   Được render hoàn toàn ở phía Server.
    *   *Ưu điểm lớn:* Không gửi mã JavaScript của component này về phía trình duyệt (giảm kích thước bundle JS, tăng tốc độ tải trang). Có thể kết nối trực tiếp với Database, gọi API nội bộ hoặc đọc file hệ thống mà không sợ lộ thông tin nhạy cảm (như API keys, database passwords).

2.  **Client Component:**
    *   Là các component React quen thuộc chạy trên trình duyệt (có hỗ trợ trạng thái, sự kiện và vòng đời).
    *   Bắt buộc phải khai báo chỉ thị **`'use client'`** ở dòng đầu tiên của file.
    *   *Đặc điểm:* Vẫn được render trước một lần trên server (để tạo HTML tĩnh ban đầu phục vụ SEO - SSR), sau đó được "hydrate" (kích hoạt tương tác) trên trình duyệt.

3.  **Component Boundary (Ranh giới giữa Server và Client):**
    *   Khi bạn thêm `'use client'` vào một file, tất cả các file được import bên trong nó (child components) sẽ tự động trở thành Client Components. 
    *   *Quy tắc sáng suốt (Composition Pattern):* Bạn không thể import một Server Component trực tiếp *bên trong* một Client Component. Tuy nhiên, bạn hoàn toàn có thể **truyền Server Component vào Client Component thông qua prop `children`** hoặc props thông thường.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Giữ Server Component làm mặc định:** Hãy tối đa hóa số lượng Server Components trong dự án để tối ưu hiệu suất tải trang và SEO.
*   **Đẩy Client Component xuống tận cùng (Push to the edges):** Chỉ đánh dấu `'use client'` cho những component thực sự cần tương tác (ví dụ: nút bấm có sự kiện `onClick`, form nhập liệu có `useState`, hoặc dùng các React hooks như `useEffect`). Đừng đặt `'use client'` ở file layout hoặc page lớn nếu không cần thiết.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Server Component (Mặc định) - Gọi DB trực tiếp và hiển thị dữ liệu tĩnh
// app/products/page.tsx
import ProductList from '@/components/ProductList';
import { db } from '@/lib/db'; // Giả lập kết nối database trực tiếp

export default async function ProductsPage() {
  // Thực thi trực tiếp trên server, không lộ thông tin bảo mật
  const products = await db.product.findMany();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      {/* Truyền dữ liệu xuống Client Component để xử lý phần giao diện tương tác */}
      <ProductList initialProducts="{products}"/>
    </main>
  );
}
// 2. Client Component - Xử lý sự kiện tương tác người dùng
// components/ProductList.tsx
'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function ProductList({ initialProducts }: { initialProducts: Product[] }) {
  const [search, setSearch] = useState('');

  // Lọc sản phẩm phía client dựa trên từ khóa tìm kiếm
  const filteredProducts = initialProducts.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Tìm kiếm sản phẩm..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4 w-full max-w-md"
      />
      
      <ul className="space-y-2">
        {filteredProducts.map(product => (
          <li key={product.id} className="p-3 border rounded shadow-sm">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```
## 06. Rendering Strategies (CSR, SSR, SSG, ISR, Streaming)

**📝 Giới thiệu & Lý thuyết cơ bản:**
Next.js nổi tiếng nhờ khả năng hỗ trợ đa dạng các chiến lược render (Rendering Strategies). Tùy thuộc vào yêu cầu bài toán (tốc độ, tính thời gian thực của dữ liệu, hay SEO), bạn có thể lựa chọn mô hình render phù hợp nhất cho từng trang hoặc từng component.

Các chiến lược render cốt lõi bao gồm:

1.  **CSR (Client-Side Rendering - Render phía Client):**
    *   *Cách hoạt động:* Trình duyệt tải một file HTML trống, sau đó tải file JavaScript, thực thi và gọi API để lấy dữ liệu rồi mới dựng giao diện.
    *   *Ứng dụng:* Dùng cho các trang quản trị cá nhân (Dashboard nội bộ), trang cá nhân hóa (User Profile) nơi không cần SEO và dữ liệu thay đổi liên tục theo hành động người dùng.

2.  **SSR (Server-Side Rendering / Dynamic Rendering - Render phía Server mỗi request):**
    *   *Cách hoạt động:* Mỗi khi có một người dùng gửi yêu cầu (request) truy cập trang web, server sẽ tính toán, gọi database, render ra file HTML hoàn chỉnh và trả về cho trình duyệt.
    *   *Ưu điểm:* Dữ liệu luôn mới 100% tại thời điểm truy cập, cực kỳ tốt cho SEO.
    *   *Ứng dụng:* Các trang thương mại điện tử cập nhật giá liên tục, trang tin tức nóng hổi, trang giỏ hàng.

3.  **SSG (Static Site Generation - Tạo trang tĩnh tại thời điểm Build):**
    *   *Cách hoạt động:* Trang web được render sẵn thành các file HTML tĩnh một lần duy nhất tại thời điểm chạy lệnh `npm run build`. Các lần truy cập sau, server chỉ việc trả về file HTML đã có sẵn này mà không cần tính toán lại.
    *   *Ưu điểm:* Tốc độ tải trang nhanh khủng khiếp (có thể đưa lên CDN toàn cầu như Vercel Edge).
    *   *Ứng dụng:* Trang giới thiệu công ty (About us), trang blog cá nhân, tài liệu hướng dẫn (Documentation).

4.  **ISR (Incremental Static Regeneration - Tái tạo tĩnh tăng dần):**
    *   *Cách hoạt động:* Kết hợp ưu điểm của SSG và SSR. Cho phép bạn cập nhật các trang tĩnh *ngầm* ở phía server sau một khoảng thời gian định sẵn mà không cần phải build lại toàn bộ ứng dụng từ đầu.
    *   *Ứng dụng:* Các trang sản phẩm có hàng nghìn mặt hàng, trang tin tức ít thay đổi từng giây nhưng cần tự động cập nhật định kỳ.

5.  **Streaming (Truyền tải luồng dữ liệu tiến trình):**
    *   *Cách hoạt động:* Cho phép chia nhỏ trang web thành nhiều phần độc lập. Server sẽ gửi trước phần giao diện tĩnh (như Layout, Header, Sidebar) ngay lập tức, sau đó tiếp tục "stream" các phần nội dung dữ liệu nặng (như danh sách sản phẩm, bảng biểu) xuống trình duyệt ngay khi chúng sẵn sàng.
    *   *Công cụ:* Được thực hiện thông qua **React Suspense** kết hợp với file `loading.tsx`.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Mặc định Static, chuyển Dynamic khi cần:** Trong Next.js App Router, nếu một fetch request không có cấu hình cache hoặc có sử dụng các hàm như `cookies()`, `headers()`, Next.js sẽ tự động chuyển trang đó sang dạng **Dynamic Rendering (SSR)**.
*   **Tận dụng Streaming để cải thiện UX:** Thay vì bắt người dùng nhìn màn hình trắng xóa chờ tải xong toàn bộ dữ liệu, hãy dùng `Suspense` để hiển thị khung xương giao diện (Skeleton loading) ngay lập tức.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Cấu hình ISR (Incremental Static Regeneration) với fetch trong Server Component
// Trang này sẽ được tạo tĩnh, nhưng cứ sau mỗi 60 giây, nếu có request mới, 
// Next.js sẽ ngầm làm mới dữ liệu ở background.
export default async function BlogPage() {
  const res = await fetch('[https://api.example.com/posts](https://api.example.com/posts)', {
    next: { revalidate: 60 }, // Tái tạo lại sau mỗi 60 giây
  });
  const posts = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết (ISR - 60s)</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id} className="py-2 border-b">{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
// 2. Sử dụng Streaming với React Suspense
// app/dashboard/page.tsx
import { Suspense } from 'react';
import SlowAnalyticsComponent from '@/components/SlowAnalyticsComponent';
import AnalyticsSkeleton from '@/components/AnalyticsSkeleton';

export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bảng điều khiển quản trị</h1>
      
      {/* Phần giao diện tĩnh hiển thị ngay lập tức */}
      <div className="p-4 bg-gray-100 rounded mb-6">
        <p>Chào mừng bạn quay trở lại hệ thống!</p>
      </div>

      {/* Phần dữ liệu nặng được bọc trong Suspense để Streaming */}
      <Suspense fallback="{<AnalyticsSkeleton"/>}>
        <SlowAnalyticsComponent/>
      </Suspense>
    </main>
  );
}
```
## 07. Data Fetching

**📝 Giới thiệu & Lý thuyết cơ bản:**
Trong Next.js App Router, việc lấy dữ liệu (Data Fetching) đã được tái định nghĩa hoàn toàn. Bạn có thể fetch dữ liệu trực tiếp bên trong các Server Components bằng hàm `fetch` nguyên bản của JavaScript đã được Next.js mở rộng nâng cấp.

Các hình thức và chiến lược lấy dữ liệu cốt lõi bao gồm:

1.  **Server Fetching (Lấy dữ liệu phía Server):**
    *   Được thực hiện trực tiếp bên trong Server Components thông qua hàm `fetch()`.
    *   *Tự động Deduplication (Khử trùng lặp):* Nếu bạn gọi cùng một URL `fetch` nhiều lần trong một cây component render, Next.js sẽ tự động gộp lại chỉ gọi 1 lần duy nhất trong suốt quá trình render request đó.
    *   *Điều khiển Cache trực tiếp trong fetch:*
        *   `cache: 'force-cache'` (Mặc định): Lưu cache vĩnh viễn (SSG).
        *   `cache: 'no-store'`: Luôn gọi lấy dữ liệu mới ở mọi request (SSR).
        *   `next: { revalidate: 3600 }`: Cập nhật dữ liệu sau mỗi khoảng thời gian định sẵn (ISR).

2.  **Client Fetching (Lấy dữ liệu phía Client):**
    *   Được dùng trong các Client Components (`'use client'`) khi bạn cần lấy dữ liệu dựa trên hành động tương tác của người dùng (ví dụ: gõ tìm kiếm, phân trang thủ công, bấm nút tải thêm).
    *   Thường sử dụng kết hợp với các thư viện quản lý state/cache phía client như SWR hoặc TanStack React Query.

3.  **SWR / React Query:**
    *   Các thư viện chuyên dụng cho client-side fetching. Cung cấp các tính năng cực kỳ mạnh mẽ như: tự động fetch lại khi focus vào tab trình duyệt, quản lý trạng thái loading/error, cache dữ liệu và tái xác thực ngầm (background revalidation).

4.  **Parallel Fetching (Lấy dữ liệu song song) vs. Waterfall (Nước chảy):**
    *   *Waterfall (Anti-pattern - Nên tránh):* Xảy ra khi bạn thực hiện các lệnh `await fetch` tuần tự nối tiếp nhau. Lệnh sau phải chờ lệnh trước hoàn thành xong mới được chạy, gây lãng phí thời gian tổng thể.
    *   *Parallel Fetching (Khuyên dùng):* Khởi chạy đồng thời nhiều lệnh fetch cùng lúc bằng **`Promise.all()`** để tận dụng tối đa thời gian chờ mạng.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn fetch dữ liệu ở Server Components trước:** Giúp bảo mật thông tin API, giữ kín token xác thực và giảm thiểu lượng JavaScript phải tải về trên trình duyệt.
*   **Dùng `Promise.all` cho các dữ liệu độc lập:** Nếu trang của bạn cần lấy danh sách sản phẩm và danh sách danh mục (không phụ thuộc vào nhau), hãy dùng `Promise.all` để chúng chạy song song thay vì viết hai dòng `await` tách biệt.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Server Fetching với các tùy chọn Cache khác nhau
// app/products/page.tsx
async function getProducts() {
  const res = await fetch('[https://api.example.com/products](https://api.example.com/products)', {
    cache: 'no-store', // Luôn lấy dữ liệu mới nhất (SSR)
  });
  if (!res.ok) throw new Error('Không thể tải dữ liệu sản phẩm');
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm mới</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
// 2. Parallel Fetching sử dụng Promise.all để tối ưu hiệu suất (Tránh Waterfall)
// app/dashboard/page.tsx
async function getUserData() {
  const res = await fetch('[https://api.example.com/user](https://api.example.com/user)');
  return res.json();
}

async function getNotifications() {
  const res = await fetch('[https://api.example.com/notifications](https://api.example.com/notifications)');
  return res.json();
}

export default async function DashboardPage() {
  // Chạy song song cả 2 request cùng một lúc thay vì chờ tuần tự
  const [user, notifications] = await Promise.all([
    getUserData(),
    getNotifications(),
  ]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Xin chào, {user.name}</h1>
      <p>Bạn có {notifications.length} thông báo mới.</p>
    </div>
  );
}
```
## 08. Caching & Revalidation

**📝 Giới thiệu & Lý thuyết cơ bản:**
Next.js App Router tích hợp sẵn một hệ thống caching (lưu trữ tạm thời) cực kỳ mạnh mẽ nhằm tối ưu hóa tốc độ tải trang và giảm tải cho Server/Database. Tuy nhiên, nếu không hiểu rõ cơ chế này, bạn rất dễ gặp tình trạng dữ liệu mới cập nhật trong database nhưng giao diện ngoài trang web vẫn hiển thị dữ liệu cũ (stale data).

Hệ thống cache của Next.js bao gồm 4 tầng cốt lõi:

1.  **Data Cache (Cache dữ liệu):**
    *   Lưu trữ kết quả trả về từ các hàm `fetch` trên server. Nó được duy trì xuyên suốt qua các vòng đời request và thậm chí qua các lần redeploy lên server.
    *   *Mặc định:* Các lệnh `fetch` đều được cache vĩnh viễn (`force-cache`) trừ khi có cấu hình `no-store` hoặc được tái xác thực (revalidate).

2.  **Full Route Cache (Cache toàn bộ route phía Server):**
    *   Next.js tự động render và cache toàn bộ HTML và dữ liệu JSON của một trang tĩnh tại thời điểm build hoặc khi request đầu tiên được thực hiện. Giúp việc phục vụ các request tiếp theo diễn ra gần như tức thời.

3.  **Router Cache (Cache phía Client):**
    *   Một bộ nhớ đệm tạm thời nằm ngay trên trình duyệt (client-side memory cache). Khi người dùng bấm chuyển trang bằng thẻ `<Link>`, Next.js sẽ lưu kết quả các phần đã tải vào cache bộ nhớ tạm để khi người dùng bấm nút Quay lại (Back/Forward), trang hiển thị ngay lập tức mà không cần gọi lại server.

4.  **Các phương pháp Revalidation (Làm mới cache):**
    Khi dữ liệu thay đổi (ví dụ: người dùng tạo bài viết mới), bạn cần ra lệnh cho Next.js xóa cache cũ và lấy dữ liệu mới bằng 3 cách chính:
    *   *Time-based Revalidation (Theo thời gian):* Tự động làm mới cache sau một khoảng thời gian định sẵn (ví dụ: `next: { revalidate: 3600 }`).
    *   *On-demand Revalidation bằng Path (`revalidatePath`):* Xóa cache của một đường dẫn URL cụ thể ngay lập tức khi có hành động xảy ra (ví dụ: sau khi submit form tạo sản phẩm, gọi `revalidatePath('/products')`).
    *   *On-demand Revalidation bằng Tag (`revalidateTag`):* Gắn thẻ (tag) cho các lệnh fetch, sau đó gọi hàm `revalidateTag('products-list')` để xóa cache của tất cả các fetch có chung thẻ đó ở bất kỳ đâu trên ứng dụng.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Ưu tiên dùng `revalidateTag` cho các hệ thống lớn:** Việc gắn tag cho các fetch request (ví dụ: `next: { tags: ['posts'] }`) giúp bạn dễ dàng làm mới dữ liệu cực kỳ chính xác ở nhiều trang khác nhau chỉ với một dòng lệnh khi có thay đổi dữ liệu.
*   **Lưu ý với Router Cache:** Nếu bạn vừa cập nhật dữ liệu xong mà F5 lại trang vẫn thấy cũ, đôi khi đó là do Client-side Router Cache. Hãy dùng `revalidatePath` kết hợp với Server Actions để đồng bộ hóa dữ liệu lập tức.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Sử dụng Fetch kèm Tag để quản lý Cache linh hoạt
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('[https://api.example.com/posts](https://api.example.com/posts)', {
    next: { tags: ['collection-posts'] }, // Gắn thẻ cho fetch request này
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  // Hiển thị danh sách...
}
// 2. Sử dụng revalidatePath và revalidateTag bên trong Server Actions để làm mới cache
// app/posts/actions.ts
'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title');

  // 1. Gọi API hoặc Database để lưu bài viết mới...
  await db.post.create({ data: { title: String(title) } });

  // 2. Cách A: Làm mới cache theo đường dẫn URL cụ thể
  revalidatePath('/posts');

  // 3. Cách B: Làm mới cache theo Tag đã gắn ở các fetch request (Khuyên dùng)
  revalidateTag('collection-posts');
}
```
## 09. Loading & Error Handling

**📝 Giới thiệu & Lý thuyết cơ bản:**
Trong một ứng dụng web thực tế, độ trễ mạng (loading) và sự cố phát sinh (errors) là điều không thể tránh khỏi. Next.js App Router cung cấp hệ thống xử lý giao diện chờ và bắt lỗi theo cơ chế quy ước tên file (file-system conventions) cực kỳ trực quan.

Các tệp tin và cơ chế cốt lõi bao gồm:

1.  **`loading.tsx` (Giao diện chờ):**
    *   Tự động bọc file `page.tsx` và các component con bên trong một **React Suspense Boundary**.
    *   Ngay khi người dùng chuyển trang, Next.js sẽ lập tức hiển thị file `loading.tsx` (thường làm các khung xương giao diện - skeleton loaders) trong lúc dữ liệu của trang đang được tải ở phía server.

2.  **`Suspense` (`react`):**
    *   Thành phần cho phép bạn kiểm soát độ chi tiết của việc tải dữ liệu (Streaming). Thay vì chờ toàn bộ trang tải xong, bạn có thể bọc riêng một phần giao diện nặng bằng `<Suspense fallback={<Skeleton />}>` để các phần còn lại hiển thị trước.

3.  **`error.tsx` (Trang xử lý lỗi):**
    *   Tự động bắt các lỗi bất ngờ xảy ra trong `page.tsx` hoặc các layout con bên trong cùng phân cấp thư mục.
    *   *Quy tắc bắt buộc:* File `error.tsx` **phải là một Client Component** (`'use client'`) vì nó cần xử lý sự kiện tương tác (ví dụ: nút bấm "Thử lại" - Try again để reset lại trạng thái lỗi).

4.  **`not-found.tsx` (Trang 404):**
    *   Hiển thị giao diện khi người dùng truy cập một đường dẫn không tồn tại hoặc khi bạn chủ động kích hoạt hàm `notFound()` trong code (ví dụ: không tìm thấy bài viết có ID tương ứng trong database).

5.  **`redirect()` (Điều hướng tự động):**
    *   Hàm dùng để chuyển hướng người dùng sang một đường dẫn khác (ví dụ: chuyển hướng người dùng chưa đăng nhập từ trang `/dashboard` về trang `/login`). Có thể gọi trực tiếp trong Server Components, Server Actions hoặc Route Handlers.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Thiết kế Skeleton mượt mà:** Thay vì dùng spinner quay tròn thô kệch, hãy thiết kế `loading.tsx` thành các khối khung xám nhạt (Skeleton screens) phỏng theo hình dáng của trang web thật để nâng cao trải nghiệm người dùng.
*   **Đặt `error.tsx` đúng vị trí:** Bạn có thể đặt file `error.tsx` ở từng thư mục con để cô lập lỗi (nếu trang quản lý sản phẩm bị lỗi, chỉ phần đó hiện thông báo lỗi, phần header và sidebar chung vẫn hoạt động bình thường).

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Tạo file giao diện chờ: app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="p-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
// 2. Tạo file xử lý lỗi: app/dashboard/error.tsx
// BẮT BUỘC PHẢI CÓ 'use client'
'use client'; 

import { useEffect } from 'react';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Ghi log lỗi lên hệ thống theo dõi (ví dụ: Sentry)
    console.error(error);
  }, [error]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold text-red-600 mb-2">Đã có lỗi xảy ra!</h2>
      <p className="text-gray-600 mb-4">{error.message || 'Không thể tải dữ liệu bảng điều khiển.'}</p>
      
      {/* Nút reset cố gắng khôi phục lại trang mà không cần F5 trình duyệt */}
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Thử lại ngay
      </button>
    </div>
  );
}
// 3. Sử dụng hàm notFound() khi không tìm thấy dữ liệu trong Database
// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`[https://api.example.com/posts/$](https://api.example.com/posts/$){id}`);
  
  if (!res.ok) {
    notFound(); // Tự động chuyển hướng hiển thị giao diện not-found.tsx gần nhất
  }

  const post = await res.json();

  return <main className="p-6"><h1>{post.title}</h1></main>;
}
```
## 10. Backend (Route Handlers & Server Actions)

**📝 Giới thiệu & Lý thuyết cơ bản:**
Next.js không chỉ xử lý giao diện mà còn là một Full-stack framework mạnh mẽ. Bạn có thể xây dựng toàn bộ phần backend (xử lý API, kết nối database bảo mật, xác thực người dùng) ngay bên trong project mà không cần dựng một server Node.js/Express riêng biệt.

Có 2 cách chính để làm backend trong Next.js App Router:

1.  **Route Handlers (`route.ts`):**
    *   Dùng để tạo ra các RESTful API endpoints công khai (tương tự như cấu trúc `pages/api` cũ nhưng mạnh mẽ hơn).
    *   Được định nghĩa bằng cách tạo file tên `route.ts` bên trong thư mục `app/api/...`.
    *   Hỗ trợ đầy đủ các HTTP Methods tiêu chuẩn: **GET, POST, PUT, PATCH, DELETE**.
    *   Sử dụng các đối tượng chuẩn Web API là **`Request`** và **`Response`** (hoặc `NextResponse`).

2.  **Server Actions (Hành động phía Server):**
    *   Là một tính năng cách mạng trong Next.js, cho phép bạn viết các hàm chạy trực tiếp trên Server nhưng được **gọi trực tiếp từ phía Client** (ví dụ: từ sự kiện `onSubmit` của form hoặc `onClick` của button).
    *   Giúp loại bỏ hoàn toàn việc phải tự tay tạo ra các API endpoint trung gian (`fetch('/api/...')`), viết mã JSON boilerplate, hay quản lý state loading thủ công.
    *   Được đánh dấu bằng chỉ thị **`'use server'`** (có thể đặt ở đầu file hoặc ngay đầu hàm).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Khi nào dùng Route Handlers?** Dùng khi bạn cần xây dựng Public API để cho các ứng dụng bên thứ ba (như Mobile App, Web khác) gọi đến, hoặc dùng để tạo các Webhooks lắng nghe sự kiện từ bên ngoài (như cổng thanh toán Stripe, GitHub webhooks).
*   **Khi nào dùng Server Actions?** Dùng cho các thao tác nội bộ của ứng dụng như xử lý form đăng ký, gửi bình luận, thêm sản phẩm vào giỏ hàng. Nó ngắn gọn, bảo mật và cực kỳ tối ưu tốc độ.

**💻 Code minh họa chuyên sâu:**

```ts
// 1. Route Handler: Tạo API lấy danh sách và thêm bài viết mới
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

// Xử lý phương thức GET: /api/posts
export async function GET(request: Request) {
  // Lấy query parameters từ URL (ví dụ: /api/posts?limit=10)
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '10';

  // Giả lập dữ liệu từ Database
  const posts = [
    { id: 1, title: 'Học Next.js cơ bản' },
    { id: 2, title: 'Tìm hiểu Server Actions' },
  ];

  return NextResponse.json({ success: true, limit, data: posts });
}

// Xử lý phương thức POST: /api/posts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content } = body;

    if (!title) {
      return NextResponse.json({ success: false, message: 'Tiêu đề là bắt buộc' }, { status: 400 });
    }

    // Lưu vào database ở đây...
    const newPost = { id: Date.now(), title, content };

    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Lỗi server nội bộ' }, { status: 500 });
  }
}
// 2. Server Actions: Xử lý form gửi dữ liệu trực tiếp không cần fetch thủ công
// app/posts/create/page.tsx
import { redirect } from 'next/navigation';
import { db } from '@/lib/db'; // Giả lập kết nối database

// Định nghĩa Server Action
async function createPostAction(formData: FormData) {
  'use server'; // Đánh dấu hàm chạy độc quyền trên Server

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // Thực hiện lưu trực tiếp vào Database trên server an toàn tuyệt đối
  await db.post.create({
    data: { title, content },
  });

  // Chuyển hướng người dùng về trang danh sách sau khi tạo thành công
  redirect('/posts');
}

export default function CreatePostPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tạo bài viết mới</h1>
      
      {/* Gắn Server Action trực tiếp vào thuộc tính action của form */}
      <form action={createPostAction} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Tiêu đề</label>
          <input type="text" name="title" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Nội dung</label>
          <textarea name="content" required className="w-full border p-2 rounded" rows={4}></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Đăng bài viết
        </button>
      </form>
    </div>
  );
}
```
## 11. Forms & Authentication

**📝 Giới thiệu & Lý thuyết cơ bản:**
Xử lý biểu mẫu và xác thực người dùng là những phần xương sống của mọi ứng dụng web hiện đại. Next.js kết hợp với React Server Actions mang đến một mô hình xử lý form cực kỳ tinh gọn, đồng thời bảo mật tuyệt đối thông qua hệ thống Cookie và Middleware.

Các khái niệm cốt lõi bao gồm:

1.  **Forms kết hợp Server Actions & React Hooks:**
    *   Khi dùng Server Actions với form, để nâng cao trải nghiệm người dùng (UX), bạn cần hiển thị trạng thái đang gửi (loading) hoặc thông báo lỗi từ server trả về.
    *   *`useFormStatus` (`react-dom`):* Cho phép component con bên trong form biết trạng thái form có đang ở tiến trình pending (đang gửi) hay không để tự động khóa nút bấm (disable button).
    *   *`useActionState` (`react` - trước đây là `useFormState`):* Quản lý trạng thái trả về từ Server Action (như thông báo lỗi, dữ liệu thành công) để hiển thị trực tiếp lên giao diện client.

2.  **Validation (Kiểm tra tính hợp lệ với Zod):**
    *   Tuyệt đối không bao giờ tin tưởng dữ liệu gửi lên từ phía client. Sử dụng thư viện **Zod** để định nghĩa schema kiểm tra dữ liệu đầu vào (định dạng email, độ dài mật khẩu) ngay tại phía Server trước khi lưu vào Database.

3.  **Authentication & Authorization (Xác thực & Phân quyền):**
    *   *Authentication (Xác thực):* Xác định danh tính người dùng là ai (Đăng nhập bằng Email/Password, Google, GitHub). Thường sử dụng thư viện **Auth.js (NextAuth)**.
    *   *Authorization (Phân quyền):* Kiểm tra xem người dùng có quyền truy cập vào một trang cụ thể hay không (ví dụ: chỉ Admin mới được vào trang `/admin`).

4.  **Session & Cookie Management:**
    *   Sau khi đăng nhập thành công, phiên làm việc (Session) hoặc mã thông báo (JWT) sẽ được lưu trữ an toàn bên trong **HTTP-only Cookies** để ngăn chặn các cuộc tấn công XSS lấy cắp token.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn validate dữ liệu ở cả 2 phía:** Dù client đã validate bằng JavaScript, bạn **bắt buộc** phải validate lại một lần nữa ở Server Actions bằng Zod để đảm bảo an toàn tuyệt đối.
*   **Bảo vệ Route bằng Middleware:** Sử dụng file `middleware.ts` ở cấp độ gốc của project để kiểm tra cookie xác thực, tự động chặn và chuyển hướng người dùng chưa đăng nhập trước khi họ kịp tải trang dashboard.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Validation với Zod kết hợp Server Action và useActionState
// app/login/actions.ts
'use server';

import { z } from 'zod';

// Định nghĩa schema kiểm tra dữ liệu bằng Zod
const loginSchema = z.object({
  email: z.string().email('Email không đúng định dạng'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

// Kiểu dữ liệu trạng thái trả về cho form
export async function loginAction(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // Nếu dữ liệu không hợp lệ, trả về lỗi ngay lập tức
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Vui lòng kiểm tra lại thông tin đầu vào.',
    };
  }

  const { email, password } = validatedFields.data;

  // Thực hiện logic kiểm tra database hoặc gọi auth service ở đây...
  if (email !== 'admin@example.com' || password !== '123456') {
    return { success: false, message: 'Email hoặc mật khẩu không chính xác.' };
  }

  return { success: true, message: 'Đăng nhập thành công!' };
}
// 2. Sử dụng useActionState và useFormStatus trên Client Component
// app/login/LoginForm.tsx
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { loginAction } from './actions';

// Nút submit tự động nhận trạng thái pending từ form cha
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
    >
      {pending ? 'Đang xử lý...' : 'Đăng nhập'}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="max-w-sm mx-auto p-6 space-y-4 border rounded shadow">
      <h2 className="text-xl font-bold">Đăng nhập hệ thống</h2>

      {state?.message && (
        <div className={`p-3 rounded ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {state.message}
        </div>
      )}

      <div>
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input type="email" name="email" className="w-full border p-2 rounded" />
        {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Mật khẩu</label>
        <input type="password" name="password" className="w-full border p-2 rounded" />
        {state?.errors?.password && <p className="text-red-500 text-xs mt-1">{state.errors.password[0]}</p>}
      </div>

      <SubmitButton/>
    </form>
  );
}
// 3. Bảo vệ Route bằng Middleware (middleware.ts tại thư mục gốc)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  // Nếu truy cập vào /dashboard mà chưa có token đăng nhập -> Chuyển hướng về /login
  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Cấu hình các đường dẫn áp dụng middleware
export const config = {
  matcher: '/dashboard/:path*',
};
```
## 12. SEO (Search Engine Optimization)

**📝 Giới thiệu & Lý thuyết cơ bản:**
Một trong những lý do lớn nhất khiến Next.js được ưa chuộng là khả năng tối ưu SEO vượt trội so với các ứng dụng Single Page Application (SPA) truyền thống. Nhờ cơ chế render phía server, các công cụ tìm kiếm (như Googlebot) có thể đọc được nội dung HTML hoàn chỉnh ngay từ lần request đầu tiên mà không cần chờ chạy JavaScript.

Next.js cung cấp hệ thống quản lý SEO tích hợp sẵn cực kỳ tiện lợi thông qua các file conventions và Metadata API:

1.  **Metadata (Static Metadata):**
    *   Cho phép khai báo tiêu đề (`title`), mô tả (`description`), từ khóa và các thông tin thẻ meta tĩnh bằng cách export một object `metadata` chuẩn trực tiếp trong file `layout.tsx` hoặc `page.tsx`.

2.  **`generateMetadata` (Dynamic Metadata):**
    *   Khi tiêu đề hoặc mô tả trang phụ thuộc vào dữ liệu động (ví dụ: tên của một bài viết blog hoặc sản phẩm được lấy từ database), bạn dùng hàm bất đồng bộ `generateMetadata` để trả về metadata tùy chỉnh theo từng tham số URL.

3.  **Open Graph (OG Images):**
    *   Cấu hình các thẻ Open Graph (`openGraph`, `twitter`) để khi người dùng chia sẻ đường dẫn trang web lên các mạng xã hội như Facebook, LinkedIn, Twitter, bài đăng sẽ hiển thị đầy đủ hình ảnh thu nhỏ, tiêu đề và mô tả bắt mắt.

4.  **Sitemap (`sitemap.ts`):**
    *   File quy ước đặc biệt giúp Next.js tự động tạo ra tệp `sitemap.xml` ở dạng chuẩn. Giúp bot của Google quét và lập chỉ mục toàn bộ các đường dẫn trong website của bạn một cách nhanh chóng.

5.  **Robots (`robots.ts`):**
    *   Tạo file `robots.txt` để chỉ định cho các công cụ tìm kiếm biết trang nào được phép quét dữ liệu (Allow) và trang nào bị cấm (Disallow - như các trang quản trị `/dashboard`).

6.  **Structured Data (JSON-LD):**
    *   Chèn dữ liệu có cấu trúc dưới dạng JSON-LD vào thẻ `<script>` để giúp website hiển thị các kết quả tìm kiếm nâng cao (Rich Snippets) trên Google (ví dụ: hiển thị đánh giá sao, giá sản phẩm trực tiếp ngoài trang kết quả tìm kiếm).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn tối ưu `title` và `description` độc lập cho từng trang:** Tránh để tất cả các trang dùng chung một tiêu đề cố định. Sử dụng `generateMetadata` cho các trang động (Dynamic Routes) để nâng cao điểm chất lượng SEO.
*   **Tạo file `sitemap.ts` động cho các dự án lớn:** Nếu website có hàng nghìn sản phẩm, hãy viết code trong `sitemap.ts` để tự động kéo danh sách ID sản phẩm từ database và đưa vào sitemap.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Sử dụng Static Metadata và Dynamic Metadata (`generateMetadata`)
// app/posts/[id]/page.tsx
import { Metadata } from 'next/types';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Hàm generateMetadata tự động chạy trước để lấy tiêu đề động cho SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  
  // Giả lập gọi API lấy thông tin bài viết theo ID
  const res = await fetch(`[https://api.example.com/posts/$](https://api.example.com/posts/$){id}`);
  const post = await res.json();

  return {
    title: `${post.title} | Tên Website Của Bạn`,
    description: post.excerpt || 'Đọc bài viết chi tiết tại đây...',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl || '[https://example.com/default-og.jpg](https://example.com/default-og.jpg)'],
    },
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <main className="p-6"><h1>Chi tiết bài viết số {id}</h1></main>;
}
// 2. Tạo file Sitemap tự động: app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = '[https://mywebsite.com](https://mywebsite.com)';

  // Giả lập lấy danh sách các bài viết từ database để đưa vào sitemap
  const res = await fetch('[https://api.example.com/posts](https://api.example.com/posts)');
  const posts = await res.json();

  const postEntries = posts.map((post: any) => ({
    url: `${baseUrl}/posts/${post.id}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postEntries,
  ];
}
// 3. Tạo file Robots cấu hình trình cào bot: app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/api/'], // Cấm bot quét vào các trang quản trị và api nội bộ
    },
    sitemap: '[https://mywebsite.com/sitemap.xml](https://mywebsite.com/sitemap.xml)',
  };
}
```
## 12. SEO (Search Engine Optimization)

**📝 Giới thiệu & Lý thuyết cơ bản:**
Một trong những lý do lớn nhất khiến Next.js được ưa chuộng là khả năng tối ưu SEO vượt trội so với các ứng dụng Single Page Application (SPA) truyền thống. Nhờ cơ chế render phía server, các công cụ tìm kiếm (như Googlebot) có thể đọc được nội dung HTML hoàn chỉnh ngay từ lần request đầu tiên mà không cần chờ chạy JavaScript.

Next.js cung cấp hệ thống quản lý SEO tích hợp sẵn cực kỳ tiện lợi thông qua các file conventions và Metadata API:

1.  **Metadata (Static Metadata):**
    *   Cho phép khai báo tiêu đề (`title`), mô tả (`description`), từ khóa và các thông tin thẻ meta tĩnh bằng cách export một object `metadata` chuẩn trực tiếp trong file `layout.tsx` hoặc `page.tsx`.

2.  **`generateMetadata` (Dynamic Metadata):**
    *   Khi tiêu đề hoặc mô tả trang phụ thuộc vào dữ liệu động (ví dụ: tên của một bài viết blog hoặc sản phẩm được lấy từ database), bạn dùng hàm bất đồng bộ `generateMetadata` để trả về metadata tùy chỉnh theo từng tham số URL.

3.  **Open Graph (OG Images):**
    *   Cấu hình các thẻ Open Graph (`openGraph`, `twitter`) để khi người dùng chia sẻ đường dẫn trang web lên các mạng xã hội như Facebook, LinkedIn, Twitter, bài đăng sẽ hiển thị đầy đủ hình ảnh thu nhỏ, tiêu đề và mô tả bắt mắt.

4.  **Sitemap (`sitemap.ts`):**
    *   File quy ước đặc biệt giúp Next.js tự động tạo ra tệp `sitemap.xml` ở dạng chuẩn. Giúp bot của Google quét và lập chỉ mục toàn bộ các đường dẫn trong website của bạn một cách nhanh chóng.

5.  **Robots (`robots.ts`):**
    *   Tạo file `robots.txt` để chỉ định cho các công cụ tìm kiếm biết trang nào được phép quét dữ liệu (Allow) và trang nào bị cấm (Disallow - như các trang quản trị `/dashboard`).

6.  **Structured Data (JSON-LD):**
    *   Chèn dữ liệu có cấu trúc dưới dạng JSON-LD vào thẻ `<script>` để giúp website hiển thị các kết quả tìm kiếm nâng cao (Rich Snippets) trên Google (ví dụ: hiển thị đánh giá sao, giá sản phẩm trực tiếp ngoài trang kết quả tìm kiếm).

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Luôn tối ưu `title` và `description` độc lập cho từng trang:** Tránh để tất cả các trang dùng chung một tiêu đề cố định. Sử dụng `generateMetadata` cho các trang động (Dynamic Routes) để nâng cao điểm chất lượng SEO.
*   **Tạo file `sitemap.ts` động cho các dự án lớn:** Nếu website có hàng nghìn sản phẩm, hãy viết code trong `sitemap.ts` để tự động kéo danh sách ID sản phẩm từ database và đưa vào sitemap.

**💻 Code minh họa chuyên sâu:**

```tsx
// 1. Sử dụng Static Metadata và Dynamic Metadata (`generateMetadata`)
// app/posts/[id]/page.tsx
import { Metadata } from 'next/types';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Hàm generateMetadata tự động chạy trước để lấy tiêu đề động cho SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  
  // Giả lập gọi API lấy thông tin bài viết theo ID
  const res = await fetch(`[https://api.example.com/posts/$](https://api.example.com/posts/$){id}`);
  const post = await res.json();

  return {
    title: `${post.title} | Tên Website Của Bạn`,
    description: post.excerpt || 'Đọc bài viết chi tiết tại đây...',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl || '[https://example.com/default-og.jpg](https://example.com/default-og.jpg)'],
    },
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <main className="p-6"><h1>Chi tiết bài viết số {id}</h1></main>;
}
// 2. Tạo file Sitemap tự động: app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = '[https://mywebsite.com](https://mywebsite.com)';

  // Giả lập lấy danh sách các bài viết từ database để đưa vào sitemap
  const res = await fetch('[https://api.example.com/posts](https://api.example.com/posts)');
  const posts = await res.json();

  const postEntries = posts.map((post: any) => ({
    url: `${baseUrl}/posts/${post.id}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postEntries,
  ];
}
// 3. Tạo file Robots cấu hình trình cào bot: app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/api/'], // Cấm bot quét vào các trang quản trị và api nội bộ
    },
    sitemap: '[https://mywebsite.com/sitemap.xml](https://mywebsite.com/sitemap.xml)',
  };
}
```
## 14. Production & Deployment

**📝 Giới thiệu & Lý thuyết cơ bản:**
Khi ứng dụng Next.js của bạn đã sẵn sàng ra mắt người dùng thực tế (Production), việc quản lý biến môi trường, tối ưu bản build và lựa chọn môi trường triển khai (Hosting) là những bước cực kỳ quan trọng để đảm bảo tính bảo mật và hiệu năng ổn định.

Các khía cạnh cốt lõi trong vận hành và triển khai bao gồm:

1.  **Environment Variables (Biến môi trường):**
    *   Next.js hỗ trợ quản lý biến môi trường thông qua các tệp như `.env.local` (cho local development) và `.env.production` (cho production).
    *   *Bảo mật quan trọng:* Mặc định, mọi biến môi trường được khai báo trong Next.js chỉ có hiệu lực ở phía **Server**. 
    *   Nếu bạn muốn một biến môi trường có thể đọc được ở phía trình duyệt (Client Component), bạn **bắt buộc** phải đặt tiền tố **`NEXT_PUBLIC_`** cho tên biến đó (ví dụ: `NEXT_PUBLIC_API_URL`). Tuyệt đối không để lộ các mã khóa bí mật (như Database URL, Secret Keys) có tiền tố này.

2.  **Build Process (`npm run build`):**
    *   Lệnh biên dịch mã nguồn thành phiên bản tối ưu hóa cho production. Next.js sẽ kiểm tra lỗi TypeScript, tối ưu hóa các trang tĩnh (SSG), phân tích bundle code và tạo ra thư mục `.next/`.

3.  **Deployment trên Vercel (Khuyên dùng tối đa):**
    *   Vercel là công ty phát triển ra Next.js, do đó đây là nền tảng tối ưu nhất hành tinh để host Next.js. Hỗ trợ tự động kích hoạt CI/CD mỗi khi bạn push code lên GitHub, cung cấp Global Edge Network và Serverless Functions miễn phí hoặc giá rẻ.

4.  **Deployment tự túc với Docker (Self-Hosting):**
    *   Nếu công ty yêu cầu bảo mật dữ liệu và phải chạy trên máy chủ riêng (VPS, AWS EC2), bạn có thể đóng gói ứng dụng thành một container thông qua **Docker**.
    *   Next.js hỗ trợ tính năng **Standalone Output** giúp tự động cắt giảm kích thước image Docker chỉ chứa các file tối thiểu cần thiết để chạy server.

5.  **Monitoring & Logging (Giám sát hệ thống):**
    *   Sử dụng các công cụ như **Vercel Analytics** để theo dõi hiệu suất người dùng thực tế, và **Sentry** để bắt và ghi log các lỗi phát sinh (exceptions) ở phía server/client theo thời gian thực.

**🎯 Trường hợp sử dụng & Best Practices:**
*   **Bật `output: 'standalone'` trong `next.config.js` khi dùng Docker:** Giúp dung lượng image Docker giảm đi hàng chục lần so với cách build thông thường.
*   **Không lưu trữ file `.env` lên GitHub:** Luôn đưa các file `.env*` vào tệp `.gitignore` và cấu hình biến môi trường trực tiếp trên giao diện quản trị của Vercel hoặc Cloud Provider.

**💻 Code minh họa chuyên sâu:**

```js
// 1. Cấu hình Standalone Output cho Docker trong file: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Bật chế độ xuất bản tối ưu cho Docker
};

module.exports = nextConfig;
# 2. Ví dụ mẫu Dockerfile chuẩn cho Next.js Standalone
FROM node:18-alpine AS base

# Bước 1: Build ứng dụng
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Bước 2: Chạy production server siêu nhẹ
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
