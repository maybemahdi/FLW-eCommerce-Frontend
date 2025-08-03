import {
  ClockCircleOutlined,
  GlobalOutlined,
  SafetyOutlined,
  TeamOutlined,
  TrophyOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import demo from "@/assets/images/demo.jpg"
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <MyContainer>
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT US</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the story behind TIME ZONE - your trusted partner in
              luxury timepieces since 1998
            </p>
          </div>
        </MyContainer>
      </div>

      {/* Main Content */}
      <MyContainer>
        {/* Company Overview */}
        <div className="bg-white rounded-lg shadow-sm py-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                TIME ZONE
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  TIME ZONE is a very reputed and popular name for world class
                  watches and writing instruments in Bangladesh. There are 65
                  TIME ZONE strategically located at the entrances of key
                  shopping malls and 5-star hotels.
                </p>
                <p>
                  TIME ZONE maintains an international standard interior, with
                  uniform looking point of sales with an elegant outlook and
                  ambiance. It is operated by trained sales & customer care
                  officers.
                </p>
                <p>
                  TIME ZONE offers the finest selection of genuine watches of
                  internationally renowned brands with international guarantee
                  cards. TIME ZONE is the only point of sale for distribution of
                  authentic and genuine watch, along with after sales service.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={demo.src}
                alt="TIME ZONE Store"
                className="rounded-lg object-cover shadow-lg w-full h-auto sm:h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GlobalOutlined className="text-2xl text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">65+</div>
            <div className="text-gray-600">Store Locations</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrophyOutlined className="text-2xl text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Premium Brands</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <HeartOutlined className="text-2xl text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ClockCircleOutlined className="text-2xl text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-gray-600">Watch Models</div>
          </div>
        </div>

        {/* After Sales Service */}
        <div className="bg-white rounded-lg shadow-sm py-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={demo.src}
                alt="Customer Service"
                className="rounded-lg shadow-lg w-full h-auto sm:h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                AFTER SALES SERVICE
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We have a wide range of customer service base for ensuring
                  smooth customer support and service. We never compromise with
                  the quality of service. We believe that delivering high
                  quality products without high quality service worths nothing
                  but customer dissatisfaction.
                </p>
                <p>
                  So, we ensure high quality products with high quality service
                  all the way. Our dedicated team of professionals is always
                  ready to assist you with any queries or concerns you may have.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-lg shadow-sm py-8 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at TIME ZONE
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafetyOutlined className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We guarantee 100% authentic products from authorized dealers
                with international warranty cards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TeamOutlined className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Our trained professionals deliver exceptional service and
                maintain international standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartOutlined className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trust
              </h3>
              <p className="text-gray-600">
                Building lasting relationships with our customers through
                transparency and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To provide our customers with the finest selection of authentic
              luxury timepieces while delivering exceptional service and
              maintaining the highest standards of quality and integrity in
              everything we do.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and preferred destination for luxury
              watches in Bangladesh, setting new standards in customer
              experience and becoming the benchmark for excellence in the
              timepiece industry.
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AboutPage;
