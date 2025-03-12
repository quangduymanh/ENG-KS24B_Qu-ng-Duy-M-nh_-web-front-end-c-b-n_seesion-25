function prime(num) {
    num = parseInt(num);
    if (!num || num <= 0) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (num === 1) {
        console.log(`${num} không phải là số nguyên tố`);
        return;
    }
    if (num === 2) {
        console.log(`${num} là số nguyên tố`);
        return;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            console.log(`${num} không phải là số nguyên tố`);
            return;
        }
    }
    console.log(`${num} là số nguyên tố`);
}
prime(17);