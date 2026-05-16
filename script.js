const questions = [

    // =========================
    // SOAL UMUM
    // =========================
// Soal ke 1
 {
    type: "case",

    caseStudy: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}`,

    question: "Apa hasil dari kombinasi CSS di atas?",

    options: [
        "Elemen berada di pojok kiri atas",
        "Elemen berada di tengah horizontal saja",
        "Elemen berada di tengah vertikal saja",
        "Elemen berada tepat di tengah layar",
        "Elemen menghilang dari halaman"
    ],

    answer: 3
},
// Soal ke 2
  {
    type: "case",

    caseStudy: `&lt;form&gt;
    &lt;input type="text" placeholder="Masukkan Nama"&gt;
    &lt;button&gt;Kirim&lt;/button&gt;
&lt;/form&gt;`,

    question: "Apa fungsi tag &lt;form&gt; pada HTML?",

    options: [
        "Menampilkan gambar",
        "Membuat tabel",
        "Menampung input data pengguna",
        "Membuat animasi",
        "Mengatur warna halaman"
    ],

    answer: 2
},
// Soal ke 3
   {
    type: "case",

    caseStudy: `&lt;?php
$angka1 = 10;
$angka2 = 5;

$hasil = $angka1 + $angka2;

echo $hasil;
?&gt;`,

    question: "Apa output dari kode PHP di atas?",

    options: [
        "105",
        "15",
        "10 + 5",
        "Error",
        "5"
    ],

    answer: 1
},
// Soal ke 4
   {
    question: "Apa fungsi utama PHP dalam web development?",

    options: [
        "Mengatur desain website",
        "Membuat animasi website",
        "Mengelola logika dan data di server",
        "Mengedit gambar website",
        "Mengatur jaringan internet"
    ],

    answer: 2
},

    // =========================
    // SOAL PERCABANGAN PHP
    // =========================
// Soal ke 5
   {
    type: "case",

    caseStudy: `&lt;?php

$nilai = 80;

if($nilai >= 75){

    echo "Lulus";

} else {

    echo "Tidak Lulus";

}

?&gt;`,

    question: "Apa output dari kode di atas?",

    options: [
        "Lulus",
        "Tidak Lulus",
        "Error",
        "80",
        "Tidak ada output"
    ],

    answer: 0
},
// Soal ke 7
  {
    type: "case",

    caseStudy: `&lt;?php

$teman = "Rifan";

if($teman == "Rajes"){

    echo "Rifan adalah teman saya";

} else if($teman == "Rifan"){

    echo "Rifan bukan teman saya";

} else {

    echo "Saya tidak punya teman";

}

?&gt;`,

    question: "Apa output dari kode PHP di atas?",

    options: [
        "Rifan adalah teman saya",
        "Rifan bukan teman saya",
        "Saya tidak punya teman",
        "Error",
        "Tidak ada output"
    ],

    answer: 1
},
// Soal ke 8
    {
        type: "case",

        caseStudy: `&lt;?php
$nilai = 90;

if($nilai >= 85){
    echo "A";
} elseif($nilai >= 75){
    echo "B";
} else {
    echo "C";
}
?&gt;`,

        question: "Apa output dari kode tersebut?",

        options: [
            "A",
            "B",
            "C",
            "AB",
            "Error",
        ],

        answer: 0
    },
// Soal ke 9
   {
    type: "case",

    caseStudy: `&lt;?php

$password = "admin123";

if($password == "admin"){

    echo "Login";

} else {

    echo "Password Salah";

}

?&gt;`,

    question: "Apa hasil output program?",

    options: [
        "Login",
        "Password Salah",
        "Error",
        "Tidak ada output",
        "admin123"
    ],

    answer: 1
},

    {
        type: "case",

        caseStudy: `&lt;?php
$angka = 4;

if($angka % 2 == 0){
    echo "Genap";
} else {
    echo "Ganjil";
}
?&gt;`,

        question: "Apa output dari kode di atas?",

        options: [
            "Genap",
            "Ganjil",
            "Tidak Ada",
            "genap",
            "4",
        ],

        answer: 0
    },
    // =========================
// SOAL MARQUEE
// =========================

{
    type: "case",

    caseStudy: `&lt;marquee&gt;
Selamat Datang
&lt;/marquee&gt;`,

    question: "Apa fungsi tag marquee di HTML?",

    options: [
        "Menampilkan teks berjalan",
        "Membuat tabel",
        "Membuat form",
         "Membuat kolom",
        "Membuat link",
    ],

    answer: 0
},

{
    type: "case",

    caseStudy: `&lt;marquee direction="right"&gt;
Hello World
&lt;/marquee&gt;`,

    question: "Teks akan bergerak ke arah?",

    options: [
        "Kanan",
        "Kiri",
        "Atas",
        "Bawah",
        "Diam di tengah",
    ],

    answer: 0
},

{
    type: "case",

    caseStudy: `&lt;marquee direction="up"&gt;
Belajar HTML
&lt;/marquee&gt;`,

    question: "Apa output dari kode di atas?",

    options: [
        "Teks bergerak ke bawah",
        "Teks bergerak ke atas",
        "Teks diam",
        "Teks bisa dihentikan kursor",
        "Teks bergerak bolak-balik",
    ],

    answer: 1
},

{
    type: "case",

    caseStudy: `&lt;marquee behavior="alternate"&gt;
Programming
&lt;/marquee&gt;`,

    question: "Apa fungsi behavior='alternate'?",

    options: [
        "Teks berkedip",
        "Teks diam",
        "Teks bergerak bolak-balik",
        "Teks bergerak ke bawah",
        "Teks bergerak ke atas",
    ],

    answer: 2
},
{
    type: "case",

    caseStudy: `&lt;table border="1"&gt;

    &lt;tr&gt;
        &lt;td&gt;Rifan&lt;/td&gt;
        &lt;td&gt;XI RPL&lt;/td&gt;
    &lt;/tr>

&lt;/table&gt;`,

    question: "Apa fungsi tag &lt;tr&gt; pada HTML tabel?",

    options: [
        "Membuat kolom tabel",
        "Membuat baris tabel",
        "Membuat warna tabel",
        "Membuat border tabel",
        "Menghapus isi tabel"
    ],

    answer: 1
},
{
    type: "case",

    caseStudy: `&lt;table border="1"&gt;

    &lt;tr&gt;
        &lt;td&gt;Nama&lt;/td&gt;
        &lt;td&gt;Kelas&lt;/td&gt;
        &lt;td&gt;Jurusan&lt;/td&gt;
    &lt;/tr&gt;

&lt;/table&gt;`,

    question: "Ada berapa jumlah kolom yang dibuat pada tabel di atas?",

    options: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],

    answer: 2
},

{
    type: "case",

    caseStudy: `&lt;table border="1"&gt;

    &lt;tr&gt;
        &lt;td&gt;Rifan&lt;/td&gt;
    &lt;/tr&gt;

    &lt;tr&gt;
        &lt;td&gt;Rajes&lt;/td&gt;
    &lt;/tr&gt;

&lt;/table&gt;`,

    question: "Ada berapa jumlah baris tabel (&lt;tr&gt;) pada kode di atas?",

    options: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],

    answer: 1
},

{
    type: "case",

    caseStudy: `&lt;table border="1"&gt;

    &lt;tr&gt;
        &lt;td&gt;A&lt;/td&gt;
        &lt;td&gt;B&lt;/td&gt;
    &lt;/tr&gt;

    &lt;tr&gt;
        &lt;td&gt;C&lt;/td&gt;
        &lt;td&gt;D&lt;/td&gt;
    &lt;/tr&gt;

&lt;/table&gt;`,

    question: "Berapa jumlah total tag &lt;td&gt; pada tabel di atas?",

    options: [
        "2",
        "3",
        "4",
        "5",
        "6"
    ],

    answer: 2
},

{
    type: "case",

    caseStudy: `&lt;?php

echo "Saya Rifan nilai raport saya:&lt;br&gt;&lt;br&gt;";

$uh = 90;
$uts = 70;
$uas = 85;

$na = ($uh + $uts + $uas) / 3;

echo "uh: $uh&lt;br&gt;
uts: $uts&lt;br&gt;
uas: $uas&lt;br&gt;
nilai akhir: $na&lt;br&gt;";

$na = "nilai akhir";

if($na == "nilai akhir "){

    echo "jika nilai saya =&gt;90 nilainya istimewa";

} else if($na == "nilai akhir"){

    echo "jika nilai saya =&gt;85 nilainya bagus";

} else {

    echo "jika nilai saya 70&lt;= nilainya kurang bagus";

}

?&gt;`,

    question: "Apa output terakhir yang ditampilkan dari kode PHP di atas?",

    options: [
        "jika nilai saya =>90 nilainya istimewa",
        "jika nilai saya =>85 nilainya bagus",
        "jika nilai saya 70<= nilainya kurang bagus",
        "Error",
        "Tidak ada output"
    ],

    answer: 1
},

{
    type: "case",

    caseStudy: `&lt;?php 

echo "latihan variabel&lt;br&gt;&lt;br&gt;";

$nama_barang = 145000;
$diskon = 70;

$harga_diskon = ($nama_barang * $diskon) / 500;

$harga_akhir = $nama_barang - $harga_diskon;

echo "harga sweater: $nama_barang&lt;br&gt;
diskon: $diskon&lt;br&gt;
harga akhir: $harga_akhir";

?&gt;`,

    question: "Berapa hasil dari harga akhir pada kode PHP di atas?",

    options: [
        "124700",
        "145000",
        "20300",
        "130500",
        "101500"
    ],

    answer: 0
},

{
    type: "case",

    caseStudy: `&lt;?php

echo "Associative Array Dimensi Dua:&lt;br&gt;";

$nilai = array(

    array("fisika"=&gt;"90","Matematika"=&gt;"65","kimia"=&gt;"83"),

    array("fisika"=&gt;"90","Matematika"=&gt;"78","kimia"=&gt;"87"),

    array("fisika"=&gt;"78","Matematika"=&gt;"90","kimia"=&gt;"78")

);

// Mengakses elemen array dengan looping

echo "&lt;ul&gt;";

for($r = 0; $r &lt; count($nilai); $r++){

    echo "&lt;li&gt;";

    foreach($nilai[$r] as $key =&gt; $value){

        echo $key . ": " . $value . "";

    }

    echo "&lt;/li&gt;";

    echo "&lt;br&gt;&lt;br&gt;";

}

echo "&lt;/ul&gt;";

?&gt;`,

    question: "Berapa jumlah data array yang terdapat pada variabel $nilai?",

    options: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],

    answer: 2
},

];

let currentQuestion = 0;

let answers = new Array(questions.length).fill(null);

// =========================
// TIMER 30 MENIT
// =========================

let timeLeft = 30 * 60;

const timer = setInterval(() => {

    let minutes = Math.floor(timeLeft / 60);

    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerHTML =
        `⏰ ${minutes}:${seconds}`;

    timeLeft--;

    // waktu habis
    if (timeLeft < 0) {

        clearInterval(timer);

        alert("Waktu ujian habis!");

        showResult();
    }

}, 1000);

// =========================
// LOAD SOAL
// =========================

function loadQuestion() {

    const q = questions[currentQuestion];

    let html = "";

    // tampilkan study kasus
    if (q.type === "case") {

        html += `
            <div class="case-study">
                <pre>${q.caseStudy}</pre>
            </div>
        `;
    }

    // tampilkan soal
    html += `<h3>${q.question}</h3>`;

    // tampilkan pilihan
    q.options.forEach((opt, index) => {

        html += `
            <label class="option">

                <input
                    type="radio"
                    name="option"
                    value="${index}"
                    ${answers[currentQuestion] === index ? "checked" : ""}
                >

                ${opt}

            </label>
        `;
    });

    document.getElementById("quiz-container").innerHTML =
        html;

    // info soal
    document.getElementById("info").innerHTML =
        `Soal ${currentQuestion + 1} dari ${questions.length}`;

    // tombol next
    const nextBtn =
        document.getElementById("nextBtn");

    // kalau soal terakhir
    if (currentQuestion === questions.length - 1) {

        nextBtn.innerHTML = "Selesai";

    } else {

        nextBtn.innerHTML = "Next";
    }

    // PANGGIL UPDATE PROGRESS BAR
    updateProgressBar();
}

// =========================
// SIMPAN JAWABAN
// =========================

function saveAnswer() {

    const selected = document.querySelector(
        'input[name="option"]:checked'
    );

    if (selected) {

        answers[currentQuestion] =
            parseInt(selected.value);
    }
}

// =========================
// NEXT
// =========================

function nextQuestion() {

    saveAnswer();

    // kalau soal terakhir
    if (currentQuestion === questions.length - 1) {

        const confirmFinish = confirm(
            "Periksa kembali jawaban kamu.\n\nKlik OK untuk menyelesaikan ujian."
        );

        // kalau klik OK
        if (confirmFinish) {

            showResult();
        }

        return;
    }

    currentQuestion++;

    loadQuestion();

    // PANGGIL UPDATE PROGRESS BAR
    updateProgressBar();
}

// =========================
// PREV
// =========================

function prevQuestion() {

    saveAnswer();

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

        // PANGGIL UPDATE PROGRESS BAR
        updateProgressBar();
    }
}

// =========================
// HASIL UJIAN
// =========================

function showResult() {

    clearInterval(timer);

    let correct = 0;

    let wrong = 0;

    questions.forEach((q, index) => {

        if (answers[index] === q.answer) {

            correct++;

        } else {

            wrong++;
        }
    });

    // hitung nilai
    let score = Math.round(
        (correct / questions.length) * 100
    );

    // hapus soal
    document.getElementById(
        "quiz-container"
    ).innerHTML = "";

    // sembunyikan tombol
    document.querySelector(
        ".navigation"
    ).style.display = "none";

    // hapus info soal
    document.getElementById(
        "info"
    ).innerHTML = "";

    // hilangkan timer
    document.getElementById(
        "timer"
    ).style.display = "none";

    // sembunyikan progress bar ketika hasil keluar
    const progContainer = document.querySelector(".progress-container");
    if(progContainer) progContainer.style.display = "none";

    // tampilkan hasil
    document.getElementById("result").innerHTML = `

        <h2>HASIL UJIAN</h2>

        <p><b>Nilai:</b> ${score}</p>

        <p><b>Jawaban Benar:</b> ${correct}</p>

        <p><b>Jawaban Salah:</b> ${wrong}</p>

        <p><b>Total Soal:</b> ${questions.length}</p>

    `;
}

// pertama kali load
loadQuestion();

// =========================================
// TAMBAHAN BARU: FUNGSI JALAN PROGRESS BAR
// =========================================
function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        const totalQuestions = questions.length;
        // Hitung persentase posisi soal saat ini
        const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
        progressBar.style.width = progressPercentage + "%";
    }
}