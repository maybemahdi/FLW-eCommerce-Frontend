"use client";

import demo from "@/assets/images/demo.jpg";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  GiftOutlined,
  MinusOutlined,
  PlusOutlined,
  SafetyOutlined,
  ShoppingOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import { Button, Divider, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";

interface CartItem {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  inStock: boolean;
  maxQuantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "ROLEX Submariner Date Blue Dial Steel",
      brand: "ROLEX",
      model: "126619LB",
      price: 850000,
      originalPrice: 950000,
      quantity: 1,
      image: demo.src,
      inStock: true,
      maxQuantity: 2,
    },
    {
      id: "2",
      name: "CITIZEN Eco-Drive Chronograph Blue Dial",
      brand: "CITIZEN",
      model: "CR4011ZA ST BL MT",
      price: 45000,
      originalPrice: 52000,
      quantity: 2,
      image: demo.src,
      inStock: true,
      maxQuantity: 5,
    },
    {
      id: "3",
      name: "CASIO G-Shock GA-2100 Carbon Core Guard",
      brand: "CASIO",
      model: "GA-2100",
      price: 12500,
      quantity: 1,
      image: demo.src,
      inStock: false,
      maxQuantity: 3,
    },
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const savings = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.originalPrice
        ? (item.originalPrice - item.price) * item.quantity
        : 0),
    0
  );
  const shipping = subtotal > 50000 ? 0 : 500;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const quantity = Math.min(newQuantity, item.maxQuantity);
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    message.success("Item removed from cart");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingOutlined className="text-6xl text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start
              shopping to find your perfect timepiece!
            </p>
            <Link href="/shop">
              <Button type="primary" size="large" className="px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <MyContainer>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/shop">
              <Button
                icon={<ArrowLeftOutlined />}
                className="flex items-center gap-2"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} items in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                          {item.brand}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {item.name}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Model: {item.model}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <DeleteOutlined className="text-lg" />
                      </button>
                    </div>

                    {/* Stock Status */}
                    <div className="mb-3">
                      {item.inStock ? (
                        <span className="text-green-600 text-sm font-medium">
                          ✓ In Stock
                        </span>
                      ) : (
                        <span className="text-red-600 text-sm font-medium">
                          ⚠ Out of Stock
                        </span>
                      )}
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <MinusOutlined className="text-sm" />
                          </button>
                          <span className="px-4 py-2 font-medium min-w-[60px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            disabled={
                              item.quantity >= item.maxQuantity || !item.inStock
                            }
                            className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <PlusOutlined className="text-sm" />
                          </button>
                        </div>

                        {item.quantity >= item.maxQuantity && (
                          <span className="text-orange-600 text-xs">
                            Max quantity reached
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-900">
                            ৳{(item.price * item.quantity).toLocaleString()}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ৳
                              {(
                                item.originalPrice * item.quantity
                              ).toLocaleString()}
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          ৳{item.price.toLocaleString()} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal ({cartItems.length} items)
                  </span>
                  <span className="font-medium">
                    ৳{subtotal.toLocaleString()}
                  </span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You Save</span>
                    <span className="font-medium">
                      -৳{savings.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `৳${shipping.toLocaleString()}`
                    )}
                  </span>
                </div>

                <Divider className="my-4" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-red-600">৳100,000</span>
                </div>
              </div>

              <Button
                type="primary"
                size="large"
                className="w-full mt-6 h-12 text-lg font-semibold"
                disabled={cartItems.some((item) => !item.inStock)}
              >
                Proceed to Checkout
              </Button>

              {cartItems.some((item) => !item.inStock) && (
                <p className="text-red-600 text-sm mt-2 text-center">
                  Please remove out of stock items to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default CartPage;
