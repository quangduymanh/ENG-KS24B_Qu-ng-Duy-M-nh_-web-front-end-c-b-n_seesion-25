let arr = [];
function number(arr) {
    if (arr.length === 0) {
        console.log("Mảng không chứa phần tử");
        return;
    }
    let min;
    let hasNumber = false;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            if (!hasNumber) {
                min = arr[i];
                hasNumber = true;
            } else if (arr[i]<min) {
                min = arr[i];
            }
        }
    }

    if (!hasNumber) {
        console.log("Giá trị không hợp lệ");
    } else {
        console.log(`Giá trị nhỏ nhất là ${min}`);
    }
}

number(arr);