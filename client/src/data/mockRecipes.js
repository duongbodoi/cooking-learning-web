export const mockRecipes = [
  {
    id: 1,
    authorId: 2,
    title: "Indian Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop",
    rating: 4.9,
    cookTime: 40,
    category: "Indian",
    ingredients: [
      { name: "Chicken breast", amount: "1.5 lbs" },
      { name: "Yogurt", amount: "1 cup" },
      { name: "Butter", amount: "4 tbsp" },
      { name: "Heavy cream", amount: "1 cup" }
    ],
    steps: [
      { description: "Marinate chicken.", imagePreview: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
      { description: "Cook chicken.", imagePreview: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
      { description: "Make sauce.", imagePreview: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
      { description: "Combine and simmer.", imagePreview: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" }
    ],
    views: 7890,
    favorites: 567,
    score: 1727.15
  },
  {
    id: 2,
    authorId: 1,
    title: "Vietnamese Pho",
    image: "https://images.unsplash.com/photo-1766050586763-723571af4dde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    cookTime: 180,
    category: "Vietnamese",
    ingredients: [
      { name: "Beef bones", amount: "3 lbs" },
      { name: "Rice noodles", amount: "1 lb" },
      { name: "Fish sauce", amount: "1/4 cup" }
    ],
    steps: [
      { description: "Prepare broth.", imagePreview: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600" },
      { description: "Cook beef.", imagePreview: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600" },
      { description: "Cook noodles.", imagePreview: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600" },
      { description: "Assemble bowl.", imagePreview: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600" }
    ],
    views: 6780,
    favorites: 423,
    score: 1482.6
  },
  {
    id: 3,
    authorId: 2,
    title: "Korean Bibimbap",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&h=600&fit=crop",
    rating: 4.7,
    cookTime: 35,
    category: "Korean",
    ingredients: [
      { name: "Rice", amount: "3 cups" },
      { name: "Beef", amount: "8 oz" },
      { name: "Eggs", amount: "4" }
    ],
    steps: [
      { description: "Cook rice.", imagePreview: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600" },
      { description: "Prepare vegetables.", imagePreview: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600" },
      { description: "Cook beef.", imagePreview: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600" },
      { description: "Assemble dish.", imagePreview: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600" }
    ],
    views: 5340,
    favorites: 389,
    score: 1186.35
  },
  {
    id: 4,
    authorId: 2,
    title: "Crispy Roast Pork Belly with Mac Mat Leaves",
    image: "https://img-global.cpcdn.com/recipes/da9c1370fa2f93ac/300x426f0.5_0.568516_1.0q80/heo-quay-da-gion-la-m%E1%BA%AFc-m%E1%BA%ADt-recipe-main-photo.webp",
    rating: 4.8,
    cookTime: 180, // ~3 hours
    category: "Vietnamese",
    ingredients: [
      { name: "Boneless pork belly", amount: "800 g" },
      { name: "Onion", amount: "1/2" },
      { name: "Ginger", amount: "1 small piece" },
      { name: "Soy pepper sauce (for dipping)", amount: "1 bowl" },

      { name: "Mac Mat leaves", amount: "20 leaves" },
      { name: "Salt", amount: "1 tsp" },
      { name: "Sugar", amount: "1 tsp" },
      { name: "Five-spice powder", amount: "1 tsp" },
      { name: "Black pepper", amount: "1/4 tsp" },
      { name: "Garlic powder", amount: "1 tsp" },
      { name: "Onion powder", amount: "1 tsp" },

      { name: "Salt (skin mixture)", amount: "0.5 tsp" },
      { name: "Vinegar", amount: "1 tbsp" },
      { name: "Baking soda", amount: "0.5 tsp" }
    ],
    steps: [
      {
        description: "Choose a good cut of pork belly with even layers. Clean with vinegar or salted alcohol solution.",
        imagePreview: "https://img-global.cpcdn.com/steps/0ccdad38e6f60fda/160x128cq80/heo-quay-da-gion-la-m%E1%BA%AFc-m%E1%BA%ADt-recipe-step-1-photo.webp"
      },
      {
        description: "Boil water with onion, ginger, and a bit of vinegar. Blanch the pork skin for 5 minutes. Score the meat (not the skin), then marinate with spices. Rub crushed Mac Mat leaves into the cuts. Keep the skin dry.",
        imagePreview: "https://img-global.cpcdn.com/steps/f0005a87292dec6b/160x128cq80/heo-quay-da-gion-la-m%E1%BA%AFc-m%E1%BA%ADt-recipe-step-2-photo.webp"
      },
      {
        description: "Wrap the pork with foil and parchment, leaving the skin on top. Pierce the skin thoroughly with a skewer.",
        imagePreview: "https://img-global.cpcdn.com/steps/2b2f31b2ac855850/160x128cq80/heo-quay-da-gion-la-m%E1%BA%AFc-m%E1%BA%ADt-recipe-step-3-photo.webp"
      },
      {
        description: "Brush vinegar, salt, and baking soda mixture onto the skin. Let it dry in the fridge for 30–60 minutes or use a dryer.",
        imagePreview: "https://img-global.cpcdn.com/steps/74cedda6f0ede5dc/160x128cq80/heo-quay-da-gion-la-m%E1%BA%AFc-m%E1%BA%ADt-recipe-step-4-photo.webp"
      },
      {
        description: "Preheat oven to 160°C. Roast for 1 hour. Remove foil, brush a thin layer of oil on the skin, then roast at 200°C for 15–20 minutes until the skin is crispy and puffed.",
        imagePreview: "https://img-global.cpcdn.com/steps/4b64990269ba8b47/160x128cq80/heo-quay-da-gion-la-m%E1%BA%AFc-m%E1%BA%ADt-recipe-step-5-photo.webp"
      },
    ],
    views: 6120,
    favorites: 930,
    score: 1825.4
  },
  {
    id: 5,
    authorId: 2,
    title: "Moroccan Tagine",
    image: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?w=800&h=600&fit=crop",
    rating: 4.7,
    cookTime: 120,
    category: "Moroccan",
    ingredients: [
      { name: "Lamb", amount: "2 lbs" },
      { name: "Apricots", amount: "1 cup" },
      { name: "Chickpeas", amount: "1 can" }
    ],
    steps: [
      { description: "Brown lamb.", imagePreview: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?w=600" },
      { description: "Add spices and simmer.", imagePreview: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?w=600" },
      { description: "Add apricots.", imagePreview: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?w=600" },
      { description: "Serve.", imagePreview: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?w=600" }
    ],
    views: 4230,
    favorites: 298,
    score: 937.85
  },
  {
    id: 6,
    authorId: 2,
    title: "Crispy Pork Belly with Thai Dipping Sauce",
    image: "https://img-global.cpcdn.com/recipes/090b2595d8ccf699/1360x1562f0.53078_0.5_1.0q80/ba-ch%E1%BB%89-chien-gion-s%E1%BB%91t-thai-recipe-main-photo.webp",
    rating: 4.7,
    cookTime: 300, // ~5 hours
    category: "Vietnamese",
    ingredients: [
      { name: "Pork belly (skin removed)", amount: "1 kg" },
      { name: "Green onions", amount: "2 stalks" },
      { name: "Ginger", amount: "20 g" },
      { name: "Salt", amount: "1 tbsp" },
      { name: "Vinegar", amount: "2 tbsp" },
      { name: "Green chili", amount: "2" },
      { name: "Red chili", amount: "2" },
      { name: "Palm sugar", amount: "2 tbsp" },
      { name: "Kumquat / lime", amount: "2 kumquats or 1/2 lime" },
      { name: "Coriander roots", amount: "2 roots" },
      { name: "Garlic", amount: "3 cloves" },
      { name: "Kaffir lime leaf", amount: "1 leaf" },
      { name: "Roasted rice powder", amount: "1/2 tsp" }
    ],
    steps: [
      {
        description: "Clean the pork belly and boil it with green onions, ginger, salt, and vinegar for 15 minutes.",
        imagePreview: "https://img-global.cpcdn.com/steps/8264eeefb57ac98d/320x256cq80/ba-ch%E1%BB%89-chien-gion-s%E1%BB%91t-thai-recipe-step-1-photo.webp"
      },
      {
        description: "Remove, let it cool, then cut into 1 cm thick slices.",
        imagePreview: "https://img-global.cpcdn.com/steps/8b90854f7994b68f/320x256cq80/ba-ch%E1%BB%89-chien-gion-s%E1%BB%91t-thai-recipe-step-2-photo.webp"
      },
      {
        description: "Dry in the oven at 100°C for 1 hour until the surface is dry.",
        imagePreview: "https://img-global.cpcdn.com/steps/6f72ad81d3b41b31/320x256cq80/ba-ch%E1%BB%89-chien-gion-s%E1%BB%91t-thai-recipe-step-3-photo.webp"
      },
      {
        description: "Let the pork rest for 1 hour. You can freeze or refrigerate for later use.",
        imagePreview: "https://img-global.cpcdn.com/steps/b1d5da9b266fec92/320x256cq80/ba-ch%E1%BB%89-chien-gion-s%E1%BB%91t-thai-recipe-step-4-photo.webp"
      },
      {
        description: "Deep-fry until golden and crispy.",
        imagePreview: "https://img-global.cpcdn.com/steps/cd19244c7aee48fd/320x256cq80/ba-ch%E1%BB%89-chien-gion-s%E1%BB%91t-thai-recipe-step-5-photo.webp"
      },
      {
        description: "Make the sauce by pounding green chili, red chili, palm sugar, kumquat juice, coriander roots, garlic, and sliced kaffir lime leaf. Add roasted rice powder if available.",
        imagePreview: "https://img-global.cpcdn.com/steps/7e15d6e1de5c4ca1/320x256cq80/ba-ch%E1%BB%89-chien-gion-s%E1%BB%91t-thai-recipe-step-6-photo.webp"
      },
      {
        description: "Serve the crispy pork belly with the dipping sauce.",
        imagePreview: "https://img-global.cpcdn.com/steps/7e5c65391c4ba3c4/320x256cq80/ba-ch%E1%BB%89-chien-gion-s%E1%BB%91t-thai-recipe-step-7-photo.webp"
      }
    ],
    views: 5234,
    favorites: 842,
    score: 1580.25
  },
  {
    id: 7,
    authorId: 2,
    title: "Coq au Vin",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop",
    rating: 4.9,
    cookTime: 120,
    category: "French",
    ingredients: [
      { name: "Chicken", amount: "3 lbs" },
      { name: "Wine", amount: "3 cups" },
      { name: "Bacon", amount: "6 slices" }
    ],
    steps: [
      { description: "Marinate chicken.", imagePreview: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600" },
      { description: "Cook bacon and chicken.", imagePreview: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600" },
      { description: "Simmer in wine.", imagePreview: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600" },
      { description: "Serve.", imagePreview: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600" }
    ],
    views: 5670,
    favorites: 389,
    score: 1252.15
  },
  {
    id: 8,
    authorId: 1,
    title: "Spanish Paella",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&h=600&fit=crop",
    rating: 4.8,
    cookTime: 60,
    category: "Spanish",
    ingredients: [
      { name: "Rice", amount: "2 cups" },
      { name: "Chicken", amount: "4 pieces" },
      { name: "Seafood", amount: "various" }
    ],
    steps: [
      { description: "Prepare stock.", imagePreview: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600" },
      { description: "Cook meats.", imagePreview: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600" },
      { description: "Add rice.", imagePreview: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600" },
      { description: "Add seafood.", imagePreview: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600" }
    ],
    views: 7230,
    favorites: 512,
    score: 1589.4
  },
  {
    id: 9,
    authorId: 2,
    title: "Creamy Chicken Alfredo Pasta",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&h=600&fit=crop",
    rating: 4.6,
    cookTime: 30,
    category: "Italian",
    ingredients: [
      { name: "Fettuccine pasta", amount: "1 lb" },
      { name: "Chicken breast", amount: "1 lb" },
      { name: "Heavy cream", amount: "2 cups" },
      { name: "Parmesan cheese", amount: "1 cup grated" },
      { name: "Butter", amount: "4 tbsp" },
      { name: "Garlic", amount: "4 cloves" },
      { name: "Italian seasoning", amount: "1 tsp" },
      { name: "Fresh parsley", amount: "1/4 cup chopped" }
    ],
    steps: [
      { description: "Season chicken breasts with salt, pepper, and Italian seasoning.", imagePreview: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600" },
      { description: "Grill or pan-sear chicken until fully cooked.", imagePreview: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600" },
      { description: "Cook fettuccine and reserve pasta water.", imagePreview: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600" },
      { description: "Make Alfredo sauce with butter, garlic, cream, and cheese.", imagePreview: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600" },
      { description: "Mix pasta with sauce and serve with sliced chicken.", imagePreview: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600" }
    ],
    views: 4230,
    favorites: 298,
    score: 4.6 * 0.5 + 298 * 0.3 + 4230 * 0.2
  },
  {
    id: 10,
    authorId: 1,
    title: "Spicy Thai Basil Chicken",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800&h=600&fit=crop",
    rating: 4.9,
    cookTime: 20,
    category: "Thai",
    ingredients: [
      { name: "Chicken thigh", amount: "1 lb" },
      { name: "Thai basil leaves", amount: "2 cups" },
      { name: "Thai chilies", amount: "5-7 pieces" },
      { name: "Garlic", amount: "6 cloves" },
      { name: "Oyster sauce", amount: "2 tbsp" },
      { name: "Soy sauce", amount: "1 tbsp" },
      { name: "Fish sauce", amount: "1 tbsp" },
      { name: "Sugar", amount: "1 tsp" },
      { name: "Vegetable oil", amount: "2 tbsp" }
    ],
    steps: [
      { description: "Prepare garlic and chili paste.", imagePreview: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600" },
      { description: "Stir-fry paste in hot oil.", imagePreview: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600" },
      { description: "Cook minced chicken.", imagePreview: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600" },
      { description: "Add sauce mixture.", imagePreview: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600" },
      { description: "Mix in basil and serve.", imagePreview: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600" }
    ],
    views: 6890,
    favorites: 421,
    score: 4.9 * 0.5 + 421 * 0.3 + 6890 * 0.2
  },
  {
    id: 11,
    authorId: 2,
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&h=600&fit=crop",
    rating: 4.7,
    cookTime: 15,
    category: "French",
    ingredients: [
      { name: "Dark chocolate", amount: "6 oz" },
      { name: "Butter", amount: "1/2 cup" },
      { name: "Eggs", amount: "2 large" },
      { name: "Egg yolks", amount: "2 large" },
      { name: "Sugar", amount: "1/4 cup" },
      { name: "Flour", amount: "2 tbsp" },
      { name: "Vanilla extract", amount: "1 tsp" },
      { name: "Salt", amount: "1 pinch" }
    ],
    steps: [
      { description: "Preheat oven and prepare ramekins.", imagePreview: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600" },
      { description: "Melt chocolate and butter.", imagePreview: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600" },
      { description: "Whisk eggs and sugar.", imagePreview: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600" },
      { description: "Combine all ingredients.", imagePreview: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600" },
      { description: "Bake and serve immediately.", imagePreview: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600" }
    ],
    views: 5210,
    favorites: 389,
    score: 4.7 * 0.5 + 389 * 0.3 + 5210 * 0.2
  },
  {
    id: 12,
    authorId: 1,
    title: "Mediterranean Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    rating: 4.5,
    cookTime: 25,
    category: "Mediterranean",
    ingredients: [
      { name: "Quinoa", amount: "1 cup" },
      { name: "Chickpeas", amount: "1 can" },
      { name: "Cherry tomatoes", amount: "1 cup" },
      { name: "Cucumber", amount: "1" },
      { name: "Red onion", amount: "1/4 cup" },
      { name: "Olives", amount: "1/2 cup" },
      { name: "Feta cheese", amount: "1/2 cup" },
      { name: "Lemon juice", amount: "3 tbsp" }
    ],
    steps: [
      { description: "Cook quinoa.", imagePreview: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" },
      { description: "Prepare vegetables.", imagePreview: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" },
      { description: "Mix ingredients.", imagePreview: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" },
      { description: "Add dressing.", imagePreview: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" },
      { description: "Serve.", imagePreview: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" }
    ],
    views: 3890,
    favorites: 267,
    score: 4.5 * 0.5 + 267 * 0.3 + 3890 * 0.2
  },
  {
    id: 13,
    authorId: 2,
    title: "Japanese Ramen Bowl",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop",
    rating: 4.9,
    cookTime: 45,
    category: "Japanese",
    ingredients: [
      { name: "Pork bones", amount: "2 lbs" },
      { name: "Ramen noodles", amount: "1 lb" },
      { name: "Pork belly", amount: "1 lb" },
      { name: "Eggs", amount: "4" },
      { name: "Green onions", amount: "4 stalks" }
    ],
    steps: [
      { description: "Prepare broth.", imagePreview: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600" },
      { description: "Cook pork.", imagePreview: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600" },
      { description: "Prepare eggs.", imagePreview: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600" },
      { description: "Cook noodles.", imagePreview: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600" },
      { description: "Assemble bowl.", imagePreview: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600" }
    ],
    views: 8340,
    favorites: 512,
    score: 4.9 * 0.5 + 512 * 0.3 + 8340 * 0.2
  },
  {
    id: 14,
    authorId: 1,
    title: "Grilled Salmon with Asparagus",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
    rating: 4.6,
    cookTime: 20,
    category: "American",
    ingredients: [
      { name: "Salmon fillets", amount: "2" },
      { name: "Asparagus", amount: "1 lb" },
      { name: "Honey", amount: "2 tbsp" },
      { name: "Mustard", amount: "1 tbsp" }
    ],
    steps: [
      { description: "Prepare asparagus.", imagePreview: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600" },
      { description: "Make glaze.", imagePreview: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600" },
      { description: "Grill salmon.", imagePreview: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600" },
      { description: "Apply glaze.", imagePreview: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600" },
      { description: "Serve.", imagePreview: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600" }
    ],
    views: 3420,
    favorites: 234,
    score: 4.6 * 0.5 + 234 * 0.3 + 3420 * 0.2
  },
  {
    id: 15,
    authorId: 2,
    title: "Mexican Street Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop",
    rating: 4.8,
    cookTime: 30,
    category: "Mexican",
    ingredients: [
      { name: "Flank steak", amount: "1.5 lbs" },
      { name: "Corn tortillas", amount: "12" },
      { name: "Onion", amount: "1" },
      { name: "Cilantro", amount: "1 bunch" }
    ],
    steps: [
      { description: "Marinate steak.", imagePreview: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600" },
      { description: "Grill steak.", imagePreview: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600" },
      { description: "Slice meat.", imagePreview: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600" },
      { description: "Prepare tortillas.", imagePreview: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600" },
      { description: "Assemble tacos.", imagePreview: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600" }
    ],
    views: 6230,
    favorites: 445,
    score: 4.8 * 0.5 + 445 * 0.3 + 6230 * 0.2
  }
];

export const getTrendingRecipes = () => {
  return [...mockRecipes].sort((a, b) => b.score - a.score);
}
