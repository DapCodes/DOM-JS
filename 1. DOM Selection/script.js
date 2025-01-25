// DOM Selection

// 1. document.getElementById
// element
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'red';
judul.innerHTML = 'Daffa Ramadhan';


// 2. document.getElementsByTagName()
// HTML Collections (Array)
const p = document.getElementsByTagName('p');
const h1 = document.getElementsByTagName('h1')[0];

// p[2].style.backgroundColor = 'lightblue';

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightBlue';
}

h1.style.fontSize = '50px';


// 3. document.getelementsByClassName()
// HTML Collections (Array)

const p2 = document.getElementsByClassName('p2');
p2[0].style.color = 'red';


// 4. document.querySelector()
// element (hanya 1 (pertama))
const p4 = document.querySelector('#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// 5. document.querySelectorAll()
// node list (mengembalikan semua element dalam param. (array))
const pAll = document.querySelectorAll('p');
pAll[2].style.color = 'white';
