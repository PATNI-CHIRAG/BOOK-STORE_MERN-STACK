import React from 'react';
import { useDeleteBookMutation, useFetchAllBooksQuery } from '../../../redux/features/books/booksApi';
import { Link, useNavigate } from 'react-router-dom';

const ManageBooks = () => {
  const navigate = useNavigate();
  const { data: books, refetch } = useFetchAllBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id).unwrap();
      alert('Book deleted successfully!');
      refetch();
    } catch (error) {
      console.error('Failed to delete book:', error.message);
      alert('Failed to delete book. Please try again.');
    }
  };

  return (
    // <section className="py-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-700">📚 Book Inventory</h3>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition-all duration-200"
              type="button"
            >
              See All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3">#</th>
                  <th className="px-6 py-3">Book Title</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books && books.length > 0 ? (
                  books.map((book, index) => (
                    <tr
                      key={book._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {book.title}
                      </td>
                      <td className="px-6 py-4">{book.category}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">
                        ${book.newPrice}
                      </td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <Link
                          to={`/dashboard/edit-book/${book._id}`}
                          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs transition"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteBook(book._id)}
                          className="inline-block bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center px-6 py-6 text-gray-500"
                    >
                      No books found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    // </section>
  );
};

export default ManageBooks;
