// 6 números consecutivos impar

let num = 9

for (i = 0; i <= 5;) {
    if (num % 2 !== 0) {
        console.log(`número impar: `, num)
        i = i + 1
    }
    num = num + 1
}