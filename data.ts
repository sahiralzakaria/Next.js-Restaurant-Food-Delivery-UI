type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        id: 1,
        title: "Sicilian",
        desc: "A bold Sicilian-style pizza loaded with spicy pepperoni, jalapeños, crushed red pepper, and bubbling mozzarella for a fiery flavor explosion.",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 2,
        title: "Bacon Deluxe",
        desc: "A smoky, savory pizza topped with crispy bacon, melted cheddar, caramelized onions, and a drizzle of tangy BBQ sauce on a golden crust.",
        img: "/temporary/p2.png",
        price: 29.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 3,
        title: "Bella Napoli",
        desc: "Authentic Neapolitan-style pizza featuring a thin crust, rich tomato sauce, fresh mozzarella, and fragrant Italian herbs for a timeless classic.",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 4,
        title: "Spicy Arrabbiata",
        desc: "A fiery pizza inspired by the classic Arrabbiata flavor, topped with spicy tomato sauce, red chili flakes, roasted garlic, and melted mozzarella.",
        img: "/temporary/p4.png",
        price: 26.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 5,
        title: "Jalapeño Fiesta",
        desc: "A bold and zesty pizza piled with fiery jalapeños, pepper jack cheese, spicy chipotle sauce, and a mix of vibrant veggies for a flavor-packed bite.",
        img: "/temporary/p5.png",
        price: 29.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 6,
        title: "Margherita Magic",
        desc: "A refined take on the classic Margherita: sweet tomatoes, creamy mozzarella, fresh basil, and a drizzle of olive oil with added arugula and balsamic glaze.",
        img: "/temporary/p6.png",
        price: 24.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 7,
        title: "Garlic Parmesan Delight",
        desc: "A rich garlic-infused pizza topped with creamy Parmesan sauce, fresh parsley, roasted bell peppers, and cherry tomatoes for a savory, aromatic bite.",
        img: "/temporary/p7.png",
        price: 28.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 8,
        title: "Mediterranean Delight",
        desc: "A Mediterranean-inspired pizza featuring feta cheese, Kalamata olives, sun-dried tomatoes, and oregano on a crispy golden crust.",
        img: "/temporary/p8.png",
        price: 32.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 9,
        title: "Hawaiian Teriyaki",
        desc: "A tropical twist combining sweet grilled pineapple, savory bacon, tangy teriyaki glaze, and melted mozzarella on a fluffy pizza base.",
        img: "/temporary/p9.png",
        price: 29.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
];
