"use client";

import { useState } from "react";
import {
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import { message } from "antd";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";

const TrendingProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);

  const product = {
    id: "trending-001",
    brand: "ROLEX",
    name: "ROLEX SUBMARINER DATE BLUE DIAL OYSTERSTEEL",
    model: "126619LB",
    price: 1250000,
    originalPrice: 1450000,
    discount: 14,
    rating: 4.9,
    reviews: 127,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    fastDelivery: true,
    warranty: "5 Year International Warranty",
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAddingToCart(false);
    message.success(`${quantity} item(s) added to cart!`);
  };

  const handleBuyNow = async () => {
    setIsBuyingNow(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsBuyingNow(false);
    message.success("Redirecting to checkout...");
  };

  const savings = product.originalPrice - product.price;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <MyContainer>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ThunderboltOutlined />
            TRENDING NOW
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Timepiece
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our most sought-after luxury watch
          </p>
        </div>

        {/* Product Showcase */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {/* Product Image Section */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 w-full">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Hot
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 bg-white px-2 py-1 rounded-full shadow">
                <div className="flex items-center gap-1 text-xs">
                  <StarFilled className="text-yellow-400" />
                  <span className="font-semibold">5.00</span>
                </div>
              </div>

              {/* Responsive Image */}
              <div className="w-full max-w-[500px] aspect-square p-4 sm:p-6 md:p-10">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Brand */}
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  {product.brand}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                {product.name}
              </h1>

              {/* Model */}
              <p className="text-sm sm:text-base text-gray-600 mb-5">
                Model: {product.model}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg sm:text-xl text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-green-600 font-semibold text-sm sm:text-base">
                  You save ₹{savings.toLocaleString()}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="p-2 sm:p-3 hover:bg-gray-50 transition-colors disabled:opacity-50"
                      disabled={quantity <= 1}
                    >
                      <MinusOutlined className="text-gray-600" />
                    </button>
                    <span className="px-4 py-2 sm:py-3 font-semibold min-w-[50px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="p-2 sm:p-3 hover:bg-gray-50 transition-colors"
                    >
                      <PlusOutlined className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="w-full bg-white border-2 border-gray-900 text-gray-900 py-3 sm:py-4 px-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isAddingToCart ? (
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <ShoppingCartOutlined />
                      ADD TO CART
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={isBuyingNow}
                  className="w-full bg-gray-900 text-white py-3 sm:py-4 px-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isBuyingNow ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <ThunderboltOutlined />
                      BUY IT NOW
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default TrendingProduct;
