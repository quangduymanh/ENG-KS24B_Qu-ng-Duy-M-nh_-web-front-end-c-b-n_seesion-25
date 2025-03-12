function number(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) {
            evenNumbers.push(arr[i]);
        }
    }

    if (evenNumbers.length > 0) {
        console.log(`Số chẵn là: ${evenNumbers}`);
    } else {
        console.log("Mảng không chứa số chẵn");
    }
}
number([11, 4, 65, 6]);  