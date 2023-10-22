import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { PiBookOpenTextLight } from 'react-icons/pi'
interface Book {
    _id: string;
    title: string;
    author: string;
    publishYear: number;
}

interface Props {
    book: Book;
    onClose: () => void;
}


const BookModal = ({ book, onClose }: Props) => {
    return (
        <div
            className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white rounded-x1 p-4 flex flex-col relative"
            >

                <AiOutlineClose
                    className='absolute right-6 top-6 text-3x1 text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
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
                <p className='mt-4'>Anything that wants to be shown</p>
                <p className="my-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita fugit 
                    labore illo ipsam, quia, quae asperiores error dolorum 
                    sunt nobis tempora, id quas ad officiis libero quasi reprehenderit 
                    corrupti laudantium.
                </p>
            </div>


        </div>
    )
}

export default BookModal