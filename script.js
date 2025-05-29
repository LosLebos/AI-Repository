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

function populateProductionChainSelector() {
    const selectElement = document.getElementById('production-chain-select');
    if (!selectElement) {
        console.error("Production chain select element not found!");
        return;
    }

    // Clear existing options before repopulating
    selectElement.innerHTML = ''; 

    productionChains.forEach(chain => {
        const option = document.createElement('option');
        option.value = chain.id;
        option.textContent = chain.name;
        if (chain.education_required) {
            option.textContent += ` (${chain.education_required})`;
        }
        selectElement.appendChild(option);
    });
}

function calculateProduction() {
    console.log("calculateProduction function called");

    const chainId = document.getElementById('production-chain-select').value;
    const workersInput = document.getElementById('workers-input').value;
    const desiredOutputInput = document.getElementById('desired-output-input').value;
    const resultDisplay = document.getElementById('result-display');

    if (!chainId) {
        resultDisplay.textContent = "Please select a production chain.";
        return;
    }

    const selectedChain = productionChains.find(chain => chain.id === chainId);
    if (!selectedChain) {
        resultDisplay.textContent = "Error: Selected production chain not found.";
        console.error("Selected chain ID not found in productionChains:", chainId);
        return;
    }

    const numWorkers = parseInt(workersInput);
    const numDesiredOutput = parseInt(desiredOutputInput);

    let baseOutputQuantity = selectedChain.output.quantity; // This is output per building per workday

    // --- Display Base Information ---
    let htmlResult = `<h3>Results for: ${selectedChain.name}</h3>`;
    htmlResult += `<p>Education Required: ${selectedChain.education_required || 'None'}</p>`;
    htmlResult += `<p>Workers per building: ${selectedChain.workers}</p>`;
    htmlResult += `<p>Base Output per building (per workday): ${baseOutputQuantity.toFixed(2)} ${selectedChain.output.good}</p>`;
    
    if (selectedChain.inputs.length > 0) {
        htmlResult += "<p>Base Inputs per building (per workday):</p><ul>";
        selectedChain.inputs.forEach(input => {
            htmlResult += `<li>${input.quantity.toFixed(2)} ${input.good}</li>`;
        });
        htmlResult += "</ul>";
    } else {
        htmlResult += "<p>Base Inputs per building (per workday): None</p>";
    }
    htmlResult += "<hr>"; // Separator before calculation details

    let calculationPerformed = false;
    let buildingsNeededForOutput = 0;
    let workersNeededForOutput = 0;
    let buildingsFromWorkers = 0;
    let outputFromWorkers = 0;

    // Calculation based on Desired Output (takes precedence if > 0)
    if (!isNaN(numDesiredOutput) && numDesiredOutput > 0) {
        htmlResult += `<h4>Calculation based on Desired Output:</h4>`;
        htmlResult += `<p>Target Desired Output: <strong>${numDesiredOutput.toFixed(2)} ${selectedChain.output.good}</strong></p>`;

        if (!selectedChain.output || baseOutputQuantity <= 0) {
            htmlResult += "<p>This chain does not produce output or output quantity is zero, so cannot calculate based on desired output.</p>";
        } else {
            buildingsNeededForOutput = Math.ceil(numDesiredOutput / baseOutputQuantity);
            workersNeededForOutput = buildingsNeededForOutput * selectedChain.workers;
            
            htmlResult += `<p>Buildings Needed: ${numDesiredOutput.toFixed(2)} (desired output) / ${baseOutputQuantity.toFixed(2)} (output per building) = <strong>${buildingsNeededForOutput}</strong> building(s) (rounded up)</p>`;
            htmlResult += `<p>Total Workers Needed: ${buildingsNeededForOutput} (buildings) * ${selectedChain.workers} (workers per building) = <strong>${workersNeededForOutput}</strong> worker(s)</p>`;
            
            if(selectedChain.inputs.length > 0) {
                htmlResult += `<p>Total Inputs Needed (per workday):</p><ul>`;
                selectedChain.inputs.forEach(input => {
                    let totalInput = buildingsNeededForOutput * input.quantity;
                    htmlResult += `<li>${input.good}: ${buildingsNeededForOutput} (buildings) * ${input.quantity.toFixed(2)} (input per building) = <strong>${totalInput.toFixed(2)}</strong></li>`;
                });
                htmlResult += `</ul>`;
            }
        }
        calculationPerformed = true;
    } 
    // Calculation based on Available Workers (if desired output is not specified or is 0)
    else if (!isNaN(numWorkers) && numWorkers >= 0) {
        htmlResult += `<h4>Calculation based on Available Workers:</h4>`;
        htmlResult += `<p>Available Workers: <strong>${numWorkers}</strong></p>`;

        if (selectedChain.workers === 0) {
            htmlResult += `<p>The ${selectedChain.name} does not require workers directly. Cannot calculate buildings based on workers.</p>`;
            // If no workers are needed, one building is assumed if no other input is given.
            // This case might need refinement based on game mechanics for workerless buildings.
             buildingsFromWorkers = (numWorkers === 0 && numDesiredOutput === 0) ? 1 : 0; 
             if (buildingsFromWorkers > 0) {
                htmlResult += `<p>Assuming <strong>1</strong> building as no workers are required and no other input was specified.</p>`;
                outputFromWorkers = buildingsFromWorkers * baseOutputQuantity;
                htmlResult += `<p>Total Output: ${buildingsFromWorkers} (building) * ${baseOutputQuantity.toFixed(2)} (output per building) = <strong>${outputFromWorkers.toFixed(2)} ${selectedChain.output.good}</strong></p>`;
                 if(selectedChain.inputs.length > 0 && buildingsFromWorkers > 0) {
                    htmlResult += `<p>Total Inputs Needed (per workday):</p><ul>`;
                    selectedChain.inputs.forEach(input => {
                         let totalInput = buildingsFromWorkers * input.quantity;
                        htmlResult += `<li>${input.good}: ${buildingsFromWorkers} (building) * ${input.quantity.toFixed(2)} (input per building) = <strong>${totalInput.toFixed(2)}</strong></li>`;
                    });
                    htmlResult += `</ul>`;
                }
             }
        } else {
            buildingsFromWorkers = Math.floor(numWorkers / selectedChain.workers);
            outputFromWorkers = buildingsFromWorkers * baseOutputQuantity;
            
            htmlResult += `<p>Buildings Possible: ${numWorkers} (available workers) / ${selectedChain.workers} (workers per building) = <strong>${buildingsFromWorkers}</strong> building(s) (rounded down)</p>`;
            htmlResult += `<p>Total Output: ${buildingsFromWorkers} (buildings) * ${baseOutputQuantity.toFixed(2)} (output per building) = <strong>${outputFromWorkers.toFixed(2)} ${selectedChain.output.good}</strong></p>`;
            
            if(selectedChain.inputs.length > 0 && buildingsFromWorkers > 0) {
                htmlResult += `<p>Total Inputs Needed (per workday):</p><ul>`;
                selectedChain.inputs.forEach(input => {
                    let totalInput = buildingsFromWorkers * input.quantity;
                    htmlResult += `<li>${input.good}: ${buildingsFromWorkers} (buildings) * ${input.quantity.toFixed(2)} (input per building) = <strong>${totalInput.toFixed(2)}</strong></li>`;
                });
                htmlResult += `</ul>`;
            }
        }
        calculationPerformed = true;
    }

    if (!calculationPerformed) {
        resultDisplay.innerHTML = htmlResult + "<p>Please enter a valid number of workers or a desired output quantity to see detailed calculations.</p>";
        return;
    }

    htmlResult += "<hr>"; // Separator before profit

    if (selectedChain.profit_per_workday !== undefined) {
        let totalProfit = 0;
        let relevantBuildings = 0;

        if (!isNaN(numDesiredOutput) && numDesiredOutput > 0 && baseOutputQuantity > 0) {
            relevantBuildings = buildingsNeededForOutput;
        } else if (!isNaN(numWorkers) && numWorkers >= 0) {
             if (selectedChain.workers === 0 && numWorkers === 0 && numDesiredOutput === 0) {
                relevantBuildings = 1; // For workerless buildings when no other input
            } else if (selectedChain.workers > 0) {
                relevantBuildings = buildingsFromWorkers;
            }
        }
        
        if (relevantBuildings > 0) {
            totalProfit = relevantBuildings * selectedChain.profit_per_workday;
            htmlResult += `<p>Estimated Total Profit (per workday, for these buildings): <strong>$${totalProfit.toFixed(2)}</strong></p>`;
        } else if (calculationPerformed) { // Only show if a calculation attempt was made
             htmlResult += `<p>Estimated Total Profit (per workday): $0.00 (No buildings are active based on input)</p>`;
        }
    } else {
        htmlResult += "<p>Profit data not available for this chain.</p>";
    }

    resultDisplay.innerHTML = htmlResult;
}

window.onload = function() {
    console.log("Window loaded. Populating production chain selector and attaching event listeners.");
    populateProductionChainSelector();

    const calculateButton = document.getElementById('calculate-button');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculateProduction);
    } else {
        console.error("Calculate button not found!");
    }

    const efficiencyToggleElement = document.getElementById('efficiency-toggle');
    if (efficiencyToggleElement && efficiencyToggleElement.parentElement) {
        efficiencyToggleElement.parentElement.style.display = 'none';
        console.log("Old efficiency toggle hidden as it's no longer used by the new data structure.");
    }
};
