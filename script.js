document.addEventListener("DOMContentLoaded", function () {
    const data = {
        "Purina": {
            "Imagen": "img/purina.png", // Agrega la imagen de la marca "Boca"
            "Dog Chow": [
                { name: "Dog Chow Cachorro Mordida Pequeña", description: "Bolsa de 3kg:", description2: "Bolsa de 21kg:", price: "$10.99", image: "img/1.png" },
                { name: "Dog Chow Cachorro Mordida Med/Grande", description: "Bolsa de 3kg:", description2: "Bolsa de 21kg:", price: "$12.99", image: "img/2.png" },
                { name: "Dog Chow Adulto Mordida Pequeña", description: "Bolsa de 3kg:", description2: "Bolsa de 8kg:", description3: "Bolsa de 21kg: ",price: "$8.99", image: "product3.jpg" },
                { name: "Dog Chow Adulto Mordida Med/Grande", description: "Bolsa de 3kg:", description2: "Bolsa de 15kg:",description3: "Bolsa de 21kg: ", price: "$8.99", image: "product3.jpg" },
                { name: "Dog Chow Control de Peso", description: "Bolsa de 21kg", price: "$8.99", image: "product3.jpg" },
                { name: "Dog Chow Longevidad (+7 años)", description: "Bolsa de 21kg:", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            "Dogui": [
                { name: "Dogui Cachorro", description: "Bolsa de 21kg", price: "$11.99", image: "product4.jpg" },
                { name: "Dogui Adulto Carne y vegetales", description: "Bolsa de 21kg", price: "$13.99", image: "product5.jpg" },
                              // Agregar más productos con sus datos
            ],
            "Gati": [
                { name: "Gati Pescado y Salmón", description: "Bolsa de 15kg", price: "$11.99", image: "product4.jpg" },
                { name: "Gati Carne y Pollo", description: "Bolsa de 15kg", price: "$13.99", image: "product5.jpg" },
                              // Agregar más productos con sus datos
            ],
            "Pro Plan perros": [
                { name: "Pro Plan Cachorro Raza Pequeña", description: "Bolsa de 1kg: ", description2:"Bolsa de 3kg:", description3: "Bolsa de 7.5kg: ", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Cachorro Raza Mediana", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Cachorro Raza Grande", description: "Bolsa de 15kg: ",  price: "$11.99", image: "product4.jpg" }, 
                { name: "Pro Plan achorro Raza Mediana", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Adulto Raza Pequeña", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Adulto Raza Mediana", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Active Mind (+7 años) Raza Pequeña", description: "Bolsa de 3kg: ", description2:"Bolsa de 7.5kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Active Mind (+7 años) Raza Mediana", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Reduce Calorias Raza Pequeña", description: "Bolsa de 3kg: ", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Reduce Calorias Raza Mediana/Grande", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Sensitive Skin Mediana/Grande", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                // Agregar más productos con sus datos
            ],
            "Pro Plan gatos": [
                { name: "Pro Plan Kitten", description: "Bolsa de 1kg: ", description2:"Bolsa de 3kg:", description3: "Bolsa de 7.5kg: ", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Cat Adulto", description: "Bolsa de 3kg: ", description2:"Bolsa de 7.5kg:", description3:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Cat Adulto +7 años", description: "Bolsa de 3kg: ", description2:"Bolsa de 7.5kg:",  price: "$11.99", image: "product4.jpg" }, 
                { name: "Pro Plan Cat Reduce Calorie", description: "Bolsa de 1kg: ", description2:"Bolsa de 7.5kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Urinary Cat", description: "Bolsa de 3kg: ", description2:"Bolsa de 7.5kg:", description3:"Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Pro Plan Sterilized Cat", description: "Bolsa de 1kg: ", description2:"Bolsa de 3kg:", description3:"Bolsa de 7.5kg:",price: "$11.99", image: "product4.jpg" },
            
                // Agregar más productos con sus datos
            ],
            "Excellent perros": [
                { name: "Excellent Puppy raza pequeña", description: "Bolsa de 15kg:", price: "$11.99", image: "product4.jpg" },
                { name: "Excellent Puppy raza mediana y grande", description: "Bolsa de 15kg", description2: "Bolsa de 20kg:", price: "$13.99", image: "product5.jpg" },
                { name: "Excellent Adulto raza pequeña", description: "Bolsa de 3kg:", description2:"Bolsa de 15kg:", price: "$9.99", image: "product6.jpg" },
                { name: "Excellent Adulto raza mediana y grande (pollo y arroz)", description: "Bolsa de 15kg",description2:"Bolsa de 20kg:", price: "$9.99", image: "product6.jpg" },
                { name: "Excellent Adulto Senior (+7 años)", description: "Bolsa de 15kg", price: "$9.99", image: "product6.jpg" },
                { name: "Excellent Reduce Calorie", description: "Bolsa de 15kg", price: "$9.99", image: "product6.jpg" },
                { name: "Excellent Adult maintenance (ex formula)", description: "Bolsa de 20kg:", price: "$9.99", image: "product6.jpg" },
                { name: "Excellent Skin care con cordero", description: "Bolsa de 15kg", price: "$9.99", image: "product6.jpg" },
                // Agregar más productos con sus datos
            ],
            "Excellent gatos": [
                { name: "Excellent Kitten", description: "Bolsa de 1kg", description2:"Bolsa de 7.5kg", price: "$11.99", image: "product4.jpg" },
                { name: "Excellent Cat Adulto", description: "Bolsa de 3kg", description2:"Bolsa de 7.5kg", description3:"Bolsa de 15kg: ", price: "$13.99", image: "product5.jpg" },
                { name: "Excellent Cat Urinary", description: "Bolsa de 1kg", description2:"Bolsa de 7.5kg", price: "$9.99", image: "product6.jpg" },
                { name: "Excellent Cat Sterilized", description: "Bolsa de 1kg", description2:"Bolsa de 7.5kg", price: "$9.99", image: "product6.jpg" },
                { name: "Excellent Cat Skin Care", description: "Bolsa de 1kg", description2:"Bolsa de 7.5kg", price: "$9.99", image: "product6.jpg" },
                // Agregar más productos con sus datos
            ],
            "Bonelo": [
                { name: "Bonelo Adulto Carne", description: "Bolsa de 20kg", price: "$11.99", image: "product4.jpg" },
                // Agregar más productos con sus datos
            ],
            "Cat Chow":  [
                { name: "Cat Chow Gatitos", description: "Bolsa de 1kg",description2:"Bolsa de 8kg: ",description3:"Bolsa de 15kg: ", price: "$11.99", image: "product4.jpg" },
                { name: "Cat Chow Adulto Pescado",description: "Bolsa de 1kg",description2:"Bolsa de 8kg: ",description3:"Bolsa de 15kg: ", price: "$11.99", image: "product4.jpg" },
                { name: "Cat Chow Adulto Carne", description: "Bolsa de 1kg",description2:"Bolsa de 8kg: ",description3:"Bolsa de 15kg: ", price: "$11.99", image: "product4.jpg" },
                { name: "Cat Chow Esterilizados", description: "Bolsa de 15kg", price: "$11.99", image: "product4.jpg" },
                // Agregar más productos con sus datos
            ],
            "Felix": [
                { name: "Felix Gatitos Megamix", description: "Bolsa de 15kg", price: "$11.99", image: "product4.jpg" },
                { name: "Felix Adultos Megamix", description: "Bolsa de 15kg", price: "$11.99", image: "product4.jpg" },    
                // Otras líneas de productos de la marca "Boca"
        ]},
        "Royal Canin": {
            "Imagen": "img/royal2.png", // Agrega la imagen de la marca "Boca"
            "Size Heal Nutrition": [
                { name: "Royal Canin Mini Starter", description: "Bolsa de 3kg", price: "$10.99", image: "product1.jpg" },
                { name: "Royal Canin Mini Puppy", description: "Bolsa de 3kg:",description2:"Bolsa de 7.5kg:",description3:"Bolsa de 15kg:", price: "$12.99", image: "product2.jpg" },
                { name: "Royal Canin Mini Adult", description: "Bolsa de 1kg",description2:"Bolsa de 3kg:",description3:"Bolsa de 7.5kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Mini Ageing +12 años", description: "Bolsa de 3kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Mini Weight Care", description: "Bolsa de 3kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Mini Dermaconfort", description: "DBolsa de 3kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Medium Puppy", description: "Bolsa de 3kg:", description2:"Bolsa de 15kg: ",price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Medium Adult", description: "Bolsa de 3kg",description2:"Bolsa de 7.5kg: ", description3:"Bolsa de 15kg: ",price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Medium Ageing +10 años", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Medium Weight Care", description: "Bolsa de 3kg:",description2:"Bolsa de 10kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Medium Dermaconfort", description: "Bolsa de 3kg:",description2:"Bolsa de 10kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Maxi Puppy", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Maxi Adult", description: "Bolsa de 3kg:",description2:"Bolsa de 15g:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Maxi Ageing +8 años", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Maxi Weight Care", description: "Bolsa de 10kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Giant", description: "Puppy bolsa de 15kg:", description2:"Junior bolsa de 15kg:",description3:"Adult bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
            
                // Agregar más productos con sus datos
            ],
            "Raza": [
                { name: "Royal Canin Yorkshire Adulto", description: "Bolsa de 1kg:",description2:"Bolsa de 3kg:", price: "$10.99", image: "product1.jpg" },
                { name: "Royal Canin Caniche Junior", description: "Bolsa de 1kg",description2:"Bolsa de 3kg:", price: "$12.99", image: "product2.jpg" },
                { name: "Royal Canin Caniche Adulto", description: "Bolsa de 1kg:",description2:"Bolsa de 3kg:",description3:"Bolsa de 7.5kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Dachshund Adulto", description: "Bolsa de 3kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Schnauser Miniature Adulto", description: "Bolsa de 3kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Bulldog Frances Junior", description: "Bolsa de 3kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Bulldog Frances Adulto", description: "Bolsa de 3kg:",description2:"Bolsa de 7.5kg: ", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Bulldog Ingles Adulto", description: "Bolsa de 12kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Labrador Retriever Adulto", description: "Bolsa de 12kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Boxer Adulto", description: "Bolsa de 12kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Golden Retriever Adulto", description: "Bolsa de 12kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Ovejero Aleman", description: "Bolsa de 12kg", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            "Veterinary": [
                { name: "Royal Canin Hypoalargenic", description: "Bolsa de 2kg:",description2:"Bolsa de 10kg:", price: "$10.99", image: "product1.jpg" },
                { name: "Royal Canin Gastrointestinal Junior", description: "Bolsa de 2kg", price: "$12.99", image: "product2.jpg" },
                { name: "Royal Canin Gastrointestinal", description: "Bolsa de 2kg:",description2:"Bolsa de 10kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Cardiac",description: "Bolsa de 2kg:",description2:"Bolsa de 10kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Satiety Support", description: "Bolsa de 1.5kg:",description2:"Bolsa de 10kg:",description3:"Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Renal", description: "Bolsa de 1.5kg:",description2:"Bolsa de 10kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Mobilty", description: "Bolsa de 10kg", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Hepatic", description: "Bolsa de 1.5kg:",description2:"Bolsa de 10kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Urinary", description: "Bolsa de 1.5kg:",description2:"Bolsa de 10kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Royal Canin Diabetic Canine", description: "Bolsa de 2kg:",description2:"Bolsa de 10kg:", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            // Otras líneas de productos de la marca "Boca"
        },
        "Eukanuba": {
            "Imagen": "img/eukanuba2.jpg", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Eukanuba Puppy Small", description: "Bolsa de 1kg: ",description2:"Bolsa de 3kg:",description3:"Bolsa de 15kg:", price: "$10.99", image: "product1.jpg" },
                { name: "Eukanuba Puppy Medium", description: "Bolsa de 1kg: ",description2:"Bolsa de 3kg:",description3:"Bolsa de 15kg:", price: "$12.99", image: "product2.jpg" },
                { name: "Eukanuba Puppy Large", description: "Bolsa de 1kg: ",description2:"Bolsa de 3kg:",description3:"Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Adulto Small", description: "Bolsa de 3kg: ",description2:"Bolsa de 7.5kg:",description3:"Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Adulto Medium", description: "Bolsa de 3kg: ",description2:"Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Adulto Large", description: "Bolsa de 3kg: ",description2:"Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Weight Control Small", description: "Bolsa de 3kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Weight Control Medium", description: "Bolsa de 3kg:",description2:"Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Weight Control Large", description: "Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Senior Small", description: "Bolsa de 3kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Senior Medium", description: "Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Eukanuba Senior Large", description: "Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Pedigree": {
            "Imagen": "img/pedrigee.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Pedigree Cachorro", description: "Bolsa de 3kg:", description2:"Bolsa de 21kg:", price: "$10.99", image: "product1.jpg" },
                { name: "Pedigree Adulto Carne, Pollo y Cereal", description: "Bolsa de 3kg:", description2:"Bolsa de 21kg:", price: "$12.99", image: "product2.jpg" },
                { name: "Pedigree Adulto Carne y Vegetales", description: "Bolsa de 21kg", price: "$8.99", image: "product3.jpg" },
                { name: "Pedigree High Protein", description: "Bolsa de 21kg", price: "$8.99", image: "product3.jpg" },
                { name: "Pedigree Adulto Raza Pequeña", description: "Bolsa de 3kg:", description2:"Bolsa de 15kg:", price: "$8.99", image: "product3.jpg" },
                { name: "Pedigree Senior", description: "Bolsa de 8kg", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
       
        "Vital Can": {
            "Imagen": "img/vitalcan.png", // Agrega la imagen de la marca "Boca"
            "Belcan": [
                { name: "Belcan Adulto", description: "Descripción del Producto 1 salto de linea", price: "$10.99", image: "product1.jpg" },
            ],
            "Complete":[
                { name: "Complete Cachorro Mordida Pequeña", description: "Descripción del Producto 2", price: "$12.99", image: "product2.jpg" },
                { name: "Complete Cachorro Mordida Mediana Grande", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Complete Adulto Mordida Pequeña", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Complete Adulto Mordida Pequeña Grande", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Complete Control de Peso", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Complete Senior", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
            ],
            "Premium":[   
                { name: "Premium Cachorro", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Premium Adulto Mordida Pequeña", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Premium Dog Adulto", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Premium Dog Adulto Cordero", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
            ],
            "Balanced":[
                { name: "Balanced Cachorro Small", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Cachorro Medium", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Cachorro Large", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Adulto Small", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Adulto Medium", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Adulto Large", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Control de Peso", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Natural Recipe Cordero", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Cerdo y Arroz", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Senior Large", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Balanced Senior Small", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
            ],
            "Therapy": [
                { name: "Therapy Cardiac Canine", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "Therapy Gastrointestinal Canine", description: "Descripción del Producto 2", price: "$12.99", image: "product2.jpg" },
                { name: "Therapy Obesity Canine", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Therapy Renal Canine", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Therapy Gastroinstestinal Feline", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Therapy Obesity Felinee", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Therapy Renal Feline", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Therapy Urinary Feline", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },

                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Complete Kitten", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },                
                { name: "Complete Gato Adulto", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "Complete Gato Control de Peso", description: "Descripción del Producto 2", price: "$12.99", image: "product2.jpg" },
                { name: "Complete Gato Senior", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "Premium Kitten", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "Premium Gato Urinary", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "Balanced Cat Kitten", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "Balanced Gato Adulto", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "Balanced Gato PH Control (Urinario)", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "Balanced Gato Control de Peso/Castrado", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "Balanced Gato Senior", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            "Belcat": [
                { name: "Belcat Adulto", description: "Descripción del Producto 1 salto de linea", price: "$10.99", image: "product1.jpg" },
            ],
            // Otras líneas de productos de la marca "Boca"
        },
        "Vital Crops": {
            "Imagen": "img/vitalcrops.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "DOGPRO Adulto", description: "Descripción del Producto 1 salto de linea", price: "$10.99", image: "product1.jpg" },
                { name: "DOGPRO Cachorro", description: "Descripción del Producto 2", price: "$12.99", image: "product2.jpg" },
                { name: "DOGPRO Mini Adulto", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "DOGPRO Reduced Calorie", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                { name: "DOGPRO Senior", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },


                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "CATPRO Adultos", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "CATPRO Castrados/indoor", description: "Descripción del Producto 2", price: "$12.99", image: "product2.jpg" },
                { name: "CATPRO Kitten", description: "Descripción del Producto 3", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            // Otras líneas de productos de la marca "Boca"
        },
        "OldPrince": {
            "Imagen": "img/oldprince.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Old Prince Premium Cachorro", description: "Bolsa de 15kg", price: "$10.99", image: "product1.jpg" },
                { name: "Old Prince Premium Adulto", description: "Bolsa de 20kg", price: "$12.99", image: "product2.jpg" },
                { name: "Old Prince Premium Cordero", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Old Prince Puppy", description: "Bolsa de 3kg: ",description2:"Bolsa de 15kg: ", price: "", image: "product3.jpg" },
                { name: "Old Prince Adulto Cordero y Arroz", description: "Bolsa de 3kg", price: "$8.99", image: "product3.jpg" },
                { name: "Old Prince Adulto Cordero y Arroz (Derma defense)", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Old Prince Cordero y Arroz Raza Pequeña", description: "Bolsa de 3kg: ",description2:"Bolsa de 15kg: ", price: "", image: "product3.jpg" },
                { name: "Old Prince Adulto Cordero Light", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Old Prince Adulto Cordero Senior", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Old Prince Adulto Cerdo y Legumbres", description: "Bolsa 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Old Prince Equilibrium Raza Pequeña", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                { name: "Old Prince Equilibrium Raza Med/Grande", description: "Bolsa de 20kg", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Old Prince Kitten Cordero", description: "Bolsa de 3kg", price: "$10.99", image: "product1.jpg" },
                { name: "Old Prince Adulto Cordero", description: "Bolsa de 7.5kg", price: "$12.99", image: "product2.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Nutribon": {
            "Imagen": "img/nutribon.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Nutribon Plus Cachorro", description: "Bolsa de 15kg:", price: "$10.99", image: "img/products/nutribon/pc.jpeg" },
                { name: "Nutribon Plus Perro Adulto", description: "Bolsa de 20kg:", price: "$12.99", image: "img/products/nutribon/pa.jpg" },
                { name: "Nutribon Plus Raza Pequeña", description: "Bolsa de 20kg:", price: "$12.99", image: "img/products/nutribon/prq.png" },
                { name: "Nutribon Criadores", description: "Bolsa de 22kg:", price: "$8.99", image: "img/products/nutribon/criadores.jpg" },
                { name: "Nutribon XQ Cachorro", description: "Bolsa de 8kg:", price: "Bolsa de 20kg:", image: "img/products/nutribon/xqpc.jpg" },
                { name: "Nutribon XQ Adulto", description: "Bolsa de 20kg:", price: "$8.99", image: "img/products/nutribon/xqpa.jpg" },
                { name: "Nutribon MATUTE", description: "Bolsa de 15kg:", price: "Bolsa de 20kg:", image: "img/products/nutribon/matute.jpg" },
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Nutribon Plus Gato", description: "Bolsa de 8kg:   ", price: "Bolsa de 20kg:", image: "img/products/nutribon/gato/plus.jpg" },
                { name: "Nutribon XQ Gato Cachorro", description: "Bolsa de 8kg:", price: "$", image: "img/products/nutribon/gato/xqgc.webp" },
                { name: "Nutribon XQ Gato Adulto", description: "Bolsa de 8kg:", price: "Bolsa de 20kg:", image: "img/products/nutribon/gato/xqga.png" },
                // Agregar más productos con sus datos
            ],
            // Otras líneas de productos de la marca "Boca"
        },
        "Club perfomance": {
            "Imagen": "img/cperfomance.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Perfomance Junior", description: "Bolsa de 15kg", price: "$10.99", image: "product1.jpg" },
                { name: "Perfomance Adulto", description: "Bolsa de 15kg: ",description2:"Bolsa de 20kg: ", price: "", image: "product2.jpg" },
                { name: "Perfomance Weight Control", description: "Bolsa de 15kg", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Perfomance Kitten", description: "Bolsa de 7.5kg", price: "$10.99", image: "product1.jpg" },
                { name: "Perfomance Adulto", description: "Bolsa de 7.5kg", price: "$12.99", image: "product2.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Agility": {
            "Imagen": "img/agilty.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Agility Cachorro", description: "Bolsa de 3kg: ", description2:"Bolsa de 20kg: ", price: "", image: "product1.jpg" },
                { name: "Agility Adulto", description: "Bolsa de 3kg: ", description2:"Bolsa de 20kg: ", price: "", image: "product2.jpg" },
                { name: "Agility Adulto Talla Pequeña", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg: ", price: "", image: "product3.jpg" },
                { name: "Agility Adulto Derma control", description: "Bolsa de 3kg: ", description2:"Bolsa de 15kg: ", price: "", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Agility Kitten", description: "Bolsa de 1.5kg: ", description2:"Bolsa de 10kg: ", price: "", image: "product1.jpg" },
                { name: "Agility Adulto", description: "Bolsa de 1.5kg: ", description2:"Bolsa de 10kg: ", price: "", image: "product2.jpg" },
                { name: "Agility Light", description: "Bolsa de 1.5kg: ", description2:"Bolsa de 10kg: ", price: "", image: "product3.jpg" },
                { name: "Agility Urinary", description: "Bolsa de 1.5kg: ", description2:"Bolsa de 10kg: ", price: "", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Provet": {
            "Imagen": "img/provet.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Provet Cachorro raza pequeña", description: "Bolsa de 15kg", description2:"hola", price: "$10.99", image: "img/products/provet/cachorrorp.png" },
                { name: "Provet Cachorro raza mediana/grande", description: "Bolsa de 15kg", price: "$12.99", image: "img/products/provet/cachorrorm.png" },
                { name: "Provet Alta perfomance raza pequeña", description: "Bolsa de 15kg", price: "$8.99", image: "img/products/provet/perfomancerp.png" },
                { name: "Provet Alta perfomance raza mediana/grande", description: "Bolsa de 20kg", price: "$8.99", image: "img/products/provet/aprm.png" },
                { name: "Provet Mega skin raza mediana/grande", description: "Bolsa de 15kg", price: "$8.99", image: "img/products/provet/ms.png" },
                { name: "Provet Adulto +7 años", description: "Bolsa de 15kg", price: "$8.99", image: "img/products/provet/7.png" },
                { name: "Provet Baja calorias", description: "Bolsa de 15kg", price: "$8.99", image: "img/products/provet/bc.png" },
                { name: "Provet Balance ultra pro cachorros", description: "Bolsa de 15kg", price: "$8.99", image: "img/products/provet/bupc.png" },
                { name: "Provet Balance ultra pro adulto", description: "Bolsa de 20kg", price: "$8.99", image: "img/products/provet/bupa.png" },
                { name: "Provet Total balance cachorro", description: "Bolsa de 15kg", price: "$8.99", image: "img/products/provet/tbc.png" },
                { name: "Provet Total balance adulto", description: "Bolsa de 20kg", price: "$8.99", image: "img/products/provet/tba.png" },
                { name: "Provet Total balance adulto mordida pequeña", description: "Bolsa de 20kg", price: "$8.99", image: "img/products/provet/TMP.jpg" },
                { name: "Provet Can club", description: "Bolsa de 20kg", price: "$8.99", image: "img/products/provet/cc.jpg" },
            ],
            "Gatos": [
                { name: "Provet Gatos", description: "Bolsa de 8kg", price: "$10.99", image: "img/products/provet/cachorrorp.png" },
                { name: "Provet Total Balance gato", description: "Bolsa de 10kg", price: "$10.99", image: "img/products/provet/cachorrorp.png" },
            ],
            // Otras líneas de productos de la marca "Boca"
        },
      
        "Sieger": {
            "Imagen": "img/sieger.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Sieger Cachorro", description: "Bolsa de 15kg", price: "$10.99", image: "product1.jpg" },
                { name: "Sieger Criadores", description: "Bolsa de 20kg", price: "$12.99", image: "product2.jpg" },
                { name: "Sieger Extra Recovery", description: "Sobre de 340gr", price: "$8.99", image: "product3.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "7Vidas": {
            "Imagen": "img/7-vidas.jpg", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "7 Vidas Adulto Carne y Pollo", description: "Descripción del Producto 1", price: "$10.99", image: "product1.jpg" },
                { name: "7 Vidas Adulto Salmón", description: "Descripción del Producto 2", price: "$12.99", image: "product2.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "BIOPET": {
            "Imagen": "img/biopet.jpg", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Biopet", description: "Bolsa de 20kg", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Whiskas": {
            "Imagen": "img/whiskas2.png", // Agrega la imagen de la marca "Boca"
            "Gatos": [
                { name: "Whiskas Gatitos", description: "Bolsa de 1kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                { name: "Whiskas Carne", description: "Bolsa de 1kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                { name: "Whiskas Pollo", description: "Bolsa de 1kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                { name: "Whiskas Pescado", description: "Bolsa de 1kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Dog Selection": {
            "Imagen": "img/dogselection.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Dog Selection Cachorro", description: "Bolsa de 21kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                { name: "Dog Selection Adulto Carne y Pollo", description: "Bolsa de 21kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                { name: "Dog Selection Adulto Raza Pequeña", description: "Bolsa de 15kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Infinity": {
            "Imagen": "img/inifinity.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Infinity", description: "Bolsa de 21kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                { name: "Infinity Raza Pequeña", description: "Bolsa de 15kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                
            ],
            "Gatos": [
                { name: "Infinity Gato", description: "Bolsa de 10kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
               
                
            ],
            // Otras líneas de productos de la marca "Boca"
        },
        "Kongo": {
            "Imagen": "img/kongo.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Kongo Natural Cachorro", description: "Bolsa de 21kg",price: "$10.99", image: "product1.jpg" },
                { name: "Kongo Natural Adulto", description: "Bolsa de 21kg", price: "$10.99", image: "product1.jpg" },                
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Fawna": {
            "Imagen": "img/fawna.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Fawna Cachorro Raza Pequeña", description: "Bolsa de 3kg: ",description2:"Bolsa de 7.5kg: ", price: "", image: "product1.jpg" },
                { name: "Fawna Cachorro Raza Mediana/Grande", description: "Bolsa de 3kg: ",description2:"Bolsa de 7.5kg: ", price: "", image: "product1.jpg" },
                { name: "Fawna Adulto Raza Pequeña",description: "Bolsa de 3kg: ",description2:"Bolsa de 7.5kg: ", price: "", image: "product1.jpg" },
                { name: "Fawna Adulto Mordida Mediana/Grande", description: "Bolsa de 3kg: ",description2:"Bolsa de 15kg: ", price: "", image: "product1.jpg" },
                { name: "Fawna Senior", description: "Bolsa de 3kg: ",description2:"Bolsa de 15kg: ", price: "", image: "product1.jpg" },
                
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Fawna Kitten", description: "Bolsa de 3kg",price: "", image: "product1.jpg" },
                { name: "Fawna Adulto", description: "Bolsa de 3kg: ",description2:"Bolsa de 7.5kg: ", price: "", image: "product1.jpg" },
                { name: "Fawna Adulto Sterilized",description: "Bolsa de 3kg: ",description2:"Bolsa de 7.5kg: ", price: "", image: "product1.jpg" },
                { name: "Fawna Adulto Urinary", description: "Bolsa de 3kg: ",description2:"Bolsa de 7.5kg: ", price: "", image: "product1.jpg" },
               
                
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "MV": {
            "Imagen": "img/mv.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "MV Gastroinstestinal", description: "Bolsa de 2kg: ",description2:"Bolsa de 10kg: ", price: "", image: "product1.jpg" },
                { name: "MV Renal", description: "Bolsa de 2kg: ",description2:"Bolsa de 10kg: ", price: "", image: "product1.jpg" },
                { name: "MV Cardiaco", description: "Bolsa de 2kg: ",description2:"Bolsa de 10kg: ", price: "", image: "product1.jpg" },
                { name: "MV Obesidad", description: "Bolsa de 2kg: ",description2:"Bolsa de 10kg: ", price: "", image: "product1.jpg" },
                { name: "MV Articular", description: "Bolsa de 2kg: ",description2:"Bolsa de 10kg: ", price: "", image: "product1.jpg" },
                
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "MV Gastroinstestinal", description: "Bolsa de 2kg", price: "$10.99", image: "product1.jpg" },
                { name: "MV Renal", description: "Bolsa de 2kg", price: "$10.99", image: "product1.jpg" },
                { name: "MV Obesidad", description: "Bolsa de 2kg", price: "$10.99", image: "product1.jpg" },
                { name: "MV Urinario", description: "Bolsa de 2kg: ",description2:"Bolsa de 7.5kg: ", price: "", image: "product1.jpg" },
                
                // Agregar más productos con sus datos
            ],
            // Otras líneas de productos de la marca "Boca"
        },
        "Estampa": {
            "Imagen": "img/estampa.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Estampa Criadores", description: "Bolsa de 20kg", price: "$10.99", image: "product1.jpg" },
                { name: "Estampa Plus", description: "Bolsa de 20kg", price: "$10.99", image: "product1.jpg" },
                
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Sabrositos": {
            "Imagen": "img/sabrositos.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Sabrositos Cachorro", description: "Bolsa de 18kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                { name: "Sabrositos Adulto", description: "Bolsa de 20kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },             
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Sabrositos gato", description: "Bolsa de 20kg",description2:"Bolsa de 10kg: ", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Vagoneta": {
            "Imagen": "img/vagoneta.jpg", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Vagoneta Gourmet", description: "Bolsa de 20kg",price: "$10.99", image: "product1.jpg" },               
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Vagoneta Gato", description: "Bolsa de 20kg", price: "$10.99", image: "product1.jpg" },               
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "IAMS": {
            "Imagen": "img/iams.png", // Agrega la imagen de la marca "Boca"
            "Gatos": [
                { name: "IAMS Cat Pollo", description: "Bolsa de 15kg", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        "Cooperacion": {
            "Imagen": "img/coop.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Cooperacion Perro Carne", description: "Bolsa de 15kg", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Cooperacion Gato", description: "Bolsa de 10kg sabor Pescado o Pollo", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            // Otras líneas de productos de la marca "Boca"
        },
        "Maintenance Criadores": {
            "Imagen": "img/maintenance.png", // Agrega la imagen de la marca "Boca"
            "Perros": [
                { name: "Maintenance Criadores Cachorro", description: "Bolsa de 15kg", price: "$10.99", image: "product1.jpg" },
                { name: "Maintenance Criadores Adulto", description: "Bolsa de 22kg", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            "Gatos": [
                { name: "Maintenance Criadores Gato Adulto", description: "Bolsa de 21kg", price: "$10.99", image: "product1.jpg" },
                // Agregar más productos con sus datos
            ],
            
            // Otras líneas de productos de la marca "Boca"
        },
        // Otras marcas con líneas de productos y productos
    };

    const specialOffersData = [
        { name: "Oferta 1", description: "Descripción de la Oferta 1", price: "$9.99", image: "offer1.jpg" },
        { name: "Oferta 2", description: "Descripción de la Oferta 2", price: "$7.99", image: "offer2.jpg" },
        { name: "Oferta 3", description: "Descripción de la Oferta 3", price: "$11.99", image: "offer3.jpg" },
        // Agregar más productos en oferta
    ];

    const brandTabs = document.getElementById("brand-tabs");
    const lineTabs = document.getElementById("line-tabs");
    const productContainer = document.getElementById("product-content");
    const specialOffersContainer = document.getElementById("special-offer-content");
    const specialOffersTitle = document.querySelector(".special-offers h2"); // Seleccionar el título


    function generateBrandTabs() {
        for (const brand in data) {
            if (data.hasOwnProperty(brand) && brand !== "Imagen") {
                const brandTab = document.createElement("div");
                brandTab.className = "tab";
                brandTab.innerHTML = `<img src="${data[brand].Imagen}" alt="${brand}" />`;
                brandTabs.appendChild(brandTab);
    
                brandTab.addEventListener("click", () => {
                    hideSpecialOffers(); // Ocultar ofertas cuando se selecciona una marca
                    selectBrand(brand);
                   
                 
                });
            }
        }
    }
    
   

    function updateLineTabs(brand, lines) {
        lineTabs.innerHTML = "";
        for (const line in lines) {
            if (lines.hasOwnProperty(line)) {
                const lineTab = document.createElement("div");
                lineTab.className = "tab";
                lineTab.textContent = line;
                lineTabs.appendChild(lineTab);
    
                lineTab.addEventListener("click", () => {
                    // Mostrar la sección de productos
                    const productsSection = document.getElementById("product-content");
                    showProducts(lines[line]);
    
                    // Esperar un breve tiempo antes de desplazarse hacia abajo
                    setTimeout(() => {
                        productsSection.scrollIntoView({ behavior: "smooth" });
                    }, 50); // Ajusta el tiempo de espera según sea necesario
                });
            }
        }
    }

 
    function showProducts(products) {
        productContainer.innerHTML = "";
        products.forEach((product) => {
            const productItem = document.createElement("div");
            productItem.className = "product";
            const productImage = document.createElement("img");
            productImage.src = product.image;
            productItem.appendChild(productImage);
            const productInfo = document.createElement("div");
            productInfo.className = "product-info";
            const productName = document.createElement("h3");
            productName.textContent = product.name;
            const productDescription = document.createElement("p");
            productDescription.textContent = product.description;
            const productDescription2 = document.createElement("p");
            productDescription2.textContent = product.description2;
            const productDescription3 = document.createElement("p");
            productDescription3.textContent = product.description3;
            const productPrice = document.createElement("p");
            productPrice.textContent = product.price;
            productInfo.appendChild(productName);
            productInfo.appendChild(productDescription);
            productInfo.appendChild(productDescription2);
            productInfo.appendChild(productDescription3);
            productInfo.appendChild(productPrice);
            productItem.appendChild(productInfo);
            productContainer.appendChild(productItem);
        });
    }

    function selectBrand(brand) {
        // Aquí puedes manejar la selección de la marca
        console.log("Seleccionaste la marca: " + brand);
        updateLineTabs(brand, data[brand]);
    }

    function showSpecialOffers(offers) {
        specialOffersContainer.innerHTML = "";
        offers.forEach((offer) => {
            const offerItem = document.createElement("div");
            offerItem.className = "special-offer-item";
            const offerImage = document.createElement("img");
            offerImage.src = offer.image;
            offerItem.appendChild(offerImage);
            const offerInfo = document.createElement("div");
            offerInfo.className = "special-offer-info";
            const offerName = document.createElement("h3");
            offerName.textContent = offer.name;
            const offerDescription = document.createElement("p");
            offerDescription.textContent = offer.description;
            const offerPrice = document.createElement("p");
            offerPrice.textContent = "Precio: " + offer.price;
            offerInfo.appendChild(offerName);
            offerInfo.appendChild(offerDescription);
            offerInfo.appendChild(offerPrice);
            offerItem.appendChild(offerInfo);
            specialOffersContainer.appendChild(offerItem);
        });
    }

    function hideSpecialOffers() {
        specialOffersContainer.innerHTML = "";
        specialOffersTitle.style.display = "none"; // Ocultar ofertas al seleccionar una marca
    }

    generateBrandTabs();

    showSpecialOffers(specialOffersData); // Mostrar productos en oferta al cargar la página
});
