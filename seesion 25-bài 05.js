function number(arr) {
    let number2 = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            number2.push(arr[i]);
        }
    }

    if (number2.length > 0) {
        console.log(`Các số nguyên dương trong mảng: ${number2}`);
    } else {
        console.log("Không có số nguyên dương trong mảng");
    }
}
number([4, 5.4, 6, -2]);