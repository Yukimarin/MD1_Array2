// Viết script yêu cầu người dùng nhập một dãy số, các số được phân tách bằng
// dấu phẩy, tìm số nhỏ nhất và đăng xuất cho người dùng
// Bước 1: Sử dụng promtp cho người dùng nhập vào chuỗi số
let a = prompt("Nhập vào chuỗi số ngăn bởi dấu ,");
// Bước 2: Chuyển đổi chuỗi thành mảng
let arr = a.split(",");
// Bước 3: Khởi tạo biến min và gán trị bằng với phẩn tử đầu tiên trong mảng
let min = arr[0];
// Bước 4; Sử dụng vòng lặp for để duyết từng phẩn tủ
for (let i = 0; i < arr.length; i++) {
  //Bước 5: Nếu min lớn hơn arr ở vị trí i thì tôi gán lại min bằng arr[i]
  if (min > arr[i]) {
    min = arr[i];
  }
}
// Bước 6 In kết quả
console.log(min);
