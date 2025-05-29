console.log("script.js loaded");

const productionChains = [
    // Lumber Mill
    {
        id: "lumber_mill_normal",
        name: "Lumber Mill - Normal Mode",
        workers: 4,
        inputs: [ { good: "Logs", quantity: 4 } ],
        output: { good: "Planks", quantity: 10 },
        profit_per_workday: 15 
    },
    {
        id: "lumber_mill_hasty_debarking",
        name: "Lumber Mill - Hasty Debarking",
        workers: 4,
        inputs: [ { good: "Logs", quantity: 6.8 } ],
        output: { good: "Planks", quantity: 13 },
        profit_per_workday: 17.1
    },
    // Rum Distillery
    {
        id: "rum_distillery_normal",
        name: "Rum Distillery - Normal Mode",
        workers: 4,
        inputs: [ { good: "Sugar", quantity: 6.8 } ],
        output: { good: "Rum", quantity: 3.5 },
        profit_per_workday: 15.2
    },
    {
        id: "rum_distillery_dunder_still",
        name: "Rum Distillery - Dunder Still",
        workers: 4,
        inputs: [ { good: "Sugar", quantity: 5.1 } ],
        output: { good: "Rum", quantity: 3.5 },
        profit_per_workday: 19.45
    },
    // Tannery
    {
        id: "tannery_normal",
        name: "Tannery - Normal Mode",
        workers: 5,
        inputs: [ { good: "Hides", quantity: 3.65 } ],
        output: { good: "Leather", quantity: 1.825 },
        profit_per_workday: 7.1175
    },
    {
        id: "tannery_chrome_tanning",
        name: "Tannery - Chrome Tanning",
        workers: 5,
        inputs: [ { good: "Hides", quantity: 2.725 } ],
        output: { good: "Leather", quantity: 1.825 },
        profit_per_workday: 7.81125
    },
    // Cannery
    {
        id: "cannery_pineapple",
        name: "Cannery - Pineapple",
        workers: 8,
        inputs: [ { good: "Pineapple", quantity: 2.85 } ],
        output: { good: "Canned Goods", quantity: 2.5 },
        profit_per_workday: 7.44
    },
    {
        id: "cannery_fish",
        name: "Cannery - Fish",
        workers: 8,
        inputs: [ { good: "Fish", quantity: 1.875 } ],
        output: { good: "Canned Goods", quantity: 2.5 },
        profit_per_workday: 7.125
    },
    {
        id: "cannery_meat",
        name: "Cannery - Meat",
        workers: 8,
        inputs: [ { good: "Meat", quantity: 1.7 } ],
        output: { good: "Canned Goods", quantity: 2.5 },
        profit_per_workday: 8.09
    },
    {
        id: "cannery_coffee",
        name: "Cannery - Coffee",
        workers: 8,
        inputs: [ { good: "Coffee", quantity: 1.15 } ],
        output: { good: "Canned Goods", quantity: 2.52 }, // Note: output quantity is 2.52 here
        profit_per_workday: 7.726
    },
    // Creamery
    {
        id: "creamery_dextrorotatory",
        name: "Creamery - Dextrorotatory Lactic Acid",
        workers: 4,
        inputs: [ { good: "Milk", quantity: 2.25 } ],
        output: { good: "Cheese", quantity: 3.75 },
        profit_per_workday: 13.425
    },
    {
        id: "creamery_laevorotatory",
        name: "Creamery - Laevorotatory Acid",
        workers: 4,
        inputs: [ { good: "Milk", quantity: 2.3 } ],
        output: { good: "Cheese", quantity: 3.8 },
        profit_per_workday: 13.56
    },
    // Cigar Factory
    {
        id: "cigar_factory_normal",
        name: "Cigar Factory - Normal Mode",
        workers: 5,
        education_required: "HS",
        inputs: [ { good: "Tobacco", quantity: 6.3 } ],
        output: { good: "Cigars", quantity: 2.5 },
        profit_per_workday: 15.205
    },
    {
        id: "cigar_factory_climate_control",
        name: "Cigar Factory - Climate Control",
        workers: 5,
        education_required: "HS",
        inputs: [ { good: "Tobacco", quantity: 5.1 } ],
        output: { good: "Cigars", quantity: 2.5 },
        profit_per_workday: 17.785
    },
    // Shipyard
    {
        id: "shipyard_planks",
        name: "Shipyard - Planks",
        workers: 5,
        education_required: "HS",
        inputs: [ { good: "Planks", quantity: 7.75 } ],
        output: { good: "Boat", quantity: 1 },
        profit_per_workday: 15.725
    },
    {
        id: "shipyard_steel",
        name: "Shipyard - Steel",
        workers: 5,
        education_required: "HS",
        inputs: [ { good: "Steel", quantity: 3 } ],
        output: { good: "Boat", quantity: 1 },
        profit_per_workday: 16.4
    },
    {
        id: "shipyard_aluminium",
        name: "Shipyard - Aluminium",
        workers: 5,
        education_required: "HS",
        inputs: [ { good: "Aluminium", quantity: 6 } ],
        output: { good: "Boat", quantity: 1 },
        profit_per_workday: 16.4
    },
    // Steel Mill
    {
        id: "steel_mill",
        name: "Steel Mill",
        workers: 8,
        education_required: "HS",
        inputs: [ 
            { good: "Iron", quantity: 1.25 },
            { good: "Coal", quantity: 1.25 }
        ],
        output: { good: "Steel", quantity: 2.5 },
        profit_per_workday: 6.875
    },
    // Textile Mill
    {
        id: "textile_mill_cotton",
        name: "Textile Mill - Cotton",
        workers: 10,
        inputs: [ { good: "Cotton", quantity: 3.2 } ],
        output: { good: "Cloth", quantity: 2 },
        profit_per_workday: 6.08
    },
    {
        id: "textile_mill_wool",
        name: "Textile Mill - Wool",
        workers: 10,
        inputs: [ { good: "Wool", quantity: 1.8 } ],
        output: { good: "Cloth", quantity: 2 },
        profit_per_workday: 6.17
    },
    {
        id: "textile_mill_unified_weaving",
        name: "Textile Mill - Unified Weaving Feeder",
        workers: 10,
        inputs: [
            { good: "Cotton", quantity: 0.8 },
            { good: "Wool", quantity: 0.45 }
        ],
        output: { good: "Cloth", quantity: 2.65 },
        profit_per_workday: 11.76
    },
    // --- INDUSTRY PART 2 ADDITIONS ---
    // Weapon Factory
    {
        id: "weapon_factory",
        name: "Weapon Factory",
        workers: 8,
        education_required: "HS",
        inputs: [
            { good: "Steel", quantity: 2.5 },
            { good: "Nickel", quantity: 1.5 }
        ],
        output: { good: "Weapons", quantity: 2 },
        profit_per_workday: 10.7
    },
    // Chocolate Factory
    {
        id: "chocolate_factory_sweet",
        name: "Chocolate Factory - Sweet Chocolate",
        workers: 5,
        inputs: [
            { good: "Cocoa", quantity: 2 },
            { good: "Sugar", quantity: 2.7 }
        ],
        output: { good: "Chocolate", quantity: 3 },
        profit_per_workday: 8.85
    },
    {
        id: "chocolate_factory_dark",
        name: "Chocolate Factory - Dark Chocolate",
        workers: 5,
        inputs: [ { good: "Cocoa", quantity: 4 } ],
        output: { good: "Chocolate", quantity: 3 },
        profit_per_workday: 8.4
    },
    // Furniture Factory
    {
        id: "furniture_factory_planks",
        name: "Furniture Factory - Planks",
        workers: 5,
        inputs: [ { good: "Planks", quantity: 7.8 } ],
        output: { good: "Furniture", quantity: 2 },
        profit_per_workday: 8.42
    },
    {
        id: "furniture_factory_plastics",
        name: "Furniture Factory - Plastics",
        workers: 5,
        inputs: [ { good: "Plastics", quantity: 6.5 } ],
        output: { good: "Furniture", quantity: 2 },
        profit_per_workday: 7.9
    },
    // Jewelry Workshop
    {
        id: "jewelry_workshop",
        name: "Jewelry Workshop",
        workers: 4,
        education_required: "HS",
        inputs: [ { good: "Gold", quantity: 1.5 } ],
        output: { good: "Jewelry", quantity: 1.525 },
        profit_per_workday: 11.6625
    },
    // Plastic Plant
    {
        id: "plastic_plant_standard_oil",
        name: "Plastic Plant - Standard Fabrication (Oil)",
        workers: 5,
        inputs: [ { good: "Oil", quantity: 0.8 } ],
        output: { good: "Plastics", quantity: 6.5 },
        profit_per_workday: 10.98
    },
    {
        id: "plastic_plant_standard_corn",
        name: "Plastic Plant - Standard Fabrication (Corn)",
        workers: 5,
        inputs: [ { good: "Corn", quantity: 2.7 } ],
        output: { good: "Plastics", quantity: 6.5 },
        profit_per_workday: 11.5
    },
    {
        id: "plastic_plant_high_speed_oil",
        name: "Plastic Plant - High Speed Fabrication (Oil)",
        workers: 5,
        inputs: [ { good: "Oil", quantity: 1.6 } ],
        output: { good: "Plastics", quantity: 11.5 },
        profit_per_workday: 18.06
    },
    {
        id: "plastic_plant_high_speed_corn",
        name: "Plastic Plant - High Speed Fabrication (Corn)",
        workers: 5,
        inputs: [ { good: "Corn", quantity: 5.45 } ],
        output: { good: "Plastics", quantity: 11.4 },
        profit_per_workday: 18.74
    },
    // Vehicle Factory
    {
        id: "vehicle_factory",
        name: "Vehicle Factory",
        workers: 10,
        education_required: "HS",
        inputs: [
            { good: "Steel", quantity: 2 },
            { good: "Rubber", quantity: 2.3 }
        ],
        output: { good: "Car", quantity: 1 },
        profit_per_workday: 10.24
    },
    // Electronics Factory
    {
        id: "electronics_factory",
        name: "Electronics Factory",
        workers: 8,
        education_required: "HS",
        inputs: [
            { good: "Plastics", quantity: 4.1 },
            { good: "Gold", quantity: 0.375 }
        ],
        output: { good: "Electronics", quantity: 2.75 },
        profit_per_workday: 12.915
    },
    // Fashion Company
    {
        id: "fashion_company_leather",
        name: "Fashion Company - Leather",
        workers: 4,
        inputs: [ { good: "Leather", quantity: 4 } ],
        output: { good: "Apparel", quantity: 3 },
        profit_per_workday: 18
    },
    {
        id: "fashion_company_cloth",
        name: "Fashion Company - Cloth",
        workers: 4,
        inputs: [ { good: "Cloth", quantity: 4.4 } ],
        output: { good: "Apparel", quantity: 3 },
        profit_per_workday: 16.72
    },
    {
        id: "fashion_company_leather_cloth",
        name: "Fashion Company - Leather and Cloth",
        workers: 4,
        inputs: [
            { good: "Cloth", quantity: 2 },
            { good: "Leather", quantity: 2 }
        ],
        output: { good: "Apparel", quantity: 3 },
        profit_per_workday: 18.4
    },
    // Pharmaceutical Company
    {
        id: "pharmaceutical_company_generics",
        name: "Pharmaceutical Company - Genuine Generics",
        workers: 6,
        education_required: "HS",
        inputs: [ { good: "Oil", quantity: 1.3 } ],
        output: { good: "Pharmaceuticals", quantity: 2.5 },
        profit_per_workday: 17.63
    },
    {
        id: "pharmaceutical_company_placebos",
        name: "Pharmaceutical Company - Powerful Placebos",
        workers: 6,
        education_required: "HS",
        inputs: [ { good: "Sugar", quantity: 2.5 } ],
        output: { good: "Pharmaceuticals", quantity: 2.5 },
        profit_per_workday: 21
    },
    // Juicery
    {
        id: "juicery_banana",
        name: "Juicery - Banana",
        workers: 5,
        inputs: [ { good: "Banana", quantity: 9.1 } ],
        output: { good: "Juice", quantity: 5 },
        profit_per_workday: 11.53
    },
    {
        id: "juicery_pineapple",
        name: "Juicery - Pineapple",
        workers: 5,
        inputs: [ { good: "Pineapple", quantity: 9.1 } ],
        output: { good: "Juice", quantity: 5 },
        profit_per_workday: 12.44
    },
    {
        id: "juicery_coconut",
        name: "Juicery - Coconut",
        workers: 5,
        inputs: [ { good: "Coconut", quantity: 7.5 } ],
        output: { good: "Juice", quantity: 5 },
        profit_per_workday: 14.625
    },
    {
        id: "juicery_banana_pineapple",
        name: "Juicery - Banana-Pineapple",
        workers: 5,
        inputs: [
            { good: "Banana", quantity: 4.55 },
            { good: "Pineapple", quantity: 4.55 }
        ],
        output: { good: "Juice", quantity: 5 },
        profit_per_workday: 11.985
    },
    {
        id: "juicery_banana_coconut",
        name: "Juicery - Banana-Coconut",
        workers: 5,
        inputs: [
            { good: "Banana", quantity: 4.55 },
            { good: "Coconut", quantity: 3.75 }
        ],
        output: { good: "Juice", quantity: 5 },
        profit_per_workday: 13.0775
    },
    {
        id: "juicery_coconut_pineapple",
        name: "Juicery - Coconut-Pineapple",
        workers: 5,
        inputs: [
            { good: "Coconut", quantity: 3.75 },
            { good: "Pineapple", quantity: 4.55 }
        ],
        output: { good: "Juice", quantity: 5 },
        profit_per_workday: 13.5325
    },
    // --- PLANTATIONS AND HYDROPONIC PLANTATIONS ---
    // Plantations
    {
        id: "plantation_corn",
        name: "Plantation - Corn",
        workers: 8,
        inputs: [],
        output: { good: "Corn", quantity: 2 },
        profit_per_workday: 4
    },
    {
        id: "plantation_banana",
        name: "Plantation - Banana",
        workers: 8,
        inputs: [],
        output: { good: "Banana", quantity: 2.5 },
        profit_per_workday: 4.25
    },
    {
        id: "plantation_pineapple",
        name: "Plantation - Pineapple",
        workers: 8,
        inputs: [],
        output: { good: "Pineapple", quantity: 2.5 },
        profit_per_workday: 4
    },
    {
        id: "plantation_sugar",
        name: "Plantation - Sugar",
        workers: 8,
        inputs: [],
        output: { good: "Sugar", quantity: 1.5 },
        profit_per_workday: 3.75
    },
    {
        id: "plantation_cocoa",
        name: "Plantation - Cocoa",
        workers: 8,
        inputs: [],
        output: { good: "Cocoa", quantity: 1 },
        profit_per_workday: 3.6
    },
    {
        id: "plantation_tobacco",
        name: "Plantation - Tobacco",
        workers: 8,
        inputs: [],
        output: { good: "Tobacco", quantity: 1.8 },
        profit_per_workday: 3.87
    },
    {
        id: "plantation_coffee",
        name: "Plantation - Coffee",
        workers: 8,
        inputs: [],
        output: { good: "Coffee", quantity: 1 },
        profit_per_workday: 3.8
    },
    {
        id: "plantation_cotton",
        name: "Plantation - Cotton",
        workers: 8,
        inputs: [],
        output: { good: "Cotton", quantity: 3.5 },
        profit_per_workday: 4.725
    },
    {
        id: "plantation_rubber",
        name: "Plantation - Rubber",
        workers: 8,
        inputs: [],
        output: { good: "Rubber", quantity: 1.2 },
        profit_per_workday: 3.84
    },
    // Hydroponic Plantations
    {
        id: "hydroponic_corn",
        name: "Hydroponic Plantation - Corn",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Corn", quantity: 4.5 },
        profit_per_workday: 9
    },
    {
        id: "hydroponic_banana",
        name: "Hydroponic Plantation - Banana",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Banana", quantity: 5.65 },
        profit_per_workday: 9.605
    },
    {
        id: "hydroponic_pineapple",
        name: "Hydroponic Plantation - Pineapple",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Pineapple", quantity: 5.65 },
        profit_per_workday: 9.04
    },
    {
        id: "hydroponic_sugar",
        name: "Hydroponic Plantation - Sugar",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Sugar", quantity: 3.4 },
        profit_per_workday: 8.5
    },
    {
        id: "hydroponic_cocoa",
        name: "Hydroponic Plantation - Cocoa",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Cocoa", quantity: 2.25 },
        profit_per_workday: 8.1
    },
    {
        id: "hydroponic_tobacco",
        name: "Hydroponic Plantation - Tobacco",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Tobacco", quantity: 4 },
        profit_per_workday: 8.6
    },
    {
        id: "hydroponic_coffee",
        name: "Hydroponic Plantation - Coffee",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Coffee", quantity: 2.25 },
        profit_per_workday: 8.55
    },
    {
        id: "hydroponic_cotton",
        name: "Hydroponic Plantation - Cotton",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Cotton", quantity: 7.9 },
        profit_per_workday: 10.665
    },
    {
        id: "hydroponic_rubber",
        name: "Hydroponic Plantation - Rubber",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Rubber", quantity: 2.8 },
        profit_per_workday: 8.96
    },
    // --- RANCHES AND FACTORY RANCHES ---
    // Ranches
    {
        id: "ranch_cattle_meat",
        name: "Ranch - Cattle (Meat Focus)",
        workers: 4,
        inputs: [],
        output: { good: "Meat", quantity: 1.5 },
        profit_per_workday: 4.95 // Combined profit
    },
    {
        id: "ranch_cattle_hides",
        name: "Ranch - Cattle (Hides Focus)",
        workers: 4,
        inputs: [],
        output: { good: "Hides", quantity: 2 },
        profit_per_workday: 4.95 // Combined profit
    },
    {
        id: "ranch_sheep_wool",
        name: "Ranch - Sheep (Wool Focus)",
        workers: 4,
        inputs: [],
        output: { good: "Wool", quantity: 1.5 },
        profit_per_workday: 4.625 // Combined profit
    },
    {
        id: "ranch_sheep_milk",
        name: "Ranch - Sheep (Milk Focus)",
        workers: 4,
        inputs: [],
        output: { good: "Milk", quantity: 0.5 },
        profit_per_workday: 4.625 // Combined profit
    },
    {
        id: "ranch_crocodile",
        name: "Ranch - Crocodile",
        workers: 4,
        inputs: [],
        output: { good: "Leather", quantity: 0.8 },
        profit_per_workday: 4.32
    },
    {
        id: "ranch_pig",
        name: "Ranch - Pig",
        workers: 4,
        inputs: [],
        output: { good: "Meat", quantity: 2 },
        profit_per_workday: 4.6
    },
    {
        id: "ranch_llama",
        name: "Ranch - Llama",
        workers: 4,
        inputs: [],
        output: { good: "Wool", quantity: 2 },
        profit_per_workday: 4.7
    },
    {
        id: "ranch_goat",
        name: "Ranch - Goat",
        workers: 4,
        inputs: [],
        output: { good: "Milk", quantity: 2 },
        profit_per_workday: 4.4
    },
    // Factory Ranches
    {
        id: "factory_ranch_cattle_meat",
        name: "Factory Ranch - Cattle (Meat Focus)",
        workers: 4,
        inputs: [ { good: "Corn", quantity: 3 } ],
        output: { good: "Meat", quantity: 6 },
        profit_per_workday: 13.8 // Combined profit
    },
    {
        id: "factory_ranch_cattle_hides",
        name: "Factory Ranch - Cattle (Hides Focus)",
        workers: 4,
        inputs: [ { good: "Corn", quantity: 3 } ],
        output: { good: "Hides", quantity: 8 },
        profit_per_workday: 13.8 // Combined profit
    },
    {
        id: "factory_ranch_sheep_wool",
        name: "Factory Ranch - Sheep (Wool Focus)",
        workers: 4,
        inputs: [ { good: "Corn", quantity: 3 } ],
        output: { good: "Wool", quantity: 6 },
        profit_per_workday: 12.5 // Combined profit
    },
    {
        id: "factory_ranch_sheep_milk",
        name: "Factory Ranch - Sheep (Milk Focus)",
        workers: 4,
        inputs: [ { good: "Corn", quantity: 3 } ],
        output: { good: "Milk", quantity: 2 },
        profit_per_workday: 12.5 // Combined profit
    },
    {
        id: "factory_ranch_crocodile",
        name: "Factory Ranch - Crocodile",
        workers: 4,
        inputs: [ { good: "Fish", quantity: 3.3 } ],
        output: { good: "Leather", quantity: 4 },
        profit_per_workday: 13.02
    },
    {
        id: "factory_ranch_pig",
        name: "Factory Ranch - Pig",
        workers: 4,
        inputs: [ { good: "Corn", quantity: 4 } ],
        output: { good: "Meat", quantity: 9 },
        profit_per_workday: 12.7
    },
    {
        id: "factory_ranch_llama",
        name: "Factory Ranch - Llama",
        workers: 4,
        inputs: [ { good: "Corn", quantity: 3 } ],
        output: { good: "Wool", quantity: 8 },
        profit_per_workday: 12.8
    },
    {
        id: "factory_ranch_goat",
        name: "Factory Ranch - Goat",
        workers: 4,
        inputs: [ { good: "Corn", quantity: 2 } ],
        output: { good: "Milk", quantity: 8 },
        profit_per_workday: 13.6
    },
    // --- MINES AND AUTOMATED MINES ---
    // Mines
    {
        id: "mine_coal",
        name: "Mine - Coal",
        workers: 5,
        inputs: [],
        output: { good: "Coal", quantity: 2 },
        profit_per_workday: 4.8
    },
    {
        id: "mine_iron",
        name: "Mine - Iron",
        workers: 5,
        inputs: [],
        output: { good: "Iron", quantity: 2 },
        profit_per_workday: 5
    },
    {
        id: "mine_gold",
        name: "Mine - Gold",
        workers: 5,
        inputs: [],
        output: { good: "Gold", quantity: 0.6 },
        profit_per_workday: 5.4
    },
    {
        id: "mine_uranium",
        name: "Mine - Uranium",
        workers: 5,
        inputs: [],
        output: { good: "Uranium", quantity: 0.4 },
        profit_per_workday: 4.8
    },
    {
        id: "mine_aluminium",
        name: "Mine - Aluminium",
        workers: 5,
        inputs: [],
        output: { good: "Aluminium", quantity: 2 },
        profit_per_workday: 5.2
    },
    {
        id: "mine_nickel",
        name: "Mine - Nickel",
        workers: 5,
        inputs: [],
        output: { good: "Nickel", quantity: 1.2 },
        profit_per_workday: 5.04
    },
    // Automated Mines
    {
        id: "automated_mine_coal",
        name: "Automated Mine - Coal",
        workers: 3,
        inputs: [],
        output: { good: "Coal", quantity: 6.7 },
        profit_per_workday: 16.08
    },
    {
        id: "automated_mine_iron",
        name: "Automated Mine - Iron",
        workers: 3,
        inputs: [],
        output: { good: "Iron", quantity: 6.7 },
        profit_per_workday: 16.75
    },
    {
        id: "automated_mine_gold",
        name: "Automated Mine - Gold",
        workers: 3,
        inputs: [],
        output: { good: "Gold", quantity: 2 },
        profit_per_workday: 18
    },
    {
        id: "automated_mine_uranium",
        name: "Automated Mine - Uranium",
        workers: 3,
        inputs: [],
        output: { good: "Uranium", quantity: 1.35 },
        profit_per_workday: 16.2
    },
    {
        id: "automated_mine_aluminium",
        name: "Automated Mine - Aluminium",
        workers: 3,
        inputs: [],
        output: { good: "Aluminium", quantity: 6.7 },
        profit_per_workday: 17.42
    },
    {
        id: "automated_mine_nickel",
        name: "Automated Mine - Nickel",
        workers: 3,
        inputs: [],
        output: { good: "Nickel", quantity: 4 },
        profit_per_workday: 16.8
    },
    // --- MISCELLANEOUS BUILDINGS ---
    {
        id: "fish_farm_fish",
        name: "Fish Farm - Fish",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Fish", quantity: 3.85 },
        profit_per_workday: 10.01
    },
    {
        id: "fish_farm_shellfish",
        name: "Fish Farm - Shellfish",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Shellfish", quantity: 3.85 },
        profit_per_workday: 10.78
    },
    {
        id: "oil_well",
        name: "Oil Well",
        workers: 4,
        education_required: "HS",
        inputs: [],
        output: { good: "Oil", quantity: 1 },
        profit_per_workday: 7.4
    },
    {
        id: "oil_rig",
        name: "Oil Rig",
        workers: 6,
        education_required: "HS",
        inputs: [],
        output: { good: "Oil", quantity: 1.25 },
        profit_per_workday: 9.25
    }
];

let currentProductionChain = []; // Initialize the core data structure


// Modify updateChainConfiguration to handle updates, especially for level 0
function updateChainConfiguration(level, buildingId, targetGood, requiredOutputQuantity, satisfiesInputForParent, isUpdate = false) {
    console.log("updateChainConfiguration called with:", { level, buildingId, targetGood, requiredOutputQuantity, satisfiesInputForParent, isUpdate });

    let stepIndex = currentProductionChain.findIndex(step => step.level === level && (isUpdate || step.targetGood === targetGood));
    
    // For isUpdate, we need a more specific match if multiple steps at the same level target the same good (e.g. for different parents)
    if (isUpdate && stepIndex !== -1 && satisfiesInputForParent) {
         stepIndex = currentProductionChain.findIndex(step => 
            step.level === level && 
            step.targetGood === targetGood && 
            JSON.stringify(step.satisfiesInputForParent) === JSON.stringify(satisfiesInputForParent)
        );
    }


    if (stepIndex !== -1 && isUpdate) { // Update existing step (primarily for setting buildingId or quantity for level 0)
        currentProductionChain[stepIndex].buildingId = buildingId !== undefined ? buildingId : currentProductionChain[stepIndex].buildingId;
        currentProductionChain[stepIndex].requiredOutputQuantity = requiredOutputQuantity !== undefined ? requiredOutputQuantity : currentProductionChain[stepIndex].requiredOutputQuantity;
        // satisfiesInputForParent should ideally not change on update, but if it does:
        currentProductionChain[stepIndex].satisfiesInputForParent = satisfiesInputForParent !== undefined ? satisfiesInputForParent : currentProductionChain[stepIndex].satisfiesInputForParent;
        console.log(`Updated step at level ${level}:`, currentProductionChain[stepIndex]);
    } else if (stepIndex === -1) { // Add new step
        const newStep = {
            level, buildingId, targetGood, requiredOutputQuantity, satisfiesInputForParent,
            numBuildings: 0, workersForThisStep: 0, inputsForThisStep: [], profitForThisStep: 0
        };
        currentProductionChain.push(newStep);
        currentProductionChain.sort((a, b) => a.level - b.level); 
    } else { // Ambiguous case or re-defining a new step at an existing slot
        console.warn("Step already exists or ambiguous update for new step at level " + level + " for " + targetGood + ". Overwriting/Updating specific properties.");
        currentProductionChain[stepIndex] = {
             ...currentProductionChain[stepIndex], // keep old calculated values if any
             buildingId, targetGood, requiredOutputQuantity, satisfiesInputForParent, // update definitions
        };
    }
    console.log("currentProductionChain state:", currentProductionChain);
}


function displayEndProductSelection() {
    const uniqueOutputGoods = new Set();
    productionChains.forEach(chain => {
        if (chain.output && chain.output.good) {
            uniqueOutputGoods.add(chain.output.good);
        }
    });

    const selectionDiv = document.getElementById('end-product-selection-buttons');
    if (!selectionDiv) {
        console.error("End product selection div not found!");
        return;
    }
    selectionDiv.innerHTML = ''; 
    document.getElementById('chain-steps-container').innerHTML = ''; // Clear subsequent steps too
    document.getElementById('calculation-results-area').innerHTML = ''; // Clear old results

    uniqueOutputGoods.forEach(goodName => {
        const button = document.createElement('button');
        button.textContent = goodName;
        button.style.margin = "5px";
        button.addEventListener('click', () => {
            console.log(`End product selected: ${goodName}`);
            currentProductionChain = []; 
            const quantityInput = document.getElementById('final-product-quantity');
            const desiredQuantity = parseInt(quantityInput.value) || 1;
            
            updateChainConfiguration(0, null, goodName, desiredQuantity, null, false); 
            
            document.getElementById('chain-steps-container').innerHTML = ''; 
            displayProductionMethodsForGood(goodName, 0, null); 
        });
        selectionDiv.appendChild(button);
    });
}

function displayProductionMethodsForGood(goodName, level, parentRequirementId) {
    console.log(`Displaying production methods for ${goodName} at level ${level}, parentReqId: ${JSON.stringify(parentRequirementId)}`);
    const chainStepsContainer = document.getElementById('chain-steps-container');

    let containerIdSuffix;
    if (parentRequirementId) {
        const pGood = (parentRequirementId.parentGood || 'unknownParentGood').replace(/\W/g, '_');
        const pBuildingId = (parentRequirementId.parentBuildingId || 'unknownParentBuilding').replace(/\W/g, '_');
        const targetGoodSanitized = goodName.replace(/\W/g, '_');
        containerIdSuffix = `${pBuildingId}_to_${pGood}_for_${targetGoodSanitized}`;
    } else {
        containerIdSuffix = goodName.replace(/\W/g, '_'); 
    }
    let levelContainerId = `level-${level}-choices-for-${containerIdSuffix}`;
    
    let levelContainer = document.getElementById(levelContainerId);
    if (!levelContainer) {
        levelContainer = document.createElement('div');
        levelContainer.id = levelContainerId;
        levelContainer.style.border = "1px solid #ccc";
        levelContainer.style.padding = "10px";
        levelContainer.style.marginTop = "10px";
        
        if (level === 0) {
            chainStepsContainer.appendChild(levelContainer);
        } else if (parentRequirementId && parentRequirementId.parentBuildingId) {
            let parentContainerDOMId;
            let parentParentSuffix = '';
            if(parentRequirementId.parentParentRequirementId){
                 const ppGood = (parentRequirementId.parentParentRequirementId.parentGood || 'unknownGrandParentGood').replace(/\W/g, '_');
                 const ppBuildingId = (parentRequirementId.parentParentRequirementId.parentBuildingId || 'unknownGrandParentBuilding').replace(/\W/g, '_');
                 parentParentSuffix = `${ppBuildingId}_to_${ppGood}_for_`;
            }
            const parentGoodForDOM = (parentRequirementId.parentGood || 'unknownParentGood').replace(/\W/g, '_');
            parentContainerDOMId = `level-${level-1}-choices-for-${parentParentSuffix}${parentGoodForDOM}`;

            const parentDiv = document.getElementById(parentContainerDOMId);
            if (parentDiv) {
                parentDiv.appendChild(levelContainer);
            } else {
                 console.warn(`Parent div ${parentContainerDOMId} not found for level ${level}. Appending to main container.`);
                 chainStepsContainer.appendChild(levelContainer); 
            }
        } else {
             chainStepsContainer.appendChild(levelContainer); 
        }
    }
    levelContainer.innerHTML = ''; 

    const allChoiceContainers = chainStepsContainer.querySelectorAll('div[id^="level-"]');
    allChoiceContainers.forEach(container => {
        const containerLevel = parseInt(container.id.split('-')[1]);
        if (containerLevel > level) { 
             if(container.id.startsWith(levelContainerId) && container.id !== levelContainerId){ 
                container.remove();
             } else if (!container.id.startsWith(levelContainerId.substring(0, levelContainerId.lastIndexOf(`-for-`)+5 ) )) {
             } else if (containerLevel > level) {
                 container.remove();
             }
        }
    });


    const promptText = `Select method to produce ${goodName} ${parentRequirementId ? `(as input for ${productionChains.find(pc => pc.id === parentRequirementId.parentBuildingId)?.name || parentRequirementId.parentBuildingId} making ${parentRequirementId.parentGood})` : '(Final Product)'}`;
    const prompt = document.createElement('h3');
    prompt.textContent = promptText;
    levelContainer.appendChild(prompt);

    const matchingChains = productionChains.filter(chain => chain.output && chain.output.good === goodName);

    if (matchingChains.length === 0) {
        levelContainer.innerHTML += `<p style="color:orange;">No direct production method found for ${goodName}. This will be an unmet demand unless imported.</p>`;
        updateChainConfiguration(level, null, goodName, 
            currentProductionChain.find(s => s.level === level && s.targetGood === goodName && JSON.stringify(s.satisfiesInputForParent) === JSON.stringify(parentRequirementId))?.requiredOutputQuantity || 0, 
            parentRequirementId, true);
        return;
    }

    matchingChains.forEach(chainEntry => {
        const button = document.createElement('button');
        button.textContent = chainEntry.name;
        if (chainEntry.education_required) {
            button.textContent += ` (${chainEntry.education_required})`;
        }
        button.style.margin = "5px";
        button.addEventListener('click', () => {
            console.log(`Selected method for ${goodName} (L${level}): ${chainEntry.name} (ID: ${chainEntry.id})`);
            
            let requiredQtyForThisStep;
            const stepEntry = currentProductionChain.find(s => s.level === level && s.targetGood === goodName && JSON.stringify(s.satisfiesInputForParent) === JSON.stringify(parentRequirementId));

            if (level === 0) {
                const quantityInput = document.getElementById('final-product-quantity');
                requiredQtyForThisStep = (quantityInput) ? (parseInt(quantityInput.value) || 1) : 1;
            } else {
                requiredQtyForThisStep = stepEntry ? stepEntry.requiredOutputQuantity : 0; 
            }

            updateChainConfiguration(level, chainEntry.id, goodName, requiredQtyForThisStep, parentRequirementId, true);
            
            currentProductionChain = currentProductionChain.filter(step => {
                if (step.level <= level) return true; 
                let isDescendantOfThisSpecificPath = false;
                let temp = step;
                while(temp && temp.level > level) {
                    if (temp.level === level + 1 && temp.satisfiesInputForParent && temp.satisfiesInputForParent.parentBuildingId === chainEntry.id && temp.satisfiesInputForParent.parentGood === goodName) {
                        isDescendantOfThisSpecificPath = true;
                        break;
                    }
                    if (!temp.satisfiesInputForParent) {isDescendantOfThisSpecificPath = false; break;} 
                    const parentStepData = currentProductionChain.find(s => s.level === temp.level - 1 && s.buildingId === temp.satisfiesInputForParent.parentBuildingId);
                    if (parentStepData) temp = parentStepData; else break;
                }
                 return false; 
            });


            if (chainEntry.inputs && chainEntry.inputs.length > 0) {
                chainEntry.inputs.forEach(input => {
                    const nextLevel = level + 1;
                    const inputRequirementDetails = { 
                        good: input.good, 
                        parentBuildingId: chainEntry.id, 
                        parentGood: goodName, 
                        parentParentRequirementId: parentRequirementId 
                    };
                    updateChainConfiguration(nextLevel, null, input.good, 0, inputRequirementDetails, false);
                    displayProductionMethodsForGood(input.good, nextLevel, inputRequirementDetails);
                });
            } else {
                 console.log(`${chainEntry.name} has no further inputs. End of this branch.`);
            }
        });
        levelContainer.appendChild(button);
    });
}


function calculateFullChain() {
    console.log("Calculating full chain...", currentProductionChain);
    const resultsArea = document.getElementById('calculation-results-area');

    if (currentProductionChain.length === 0 || !currentProductionChain[0].buildingId) {
        resultsArea.innerHTML = '<h2>Calculation Results:</h2><p>Please select the final product and its production method first.</p>';
        return;
    }

    currentProductionChain.sort((a, b) => a.level - b.level);

    const finalProductStep = currentProductionChain.find(step => step.level === 0);
    if (finalProductStep) {
        const quantityInput = document.getElementById('final-product-quantity');
        finalProductStep.requiredOutputQuantity = parseInt(quantityInput.value) || 1;
    } else {
        resultsArea.innerHTML = '<h2>Calculation Results:</h2><p>Error: Final product step (level 0) not found.</p>';
        return;
    }
    
    for (let currentLevel = 0; currentLevel <= Math.max(...currentProductionChain.map(s => s.level)); currentLevel++) {
        const stepsAtThisLevel = currentProductionChain.filter(step => step.level === currentLevel);

        for (const step of stepsAtThisLevel) {
            if (!step.buildingId) {
                step.numBuildings = 0;
                step.workersForThisStep = 0;
                step.profitForThisStep = 0;
                step.inputsForThisStep = []; 
                console.warn(`Skipping calculation for ${step.targetGood} at level ${step.level} - no building selected.`);
                continue; 
            }

            const chainEntry = productionChains.find(c => c.id === step.buildingId);
            if (!chainEntry) {
                console.error(`Error: Building data for ID ${step.buildingId} not found.`);
                step.numBuildings = 0; 
                continue;
            }

            if (chainEntry.output.quantity <= 0) { 
                step.numBuildings = step.requiredOutputQuantity > 0 ? Infinity : 0; 
            } else {
                step.numBuildings = Math.ceil(step.requiredOutputQuantity / chainEntry.output.quantity);
            }
            
            step.workersForThisStep = step.numBuildings * chainEntry.workers;
            step.profitForThisStep = step.numBuildings * (chainEntry.profit_per_workday || 0);
            step.inputsForThisStep = (chainEntry.inputs || []).map(inputDef => ({
                good: inputDef.good,
                quantity: step.numBuildings * inputDef.quantity 
            }));

            step.inputsForThisStep.forEach(calculatedInput => {
                const childSteps = currentProductionChain.filter(cs => 
                    cs.level === step.level + 1 &&
                    cs.targetGood === calculatedInput.good &&
                    cs.satisfiesInputForParent &&
                    cs.satisfiesInputForParent.parentBuildingId === step.buildingId &&
                    cs.satisfiesInputForParent.good === calculatedInput.good // This 'good' in satisfiesInputForParent is the 'targetGood' of the child
                );

                if (childSteps.length > 0) {
                    childSteps.forEach(childStep => {
                        childStep.requiredOutputQuantity = calculatedInput.quantity; 
                        console.log(`Set required quantity for L${childStep.level} ${childStep.targetGood} (for ${step.buildingId}) to ${childStep.requiredOutputQuantity}`);
                    });
                } else {
                    console.log(`No child step found to satisfy input ${calculatedInput.good} for ${step.buildingId} at level ${step.level + 1}`);
                }
            });
        }
    }

    console.log("Chain after calculation:", currentProductionChain);
    displayChainResults(); 
}

function displayChainResults() {
    const resultsArea = document.getElementById('calculation-results-area');
    resultsArea.innerHTML = '<h2>Calculation Results:</h2>'; // Clear previous results
    resultsArea.innerHTML += '<p><em>(All production figures and requirements are calculated on a "per day" basis)</em></p>'; // ADDED THIS LINE

    if (currentProductionChain.length === 0) {
        resultsArea.innerHTML += "<p>No chain configured or calculated yet.</p>";
        return;
    }

    currentProductionChain.sort((a, b) => a.level - b.level);

    resultsArea.innerHTML += "<h3>Individual Step Details:</h3>";
    currentProductionChain.forEach(step => {
        const chainEntry = productionChains.find(c => c.id === step.buildingId);
        let stepHtml = `<div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">`;
        stepHtml += `<h4>Level ${step.level}: Producing ${step.targetGood} using ${chainEntry ? chainEntry.name : 'N/A - Method not selected'}</h4>`;

        if (!chainEntry) {
            stepHtml += `<p style="color:red;">Production method not selected for this step. Required: ${step.requiredOutputQuantity.toFixed(2)} ${step.targetGood}</p>`;
            stepHtml += `</div>`;
            resultsArea.innerHTML += stepHtml;
            return; 
        }

        stepHtml += `<p><strong>Building:</strong> ${chainEntry.name}</p>`;
        stepHtml += `<p><strong>Target Output:</strong> ${step.requiredOutputQuantity.toFixed(2)} ${step.targetGood}</p>`;
        stepHtml += `<p><strong>Buildings Needed:</strong> ${step.numBuildings.toFixed(0)}</p>`; 
        stepHtml += `<p><strong>Workers for this step:</strong> ${step.workersForThisStep.toFixed(0)}</p>`;
        
        if (step.inputsForThisStep && step.inputsForThisStep.length > 0) {
            stepHtml += "<p><strong>Inputs for this step (total):</strong></p><ul>";
            step.inputsForThisStep.forEach(input => {
                stepHtml += `<li>${input.quantity.toFixed(2)} ${input.good}</li>`;
            });
            stepHtml += "</ul>";
        } else {
            stepHtml += "<p><strong>Inputs for this step:</strong> None</p>";
        }
        stepHtml += `<p><strong>Profit for this step:</strong> $${step.profitForThisStep.toFixed(2)}</p>`;
        stepHtml += `</div>`;
        resultsArea.innerHTML += stepHtml;
    });

    resultsArea.innerHTML += "<hr><h3>Overall Chain Summary:</h3>";
    const buildingTotals = {};
    let totalWorkers = 0;
    let totalProfit = 0;
    const rawMaterialInputs = new Map(); 

    currentProductionChain.forEach(step => {
        if (step.buildingId) { 
            const chainEntry = productionChains.find(c => c.id === step.buildingId);
            if (chainEntry) {
                buildingTotals[chainEntry.name] = (buildingTotals[chainEntry.name] || 0) + step.numBuildings;
            }
            totalWorkers += step.workersForThisStep;
            totalProfit += step.profitForThisStep;

            (step.inputsForThisStep || []).forEach(input => {
                const isProducedInternally = currentProductionChain.some(s => 
                    s.buildingId && s.targetGood === input.good
                );
                if (!isProducedInternally) {
                    rawMaterialInputs.set(input.good, (rawMaterialInputs.get(input.good) || 0) + input.quantity);
                }
            });
        } else { 
            if(step.requiredOutputQuantity > 0){ 
                 rawMaterialInputs.set(step.targetGood, (rawMaterialInputs.get(step.targetGood) || 0) + step.requiredOutputQuantity);
            }
        }
    });

    resultsArea.innerHTML += "<p><strong>Total Buildings by Type:</strong></p><ul>";
    for (const [name, count] of Object.entries(buildingTotals)) {
        resultsArea.innerHTML += `<li>${name}: ${count.toFixed(0)}</li>`;
    }
    if (Object.keys(buildingTotals).length === 0) resultsArea.innerHTML += "<li>None</li>";
    resultsArea.innerHTML += "</ul>";

    resultsArea.innerHTML += `<p><strong>Total Workers for Entire Chain:</strong> ${totalWorkers.toFixed(0)}</p>`;

    resultsArea.innerHTML += "<p><strong>Total Raw Materials Needed (not produced in chain):</strong></p>";
    if (rawMaterialInputs.size > 0) {
        resultsArea.innerHTML += "<ul>";
        rawMaterialInputs.forEach((quantity, good) => {
            resultsArea.innerHTML += `<li>${good}: ${quantity.toFixed(2)}</li>`;
        });
        resultsArea.innerHTML += "</ul>";
    } else {
        resultsArea.innerHTML += "<p>None (all inputs are produced within the configured chain, or no inputs needed).</p>";
    }

    resultsArea.innerHTML += `<p><strong>Overall Total Profit for Chain:</strong> $${totalProfit.toFixed(2)}</p>`;
}


// --- OLD FUNCTIONS (no longer primary path, kept for reference or potential reuse if needed) ---
function calculateProduction() {
    console.log("calculateProduction function called (OLD UI)");
    // ... (rest of the old function, unchanged from previous step, but should not be called by new UI)
}
function populateProductionChainSelector() {
    // ... (rest of the old function, unchanged, but should not be called by new UI)
}
// --- END OF OLD FUNCTIONS ---

window.onload = function() {
    console.log("Window loaded. Setting up initial UI for chain selection.");
    displayEndProductSelection();
    
    const calcButton = document.getElementById('calculate-chain-button');
    if (calcButton) {
        calcButton.addEventListener('click', calculateFullChain);
    } else {
        console.error("Calculate Chain button not found!");
    }
};
