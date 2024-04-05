let buku = [
    {"nama": "sherlock", "jumlah":2},
    {"nama": "lupin", "jumlah":2},
    {"nama": "aladin", "jumlah":2},
  ]

function pinjam() {
    let jumlah = document.getElementById('jumlah').value;
    let selectedbuku = document.getElementById('buku').value;
    let found = false;


    if (jumlah === "") {
        alert("masukkan jumlah buku");
        return;
    }

    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === selectedbuku) {
            found = true;
            if (parseInt(jumlah) > buku [i].jumlah){
                alert('jumlah buku tidak tersedia ');
            } 
            else {
                alert('silahkan ambil buku anda');
            }
        }
    }

    if (!found) {
        alert('buku tidak ditemukan');
    }
}