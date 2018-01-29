
// STATUS PEKERJAAN :

function tampilkan() {

var tg = document.getElementById("tanggal").value;
var bg = document.getElementById("bulan").value;
var tng = document.getElementById("tahun").value;

var tr = document.getElementById("hlahir").value;
var br = document.getElementById("blahir").value;
var tir = document.getElementById("tlahir").value;

var tgl_sekarang = parseInt(tg)
var bln_sekarang = parseInt(bg)
var thn_sekarang = parseInt(tng)

var tgl_lahir = parseInt(tr)
var bln_lahir = parseInt(br)
var thn_lahir = parseInt(tir)

var x = hitungUmur(tgl_sekarang, bln_sekarang, thn_sekarang, tgl_lahir, bln_lahir, thn_lahir)
var y = hitungPENSIUN(tgl_sekarang, bln_sekarang, thn_sekarang, tgl_lahir, bln_lahir, thn_lahir)


    swal({
    background : "rgba(0, 0, 0, 0.5)",
    title : `<span style="color:#ffffff">${'____' +'\n'+'\n' +'\n'+'<small>Usia Sekarang :</small>' +'\n' +'\n' +x +'\n'+'\n'+'\n' +'<small>Jarak Pensiun :</small>'+'\n'+'\n' +y +'\n' +'\n' + '____' +'\n'+'\n'}<span> `,
    showConfirmButton : false
    })

}

function hitungUmur(tgl_sekarang, bln_sekarang, thn_sekarang, tgl_lahir, bln_lahir, thn_lahir) {

  var tambahBulan = bln_sekarang + 12;
  var tambahHari = tgl_sekarang + 30;

  var thn = thn_sekarang - thn_lahir ;
  var bln ;
  var tgl ;

  if(bln_lahir > bln_sekarang){

        bln = tambahBulan - bln_lahir  ;
        thn = thn_sekarang - thn_lahir - 1 ;

  }else {

        bln = bln_sekarang - bln_lahir ;

  }

  if(tgl_sekarang < tgl_lahir){
    tgl = tambahHari - tgl_lahir
    bln -= 1
  }else{
    tgl = tgl_sekarang - tgl_lahir;
  }

  if (bln_sekarang === 1 || bln_sekarang === 2 || bln_sekarang === 4 || bln_sekarang === 6 || bln_sekarang === 8 || bln_sekarang === 9 || bln_sekarang === 11 ) {

    var tgl = tgl + 1

  } else if (thn_sekarang % 400 !== 0 && bln_sekarang === 3) {

    tgl = tgl - 2

  } else if (thn_sekarang % 400 === 0 && bln_sekarang === 3) {

    tgl = tgl - 1

  }

  return thn +' Tahun, ' +bln +' bulan, ' +tgl +' hari'

}

function hitungPENSIUN(tgl_sekarang, bln_sekarang, thn_sekarang, tgl_lahir, bln_lahir, thn_lahir){

  var tambahBulanPensiun = bln_lahir + 12;
  var tambahHariPensiun = tgl_lahir + 30;
  var intBln = bln_lahir;

  var pekerjaan = document.getElementById("status").value;

    if (pekerjaan === 'Guru' || pekerjaan === 'guru' || pekerjaan === 'GURU') {
      var tambahUmur = 60
    } else {
      tambahUmur = 58
    }

    var tahunPensiun = thn_lahir + tambahUmur

    var jPensiun_tahun = tahunPensiun - thn_sekarang

    if(bln_sekarang > bln_lahir){

      var tambahBulan_pensiun = bln_lahir + 12 ;

      var jPensiun_bulan = tambahBulan_pensiun - bln_sekarang ;
          jPensiun_tahun = tahunPensiun - thn_sekarang - 1 ;

    }else {

        jPensiun_bulan = bln_lahir - bln_sekarang ;

    }

    if(tgl_sekarang > tgl_lahir){


      var jPensiun_hari = tambahHariPensiun - tgl_sekarang ;
          jPensiun_bulan = jPensiun_bulan - 1 ;

    }else {

        jPensiun_hari = tgl_lahir - tgl_sekarang ;

    }

    if (intBln === 1 || intBln === 2 || intBln === 4 || intBln === 6 || intBln === 8 || intBln === 9 || intBln === 11 ) {

      var jPensiun_hari = jPensiun_hari + 1

    } else if (tahunPensiun % 400 !== 0 && intBln === 3) {

      jPensiun_hari = jPensiun_hari - 2

    } else if (tahunPensiun % 400 === 0 && intBln === 3) {

      jPensiun_hari = jPensiun_hari - 1

    }

return jPensiun_tahun +' Tahun, ' +jPensiun_bulan +' Bulan, ' +jPensiun_hari +' Hari';

}
