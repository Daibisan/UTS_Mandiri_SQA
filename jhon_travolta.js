/**
 * Program Perhitungan Gaji & Tabungan John Travolta
 */

function hitungKeuangan(jamKerja, pengeluaran, tarifNormal = 15000) {
  const JAM_NORMAL_MAX = 40;
  const TARIF_LEMBUR = tarifNormal * 1.5;

  let jamLembur = 0;
  let gajiNormal = 0;
  let gajiLembur = 0;

  // 1. Hitung Gaji
  if (jamKerja > JAM_NORMAL_MAX) {
    jamLembur = jamKerja - JAM_NORMAL_MAX;
    gajiNormal = JAM_NORMAL_MAX * tarifNormal;
    gajiLembur = jamLembur * TARIF_LEMBUR;
  } else {
    gajiNormal = jamKerja * tarifNormal;
    gajiLembur = 0;
  }

  const totalPemasukan = gajiNormal + gajiLembur;

  // 2. Evaluasi Tabungan
  let status = "";
  let tabungan = 0;

  if (totalPemasukan > pengeluaran) {
    status = "bisa menabung";
    tabungan = totalPemasukan - pengeluaran;
  } else if (totalPemasukan === pengeluaran) {
    status = "tidak bisa menabung";
    tabungan = 0;
  } else {
    status = "cari tambahan";
    tabungan = 0;
  }

  return {
    jamKerja,
    jamLembur,
    gajiNormal,
    gajiLembur,
    totalPemasukan,
    pengeluaran,
    status,
    tabungan
  };
}

function cetakHasil(hasil, judulKasus) {
  console.log("=".repeat(50));
  console.log(` SKENARIO: ${judulKasus}`);
  console.log("=".repeat(50));
  console.log(`Jam Kerja Total  : ${hasil.jamKerja} jam`);
  console.log(`Jam Lembur       : ${hasil.jamLembur} jam`);
  console.log(`Gaji Normal      : Rp ${hasil.gajiNormal.toLocaleString("id-ID")}`);
  console.log(`Gaji Lembur      : Rp ${hasil.gajiLembur.toLocaleString("id-ID")}`);
  console.log(`Total Pemasukan  : Rp ${hasil.totalPemasukan.toLocaleString("id-ID")}`);
  console.log(`Pengeluaran      : Rp ${hasil.pengeluaran.toLocaleString("id-ID")}`);
  console.log(`Status Keuangan  : "${hasil.status}"`);
  console.log(`Sisa Tabungan    : Rp ${hasil.tabungan.toLocaleString("id-ID")}`);
  console.log("=".repeat(50) + "\n");
}

// -------------------------------------------------------------
// EKSEKUSI SOAL UTAMA
// -------------------------------------------------------------
const studiKasusUtama = hitungKeuangan(52, 600000);
cetakHasil(studiKasusUtama, "Studi Kasus Soal (52 Jam, Pengeluaran Rp 600.000)");

// -------------------------------------------------------------
// TEST CASES (Memenuhi syarat path testing / variasi kondisi)
// -------------------------------------------------------------
console.log("--- MENJALANKAN TEST SUITE TAMBAHAN ---\n");

// Test Case 1: Jam normal tanpa lembur, bisa menabung
const tc1 = hitungKeuangan(30, 300000);
cetakHasil(tc1, "Test 1: Normal (30 Jam), Hemat (Rp 300.000)");

// Test Case 2: Pemasukan pas-pasan sama dengan pengeluaran
const tc2 = hitungKeuangan(40, 600000);
cetakHasil(tc2, "Test 2: Pas 40 Jam, Pengeluaran Sama (Rp 600.000)");

// Test Case 3: Pemasukan kurang dari pengeluaran (Defisit)
const tc3 = hitungKeuangan(20, 500000);
cetakHasil(tc3, "Test 3: Defisit (20 Jam, Pengeluaran Rp 500.000)");