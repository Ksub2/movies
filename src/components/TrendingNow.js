import React, { useState } from 'react';

const TrendingNow = () => {
  const [movies, setMovies] = useState([
    {
      title: "Golmaal",
      image: "./assets/images.jpeg",
      toggles: {
        length: false,
        genre: false,
        rating: false,
        releaseDate: false,
        director: false,
        cast: false,
      },
    },
    {
      title: "Sholay",
      image: "./assets/image2.jpg",
      toggles: {
        length: false,
        Genre:false,
        Rating:false,
        ReleaseDate:false,
        Director:false,
        Cast:false
      },
    },
    {
      title: "Dangal",
      image: "./assets/image3.jpeg",
      toggles: {
        length: false,
        genre: false,
        rating: false,
        releaseDate: false,
        director: false,
        cast: false,
      },
    }
  ]);

  const toggleInfo = (index, key) => {
    const updatedMovies = [...movies];
    updatedMovies[index].toggles[key] = !updatedMovies[index].toggles[key];
    setMovies(updatedMovies);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Trending Movies 🎬</h1>

      <div className="flex flex-wrap gap-4 mt-4">
        {movies.map((movie, index) => (
          <div key={index} className="border p-5 w-[450px] shadow-xl border-black transition rounded-xl transform hover:-translate-y-1 hover:shadow-2xl dark:border-white">
            <h1 className="text-2xl font-mono text-red-400">{movie.title}</h1>
            <img className="h-[150px] object-cover rounded-xl mt-2" src={movie.image} alt={`${movie.title} Movie`} />

            <ul className="space-y-4 mt-4">
              {/* For Golmaal */}
              {movie.title === "Golmaal" && (
                <>
                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'length')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.length ? "Hide Length" : "Show Length"}
                    </button>
                    {movie.toggles.length && <span className="text-green-500 font-bold transition-opacity duration-300">: 2h 30m</span>}
                  </li>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'genre')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.genre ? "Hide Genre" : "Show Genre"}
                    </button>
                    {movie.toggles.genre && <span className="text-green-500 font-bold transition-opacity duration-300">: Action, Comedy</span>}
                  </li>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'rating')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.rating ? "Hide Rating" : "Show Rating"}
                    </button>
                    {movie.toggles.rating && <span className="text-green-500 font-bold transition-opacity duration-300">: 8.5/10</span>}
                  </li>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'releaseDate')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.releaseDate ? "Hide Release Date" : "Show Release Date"}
                    </button>
                    {movie.toggles.releaseDate && <span className="text-green-500 font-bold transition-opacity duration-300">: 2023</span>}
                  </li>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'director')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.director ? "Hide Director" : "Show Director"}
                    </button>
                    {movie.toggles.director && <span className="text-green-500 font-bold transition-opacity duration-300">: Rohit Shetty</span>}
                  </li>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'cast')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.cast ? "Hide Cast" : "Show Cast"}
                    </button>
                    {movie.toggles.cast && <span className="text-green-500 font-bold transition-opacity duration-300">: Ajay Devgn, Arshad Warsi, Tusshar Kapoor</span>}
                  </li>
                </>
              )}

              {/* For Sholay */}
              {movie.title === "Sholay" && (
                <>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'length')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.length ? "Hide Length" : "Show Length"}
                    </button>
                    {movie.toggles.length && <span className="text-green-500 font-bold transition-opacity duration-300">: 3h 24m</span>}
                  </li>
                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'genre')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.genre ? "Hide Genre" : "Show Genre"}
                    </button>
                    {movie.toggles.genre && <span className="text-green-500 font-bold transition-opacity duration-300">: Action,Thriller</span>}
                  </li>
                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'rating')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.rating ? "Hide Rating" : "Show Rating"}
                    </button>
                    {movie.toggles.rating && <span className="text-green-500 font-bold transition-opacity duration-300">: 8.1/10</span>}
                  </li>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'releaseDate')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.releaseDate ? "Hide Release Date" : "Show Release Date"}
                    </button>
                    {movie.toggles.releaseDate && <span className="text-green-500 font-bold transition-opacity duration-300">: 1975</span>}
                  </li>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'director')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.director ? "Hide Director" : "Show Director"}
                    </button>
                    {movie.toggles.director && <span className="text-green-500 font-bold transition-opacity duration-300">: Ramesh shippy</span>}
                  </li>

                  <li className="flex items-center space-x-2 text-red-500 font-mono">
                    <button
                      onClick={() => toggleInfo(index, 'cast')}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
                    >
                      {movie.toggles.cast ? "Hide Cast" : "Show Cast"}
                    </button>
                    <br></br>
                    {movie.toggles.cast && <span className="text-green-500 font-bold transition-opacity duration-300 ">:Amitabh Bacchan,Dharmendra,Hema malini,Amjhad Khan,Jay baduri,Sanjeev Kumar</span>}
                  </li>

                </>
              )}
              {movie.title=='Dangal'&&(
                <>
                 <li className='flex items-center space-x-2 text-red-500 font-mono'>
                  <button onClick={()=>toggleInfo(index,'length')} className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition'
                    >
                      
                      {movie.toggles.length ?'Hide Length':'Show Length'}
                    </button>

                    {movie.toggles.length && <span className='text-green-500 font-bold transition-opacity duration-300'>: 2h 41m </span>}

                 </li>
                 <li className='flex items-center space-x-2 text-red-500 font-mono'>
                  <button onClick={()=>toggleInfo(index,'Genre')} className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition'
                    >
                      {movie.toggles.Genre ?'Hide Genre':'Show Genre'}
                    </button>
                  {movie.toggles.Genre && <span className='text-green-500 font-bold transition-opacity duration-300'>: Action,Sports, Drama</span>}
                 </li>
                 <li className='flex items-center space-x-2 text-red-500 font-mono'>
                  <button onClick={()=>toggleInfo(index,'Rating')} className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition'>
                    {movie.toggles.Rating ?'Hide Rating':'Show Rating'}
                    
                  </button>
              {movie.toggles.Rating && <span className='text-green-500 font-bold transition-opacity duration-300'>: 8.4/10</span>}
                 </li>
                 <li className='flex items-center space-x-2 text-red-500 font-mono'>
                  <button onClick={()=>toggleInfo(index,'ReleaseDate')} className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition'
                    >
                      {movie.toggles.ReleaseDate ? 'Hide ReleaseDate': 'Show ReleaseDate'}
                    </button>
                    {movie.toggles.ReleaseDate && <span className='text-green-500 font-bold transition-opacity duration-300'>: 2016</span>}
                 </li>
                 <li className='flex items-center space-x-2 text-red-500 font-mono'>
                  <button onClick={()=>toggleInfo(index,'Director')} className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition'
                    >
                      {movie.toggles.Director ?'Hide Director':'Show Director'}
                    </button>
                    {movie.toggles.Director && <span className='text-green-500 font-bold transition-opacity duration-300'>:Nitesh Tiwari</span>}

                 </li>
                 <li className='flex items-center space-x-2 text-red-500 font-mono'>
                  <button onClick={()=>toggleInfo(index,'Cast')} className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition'
                    >
                      {movie.toggles.Cast ? 'Hide Cast': 'Show Cast'}
                    </button>
                    {movie.toggles.Cast && <span className='text-green-500 font-bold transition-opacity duration-300'>:Aamir Khan, Fatima Sana, Sanya Malhotra, Zaira Wasim</span>}

                 </li>
              
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
