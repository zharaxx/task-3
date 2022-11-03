const tombol = document.getElementById('submit-barang')

const produk = [];

const tempat = document.getElementsByClassName('output')[0]


function addproduk () {
    const namaProduk = document.getElementById('produk').value
    const jumlahProduk = document.getElementById('jumlah').value
    produk.push(namaProduk, jumlahProduk);
    const isi = document.createElement('div')
    isi.innerHTML = '<p>Nama : '+namaProduk+'</p><p>Jumlah : '+jumlahProduk+'</p>'
    tempat.append(isi)
}

tombol.onclick = addproduk

function changeBGcolor(event){
    var body = document.getElementsByTagName('body')[0];
    if(event.target.innerText == "Grey"){
        body.style.backgroundColor = 'grey';
    }
    if(event.target.innerText == "White"){
        body.style.backgroundColor = 'white';
    }
}

function redirectToGoogle(){
    window.location.assign('http://google.com');
}