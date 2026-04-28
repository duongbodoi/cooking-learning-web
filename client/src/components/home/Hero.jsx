import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllRecipes } from '../../utils/recipeStorage';

const Hero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    const element = document.getElementById('all-recipes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSurpriseMe = () => {
    const recipes = getAllRecipes();
    if (recipes && recipes.length > 0) {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      navigate(`/recipe/${randomRecipe.id}`);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="relative w-full h-[600px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm group">
        <img 
          src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2000&auto=format&fit=crop" 
          alt="Delicious Food" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 flex items-center">
          <div className="p-8 md:p-16 w-full flex flex-col md:flex-row justify-between items-center gap-8 h-full md:h-auto overflow-y-auto md:overflow-visible">
            {/* Left side */}
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                What should we <br /> <span className="text-primary">cook today?</span>
              </h1>
              <p className="text-gray-200 mb-8 text-sm md:text-lg max-w-md">
                Discover thousands of easy-to-follow recipes for any taste, diet, and preference.
              </p>
              <button 
                onClick={handleExplore}
                className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-orange-600 transition-all flex items-center gap-2 hover:gap-4 shadow-lg hover:shadow-primary/30"
              >
                Explore Recipes
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end mt-8 md:mt-0">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Don't know what <br /> <span className="text-yellow-400">to eat today?</span>
              </h2>
              <p className="text-gray-200 mb-8 text-sm md:text-lg max-w-md md:ml-auto">
                Let us pick a random recipe for you! Discover new flavors with a single click.
              </p>
              <button 
                onClick={handleSurpriseMe}
                className="group bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:text-primary transition-all flex items-center gap-2 hover:gap-4 shadow-lg"
              >
                <Sparkles size={20} className="text-yellow-400 group-hover:text-primary group-hover:animate-pulse" />
                Surprise Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
