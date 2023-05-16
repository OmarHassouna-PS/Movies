import './App.css';
import { useState } from 'react'
import useFetch from './useFetch';

export default function App() {
  const [URL, setURL] = useState('http://localhost:5000/movies');

  const { data } = useFetch(URL);

  function handleSearch(event) {
    setURL(`http://localhost:5000/movies/${event.target.value}`);
  }

  return (
    <>
      <div className='mb-5'>
        <h4>Search</h4>
        <select className="form-select" onChange={handleSearch}>
          <option value={''}>All</option>
          <option value={'action'}>Action</option>
          <option value={'drama'}>Drama</option>
          <option value={'fantasy'}>Fantasy</option>
          <option value={'crime'}>Crime</option>
        </select>
      </div>

      <div className='container'>


        {data?.map((movie, index) => {
          return (
            <div key={index} className="container card mx-auto" style={{ maxWidth: '18rem' }}>
              <img className="card-img-top" src={movie.image} alt="Sunset in the mountains" />
              <div className="card-body">
                <h1 className="card-title">{movie.title}</h1>
                <p className="card-text">{movie.description}</p>
                <h5>{movie.director}</h5>
                
                <p class="card-text">
                {movie.genre?.map(element => {
                  return (
                    element + ', '
                  )
                })}
                </p>
                <p class="card-text">{movie.rating}</p>
              </div>
              <button></button>
            </div>
          )
        }
        )}
      </div >
    </>
  );
}
