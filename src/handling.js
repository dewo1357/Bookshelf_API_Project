/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const request = require('@hapi/hapi/lib/request');
const Books = require('./notes');
const { nanoid } = require('nanoid');

// Add Data
const AddData = (request, h)=>{
  const id = nanoid(20);
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = false;
  const dataBaru = { id, name, year,
    author, summary,
    publisher, pageCount,
    readPage, finished,
    reading, insertedAt, updatedAt
  };

  let pesan = null;
  if (name !== undefined){
    if (readPage <= pageCount){
      if (readPage == pageCount){
        dataBaru.finished = true;
      }
      Books.push(dataBaru);
      const response = h.response({
        status : 'success',
        message : 'Buku berhasil ditambahkan',
        data : {
          bookId : id,
        }
      });
      response.code(201);
      return response;
    } else {
      pesan = 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount';
    }
  } else {
    pesan = 'Gagal menambahkan buku. Mohon isi nama buku';
  }
  const response = h.response({
    status : 'fail',
    message : pesan,
  });
  response.code(400);
  return response;
};
const getAllBooks = (request, h)=>({
  status : 'success',
  data : {
    'books' : Books.map((items)=>  ({ 'id' : items.id, 'name' : items.name, 'publisher' : items.publisher })),
  },
});

//GET BOOK BY ID
const getBookById = (request, h)=>{
  const { bookId }= request.params;
  const result = Books.filter((items)=>items.id === bookId)[0];
  if (result!==undefined){
    const response = h.response({
      status : 'success',
      data : {
        'book' :   result
      },
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status : 'fail',
    message : 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

//Edit Book By ID
const editBooksById = (request, h)=>{
  const { bookId } = request.params;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
  const updatedAt = new Date().toISOString();

  let pesan = null;
  let number = null;
  let Status = null;
  let finished = false;
  if (name!==undefined){
    if (readPage > pageCount){
      pesan = 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount';
      number = 400 ;
      Status = 'fail';
    } else {
      const data = Books.findIndex((items)=>items.id === bookId);

      if (data!==-1){
        if (readPage == pageCount){
          finished = true;
        }
        Books[data] = { ...Books[data], name, year,
          author, summary, publisher, pageCount, readPage, finished, reading, updatedAt };
        pesan = 'Buku berhasil diperbarui';
        number = 200  ;
        Status = 'success';

      } else {
        pesan = 'Gagal memperbarui buku. Id tidak ditemukan';
        number = 404;
        Status = 'fail';
      }

    }
  } else {
    pesan = 'Gagal memperbarui buku. Mohon isi nama buku';
    number = 400;
    Status = 'fail';
  }

  const response = h.response({
    status : Status,
    message : pesan,
    updated : updatedAt,
  });
  response.code(number);
  return response;
};

//DELETE BOOK By ID
const DeleteBooksById = (request, h)=>{
  const { bookId } = request.params;
  const index = Books.findIndex((items)=>items.id === bookId);
  let pesan = null;
  if (index !== -1){
    Books.splice(index, 1);
    const response = h.response({
      status : 'success',
      message : 'Buku berhasil dihapus'
    });
    response.code(200);
    return response;
  } else {
    pesan = 'Buku gagal dihapus. Id tidak ditemukan';
  }

  const response = h.response({
    status : 'fail',
    message : pesan,
  });
  response.code(404);
  return response;
};

module.exports = { AddData, getAllBooks, getBookById, editBooksById, DeleteBooksById };