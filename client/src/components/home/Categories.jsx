import React from 'react';

const categories = [
  { name: 'Vietnamese', icon: '🍲' },
  { name: 'Korean', icon: '🥘' },
  { name: 'Healthy', icon: '🥗' },
  { name: 'Desserts', icon: '🧁' },
  { name: 'Snacks', icon: '🍿' },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Cuisines you might like</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer border border-gray-100"
          >
            <span className="text-4xl hover:animate-bounce">{cat.icon}</span>
            <span className="font-semibold text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
