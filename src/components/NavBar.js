// NavBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Menu, Film, Moon, Sun } from 'lucide-react';
import History from './History'; // Import the History component
import TrendingNow from './TrendingNow'; // Import the TrendingNow component
import TopRated from './TopRated';
import ComingSoon from './ComingSoon';
import RatedMovies from './RatedMovies';
import WatchList from './WatchList';
import Home from './Home';






const NavBar = () => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchButtonRef = useRef(null);
  const navigate = useNavigate();

  const Refresh=()=>{
    window.location.reload();

  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch('');
    setShowSearch(false);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setDropDownOpen(false);
  };

  const toggleDropdown = () => {
    setDropDownOpen(!dropDownOpen);
    setShowSearch(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setDropDownOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSearch &&
        searchInputRef.current && !searchInputRef.current.contains(event.target) &&
        searchButtonRef.current && !searchButtonRef.current.contains(event.target)) {
        setShowSearch(false);
      }

      if (dropDownOpen &&
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch, dropDownOpen]);
  useEffect(()=>{
    if(window.location.pathname !=='/Home'){
      navigate('/Home');
    }
  },[]);

  return (
    <>
      <nav className='flex items-center justify-between gap-4 p-4 bg-green-600 dark:bg-gray-800 text-white shadow-md transition-colors duration-300'>
        <div className="flex items-center gap-2">
          <Film className="w-8 h-8" />
          <button onClick={Refresh} className='text-2xl font-bold font-sans'>Movie APP</button>
        </div>

        <div className='flex items-center gap-4'>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-green-700 dark:hover:bg-black rounded-full transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

      
          {showSearch ? (
            <form onSubmit={handleSubmit} className='flex items-center' ref={searchInputRef}>
              <input
                type='text'
                placeholder='Search movies...'
                value={search}
                onChange={handleSearch}
                className='transition-all duration-300 border border-gray-300 rounded-l px-3 py-1 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 w-64 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                autoFocus
              />
              <button
                type='submit'
                className='bg-green-700 hover:bg-green-800 px-3 py-1 rounded-r border border-l-0 border-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:border-gray-500'
              >
                <SearchIcon className='w-5 h-5' />
              </button>
            </form>
          ) : (
            <button
              ref={searchButtonRef}
              onClick={toggleSearch}
              className='p-2 hover:bg-green-700 dark:hover:bg-gray-700 rounded-full transition-colors'
              aria-label='Search'
            >
              <SearchIcon className='w-5 h-5' />
            </button>
          )}

          {/* Menu Dropdown */}
          <div className='relative' ref={dropdownRef}>
            <button
              ref={menuButtonRef}
              onClick={toggleDropdown}
              className='p-2 hover:bg-green-700 dark:hover:bg-gray-700 rounded-full transition-colors'
              aria-label='Menu'
            >
              <Menu className='w-6 h-6' />
            </button>

            {dropDownOpen && (
              <div className='absolute right-0 mt-2 w-60 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-md shadow-xl z-50 border border-gray-200 dark:border-gray-600'>
                <div className='py-1'>
                  
                  <button onClick={()=>handleNavigation('/Home')} className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'>Home</button>
                  <h3 className='px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 border-b dark:border-gray-600'>Movies</h3>

                  <button
                    onClick={() => handleNavigation('/trending')}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
                  >
                    Trending Now
                  </button>
                  <button
                    onClick={() => handleNavigation('/top-rated')}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
                  >
                    Top Rated
                  </button>
                  <button
                    onClick={() => handleNavigation('/coming-soon')}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
                  >
                    Coming Soon
                  </button>

                  
                  {/* Other static links */}
                  <h3 className='px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 border-b border-t mt-1 dark:border-gray-600'>My Stuff</h3>
                  <button onClick={()=> handleNavigation('/Watch-List')} className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'>Watch List</button>

                  <button onClick={()=> handleNavigation('/Rated-Movies')} className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'>Rated Movies</button>
                  
                  <button
                    onClick={() => handleNavigation('/history')}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
                  >
                    History
                  </button>

                  <h3 className='px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 border-b border-t mt-1 dark:border-gray-600'>Account</h3>
                  <a href="#" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'>Profile</a>
                  <a href="#" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'>Settings</a>
                  <a href="#" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-red-500 dark:text-red-400'>Sign Out</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path='/Home'element={<Home/>}/>
        <Route path="/trending" element={<TrendingNow />} />
        <Route path="/trending" element={<TrendingNow />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path='/Watch-List'element={<WatchList/>}/>
        <Route path='/Rated-Movies'element={<RatedMovies/>}/>
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default NavBar;
