//  --- LATIHAN 1 --- \\
const btn = document.getElementById('btn');
const body = document.getElementsByTagName('body')[0];

btn.addEventListener('click', function() {
    // body.style.backgroundColor = 'lightBlue';
    body.classList.toggle('biru-muda');
})


//  --- LATIHAN 2 --- \\
const btnNew = document.createElement('button');
const textBtnNew = document.createTextNode('Ini Button Baru');

btnNew.appendChild(textBtnNew);
btnNew.setAttribute('type', 'button');

btn.after(btnNew);

btnNew.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    body.style.backgroundColor = `rgb(${r},${g},${b})`;
})


//  --- LATIHAN 3 --- \\
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');


sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    body.style.backgroundColor = `rgb(${r},${g},${b})`;
})

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    body.style.backgroundColor = `rgb(${r},${g},${b})`;
})

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    body.style.backgroundColor = `rgb(${r},${g},${b})`;
})



//  --- LATIHAN 4 --- \\
body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // event.clientX;

    // ukuran browser
    // window.innerWidth;

    const xPos = Math.round((event.clientX / window.innerWidth) * 255 );
    const yPos = Math.round((event.clientY / window.innerHeight) * 255 );

    body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
})
