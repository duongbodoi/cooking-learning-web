import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { saveRecipe } from '../utils/recipeStorage';
import Header from '../components/layout/Header';
import { Upload, Plus, Trash2, Image as ImageIcon } from 'lucide-react';

const CreateRecipe = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
  const [steps, setSteps] = useState([{ description: '', imagePreview: null }]);
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePublish = () => {
    if (!title.trim()) {
      alert("Please provide a recipe title");
      return;
    }
    
    // Clean empty ingredients and steps
    const cleanedIngredients = ingredients.filter(i => i.name.trim());
    const cleanedSteps = steps.filter(s => s.description.trim() || s.imagePreview);

    if (cleanedSteps.length === 0) {
      alert("Please add at least one step");
      return;
    }

    const saved = saveRecipe({
      title,
      description,
      image: imagePreview || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1000&auto=format&fit=crop',
      prepTime: Number(prepTime) || 0,
      cookTime: Number(prepTime) || 0,
      difficulty,
      category: 'New Recipe',
      ingredients: cleanedIngredients,
      steps: cleanedSteps
    }, user);

    if (saved) {
      navigate('/recipe/' + saved.id);
    }
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0] || e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddIngredient = () => setIngredients([...ingredients, { name: '', amount: '' }]);
  const handleRemoveIngredient = (index) => setIngredients(ingredients.filter((_, i) => i !== index));
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const handleAddStep = () => setSteps([...steps, { description: '', imagePreview: null }]);
  const handleRemoveStep = (index) => setSteps(steps.filter((_, i) => i !== index));
  
  const handleStepDescriptionChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index].description = value;
    setSteps(newSteps);
  };

  const handleStepImageDrop = (index, e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0] || e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newSteps = [...steps];
        newSteps[index].imagePreview = reader.result;
        setSteps(newSteps);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-secondary/5 pb-20 font-sans">
      <Header />
      <div className="container mx-auto px-4 mt-8 max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Recipe</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div 
                className="relative h-72 border-2 border-dashed border-primary/40 rounded-2xl bg-primary/5 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors overflow-hidden group"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleImageDrop}
                onClick={() => document.getElementById('imageUpload').click()}
              >
                <input id="imageUpload" type="file" className="hidden" accept="image/*" onChange={handleImageDrop} />
                {imagePreview ? (
                  <>
                    <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-medium flex items-center gap-2"><ImageIcon /> Change Image</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-gray-500">
                    <Upload className="mx-auto mb-3 text-primary" size={36} />
                    <p className="font-semibold text-gray-700 text-lg">Drag & drop your photo</p>
                    <p className="text-sm mt-1">or click to browse from device</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recipe Title</label>
                <input 
                  type="text" 
                  value={title} onChange={(e)=>setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 outline-none text-lg bg-gray-50 focus:bg-white transition-colors"
                  placeholder="e.g. Classic Beef Pho"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  rows="3"
                  value={description} onChange={(e)=>setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 outline-none resize-none bg-gray-50 focus:bg-white transition-colors"
                  placeholder="Briefly describe what makes this recipe special..."
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prep Time (mins)</label>
                  <input 
                    type="number" 
                    value={prepTime} onChange={(e)=>setPrepTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 outline-none bg-gray-50 focus:bg-white transition-colors"
                    placeholder="e.g. 45"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select 
                    value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 outline-none bg-gray-50 focus:bg-white transition-colors"
                  >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-between">
                  Ingredients
                  <button onClick={handleAddIngredient} className="text-sm font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                    <Plus size={16} /> Add Row
                  </button>
                </h3>
                <div className="space-y-3">
                  {ingredients.map((ing, idx) => (
                    <div key={idx} className="flex gap-2 items-center group">
                      <input 
                        type="text" 
                        placeholder="Ingredient name" 
                        value={ing.name} onChange={(e) => handleIngredientChange(idx, 'name', e.target.value)}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 outline-none bg-gray-50 focus:bg-white"
                      />
                      <input 
                        type="text" 
                        placeholder="Amount" 
                        value={ing.amount} onChange={(e) => handleIngredientChange(idx, 'amount', e.target.value)}
                        className="w-24 md:w-32 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 outline-none bg-gray-50 focus:bg-white"
                      />
                      <button onClick={() => handleRemoveIngredient(idx)} className="text-gray-300 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-between">
                  Instructions
                  <button onClick={handleAddStep} className="text-sm font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                    <Plus size={16} /> Add Step
                  </button>
                </h3>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-3 group bg-gray-50/50 p-4 rounded-xl border border-gray-100 relative">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-primary/20">
                        {idx + 1}
                      </div>
                      
                      <div className="flex-1 flex flex-col gap-3">
                         <textarea 
                          rows="2"
                          placeholder="Describe this step..."
                          value={step.description} onChange={(e) => handleStepDescriptionChange(idx, e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 outline-none resize-none bg-white transition-colors"
                        ></textarea>
                        
                        <div className="flex items-start">
                          <div 
                            className="relative w-20 h-20 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all overflow-hidden bg-white group/image"
                            onClick={() => document.getElementById(`stepImage-${idx}`).click()}
                          >
                            <input id={`stepImage-${idx}`} type="file" className="hidden" accept="image/*" onChange={(e) => handleStepImageDrop(idx, e)} />
                            {step.imagePreview ? (
                              <>
                                <img src={step.imagePreview} alt={`Step ${idx + 1}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity">
                                  <Upload className="text-white mb-1" size={16} />
                                </div>
                              </>
                            ) : (
                              <>
                                <ImageIcon size={20} className="text-gray-400 mb-1" />
                                <span className="text-[10px] text-gray-400 font-medium text-center px-1">Add Image</span>
                              </>
                            )}
                          </div>
                        </div>

                      </div>

                      <button onClick={() => handleRemoveStep(idx)} className="absolute right-3 top-3 text-gray-300 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full shadow-sm hover:shadow">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50/80 p-6 flex justify-end gap-4 border-t border-gray-100">
            <button className="px-8 py-3 rounded-full font-bold border-2 border-primary text-primary hover:bg-primary/5 transition-colors">
              Save Draft
            </button>
            <button onClick={handlePublish} className="px-8 py-3 rounded-full font-bold bg-primary text-white hover:bg-orange-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Publish Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
