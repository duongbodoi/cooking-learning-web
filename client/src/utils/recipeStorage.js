import { mockRecipes } from '../data/mockRecipes';

const initStorage = () => {
  if (!localStorage.getItem('customRecipes')) {
    localStorage.setItem('customRecipes', JSON.stringify([]));
  }
};

export const getAllRecipes = () => {
  initStorage();
  const custom = JSON.parse(localStorage.getItem('customRecipes') || '[]');
  return [...custom, ...mockRecipes];
};

export const getRecipeById = (id) => {
  const all = getAllRecipes();
  return all.find(r => r.id.toString() === id.toString());
};

export const saveRecipe = (recipeData, user) => {
  initStorage();
  const custom = JSON.parse(localStorage.getItem('customRecipes') || '[]');
  
  const newRecipe = {
    ...recipeData,
    id: Date.now().toString(),
    authorId: user?.id || null,
    authorName: user?.username || 'Anonymous',
    authorAvatar: user?.avatar || '',
    createdAt: new Date().toISOString(),
    views: 0,
    favorites: 0,
    rating: 5.0, // Start with a decent rating
    score: 15000 // High baseline score so it shows in trending
  };

  const updatedCustom = [newRecipe, ...custom];
  
  try {
    localStorage.setItem('customRecipes', JSON.stringify(updatedCustom));
    return newRecipe;
  } catch (error) {
    console.error(error);
    if (error.name === 'QuotaExceededError') {
      alert("Storage limit exceeded! Images are too large. Please clear browser storage or upload smaller images.");
    } else {
      alert("Failed to save recipe due to an unknown error.");
    }
    return null;
  }
};

const defaultComments = {
  '1': [
    { id: 'c1', authorName: 'FoodieG', authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100', text: 'This butter chicken is amazing! Added a bit more cream perfectly balanced the spices.', date: '2023-10-01T10:00:00Z' },
    { id: 'c2', authorName: 'ChefTom', authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', text: 'Authentic taste. Highly recommend serving with freshly baked naan.', date: '2023-10-05T14:30:00Z' }
  ],
  '2': [
    { id: 'c3', authorName: 'PhoLover', authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', text: 'The broth is rich and flavourful. Took 3 hours but definitely worth it!', date: '2023-12-10T18:15:00Z' },
    { id: 'c3_1', authorName: 'VietKitchen', authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100', text: 'Tastes just like my grandma used to make! Excellent recipe.', date: '2024-01-05T08:20:00Z' }
  ],
  '3': [
    { id: 'c5', authorName: 'KFoodie', authorAvatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100', text: 'Bibimbap is my favorite! I added extra gochujang for more heat.', date: '2024-02-14T19:00:00Z' }
  ],
  '4': [
    { id: 'c6', authorName: 'GreekLife', authorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100', text: 'The béchamel sauce turned out perfectly golden and creamy.', date: '2023-11-20T12:45:00Z' }
  ],
  '5': [
    { id: 'c4', authorName: 'SpicyBite', authorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100', text: 'Very unique flavors, my family loved it.', date: '2024-01-20T09:45:00Z' }
  ],
  '6': [
    { id: 'c7', authorName: 'WokStar', authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', text: 'Spicy and satisfying. The peanuts added a great crunch.', date: '2023-09-12T19:30:00Z' },
    { id: 'c8', authorName: 'EasyDinners', authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', text: 'So much better than takeout!', date: '2023-10-18T18:15:00Z' }
  ],
  '7': [
    { id: 'c9', authorName: 'FrenchCook', authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', text: 'A classic. Don\'t skip marinating the chicken overnight!', date: '2024-03-02T16:20:00Z' }
  ],
  '12': [
    { id: 'c10', authorName: 'HealthyHabits', authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100', text: 'Perfect for meal prep. Keeps fresh in the fridge for days.', date: '2024-02-28T10:00:00Z' }
  ],
  '15': [
    { id: 'c11', authorName: 'TacoTuesday', authorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100', text: 'The flank steak was tender and the cilantro garnish is a must.', date: '2024-04-10T20:30:00Z' }
  ]
};

export const getRecipeComments = (recipeId) => {
  const storedComments = JSON.parse(localStorage.getItem('recipeComments') || '{}');
  const recipeComments = storedComments[recipeId] || [];
  const defaults = defaultComments[recipeId] || [];
  
  const allComments = [...recipeComments, ...defaults];
  return allComments.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const addCommentToRecipe = (recipeId, user, text) => {
  const storedComments = JSON.parse(localStorage.getItem('recipeComments') || '{}');
  const currentComments = storedComments[recipeId] || [];
  
  const newComment = {
    id: Date.now().toString(),
    authorId: user.id || null,
    authorName: user.username || 'Anonymous',
    authorAvatar: user.avatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100',
    text: text,
    date: new Date().toISOString()
  };

  storedComments[recipeId] = [newComment, ...currentComments];
  localStorage.setItem('recipeComments', JSON.stringify(storedComments));
  return newComment;
};
