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


function updateChainConfiguration(level, buildingId, targetGood, requiredOutputQuantity, satisfiesInputForParent, isUpdate = false) {
    console.log("updateChainConfiguration called with:", { level, buildingId, targetGood, requiredOutputQuantity, satisfiesInputForParent, isUpdate });

    let stepIndex = -1;
    // For isUpdate, we need a more specific match if multiple steps at the same level target the same good (e.g. for different parents)
    // Also, when adding a new step (isUpdate = false), we still want to find if a placeholder for this exact step already exists.
    stepIndex = currentProductionChain.findIndex(step => 
        step.level === level && 
        step.targetGood === targetGood && 
        JSON.stringify(step.satisfiesInputForParent) === JSON.stringify(satisfiesInputForParent)
    );

    if (stepIndex !== -1) { // Existing step found (either for update or it's a re-selection for a new step placeholder)
        const existingStep = currentProductionChain[stepIndex];
        existingStep.buildingId = buildingId !== undefined ? buildingId : existingStep.buildingId; // Update buildingId if provided
        existingStep.requiredOutputQuantity = requiredOutputQuantity !== undefined ? requiredOutputQuantity : existingStep.requiredOutputQuantity;
        // Ensure all new fields are present and old ones are handled/removed
        existingStep.isHighSchoolWorkers = existingStep.isHighSchoolWorkers || false;
        existingStep.inputsForThisStep = existingStep.inputsForThisStep || [];
        existingStep.profitForThisStep = existingStep.profitForThisStep || 0;
        
        existingStep.workersNeededForStepOutput = existingStep.workersNeededForStepOutput || 0;
        existingStep.numBuildingsForStep = existingStep.numBuildingsForStep || 0;
        existingStep.maxOutputIfFullyStaffed = existingStep.maxOutputIfFullyStaffed || 0;
        existingStep.buildingCapacityUtilization = existingStep.buildingCapacityUtilization || 0;

        // Remove old fields if they exist
        delete existingStep.numBuildings;
        delete existingStep.originalWorkersAtFullEfficiency;
        delete existingStep.actualOutputAtFullEfficiency;
        delete existingStep.requiredEfficiencyPercent;
        delete existingStep.adjustedWorkersForTargetOutput;
        
        console.log(`Updated/Reconfirmed step at level ${level}:`, existingStep);

    } else { // Add new step, as no exact placeholder was found or it's a genuinely new branch
        const newStep = {
            level,
            buildingId, // Can be null initially if only good is selected
            targetGood,
            requiredOutputQuantity,
            satisfiesInputForParent,
            inputsForThisStep: [],
            profitForThisStep: 0, 
            isHighSchoolWorkers: false, 

            // NEW/RENAMED STRUCTURE with defaults
            workersNeededForStepOutput: 0,
            numBuildingsForStep: 0,
            maxOutputIfFullyStaffed: 0,
            buildingCapacityUtilization: 0
        };
        currentProductionChain.push(newStep);
        currentProductionChain.sort((a, b) => a.level - b.level); 
        console.log(`Added new step:`, newStep);
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
    document.getElementById('chain-steps-container').innerHTML = ''; 
    document.getElementById('calculation-results-area').innerHTML = ''; 

    uniqueOutputGoods.forEach(goodName => {
        const button = document.createElement('button');
        button.textContent = goodName;
        button.className = "btn btn-outline-secondary btn-md m-1"; 
        button.addEventListener('click', (event) => { 
            console.log(`End product selected: ${goodName}`);
            
            const allEndProductButtons = selectionDiv.querySelectorAll('button');
            allEndProductButtons.forEach(btn => {
                btn.className = "btn btn-outline-secondary btn-md m-1";
            });
            event.currentTarget.className = "btn btn-success btn-md m-1"; 

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

    if (levelContainer) {
        levelContainer.innerHTML = ''; 
    } else {
        levelContainer = document.createElement('div');
        levelContainer.id = levelContainerId;
        levelContainer.className = 'card mt-3'; 
        
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

            const parentCard = document.getElementById(parentContainerDOMId);

            if (parentCard) {
                let parentCardBody = parentCard.querySelector('.card-body');
                if (!parentCardBody) { 
                    console.warn("Parent card body not found, creating one for parent: ", parentCard.id);
                    parentCardBody = document.createElement('div');
                    parentCardBody.className = 'card-body';
                    parentCard.appendChild(parentCardBody);
                }
                parentCardBody.appendChild(levelContainer);
            } else {
                 console.warn(`Parent card div ${parentContainerDOMId} not found for level ${level}. Appending to main container.`);
                 chainStepsContainer.appendChild(levelContainer); 
            }
        } else {
             chainStepsContainer.appendChild(levelContainer); 
        }
    }
    
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    const promptEl = document.createElement('h5'); 
    promptEl.className = 'mb-0'; 
    
    let promptTextVal = `Select method to produce ${goodName}`;
    if (parentRequirementId) {
        const parentBuildingInfo = productionChains.find(pc => pc.id === parentRequirementId.parentBuildingId);
        const parentBuildingName = parentBuildingInfo ? parentBuildingInfo.name : parentRequirementId.parentBuildingId;
        promptTextVal += ` (as input for ${parentBuildingName} making ${parentRequirementId.parentGood})`;
    } else {
        promptTextVal += ' (Final Product)';
    }
    promptEl.textContent = promptTextVal;
    cardHeader.appendChild(promptEl);
    levelContainer.appendChild(cardHeader);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    levelContainer.appendChild(cardBody);
    
    const allChoiceContainers = chainStepsContainer.querySelectorAll('div[id^="level-"]');
    allChoiceContainers.forEach(container => {
        const containerLevel = parseInt(container.id.split('-')[1]);
        if (containerLevel > level) { 
            let currentAncestor = container.parentElement;
            let isDescendant = false;
            while(currentAncestor && currentAncestor !== chainStepsContainer) {
                if (currentAncestor.id === levelContainerId) {
                    isDescendant = true;
                    break;
                }
                currentAncestor = currentAncestor.parentElement;
            }
            if (isDescendant || container.id.startsWith(levelContainerId + "_")) { 
                 container.remove();
            }
        }
    });


    const matchingChains = productionChains.filter(chain => chain.output && chain.output.good === goodName);

    if (matchingChains.length === 0) {
        cardBody.innerHTML = `<p class="text-muted">No direct production method found for ${goodName}. This will be an unmet demand unless imported.</p>`;
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
        button.className = "btn btn-secondary btn-md m-1"; 
        button.addEventListener('click', (event) => { 
            console.log(`Selected method for ${goodName} (L${level}): ${chainEntry.name} (ID: ${chainEntry.id})`);

            const allMethodButtons = cardBody.querySelectorAll('button');
            allMethodButtons.forEach(btn => {
                btn.className = "btn btn-secondary btn-md m-1";
            });
            event.currentTarget.className = "btn btn-success btn-md m-1"; 
            
            let requiredQtyForThisStep;
            if (level === 0) {
                const quantityInput = document.getElementById('final-product-quantity');
                requiredQtyForThisStep = (quantityInput) ? (parseInt(quantityInput.value) || 1) : 1;
            } else {
                const stepEntry = currentProductionChain.find(s => s.level === level && s.targetGood === goodName && JSON.stringify(s.satisfiesInputForParent) === JSON.stringify(parentRequirementId));
                requiredQtyForThisStep = stepEntry ? stepEntry.requiredOutputQuantity : 1; 
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
        cardBody.appendChild(button); 
    });
}


function calculateFullChain() {
    console.log("Calculating full chain with 'per worker shift' logic...", currentProductionChain);
    const resultsArea = document.getElementById('calculation-results-area');
    resultsArea.innerHTML = '<h2>Calculation Results:</h2>'; // Clear previous results first
    resultsArea.innerHTML += '<p><em>(All production figures and requirements are calculated on a "per shift" basis)</em></p>';


    if (currentProductionChain.length === 0 ) { 
         resultsArea.innerHTML += "<p>Please select the final product first.</p>";
        return;
    }
    
    const finalProductStep = currentProductionChain.find(step => step.level === 0);
    if (!finalProductStep) { // Should not happen if length > 0 and it's sorted, but good check
        resultsArea.innerHTML += "<p>Error: Final product step (level 0) not found.</p>";
        return;
    }
    // Ensure final product quantity is up-to-date from input
    const quantityInput = document.getElementById('final-product-quantity');
    finalProductStep.requiredOutputQuantity = parseInt(quantityInput.value) || 1;
    if (finalProductStep.requiredOutputQuantity <= 0) finalProductStep.requiredOutputQuantity =1;

    if (!finalProductStep.buildingId){ // If level 0 good is selected but building method is not
        resultsArea.innerHTML += "<p>Please select a production method for the final product.</p>";
        // Initialize fields for display even if incomplete
        finalProductStep.workersNeededForStepOutput = 0;
        finalProductStep.numBuildingsForStep = 0;
        finalProductStep.isHighSchoolWorkers = false;
        finalProductStep.profitForThisStep = 0;
        finalProductStep.maxOutputIfFullyStaffed = 0;
        finalProductStep.buildingCapacityUtilization = 0;
        finalProductStep.inputsForThisStep = [];
        displayChainResults(); // Display the incomplete chain
        return;
    }


    currentProductionChain.sort((a, b) => a.level - b.level);

    for (let i = 0; i < currentProductionChain.length; i++) {
        const step = currentProductionChain[i];

        if (!step.buildingId) {
            step.workersNeededForStepOutput = 0;
            step.numBuildingsForStep = 0;
            step.isHighSchoolWorkers = false; 
            step.profitForThisStep = 0;
            step.maxOutputIfFullyStaffed = 0;
            step.buildingCapacityUtilization = 0;
            step.inputsForThisStep = [];
            console.warn(`Skipping calculation for ${step.targetGood} at level ${step.level} - no building selected.`);
            continue; 
        }

        const chainEntry = productionChains.find(c => c.id === step.buildingId);
        if (!chainEntry) {
            console.error(`Error: Building data for ID ${step.buildingId} not found.`);
            step.workersNeededForStepOutput = 0; 
            step.numBuildingsForStep = 0;
            step.isHighSchoolWorkers = false;
            step.profitForThisStep = 0;
            step.maxOutputIfFullyStaffed = 0;
            step.buildingCapacityUtilization = 0;
            step.inputsForThisStep = [];
            continue;
        }

        // --- Core Calculations for the step based on "per worker shift" logic ---
        if (step.requiredOutputQuantity < 0.00001) { 
            step.workersNeededForStepOutput = 0;
        } else if (!chainEntry.output || chainEntry.output.quantity < 0.00001) { 
            step.workersNeededForStepOutput = Infinity; 
        } else {
            // output.quantity is output per worker shift
            step.workersNeededForStepOutput = Math.ceil(step.requiredOutputQuantity / chainEntry.output.quantity);
        }

        if (step.workersNeededForStepOutput === 0) {
            step.numBuildingsForStep = 0;
        } else if (step.workersNeededForStepOutput === Infinity) {
            step.numBuildingsForStep = Infinity;
        } else if (!chainEntry.workers || chainEntry.workers < 0.00001) { 
            step.numBuildingsForStep = Infinity; 
        } else {
            step.numBuildingsForStep = Math.ceil(step.workersNeededForStepOutput / chainEntry.workers);
        }
        
        // Handle Infinity cases for subsequent calculations
        if (step.numBuildingsForStep === Infinity || step.workersNeededForStepOutput === Infinity) {
            step.isHighSchoolWorkers = (chainEntry.education_required === 'HS');
            step.profitForThisStep = 0; 
            step.maxOutputIfFullyStaffed = (step.workersNeededForStepOutput === Infinity && chainEntry.output.quantity > 0) ? Infinity : 0;
            step.buildingCapacityUtilization = 0; // Or 100 if output required and impossible? For now 0 for error states.
            step.inputsForThisStep = (chainEntry.inputs || []).map(inputDef => ({
                good: inputDef.good,
                quantity: Infinity 
            }));
        } else {
            step.isHighSchoolWorkers = (chainEntry.education_required === 'HS');
            // profit_per_workday is now per worker shift
            step.profitForThisStep = step.workersNeededForStepOutput * (chainEntry.profit_per_workday || 0);
            
            // Max output if these numBuildingsForStep are staffed by their max workers (chainEntry.workers)
            // Each worker produces chainEntry.output.quantity
            step.maxOutputIfFullyStaffed = step.numBuildingsForStep * chainEntry.workers * (chainEntry.output?.quantity || 0);

            if (step.maxOutputIfFullyStaffed < 0.00001) {
                step.buildingCapacityUtilization = (step.requiredOutputQuantity < 0.00001) ? 0 : 100;
            } else {
                step.buildingCapacityUtilization = (step.requiredOutputQuantity / step.maxOutputIfFullyStaffed) * 100;
            }
            step.buildingCapacityUtilization = Math.max(0, Math.min(step.buildingCapacityUtilization, 100));

            // Inputs are per worker shift, so multiply by total workers needed for this step's output
            step.inputsForThisStep = (chainEntry.inputs || []).map(inputDef => ({
                good: inputDef.good,
                quantity: step.workersNeededForStepOutput * inputDef.quantity 
            }));
        }

        // Propagate demand to child steps
        step.inputsForThisStep.forEach(calculatedInput => {
            const childStep = currentProductionChain.find(cs => 
                cs.level === step.level + 1 &&
                cs.targetGood === calculatedInput.good &&
                cs.satisfiesInputForParent &&
                cs.satisfiesInputForParent.parentBuildingId === step.buildingId &&
                cs.satisfiesInputForParent.good === calculatedInput.good // Ensure this 'good' matches the child's targetGood
            );

            if (childStep) {
                if (calculatedInput.quantity === Infinity) {
                     childStep.requiredOutputQuantity = Infinity;   
                } else {
                    childStep.requiredOutputQuantity = (childStep.requiredOutputQuantity === Infinity) ? Infinity : (childStep.requiredOutputQuantity || 0) + calculatedInput.quantity;
                }
                 console.log(`Set/Accumulated required quantity for L${childStep.level} ${childStep.targetGood} (for ${step.buildingId}) to ${childStep.requiredOutputQuantity}`);
            }
        });
    }

    console.log("Chain after 'per worker shift' calculation:", currentProductionChain);
    displayChainResults(); 
}

function displayChainResults() {
    const resultsArea = document.getElementById('calculation-results-area');
    resultsArea.innerHTML = '<h2>Calculation Results:</h2>'; 
    resultsArea.innerHTML += '<p><em>(All production figures and requirements are calculated on a "per shift" basis)</em></p>'; 

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

        if (!chainEntry && step.buildingId) { 
             stepHtml += `<p style="color:red;">Error: Data for building ID '${step.buildingId}' not found. Required: ${step.requiredOutputQuantity.toFixed(2)} ${step.targetGood}</p>`;
        } else if (!chainEntry) { 
            stepHtml += `<p style="color:orange;">Production method not selected. Required: ${step.requiredOutputQuantity.toFixed(2)} ${step.targetGood}</p>`;
        } else { 
            const educationLabel = step.isHighSchoolWorkers ? " (HS)" : " (Regular)";
            stepHtml += `<p><strong>Building:</strong> ${chainEntry.name}</p>`; 
            stepHtml += `<p><strong>Target Output for this step:</strong> ${step.requiredOutputQuantity === Infinity ? "Unachievable" : step.requiredOutputQuantity.toFixed(2)} ${step.targetGood}</p>`;
            stepHtml += `<p><strong>Number of Buildings:</strong> ${step.numBuildingsForStep === Infinity ? "Unachievable/Infinite" : step.numBuildingsForStep.toFixed(0)}</p>`; 
            stepHtml += `<p><strong>Max Output (at 100% for ${step.numBuildingsForStep === Infinity ? "these" : step.numBuildingsForStep.toFixed(0)} buildings):</strong> ${step.maxOutputIfFullyStaffed === Infinity ? "Infinite (theoretical)" : step.maxOutputIfFullyStaffed.toFixed(2)} ${step.targetGood}</p>`;
            
            let efficiencyDisplay = step.buildingCapacityUtilization.toFixed(1) + "%";
            if (step.buildingCapacityUtilization === Infinity || (step.maxOutputIfFullyStaffed < 0.0001 && step.requiredOutputQuantity > 0.0001 && step.numBuildingsForStep > 0) || step.numBuildingsForStep === Infinity && step.requiredOutputQuantity > 0) {
                efficiencyDisplay = "N/A (target unachievable or no production capacity with this setup)";
            } else if (step.numBuildingsForStep === 0 && step.requiredOutputQuantity > 0.0001) {
                 efficiencyDisplay = "N/A (0 buildings cannot produce output)";
            }
            stepHtml += `<p><strong>Building Capacity Utilization:</strong> ${efficiencyDisplay}</p>`;
            
            stepHtml += `<p><strong>Workers Needed for Target Output:</strong> ${step.workersNeededForStepOutput === Infinity ? "Unachievable/Infinite" : step.workersNeededForStepOutput.toFixed(0)}${educationLabel}</p>`;
            
            if (step.inputsForThisStep && step.inputsForThisStep.length > 0) {
                stepHtml += "<p><strong>Inputs for this step (total):</strong></p><ul>";
                step.inputsForThisStep.forEach(input => {
                    stepHtml += `<li>${input.quantity === Infinity ? "Infinite (due to unachievable upstream step)" : input.quantity.toFixed(2)} ${input.good}</li>`;
                });
                stepHtml += "</ul>";
            } else {
                stepHtml += "<p><strong>Inputs for this step:</strong> None</p>";
            }
            stepHtml += `<p><strong>Profit for this step:</strong> $${step.profitForThisStep === Infinity ? "N/A" : step.profitForThisStep.toFixed(2)}</p>`;
        }
        stepHtml += `</div>`;
        resultsArea.innerHTML += stepHtml;
    });

    resultsArea.innerHTML += "<hr><h3>Overall Chain Summary:</h3>";
    const buildingTotals = {};
    let totalRegularWorkers = 0; 
    let totalHSWorkers = 0; 
    let totalProfit = 0;
    const rawMaterialInputs = new Map(); 
    let isChainPossible = true;

    currentProductionChain.forEach(step => {
        if(step.workersNeededForStepOutput === Infinity || step.numBuildingsForStep === Infinity) {
            isChainPossible = false;
        }
        if (step.buildingId) { 
            const chainEntry = productionChains.find(c => c.id === step.buildingId);
            if (chainEntry) { 
                buildingTotals[chainEntry.name] = (buildingTotals[chainEntry.name] || 0) + (isFinite(step.numBuildingsForStep) ? step.numBuildingsForStep : 0);
            }
            if(isFinite(step.workersNeededForStepOutput)){
                if (step.isHighSchoolWorkers) { 
                    totalHSWorkers += step.workersNeededForStepOutput;
                } else {
                    totalRegularWorkers += step.workersNeededForStepOutput;
                }
            }
            if(isFinite(step.profitForThisStep)) totalProfit += step.profitForThisStep;

            (step.inputsForThisStep || []).forEach(input => {
                const isProducedInternally = currentProductionChain.some(s => 
                    s.buildingId && s.targetGood === input.good && s.level < step.level 
                );
                if (!isProducedInternally) {
                    if(isFinite(input.quantity)) {
                        rawMaterialInputs.set(input.good, (rawMaterialInputs.get(input.good) || 0) + input.quantity);
                    } else {
                        rawMaterialInputs.set(input.good, Infinity);
                    }
                }
            });
        } else { 
            if(step.requiredOutputQuantity > 0.00001){ 
                if(isFinite(step.requiredOutputQuantity)){
                     rawMaterialInputs.set(step.targetGood, (rawMaterialInputs.get(step.targetGood) || 0) + step.requiredOutputQuantity);
                } else {
                     rawMaterialInputs.set(step.targetGood, Infinity);
                }
            }
        }
    });
    if (!isChainPossible) {
        resultsArea.innerHTML += '<p style="color:red; font-weight:bold;">Note: This production chain is not possible as configured due to infinite requirements at one or more steps.</p>';
    }

    resultsArea.innerHTML += "<p><strong>Total Buildings by Type:</strong></p><ul>";
    for (const [name, count] of Object.entries(buildingTotals)) {
        resultsArea.innerHTML += `<li>${name}: ${count.toFixed(0)}</li>`;
    }
    if (Object.keys(buildingTotals).length === 0 && currentProductionChain.some(s => s.buildingId)) resultsArea.innerHTML += "<li>Error in building data.</li>";
    else if (Object.keys(buildingTotals).length === 0) resultsArea.innerHTML += "<li>None (No buildings selected/calculated).</li>";
    resultsArea.innerHTML += "</ul>";

    resultsArea.innerHTML += `<p><strong>Total Workers Needed for Chain (Adjusted for Efficiency):</strong></p><ul>`;
    resultsArea.innerHTML += `<li>Regular: ${totalRegularWorkers.toFixed(0)}</li>`;
    resultsArea.innerHTML += `<li>High School: ${totalHSWorkers.toFixed(0)}</li>`;
    resultsArea.innerHTML += `<li><strong>Overall Total:</strong> ${(totalRegularWorkers + totalHSWorkers).toFixed(0)}</li></ul>`;


    resultsArea.innerHTML += "<p><strong>Total Raw Materials Needed (not produced in chain):</strong></p>";
    if (rawMaterialInputs.size > 0) {
        resultsArea.innerHTML += "<ul>";
        rawMaterialInputs.forEach((quantity, good) => {
            resultsArea.innerHTML += `<li>${good}: ${quantity === Infinity ? "Infinite (chain impossible)" : quantity.toFixed(2)}</li>`;
        });
        resultsArea.innerHTML += "</ul>";
    } else {
        resultsArea.innerHTML += "<p>None (all inputs are produced within the configured chain, or no inputs/chain configured).</p>";
    }

    resultsArea.innerHTML += `<p><strong>Overall Total Profit for Chain:</strong> $${isFinite(totalProfit) ? totalProfit.toFixed(2) : "N/A (due to impossible chain)"}</p>`;
}

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
