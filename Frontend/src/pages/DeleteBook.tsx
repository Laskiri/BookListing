import React, { useEffect, useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`)
    .then((res) => {
      setTitle(res.data.title);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      alert('An error happend. Please Check the console');
      setLoading(false);
    })
  }, [])

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('Error Deleting Book', { variant: 'error' })
        console.log(err);
      });
  }
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3x1 my-4">Delete Book</h1>
      {loading ? (<Spinner />) : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
        <div className="my-4">
          <p>Are you sure you want to delete "{title}" from the book listing?</p>
        </div>
        <div className="my-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDeleteBook}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBook