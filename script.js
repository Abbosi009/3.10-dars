// For1 
let a1 = 3, b1 = 8, count1 = 0, i1 = a1;
while (i1 <= b1) {
    console.log(i1);
    i1++;
    count1++;
}
console.log("For1 - Chiqarilgan sonlar soni:", count1);
console.log('----------------');

// For2 
let a2 = 3, b2 = 8, count2 = 0, i2 = b2 - 1;
while (i2 > a2) {
    console.log(i2);
    i2--;
    count2++;
}
console.log("For2 - Chiqarilgan sonlar soni:", count2);
console.log('----------------');

// For3 
let narx3 = 12000, kg3 = 1;
while (kg3 <= 10) {
    console.log(kg3 + " kg narxi: " + (kg3 * narx3) + " so'm");
    kg3++;
}
console.log('----------------');

// For4 
let narx4 = 12000, kg4 = 1.2;
while (kg4 <= 2.0) {
    console.log(kg4.toFixed(1) + " kg narxi: " + (kg4 * narx4).toFixed(2) + " so'm");
    kg4 += 0.2;
}
console.log('----------------');

// For5 
let a5 = 3, b5 = 7, sum5 = 0, i5 = a5;
while (i5 <= b5) {
    sum5 += i5;
    i5++;
}
console.log("For5 - Yig'indisi:", sum5);
console.log('----------------');

// For6 
let a6 = 2, b6 = 5, kop6 = 1, i6 = a6;
while (i6 <= b6) {
    kop6 *= i6;
    i6++;
}
console.log("For6 - Ko‘paytma:", kop6);
console.log('----------------');

// For7 
a7 = 1, b7 = 4, sum7 = 0, i7 = a7;
while (i7 <= b7) {
    sum7 += i7 * i7;
    i7++;
}
console.log("For7 - Kvadratlar yig'indisi:", sum7);
console.log('----------------');

// For8 
let n8 = 5, sum8 = 0, i8 = 1;
while (i8 <= n8) {
    sum8 += 1 / i8;
    i8++;
}
console.log("For8 - S =", sum8.toFixed(4));
console.log('----------------');

// For9 
let n9 = 5, kop9 = 1, i9 = 1;
while (i9 <= n9) {
    kop9 *= (1 + i9 / 10);
    i9++;
}
console.log("For9 - Ko‘paytma S =", kop9.toFixed(4));
console.log('----------------');

// For10 
let n10 = 6, sum10 = 0, i10 = 1;
while (i10 <= (2 * n10 - 1)) {
    sum10 += i10;
    console.log(`Qoshiluv: ${i10} -> Yig'indi: ${sum10}`);
    i10 += 2;
}
console.log(`For10 - ${n10}^2 =`, sum10);
console.log('----------------');

// For11 
let a11 = 2, n11 = 4, nat11 = 1, i11 = 1;
while (i11 <= n11) {
    nat11 *= a11;
    i11++;
}
console.log(`For11 - ${a11}^${n11} =`, nat11);
console.log('----------------');

// For12 
let a12 = 3, n12 = 4, i12 = 1, p12 = 1;
while (i12 <= n12) {
    p12 *= a12;
    console.log(`${a12}^${i12} =`, p12);
    i12++;
}
console.log('----------------');

// For13 
let a13 = 2, n13 = 4, p13 = 1, sum13 = 1, i13 = 1;
while (i13 <= n13) {
    p13 *= a13;
    sum13 += p13;
    i13++;
}
console.log("For13 - S =", sum13);
console.log('----------------');

// For14 
let n14 = 4, sum14 = 0, i14 = 1;
while (i14 <= n14) {
    let fakt = 1, j14 = 1;
    while (j14 <= i14) {
        fakt *= j14;
        j14++;
    }
    sum14 += fakt;
    i14++;
}
console.log("For14 - S =", sum14);
console.log('----------------');

// For15 
let N15 = 4, K15 = 3, sum15 = 0, i15 = 1;
while (i15 <= N15) {
    sum15 += i15 ** K15;
    i15++;
}
console.log("For15 - S =", sum15);
console.log('----------------');

// For16 
let N16 = 4, sum16 = 0, i16 = 1;
while (i16 <= N16) {
    sum16 += i16 ** i16;
    i16++;
}
console.log("For16 - S =", sum16);
console.log('----------------');

// For17 
let A17 = 2, B17 = 5, i17 = A17;
while (i17 <= B17) {
    let j17 = 0;
    while (j17 < (i17 - A17 + 1)) {
        console.log(i17);
        j17++;
    }
    i17++;
}
console.log('----------------');

// For18 
let son18 = 12, boluvchi18 = 1, count18 = 0, sum18 = 0;
while (boluvchi18 <= son18) {
    if (son18 % boluvchi18 === 0) {
        console.log(boluvchi18);
        sum18 += boluvchi18;
        count18++;
    }
    boluvchi18++;
}
console.log("For18 - Bo'luvchilar soni:", count18);
console.log("For18 - Yig'indisi:", sum18);
console.log('----------------');

// For19 
let n19 = 17, isPrime = true, i19 = 2;
while (i19 <= Math.sqrt(n19)) {
    if (n19 % i19 === 0) {
        isPrime = false;
        break;
    }
    i19++;
}
console.log(`For19 - ${n19} tubmi?`, isPrime ? "Ha" : "Yo'q");
console.log('----------------');

// For20 
let N20 = 5, i20 = 1;
while (i20 <= N20) {
    let j20 = 1, line = "";
    while (j20 <= i20) {
        line += j20 + " ";
        j20++;
    }
    console.log(line);
    i20++;
}

/*While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.

While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.

While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.

While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.

While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754

While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.*/