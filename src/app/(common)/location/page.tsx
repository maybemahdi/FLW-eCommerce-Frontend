"use client";

import { useState, useMemo } from "react";
import { Input, Select, Button, Card, Tag, Drawer } from "antd";
import {
  SearchOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  FilterOutlined,
  StarFilled,
  ShopOutlined,
} from "@ant-design/icons";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";

const { Option } = Select;

interface Store {
  id: string;
  name: string;
  address: string;
  area: string;
  city: string;
  phone: string;
  hours: string;
  type: "mall" | "standalone" | "hotel";
  rating: number;
  coordinates: { lat: number; lng: number };
  features: string[];
  image: string;
}

const LocationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 23.8103, lng: 90.4125 }); // Dhaka center

  // Sample store data
  const stores: Store[] = [
    {
      id: "1",
      name: "TIME ZONE - Bashundhara City",
      address: "Level 2, Bashundhara City Shopping Complex, Panthapath",
      area: "Panthapath",
      city: "Dhaka",
      phone: "+880 1787675120",
      hours: "10:00 AM - 10:00 PM",
      type: "mall",
      rating: 4.8,
      coordinates: { lat: 23.7501, lng: 90.3872 },
      features: ["Luxury Watches", "Smart Watches", "Repair Service"],
      image: "/placeholder.svg?height=200&width=300&text=Bashundhara+City",
    },
    {
      id: "2",
      name: "TIME ZONE - Jamuna Future Park",
      address: "Level 3, Jamuna Future Park, Kuril, Baridhara",
      area: "Baridhara",
      city: "Dhaka",
      phone: "+880 1787675121",
      hours: "10:00 AM - 10:00 PM",
      type: "mall",
      rating: 4.7,
      coordinates: { lat: 23.8103, lng: 90.4125 },
      features: ["Premium Collection", "Gift Wrapping", "Extended Warranty"],
      image: "/placeholder.svg?height=200&width=300&text=Jamuna+Future+Park",
    },
    {
      id: "3",
      name: "TIME ZONE - Gulshan Store",
      address: "House 45, Road 11, Block C, Gulshan-1",
      area: "Gulshan",
      city: "Dhaka",
      phone: "+880 1787675122",
      hours: "9:00 AM - 9:00 PM",
      type: "standalone",
      rating: 4.9,
      coordinates: { lat: 23.7805, lng: 90.4177 },
      features: ["VIP Service", "Custom Orders", "Expert Consultation"],
      image: "/placeholder.svg?height=200&width=300&text=Gulshan+Store",
    },
    {
      id: "4",
      name: "TIME ZONE - Dhanmondi Outlet",
      address: "Shop 12, Dhanmondi 27, Satmasjid Road",
      area: "Dhanmondi",
      city: "Dhaka",
      phone: "+880 1787675123",
      hours: "10:00 AM - 9:00 PM",
      type: "standalone",
      rating: 4.6,
      coordinates: { lat: 23.7461, lng: 90.3742 },
      features: ["Student Discounts", "Repair Service", "Trade-in Program"],
      image: "/placeholder.svg?height=200&width=300&text=Dhanmondi+Outlet",
    },
    {
      id: "5",
      name: "TIME ZONE - Pan Pacific Sonargaon",
      address: "Lobby Level, Pan Pacific Sonargaon Hotel",
      area: "Karwan Bazar",
      city: "Dhaka",
      phone: "+880 1787675124",
      hours: "8:00 AM - 11:00 PM",
      type: "hotel",
      rating: 4.8,
      coordinates: { lat: 23.7516, lng: 90.3876 },
      features: ["Luxury Collection", "24/7 Service", "Concierge Assistance"],
      image: "/placeholder.svg?height=200&width=300&text=Pan+Pacific",
    },
    {
      id: "6",
      name: "TIME ZONE - Chittagong Branch",
      address: "GEC Circle, Chittagong",
      area: "GEC Circle",
      city: "Chittagong",
      phone: "+880 1787675125",
      hours: "10:00 AM - 9:00 PM",
      type: "standalone",
      rating: 4.5,
      coordinates: { lat: 22.3569, lng: 91.7832 },
      features: ["Regional Collection", "Local Delivery", "Repair Service"],
      image: "/placeholder.svg?height=200&width=300&text=Chittagong+Branch",
    },
    {
      id: "7",
      name: "TIME ZONE - Sylhet Store",
      address: "Zindabazar, Sylhet",
      area: "Zindabazar",
      city: "Sylhet",
      phone: "+880 1787675126",
      hours: "10:00 AM - 9:00 PM",
      type: "mall",
      rating: 4.4,
      coordinates: { lat: 24.8949, lng: 91.8687 },
      features: ["Local Brands", "Gift Service", "Warranty Support"],
      image: "/placeholder.svg?height=200&width=300&text=Sylhet+Store",
    },
    {
      id: "8",
      name: "TIME ZONE - Uttara Branch",
      address: "Sector 7, Uttara Model Town",
      area: "Uttara",
      city: "Dhaka",
      phone: "+880 1787675127",
      hours: "10:00 AM - 10:00 PM",
      type: "standalone",
      rating: 4.7,
      coordinates: { lat: 23.8759, lng: 90.3795 },
      features: ["Family Packages", "Kids Watches", "Repair Service"],
      image: "/placeholder.svg?height=200&width=300&text=Uttara+Branch",
    },
  ];

  // Filter stores based on search and filters
  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesSearch =
        searchQuery === "" ||
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.area.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCity = selectedCity === "all" || store.city === selectedCity;
      const matchesType = selectedType === "all" || store.type === selectedType;

      return matchesSearch && matchesCity && matchesType;
    });
  }, [searchQuery, selectedCity, selectedType]);

  const cities = [...new Set(stores.map((store) => store.city))];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "mall":
        return "blue";
      case "standalone":
        return "green";
      case "hotel":
        return "purple";
      default:
        return "default";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "mall":
        return "Shopping Mall";
      case "standalone":
        return "Standalone Store";
      case "hotel":
        return "Hotel Location";
      default:
        return type;
    }
  };

  const handleStoreClick = (store: Store) => {
    setSelectedStore(store);
    setMapCenter(store.coordinates);
  };

  const handleGetDirections = (store: Store) => {
    // Simulate opening directions
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Main Content */}
      <MyContainer>
        <div className="flex flex-col gap-8">
          {/* Store List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredStores.length} Store
                {filteredStores.length !== 1 ? "s" : ""} Found
              </h2>
            </div>
          </div>

          {/* Map Area */}
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[calc(100vh-200px)]">
              {/* Map Header */}
              <div className="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShopOutlined className="text-blue-600" />
                  <span className="font-medium text-gray-900">
                    Store Locations Map
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {selectedStore
                    ? `Viewing: ${selectedStore.name}`
                    : "Select a store to view details"}
                </div>
              </div>

              {/* Simulated Map */}
              <div className="relative h-full bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                    {[...Array(144)].map((_, i) => (
                      <div key={i} className="border border-gray-300"></div>
                    ))}
                  </div>
                </div>

                {/* Store Markers */}
                {filteredStores.map((store, index) => {
                  const isSelected = selectedStore?.id === store.id;
                  // Simulate positioning based on coordinates
                  const left = ((store.coordinates.lng - 90.3) / 0.2) * 100;
                  const top = ((23.9 - store.coordinates.lat) / 0.2) * 100;

                  return (
                    <div
                      key={store.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                        isSelected ? "z-20 scale-125" : "z-10 hover:scale-110"
                      }`}
                      style={{
                        left: `${Math.max(10, Math.min(90, left))}%`,
                        top: `${Math.max(10, Math.min(90, top))}%`,
                      }}
                      onClick={() => handleStoreClick(store)}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                          isSelected
                            ? "bg-red-500 ring-4 ring-red-200"
                            : store.type === "mall"
                            ? "bg-blue-500"
                            : store.type === "hotel"
                            ? "bg-purple-500"
                            : "bg-green-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                      {isSelected && (
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-64 z-[300]">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {store.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {store.address}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <ClockCircleOutlined />
                            <span>{store.hours}</span>
                          </div>
                          <Button
                            type="primary"
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleGetDirections(store);
                            }}
                          >
                            Directions
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Legend</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span>Shopping Mall</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span>Standalone Store</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span>Hotel Location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span>Selected Store</span>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button
                    shape="circle"
                    icon="+"
                    className="w-10 h-10 flex items-center justify-center bg-white shadow-lg"
                  />
                  <Button
                    shape="circle"
                    icon="−"
                    className="w-10 h-10 flex items-center justify-center bg-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default LocationPage;
