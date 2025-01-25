const ul = document.querySelector('section#b ul');
const judul = document.getElementById('judul');
const pAll = document.querySelectorAll('p');


// 1. innerHTML
// judul.innerHTML = '<i>Daffa Ramadhan</i>';
// ul.innerHTML = '<li> Daffa Ramadhan </li>';


// 2. style.(propertyCSS)
judul.style.color = 'green';
pAll[3].style.fontSize = '60px';
pAll[3].style.backgroundColor = 'yellowGreen';


// 3. untuk mengelola attribute
//    setAttribute('id, link') -> Menambahkan Attribute baru dalam elemnt
//    getAtttibute('href') -> Untuk mengetahui isi attribute
//    removeAtttibute('href') -> Menghapus Attribute


// 4. untuk mengelola class
//    classList.add() -> menambahkan class
//    classList.remove() -> menghapus class
//    classList.toggle() -> untuk menambah jika tidak ada. jika ada maka sebaliknya
//    classList.item() -> untuk mengetahui class tertentu
//    classList.contains() -> untuk mengecek class
//    classList.replace() -> unruk mengganti class dengan yang baru

