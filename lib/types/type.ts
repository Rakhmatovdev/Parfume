import {
    Article1, Article2, Article3,Article4,
    Collection1,
    Collection2,
    Collection3,
    Collection4,
    Collection5,
    Collection6, Collection7,
    P1,
    P2,
    P3,
    P4,
    P5
} from "@/public";

const Links = [
    {id: 1, name: "Home", url: "/"},
    {id: 2, name: "About", url: "/about"},
    {id: 3, name: "Contact", url: "/contact"},
    {id: 4, name: "Products", url: "/products"},
]
const Products = [
    {id: 1, image: P1.src, name: "Luxurious Elixir Rough", price: 220, volume: 100},
    {id: 2, image: P2.src, name: "Luxurious Elixir Rough", price: 220, volume: 100},
    {id: 3, image: P3.src, name: "Luxurious Elixir Rough", price: 220, volume: 100},
    {id: 4, image: P4.src, name: "Luxurious Elixir Rough", price: 220, volume: 100},
    {id: 5, image: P5.src, name: "Luxurious Elixir Rough", price: 220, volume: 100},
]

const Collections = [
    {id: 1, image: Collection1.src, name: "Designer Delights Collection"},
    {id: 2, image: Collection2.src, name: "Travel Essentials Collection"},
    {id: 3, image: Collection3.src, name: "Special Occasions Collection"},
    {id: 4, image: Collection4.src, name: "Seasonal Sensations Collection"},
    {id: 5, image: Collection5.src, name: "Vintage Treasures Collection"},
    {id: 6, image: Collection6.src, name: "Limited Edition Treasures"},
    {id: 7, image: Collection7.src, name: "Modern Classics Collection"},
]

const Articles = [
    {
        id: 1,
        image: Article1.src,
        name: "The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir",
        description: "Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many."
    },
    {
        id: 2,
        image: Article2.src,
        name: "The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories",
        description: "A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery."
    },
    {
        id:3,
        image: Article3.src,
        name:"The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance",
        description: "Rose, often referred to as the \"Queen of Flowers,\" has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world."
    }, {
        id:4,
        image: Article4.src,
        name:"The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance",
        description: "Rose, often referred to as the \"Queen of Flowers,\" has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world."
    },
]

const fCategories=[
    {id:1,name:"Fashion",path:"#"},
    {id:2,name:"Jewelry",path:"#"},
    {id:3,name:"Sports",path:"#"},
    {id:4,name:"Electronics",path:"#"},
    {id:5,name:"Indoor",path:"#"},
]

const fShopping=[
    {id:1,name:"Payments",path:"#"},
    {id:2,name:"Delivery options",path:"#"},
    {id:3,name:"Buyer protection",path:"#"},
]

const fCustomers=[
    {id:1,name:"Help center",path:"#"},
    {id:2,name:"Terms & Conditions",path:"#"},
    {id:3,name:"Privacy policy",path:"#"},
    {id:4,name:"Returns & refund",path:"#"},
    {id:5,name:"Survey & feedback",path:"#"},
]

const fPages=[
    {id:1,name:"About Us",path:"#"},
    {id:2,name:"Shop",path:"#"},
    {id:3,name:"Contact Us",path:"#"},
    {id:4,name:"Services",path:"#"},
    {id:5,name:"Blog",path:"#"},
]
export {Links, Products, Collections,Articles,fCategories,fShopping,fCustomers,fPages}