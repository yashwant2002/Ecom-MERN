import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const NewNavbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const menuData = [
    {
      name: "Men Wear",
      columns: [
        {
          title: "Top Wear",
          items: ["T-Shirt", "Casual Shirts", "Formal Shirts", "Blazers & Coats", "Suits", "Jackets"],
        },
        {
          title: "Western Wear",
          items: ["Dresses", "Jumpsuits", "Tops, T-Shirts & Shirts", "Shorts & Skirts", "Shrugs", "Blazers"],
        },
        {
          title: "Footwear",
          items: ["Flats", "Casual Shoes", "Heels", "Boots"],
        },
        {
          title: "Sports & Active Wear",
          items: ["Clothing", "Footwear", "Sports Accessories"],
        },
        {
          title: "Lingerie & Sleepwear",
          items: ["Bra", "Briefs", "Sleepwear"],
        },
      ],
    },
    {
      name: "Women Wear",
      columns: [
        {
          title: "Ethnic Wear",
          items: ["Sarees", "Kurtas", "Lehengas", "Ethnic Dresses"],
        },
        {
          title: "Casual Wear",
          items: ["Tops", "Jeans", "Shorts", "Skirts"],
        },
        {
          title: "Footwear",
          items: ["Sandals", "Heels", "Flats"],
        },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">CHAWK BAZAR</h1>

        {/* Menu Items */}
        <ul className="flex items-center gap-6">
          {menuData.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => toggleDropdown(menu.name)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-black">
                {menu.name} <FaCaretDown />
              </button>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>

              {/* Dropdown */}
              {dropdown === menu.name && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg border rounded-lg p-6 grid grid-cols-5 gap-6 w-[1000px] z-50">
                  {menu.columns.map((column, colIndex) => (
                    <div key={colIndex}>
                      <h3 className="text-gray-700 font-semibold mb-2">
                        {column.title}
                      </h3>
                      <ul>
                        {column.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-600 hover:text-black transition py-1"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}

          {/* Static Items */}
          <li className="relative group">
            <button className="text-gray-800 font-medium hover:text-black">
              Search
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="relative group">
            <button className="text-gray-800 font-medium hover:text-black">
              Shops
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="relative group">
            <button className="text-gray-800 font-medium hover:text-black">
              Pages
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
          </li>
        </ul>

        {/* Right-Side Options */}
        <div className="flex items-center gap-4">
          <button className="text-gray-800 font-medium hover:text-black">
            English - EN
          </button>
          <button className="text-gray-800 font-medium hover:text-black">
            Sign In
          </button>
          <div className="relative">
            <button className="text-gray-800 font-medium hover:text-black">
              🛒
            </button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
