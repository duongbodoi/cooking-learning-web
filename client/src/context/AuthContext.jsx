import React, { createContext, useState, useEffect } from 'react';
import { mockUsers } from '../data/mockUsers';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('mockUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    const foundUser = mockUsers.find(u => 
      (u.email === email || u.username === email) && u.password === password
    );

    if (foundUser) {
      const storedData = JSON.parse(localStorage.getItem(`userData_${foundUser.id}`));
      const userToSave = {
        ...foundUser,
        savedRecipes: storedData?.savedRecipes || [],
        cookedRecipes: storedData?.cookedRecipes || []
      };
      delete userToSave.password;
      setUser(userToSave);
      localStorage.setItem('mockUser', JSON.stringify(userToSave));
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    const mockUser = {
      id: Date.now(),
      email,
      username: email.split('@')[0],
      avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=' + email,
      savedRecipes: [],
      cookedRecipes: []
    };
    setUser(mockUser);
    localStorage.setItem('mockUser', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
  };

  const toggleSaveRecipe = (recipeId) => {
    if (!user) return;
    
    let currentSaved = (user.savedRecipes || []).map(id => id.toString());
    const strId = recipeId.toString();
    
    let updatedSavedRecipes;
    if (currentSaved.includes(strId)) {
      updatedSavedRecipes = currentSaved.filter(id => id !== strId);
    } else {
      updatedSavedRecipes = [...currentSaved, strId];
    }

    const updatedUser = { ...user, savedRecipes: updatedSavedRecipes };
    setUser(updatedUser);
    localStorage.setItem('mockUser', JSON.stringify(updatedUser));
    
    const storedData = JSON.parse(localStorage.getItem(`userData_${user.id}`)) || {};
    storedData.savedRecipes = updatedSavedRecipes;
    localStorage.setItem(`userData_${user.id}`, JSON.stringify(storedData));
  };

  const addCookedRecipe = (recipeId) => {
    if (!user) return;
    
    let currentCooked = (user.cookedRecipes || []).map(id => id.toString());
    const strId = recipeId.toString();
    
    if (!currentCooked.includes(strId)) {
      const updatedCookedRecipes = [...currentCooked, strId];
      const updatedUser = { ...user, cookedRecipes: updatedCookedRecipes };
      setUser(updatedUser);
      localStorage.setItem('mockUser', JSON.stringify(updatedUser));
      
      const storedData = JSON.parse(localStorage.getItem(`userData_${user.id}`)) || {};
      storedData.cookedRecipes = updatedCookedRecipes;
      localStorage.setItem(`userData_${user.id}`, JSON.stringify(storedData));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, toggleSaveRecipe, addCookedRecipe }}>
      {children}
    </AuthContext.Provider>
  );
};
