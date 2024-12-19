// Validasi form Tambah Data Kamar
function validateKamarForm(event) {
    const idKamar = document.querySelector("input[name='id_kamar']").value.trim();
    const gambarRuangan = document.querySelector("input[name='gambar_ruangan']").value;
    const jenisKamar = document.querySelector("input[name='jenis_kamar']").value.trim();
    const harga = document.querySelector("input[name='harga']").value;
    const fasilitas = document.querySelector("textarea[name='fasilitas']").value.trim();

    if (!idKamar) {
        alert("ID Kamar tidak boleh kosong!");
        event.preventDefault();
        return false;
    }

    if (!gambarRuangan) {
        alert("Silakan upload gambar ruangan!");
        event.preventDefault();
        return false;
    }

    if (!jenisKamar) {
        alert("Jenis Kamar tidak boleh kosong!");
        event.preventDefault();
        return false;
    }

    if (harga <= 0) {
        alert("Harga harus lebih dari 0!");
        event.preventDefault();
        return false;
    }

    if (!fasilitas) {
        alert("Fasilitas tidak boleh kosong!");
        event.preventDefault();
        return false;
    }

    alert("Data Kamar berhasil disimpan!");
    return true;
}

// Validasi form Tambah Data Fasilitas
function validateFasilitasForm(event) {
    const id = document.querySelector("input[name='id']").value.trim();
    const namaFasilitas = document.querySelector("input[name='nama_fasilitas']").value.trim();
    const hargaWeekend = document.querySelector("input[name='harga_weekend']").value;
    const hargaWeekday = document.querySelector("input[name='harga_weekday']").value;
    const kuota = document.querySelector("input[name='kuota']").value;
    const jamBuka = document.querySelector("input[name='jam_buka']").value;
    const jamTutup = document.querySelector("input[name='jam_tutup']").value;

    if (!id) {
        alert("ID tidak boleh kosong!");
        event.preventDefault();
        return false;
    }

    if (!namaFasilitas) {
        alert("Nama Fasilitas tidak boleh kosong!");
        event.preventDefault();
        return false;
    }

    if (hargaWeekend <= 0) {
        alert("Harga Weekend harus lebih dari 0!");
        event.preventDefault();
        return false;
    }

    if (hargaWeekday <= 0) {
        alert("Harga Weekday harus lebih dari 0!");
        event.preventDefault();
        return false;
    }

    if (kuota <= 0) {
        alert("Kuota harus lebih dari 0!");
        event.preventDefault();
        return false;
    }

    if (!jamBuka) {
        alert("Jam Buka tidak boleh kosong!");
        event.preventDefault();
        return false;
    }

    if (!jamTutup) {
        alert("Jam Tutup tidak boleh kosong!");
        event.preventDefault();
        return false;
    }

    alert("Data Fasilitas berhasil disimpan!");
    return true;
}
