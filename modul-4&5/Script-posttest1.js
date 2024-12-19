// Ini file Script-posttest.js

function hit() { 
    // Mendapatkan golongan yang dipilih 
    const golongan = document.getElementById("gol").value; 
    const jumlahAnak = parseInt(document.getElementById("anak").value) || 0; 
    // Inisialisasi variabel untuk gaji pokok dan persentase tunjangan 
    let gajiPokok = 0; 
    let persenTunjangan = 0; 
    
    if (golongan === "I") { 
    gajiPokok = 250000; 
    persenTunjangan = 0.05; 
    } else if (golongan === "II") { 
    gajiPokok = 300000; 
    persenTunjangan = 0.10; 
    } else if (golongan === "III") { 
    gajiPokok = 350000; 
    persenTunjangan = 0.15; 
    } 
    // Menghitung tunjangan dan gaji bersih 
    const tunjangan = (gajiPokok * jumlahAnak) * persenTunjangan; 
    const gajiBersih = gajiPokok + tunjangan; 
    // Menampilkan hasil 
    document.getElementById("gapok").value = gajiPokok; 
    document.getElementById("tunjangan").value = tunjangan; 
    document.getElementById("gaji").value = gajiBersih; 
    } 
    