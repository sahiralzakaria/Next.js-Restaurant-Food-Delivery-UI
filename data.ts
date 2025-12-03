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
        desc: "A bold fusion of spicy pepperoni, jalapeños, and red pepper flakes layered over melted mozzarella, bringing heat and rich flavor in every slice.",
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
        desc: "Enjoy a hearty bite with a flame-grilled beef patty stacked with crispy bacon, smooth cheddar, sweet caramelized onions, and a touch of smoky BBQ sauce.",
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
        desc: "Inspired by traditional Italian flavors: a thin crisp base topped with tangy tomato sauce, fresh mozzarella, aromatic herbs, and garden-fresh vegetables.",
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
        desc: "A fiery pasta favorite featuring penne tossed in a bold, spicy tomato sauce with garlic, chili flakes, and fresh basil for a warm, comforting kick.",
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
        desc: "A vibrant burger built with a juicy beef patty, spicy jalapeños, pepper jack cheese, and creamy chipotle mayo, all layered on a toasted bun.",
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
        desc: "A fresh take on a classic: sweet tomatoes, creamy mozzarella, and fragrant basil drizzled with olive oil, finished with arugula and a touch of balsamic glaze.",
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
        title: "Garlic Parmesan Linguine",
        desc: "A creamy blend of garlic and Parmesan coating tender linguine, topped with fresh parsley, bell peppers, and sweet cherry tomatoes.",
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
        desc: "A refreshing mix of feta cheese, Kalamata olives, sun-dried tomatoes, and oregano, highlighting the vibrant flavors of the Mediterranean.",
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
        desc: "A tropical twist with a teriyaki-glazed beef patty topped with grilled pineapple, crispy bacon, fresh lettuce, and classic burger fixings.",
        img: "/temporary/p9.png",
        price: 29.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
];
