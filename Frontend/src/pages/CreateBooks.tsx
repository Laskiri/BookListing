import React, { useState }from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';


const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.post('http://localhost:3000/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        alert('An error happend. Please Check the console');
        console.log(err);
      });
  };


  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3x1 my-4">Create Book</h1>
      {loading ? (<Spinner />) : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Title</label>
          <input
            type="text"
            className="border-2 border-gray-500 w-full px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Author</label>
          <input
            type="text"
            className="border-2 border-gray-500 w-full px-4 py-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            className="border-2 border-gray-500 w-full px-4 py-2"
            value={publishYear}
            onChange={(e) => setPublishYear(parseInt(e.target.value))}
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBooks