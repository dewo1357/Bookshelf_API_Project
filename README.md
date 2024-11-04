# Bookshelf API Project

REST API sederhana menggunakan framework Hapi.js untuk mengelola data buku.

## Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) di komputer Anda.
- [Postman](https://www.postman.com/) untuk menguji API.

## Instalasi dan Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan proyek secara lokal:

### 1. Clone Repository

```bash
git clone https://github.com/dewo1357/Bookshelf-API-Project.git
```
### 2. Masuk ke Direktori Proyek

```bash
cd Bookshelf-API-Project
```
### 3.Instal Dependensi Jalankan perintah ini untuk menginstal semua paket yang diperlukan:

```bash
npm install
```
### 4.Menjalankan Server Setelah instalasi selesai, jalankan perintah berikut untuk memulai server Hapi:

```bash
npm start
```

## Struktur Proyek
src: Folder utama berisi semua kode sumber API.
package.json: Berisi konfigurasi dan dependensi proyek.
Menguji API Menggunakan Postman
Import Koleksi Postman

Buka Postman dan import file bookshelf-api-test.postman_collection.json.
Import juga file environment bookshelf-api-test.postman_environment.json jika tersedia.
Pilih Environment

Pastikan environment yang benar dipilih di Postman agar semua variabel yang diperlukan dikonfigurasi dengan benar.
Kirim Permintaan API

Gunakan koleksi yang diimpor untuk mengirim berbagai permintaan (GET, POST, PUT, DELETE) ke API Anda.
Periksa Respons

Periksa apakah respons dari server sesuai dengan yang diharapkan. Anda dapat melihat hasilnya di tab "Body" di Postman.
Dokumentasi API
Contoh Rute
### GET /books: Mengambil semua buku.
### POST /books: Menambahkan buku baru.
### PUT /books/{id}: Memperbarui buku berdasarkan ID.
### DELETE /books/{id}: Menghapus buku berdasarkan ID.
Variabel Lingkungan (Environment)
Pastikan variabel baseUrl disesuaikan dengan http://localhost:9000 atau URL server Anda.
