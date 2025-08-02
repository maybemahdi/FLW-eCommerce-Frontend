"use client";

import { useState } from "react";
import { Drawer, Dropdown } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import Link from "next/link";
import TopBar from "./TopBar";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Sample brands data for dropdown
  const brandsMenu: MenuProps = {
    items: [
      {
        key: "luxury",
        label: "Luxury Brands",
        type: "group",
        children: [
          { key: "rolex", label: "Rolex" },
          { key: "omega", label: "Omega" },
          { key: "cartier", label: "Cartier" },
          { key: "patek", label: "Patek Philippe" },
        ],
      },
      {
        key: "sport",
        label: "Sport Brands",
        type: "group",
        children: [
          { key: "casio", label: "Casio" },
          { key: "seiko", label: "Seiko" },
          { key: "citizen", label: "Citizen" },
          { key: "garmin", label: "Garmin" },
        ],
      },
      {
        key: "fashion",
        label: "Fashion Brands",
        type: "group",
        children: [
          { key: "fossil", label: "Fossil" },
          { key: "michael-kors", label: "Michael Kors" },
          { key: "daniel-wellington", label: "Daniel Wellington" },
          { key: "mvmt", label: "MVMT" },
        ],
      },
    ],
  };

  const productsMenu: MenuProps = {
    items: [
      { key: "mens", label: "Men's Watches" },
      { key: "womens", label: "Women's Watches" },
      { key: "smart", label: "Smart Watches" },
      { key: "luxury", label: "Luxury Watches" },
      { key: "sport", label: "Sport Watches" },
      { key: "accessories", label: "Accessories" },
    ],
  };

  const locatorMenu: MenuProps = {
    items: [
      { key: "stores", label: "Store Locations" },
      { key: "authorized", label: "Authorized Dealers" },
      { key: "service", label: "Service Centers" },
    ],
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <TopBar />
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-[1000]">
        {/* Main Navbar */}
        <MyContainer>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">LOGO</h1>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Watches..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <SearchOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search icon for mobile */}
              <button className="md:hidden p-2">
                <SearchOutlined className="text-xl text-gray-600" />
              </button>

              {/* User Icon */}
              <button className="p-2">
                <UserOutlined className="text-xl text-gray-600" />
              </button>

              {/* Cart */}
              <div className="flex items-center space-x-2">
                <button className="p-2">
                  <ShoppingCartOutlined className="text-xl text-gray-600" />
                </button>
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs text-gray-500">TOTAL PRICE</span>
                  <span className="text-sm font-semibold">₹ 0</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2" onClick={showDrawer}>
                <MenuOutlined className="text-xl text-gray-600" />
              </button>
            </div>
          </div>
        </MyContainer>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:block border-t border-gray-200">
          <MyContainer>
            <div className="flex space-x-8 h-12 items-center">
              <Link
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                HOME
              </Link>

              <Dropdown menu={brandsMenu} trigger={["hover"]}>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-black font-medium flex items-center"
                >
                  BRANDS <DownOutlined className="ml-1 text-xs" />
                </Link>
              </Dropdown>

              <Dropdown menu={productsMenu} trigger={["hover"]}>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-black font-medium flex items-center"
                >
                  PRODUCTS <DownOutlined className="ml-1 text-xs" />
                </Link>
              </Dropdown>

              <Dropdown menu={locatorMenu} trigger={["hover"]}>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-black font-medium flex items-center"
                >
                  LOCATOR <DownOutlined className="ml-1 text-xs" />
                </Link>
              </Dropdown>

              <Link
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                ABOUT US
              </Link>

              <Link
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                CONTACT US
              </Link>
            </div>
          </MyContainer>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        title="Logo"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
        width={280}
        className="md:hidden"
      >
        <div className="flex flex-col space-y-4">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Watches..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 pt-4">
            <a
              href="#"
              className="text-gray-700 hover:text-black font-medium py-2"
            >
              HOME
            </a>

            <Dropdown menu={brandsMenu} trigger={["click"]}>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium py-2 flex items-center justify-between"
              >
                BRANDS <DownOutlined className="text-xs" />
              </a>
            </Dropdown>

            <Dropdown menu={productsMenu} trigger={["click"]}>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium py-2 flex items-center justify-between"
              >
                PRODUCTS <DownOutlined className="text-xs" />
              </a>
            </Dropdown>

            <Dropdown menu={locatorMenu} trigger={["click"]}>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium py-2 flex items-center justify-between"
              >
                LOCATOR <DownOutlined className="text-xs" />
              </a>
            </Dropdown>

            <a
              href="#"
              className="text-gray-700 hover:text-black font-medium py-2"
            >
              ABOUT US
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-black font-medium py-2"
            >
              CONTACT US
            </a>
          </div>

          {/* Mobile Cart Info */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-semibold">₹ 0</span>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
