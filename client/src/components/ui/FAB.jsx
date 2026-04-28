import React, { useState, useEffect } from 'react';
import { Plus, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAB = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 3 seconds of loading the page
    const initialTimer = setTimeout(() => {
      setShowTooltip(true);
      // Hide after 6 seconds
      setTimeout(() => setShowTooltip(false), 6000);
    }, 3000);

    // Then show every 40 seconds
    const intervalTimer = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 6000);
    }, 40000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
      {/* The Tooltip/Message with transition */}
      <div 
        className={`bg-white px-4 py-3 rounded-2xl shadow-xl shadow-primary/20 border border-primary/20 flex items-center gap-3 transition-all duration-700 origin-right ${
          showTooltip ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-8 pointer-events-none'
        }`}
      >
        <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
          <ChefHat size={18} />
        </div>
        <div className="flex flex-col relative z-10 bg-white">
          <span className="font-bold text-gray-800 text-sm">Chef says:</span>
          <span className="text-gray-600 text-sm whitespace-nowrap">Click here to add recipes!</span>
        </div>
        {/* Right Arrow / Pointer */}
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white border-r border-t border-primary/20 rotate-45 z-0"></div>
      </div>

      <Link 
        to="/create-recipe"
        className="bg-primary text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all hover:shadow-primary/50 group relative flex-shrink-0"
        title="Add new recipe"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <Plus size={32} className="group-hover:rotate-90 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default FAB;
