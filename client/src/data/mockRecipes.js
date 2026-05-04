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
    authorId: 3,
    title: "Roasted Chicken with Chili Salt Coating",
    image: "https://img-global.cpcdn.com/recipes/6faf0859d3b6d49e/300x426f0.5_0.5_1.0q80/ga-n%C6%B0%E1%BB%9Bng-ph%E1%BB%A7-mu%E1%BB%91i-%E1%BB%9Bt-recipe-main-photo.webp",
    rating: 4.8,
    cookTime: 120, // ~2 hours
    category: "Vietnamese",
    ingredients: [
      { name: "Whole free-range chicken", amount: "1.5 kg" },
      { name: "Chili powder (for coating)", amount: "2 tbsp" },

      { name: "Oyster sauce", amount: "1 tbsp" },
      { name: "Soy sauce", amount: "4 tbsp" },
      { name: "Chili sauce", amount: "2 tbsp" },
      { name: "Sesame oil", amount: "1 tsp" },
      { name: "Chili oil (satay)", amount: "1 tsp" }
    ],
    steps: [
      {
        description: "Clean the chicken thoroughly with salt and vinegar, then rinse. Marinate with oyster sauce, soy sauce, chili sauce, sesame oil, and chili oil. Rub evenly inside and outside, especially the skin. Marinate for at least 1 hour or overnight.",
        imagePreview: "https://img-global.cpcdn.com/steps/b5c1591b4b039bd4/640x640sq80/photo.webp"
      },
      {
        description: "Place the chicken into an air fryer and press it down slightly to shape. Cook at 160°C for 30 minutes, flip, then cook another 20 minutes at 160°C. Increase to 180°C for 10 minutes to crisp and brown the skin.",
        imagePreview: "https://img-global.cpcdn.com/steps/683f197f1bfc55b2/640x640sq80/photo.webp"
      },
      {
        description: "Remove the chicken and evenly sprinkle chili powder over the skin before serving.",
        imagePreview: "https://img-global.cpcdn.com/steps/b5d17898f572c21c/640x640sq80/photo.webp"
      }
    ],
    views: 4870,
    favorites: 760,
    score: 1495.2
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
    title: "Pan-Seared Salmon Steak with French Fries",
    image: "https://img-global.cpcdn.com/recipes/a180035144b5b6f0/680x781f0.5_0.47389_1.0q80/steak-ca-h%E1%BB%93i-ap-ch%E1%BA%A3o-khoai-tay-chien-recipe-main-photo.webp",
    rating: 4.8,
    cookTime: 20,
    category: "Western",
    ingredients: [
      { name: "Salmon fillet", amount: "400 g" },
      { name: "Salt", amount: "a pinch" },
      { name: "Potatoes", amount: "100 g" },
      { name: "Sauce (teriyaki / BBQ / black pepper / cream / passion fruit / orange)", amount: "1/2 cup" },
      { name: "Butter", amount: "a small amount" }
    ],
    steps: [
      {
        description: "Rinse the salmon with a bit of cooking wine, pat dry, then season both sides lightly with salt. Let it rest for 10 minutes.",
        imagePreview: "https://img-global.cpcdn.com/steps/c46ead6f2d596774/160x128cq80/steak-ca-h%E1%BB%93i-ap-ch%E1%BA%A3o-khoai-tay-chien-recipe-step-1-photo.webp"
      },
      {
        description: "Heat a pan and sear the salmon until golden on both sides. Add a small amount of butter while cooking.",
        imagePreview: "https://img-global.cpcdn.com/steps/a3deec16c9b3e268/160x128cq80/steak-ca-h%E1%BB%93i-ap-ch%E1%BA%A3o-khoai-tay-chien-recipe-step-2-photo.webp"
      },
      {
        description: "Serve with French fries and your choice of sauce.",
        imagePreview: "https://img-global.cpcdn.com/steps/007b2ec2073514cd/160x128cq80/steak-ca-h%E1%BB%93i-ap-ch%E1%BA%A3o-khoai-tay-chien-recipe-step-3-photo.webp"
      }
    ],
    views: 2980,
    favorites: 520,
    score: 1120.6
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
    authorId: 4,
    title: "Teriyaki Baked Salmon",
    image: "https://img-global.cpcdn.com/recipes/f4cc2552f10b311a/680x781f0.500982_0.5_1.0q80/ca-h%E1%BB%93i-n%C6%B0%E1%BB%9Bng-teriyaki-recipe-main-photo.webp",
    rating: 4.5,
    cookTime: 40, // includes marinating time
    category: "Japanese",
    ingredients: [
      { name: "Salmon fillet", amount: "200 g" },
      { name: "Teriyaki sauce", amount: "1 bottle (use ~3 tbsp)" },
      { name: "Sesame oil", amount: "1 tbsp" },
      { name: "Roasted sesame seeds", amount: "to taste" }
    ],
    steps: [
      {
        description: "Place the salmon in a tray. Pour about 3 tablespoons of teriyaki sauce over it, add sesame oil, and sprinkle sesame seeds. Marinate for 30 minutes or up to 2–3 hours in the refrigerator.",
        imagePreview: "https://img-global.cpcdn.com/steps/cb81b68a7ccbbb9a/160x128cq80/ca-h%E1%BB%93i-n%C6%B0%E1%BB%9Bng-teriyaki-recipe-step-1-photo.webp"
      },
      {
        description: "Preheat the oven or air fryer. Bake at 180°C for about 10 minutes until the salmon is cooked through. The sauce will thicken and slightly caramelize.",
        imagePreview: "https://img-global.cpcdn.com/steps/125f8d05e64681e9/160x128cq80/ca-h%E1%BB%93i-n%C6%B0%E1%BB%9Bng-teriyaki-recipe-step-2-photo.webp"
      },
      {
        description: "Transfer to a plate, spoon the remaining sauce over the salmon, and serve with soy sauce and hot steamed rice.",
        imagePreview: "https://img-global.cpcdn.com/steps/dcaa56d0751c24ba/160x128cq80/ca-h%E1%BB%93i-n%C6%B0%E1%BB%9Bng-teriyaki-recipe-step-3-photo.webp"
      }
    ],
    views: 2100,
    favorites: 380,
    score: 950.2
  },
  {
    id: 8,
    authorId: 5,
    title: "Shrimp Omelette over Rice",
    image: "https://img-global.cpcdn.com/recipes/732f0727cf866712/680x781f0.5_0.5_1.0q80/c%C6%A1m-ph%E1%BB%A7-tr%E1%BB%A9ng-chien-tom-recipe-main-photo.webp",
    rating: 4.9,
    cookTime: 30,
    category: "Vietnamese",
    ingredients: [
      { name: "Fresh shrimp", amount: "200 g" },
      { name: "Eggs", amount: "4" },
      { name: "Shallots", amount: "7 bulbs" },
      { name: "Cooking oil", amount: "1 tbsp" },
      { name: "Fish sauce", amount: "2 tsp" },
      { name: "Seasoning powder", amount: "1 tsp" },
      { name: "Ground black pepper", amount: "1/2 tsp" },
      { name: "Steamed white rice", amount: "for serving" },
      { name: "Soy sauce with chili", amount: "for serving" }
    ],
    steps: [
      {
        description: "Clean the shrimp with salt, peel, remove heads and veins, then rinse again. Cut into small pieces. Sauté sliced shallots in oil until fragrant, then add shrimp with seasoning powder and pepper. Cook until just done.",
        imagePreview: "https://img-global.cpcdn.com/steps/9bde45ff6928ba8f/160x128cq80/c%C6%A1m-ph%E1%BB%A7-tr%E1%BB%A9ng-chien-tom-recipe-step-1-photo.webp"
      },
      {
        description: "Beat eggs with fish sauce. Heat oil in a pan, pour in the eggs and cook on low heat. When slightly set, add the shrimp on top so it sticks to the omelette. Gently stir to cook through while keeping it soft.",
        imagePreview: "https://img-global.cpcdn.com/steps/53640f2dd70b2358/160x128cq80/c%C6%A1m-ph%E1%BB%A7-tr%E1%BB%A9ng-chien-tom-recipe-step-2-photo.webp"
      },
      {
        description: "Serve the shrimp omelette over steamed rice. Add soy sauce with chili and sprinkle pepper on top. Best served hot.",
        imagePreview: "https://img-global.cpcdn.com/steps/7db2cead728bdd43/160x128cq80/c%C6%A1m-ph%E1%BB%A7-tr%E1%BB%A9ng-chien-tom-recipe-step-3-photo.webp"
      }
    ],
    views: 6890,
    favorites: 1200,
    score: 2105.6
  },
  {
    id: 9,
    authorId: 6,
    title: "Singapore-Style Kung Pao Frog Legs",
    image: "https://img-global.cpcdn.com/recipes/187b994a10aec31a/300x426f0.513587_0.5_1.0q80/chinese-%E1%BA%BFch-singapore-kung-pao-frog-leg-chu%E1%BA%A9n-v%E1%BB%8B-sing-recipe-main-photo.webp",
    rating: 4.6,
    cookTime: 90, // includes marinating time
    category: "Chinese",
    ingredients: [
      { name: "Frog legs", amount: "8 frogs" },
      { name: "Dried chili peppers", amount: "20" },
      { name: "Green onions", amount: "6 stalks" },
      { name: "Garlic", amount: "4 cloves" },
      { name: "Chicken broth concentrate", amount: "2 tbsp" },
      { name: "Cornstarch", amount: "4 tbsp" },
      { name: "Sesame oil", amount: "2 tbsp" },

      { name: "Light soy sauce", amount: "3 tbsp" },
      { name: "Dark soy sauce", amount: "5 tbsp" },
      { name: "Oyster sauce", amount: "3 tbsp" },
      { name: "Shaoxing wine", amount: "2.5 tbsp" },
      { name: "Sugar", amount: "3 tsp" },
      { name: "Ground pepper", amount: "2 tsp" }
    ],
    steps: [
      {
        description: "Clean and chop the frog legs into bite-sized pieces. Marinate with soy sauces, oyster sauce, Shaoxing wine, sugar, and pepper for 1 hour. Prepare vegetables: cut onions into chunks, slice garlic, and cut green onions into segments.",
        imagePreview: "https://img-global.cpcdn.com/steps/091b16560ac1a086/160x128cq80/chinese-%E1%BA%BFch-singapore-kung-pao-frog-leg-chu%E1%BA%A9n-v%E1%BB%8B-sing-recipe-step-1-photo.webp"
      },
      {
        description: "Heat a pan with sesame oil. Add dried chilies and garlic, stir until fragrant. Add frog legs and stir-fry until firm. Mix chicken broth concentrate with 500 ml warm water, pour into the pan, bring to a boil, then simmer on medium heat for 5 minutes. Add onions.",
        imagePreview: "https://img-global.cpcdn.com/steps/3db561238da8ed97/160x128cq80/chinese-%E1%BA%BFch-singapore-kung-pao-frog-leg-chu%E1%BA%A9n-v%E1%BB%8B-sing-recipe-step-2-photo.webp"
      },
      {
        description: "Mix cornstarch with a little water, then slowly pour into the pan to thicken the sauce. Add green onions, stir briefly, then turn off the heat. Serve hot, preferably in a clay pot.",
        imagePreview: "https://img-global.cpcdn.com/steps/66289971b1769b17/160x128cq80/chinese-%E1%BA%BFch-singapore-kung-pao-frog-leg-chu%E1%BA%A9n-v%E1%BB%8B-sing-recipe-step-3-photo.webp"
      }
    ],
    views: 2740,
    favorites: 480,
    score: 1105.3
  },
  {
    id: 10,
    authorId: 7,
    title: "Baked Macaroni with Ground Beef and Tomato Sauce",
    image: "https://img-global.cpcdn.com/recipes/13dbb1745bd330af/680x781cq80/nui-s%E1%BB%91t-bo-b%E1%BA%B1m-b%E1%BB%8F-lo-recipe-main-photo.webp",
    rating: 4.7,
    cookTime: 60,
    category: "Western",
    servings: 4,
    difficulty: "easy",
    method: "bake",
    description: "A comforting baked pasta dish with ground beef, homemade tomato sauce, and melted mozzarella cheese. Perfect for kids and family meals.",
    ingredients: [
      { name: "Macaroni pasta", amount: "200 g" },
      { name: "Ground beef (Australian beef)", amount: "200 g" },
      { name: "Mozzarella cheese (shredded)", amount: "50 g" },

      { name: "Tomatoes (peeled)", amount: "3 large" },
      { name: "Garlic", amount: "3 cloves" },
      { name: "Onion", amount: "1 small" },
      { name: "Unsalted butter", amount: "1 tbsp" },
      { name: "Salt", amount: "to taste" },
      { name: "Sugar", amount: "to taste" },
      { name: "Black pepper", amount: "to taste" },
      { name: "Dried herbs (basil, oregano, rosemary, parsley)", amount: "a pinch" }
    ],
    steps: [
      {
        description: "Boil macaroni in a large pot (about 1 liter of water per 100 g pasta) until half-cooked. Drain and rinse with cold water to stop cooking.",
        imagePreview: "https://img-global.cpcdn.com/steps/8966d01e20539f08/160x128cq80/nui-s%E1%BB%91t-bo-b%E1%BA%B1m-b%E1%BB%8F-lo-recipe-step-2-photo.webp"
      },
      {
        description: "Sauté minced garlic in a pan until fragrant, then add ground beef. Cook until browned and season lightly with salt. Set aside.",
        imagePreview: "https://img-global.cpcdn.com/steps/3526325138499ef0/160x128cq80/nui-s%E1%BB%91t-bo-b%E1%BA%B1m-b%E1%BB%8F-lo-recipe-step-2-photo.webp"
      },
      {
        description: "In the same pan, sauté garlic and onions until aromatic. Add chopped tomatoes and cook on low heat for about 10 minutes. Season with salt, sugar, pepper, and dried herbs (keep it slightly mild since cheese will add saltiness).",
        imagePreview: "https://img-global.cpcdn.com/steps/c45ba664876f6f91/160x128cq80/nui-s%E1%BB%91t-bo-b%E1%BA%B1m-b%E1%BB%8F-lo-recipe-step-3-photo.webp"
      },
      {
        description: "Mix the macaroni with the tomato sauce and cooked beef. Transfer to a baking dish. Sprinkle shredded mozzarella cheese evenly on top and add parsley if desired.",
        imagePreview: "https://img-global.cpcdn.com/steps/82a0a7e9d189edbb/160x128cq80/nui-s%E1%BB%91t-bo-b%E1%BA%B1m-b%E1%BB%8F-lo-recipe-step-4-photo.webp"
      },
      {
        description: "Bake in a preheated oven at 180°C (356°F) for 20 minutes until the cheese is melted and slightly golden.",
        imagePreview: "https://img-global.cpcdn.com/steps/ff31178850a401d1/160x128cq80/nui-s%E1%BB%91t-bo-b%E1%BA%B1m-b%E1%BB%8F-lo-recipe-step-5-photo.webp"
      }
    ],
    views: 1980,
    favorites: 350,
    score: 980.5,
    tags: ["kid-friendly", "comfort food", "cheesy", "baked"],
    spiceLevel: "low"
  },
  {
    id: 11,
    authorId: 8,
    title: "Asparagus and Beef Salad",
    image: "https://img-global.cpcdn.com/recipes/75173848b804c4d2/300x426f0.5_0.5_1.0q80/g%E1%BB%8Fi-mang-tay-th%E1%BB%8Bt-bo-recipe-main-photo.webp",
    rating: 4.5,
    cookTime: 40,
    category: "Vietnamese",
    servings: 4,
    difficulty: "easy",
    method: "mix",
    description: "A fresh and vibrant Vietnamese-style salad with tender beef, crisp asparagus, and a balance of sweet, sour, and spicy flavors.",
    ingredients: [
      { name: "Beef", amount: "200 g" },
      { name: "Asparagus", amount: "200 g" },
      { name: "Bell pepper", amount: "1/2" },
      { name: "Onion", amount: "1/4" },
      { name: "Pineapple", amount: "1/4 small" },
      { name: "Mixed herbs", amount: "a handful" },
      { name: "Lime juice", amount: "from 1 lime" },
      { name: "Korean chili powder", amount: "1 tsp" },
      { name: "Bird’s eye chili (optional)", amount: "1, minced" },
      { name: "Garlic", amount: "1 bulb" },
      { name: "Sesame seeds", amount: "a pinch" },

      { name: "Sugar", amount: "1 tbsp" },
      { name: "Oyster sauce", amount: "1 tbsp" },
      { name: "Condensed milk", amount: "1/2 tbsp" }
    ],
    steps: [
      {
        description: "Prepare vegetables: wash and slice asparagus diagonally (use the tender part), cut bell pepper into strips, thinly slice onion and soak in ice water, cut pineapple into small sticks, and roughly chop herbs.",
        imagePreview: "https://img-global.cpcdn.com/steps/1a2b42acb6b502e8/160x128cq80/g%E1%BB%8Fi-mang-tay-th%E1%BB%8Bt-bo-recipe-step-1-photo.webp"
      },
      {
        description: "Soak asparagus and vegetables in ice water for about 10 minutes, then drain well. Mix with pineapple and 1 tbsp sugar, let sit for 10 minutes, then drain again. Marinate beef with condensed milk and oyster sauce for 10 minutes.",
        imagePreview: "https://img-global.cpcdn.com/steps/0c40dd7b45ad8147/160x128cq80/g%E1%BB%8Fi-mang-tay-th%E1%BB%8Bt-bo-recipe-step-2-photo.webp"
      },
      {
        description: "Crush garlic and sauté until fragrant, then remove. Stir-fry the beef quickly over high heat in the garlic oil until just medium-rare.",
        imagePreview: "https://img-global.cpcdn.com/steps/75f7fbe5e26130c7/160x128cq80/g%E1%BB%8Fi-mang-tay-th%E1%BB%8Bt-bo-recipe-step-3-photo.webp"
      },
      {
        description: "Combine beef with the asparagus mixture. Add herbs, lime juice, chili powder, and fresh chili. Adjust seasoning to balance sour, spicy, salty, and sweet flavors. Sprinkle sesame seeds on top and serve.",
        imagePreview: "https://img-global.cpcdn.com/steps/b9ae8888ea6a4bdb/160x128cq80/g%E1%BB%8Fi-mang-tay-th%E1%BB%8Bt-bo-recipe-step-4-photo.webp"
      }
    ],
    views: 1560,
    favorites: 290,
    score: 870.2,
    tags: ["healthy", "fresh", "salad", "quick"],
    spiceLevel: "medium",
    mealType: "side_dish"
  },
  {
    id: 12,
    authorId: 9,
    title: "Spicy Braised Anchovies with Pineapple",
    image: "https://img-global.cpcdn.com/recipes/7041ea8458ca2dbe/680x781f0.5_0.5_1.0q80/ca-c%C6%A1m-tr%E1%BB%95ng-kho-cay-recipe-main-photo.webp",
    rating: 4.8,
    cookTime: 30,
    category: "Vietnamese",
    servings: 3,
    difficulty: "easy",
    method: "braise",
    description: "A flavorful Vietnamese braised anchovy dish with a perfect balance of spicy, salty, and sweet notes, enhanced by caramelized pineapple and rich pork fat.",
    ingredients: [
      { name: "Large anchovies", amount: "400 g" },
      { name: "Pork fat", amount: "50 g" },
      { name: "Caramelized pineapple", amount: "1/2 fruit" },
      { name: "Bird’s eye chili", amount: "4" },
      { name: "Chili powder", amount: "2 tbsp" },
      { name: "Fish sauce", amount: "2 tbsp" },
      { name: "Sugar", amount: "1 tbsp" },
      { name: "MSG", amount: "2 tsp" },
      { name: "Coconut caramel sauce", amount: "1 tsp" },
      { name: "Rendered pork fat (lard)", amount: "2 tbsp" }
    ],
    steps: [
      {
        description: "Clean the anchovies thoroughly and drain well. Cut the caramelized pineapple into small pieces.",
        imagePreview: "https://img-global.cpcdn.com/steps/5aac632baa38fb98/160x128cq80/ca-c%C6%A1m-tr%E1%BB%95ng-kho-cay-recipe-step-1-photo.webp"
      },
      {
        description: "Layer pineapple at the bottom of a pot, then arrange anchovies tightly on top. Add all seasonings and marinate for 10 minutes.",
        imagePreview: "https://img-global.cpcdn.com/steps/696ac1d8d724acd3/160x128cq80/ca-c%C6%A1m-tr%E1%BB%95ng-kho-cay-recipe-step-2-photo.webp"
      },
      {
        description: "Cook on low heat until the fish firms up and absorbs the spices. Add water just enough to cover the fish. Continue simmering until the sauce reduces and thickens. Adjust seasoning to taste.",
        imagePreview: "https://img-global.cpcdn.com/steps/6270db51c6ad564b/160x128cq80/ca-c%C6%A1m-tr%E1%BB%95ng-kho-cay-recipe-step-2-photo.webp"
      },
      {
        description: "Serve hot. The dish should have a glossy finish with rich, spicy, sweet, and savory flavors. Best enjoyed with steamed rice.",
        imagePreview: "https://img-global.cpcdn.com/steps/2961d53df7134852/160x128cq80/ca-c%C6%A1m-tr%E1%BB%95ng-kho-cay-recipe-step-3-photo.webp"
      }
    ],
    views: 2210,
    favorites: 410,
    score: 1020.7,
    tags: ["spicy", "savory", "traditional", "rice dish"],
    spiceLevel: "high",
    mealType: "main_course"
  },
  {
    id: 13,
    authorId: 10,
    title: "Crispy Fried Chicken (KFC-Style)",
    image: "https://img-global.cpcdn.com/recipes/6a3a4351618bba78/300x426cq80/ga-ran-kfc-recipe-main-photo.webp",
    rating: 4.9,
    cookTime: 60,
    category: "Fast Food",
    servings: 4,
    difficulty: "medium",
    method: "deep-fry",
    description: "Ultra crispy fried chicken with juicy and tender meat inside, inspired by KFC-style coating. Perfectly seasoned with a flavorful crunchy crust.",
    ingredients: [
      { name: "Chicken thighs (boneless)", amount: "1 kg" },
      { name: "Water", amount: "1 liter" },
      { name: "Salt", amount: "1.5 tsp" },
      { name: "Rice vinegar", amount: "2 tsp" },
      { name: "Garlic (minced)", amount: "2 cloves" },

      { name: "All-purpose flour", amount: "1 cup" },
      { name: "Cornstarch", amount: "3/4 cup" },
      { name: "Paprika", amount: "1 tsp" },
      { name: "Chili powder", amount: "1 tsp (optional)" },
      { name: "Black pepper", amount: "to taste" },
      { name: "Garlic powder", amount: "1 tbsp" },
      { name: "Onion powder", amount: "1 tbsp" },
      { name: "Cumin powder", amount: "1 tsp" },
      { name: "Seasoning powder", amount: "1 tbsp" },
      { name: "Turmeric powder", amount: "a pinch" },
      { name: "Baking powder", amount: "1 tsp" },

      { name: "Egg", amount: "1" },
      { name: "Rice vinegar (for batter)", amount: "1 tbsp" },
      { name: "Thyme", amount: "a pinch" },
      { name: "Water (for batter)", amount: "250 ml" },

      { name: "Cooking oil (for deep frying)", amount: "enough for deep frying" },
      { name: "Ketchup / Mayonnaise / Chili sauce", amount: "for serving" }
    ],
    steps: [
      {
        description: "Clean the chicken and soak in a mixture of water, salt, garlic, and rice vinegar for at least 30 minutes (or up to 2–3 hours). This step helps keep the meat juicy. Remove and marinate with garlic powder, seasoning powder, and a bit of vinegar.",
        imagePreview: "https://img-global.cpcdn.com/steps/63ce835b8dd8bdac/160x128cq80/ga-ran-kfc-recipe-step-1-photo.webp"
      },
      {
        description: "Mix all dry ingredients for the coating. Reserve about 1/2 cup of the mixture, then combine it with water, egg, vinegar, and thyme to create the wet batter.",
        imagePreview: "https://img-global.cpcdn.com/steps/08738a80f0471085/640x640sq80/photo.webp"
      },
      {
        description: "Heat oil for deep frying. Coat the chicken: first dredge in dry flour, dip into wet batter, then coat again in dry flour (dry → wet → dry). Shake off excess flour.",
        imagePreview: "https://img-global.cpcdn.com/steps/2fcf2215d6edd7b2/640x640sq80/photo.webp"
      },
      {
        description: "Fry 3–4 pieces at a time to maintain oil temperature. Fry for about 8–10 minutes until golden brown and crispy.",
        imagePreview: "https://img-global.cpcdn.com/steps/405a96e19867e974/160x128cq80/ga-ran-kfc-recipe-step-4-photo.webp"
      },
      {
        description: "Serve hot. The chicken should be crispy on the outside and juicy on the inside. Enjoy with ketchup, mayonnaise, or chili sauce.",
        imagePreview: "https://img-global.cpcdn.com/steps/9a0336c7c437a17a/160x128cq80/ga-ran-kfc-recipe-step-5-photo.webp"
      }
    ],
    views: 3520,
    favorites: 720,
    score: 1450.9,
    tags: ["crispy", "fried", "fast food", "crowd favorite"],
    spiceLevel: "low",
    mealType: "main_course"
  },
  {
    id: 14,
    authorId: 7,
    title: "Steamed Banana Cake with Young Coconut",
    image: "https://img-global.cpcdn.com/recipes/16fd2be117146d1c/680x781f0.5_0.474474_1.0q80/banh-chu%E1%BB%91i-h%E1%BA%A5p-d%E1%BB%ABa-non-recipe-main-photo.webp",
    rating: 4.8,
    cookTime: 180,
    category: "Vietnamese",
    servings: 6,
    difficulty: "medium",
    method: "steam",
    description: "A traditional Vietnamese dessert made with ripe bananas, tapioca flour, and young coconut. Soft, chewy, and lightly sweet, served with rich coconut sauce and toasted sesame seeds.",
    ingredients: [
      { name: "Ripe bananas (preferably Namwa bananas)", amount: "6–7 (~500 g)" },
      { name: "Tapioca starch", amount: "200 g" },
      { name: "Rice flour", amount: "50 g" },
      { name: "Sugar", amount: "100–120 g" },
      { name: "Diluted coconut water", amount: "50 ml" },
      { name: "Water", amount: "150 ml" },
      { name: "Vanilla extract", amount: "1 tube / 1 tsp" },
      { name: "Salt", amount: "1/4 tsp" },
      { name: "Young coconut (shredded)", amount: "a handful" },

      { name: "Coconut cream (for serving)", amount: "100 ml" },
      { name: "Toasted sesame seeds", amount: "a pinch" },
      { name: "Roasted peanuts (optional)", amount: "a little" }
    ],
    steps: [
      {
        description: "Slice bananas thinly (about 3 mm). Mix with sugar and vanilla extract.",
        imagePreview: "https://img-global.cpcdn.com/steps/3f3e1061a8ba61a6/160x128cq80/banh-chu%E1%BB%91i-h%E1%BA%A5p-d%E1%BB%ABa-non-recipe-step-1-photo.webp"
      },
      {
        description: "Let the banana mixture sit for about 1 hour to absorb the sugar.",
        imagePreview: "https://img-global.cpcdn.com/steps/c024c029cf7f42a9/160x128cq80/banh-chu%E1%BB%91i-h%E1%BA%A5p-d%E1%BB%ABa-non-recipe-step-2-photo.webp"
      },
      {
        description: "Mix tapioca starch, rice flour, water, coconut water, salt, bananas, and shredded young coconut. Pour into a greased mold. Steam for about 30 minutes after the water boils. Check doneness with a toothpick (it should come out clean).",
        imagePreview: "https://img-global.cpcdn.com/steps/9338774011aa8e63/160x128cq80/banh-chu%E1%BB%91i-h%E1%BA%A5p-d%E1%BB%ABa-non-recipe-step-3-photo.webp"
      },
      {
        description: "Let the cake cool completely before cutting. Serve with coconut cream, toasted sesame seeds, and peanuts.",
        imagePreview: "https://img-global.cpcdn.com/steps/ab5908d12356d39d/160x128cq80/banh-chu%E1%BB%91i-h%E1%BA%A5p-d%E1%BB%ABa-non-recipe-step-3-photo.webp"
      }
    ],
    views: 2890,
    favorites: 560,
    score: 1205.6,
    tags: ["dessert", "traditional", "sweet", "gluten-free"],
    spiceLevel: "none",
    mealType: "dessert"
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
  },
  {
    id: 16,
    authorId: 2,
    title: "Stir-Fried Pork Belly with Fermented Shrimp Paste",
    image: "https://img-global.cpcdn.com/recipes/dcf4aea988c08716/680x781f0.5_0.568572_1.0q80/th%E1%BB%8Bt-ba-r%E1%BB%8Di-xao-m%E1%BA%AFm-ru%E1%BB%91c-recipe-main-photo.webp",
    rating: 4.7,
    cookTime: 30,
    category: "Vietnamese",
    ingredients: [
      { name: "Pork belly", amount: "200 g" },
      { name: "Fermented shrimp paste", amount: "1 tbsp" },
      { name: "Tamarind extract", amount: "1 tsp" },
      { name: "Lemongrass (minced)", amount: "1 stalk" },
      { name: "Chili", amount: "1" },
      { name: "Sugar", amount: "1 tbsp" }
    ],
    steps: [
      {
        description: "Slice the pork belly into small pieces and stir-fry until it releases excess fat.",
        imagePreview: "https://img-global.cpcdn.com/steps/ad23b1c3a78543b8/160x128cq80/th%E1%BB%8Bt-ba-r%E1%BB%8Di-xao-m%E1%BA%AFm-ru%E1%BB%91c-recipe-step-1-photo.webp"
      },
      {
        description: "Add minced lemongrass and chili, stir-fry until fragrant. Remove excess fat if needed.",
        imagePreview: "https://img-global.cpcdn.com/steps/4c90976675e5401d/160x128cq80/th%E1%BB%8Bt-ba-r%E1%BB%8Di-xao-m%E1%BA%AFm-ru%E1%BB%91c-recipe-step-2-photo.webp"
      },
      {
        description: "Mix fermented shrimp paste with tamarind extract, a little water, and sugar. Pour into the pan and stir well.",
        imagePreview: "https://img-global.cpcdn.com/steps/5d2a9d0d02461e4e/160x128cq80/th%E1%BB%8Bt-ba-r%E1%BB%8Di-xao-m%E1%BA%AFm-ru%E1%BB%91c-recipe-step-4-photo.webp"
      },
      {
        description: "Cook until the pork is firm and evenly coated with the sauce, then turn off the heat.",
        imagePreview: "https://img-global.cpcdn.com/steps/afcd132d1a6833a7/160x128cq80/th%E1%BB%8Bt-ba-r%E1%BB%8Di-xao-m%E1%BA%AFm-ru%E1%BB%91c-recipe-step-4-photo.webp"
      }
    ],
    views: 3560,
    favorites: 640,
    score: 1280.75
  },
  {
    id: 17,
    authorId: 8,
    title: "Creamy Pumpkin and Potato Coconut Soup",
    image: "https://img-global.cpcdn.com/recipes/97b219c426e01106/680x781f0.5_0.5_1.0q80/soup-khoai-tay-bi-d%E1%BB%8F-c%E1%BB%91t-d%E1%BB%ABa-recipe-main-photo.webp",
    rating: 4.6,
    cookTime: 30,
    category: "Vegetarian",
    servings: 4,
    difficulty: "easy",
    method: "blend",
    description: "A smooth and creamy vegetarian soup made with pumpkin, potatoes, and coconut milk. Light, comforting, and naturally sweet with a rich coconut aroma.",
    ingredients: [
      { name: "Pumpkin", amount: "200 g" },
      { name: "Potato", amount: "100 g" },
      { name: "Onion", amount: "1/4" },
      { name: "Garlic", amount: "2 cloves" },
      { name: "Coconut milk", amount: "100 ml" },
      { name: "Water", amount: "enough to cover" },
      { name: "Salt", amount: "to taste" },
      { name: "Pepper", amount: "to taste" },
      { name: "Green onion", amount: "for garnish" },
      { name: "Cilantro", amount: "for garnish" }
    ],
    steps: [
      {
        description: "Peel and cut pumpkin and potatoes into 2x2 cm cubes. Soak in light salt water for 10 minutes, then drain.",
        imagePreview: "https://img-global.cpcdn.com/steps/17b79e43003a4be2/160x128cq80/soup-khoai-tay-bi-d%E1%BB%8F-c%E1%BB%91t-d%E1%BB%ABa-recipe-step-1-photo.webp"
      },
      {
        description: "Sauté chopped onion and crushed garlic until fragrant. Add pumpkin and potatoes, season with salt, and cook for about 10 minutes. Add water to just cover and simmer for 15 minutes until soft.",
        imagePreview: "https://img-global.cpcdn.com/steps/90dede2ee5f67ab3/160x128cq80/soup-khoai-tay-bi-d%E1%BB%8F-c%E1%BB%91t-d%E1%BB%ABa-recipe-step-2-photo.webp"
      },
      {
        description: "Add coconut milk and blend until smooth. Return to heat and simmer for about 3 minutes (avoid overcooking to prevent separation). Adjust seasoning to taste.",
        imagePreview: "https://img-global.cpcdn.com/steps/247ec80357988ba9/160x128cq80/soup-khoai-tay-bi-d%E1%BB%8F-c%E1%BB%91t-d%E1%BB%ABa-recipe-step-3-photo.webp"
      },
      {
        description: "Serve hot, garnished with green onions and cilantro. Optionally serve with toasted bread cubes for extra texture.",
        imagePreview: "https://img-global.cpcdn.com/steps/c83165fcd1bbc509/160x128cq80/soup-khoai-tay-bi-d%E1%BB%8F-c%E1%BB%91t-d%E1%BB%ABa-recipe-step-4-photo.webp"
      }
    ],
    views: 1740,
    favorites: 320,
    score: 910.4,
    tags: ["vegetarian", "healthy", "creamy", "soup"],
    spiceLevel: "none",
    mealType: "starter"
  },
  {
    id: 18,
    authorId: 9,
    title: "Scallion-Infused Tofu (No Raw Onion)",
    image: "https://img-global.cpcdn.com/recipes/7362749e25fd488d/680x781f0.5_0.49961_1.0q80/d%E1%BA%ADu-t%E1%BA%A9m-hanh-recipe-main-photo.webp",
    rating: 4.7,
    cookTime: 15,
    category: "Vegetarian",
    servings: 2,
    difficulty: "easy",
    method: "fry",
    description: "Crispy fried tofu coated in a savory-sweet fish sauce with softened scallions. A simple, refreshing dish perfect for summer, without the sharp taste of raw onions.",
    ingredients: [
      { name: "Tofu", amount: "2 large blocks" },
      { name: "Fish sauce", amount: "2 tbsp" },
      { name: "Sugar", amount: "1 tbsp" },
      { name: "Water", amount: "5 tbsp" },
      { name: "Scallions", amount: "to taste" },
      { name: "Cooking oil", amount: "for frying" }
    ],
    steps: [
      {
        description: "Cut tofu into bite-sized cubes (slightly larger pieces help absorb more sauce). Fry in plenty of oil until golden and crispy on all sides. Remove and drain.",
        imagePreview: "https://img-global.cpcdn.com/steps/0e56fadaa27f9303/160x128cq80/d%E1%BA%ADu-t%E1%BA%A9m-hanh-khong-an-d%C6%B0%E1%BB%A3c-hanh-s%E1%BB%91ng-recipe-step-1-photo.webp"
      },
      {
        description: "Mix fish sauce, sugar, and water in a bowl. Add chopped scallions. Microwave the mixture for 1–2 minutes to soften the scallions and reduce their sharpness.",
        imagePreview: "https://img-global.cpcdn.com/steps/912003236c01fa65/160x128cq80/d%E1%BA%ADu-t%E1%BA%A9m-hanh-khong-an-d%C6%B0%E1%BB%A3c-hanh-s%E1%BB%91ng-recipe-step-2-photo.webp"
      },
      {
        description: "Add fried tofu into the sauce. Gently poke small holes with chopsticks and mix well so the tofu absorbs the sauce evenly.",
        imagePreview: "https://img-global.cpcdn.com/steps/6e644d2b8201b3de/160x128cq80/d%E1%BA%ADu-t%E1%BA%A9m-hanh-khong-an-d%C6%B0%E1%BB%A3c-hanh-s%E1%BB%91ng-recipe-step-3-photo.webp"
      },
      {
        description: "Transfer to a plate and serve. Optionally add chili for extra heat.",
        imagePreview: "https://img-global.cpcdn.com/recipes/7362749e25fd488d/680x781f0.5_0.49961_1.0q80/d%E1%BA%ADu-t%E1%BA%A9m-hanh-recipe-main-photo.webp"
      }
    ],
    views: 980,
    favorites: 210,
    score: 785.2,
    tags: ["vegetarian", "quick", "savory", "tofu"],
    spiceLevel: "mild",
    mealType: "side"
  },
  {
    id: 19,
    authorId: 10,
    title: "Steamed Chicken with Mushrooms (One Pot)",
    image: "https://img-global.cpcdn.com/recipes/5f71282b7a062438/680x781cq80/ga-h%E1%BA%A5p-n%E1%BA%A5m-one-pot-recipe-main-photo.webp",
    rating: 4.8,
    cookTime: 40,
    category: "Main Dish",
    servings: 3,
    difficulty: "medium",
    method: "steam",
    description: "A healthy and aromatic one-pot dish featuring whole chicken steamed with mushrooms, ginger, and lemongrass. Light, nutritious, and full of natural flavors.",
    ingredients: [
      { name: "Whole chicken", amount: "1 (about 1.2 kg)" },
      { name: "Dried velvet mushrooms", amount: "30 g" },
      { name: "Dried shiitake mushrooms", amount: "20 g" },
      { name: "Napa cabbage", amount: "200 g" },
      { name: "Ginger", amount: "20 g" },
      { name: "Lemongrass", amount: "2 stalks" },
      { name: "Salt", amount: "1 tsp" },
      { name: "Turmeric powder", amount: "1 tsp" },
      { name: "Green onions", amount: "20 g" }
    ],
    steps: [
      {
        description: "Soak dried velvet mushrooms and shiitake mushrooms in water until softened, then rinse clean.",
        imagePreview: "https://img-global.cpcdn.com/steps/eb30869f194a95a9/160x128cq80/ga-h%E1%BA%A5p-n%E1%BA%A5m-one-pot-recipe-step-1-photo.webp"
      },
      {
        description: "Clean the chicken and rub evenly with salt and turmeric powder.",
        imagePreview: "https://img-global.cpcdn.com/steps/7ca9c956069f22c4/160x128cq80/ga-h%E1%BA%A5p-n%E1%BA%A5m-one-pot-recipe-step-2-photo.webp"
      },
      {
        description: "Place sliced ginger and crushed lemongrass at the bottom of the pot.",
        imagePreview: "https://img-global.cpcdn.com/steps/1a35fd62e159a0b8/160x128cq80/ga-h%E1%BA%A5p-n%E1%BA%A5m-one-pot-recipe-step-3-photo.webp"
      },
      {
        description: "Place the chicken on top, then arrange the soaked mushrooms around it.",
        imagePreview: "https://img-global.cpcdn.com/steps/301cd8ef65fd58a1/160x128cq80/ga-h%E1%BA%A5p-n%E1%BA%A5m-one-pot-recipe-step-4-photo.webp"
      },
      {
        description: "Cover and steam for 20–30 minutes depending on the size of the chicken.",
        imagePreview: "https://img-global.cpcdn.com/steps/7a28f0b34c2d0c9a/160x128cq80/ga-h%E1%BA%A5p-n%E1%BA%A5m-one-pot-recipe-step-5-photo.webp"
      },
      {
        description: "When the chicken is nearly cooked, add napa cabbage and steam for another 5 minutes.",
        imagePreview: "https://img-global.cpcdn.com/steps/91f9a88e96fb257a/160x128cq80/ga-h%E1%BA%A5p-n%E1%BA%A5m-one-pot-recipe-step-6-photo.webp"
      },
      {
        description: "Sprinkle chopped green onions on top, cover for 1 more minute, then turn off the heat.",
        imagePreview: "https://img-global.cpcdn.com/steps/c9a744d4fa8d2251/160x128cq80/ga-h%E1%BA%A5p-n%E1%BA%A5m-one-pot-recipe-step-7-photo.webp"
      }
    ],
    views: 1320,
    favorites: 275,
    score: 845.6,
    tags: ["healthy", "one-pot", "steamed", "chicken"],
    spiceLevel: "none",
    mealType: "main"
  }
];

export const getTrendingRecipes = () => {
  return [...mockRecipes].sort((a, b) => b.score - a.score);
}
