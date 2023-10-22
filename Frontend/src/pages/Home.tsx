import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox} from 'react-icons/md'
import BooksCard from '../components/home/BooksCard'
import BooksTable from '../components/home/BooksTable'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/books')
            .then((res: any) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((err: any) => {
                console.log(err);
                setLoading(false);
            })
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-evenly  flex-col items-center'>
                <h1 className='text-5xl my-6 font-medium'>Book List</h1>
                <div className='flex justify-center items-center gap-x-4'>
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => { setShowType('table') }}>
                    Table
                </button>
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => { setShowType('card') }}>
                    Card
                </button>
                </div>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-skye-800 text-4xl my-4' />
                </Link>
            </div>
            
            
            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
        </div>
    )
}

export default Home