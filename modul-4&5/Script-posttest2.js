// Ini file Script-posttest2.js
function updateProductInfo() {
    const products = {
        "B001": { name: "Buku", price: 5000 },
        "B002": { name: "Penggaris", price: 1500 },
        "B003": { name: "Pulpen", price: 2000 }
    };
    const code = document.getElementById("code").value;
    const quantity = parseInt(document.getElementById("quantity").value) || 0;
    if (products[code]) {
        document.getElementById("name").value = products[code].name;
        document.getElementById("price").value = products[code].price;
        calculateTotal();
    }
}

function calculateTotal() {
    const price = parseFloat(document.getElementById("price").value) || 0;
    const quantity = parseInt(document.getElementById("quantity").value) || 0;
    let totalAmount = price * quantity;
    let discount = 0;

    if (quantity > 0 && quantity <= 10) {
        discount = 0.05 * totalAmount;
    } else if (quantity > 10 && quantity <= 20) {
        discount = 0.1 * totalAmount;
    } else if (quantity > 20) {
        discount = 0.15 * totalAmount;
    }

    const totalPayment = totalAmount - discount;
    document.getElementById("totalAmount").value = totalAmount;
    document.getElementById("discount").value = discount;
    document.getElementById("totalPayment").value = totalPayment;
}

function displayReceipt() {
    const code = document.getElementById("code").value;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const totalAmount = document.getElementById("totalAmount").value;
    const discount = document.getElementById("discount").value;
    const totalPayment = document.getElementById("totalPayment").value;
    const receipt = ` ----------------------------
Tanda Terima Penjualan
----------------------------
Kode Barang : ${code}
Nama Barang : ${name}
Harga Barang: Rp${price}
Jumlah Beli : ${quantity}
----------------------------
Jumlah Bayar: Rp${totalAmount}
Potongan    : Rp${discount}
----------------------------
Total Bayar : Rp${totalPayment}
----------------------------
Terima kasih telah berbelanja!`;

    document.getElementById("nota").innerText = receipt;
}
