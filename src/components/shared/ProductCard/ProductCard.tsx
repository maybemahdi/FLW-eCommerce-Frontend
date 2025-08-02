"use client";

import { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import MyButton from "@/components/ui/core/MyButton/MyButton";

interface ProductCardProps {
  product: {
    id: string;
    brand: string;
    model: string;
    price: number;
    originalPrice?: number;
    image: string;
    isNew?: boolean;
  };
  tag?: string;
}

const ProductCard = ({ product, tag }: ProductCardProps) => {
  const { id, brand, model, price, originalPrice, image, isNew } = product;

  const handleAddToCart = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    message.success("Added to cart successfully!");
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {tag ? (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {tag}
            </span>
          ) : (
            ""
          )}
        </div>

        {/* Product Image */}
        <img
          src={image || "/placeholder.svg"}
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-primary px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <h3 className="font-bold text-primary text-sm mb-1 uppercase tracking-wide">
          {brand}
        </h3>

        {/* Model */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{model}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <MyButton
          onClick={handleAddToCart}
          label="Add To Cart"
          fullWidth
          variant="filled"
        />
      </div>
    </div>
  );
};

export default ProductCard;
