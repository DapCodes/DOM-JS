// DOM MANIPULATION NODE

// buat element baru
const p = document.createElement('p');
// buat isi element
const textP = document.createTextNode('Ini P Baru');

// simpan isi ke dalam element
p.appendChild(textP);

// simpan p di akhir section a
const secA = document.getElementById('a');
secA.appendChild(p);


// --- menggunakan cara berbeda --- \\
// buat element baru
const li = document.createElement('li');
// buat isi element
const textLi = document.createTextNode('Ini Li Baru');

// simpan isi ke dalam element section b ul dan li
li.appendChild(textLi);
const ul = document.querySelector('section#b ul');
const li2 =  ul.querySelector('li:nth-child(2)');

ul.insertBefore(li, li2);


// --- remove --- \\
// mengambil element
const link = document.getElementsByTagName('a')[0];

// menghapus element (remove)
secA.removeChild(link);


// --- replace --- \\
// mengambil parent
const secB = document.getElementById('b');

// mengambil child
const p4 = secB.querySelector('p');

// membuat elemnt baru untuk mengganti p4
const h2NEW = document.createElement('h2');

// membuat isi untuk h2NEW
const texth2NEW = document.createTextNode('Ini H2 Baru');

// simpan isi ke dalam elemnt
h2NEW.appendChild(texth2NEW);

// mengganti p4 dengan h2NEW
secB.replaceChild(h2NEW, p4);
