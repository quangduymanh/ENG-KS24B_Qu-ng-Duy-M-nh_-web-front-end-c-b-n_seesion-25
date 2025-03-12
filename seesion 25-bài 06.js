function isPalindrome(str) {
    if (!str || str.length === 0) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let reversedStr = str.split("").reverse().join("");

    if (str === reversedStr) {
        console.log(`${str} là chuỗi đối xứng`);
    } else {
        console.log(`${str} không phải chuỗi đối xứng`);
    }
}
let input = prompt("Nhập chuỗi để kiểm tra:");
isPalindrome(input);
