// event handler \\
function ubahWarna() {
    p3.style.backgroundColor = 'lightBlue'; 
}
function ubahWarna2() {
    p2.style.backgroundColor = 'lightBlue'; 
}

const p3 = document.querySelector('.p3');

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna2;


// addEventListener \\
const p4 = document.querySelector('section#b p');

// ketika p4 di click. maka akan memunculkan li baru
var no = 3;
p4.addEventListener('click', function() {
    no ++;
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const textLi = document.createTextNode(`item ${no}`);
    li.appendChild(textLi);
    ul.appendChild(li);
});