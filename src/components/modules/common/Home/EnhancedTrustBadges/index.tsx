"use client";

import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import { RocketOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Braces, DivideCircleIcon, ShieldCheck } from "lucide-react";

const EnhancedTrustBadges = () => {
  const trustFeatures = [
    {
      icon: <ShieldCheck className="text-4xl text-blue-600" />,
      title: "SECURE PAYMENTS",
      description: "SSLCOMMERZ Payment Gateway with 33+ Payment Options",
      highlight: "33+",
      details: ["BKash", "Direct Bank Transfer"],
    },
    {
      icon: <CheckCircleOutlined className="text-4xl text-green-600" />,
      title: "AUTHENTIC & ORIGINAL",
      description: "100% Genuine & Authentic",
      highlight: "100%",
      details: [
        "Authorized Dealer",
        "Original Warranty",
        "Certificate Included",
      ],
    },
    {
      icon: <RocketOutlined className="text-4xl text-purple-600" />,
      title: "NATIONWIDE DELIVERY",
      description: "Delivering Parcels Across 64 Districts within 72 hours",
      highlight: "64 Districts",
      brand: ["SteadFast", "RedX"],
      details: ["Express Delivery", "Safe Packaging"],
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <MyContainer>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose TIME ZONE?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience
            through secure, authentic, and reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-center group border border-gray-100"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 tracking-wider mb-4 uppercase">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-3">
                {feature.description
                  .split(feature.highlight)
                  .map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="font-bold text-gray-900">
                          {feature.highlight}
                        </span>
                      )}
                    </span>
                  ))}
              </p>

              {/* Brand Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                {feature.brand?.map((brand, brandIndex) => (
                  <p
                    key={brandIndex}
                    className="bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded-full"
                  >
                    {brand}
                  </p>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircleOutlined className="text-green-500 text-xs" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default EnhancedTrustBadges;
