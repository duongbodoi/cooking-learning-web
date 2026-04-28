import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Trending from '../components/home/Trending';
import AllRecipes from '../components/home/AllRecipes';
import FAB from '../components/ui/FAB';

const Home = () => {
  return (
    <div className="min-h-screen bg-secondary/5 font-sans pb-12">
      <Header />
      <main>
        <Hero />
        <Trending />
        <AllRecipes />
      </main>
      <FAB />
    </div>
  );
};

export default Home;
