import React from 'react'
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { BiShow, BiUserCircle } from 'react-icons/bi';
import {  MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

interface Props {
    book: Book;
}

interface Book {
    _id: string;
    title: string;
    author: string;
    publishYear: number;
}

const BookSingleCard = ({ book }: Props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div key={book._id} className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x1">
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-gray-500">{book._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-3xl text-green-500" />
                <h3 className="text-2xl">{book.title}</h3>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-3xl text-red-300" />
                <h2 className="my-1">{book.author}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BiShow
                    className='text-3x1 text-blue-800 scale-150 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-green-800 text-2xl hover:text-black" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-yellow-600 text-2xl hover:text-black" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-red-600 text-2xl hover:text-black" />
                </Link>
            </div>
            {showModal && (
                <BookModal book={book} onClose={() => setShowModal(false)} />
            )}
        </div>
    )
}

export default BookSingleCard