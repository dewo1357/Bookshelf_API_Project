/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const { getAllBooks, AddData, getBookById, editBooksById, DeleteBooksById } = require('./handling');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'POST',
    path: '/books',
    handler: AddData
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookById
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksById
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: DeleteBooksById
  },
];

module.exports =  routes;