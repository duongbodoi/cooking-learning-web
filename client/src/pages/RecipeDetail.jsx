import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import { getRecipeById, getRecipeComments, addCommentToRecipe } from '../utils/recipeStorage';
import { AuthContext } from '../context/AuthContext';
import { Clock, ChefHat, Star, CheckCircle2, Circle, Edit3, Heart, ChevronDown, ChevronUp, Bookmark } from 'lucide-react';

const RecipeDetail = () => {
  const { id } = useParams();
  const { user, toggleSaveRecipe } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [recipe, setRecipe] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSave = () => {
    if (!user) {
      alert('Please login to save recipes');
      navigate('/login');
      return;
    }
    toggleSaveRecipe(recipe.id);
  };

  useEffect(() => {
    const data = getRecipeById(id);
    setRecipe(data);
    if (data) {
      setComments(getRecipeComments(id));
    }
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;
    
    const added = addCommentToRecipe(id, user, newComment);
    setComments(prev => [added, ...prev]);
    setNewComment('');
  };

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Recipe not found</h2>
          <Link to="/" className="text-primary mt-4 inline-block hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const toggleIngredient = (idx) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const isAuthor = user && user.id === recipe.authorId;

  const renderSteps = (stepsToRender) => {
    return stepsToRender.map((step, idx) => {
      const description = typeof step === 'string' ? step : step.description;
      const image = typeof step === 'object' ? step.imagePreview : null;
      
      return (
        <div key={idx} className="flex gap-3 group bg-gray-50/50 p-4 rounded-xl border border-gray-100 relative">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-primary/20">
            {idx + 1}
          </div>
          
          <div className="flex-1 flex flex-col gap-3 pt-1">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{description}</p>
            
            {image && (
              <div className="relative w-40 h-32 rounded-xl overflow-hidden border border-gray-200 mt-2">
                <img src={image} alt={`Step ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  const displayedIngredients = showAllIngredients ? recipe.ingredients : recipe.ingredients?.slice(0, 5);
  const displayedSteps = showAllSteps ? recipe.steps : recipe.steps?.slice(0, 3);

  return (
    <div className="min-h-screen bg-secondary/5 font-sans pb-20">
      <Header />
      
      <div className="container mx-auto px-4 mt-8 max-w-5xl">
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Recipe Details</h1>
          {isAuthor && (
            <Link to={`/edit-recipe/${recipe.id}`} className="flex bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow hover:shadow-md hover:-translate-y-0.5 gap-2 items-center">
              <Edit3 size={18} />
              <span className="hidden sm:inline">Edit Recipe</span>
            </Link>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4 md:p-8">
            
            {/* Left Column */}
            <div className="space-y-6">
              {/* Image Box */}
              <div className="relative h-60 md:h-72 rounded-2xl bg-gray-100 overflow-hidden shadow-inner border border-gray-200">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-sm text-gray-700">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  {recipe.rating} ({recipe.views})
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{recipe.title}</h2>
                {recipe.description ? (
                  <p className="text-gray-600 text-base md:text-lg whitespace-pre-wrap leading-relaxed">{recipe.description}</p>
                ) : (
                  <p className="text-gray-400 italic">No description provided.</p>
                )}
              </div>

              {/* Time & Difficulty block mirroring the inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center flex flex-col justify-center">
                  <p className="text-sm text-gray-500 font-medium mb-1">Prep Time</p>
                  <p className="text-lg font-bold text-gray-800 flex items-center justify-center gap-1.5">
                    <Clock size={18} className="text-primary" /> {recipe.prepTime || recipe.cookTime || 0} mins
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center flex flex-col justify-center">
                  <p className="text-sm text-gray-500 font-medium mb-1">Difficulty</p>
                  <p className="text-lg font-bold text-gray-800 capitalize">{recipe.difficulty || 'Easy'}</p>
                </div>
              </div>

              {/* Author & Stats */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                {recipe.authorName && (
                  <div className="flex items-center gap-3">
                    {recipe.authorAvatar ? (
                      <img src={recipe.authorAvatar} alt={recipe.authorName} className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                        <ChefHat size={24} />
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Recipe by</p>
                      <p className="font-bold text-gray-800">{recipe.authorName}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleSave}
                    className="flex items-center gap-1.5 font-bold text-gray-600 bg-secondary/30 px-4 py-2 rounded-xl hover:bg-secondary/50 transition-colors"
                  >
                    <Bookmark size={18} className={user?.savedRecipes?.map(id=>id.toString()).includes(recipe.id.toString()) ? "text-yellow-500 fill-yellow-500" : "text-gray-400"} />
                    <span className="hidden sm:inline">{user?.savedRecipes?.map(id=>id.toString()).includes(recipe.id.toString()) ? "Saved" : "Save"}</span>
                  </button>
                  <div className="flex items-center gap-1.5 font-bold text-gray-600 bg-secondary/30 px-4 py-2 rounded-xl">
                    <Heart size={18} className="text-red-500 fill-red-500" />
                    {recipe.favorites}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Comments ({comments.length})</h3>
                
                {/* Add Comment Input */}
                {user ? (
                  <form onSubmit={handleCommentSubmit} className="mb-6 flex gap-3">
                    <img src={user.avatar} alt="You" className="w-10 h-10 rounded-full bg-secondary object-cover" />
                    <div className="flex-1 flex gap-2">
                      <input 
                        type="text" 
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      />
                      <button 
                        type="submit"
                        disabled={!newComment.trim()}
                        className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-bold transition-all disabled:opacity-50 disabled:hover:bg-primary"
                      >
                        Post
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-orange-50 text-primary p-4 rounded-xl mb-6 text-sm flex justify-between items-center">
                    <p>Please login to leave a comment.</p>
                    <Link to="/login" className="font-bold underline">Login</Link>
                  </div>
                )}

                {/* Comment List */}
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
                  {comments.length > 0 ? comments.map(comment => (
                    <div key={comment.id} className="flex gap-3">
                      <img src={comment.authorAvatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100'} alt={comment.authorName} className="w-10 h-10 rounded-full bg-gray-100 object-cover flex-shrink-0" />
                      <div className="bg-gray-50 flex-1 p-3.5 rounded-xl rounded-tl-none border border-gray-100">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-gray-800 text-sm">{comment.authorName}</span>
                          <span className="text-xs text-gray-400">{new Date(comment.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{comment.text}</p>
                      </div>
                    </div>
                  )) : (
                    <p className="text-gray-500 italic text-sm text-center py-4">No comments yet. Be the first to share your thoughts!</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Ingredients and Instructions */}
            <div className="space-y-8">
              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                  Ingredients
                </h3>
                <div className="space-y-3">
                  {displayedIngredients?.map((ing, idx) => {
                    const isChecked = checkedIngredients[idx];
                    return (
                      <div 
                        key={idx} 
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${isChecked ? 'bg-gray-50 border-gray-200 opacity-60' : 'bg-white border-gray-200 hover:border-primary/30 shadow-sm'}`}
                        onClick={() => toggleIngredient(idx)}
                      >
                        <button className="text-primary flex-shrink-0">
                          {isChecked ? <CheckCircle2 size={24} className="fill-primary text-white" /> : <Circle size={24} className="text-gray-300" />}
                        </button>
                        <div className={`flex-1 flex justify-between items-center ${isChecked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                          <span className="font-medium text-base md:text-lg">{ing.name}</span>
                          <span className="font-bold text-primary bg-primary/5 px-3 py-1 rounded-lg text-sm md:text-base">{ing.amount}</span>
                        </div>
                      </div>
                    )
                  })}
                  
                  {recipe.ingredients?.length > 5 && (
                    <button 
                      onClick={() => setShowAllIngredients(!showAllIngredients)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 mt-2 text-sm font-bold text-primary hover:bg-primary/10 rounded-xl transition-colors"
                    >
                      {showAllIngredients ? (
                        <><ChevronUp size={16} /> Hide</>
                      ) : (
                        <><ChevronDown size={16} /> See {recipe.ingredients.length - 5} more ingredients...</>
                      )}
                    </button>
                  )}
                  
                  {(!recipe.ingredients || recipe.ingredients.length === 0) && (
                    <p className="text-gray-500 italic">No ingredients listed.</p>
                  )}
                </div>
              </div>

              {/* Steps */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                  Instructions
                </h3>
                <div className="space-y-4 pr-2">
                  {displayedSteps?.length > 0 ? renderSteps(displayedSteps) : (
                    <p className="text-gray-500 italic">No instructions provided.</p>
                  )}
                  
                  {recipe.steps?.length > 3 && (
                    <button 
                      onClick={() => setShowAllSteps(!showAllSteps)}
                      className="w-full flex items-center justify-center gap-1.5 py-3 mt-4 border-2 border-dashed border-primary/30 text-primary font-bold hover:bg-primary/5 rounded-xl transition-colors"
                    >
                      {showAllSteps ? (
                        <><ChevronUp size={18} /> Hide steps</>
                      ) : (
                        <><ChevronDown size={18} /> See {recipe.steps.length - 3} more steps...</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
