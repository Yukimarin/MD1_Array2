// Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào và hoán
// đổi trường hợp của mỗi ký tự. Ví dụ: nếu bạn nhập 'The Quick Brown Fox', đầu ra phải
// là 'tHE qUICK bROWN fOX'.
let a = prompt("Nhập vào chuỗi ký tự");
console.log(a);
// Bước 1: Khởi tạo biến result =""
let result = "";
// Bước 2: Sử dụng vòng lặp for để duyệt qua từng ký trong chuỗi đó
for (let i = 0; i < a.length; i++) {
  // Bước 3: So sánh ký tự ở vị trí với chính ký tự đó.toUppercase()
  // - Nếu đúng thì tôi sử dụng toLowerCase()với ký tự đó chuyển thành chữ thường
  if (a[i] === a[i].toLowerCase()) {
    result = result + a[i].toUpperCase();
    // - Nếu sai thì tôi sẽ sử dụng toUpperCase()với ký tự đó chuyển thành chữ hoa
  } else {
    result = result + a[i].toLowerCase();
  }
}
// Bước 4: In kết quả
console.log("Sau khi chuyển đổi", result);
