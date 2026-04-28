import React, { useContext, useState, useEffect, useRef } from 'react';
import { Search, User, ChefHat, LogOut, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getAllRecipes } from '../../utils/recipeStorage';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const allRecipes = getAllRecipes();
      const results = allRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (recipe.category && recipe.category.toLowerCase().includes(searchTerm.toLowerCase()))
      ).slice(0, 5); // display up to 5 results
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleResultClick = (id) => {
    setSearchTerm('');
    setIsSearchFocused(false);
    navigate(`/recipe/${id}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl">
          <ChefHat size={32} />
          <span>CookApp</span>
        </Link>
        
        <div ref={searchRef} className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            placeholder="Search recipes, categories..." 
            className="w-full bg-secondary/70 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-gray-700 placeholder:text-gray-500/80"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          
          {/* Live Search Dropdown */}
          {isSearchFocused && searchTerm.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden z-50">
              {searchResults.length > 0 ? (
                <div className="py-2">
                  {searchResults.map(recipe => (
                    <div 
                      key={recipe.id}
                      onClick={() => handleResultClick(recipe.id)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 cursor-pointer transition-colors"
                    >
                      <img src={recipe.image} alt={recipe.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 overflow-hidden">
                        <h4 className="font-bold text-gray-800 truncate text-sm">{recipe.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span className="text-primary font-medium">{recipe.category || 'General'}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock size={12}/>{recipe.cookTime} min</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-8 text-center text-gray-500">
                  <Search size={32} className="mx-auto mb-3 text-gray-300" />
                  <p>No recipes found for "<span className="font-bold">{searchTerm}</span>"</p>
                </div>
              )}
            </div>
          )}
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/your-kitchen" className="flex items-center gap-1.5 text-gray-500 hover:text-primary transition-colors p-2" title="Your Kitchen">
              <ChefHat size={20} />
              <span className="hidden sm:inline font-medium">Your Kitchen</span>
            </Link>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-2 cursor-pointer font-medium text-gray-700 hover:text-primary transition-colors">
              <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full bg-secondary" />
              <span className="hidden sm:inline">{user.username}</span>
            </div>
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 transition-colors p-2" title="Logout">
              <LogOut size={20} />
            </button>
          </div>
        ) : (
          <Link to="/login" className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:scale-105 transition-all shadow-sm">
            <User size={18} />
            <span className="hidden sm:inline">Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
