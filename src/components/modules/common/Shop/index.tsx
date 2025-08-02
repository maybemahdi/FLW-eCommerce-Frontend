"use client";

import { useState, useMemo } from "react";
import {
  SearchOutlined,
  FilterOutlined,
  ClearOutlined,
} from "@ant-design/icons";
import { Drawer, Slider } from "antd";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import demo from "@/assets/images/demo.jpg";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  brand: string;
  model: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  discount?: number;
  gender: "men" | "women" | "unisex";
  category: string;
  material: string;
}

interface Filters {
  brands: string[];
  genders: string[];
  categories: string[];
  materials: string[];
  priceRange: [number, number];
}

const ShopPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const [filters, setFilters] = useState<any>({
    brands: [],
    genders: [],
    categories: [],
    materials: [],
    priceRange: [0, 2000000],
  });

  // Sample products data
  const allProducts: Product[] = [
    {
      id: "1",
      brand: "ROLEX",
      model: "Submariner Date Blue Dial Steel",
      price: 850000,
      originalPrice: 950000,
      image: demo.src,
      isNew: true,
      discount: 11,
      gender: "men",
      category: "luxury",
      material: "steel",
    },
    {
      id: "2",
      brand: "OMEGA",
      model: "Speedmaster Professional Moonwatch",
      price: 425000,
      image: demo.src,
      gender: "men",
      category: "sport",
      material: "steel",
    },
    {
      id: "3",
      brand: "SEIKO",
      model: "Prospex Solar Diver's Watch",
      price: 28500,
      originalPrice: 32000,
      image: demo.src,
      discount: 11,
      gender: "unisex",
      category: "sport",
      material: "steel",
    },
    {
      id: "4",
      brand: "CASIO",
      model: "G-Shock GA-2100 Carbon Core Guard",
      price: 12500,
      image: demo.src,
      isNew: true,
      gender: "unisex",
      category: "digital",
      material: "resin",
    },
    {
      id: "5",
      brand: "CITIZEN",
      model: "Eco-Drive Chronograph Blue Dial",
      price: 45000,
      originalPrice: 52000,
      image: demo.src,
      discount: 13,
      gender: "men",
      category: "chronograph",
      material: "steel",
    },
    {
      id: "6",
      brand: "TISSOT",
      model: "PRC 200 Chronograph Black Dial",
      price: 38500,
      image: demo.src,
      gender: "men",
      category: "chronograph",
      material: "steel",
    },
    {
      id: "7",
      brand: "FOSSIL",
      model: "Grant Chronograph Brown Leather",
      price: 15500,
      originalPrice: 18500,
      image: demo.src,
      discount: 16,
      gender: "men",
      category: "fashion",
      material: "leather",
    },
    {
      id: "8",
      brand: "GARMIN",
      model: "Fenix 7 Solar Multisport GPS",
      price: 85000,
      image: demo.src,
      isNew: true,
      gender: "unisex",
      category: "smart",
      material: "titanium",
    },
    {
      id: "9",
      brand: "MICHAEL KORS",
      model: "Runway Rose Gold Tone Watch",
      price: 22500,
      originalPrice: 28000,
      image: demo.src,
      discount: 20,
      gender: "women",
      category: "fashion",
      material: "gold",
    },
    {
      id: "10",
      brand: "DANIEL KLEIN",
      model: "Premium Collection Silver Dial",
      price: 8500,
      image: demo.src,
      gender: "women",
      category: "fashion",
      material: "steel",
    },
    {
      id: "11",
      brand: "HUGO BOSS",
      model: "Navigator Chronograph Black",
      price: 35000,
      image: demo.src,
      gender: "men",
      category: "luxury",
      material: "steel",
    },
    {
      id: "12",
      brand: "GUESS",
      model: "Ladies Crystal Accent Watch",
      price: 18500,
      originalPrice: 22000,
      image: demo.src,
      discount: 16,
      gender: "women",
      category: "fashion",
      material: "gold",
    },
  ];

  // Filter options
  const filterOptions = {
    brands: [
      "ROLEX",
      "OMEGA",
      "SEIKO",
      "CASIO",
      "CITIZEN",
      "TISSOT",
      "FOSSIL",
      "GARMIN",
      "MICHAEL KORS",
      "DANIEL KLEIN",
      "HUGO BOSS",
      "GUESS",
    ],
    genders: [
      { value: "men", label: "Men's Watches" },
      { value: "women", label: "Women's Watches" },
      { value: "unisex", label: "Unisex Watches" },
    ],
    categories: [
      { value: "luxury", label: "Luxury" },
      { value: "sport", label: "Sport" },
      { value: "fashion", label: "Fashion" },
      { value: "smart", label: "Smart Watches" },
      { value: "digital", label: "Digital" },
      { value: "chronograph", label: "Chronograph" },
    ],
    materials: [
      { value: "steel", label: "Stainless Steel" },
      { value: "gold", label: "Gold" },
      { value: "leather", label: "Leather" },
      { value: "titanium", label: "Titanium" },
      { value: "resin", label: "Resin" },
    ],
  };

  // Filter products based on search and filters
  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.model.toLowerCase().includes(searchQuery.toLowerCase());

      // Brand filter
      const matchesBrand =
        filters.brands.length === 0 || filters.brands.includes(product.brand);

      // Gender filter
      const matchesGender =
        filters.genders.length === 0 ||
        filters.genders.includes(product.gender);

      // Category filter
      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

      // Material filter
      const matchesMaterial =
        filters.materials.length === 0 ||
        filters.materials.includes(product.material);

      // Price range filter
      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      return (
        matchesSearch &&
        matchesBrand &&
        matchesGender &&
        matchesCategory &&
        matchesMaterial &&
        matchesPrice
      );
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      default:
        // Keep original order for "featured"
        break;
    }

    return filtered;
  }, [allProducts, searchQuery, filters, sortBy]);

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters((prev: Filters) => {
      const currentValues = prev[filterType] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prev, [filterType]: newValues };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      brands: [],
      genders: [],
      categories: [],
      materials: [],
      priceRange: [0, 2000000],
    });
    setSearchQuery("");
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Clear Filters */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <ClearOutlined />
          Clear All
        </button>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {filterOptions.brands.map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleFilterChange("brands", brand)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Gender Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Gender</h4>
        <div className="space-y-2">
          {filterOptions.genders.map((gender) => (
            <label key={gender.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.genders.includes(gender.value)}
                onChange={() => handleFilterChange("genders", gender.value)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{gender.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Category</h4>
        <div className="space-y-2">
          {filterOptions.categories.map((category) => (
            <label key={category.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.value)}
                onChange={() =>
                  handleFilterChange("categories", category.value)
                }
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                {category.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Material</h4>
        <div className="space-y-2">
          {filterOptions.materials.map((material) => (
            <label key={material.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.materials.includes(material.value)}
                onChange={() => handleFilterChange("materials", material.value)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                {material.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>₹{filters.priceRange[0].toLocaleString()}</span>
            <span>₹{filters.priceRange[1].toLocaleString()}</span>
          </div>
          <Slider
            range
            min={0}
            max={2000000}
            step={10000}
            value={filters.priceRange}
            onChange={(value) =>
              setFilters((prev: Filters) => ({
                ...prev,
                priceRange: value as [number, number],
              }))
            }
            tooltip={{
              formatter: (value) => `₹${value?.toLocaleString()}`,
            }}
            trackStyle={[{ backgroundColor: "#1890ff" }]}
            handleStyle={[
              { borderColor: "#1890ff", backgroundColor: "#1890ff" },
              { borderColor: "#1890ff", backgroundColor: "#1890ff" },
            ]}
          />
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Min: ₹0</span>
            <span>Max: ₹20,00,000</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm py-8">
        <MyContainer>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Shop Watches
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search for watches, brands, models..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                // Create updated search params
                const params = new URLSearchParams(window.location.search);
                params.set("searchTerm", e.target.value);

                // Update the URL (without reload)
                const newUrl = `${
                  window.location.pathname
                }?${params.toString()}`;
                router.replace(newUrl, undefined);
              }}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <SearchOutlined className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </MyContainer>
      </div>

      {/* Main Content */}
      <MyContainer>
        <div className="flex gap-8 py-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <FilterSidebar />
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"} found
                </p>

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <FilterOutlined />
                  Filters
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </MyContainer>

      {/* Mobile Filter Drawer */}
      <Drawer
        title="Filter Products"
        placement="left"
        onClose={() => setMobileFiltersOpen(false)}
        open={mobileFiltersOpen}
        width={320}
        className="lg:hidden"
      >
        <FilterSidebar />
      </Drawer>
    </div>
  );
};

export default ShopPage;
