let skorKomputer = 0; // Skor komputer
let skorUser = 0; // Skor user

function getPilihanKomputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";

  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") {
    if (comp == "orang") {
      skorUser++; // User menang
      return "MENANG!";
    } else {
      skorKomputer++; // Komputer menang
      return "KALAH!";
    }
  }
  if (player == "orang") {
    if (comp == "gajah") {
      skorKomputer++; // Komputer menang
      return "KALAH!";
    } else {
      skorUser++; // User menang
      return "MENANG!";
    }
  }
  if (player == "semut") {
    if (comp == "orang") {
      skorKomputer++; // Komputer menang
      return "KALAH!";
    } else {
      skorUser++; // User menang
      return "MENANG!";
    }
  }
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", "img/" + pilihanKomputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      // Update skor
      document.getElementById("skor-user").innerText = skorUser;
      document.getElementById("skor-komputer").innerText = skorKomputer;
    }, 1000);
  });
});
