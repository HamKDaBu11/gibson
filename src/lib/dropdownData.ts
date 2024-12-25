import { StaticImageData } from "next/image";
import electricDropdownImage from "../../public/electric_dropdown_img.png";
import gibsonTVDropdownImage from "../../public/gibson_tv_dropdown_img.png";

interface StringArrayWrapper {
  strings: string[];
}

interface DropdownImage {
  label: string;
  url: StaticImageData;
  description: string;
}

export interface DropdownContents {
  collections: StringArrayWrapper[];
  image?: DropdownImage;
}

export const electricDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "Featured",
        "Holiday Gift Guide",
        "New Arrivals",
        "Best Sellers",
        "Gibson Custom Select",
        "Made to Measure",
        "Les Paul Studio Series",
        "Gibson Amplifiers",
        "Epiphone Inspired by Gibson",
      ],
    },
    {
      strings: [
        "By Body Style",
        "Les Paul",
        "SG",
        "ES",
        "Explorer",
        "Firebird",
        "Flying V",
        "Shop All Electrics",
      ],
    },
    {
      strings: [
        "Gibson Exclusives",
        "Dark Walnut Series",
        "Purple Series",
        "Classic White Series",
        "Ebony Series",
        "Shop All Exclusives",
      ],
    },
    {
      strings: [
        "Collections",
        "Original Collection",
        "Modern Collection",
        "Artist Collection",
        "Mod Collection",
        "Shop All Electrics",
      ],
    },
    {
      strings: [
        "Bass",
        "Thunderbird",
        "SG Bass",
        "Les Paul Bass",
        "Shop All Bass",
      ],
    },
  ],
  image: {
    label: "Certified Vintage",
    url: electricDropdownImage,
    description: "Shop the Gibson Certified Vintage Collection",
  },
};

export const acousticDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "Featured",
        "Holiday Gift Guide",
        "New Arrivals",
        "Best Sellers",
        "Murphy Lab Collection",
        "Made to Measure",
        "Jimmy Page 1964 SJ-200",
        "Johnny Cash SJ-200 & Rosanne Cash J-185",
        "Studio Series",
        "Faded Series",
        "Epiphone Inspired by Gibson Acoustic",
      ],
    },
    {
      strings: [
        "By Body Style",
        "Small Body",
        "Round Shoulder",
        "Square Shoulder",
        "Jumbo & Super Jumbo",
        "Learn More",
        "Shop All Acoustics",
      ],
    },
    {
      strings: [
        "Gibson Exclusives",
        "Blueberry Burst Series",
        "Tri Burst Series",
        "Ebony Series",
        "Honey Burst J-45s",
        "Antique Natural J-45s",
        "Shop All Exclusives",
      ],
    },
    {
      strings: [
        "Collections",
        "Original Collection",
        "Modern Collection",
        "Artist Collection",
        "Generation Collection",
        "Learn More",
        "Shop All Electrics",
      ],
    },
    {
      strings: ["Mandolins", "Mandolins", "Epiphone Bluegrass Collection"],
    },
  ],
  image: {
    label: "Certified Vintage",
    url: electricDropdownImage,
    description: "Shop the Gibson Certified Vintage Collection",
  },
};

export const gibsonCustomDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "Featured",
        "Made to Measure",
        "New Arrivals",
        "Gibson Custom Select",
        "Jimmy Page 1964 SJ-200",
        "J-45 Orville Artisan 130th Anniversary Limited Edition",
        "Jimmy Page 1964 SJ-200",
        "Jeff Beck YardBurst 1959 Les Paul Standard",
        "Jason Isbell Red Eye 1959 Les Paul Standard",
      ],
    },
    {
      strings: [
        "Gibson Custom Electrics",
        "Historic Collection",
        "Modern Collection",
        "Murphy Lab",
        "Artist Collection",
        "Master Artisan Collection",
        "Epiphone Inspired by Gibson Custom",
      ],
    },
    {
      strings: [
        "Gibson Custom Acoustics",
        "Historic Collection",
        "Modern Collection",
        "Murphy Lab",
        "Mandolins",
        "Epiphone Inspired by Gibson Custom",
      ],
    },
  ],
  image: {
    label: "Gibson TV: The Process",
    url: gibsonTVDropdownImage,
    description: "Watch The Process on Gibson TV",
  },
};

export const ampsAndEffectsDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "Gibson Amplifiers",
        "Exclusive Gibson Falcon Amps",
        "Gibson Dual Falcon 20 Combo",
        "Gibson Falcon 20 Combo",
        "Gibson Falcon 5 Combo",
        "Shop All Gibson Amps",
      ],
    },
    {
      strings: [
        "MESA/Boogie Amplifiers",
        "Mark Series",
        "Rectifier",
        "California Tweed",
        "Fillmore",
        "Badlander",
        "Triple Crown",
        "Shop All Mesa/Boogie Amps",
      ],
    },
    {
      strings: [
        "Maestro Pedals",
        "Fuzz-Tone FZ-M",
        "Titan Boost",
        "Orbit Phaser",
        "Invader Distortion",
        "Shop All Maestro Pedals",
      ],
    },
  ],
};

export const partsAndPickupsDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "Featured",
        "1959 Humbucker Collector's Edition, Series 2",
        "1959 Humbucker Collector's Edition, Series 1",
        "Kramer Pickups",
      ],
    },
    {
      strings: [
        "Pickup Shop",
        "Historic Collection",
        "Original Collection",
        "Modern Collection",
        "Artist Collection",
        "Kramer Collection",
        "Shop All Pickups",
      ],
    },
    {
      strings: [
        "Parts",
        "Tuning Machines",
        "Pickguards",
        "Bridges",
        "Tailpieces",
        "Knobs",
        "Covers",
        "Switches",
        "Mounting",
        "Potentiometers",
        "Strap Buttons",
      ],
    },
  ],
};

export const accessoriesDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "Cases",
        "Calton Cases",
        "Lifton Historic Cases",
        "Travel Cases & Gig Bags",
        "Original Cases",
        "Modern Cases",
        "Shop All Cases",
      ],
    },
    {
      strings: [
        "Guitar Accessories",
        "Straps",
        "Picks",
        "Instrument Cables",
        "Cleaning and Care",
        "Capos",
        "Stands",
        "Tuners",
        "Soundhole Covers",
        "Shop All Guitar Accessories",
      ],
    },
    {
      strings: [
        "Strings",
        "Electric Guitar Strings",
        "Acoustic Guitar Strings",
        "Bass Guitar Strings",
        "Banjo Strings",
        "Shop All Strings",
      ],
    },
  ],
};

export const lifestyleDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "Apparel",
        "Shirts & Tops",
        "Sweatshirts & Outerwear",
        "Artist Collection",
        "Hats & Headwear",
        "Kids",
        "Shop All Apparel",
      ],
    },
    {
      strings: [
        "Collaborations",
        "Mary Ford Collection",
        "imogene + willie",
        "Billy Reid",
        "H Bar C",
        "Women Who Rock",
      ],
    },
    {
      strings: [
        "Lifestyle Accessories",
        "Lifton Leather Goods",
        "Dog Collars",
        "Pins & Patches",
        "Keychains",
        "Shop All Lifestyle Accessories",
      ],
    },
    {
      strings: [
        "Home & Office",
        "Repurpose Collection™",
        "Books",
        "Mini Guitars",
        "Collectibles",
        "Posters & Signage",
        "Seating & Stools",
        "Shop All Home & Office",
      ],
    },
  ],
};

export const supportDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "WELCOME",
        "Register Your Guitar",
        "Serial Number Information",
        "Find a Dealer Near You",
        "Online Dealers",
        "Gibson Gazette",
      ],
    },
    {
      strings: [
        "Maintenance & Service",
        "Virtual Guitar Tech",
        "Gibson TV: Gibson Guide to Guitar Setup and Maintenance",
        "Register Your Guitar",
        "Warranty Information",
        "Frequently Asked Questions",
        "User Manuals",
        "Financing",
      ],
    },
    {
      strings: [
        "Policies",
        "Shipping & Return Policies",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      strings: [
        "Product Support",
        "Legacy Product Archive",
        "Report Fakes & Scams",
        "Fan-Use License Program",
      ],
    },
  ],
};

export const discoverDropdown: DropdownContents = {
  collections: [
    {
      strings: [
        "Featured",
        "A Complete Unknown: The Collection",
        "Gibson Gazette: A Complete Unknown",
      ],
    },
    {
      strings: ["Gibson Artists", "Slash", "Kirk Hammett", "Dave Mustaine"],
    },
    {
      strings: [
        "GIBSON GARAGE",
        "Nashville",
        "London",
        "Gibson Garage Nashville Virtual Tour",
      ],
    },
    {
      strings: [
        "Gibson Media",
        "Gibson Gazette",
        "Gibson Records",
        "Gibson Books",
        "Gibson TV",
      ],
    },
  ],
};
