"use client";

import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Store Locator", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "Care Instructions", href: "#" },
    { name: "Warranty", href: "#" },
  ];

  const customerService = [
    { name: "Help Center", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Track Your Order", href: "#" },
    { name: "Gift Cards", href: "#" },
    { name: "Bulk Orders", href: "#" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Main footer content */}
      <div className="py-16">
        <MyContainer>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                  TIME ZONE
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Your premier destination for luxury timepieces. We bring you
                  the world's finest watches with unmatched quality and service
                  excellence since 1998.
                </p>

                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    {
                      icon: FacebookOutlined,
                      href: "#",
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: InstagramOutlined,
                      href: "#",
                      color: "hover:text-pink-400",
                    },
                    {
                      icon: TwitterOutlined,
                      href: "#",
                      color: "hover:text-blue-300",
                    },
                    {
                      icon: YoutubeOutlined,
                      href: "#",
                      color: "hover:text-red-400",
                    },
                    {
                      icon: LinkedinOutlined,
                      href: "#",
                      color: "hover:text-blue-500",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-600 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <CheckCircleOutlined className="text-blue-400 mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Customer Service
              </h3>
              <ul className="space-y-3">
                {customerService.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <CheckCircleOutlined className="text-green-400 mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Payment */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Get In Touch
              </h3>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MailOutlined className="text-blue-400 mt-1 text-lg" />
                  <div>
                    <p className="text-gray-300">Email Us</p>
                    <a
                      href="mailto:info@timezone.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      info@timezone.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <PhoneOutlined className="text-green-400 mt-1 text-lg" />
                  <div>
                    <p className="text-gray-300">Call Us</p>
                    <a
                      href="tel:+8801797675120"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      +88 01797 675120
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <EnvironmentOutlined className="text-red-400 mt-1 text-lg" />
                  <div>
                    <p className="text-gray-300">Visit Us</p>
                    <p className="text-white">
                      199, Tejgaon Industrial Area,
                      <br />
                      Dhaka-1208, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start space-x-6">
                {legal.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 TIME ZONE. All rights reserved.
              </p>
            </div>
          </div>
        </MyContainer>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUpOutlined className="text-lg" />
      </button>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
