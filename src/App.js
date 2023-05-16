import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState({});
  const URL = 'http://localhost:8000/movies'

  useEffect(() => {
    axios.get(URL)
      .then(res => setData(res.data))
  }, [])

  const filterBySearch = (event) => {

    const query = event.target.value;

    var updatedList = [...data.data];

    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setData(updatedList);
  };

  return (
    <>
    <input id="search-box" onChange={filterBySearch} />

      {data.data?.map((user) => {
        return (
          <div class="card" style={{width: '18rem'}}>
            <img src={user.avatar} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Name : {user.first_name} {user.last_name}</h5>
                <p class="card-text">email : {user.email}</p>
                <a href="#" class="btn btn-success">Go somewhere</a>
              </div>
          </div>
        )
      }
      )}
    </>
  );
}
