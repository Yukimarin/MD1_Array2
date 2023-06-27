// 7.1 Tạo một mảng để thể hiện kích thước đàn của bạn và ghi lại tất cả kích thước
// đàn của bạn, đầu ra màn hình dự kiến:
let sheep = [5, 7, 300, 90, 24, 50, 75];
// Bước 1: In ra màn hình mảng cừu
console.log("Xin chào, đây là kích thước đàn cừu của tôi:", sheep);
// 7.2. Cuối mỗi tháng, bạn phải chọn một và chỉ một con cừu để xén lông và do đó bạn
// muốn chọn con lớn nhất để tối đa hóa lợi nhuận của mình. Thêm tập lệnh để tìm
// kiếm những con cừu lớn nhất trong danh sách của bạn:
// Mục tiêu là tìm số lớn nhất trong mảng
// Bước 1: Khởi tạo biến max = sheep[0]
// (tận dụng hàm để tái sử dụng đoạn code này)
function findMax(arr) {
  let max = arr[0];
  let check = -1;
  // Bước 2: Sử dụng vòng lặp duyệt từng phần tử
  for (let i = 0; i < arr.length; i++) {
    // Bước 3: Nếu như max <sheep[i] thì tôi sẽ gắn lại max = sheep[i]
    if (max < arr[i]) {
      max = arr[i];
      check = i;
    }
  }
  console.log(`Con cừu lớn nhất của tôi có kích thước là ${max}, hãy cạo nó`);
  sheep[check] = 8;
  console.log("Sau khi cạo lông đàn cừu của tôi là", sheep);
}
findMax(sheep);

// 7.3. Sau khi cạo lông, kích thước của nó sẽ trở về kích thước mặc định, là 8.
// Tận dụng logic bài 2 tôi tạo biến check và gán nó bằng i đồng thới với max = sheep[i]
// => Đã lấy vị trị index của số lớn nhất

// 7.4. Trong tháng tiếp theo, MỌI con cừu trong đàn của bạn lớn lên, kích thước của
// chúng tăng thêm 50. Đăng xuất chúng
// Mục tiệu: Cộng từng phần tử trong mảng với 50, sau đó in ra
// Bước 1: Dùng vòng lặp for duyệt qua từng phần tử
for (let i = 0; i < sheep.length; i++) {
  // Bước 2: Mỗi lần lặp tôi sẽ gán lại giá trị cũ bằng giá trị cũ cộng thêm với 50
  sheep[i] = sheep[i] + 50;
}
console.log(
  "Đã một tháng trôi qua, đàn cừu lớn lên, kích thước bây giờ là",
  sheep
);
// 7.5. Tìm con cừu lớn nhất hiện tại và cạo lông nó
findMax(sheep);
// 7.7 (Áp dụng hàm đã học)
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < sheep.length; i++) {
    sum += sheep[i];
  }
  return sum;
}

console.log(sum(sheep));
