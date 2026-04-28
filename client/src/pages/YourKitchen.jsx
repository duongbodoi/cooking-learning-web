import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/layout/Header';
import { getAllRecipes } from '../utils/recipeStorage';
import { Heart, Clock, Star, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const YourKitchen = () => {
  const { user, toggleSaveRecipe } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('saved'); // 'saved' or 'posted'
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-secondary/5 font-sans">
        <Header />
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-xl text-gray-500">Please log in to view your kitchen.</p>
        </div>
      </div>
    );
  }

  // Get all possible recipes
  const allRecipes = getAllRecipes();

  // Filter for 'Món đã lưu'
  const savedRecipesList = allRecipes.filter(r => user.savedRecipes?.map(id => id.toString())?.includes(r.id.toString()));

  // Filter for 'Món đã đăng'
  const postedRecipesList = allRecipes.filter(r => r.authorId === user.id);

  const displayRecipes = activeTab === 'saved' ? savedRecipesList : postedRecipesList;

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleSaveClick = (id, e) => {
    e.stopPropagation();
    toggleSaveRecipe(id);
  };

  return (
    <div className="min-h-screen bg-secondary/5 font-sans pb-12">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-28">
            <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">Your Kitchen</h2>
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('saved')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'saved' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Món đã lưu
              </button>
              <button
                onClick={() => setActiveTab('posted')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'posted' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Món đã đăng
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
            {activeTab === 'saved' ? 'Món đã lưu (Saved Recipes)' : 'Món đã đăng (Posted Recipes)'}
          </h2>

          {displayRecipes.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-gray-500 border border-gray-100 shadow-sm">
              <p className="text-lg">You don't have any recipes here yet.</p>
              {activeTab === 'posted' && (
                <button
                  onClick={() => navigate('/create-recipe')}
                  className="mt-4 bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition"
                >
                  Create New Recipe
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayRecipes.map(recipe => {
                const isSaved = user.savedRecipes?.map(id => id.toString())?.includes(recipe.id.toString());

                return (
                  <div
                    key={recipe.id}
                    onClick={() => handleRecipeClick(recipe.id)}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full"
                  >
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
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
                          onClick={(e) => handleSaveClick(recipe.id, e)}
                          className={`bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:scale-110 transition-transform ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                          title={isSaved ? "Saved" : "Save"}
                        >
                          <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} className="transition-colors" />
                        </button>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-primary font-bold mb-1 uppercase tracking-wider">{recipe.category || 'General'}</p>
                        <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">{recipe.title}</h3>
                      </div>
                      <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Clock size={16} />
                          <span>{recipe.cookTime} min</span>
                        </div>
                        <div className="font-medium text-gray-400 flex items-center gap-1">
                          <Heart size={14} className="text-red-500 fill-red-500" />
                          {recipe.favorites}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourKitchen;
