import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import { getRecipeById } from '../utils/recipeStorage';
import { AuthContext } from '../context/AuthContext';
import { 
  CheckCircle2, Circle, ArrowLeft, ArrowRight, Play, 
  ChefHat, Award, Star, Utensils, Home
} from 'lucide-react';

const CookingMode = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [recipe, setRecipe] = useState(null);
  const [phase, setPhase] = useState(1); // 1: Preparation, 2: Cooking, 3: Completed
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    const data = getRecipeById(id);
    if (!data) {
      navigate('/');
    } else {
      setRecipe(data);
    }
  }, [id, navigate]);

  if (!recipe) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );

  const toggleIngredient = (idx) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleStartCooking = () => {
    setPhase(2);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const nextStep = () => {
    if (currentStep < recipe.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setPhase(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setPhase(1); // Back to prep
    }
  };

  return (
    <div className="min-h-screen bg-secondary/5 font-sans flex flex-col">
      <Header />

      {/* PHASE 1: PREPARATION */}
      {phase === 1 && (
        <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => navigate(`/recipe/${recipe.id}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-semibold bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100"
            >
              <ArrowLeft size={20} /> Back to Recipe
            </button>
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <span className="text-primary font-bold">Phase 1</span> / 3
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-gray-100 flex flex-col md:flex-row gap-6 items-center bg-gray-50/50">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-primary font-extrabold uppercase tracking-widest text-sm mb-1 line-clamp-1">Preparation</p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
                <p className="text-gray-500 font-medium">Check your ingredients before we start cooking.</p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Utensils className="text-primary" size={24} /> 
                Ingredients List
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recipe.ingredients?.map((ing, idx) => {
                  const isChecked = checkedIngredients[idx];
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer select-none
                        ${isChecked 
                          ? 'border-primary/30 bg-primary/5 shadow-inner' 
                          : 'border-transparent bg-gray-50 hover:bg-gray-100 shadow-sm hover:shadow'}`}
                    >
                      <button className="flex-shrink-0 transition-transform active:scale-90">
                        {isChecked 
                          ? <CheckCircle2 size={28} className="fill-primary text-white" /> 
                          : <Circle size={28} className="text-gray-300" />}
                      </button>
                      <div className="flex-1">
                        <p className={`font-semibold text-lg transition-colors ${isChecked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                          {ing.name}
                        </p>
                        <p className={`text-sm font-medium ${isChecked ? 'text-gray-400 line-through' : 'text-primary'}`}>
                          {ing.amount}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleStartCooking}
                  className="group relative flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play size={24} className="fill-white" /> Let's Cook Now
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PHASE 2: COOKING MODE */}
      {phase === 2 && (
        <div className="flex-1 relative flex flex-col justify-between overflow-hidden" style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url(https://images.unsplash.com/photo-1556910103-1c02745a872f?w=1600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          
          {/* Header */}
          <div className="container mx-auto px-4 py-4 max-w-6xl flex items-center justify-between text-white relative z-10 animate-fade-in flex-shrink-0">
            <button 
              onClick={prevStep}
              className="flex items-center gap-2 hover:text-primary transition-colors font-semibold group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10 text-sm md:text-base"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
              <span className="hidden sm:inline">{currentStep === 0 ? 'Back to Prep' : 'Previous'}</span>
            </button>
            <div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full font-bold text-base md:text-lg tracking-widest border border-white/20 shadow-lg">
              STEP <span className="text-primary">{currentStep + 1}</span> / {recipe.steps.length}
            </div>
            <div className="w-[120px] hidden sm:block"></div> {/* Spacer for centering */}
          </div>

          {/* Image Centered with constrained height */}
          <div className="flex-1 min-h-0 flex items-center justify-center container mx-auto px-4 max-w-5xl relative z-10 py-2 animate-fade-in">
            <div className="w-full max-w-3xl h-full max-h-[35vh] sm:max-h-[45vh] rounded-2xl overflow-hidden shadow-2xl border border-white/15 relative bg-black/50 backdrop-blur-sm group flex items-center justify-center">
               <img 
                 src={(typeof recipe.steps[currentStep] === 'object' && recipe.steps[currentStep].imagePreview) ? recipe.steps[currentStep].imagePreview : recipe.image} 
                 alt={`Step ${currentStep + 1}`} 
                 className="w-full h-full object-contain sm:object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Description & Next button bottom aligned (compact) */}
          <div className="w-full relative z-10 bg-gradient-to-t from-black via-black/90 to-transparent pt-12 pb-6 px-4 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] flex-shrink-0">
            <div className="container mx-auto max-w-4xl flex flex-col items-center">
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 text-center drop-shadow-lg tracking-wide">
                {typeof recipe.steps[currentStep] === 'object' && recipe.steps[currentStep].title 
                  ? recipe.steps[currentStep].title 
                  : `Step ${currentStep + 1}`}
              </h3>
              
              <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mb-6 max-w-3xl text-center font-medium drop-shadow-md line-clamp-3">
                {typeof recipe.steps[currentStep] === 'string' 
                  ? recipe.steps[currentStep] 
                  : recipe.steps[currentStep].description}
              </p>

              {/* Progress bar */}
              <div className="w-full max-w-lg flex gap-1 mb-6">
                {recipe.steps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full flex-1 transition-all duration-700 ease-in-out ${idx <= currentStep ? 'bg-primary shadow-[0_0_8px_rgba(2ea,88,12,0.6)]' : 'bg-white/20'}`}
                  />
                ))}
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={nextStep}
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-orange-500 text-white px-8 py-3 rounded-full font-bold text-base md:text-xl shadow-[0_8px_20px_rgba(2ea,88,12,0.4)] hover:shadow-[0_12px_30px_rgba(2ea,88,12,0.5)] hover:-translate-y-1 transition-all active:scale-95 group"
                >
                  {currentStep < recipe.steps.length - 1 ? (
                    <>Next Step <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" /></>
                  ) : (
                    <>Finish Cooking <CheckCircle2 size={22} className="group-hover:scale-110 transition-transform" /></>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PHASE 3: COMPLETED */}
      {phase === 3 && (
        <div className="flex-1 container mx-auto px-4 py-12 max-w-3xl flex flex-col animate-fade-in items-center justify-center">
          
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 w-full text-center relative overflow-hidden">
            {/* Confetti decoration top */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none"></div>
            
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Award size={50} className="text-green-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">
              Congratulations!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              You've successfully cooked <span className="font-bold text-primary">{recipe.title}</span>. We hope it smells as amazing as it looks!
            </p>

            {/* Self Evaluation Box */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mt-10">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How did you do?</h3>
              <p className="text-gray-500 text-sm mb-6">Rate your cooking success for this dish</p>
              
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setUserRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                  >
                    <Star
                      size={48}
                      className={`${
                        star <= (hoverRating || userRating)
                          ? 'text-yellow-400 fill-yellow-400 drop-shadow-md'
                          : 'text-gray-300'
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
              <div className="mt-4 min-h-[1.5rem] font-medium text-primary">
                {userRating === 1 && "Need more practice! 😅"}
                {userRating === 2 && "Not bad, I can do better. 🙂"}
                {userRating === 3 && "Turned out pretty good! 😋"}
                {userRating === 4 && "Delicious! Almost perfect. 🤤"}
                {userRating === 5 && "Master Chef level! 👨‍🍳🔥"}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link 
                to={`/recipe/${recipe.id}`}
                className="px-8 py-3.5 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Back to Recipe
              </Link>
              <Link 
                to="/your-kitchen"
                className="px-8 py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-orange-600 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Home size={20} /> View Your Kitchen
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default CookingMode;
