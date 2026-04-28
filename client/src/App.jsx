import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetail from './pages/RecipeDetail';
import CookingMode from './pages/CookingMode';
import YourKitchen from './pages/YourKitchen';
import ProtectedRoute from './components/layout/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/create-recipe" 
          element={
            <ProtectedRoute>
              <CreateRecipe />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/your-kitchen" 
          element={
            <ProtectedRoute>
              <YourKitchen />
            </ProtectedRoute>
          } 
        />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route 
          path="/recipe/:id/cooking-mode" 
          element={
            <ProtectedRoute>
              <CookingMode />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
