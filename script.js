function toggleContent(id) {
  const element = document.getElementById(id);
  element.classList.toggle("hidden");
}

function jawaban(pilihan) {
  const hasil = document.getElementById("hasil");

  if (pilihan === "benar") {
    hasil.innerHTML = "✅ Benar! Narkoba sangat berbahaya.";
    hasil.style.color = "green";
  } else {
    hasil.innerHTML = "❌ Salah! Coba lagi.";
    hasil.style.color = "red";
  }
}
