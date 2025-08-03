import React from "react";
import demo from "@/assets/images/demo.jpg";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import Link from "next/link";

const RelatedProductSection = ({ productId }: { productId: string }) => {
  const relatedWatches = [
    {
      id: "1",
      brand: "ROLEX",
      model: "Submariner Date Blue Dial Steel",
      price: 850000,
      originalPrice: 950000,
      image: demo.src,
      isNew: true,
    },
    {
      id: "2",
      brand: "OMEGA",
      model: "Speedmaster Professional Moonwatch",
      price: 425000,
      image: demo.src,
    },
    {
      id: "3",
      brand: "SEIKO",
      model: "Prospex Solar Diver's Watch",
      price: 28500,
      originalPrice: 32000,
      image: demo.src,
    },
    {
      id: "4",
      brand: "CASIO",
      model: "G-Shock GA-2100 Carbon Core Guard",
      price: 12500,
      image: demo.src,
      isNew: true,
    },
    {
      id: "5",
      brand: "CITIZEN",
      model: "Eco-Drive Chronograph Blue Dial",
      price: 45000,
      originalPrice: 52000,
      image: demo.src,
    },
    {
      id: "6",
      brand: "TISSOT",
      model: "PRC 200 Chronograph Black Dial",
      price: 38500,
      image: demo.src,
    },
    {
      id: "7",
      brand: "FOSSIL",
      model: "Grant Chronograph Brown Leather",
      price: 15500,
      originalPrice: 18500,
      image: demo.src,
    },
    {
      id: "8",
      brand: "GARMIN",
      model: "Fenix 7 Solar Multisport GPS",
      price: 85000,
      image: demo.src,
      isNew: true,
    },
  ];
  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Related Watches
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Check out our collection of related watches that are perfect for you.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {relatedWatches?.map((watch) => (
          <ProductCard key={watch.id} product={watch} tag={"New"} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center mt-12">
        <Link href={"/shop"}>
          <MyButton label="View All Watches" isArrow />
        </Link>
      </div>
    </div>
  );
};

export default RelatedProductSection;
