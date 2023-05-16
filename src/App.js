import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const URL = 'http://localhost:5000/movies'

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setData(res.data)
        setDataFilter(res.data)
      })

  }, [])

  const filterBySearch = (event) => {

    const query = event.target.value;
    let updatedList = [...data];

    if(query) {
  
      updatedList = updatedList.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }
    
    setDataFilter(updatedList);
  };

  return (
    <>

      <input id="search-box" onChange={filterBySearch} />
      <div className='container'>


      {dataFilter?.map((movie, index) => {
        return (
          <div key={index} class="card d-flex" style={{ width: '18rem' }}>
            <img src={movie.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{movie.title}</h5>
              <h5 class="card-title">{movie.director}</h5>
              <p class="card-text">{movie.description}</p>
              <p class="card-text">{movie.genre}</p>
              <p class="card-text">{movie.rating}</p>
              <a href="#" class="btn btn-success">Watch now</a>
            </div>
          </div>
        )
      }
      )}
            </div>
    </>
  );
}
// rank
// :
// 1
// rating
// :
// "9.3"
// thumbnail
// :
// "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg"
// title
// :
// "The Shawshank Redemption"
// trailer
// :
// "https://www.youtube.com/embed/NmzuHjWmXOc"
// writers
// :
// (2)['Stephen King (based on the short novel "Rita Hayworth and the Shawshank Redemption" by)', 'Frank Darabont (screenplay by)']
// year
// :
// 1994