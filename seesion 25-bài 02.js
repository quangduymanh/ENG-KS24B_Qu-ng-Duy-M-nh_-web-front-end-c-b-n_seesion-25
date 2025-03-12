function sumIntegers(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Dữ liệu không hợp lệ";
    }
    return a + b;
}
console.log(sumIntegers(2, 6));         
