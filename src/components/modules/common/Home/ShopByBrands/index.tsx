"use client";

import MyButton from "@/components/ui/core/MyButton/MyButton";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import { useState } from "react";

interface Brand {
  id: string;
  name: string;
  logo: string;
  productCount: number;
  featured?: boolean;
}

const ShopByBrands = () => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  const brands: Brand[] = [
    {
      id: "rolex",
      name: "ROLEX",
      logo: "https://images.unsplash.com/photo-1626417359455-2377907b1141?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCount: 45,
      featured: true,
    },
    {
      id: "omega",
      name: "OMEGA",
      logo: "https://images.unsplash.com/photo-1626417359455-2377907b1141?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCount: 38,
      featured: true,
    },
    {
      id: "seiko",
      name: "SEIKO",
      logo: "https://images.unsplash.com/photo-1626417359455-2377907b1141?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCount: 67,
    },
    {
      id: "casio",
      name: "CASIO",
      logo: "https://images.unsplash.com/photo-1626417359455-2377907b1141?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCount: 12,
    },
  ];

  const handleBrandClick = (brandId: string, brandName: string) => {
    console.log(`Navigating to ${brandName} products`);
    // Here you would typically navigate to the brand's product page
  };

  return (
    <section className="py-16 bg-white">
      <MyContainer>
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
            POPULAR BRANDS AROUND THE GLOBE!
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            SHOP BY BRANDS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover timepieces from the world's most prestigious watch
            manufacturers
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onClick={() => handleBrandClick(brand.id, brand.name)}
              className={`
                relative group cursor-pointer bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 h-[300px]`}
            >
              {/* Featured Badge */}
              {/* {brand.featured && (
                <div className="absolute z-50 -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  FEATURED
                </div>
              )} */}

              {/* Brand Logo */}
              <div className="flex items-center justify-center h-full w-full mb-4">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className={`
                    w-full h-full object-cover filter transition-all duration-300 rounded-xl
                    ${
                      hoveredBrand === brand.id
                        ? "grayscale-0"
                        : "grayscale hover:grayscale-0"
                    }
                  `}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Brands Button */}
        <div className="flex justify-center items-center mt-12">
          <MyButton label="View Watches by Brand" isArrow />
        </div>
      </MyContainer>
    </section>
  );
};

export default ShopByBrands;
