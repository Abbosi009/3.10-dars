// For1 
let a1 = 3, b1 = 8, countF1 = 0, iF1 = a1;
while (iF1 <= b1) {
    console.log(iF1);
    iF1++;
    countF1++;
}
console.log("For1 - Chiqarilgan sonlar soni:", countF1);
console.log('----------------');

// For2 
let a2 = 3, b2 = 8, countF2 = 0, iF2 = b2 - 1;
while (iF2 > a2) {
    console.log(iF2);
    iF2--;
    countF2++;
}
console.log("For2 - Chiqarilgan sonlar soni:", countF2);
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
let a5 = 3, b5 = 7, sumF5 = 0, iF5 = a5;
while (iF5 <= b5) {
    sumF5 += iF5;
    iF5++;
}
console.log("For5 - Yig'indisi:", sumF5);
console.log('----------------');

// For6 
let a6 = 2, b6 = 5, kopF6 = 1, iF6 = a6;
while (iF6 <= b6) {
    kopF6 *= iF6;
    iF6++;
}
console.log("For6 - Ko‘paytma:", kopF6);
console.log('----------------');

// For7 
let a7 = 1, b7 = 4, sumF7 = 0, iF7 = a7;
while (iF7 <= b7) {
    sumF7 += iF7 * iF7;
    iF7++;
}
console.log("For7 - Kvadratlar yig'indisi:", sumF7);
console.log('----------------');

// For8 
let n8 = 5, sumF8 = 0, iF8 = 1;
while (iF8 <= n8) {
    sumF8 += 1 / iF8;
    iF8++;
}
console.log("For8 - S =", sumF8.toFixed(4));
console.log('----------------');

// For9 
let n9 = 5, kopF9 = 1, iF9 = 1;
while (iF9 <= n9) {
    kopF9 *= (1 + iF9 / 10);
    iF9++;
}
console.log("For9 - Ko‘paytma S =", kopF9.toFixed(4));
console.log('----------------');

// For10 
let n10 = 6, sumF10 = 0, iF10 = 1;
while (iF10 <= (2 * n10 - 1)) {
    sumF10 += iF10;
    console.log(`Qoshiluv: ${iF10} -> Yig'indi: ${sumF10}`);
    iF10 += 2;
}
console.log(`For10 - ${n10}^2 =`, sumF10);
console.log('----------------');

// For11 
let a11 = 2, n11 = 4, nat11 = 1, iF11 = 1;
while (iF11 <= n11) {
    nat11 *= a11;
    iF11++;
}
console.log(`For11 - ${a11}^${n11} =`, nat11);
console.log('----------------');

// For12 
let a12 = 3, n12 = 4, iF12 = 1, pF12 = 1;
while (iF12 <= n12) {
    pF12 *= a12;
    console.log(`${a12}^${iF12} =`, pF12);
    iF12++;
}
console.log('----------------');

// For13 
let a13 = 2, n13 = 4, pF13 = 1, sumF13 = 1, iF13 = 1;
while (iF13 <= n13) {
    pF13 *= a13;
    sumF13 += pF13;
    iF13++;
}
console.log("For13 - S =", sumF13);
console.log('----------------');

// For14 
let n14 = 4, sumF14 = 0, iF14 = 1;
while (iF14 <= n14) {
    let fakt = 1, j = 1;
    while (j <= iF14) {
        fakt *= j;
        j++;
    }
    sumF14 += fakt;
    iF14++;
}
console.log("For14 - S =", sumF14);
console.log('----------------');

// For15 
let N15 = 4, K15 = 3, sumF15 = 0, iF15 = 1;
while (iF15 <= N15) {
    sumF15 += iF15 ** K15;
    iF15++;
}
console.log("For15 - S =", sumF15);
console.log('----------------');

// For16 
let N16 = 4, sumF16 = 0, iF16 = 1;
while (iF16 <= N16) {
    sumF16 += iF16 ** iF16;
    iF16++;
}
console.log("For16 - S =", sumF16);
console.log('----------------');

// For17 
let A17 = 2, B17 = 5, iF17 = A17;
while (iF17 <= B17) {
    let j = 0;
    while (j < (iF17 - A17 + 1)) {
        console.log(iF17);
        j++;
    }
    iF17++;
}
console.log('----------------');

// For18 
let son18 = 12, boluvchi18 = 1, countF18 = 0, sumF18 = 0;
while (boluvchi18 <= son18) {
    if (son18 % boluvchi18 === 0) {
        console.log(boluvchi18);
        sumF18 += boluvchi18;
        countF18++;
    }
    boluvchi18++;
}
console.log("For18 - Bo'luvchilar soni:", countF18);
console.log("For18 - Yig'indisi:", sumF18);
console.log('----------------');

// For19 
let n19 = 17, isPrimeF19 = true, iF19 = 2;
while (iF19 <= Math.sqrt(n19)) {
    if (n19 % iF19 === 0) {
        isPrimeF19 = false;
        break;
    }
    iF19++;
}
console.log(`For19 - ${n19} tubmi?`, isPrimeF19 ? "Ha" : "Yo'q");
console.log('----------------');

// For20 
let N20 = 5, iF20 = 1;
while (iF20 <= N20) {
    let j = 1, line = "";
    while (j <= iF20) {
        line += j + " ";
        j++;
    }
    console.log(line);
    iF20++;
}
console.log('----------------');

// While1
let A_W1 = 27, B_W1 = 5, tmpW1 = A_W1;
while (tmpW1 >= B_W1) {
    tmpW1 -= B_W1;
}
console.log("While1: Bo'sh qism =", tmpW1);

// While2
let A_W2 = 27, B_W2 = 5, tmpW2 = A_W2, countW2 = 0;
while (tmpW2 >= B_W2) {
    tmpW2 -= B_W2;
    countW2++;
}
console.log("While2: B soni joylashadi =", countW2);

// While3
let nW3 = 81, powW3 = 1;
while (powW3 < nW3) {
    powW3 *= 3;
}
console.log("While3:", powW3 === nW3 ? "3 - ning darajasi" : "3 - ning darajasi emas");

// While4
let nW4 = 27, mW4 = 5, qW4 = 0, tmpW4 = nW4;
while (tmpW4 >= mW4) {
    tmpW4 -= mW4;
    qW4++;
}
console.log("While4: Butun qism =", qW4, ", Qoldiq =", tmpW4);

// While5
let nW5 = 12345, revW5 = "";
while (nW5 > 0) {
    let digit = nW5 % 10;
    revW5 += digit;
    nW5 = (nW5 - digit) / 10;
}
console.log("While5: Teskari =", revW5);

// While6
let nW6 = 12345, sumW6 = 0, countW6 = 0;
while (nW6 > 0) {
    let digit = nW6 % 10;
    sumW6 += digit;
    countW6++;
    nW6 = (nW6 - digit) / 10;
}
console.log("While6: Yig'indi =", sumW6, ", Raqamlar soni =", countW6);

// While7
let nW7 = 431578, has2W7 = false;
while (nW7 > 0) {
    let digit = nW7 % 10;
    if (digit === 2) {
        has2W7 = true;
        break;
    }
    nW7 = (nW7 - digit) / 10;
}
console.log("While7: 2 raqami bormi?", has2W7);

// While8
let nW8 = 8640, hasOddW8 = false;
while (nW8 > 0) {
    let digit = nW8 % 10;
    if (digit % 2 === 1) {
        hasOddW8 = true;
        break;
    }
    nW8 = (nW8 - digit) / 10;
}
console.log("While8: Toq raqam bormi?", hasOddW8);

// While9
let nW9 = 1345431, revW9 = 0, tempW9 = nW9;
while (tempW9 > 0) {
    let digit = tempW9 % 10;
    revW9 = revW9 * 10 + digit;
    tempW9 = (tempW9 - digit) / 10;
}
console.log("While9:", revW9 === nW9);

// While10
let nW10 = 29, isPrimeW10 = true, iW10 = 2;
while (iW10 < nW10) {
    if (nW10 % iW10 === 0) {
        isPrimeW10 = false;
        break;
    }
    iW10++;
}
console.log("While10:", isPrimeW10 ? "Tub son" : "Tub emas");
