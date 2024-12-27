// no es obligatorio el uso de bootstrap

const productos = [
    {
        nombre: "ryzen 3",
        descripcion: 
        `
        Modelo: Ryzen 3 5500G
        Núcleos: 4 núcleos
        Hilos: 8 hilos
        Frecuencia: 3.8GHz - 4.2GHz
        iGPU: Sí (Radeon Graphics)
        Socket: AM4
        Memoria: DDR4
        TDP: 65W
        `,
        precio: 300000,
        categoria: "procesador",
        imagen: "ryzen3.webp",
    },
    {
        nombre: "ryzen 5",
        descripcion: 
        
        `
        Modelo: Ryzen 5 5600G
        Nucleos: 6 nucleos
        Hilos: 12 hilos
        Frecuencia: 3.9ghz - 4.4ghz
        Igpu: si
        Socalo: AM4
        Memoria: ddr4
        TDP: 65W
        `,
        precio: 500000,
        categoria: "procesador",
        imagen: "ryzen5.webp",
    },
    {
        nombre: "ryzen 7",
        descripcion:` 
        Modelo: Ryzen 5 5600G
        Núcleos: 6 núcleos
        Hilos: 12 hilos
        Frecuencia: 3.9GHz - 4.4GHz
        iGPU: sí
        Socket: AM4
        Memoria: DDR4
        TDP: 65W
        `,
        precio: 700000,
        categoria: "procesador",
        imagen: "ryzen7.webp",
    },
    {
        nombre: "ryzen 9",
        descripcion: ` 
        Modelo: Ryzen 9 5900X
        Núcleos: 12 núcleos
        Hilos: 24 hilos
        Frecuencia: 3.9GHz - 4.4GHz
        iGPU: no
        Socket: AM4
        Memoria: DDR4
        TDP: 65W
        `,
        precio: 900000,
        categoria: "procesador",
        imagen: "ryzen9.webp",
    },
    {
        nombre: "rx 6800",
        descripcion: `Modelo: Radeon RX 6800
Arquitectura: RDNA 2
Núcleos: 36 Compute Units (aproximadamente 2304 Stream Processors)
Memoria: 16GB GDDR6
Ancho de banda de memoria: 512 GB/s
Interfaz de memoria: 256-bit
TDP: 250W
Conectores: 8-pin + 8-pin
Tecnología de fabricación: 7nm
Ray tracing: Sí
FSR: Sí (AMD FidelityFX Super Resolution)
VRR: Sí (Variable Refresh Rate)`,
        precio: 800000,
        categoria: "gpu",
        imagen: "rx6800.jpg",
    },
    {
        nombre: "rx 6700",
        descripcion: `Modelo: Radeon RX 6700
Arquitectura: RDNA 2
Núcleos: 32 Compute Units (aproximadamente 2048 Stream Processors)
Memoria: 10GB GDDR6
Ancho de banda de memoria: 384 GB/s
Interfaz de memoria: 192-bit
TDP: 175W
Conectores: 8-pin
Tecnología de fabricación: 7nm
Ray tracing: Sí
FSR: Sí (AMD FidelityFX Super Resolution)
VRR: Sí (Variable Refresh Rate)`,
        precio: 650000,
        categoria: "gpu",
        imagen: "rx6700.webp",
    },
    {
        nombre: "rx 6600",
        descripcion: `Modelo: Radeon RX 6600
Arquitectura: RDNA 2
Núcleos: 28 Compute Units (aproximadamente 1792 Stream Processors)
Memoria: 8GB GDDR6
Ancho de banda de memoria: 224 GB/s
Interfaz de memoria: 128-bit
TDP: 132W
Conectores: 8-pin
Tecnología de fabricación: 7nm
Ray tracing: Sí
FSR: Sí (AMD FidelityFX Super Resolution)
VRR: Sí (Variable Refresh Rate)`,
        precio: 500000,
        categoria: "gpu",
        imagen: "rx6600.webp",
    },
    {
        nombre: "rx 6500",
        descripcion: `Modelo: Radeon RX 6500 XT
Arquitectura: RDNA 2
Núcleos: 16 Compute Units (aproximadamente 1024 Stream Processors)
Memoria: 4GB GDDR6 o 8GB GDDR6 (dependiendo del modelo)
Ancho de banda de memoria: 144 GB/s
Interfaz de memoria: 64-bit
TDP: 107W
Conectores: 6-pin
Tecnología de fabricación: 6nm
Ray tracing: Sí
FSR: Sí (AMD FidelityFX Super Resolution)
VRR: Sí (Variable Refresh Rate)`,
        precio: 320000,
        categoria: "gpu",
        
        imagen: "rx6500.webp",
    },
    {
        nombre: "rtx 4090",
        descripcion: `Modelo: NVIDIA GeForce RTX 4090
Arquitectura: Ada Lovelace
Núcleos: CUDA Cores (número exacto varía según el modelo específico)
Memoria: 24GB GDDR6X
Ancho de banda de memoria: 912 GB/s
Interfaz de memoria: 384-bit
TDP: Aproximadamente 450W (puede variar según el modelo)
Conectores: 16-pin (requiere adaptador a 12VHPWR)
Tecnología de fabricación: 4N
Ray tracing: Sí (tercera generación)
DLSS: Sí (DLSS 3)
VRR: Sí (Compatible con G-SYNC)`,
        precio: 2000000,
        categoria: "gpu",
        imagen: "rtx4090.webp",
    },
    {
        nombre: "rtx 4080",
        descripcion: `Modelo: NVIDIA GeForce RTX 4080
Arquitectura: Ada Lovelace
Núcleos: CUDA Cores (número exacto varía según el modelo específico)
Memoria: 16GB GDDR6X
Ancho de banda de memoria: 616 GB/s
Interfaz de memoria: 256-bit
TDP: Aproximadamente 320W (puede variar según el modelo)
Conectores: 16-pin (requiere adaptador a 12VHPWR)
Tecnología de fabricación: 4N
Ray tracing: Sí (tercera generación)DLSS: Sí (DLSS 3)VRR: Sí (Compatible con G-SYNC)`,
        precio: 1300000,
        categoria: "gpu",
        imagen: "rtx4080.webp",
    },
    {
        nombre: "rtx 4070",
        descripcion: `Modelo: NVIDIA GeForce RTX 4070
Arquitectura: Ada Lovelace
Núcleos: CUDA Cores (número exacto varía según el modelo específico)
Memoria: 12GB GDDR6X
Ancho de banda de memoria: 448 GB/s
Interfaz de memoria: 192-bit
TDP: Aproximadamente 200W (puede variar según el modelo)
Conectores: 16-pin (requiere adaptador a 12VHPWR)
Tecnología de fabricación: 4N
Ray tracing: Sí (tercera generación)DLSS: Sí (DLSS 3)VRR: Sí (Compatible con G-SYNC)`,
        precio: 1000000,
        categoria: "gpu",
        imagen: "rtx4070.webp",
    },
    {
        nombre: "rtx 4060",
        descripcion: `Modelo: NVIDIA GeForce RTX 4060
Arquitectura: Ada Lovelace
Núcleos: CUDA Cores (número exacto varía según el modelo específico)
Memoria: 8GB GDDR6X
Ancho de banda de memoria: 288 GB/s
Interfaz de memoria: 128-bit
TDP: Aproximadamente 115W (puede variar según el modelo)
Conectores: 8-pin
Tecnología de fabricación: 4N
Ray tracing: Sí (tercera generación)DLSS: Sí (DLSS 3)VRR: Sí (Compatible con G-SYNC)`,
        precio: 700000,
        categoria: "gpu",
        imagen: "rtx4060.webp",
    },
    {
        nombre: "rtx 4050",
        descripcion: `Modelo: NVIDIA GeForce RTX 4050
Arquitectura: Ada Lovelace
Núcleos: CUDA Cores (número exacto varía según el modelo específico)
Memoria: 6GB GDDR6
Ancho de banda de memoria: 180 GB/s
Interfaz de memoria: 96-bit
TDP: Aproximadamente 100W (puede variar según el modelo)
Conectores: 8-pin
Tecnología de fabricación: 4N
Ray tracing: Sí (tercera generación)DLSS: Sí (DLSS 3)VRR: Sí (Compatible con G-SYNC)`,
        precio: 500000,
        categoria: "gpu",
        imagen: "rtx4050.jpg",
    },
    {
        nombre: "intel core i9",
        descripcion: `Modelo: Intel Core i9-13900K
Arquitectura: Raptor Lake
Núcleos: 24 (8 P-cores + 16 E-cores)
Hilos: 32
Frecuencia base: 3.0 GHz (P-cores) / 2.2 GHz (E-cores)
Frecuencia turbo máxima: 5.8 GHz
Caché: 36 MB Intel Smart Cache
Tecnología de fabricación: Intel 7
Socket: LGA 1700
TDP: 125W`,
        precio: 900000,
        categoria: "procesador",
        imagen: "i9.jpg",
    },
    {
        nombre: "intel core i7",
        descripcion: `Modelo: Intel Core i7-13700K
Arquitectura: Raptor Lake
Núcleos: 16 (8 P-cores + 8 E-cores)
Hilos: 24
Frecuencia base: 3.4 GHz (P-cores) / 2.5 GHz (E-cores)
Frecuencia turbo máxima: 5.4 GHz
Caché: 30 MB Intel Smart Cache
Tecnología de fabricación: Intel 7
Socket: LGA 1700
TDP: 125W`,
        precio: 500000,
        categoria: "procesador",
        imagen: "i7.webp",
    },
    {
        nombre: "intel core i5",
        descripcion: `Modelo: Intel Core i5-13500K
Arquitectura: Raptor Lake
Núcleos: 14 (6 P-cores + 8 E-cores)
Hilos: 20
Frecuencia base: 2.5 GHz (P-cores) / 1.8 GHz (E-cores)
Frecuencia turbo máxima: 4.8 GHz
Caché: 24 MB Intel Smart Cache
Tecnología de fabricación: Intel 7
Socket: LGA 1700
TDP: 65W`,
        precio: 300000,
        categoria: "procesador",
        imagen: "i5.webp",
    },
    {
        nombre: "intel core i3",
        descripcion: `Modelo: Intel Core i3-13300K
Arquitectura: Raptor Lake
Núcleos: 4 (4 P-cores)
Hilos: 8
Frecuencia base: 3.4 GHz
Frecuencia turbo máxima: 5.1 GHz
Caché: 12 MB Intel Smart Cache
Tecnología de fabricación: Intel 7
Socket: LGA 1700
TDP: 89W`,
        precio: 120000,
        categoria: "procesador",
        imagen: "i3.webp",
    },
    {
        nombre: "intel pentium",
        descripcion: `Modelo: Intel Pentium Gold G7500 
Arquitectura: Gracemont 
Núcleos: 2
Hilos: 4 (con tecnología Hyper-Threading)
Frecuencia base: 3.5 GHz
Frecuencia turbo máxima: 3.8 GHz
Caché: 4 MB
Tecnología de fabricación: Intel 10nm SuperFin
Socket: LGA 1200 
TDP: 35W`,
        precio: 70000,
        categoria: "procesador",
        imagen: "pentium.jpg",
    },
    {
        nombre: "SSD Kingstone 1tb",
        descripcion: ``,
        precio: 70000,
        categoria: "SSD",
        imagen: "SSDKingstone.jfif",
    },
    {
        nombre: "SSD Kingstone 500gb",
        descripcion: ``,
        precio: 50000,
        categoria: "SSD",
        
        imagen: "SSDKingstone.jfif",
    },
    {
        nombre: "SSD Kingstone 240gb",
        descripcion: ``,
        precio: 30000,
        categoria: "SSD",
        imagen: "SSDKingstone.jfif",
        descripcion: "",
    },
    {
        nombre: "Disco Duro Seagate 2tb",
        descripcion: ``,
        precio: 90000,
        categoria: "HDD",
        imagen: "seagate.webp",
    },
    {
        nombre: "Disco Duro Seagate 1tb",
        descripcion: ``,
        precio: 70000,
        categoria: "HDD",
        imagen: "seagate.webp",
    },
    {
        nombre: "Disco Duro WD Blue 4tb",
        descripcion: ``,
        precio: 120000,
        categoria: "HDD",
        imagen: "wdblue.jfif",
    },
    {
        nombre: "Disco Duro WD Blue 1tb",
        descripcion: ``,
        precio: 70000,
        categoria: "HDD",
        imagen: "wdblue.jfif",
    },
    {
        nombre: "Disco Duro WD Blue 320gb",
        descripcion: ``,
        precio: 20000,
        categoria: "HDD",
        imagen: "wdblue.jfif",
    },
]