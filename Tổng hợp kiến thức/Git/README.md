📘 Git là gì?

Git là hệ thống quản lý phiên bản (Version Control System) giúp:

Quản lý lịch sử thay đổi của source code.
Làm việc nhóm.
Khôi phục phiên bản cũ.
Đồng bộ code với GitHub/GitLab.
📂 Git và GitHub khác nhau thế nào?
Git Công cụ quản lý phiên bản
Chạy trên máy
Không cần Internet
GitHub
Nơi lưu repository trên Internet
Chạy trên cloud
Cần Internet để đồng bộ
📁 Repository (Repo)
Là thư mục được Git quản lý.
Ví dụ:
GitLearning/
│
├── README.md
├── main.py
└── .git/

Thư mục .git chứa toàn bộ lịch sử commit.

🔄 Vòng đời của file trong Git
Working Directory
│
git add
▼
Staging Area
│
git commit
▼
Local Repository
│
git push
▼
Remote Repository (GitHub)

📌 Khởi tạo Git
git init Tạo thư mục .git. Kiểm tra: git status

📌 Kiểm tra trạng thái
git status
Hiển thị:
file mới
file đã sửa
file đã stage
branch hiện tại

📌 Thêm file vào Staging
Thêm 1 file: git add README.md
Thêm tất cả: git add .

📌 Commit
git commit -m "Add README"
Lưu snapshot của project.

📌 Xem lịch sử commit
git log
Rút gọn: git log --oneline

📌 Sửa commit gần nhất
Chỉ sửa message: git commit --amend
Sửa cả file đã thay đổi: git commit --amend -a

📌 Branch
Xem branch: git branch
Tạo branch: git branch feature/login

Chuyển branch: git switch feature/login
Hoặc: git checkout feature/login
Tạo và chuyển luôn: git switch -c feature/login

📌 Merge
Đứng ở branch main: git merge feature/login

📌 Xóa branch
git branch -d feature/login

📌 Remote Xem remote: git remote -v
Thêm remote: git remote add origin https://github.com/user/repo.git
Đổi remote: git remote set-url origin https://github.com/user/repo.git
Xóa remote: git remote remove origin

📌 Push
Đẩy commit lên GitHub: git push origin main
Lần đầu: git push -u origin main

📌 Fetch
Lấy dữ liệu từ GitHub nhưng chưa merge: git fetch

📌 Pull
Lấy dữ liệu và merge: git pull
Thực chất:
git fetch + git merge

📌 Clone
Tải project từ GitHub: git clone https://github.com/user/project.git

📌 Diff
Xem thay đổi: git diff
So sánh commit: git diff HEAD~1

📌 Restore
Bỏ thay đổi file: git restore file.txt
Bỏ stage: git restore --staged file.txt

📌 Reset
Quay commit, Giữ file: git reset --soft HEAD1
Giữ code nhưng bỏ stage: git reset --mixed HEAD1
Xóa luôn code: git reset --hard HEAD~1

📌 Revert
Tạo commit đảo ngược: git revert HEAD
Không làm mất lịch sử.

📌 Stash
Lưu tạm thay đổi: git stash
Xem stash: git stash list
Khôi phục: git stash pop

📌 .gitignore
Bỏ qua file
Ví dụ:
node_modules/
*.log
.env

📌 SSH
Tạo key: ssh-keygen -t ed25519 -C "email@gmail.com"

Kiểm tra: ssh -T git@github.com

📌 HTTPS
Remote: https://github.com/user/project.git
Đăng nhập bằng GitHub + Personal Access Token (PAT) khi cần.

📌 SSH
Remote: git@github.com:user/project.git
Xác thực bằng SSH key.

📌 Các lệnh cấu hình

Tên: git config --global user.name "Nguyen Van A"
Email: git config --global user.email "abc@gmail.com"
Xem cấu hình: git config --list

📌 Chu trình làm việc hằng ngày
git pull ↓
Sửa code ↓
git status ↓
git add . ↓
git commit -m "..." ↓
git push

📌 Những lỗi thường gặp Permission denied: Không có quyền push hoặc xác thực sai tài khoản GitHub.
nothing to commit: Không có thay đổi để commit.
non-fast-forward: Remote có commit mới. Giải quyết:
git pull
git push
merge conflict
Hai người sửa cùng một đoạn code. Giải quyết:
Chỉnh file.
git add
git commit

🎯 Bộ lệnh Git cơ bản cần nhớ git init
git clone
git status
git add .
git commit -m "..."
git log --oneline
git branch
git switch
git merge
git remote -v
git pull
git push
git fetch
git diff
git restore
git reset
git revert
git stash
git tag
