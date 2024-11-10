// src/app/constants/index.ts

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

// Assets are referenced as strings since they are in the public folder
const dish1 = "/assets/dish1.jpeg";
const dish2 = "/assets/dish2.jpeg";
const dish3 = "/assets/dish3.jpeg";
const dish4 = "/assets/dish4.jpeg";
const dish5 = "/assets/dish5.jpeg";
const dish6 = "/assets/dish6.jpeg";
const dish7 = "/assets/dish7.jpeg";
const dish10 = "/assets/dish10.jpeg";
const biryani = "/assets/biryani.jpg"; // Correct way to import from the public folder
const italian = "/assets/italian.jpeg";
const japanese = "/assets/japanese.jpeg";

// Define the structure for the navigation links
interface Link {
  text: string;
  targetId: string;
}

// Define the structure for dishes
interface Dish {
  image: string;
  title: string;
  description: string;
}

// Define the structure for the About section
interface About {
  header: string;
  content: string;
}

// Define the structure for cuisines
interface Cuisine {
  number: string;
  image: string;
  title: string;
  description: string;
}

// Define the structure for the review
interface Review {
  name: string;
  profession: string;
  content: string;
}

// Define the structure for contact information
interface Contact {
  key: string;
  value: string;
}

// Define the structure for social media links
interface SocialMediaLink {
  href: string;
  icon: JSX.Element;
}

export const LINKS: Link[] = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES: Dish[] = [
  {
    image: dish1,
    title: "Spaghetti Carbonara",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    image: dish2,
    title: "Chicken Tikka Masala",
    description: "Pakistani curry with tender chicken in spicy sauce",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    image: dish5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    image: biryani,
    title: "Chicken Biryani",
    description: "Tasty Chicken Biryani with Raita and Salad",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description: "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

export const ABOUT: About = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION: string =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUISINES: Cuisine[] = [
  {
    number: "01.",
    image: biryani,
    title: "Pakistani",
    description:
      "Indulge in the rich and diverse tastes of Pakistan, with a menu that celebrates the country's culinary heritage.",
  },
  {
    number: "02.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "03.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
];

export const REVIEW: Review = {
  name: "Ali Akbar",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Prime Plate, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT: Contact[] = [
  { key: "address", value: "Address: 123 Main Street, Karachi, Pakistan, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@PrimePlate.com" },
];

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
