import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';
import Details from './components/Details';
import id from './components/Details';


  function App() {
  
  const [movies, setMovies] =useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] =useState(1);
  const [ details,setDetails] = useState([]);



  
  const List_API=`http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=release_date.desc&page=${currentPage}`;
  const Search_API= 'https://api.themoviedb.org/3/search/movie?&api_key=328c283cd27bd1877d9080ccb1604c91&query=';
  const D_API=`http://api.themoviedb.org/3/movie/${id}?api_key=328c283cd27bd1877d9080ccb1604c91`;
  
  const getMovies = (API) =>{
    fetch(API)
      .then((res) => res.json())
      .then ((data)=>{
          console.log(data.results);
          setMovies([...data.results]);
      });
  }

  const getDetails = (API) =>{
    fetch(API)
      .then((res) => res.json())
      .then ((data)=>{
          console.log(data.results);
          setDetails([data.results]);
      });
  }



  useEffect(() => {

    getMovies(List_API);
  
  }, []);

    useEffect(() => {

    getDetails(D_API);
  
  }, []);
  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {

    getMovies(Search_API+searchTerm);
      
    setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  


  return (
      <>
        <header>
          <form >
              <input 
                  className="search"
                  type="search" 
                  placeholder="Search..." 
                  value={searchTerm}
                  onChange={handleOnChange}
              />
              <button className="search-button" onClick={handleOnSubmit}>Go</button>
          </form> 
        </header>

          <div className="movie-container">
                  {movies.length > 0 &&
                    movies.map((movie) => <Movie key={movie.id} {...movie} > 
                      </Movie>)}
                  
      
          </div>
                    

   
      </>
  );
}

export default App;
