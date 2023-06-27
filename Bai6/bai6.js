const arr = [3, 4, 6, -9, 10, -88, 2];
// Yeu cau: Tim so co ton tai trong mang hay khong va in ra vi tri cua so do
// Bước 1: Cho người dùng nhập vào 1 số
let input = Number(prompt("Nhập số muốn tìm"));
// Bước 2: Khởi tạo biến check = -1
let check = -1;
// Bước 3: Sử dụng vòng lặp for duyet các phan tu cua mảng
for (let i = 0; i < arr.length; i++) {
  //   Bước 4: Sử dụng mệnh đề điều kiện, nếu tìm thấy số đó thì sẽ gán lại giá trị check = i
  if (input == arr[i]) {
    check = i;
  }
}

// Bước 5: Ra ngoài vòng for và kiểm tra điều kiện của check
if (check == -1) {
  console.log("Số bạn muốn tìm không tồn tại");
} else {
  console.log(`Số ${input} muốn tìm ở vị trí thứ ${check}`);
}
