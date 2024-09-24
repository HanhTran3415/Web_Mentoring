const express = require("express");
const fs = require("fs");
const argon2 = require("argon2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // Để parse JSON

// API để đăng ký
app.post("/register", async (req, res) => {
    const { firstName, lastName, username, password, email, contactNo } =
        req.body;

    try {
        // Mã hóa mật khẩu bằng Argon2
        const hashedPassword = await argon2.hash(password);

        // Đọc file data.json
        let users = [];
        if (fs.existsSync("data.json")) {
            const fileData = fs.readFileSync("data.json");
            users = JSON.parse(fileData);
        }

        // Kiểm tra xem email hoặc số điện thoại đã tồn tại chưa
        const emailExists = users.some((user) => user.email === email);
        const contactNoExists = users.some(
            (user) => user.contactNo === contactNo
        );

        if (emailExists || contactNoExists) {
            return res
                .status(400)
                .json({ message: "Email hoặc số điện thoại đã tồn tại" });
        }

        // Thêm người dùng mới
        const newUser = {
            firstName,
            lastName,
            username,
            password: hashedPassword,
            email,
            contactNo,
        };
        users.push(newUser);

        // Ghi lại vào file data.json
        fs.writeFileSync("data.json", JSON.stringify(users, null, 2));

        res.status(201).json({ message: "Đăng ký thành công" });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi!" });
    }
});

// API để đăng nhập
app.post("/login", async (req, res) => {
    const { email, password } = req.body; // Thay đổi từ username sang email

    try {
        const fileData = fs.readFileSync("data.json");
        const users = JSON.parse(fileData);

        // Tìm người dùng theo email
        const user = users.find((user) => user.email === email);

        if (!user) {
            return res.status(400).json({ message: "Email không tồn tại!" });
        }

        // So sánh mật khẩu đã mã hóa
        const validPassword = await argon2.verify(user.password, password);

        if (!validPassword) {
            return res
                .status(400)
                .json({ message: "Mật khẩu không chính xác!" });
        }

        res.status(200).json({ message: "Đăng nhập thành công" });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi!" });
    }
});

app.listen(3005, () => {
    console.log("Server đang chạy trên cổng 3000");
});
