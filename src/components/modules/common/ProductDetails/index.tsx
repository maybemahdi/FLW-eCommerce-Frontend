"use client";

import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import {
  CheckCircleOutlined,
  GiftOutlined,
  SafetyOutlined,
  ShoppingCartOutlined,
  StarFilled,
  ThunderboltOutlined,
} from "@ant-design/icons";
import type { TabsProps } from "antd";
import { message, Tabs } from "antd";
import { useState } from "react";
import RelatedProductSection from "./RelatedProductSection";

const ProductDetailsPage = ({ id }: { id: string }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);

  // Sample product data - in real app, this would come from API based on params.id
  const product = {
    id: "cr4011za-st-bl-mt",
    name: "CR4011ZA ST BL MT",
    model: "CR4011ZA ST BL MT",
    barcode: "7037622",
    brand: "CITIZEN",
    price: 14300,
    originalPrice: 16500,
    discount: 13,
    inStock: true,
    stockStatus: "AVAILABLE",
    gender: "MALE",
    braceletType: "CHAIN",
    rating: 4.8,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?q=80&w=1455&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    specifications: {
      productCode: "CR4011ZA ST BL MT",
      family: "Misaki",
      movement: "JAPAN",
      caseMetal: "Stainless Steel",
      caseSize: "43 mm",
      caseColor: "Stainless Steel",
      braceletMaterial: "Chain",
      braceletColor: "Stainless Steel",
      glass: "Sapphire",
      dialColor: "Blue",
      buckle: "Butterfly Buckle with Double push",
      waterResistance: "5 ATM",
    },
    features: [
      "Japanese Movement",
      "Sapphire Crystal Glass",
      "Water Resistant 5 ATM",
      "Butterfly Buckle",
      "Luminous Hands",
      "Date Display",
    ],
    description: `The CR4011ZA ST BL MT is a stunning timepiece that combines classic elegance with modern functionality. 
    Featuring a beautiful blue dial with luminous markers, this watch is perfect for both casual and formal occasions. 
    The stainless steel construction ensures durability while maintaining a sophisticated appearance.`,
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

  const specificationItems = [
    {
      icon: "🏷️",
      label: "Product code",
      value: product.specifications.productCode,
    },
    { icon: "👨‍👩‍👧‍👦", label: "Family", value: product.specifications.family },
    { icon: "⚙️", label: "Movement", value: product.specifications.movement },
    {
      icon: "🔧",
      label: "Case Metal",
      value: product.specifications.caseMetal,
    },
    { icon: "📏", label: "Case Size", value: product.specifications.caseSize },
    {
      icon: "🎨",
      label: "Case Color",
      value: product.specifications.caseColor,
    },
    {
      icon: "⛓️",
      label: "Bracelet Material",
      value: product.specifications.braceletMaterial,
    },
    {
      icon: "🎨",
      label: "Bracelet Color",
      value: product.specifications.braceletColor,
    },
    { icon: "🔍", label: "Glass", value: product.specifications.glass },
    {
      icon: "🎯",
      label: "Dial Color",
      value: product.specifications.dialColor,
    },
    { icon: "🔒", label: "Buckle", value: product.specifications.buckle },
    { icon: "💧", label: "WR", value: product.specifications.waterResistance },
  ];

  const tabItems: TabsProps["items"] = [
    {
      key: "specifications",
      label: "SPECIFICATIONS",
      children: (
        <div className="bg-gray-50 rounded-lg">
          <div className="grid gap-3">
            {specificationItems.map((spec, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 py-3 px-4 rounded-lg ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{spec.icon}</span>
                  <span className="font-medium text-gray-700">
                    {spec.label}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-900">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "description",
      label: "DESCRIPTION",
      children: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleOutlined className="text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MyContainer>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <SafetyOutlined className="text-blue-500" />
                  <span className="font-medium">2 YEAR WARRANTY</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <GiftOutlined className="text-green-500" />
                  <span className="font-medium">NEW & BOXED</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircleOutlined className="text-blue-500" />
                  <span className="font-medium">100% AUTHENTIC</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Product Title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>Model: {product.model}</span>
                  <span>Barcode: {product.barcode}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">GENDER:</span>
                  <span className="text-gray-900">{product.gender}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">BRACELET:</span>
                  <span className="text-gray-900">{product.braceletType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">IN STOCK:</span>
                  <span className="text-green-600 font-medium">
                    {product.stockStatus}
                  </span>
                </div>
              </div>

              {/* Rating */}
              {/* <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarFilled key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div> */}

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    PRICE:
                  </span>
                  <span className="text-3xl font-bold text-red-600">
                    ৳ {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ৳ {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <p className="text-green-600 font-medium">
                    You save ৳{" "}
                    {(product.originalPrice! - product.price).toLocaleString()}{" "}
                    ({product.discount}% off)
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleBuyNow}
                  disabled={isBuyingNow}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isBuyingNow ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <ThunderboltOutlined />
                      Buy Now
                    </>
                  )}
                </button>

                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isAddingToCart ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <ShoppingCartOutlined />
                      Add To Cart
                    </>
                  )}
                </button>
              </div>

              {/* Additional Info */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircleOutlined className="text-green-500" />
                  <span>Free delivery within Dhaka</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleOutlined className="text-green-500" />
                  <span>7 days return policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleOutlined className="text-green-500" />
                  <span>Authentic product guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="border-t border-gray-200 mt-8">
            <Tabs
              defaultActiveKey="specifications"
              items={tabItems}
              size="large"
            />
          </div>
        </div>
        {/* related product section */}
        <div className="mt-6 mb-10">
          <RelatedProductSection productId={id} />
        </div>
      </MyContainer>
    </div>
  );
};

export default ProductDetailsPage;
