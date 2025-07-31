// update-categories.js
const { updateCategoryStrings, upsertCategoryMapping, disconnectDb } = require('./save_db');

// Configuration
const CONFIG = {
  marketplaceCode: "AU", // Change this to target different marketplaces
};

// Example function to populate category mappings (run this first)
async function populateCategoryMappings() {
  console.log(`Populating category mappings for ${CONFIG.marketplaceCode}...`);
  
  // This is where you would load your actual mappings
  // For example, from a JSON file or another source
  
  // Example mappings - replace with your actual data for each marketplace
  const exampleMappings = {
    "US": {
        1: "Toys & Games",
        2: "Arts, Crafts & Sewing",
        3: "Home & Kitchen",
        4: "Beauty & Personal Care",
        5: "Sports & Outdoors",
        6: "Baby Products",
        7: "Tools & Home Improvement",
        8: "Patio, Lawn & Garden",
        9: "Clothing, Shoes & Jewelry",
        10: "Grocery & Gourmet Food",
        11: "Industrial & Scientific",
        12: "Pet Supplies",
        13: "Automotive",
        14: "Musical Instruments",
        15: "Electronics",
        17: "Health & Household",
        18: "Office Products",
        19: "Cell Phones & Accessories",
        20: "Collectibles & Fine Art",
        21: "Appliances",
        23: "Video Games",
        25: "Gift Cards",
        26: "Entertainment",
        27: "CDs & Vinyl",
        30: "Software",
        31: "Books",
        32: "Team Sports",
        37: "Kitchen & Dining",
        38: "Movies & TV",
        62: "Camera & Photo"
      },
    "UK": {
        1: "Toys & Games",
        3: "Home & Kitchen",
        4: "Beauty",
        5: "Sports & Outdoors",
        6: "Baby Products",
        7: "DIY & Tools",
        8: "Garden & Outdoors",
        10: "Grocery",
        11: "Business, Industry & Science",
        12: "Pet Supplies",
        13: "Automotive",
        14: "Musical Instruments & DJ",
        15: "Electronics & Photo",
        17: "Health & Personal Care",
        18: "Stationery & Office Supplies",
        21: "Large Appliances",
        23: "PC & Video Games",
        27: "CDs & Vinyl",
        31: "Books",
        34: "Computers & Accessories",
        35: "Watches",
        36: "Jewellery",
        37: "Lighting",
        38: "Luggage",
        39: "Shoes & Bags",
        41: "Everything Else",
        43: "Home & Garden",
        44: "Fashion",
        45: "DVD & Blu-ray",
        47: "Software",
        53: "Apps & Games"
      },

    "CA": {
        1: "Automotive",
        2: "Baby",
        3: "Beauty & Personal Care",
        4: "Books",
        5: "Clothing & Accessories",
        7: "Everything Else",
        8: "Grocery & Gourmet Food",
        10: "Health & Personal Care",
        11: "Home & Kitchen",
        12: "Industrial & Scientific",
        13: "Jewelry",
        14: "Luggage & Bags",
        15: "Musical Instruments, Stage & Studio",
        16: "Office Products",
        17: "Patio, Lawn & Garden",
        18: "Pet Supplies",
        19: "Shoes & Handbags",
        20: "Sports & Outdoors",
        21: "Tools & Home Improvement",
        22: "Toys & Games",
        23: "Video Games",
        24: "Watches",
        26: "Electronics",
        30: "Shoes & Handbags",
        31: "Movies & TV",
        32: "Music",
        33: "Gift Cards",
        34: "Clothing & Accessories",
        37: "Clothing & Accessories",
        38: "Software"
      },   
    
      "MX": {
        1: "Alimentos y Bebidas",
        2: "Automotriz y Motocicletas",
        3: "Bebé",
        4: "Belleza",
        5: "Deportes y Aire Libre",
        6: "Electrónicos",
        7: "Herramientas y Mejoras del Hogar",
        8: "Hogar y Cocina",
        9: "Industria, Empresas y Ciencia",
        10: "Instrumentos Musicales",
        11: "Jardín",
        12: "Juguetes y Juegos",
        13: "Libros",
        14: "Música",
        15: "Oficina y Papelería",
        16: "Películas y Series de TV",
        18: "Productos para Animales",
        19: "Ropa, Zapatos y Accesorios",
        20: "Salud y Cuidado Personal",
        21: "Software",
        23: "Videojuegos",
        25: "Dispositivos Amazon y Accesorios",
        27: "Apps y Juegos"
      },

      "DE": {
        1: "Apps & Spiele",
        2: "Auto & Motorrad",
        3: "Baby",
        4: "Baumarkt",
        5: "Kosmetik",
        7: "Beleuchtung",
        9: "Bücher",
        10: "Bürobedarf & Schreibwaren",
        11: "Computer & Zubehör",
        12: "Drogerie & Körperpflege",
        13: "DVD & Blu-ray",
        14: "Elektro-Großgeräte",
        15: "Elektronik & Foto",
        17: "Games",
        18: "Garten",
        19: "Gewerbe, Industrie & Wissenschaft",
        21: "Haustier",
        23: "Koffer, Rucksäcke & Taschen",
        24: "Küche, Haushalt & Wohnen",
        25: "Lebensmittel & Getränke",
        26: "Musik-CDs & Vinyl",
        28: "Musikinstrumente & DJ-Equipment",
        32: "Software",
        34: "Spielzeug",
        35: "Sport & Freizeit",
        36: "Uhren",
        39: "Fashion"
      },      

      "FR": {
        1: "Animalerie",
        3: "Auto et Moto",
        6: "Beauté & Parfum",
        8: "Bricolage",
        9: "Bébé et Puériculture",
        10: "CD et Vinyles",
        12: "Commerce, Industrie & Science",
        13: "Cuisine et Maison",
        14: "DVD et Blu-ray",
        15: "Epicerie",
        16: "Fournitures de bureau",
        17: "Gros électroménager",
        18: "High-Tech",
        19: "Hygiène et Santé",
        20: "Informatique",
        21: "Instruments de musique et Sono",
        22: "Jardin",
        23: "Jeux et Jouets",
        24: "Jeux vidéo",
        25: "Livres",
        27: "Logiciels",
        28: "Luminaires et Éclairage",
        31: "Sports et Loisirs",
        37: "Mode"
      },  
      
      "ES": {
        1: "Alimentación y Bebidas",
        3: "Bebé",
        4: "Belleza",
        5: "Bricolaje y herramientas",
        6: "CDs y vinilos",
        7: "Coche y moto",
        8: "Deportes y aire libre",
        9: "Electrónica",
        11: "Grandes electrodomésticos",
        12: "Hogar y cocina",
        13: "Iluminación",
        14: "Industria, empresas y ciencia",
        15: "Informática",
        16: "Instrumentos musicales",
        17: "Jardín",
        19: "Juguetes y juegos",
        20: "Libros",
        22: "Oficina y papelería",
        24: "Películas y TV",
        26: "Productos para mascotas",
        29: "Salud y cuidado personal",
        31: "Videojuegos",
        35: "Moda",
        37: "Software"
      },   
      
      "JP": {
        1: "本",
        2: "ミュージック",
        3: "DVD",
        4: "PCソフト",
        5: "ゲーム",
        6: "家電＆カメラ",
        7: "ホーム＆キッチン",
        8: "おもちゃ",
        9: "スポーツ＆アウトドア",
        10: "洋書",
        11: "ビューティー",
        12: "食品・飲料・お酒",
        13: "文房具・オフィス用品",
        14: "ドラッグストア",
        15: "ベビー＆マタニティ",
        16: "DIY・工具・ガーデン",
        17: "車＆バイク",
        18: "楽器・音響機器",
        19: "パソコン・周辺機器",
        20: "ペット用品",
        22: "ファッション",
        23: "ホビー",
        24: "大型家電",
        25: "産業・研究開発用品"
      },   
      
      "AU": {
        40383: "Baby",
        40386: "Computers",
        40389: "Health, Household & Personal Care",
        40391: "Home Improvement (obsolete)",
        40400: "Movies & TV",
        40401: "Music",
        40402: "Musical Instruments",
        40403: "Software",
        40404: "Video Games",
        40405: "Lighting",
        40407: "Amazon Launchpad",
        40425: "Kindle Store",
        40525: "Beauty",
        40526: "Books",
        40527: "Electronics",
        40528: "Clothing, Shoes & Accessories",
        40529: "Home",
        40530: "Kitchen & Dining",
        40531: "Stationery & Office Products",
        40532: "Sports, Fitness & Outdoors",
        40533: "Toys & Games",
        40534: "Pet Supplies",
        40535: "Pantry Food & Drinks",
        40536: "Garden",
        40538: "Amazon Renewed",
        40542: "Home Improvement",
        40399: "Automotive"
      },    
      
      "IN": {
        1: "Baby",
        2: "Bags, Wallets and Luggage",
        3: "Beauty",
        4: "Books",
        5: "Car & Motorbike",
        6: "Clothing & Accessories",
        7: "Computers & Accessories",
        8: "Electronics",
        10: "Grocery & Gourmet Foods",
        11: "Health & Personal Care",
        12: "Home & Kitchen",
        13: "Home Improvement",
        14: "Industrial & Scientific",
        15: "Jewellery",
        17: "Movies & TV Shows",
        19: "Musical Instruments",
        20: "Office Products",
        22: "Pet Supplies",
        23: "Shoes & Handbags",
        24: "Software",
        25: "Sports, Fitness & Outdoors",
        26: "Toys & Games",
        27: "Video Games",
        28: "Watches",
        32: "Appliances",
        34: "Fashion"
      },      
      
      
    // Add mappings for other marketplaces
  };
  
  // Get mappings for selected marketplace
  const mappings = exampleMappings[CONFIG.marketplaceCode] || {};
  
  // Insert mappings into database
  for (const [categoryId, categoryString] of Object.entries(mappings)) {
    await upsertCategoryMapping(
      CONFIG.marketplaceCode,
      parseInt(categoryId),
      categoryString
    );
    console.log(`Added mapping: ${categoryId} => "${categoryString}"`);
  }
  
  console.log("Category mappings populated successfully!");
}

// Main function
async function main() {
  try {
    // First populate the category mappings
    await populateCategoryMappings();
    
    // Then update the category strings in the seller records
    await updateCategoryStrings(CONFIG.marketplaceCode);
    
    console.log("Category mapping process completed successfully!");
  } catch (error) {
    console.error("Error in category mapping process:", error);
  } finally {
    await disconnectDb();
  }
}

main().catch(console.error);

/* 
Updating category strings for UK...
Found 33 unique category IDs for UK
Updated 44287 records for category 1 to "Toys & Games"
Updated 84686 records for category 3 to "Home & Kitchen"
Updated 47494 records for category 4 to "Beauty"
Updated 36634 records for category 5 to "Sports & Outdoors"
Updated 15504 records for category 6 to "Baby Products"
Updated 29078 records for category 7 to "DIY & Tools"
Updated 18740 records for category 8 to "Garden & Outdoors"
Updated 18446 records for category 9 to "Category 9"
Updated 18279 records for category 10 to "Grocery"
Updated 8686 records for category 11 to "Business, Industry & Science"
Updated 20499 records for category 12 to "Pet Supplies"
Updated 27304 records for category 13 to "Automotive"
Updated 5291 records for category 14 to "Musical Instruments & DJ"
Updated 22228 records for category 15 to "Electronics & Photo"
Updated 34980 records for category 17 to "Health & Personal Care"
Updated 16037 records for category 18 to "Stationery & Office Supplies"
Updated 848 records for category 21 to "Large Appliances"
Updated 2718 records for category 22 to "Category 22"
Updated 5163 records for category 23 to "PC & Video Games"
Updated 2448 records for category 27 to "CDs & Vinyl"
Updated 26586 records for category 31 to "Books"
Updated 19331 records for category 34 to "Computers & Accessories"
Updated 1404 records for category 35 to "Watches"
Updated 4339 records for category 36 to "Jewellery"
Updated 14087 records for category 37 to "Lighting"
Updated 3733 records for category 38 to "Luggage"
Updated 3800 records for category 39 to "Shoes & Bags"
Updated 203 records for category 41 to "Everything Else"
Updated 99 records for category 43 to "Home & Garden"
Updated 17792 records for category 44 to "Fashion"
Updated 314 records for category 45 to "DVD & Blu-ray"
Updated 226 records for category 47 to "Software"
Updated 11 records for category 53 to "Apps & Games"
Category mapping process completed successfully!
UK:9, 22, 


Updating category strings for US...
Found 44 unique category IDs for US
Updated 145369 records for category 1 to "Toys & Games"
Updated 53090 records for category 2 to "Arts, Crafts & Sewing"
Updated 210390 records for category 3 to "Home & Kitchen"
Updated 138070 records for category 4 to "Beauty & Personal Care"
Updated 117494 records for category 5 to "Sports & Outdoors"
Updated 63037 records for category 6 to "Baby Products"
Updated 97743 records for category 7 to "Tools & Home Improvement"
Updated 73301 records for category 8 to "Patio, Lawn & Garden"
Updated 242423 records for category 9 to "Clothing, Shoes & Jewelry"
Updated 76744 records for category 10 to "Grocery & Gourmet Food"
Updated 47973 records for category 11 to "Industrial & Scientific"
Updated 76432 records for category 12 to "Pet Supplies"
Updated 68025 records for category 13 to "Automotive"
Updated 16222 records for category 14 to "Musical Instruments"
Updated 80099 records for category 15 to "Electronics"
Updated 166116 records for category 17 to "Health & Household"
Updated 72859 records for category 18 to "Office Products"
Updated 46787 records for category 19 to "Cell Phones & Accessories"
Updated 175 records for category 20 to "Collectibles & Fine Art"
Updated 4428 records for category 21 to "Appliances"
Updated 9500 records for category 22 to "Category 22"
Updated 24316 records for category 23 to "Video Games"
Updated 84 records for category 25 to "Gift Cards"
Updated 13 records for category 26 to "Entertainment"
Updated 10936 records for category 27 to "CDs & Vinyl"
Updated 3610 records for category 30 to "Software"
Updated 130625 records for category 31 to "Books"
Updated 334 records for category 32 to "Team Sports"
Updated 4596 records for category 35 to "Category 35"
Updated 43233 records for category 37 to "Kitchen & Dining"
Updated 3860 records for category 38 to "Movies & TV"
Updated 6676 records for category 39 to "Category 39"
Updated 164 records for category 42 to "Category 42"
Updated 104 records for category 43 to "Category 43"
Updated 20 records for category 44 to "Category 44"
Updated 4 records for category 45 to "Category 45"
Updated 50 records for category 47 to "Category 47"
Updated 3 records for category 50 to "Category 50"
Updated 2 records for category 51 to "Category 51"
Updated 2 records for category 53 to "Category 53"
Updated 101 records for category 54 to "Category 54"
Updated 7177 records for category 62 to "Camera & Photo"
Updated 58 records for category 68 to "Category 68"
Updated 2 records for category 69 to "Category 69"
Category mapping process completed successfully!
US: 22, 35, 39, 42, 43, 44, 45, 47, 50, 51, 53, 54, 68, 69


Updating category strings for CA...
Found 31 unique category IDs for CA
Updated 34490 records for category 1 to "Automotive"
Updated 20782 records for category 2 to "Baby"
Updated 57478 records for category 3 to "Beauty & Personal Care"
Updated 6202 records for category 4 to "Books"
Updated 11682 records for category 5 to "Clothing & Accessories"
Updated 21081 records for category 6 to "Category 6"
Updated 563 records for category 7 to "Everything Else"
Updated 9084 records for category 8 to "Grocery & Gourmet Food"
Updated 642 records for category 9 to "Category 9"
Updated 40368 records for category 10 to "Health & Personal Care"
Updated 119590 records for category 11 to "Home & Kitchen"
Updated 14548 records for category 12 to "Industrial & Scientific"
Updated 5595 records for category 13 to "Jewelry"
Updated 141 records for category 14 to "Luggage & Bags"
Updated 8549 records for category 15 to "Musical Instruments, Stage & Studio"
Updated 19175 records for category 16 to "Office Products"
Updated 30733 records for category 17 to "Patio, Lawn & Garden"
Updated 26512 records for category 18 to "Pet Supplies"
Updated 949 records for category 19 to "Shoes & Handbags"
Updated 37073 records for category 20 to "Sports & Outdoors"
Updated 41731 records for category 21 to "Tools & Home Improvement"
Updated 34533 records for category 22 to "Toys & Games"
Updated 4905 records for category 23 to "Video Games"
Updated 1411 records for category 24 to "Watches"
Updated 30348 records for category 26 to "Electronics"
Updated 17 records for category 28 to "Category 28"
Updated 1496 records for category 31 to "Movies & TV"
Updated 516 records for category 32 to "Music"
Updated 4 records for category 33 to "Gift Cards"
Updated 38390 records for category 37 to "Clothing & Accessories"
Updated 188 records for category 38 to "Software"
Category mapping process completed successfully!
CA: 


Updating category strings for MX...
Found 18 unique category IDs for MX
Updated 16 records for category 1 to "Alimentos y Bebidas"
Updated 8 records for category 2 to "Automotriz y Motocicletas"
Updated 11 records for category 3 to "Bebé"
Updated 61 records for category 4 to "Belleza"
Updated 21 records for category 5 to "Deportes y Aire Libre"
Updated 580 records for category 6 to "Electrónicos"
Updated 23 records for category 7 to "Herramientas y Mejoras del Hogar"
Updated 269 records for category 8 to "Hogar y Cocina"
Updated 8 records for category 9 to "Industria, Empresas y Ciencia"
Updated 21 records for category 10 to "Instrumentos Musicales"
Updated 22 records for category 12 to "Juguetes y Juegos"
Updated 1 records for category 13 to "Libros"
Updated 2 records for category 14 to "Música"
Updated 10 records for category 15 to "Oficina y Papelería"
Updated 24 records for category 18 to "Productos para Animales"
Updated 67 records for category 19 to "Ropa, Zapatos y Accesorios"
Updated 77 records for category 20 to "Salud y Cuidado Personal"
Updated 19 records for category 23 to "Videojuegos"


Updating category strings for DE...
Found 34 unique category IDs for DE
Updated 1 records for category 1 to "Apps & Spiele"
Updated 14291 records for category 2 to "Auto & Motorrad"
Updated 11534 records for category 3 to "Baby"
Updated 25262 records for category 4 to "Baumarkt"
Updated 17855 records for category 5 to "Kosmetik"
Updated 10285 records for category 6 to "Category 6"
Updated 12765 records for category 7 to "Beleuchtung"
Updated 12 records for category 8 to "Category 8"
Updated 1708 records for category 9 to "Bücher"
Updated 10312 records for category 10 to "Bürobedarf & Schreibwaren"
Updated 11815 records for category 11 to "Computer & Zubehör"
Updated 18254 records for category 12 to "Drogerie & Körperpflege"
Updated 1306 records for category 13 to "DVD & Blu-ray"
Updated 2549 records for category 14 to "Elektro-Großgeräte"
Updated 20231 records for category 15 to "Elektronik & Foto"
Updated 67 records for category 16 to "Category 16"
Updated 5056 records for category 17 to "Games"
Updated 9109 records for category 18 to "Garten"
Updated 5394 records for category 19 to "Gewerbe, Industrie & Wissenschaft"
Updated 1262 records for category 20 to "Category 20"
Updated 14293 records for category 21 to "Haustier"
Updated 2135 records for category 23 to "Koffer, Rucksäcke & Taschen"
Updated 50956 records for category 24 to "Küche, Haushalt & Wohnen"
Updated 6860 records for category 25 to "Lebensmittel & Getränke"
Updated 817 records for category 26 to "Musik-CDs & Vinyl"
Updated 2466 records for category 28 to "Musikinstrumente & DJ-Equipment"
Updated 1631 records for category 30 to "Category 30"
Updated 2762 records for category 31 to "Category 31"
Updated 319 records for category 32 to "Software"
Updated 92 records for category 33 to "Category 33"
Updated 21990 records for category 34 to "Spielzeug"
Updated 15870 records for category 35 to "Sport & Freizeit"
Updated 540 records for category 36 to "Uhren"
Updated 27220 records for category 39 to "Fashion"
DE: 6, 8, 16, 20, 30, 31, 33


Updating category strings for FR...
Found 31 unique category IDs for FR
Updated 8891 records for category 1 to "Animalerie"
Updated 13451 records for category 3 to "Auto et Moto"
Updated 71 records for category 4 to "Category 4"
Updated 1743 records for category 5 to "Category 5"
Updated 16646 records for category 6 to "Beauté & Parfum"
Updated 1374 records for category 7 to "Category 7"
Updated 17785 records for category 8 to "Bricolage"
Updated 9704 records for category 9 to "Bébé et Puériculture"
Updated 709 records for category 10 to "CD et Vinyles"
Updated 2867 records for category 11 to "Category 11"
Updated 4038 records for category 12 to "Commerce, Industrie & Science"
Updated 52053 records for category 13 to "Cuisine et Maison"
Updated 293 records for category 14 to "DVD et Blu-ray"
Updated 5864 records for category 15 to "Epicerie"
Updated 7501 records for category 16 to "Fournitures de bureau"
Updated 960 records for category 17 to "Gros électroménager"
Updated 17342 records for category 18 to "High-Tech"
Updated 14541 records for category 19 to "Hygiène et Santé"
Updated 7802 records for category 20 to "Informatique"
Updated 3911 records for category 21 to "Instruments de musique et Sono"
Updated 9718 records for category 22 to "Jardin"
Updated 15512 records for category 23 to "Jeux et Jouets"
Updated 4508 records for category 24 to "Jeux vidéo"
Updated 897 records for category 25 to "Livres"
Updated 357 records for category 27 to "Logiciels"
Updated 11573 records for category 28 to "Luminaires et Éclairage"
Updated 668 records for category 29 to "Category 29"
Updated 18187 records for category 31 to "Sports et Loisirs"
Updated 1 records for category 32 to "Category 32"
Updated 6140 records for category 33 to "Category 33"
Updated 11754 records for category 37 to "Mode"
FR: 4, 5, 7, 11, 29, 32, 33


Updating category strings for ES...
Found 32 unique category IDs for ES
Updated 5413 records for category 1 to "Alimentación y Bebidas"
Updated 7403 records for category 3 to "Bebé"
Updated 13488 records for category 4 to "Belleza"
Updated 12236 records for category 5 to "Bricolaje y herramientas"
Updated 255 records for category 6 to "CDs y vinilos"
Updated 11931 records for category 7 to "Coche y moto"
Updated 17421 records for category 8 to "Deportes y aire libre"
Updated 14202 records for category 9 to "Electrónica"
Updated 1188 records for category 10 to "Category 10"
Updated 2402 records for category 11 to "Grandes electrodomésticos"
Updated 36919 records for category 12 to "Hogar y cocina"
Updated 10056 records for category 13 to "Iluminación"
Updated 6317 records for category 14 to "Industria, empresas y ciencia"
Updated 6420 records for category 15 to "Informática"
Updated 4411 records for category 16 to "Instrumentos musicales"
Updated 7732 records for category 17 to "Jardín"
Updated 603 records for category 18 to "Category 18"
Updated 19394 records for category 19 to "Juguetes y juegos"
Updated 576 records for category 20 to "Libros"
Updated 8138 records for category 22 to "Oficina y papelería"
Updated 51 records for category 23 to "Category 23"
Updated 455 records for category 24 to "Películas y TV"
Updated 1 records for category 25 to "Category 25"
Updated 6806 records for category 26 to "Productos para mascotas"
Updated 460 records for category 27 to "Category 27"
Updated 4468 records for category 28 to "Category 28"
Updated 17266 records for category 29 to "Salud y cuidado personal"
Updated 4025 records for category 31 to "Videojuegos"
Updated 1797 records for category 32 to "Category 32"
Updated 13688 records for category 35 to "Moda"
Updated 64 records for category 37 to "Software"
Updated 1 records for category 38 to "Category 38"
Category mapping process completed successfully!
ES: 10, 18, 23, 25, 27, 28, 32, 38


Updating category strings for JP...
Found 24 unique category IDs for JP
Updated 1676 records for category 1 to "本"
Updated 984 records for category 2 to "ミュージック"
Updated 2517 records for category 3 to "DVD"
Updated 661 records for category 4 to "PCソフト"
Updated 4533 records for category 5 to "ゲーム"
Updated 43590 records for category 6 to "家電＆カメラ"
Updated 25131 records for category 7 to "ホーム＆キッチン"
Updated 11512 records for category 8 to "おもちゃ"
Updated 10276 records for category 9 to "スポーツ＆アウトドア"
Updated 502 records for category 10 to "洋書"
Updated 15777 records for category 11 to "ビューティー"
Updated 9317 records for category 12 to "食品・飲料・お酒"
Updated 5774 records for category 13 to "文房具・オフィス用品"
Updated 9851 records for category 14 to "ドラッグストア"
Updated 5523 records for category 15 to "ベビー＆マタニティ"
Updated 7172 records for category 16 to "DIY・工具・ガーデン"
Updated 9327 records for category 17 to "車＆バイク"
Updated 3175 records for category 18 to "楽器・音響機器"
Updated 8981 records for category 19 to "パソコン・周辺機器"
Updated 5848 records for category 20 to "ペット用品"
Updated 17350 records for category 22 to "ファッション"
Updated 6632 records for category 23 to "ホビー"
Updated 710 records for category 24 to "大型家電"
Updated 8049 records for category 25 to "産業・研究開発用品"
Category mapping process completed successfully!
JP: 


Updating category strings for AU...
Found 50 unique category IDs for AU
Updated 88 records for category 25093 to "Category 25093"
Updated 11 records for category 25095 to "Category 25095"
Updated 28 records for category 25096 to "Category 25096"
Updated 20 records for category 25098 to "Category 25098"
Updated 44 records for category 25101 to "Category 25101"
Updated 9 records for category 25103 to "Category 25103"
Updated 2 records for category 25108 to "Category 25108"
Updated 62 records for category 25109 to "Category 25109"
Updated 32 records for category 25110 to "Category 25110"
Updated 29 records for category 36031 to "Category 36031"
Updated 4 records for category 36032 to "Category 36032"
Updated 16 records for category 36300 to "Category 36300"
Updated 896 records for category 40383 to "Baby"
Updated 625 records for category 40384 to "Category 40384"
Updated 229 records for category 40385 to "Category 40385"
Updated 1114 records for category 40386 to "Computers"
Updated 936 records for category 40387 to "Category 40387"
Updated 1139 records for category 40388 to "Category 40388"
Updated 3396 records for category 40389 to "Health, Household & Personal Care"
Updated 1474 records for category 40390 to "Category 40390"
Updated 392 records for category 40391 to "Home Improvement (obsolete)"
Updated 611 records for category 40392 to "Category 40392"
Updated 205 records for category 40393 to "Category 40393"
Updated 778 records for category 40394 to "Category 40394"
Updated 550 records for category 40395 to "Category 40395"
Updated 357 records for category 40396 to "Category 40396"
Updated 179 records for category 40397 to "Category 40397"
Updated 491 records for category 40398 to "Category 40398"
Updated 3005 records for category 40399 to "Automotive"
Updated 6 records for category 40400 to "Movies & TV"
Updated 85 records for category 40401 to "Music"
Updated 501 records for category 40402 to "Musical Instruments"
Updated 21 records for category 40403 to "Software"
Updated 338 records for category 40404 to "Video Games"
Updated 1219 records for category 40405 to "Lighting"
Updated 12 records for category 40407 to "Amazon Launchpad"
Updated 18 records for category 40425 to "Kindle Store"
Updated 3246 records for category 40525 to "Beauty"
Updated 546 records for category 40526 to "Books"
Updated 3279 records for category 40527 to "Electronics"
Updated 7252 records for category 40528 to "Clothing, Shoes & Accessories"
Updated 5402 records for category 40529 to "Home"
Updated 4486 records for category 40530 to "Kitchen & Dining"
Updated 1320 records for category 40531 to "Stationery & Office Products"
Updated 2226 records for category 40532 to "Sports, Fitness & Outdoors"
Updated 2505 records for category 40533 to "Toys & Games"
Updated 1774 records for category 40534 to "Pet Supplies"
Updated 599 records for category 40535 to "Pantry Food & Drinks"
Updated 1035 records for category 40536 to "Garden"
Updated 1378 records for category 40542 to "Home Improvement"
Category mapping process completed successfully!
AU: 40392, 36032, 25095, 25110, 40384, 40394, 25093, 40387, 36300, 25101, 36031, 40398, 25103, 40397, 40393, 25096, 40396, 40395, 25108, 25098, 40385, 40388, 40390, 25109


Updating category strings for IN...
Found 27 unique category IDs for IN
Updated 19436 records for category 4 to "Books"
Updated 1 records for category 34 to "Fashion"
Updated 86 records for category 9 to "Category 9"
Updated 11200 records for category 10 to "Grocery & Gourmet Foods"
Updated 18401 records for category 7 to "Computers & Accessories"
Updated 5454 records for category 15 to "Jewellery"
Updated 33458 records for category 6 to "Clothing & Accessories"
Updated 12189 records for category 26 to "Toys & Games"
Updated 61587 records for category 12 to "Home & Kitchen"
Updated 339 records for category 24 to "Software"
Updated 2430 records for category 19 to "Musical Instruments"
Updated 7288 records for category 25 to "Sports, Fitness & Outdoors"
Updated 3743 records for category 21 to "Category 21"
Updated 6115 records for category 14 to "Industrial & Scientific"
Updated 12062 records for category 3 to "Beauty"
Updated 44 records for category 17 to "Movies & TV Shows"
Updated 4546 records for category 20 to "Office Products"
Updated 3642 records for category 22 to "Pet Supplies"
Updated 2246 records for category 28 to "Watches"
Updated 7723 records for category 13 to "Home Improvement"
Updated 3256 records for category 1 to "Baby"
Updated 9787 records for category 5 to "Car & Motorbike"
Updated 3589 records for category 2 to "Bags, Wallets and Luggage"
Updated 3781 records for category 27 to "Video Games"
Updated 4998 records for category 23 to "Shoes & Handbags"
Updated 16307 records for category 11 to "Health & Personal Care"
Updated 20181 records for category 8 to "Electronics"
IN: 9, 21
*/