// const hapus = document.getElementsByTagName('span')[2];
// const card = document.getElementsByClassName('card')[0];

// hapus.addEventListener('click', function() {
//     card.style.display = "none";
// });



// DOM Traversal \\
// Ambil semua elemen dengan class 'close'
// const closeButtons = document.querySelectorAll('.close');

// Iterasi melalui setiap tombol close
// closeButtons.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         // Hapus card dari container
//         e.target.parentElement.style.display = "none";
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });


// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     });
// });


const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if( e.target.className = 'close' ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }
});
