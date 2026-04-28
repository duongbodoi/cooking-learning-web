import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getAllRecipes } from '../../utils/recipeStorage';
import { Clock, Star, Flame, Heart, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Trending = () => {
  const [recipes, setRecipes] = useState(getAllRecipes().sort((a,b) => b.score - a.score).slice(0, 7));
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

  return (
    <section className="container mx-auto px-4 py-8 overflow-hidden">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="text-primary" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Trending Now</h2>
      </div>
      
      <div className="-mx-4 px-4 overflow-visible">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="pb-8 !overflow-visible"
        >
          {recipes.map(recipe => (
            <SwiperSlide key={recipe.id} className="!w-[260px] md:!w-[300px] !h-auto">
              <div 
                onClick={() => navigate(`/recipe/${recipe.id}`)}
                className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col"
              >
                <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
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
                    <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 truncate group-hover:text-primary transition-colors">{recipe.title}</h3>
                  </div>
                  
                  <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
