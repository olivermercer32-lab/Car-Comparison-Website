
const carInventory = {
            "audi-rs3": {
                name: "Audi RS3",
                brand: "AUDI",
                tagline: "Five-cylinder rally heritage packed into an aggressive street machine.",
                image: "https://images.unsplash.com/photo-1706112232462-cbcaaf06fc6e?auto=format&fit=crop&w=600&q=80",
                bhp: 395, torque: 500, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 62000,
                quarterLap: 11.8, zero60: 3.6, zero100: 8.7, reliability: 4.0, maintenance: 3.5, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Compact Sedan', drive: 'Quattro', year: '2026' }
            },
            "bmw-m3-g80": {
                name: "BMW M3 Competition (G80)",
                brand: "BMW M",
                tagline: "The absolute benchmark for everyday track-capable performance sedans.",
                image: "https://images.unsplash.com/photo-1723555238240-575d5e5b38f8?auto=format&fit=crop&w=600&q=80",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },   
            "bmw-m3-f80": {
                name: "BMW M3 (F80)",
                brand: "BMW",
                tagline: "",
                image: "/images/f80.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-m3-e90": {
                name: "BMW M3 (E90)",
                brand: "BMW",
                tagline: "",
                image: "/images/e90.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m3-e46": {
                name: "BMW M3 (E46)",
                brand: "",
                tagline: "",
                image: "/images/e46.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m3-e36": {
                name: "BMW M3 (E36)",
                brand: "BMW",
                tagline: "",
                image: "/images/e36.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m3-e30": {
                name: "BMW M3 (E30)",
                brand: "BMW",
                tagline: "",
                image: "/images/e30.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m5-e28": {
                name: "BMW M5 (E28)",
                brand: "BMW",
                tagline: "",
                image: "/images/e28.webp",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m5-e34": {
                name: "BMW M4 (E34)",
                brand: "BMW",
                tagline: "",
                image: "/images/e34.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m5-e39": {
                name: "BMW M5 (E39)",
                brand: "BMW",
                tagline: "",
                image: "/images/e39.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m5-e60": {
                name: "BMW (E60)",
                brand: "BMW",
                tagline: "",
                image: "/images/e60.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m5-f10": {
                name: "BMW M5 (F10)",
                brand: "BMW",
                tagline: "",
                image: "/images/f10.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m5-f90": {
                name: "BMW M5 (F90)",
                brand: "BMW",
                tagline: "",
                image: "/images/f90.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m4-f82": {
                name: "BMW M4 (F82)",
                brand: "BMW",
                tagline: "",
                image: "/images/f82.avif",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-1m-e82": {
                name: "BMW 1M (E82)",
                brand: "BMW",
                tagline: "",
                image: "/images/e82.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m2-f87": {
                name: "BMW M2 (F87)",
                brand: "BMW",
                tagline: "",
                image: "/images/f87.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m6-e24": {
                name: "BMW M5 (E24)",
                brand: "BMW",
                tagline: "",
                image: "/images/e24.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m6-e63": {
                name: "BMW M6 (E63)",
                brand: "BMW",
                tagline: "",
                image: "/images/e63.webp",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m6-f12": {
                name: "BMW M6 (F12)",
                brand: "BMW",
                tagline: "",
                image: "/images/f12.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },    
            "bmw-m6-f06": {
                name: "BMW M6 (F06)",
                brand: "BMW",
                tagline: "",
                image: "/images/f06.webp",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x3-g01": {
                name: "BMW X3M (G01)",
                brand: "BMW",
                tagline: "",
                image: "/images/g01.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x3-f97": {
                name: "BMW X3M (F97)",
                brand: "BMW",
                tagline: "",
                image: "/images/",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x4-f98": {
                name: "BMW X4M (F98)",
                brand: "BMW",
                tagline: "",
                image: "",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x5-f95": {
                name: "BMW X5M (F95)",
                brand: "BMW",
                tagline: "",
                image: "/images/f95.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x5-f85": {
                name: "BMW X5M (F85)",
                brand: "BMW",
                tagline: "",
                image: "/images/f85.webp",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x5-e70": {
                name: "BMW X5M (E70)",
                brand: "BMW",
                tagline: "",
                image: "/images/e70.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x6-f96": {
                name: "BMW X6M (F96)",
                brand: "BMW",
                tagline: "",
                image: "/images/f96.avif",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x6-f86": {
                name: "BMW X6M (F86)",
                brand: "BMW",
                tagline: "",
                image: "/images/f86.jpeg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-x6-e71": {
                name: "BMW X6M (E71)",
                brand: "BMW",
                tagline: "",
                image: "/images/e71.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-xm-g09": {
                name: "BMW XM (G09)",
                brand: "BMW",
                tagline: "",
                image: "",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-z3-e37": {
                name: "BMW Z3M (E37)",
                brand: "BMW",
                tagline: "",
                image: "/e35.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },  
            "bmw-z4-e85": {
                name: "BMW Z4M (E85)",
                brand: "BMW",
                tagline: "",
                image: "/images/e85.jpg",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 85300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Sedan', drive: 'xDrive', year: '2025' }
            },        
            "bmw-m4-g82": {
                name: "BMW M4 Competition (G82)",
                brand: "BMW",
                tagline: "Aggressive styling meets razor-sharp coupe handling dynamics.",
                image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=600&q=80",
                bhp: 523, torque: 650, topSpeedLimited: 155, topSpeedUnlimited: 180, price: 88300,
                quarterLap: 11.0, zero60: 3.4, zero100: 7.6, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m2-g87": {
                name: "BMW M2 Coupe (G87)",
                brand: "BMW",
                tagline: "A pure driver's car featuring a short wheelbase and raw power.",
                image: "https://images.unsplash.com/photo-1706593922339-fe29707e408d?auto=format&fit=crop&w=600&q=80",
                bhp: 473, torque: 600, topSpeedLimited: 155, topSpeedUnlimited: 177, price: 66000,
                quarterLap: 11.7, zero60: 3.9, zero100: 8.5, reliability: 4.0, maintenance: 3.0, modifiability: 4.5,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Compact Coupe', drive: 'RWD', year: '2025' }
            },
            "bmw-m5-g90": {
                name: "BMW M5 Hybrid (G90)",
                brand: "BMW",
                tagline: "An electrifying high-performance executive missile with plug-in architecture.",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
                bhp: 727, torque: 1000, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 120500,
                quarterLap: 11.1, zero60: 3.4, zero100: 7.3, reliability: 3.5, maintenance: 2.0, modifiability: 3.5,
                meta: { tag: 'Hybrids', style: 'bg-amber-500/10 text-amber-400 border-amber-500/20', body: 'PHEV Sedan', drive: 'M xDrive', year: '2026' }
            },
            "bmw-m8": {
                name: "BMW M8 Competition Gran Coupe",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m135i": {
                name: "BMW M135i",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m135i.jpg",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m140i": {
                name: "BMW M140i",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m140i.png",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m235i": {
                name: "BMW M235i",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m235i.jpeg",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m235i-grancoupe": {
                name: "BMW M235i Gran Coupe",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m235i-grancoupe.png",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m240i": {
                name: "BMW M240i",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m240i.png",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m340i": {
                name: "BMW M340i",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m340i.png",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m440i": {
                name: "BMW M440i",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m440i.png",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m550i": {
                name: "BMW M550i",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m550i.png",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m760e": {
                name: "BMW m760e",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m760e",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
            "bmw-m850i": {
                name: "BMW M850i",
                brand: "BMW",
                tagline: "An ultra-luxurious, long-distance cruiser with hypercar power.",
                image: "/images/m850i.png",
                bhp: 617, torque: 750, topSpeedLimited: 155, topSpeedUnlimited: 190, price: 138800,
                quarterLap: 10.7, zero60: 3.0, zero100: 6.9, reliability: 3.5, maintenance: 2.0, modifiability: 4.0,
                meta: { tag: 'Supercars', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20', body: 'Gran Coupe', drive: 'xDrive', year: '2025' }
            },
        };