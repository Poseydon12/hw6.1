let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j += 2) {
    console.log(j);
}

for (let k = 1; k <= 10; k++) {
    console.log(`7 x ${k} = ${7 * k}`);
}


let n = 10;
for (let l = 1; l < Infinity; l++) {
    if (l >= n) {
        break;
    }
    console.log(l);
}


let m = 1;
while (m <= 20) {
    if (m % 2 == 0) {
        m++;
        continue; 
    }
    if (m === 3) {
        m++;
        continue;
    }
    console.log(m);
    m++;
}