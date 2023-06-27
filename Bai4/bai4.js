// Viết kịch bản yêu cầu người dùng nhập một dãy số, Các số được phân tách
// bằng dấu phẩy, tính tổng các số và hiển thị cho người dùng
let string = prompt("Nhập vào chuỗi số ngăn bởi dấu ,");
// Bước 1: Chuyển đổi dạng string sang array thông qua split(",")
let arr = string.split(",");
console.log(arr);
// Bước 2: Khởi tạo biến sum = 0
let sum = 0;
// Bước 3: Sử dụng vòng lặp for duyệt qua từng phần tử mảng arr.
for (let i = 0; i < arr.length; i++) {
  // Bước 4: Mỗi lần lặp tôi sẽ gán lại biến sum = sum+ Number(arr[i])
  sum = sum + Number(arr[i]);
}
// Bước 5: In kết quả sum
console.log(sum);
