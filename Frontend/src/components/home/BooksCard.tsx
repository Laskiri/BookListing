import React from 'react';
import BookSingleCard from './BookSingleCard';


interface Book {
    _id: string;
    title: string;
    author: string;
    publishYear: number;
}

interface Props {
    books: Book[];
}

const BooksCard = ({ books }: Props) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => (
                <BookSingleCard book={item}/>
            ))}

        </div>
    );
};

export default BooksCard