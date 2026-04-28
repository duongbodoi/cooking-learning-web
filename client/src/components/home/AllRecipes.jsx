import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getAllRecipes } from '../../utils/recipeStorage';
import { Clock, Star, Heart, Utensils, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState(getAllRecipes());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  const { user, toggleSaveRecipe } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = (id, e) => {
    e.stopPropagation();
    if (!user) {
      alert('Please login to save recipes');
      navigate('/login');
      return;
    }
    toggleSaveRecipe(id);
  };

  const handleLike = (id, e) => {
    e.stopPropagation();
    setRecipes(prev => prev.map(recipe => {
      if (recipe.id === id) {
        const isLiked = recipe.isLiked;
        return {
          ...recipe,
          isLiked: !isLiked,
          favorites: isLiked ? recipe.favorites - 1 : recipe.favorites + 1
        };
      }
      return recipe;
    }));
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="all-recipes" className="container mx-auto px-4 py-8 mt-4">
      <div className="flex items-center gap-2 mb-6">
        <Utensils className="text-primary" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">All Recipes</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentRecipes.map(recipe => (
          <div 
            key={recipe.id}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full"
          >
            <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-sm">
                <Star className="text-yellow-400 fill-yellow-400" size={14} />
                {recipe.rating}
              </div>
              <div className="absolute top-3 left-3 flex gap-2">
                <button 
                  onClick={(e) => handleLike(recipe.id, e)}
                  className={`bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:scale-110 transition-transform ${recipe.isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
                >
                  <Heart size={18} fill={recipe.isLiked ? "currentColor" : "none"} className="transition-colors" />
                </button>
                <button 
                  onClick={(e) => handleSave(recipe.id, e)}
                  className={`bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:scale-110 transition-transform ${user?.savedRecipes?.map(id=>id.toString()).includes(recipe.id.toString()) ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                  title={user?.savedRecipes?.map(id=>id.toString()).includes(recipe.id.toString()) ? "Saved" : "Save"}
                >
                  <Bookmark size={18} fill={user?.savedRecipes?.map(id=>id.toString()).includes(recipe.id.toString()) ? "currentColor" : "none"} className="transition-colors" />
                </button>
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-primary font-bold mb-1 uppercase tracking-wider">{recipe.category || 'General'}</p>
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">{recipe.title}</h3>
              </div>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock size={16} />
                  <span>{recipe.cookTime} min</span>
                </div>
                <div className="font-medium text-gray-400 flex items-center gap-1">
                  <Heart size={14} className={recipe.isLiked ? 'text-red-500 fill-red-500' : ''} />
                  {recipe.favorites >= 1000 ? (recipe.favorites/1000).toFixed(1) + 'k' : recipe.favorites}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2 md:gap-3">
          <button 
            onClick={() => {
              paginate(Math.max(1, currentPage - 1));
              document.getElementById('all-recipes').scrollIntoView({ behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-gray-200 text-gray-600 bg-white hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-200 transition-all font-medium text-sm md:text-base shadow-sm"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Prev</span>
          </button>
          
          <div className="flex gap-1.5 md:gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  paginate(i + 1);
                  document.getElementById('all-recipes').scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-9 h-9 md:w-11 md:h-11 rounded-xl border flex items-center justify-center font-bold transition-all shadow-sm ${
                  currentPage === i + 1 
                    ? 'bg-primary border-primary text-white shadow-primary/30 scale-105' 
                    : 'bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary hover:bg-orange-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => {
              paginate(Math.min(totalPages, currentPage + 1));
              document.getElementById('all-recipes').scrollIntoView({ behavior: 'smooth' });
            }}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-gray-200 text-gray-600 bg-white hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-200 transition-all font-medium text-sm md:text-base shadow-sm"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
};

export default AllRecipes;
