"use client";

import { Form, Input, Button, Row, Col, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

const ContactUsPage = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", values);
      message.success("Message sent successfully! We'll get back to you soon.");
      form.resetFields();
    } catch (error) {
      message.error("Failed to send message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <EnvironmentOutlined className="text-2xl text-blue-600" />,
      title: "Head Office",
      details: [
        "Kallol Group of Companies",
        "199, Tejgaon Industrial Area",
        "Dhaka-1208, Bangladesh",
      ],
    },
    {
      icon: <PhoneOutlined className="text-2xl text-green-600" />,
      title: "Phone",
      details: ["+880 1787675120", "+880 2-8833221"],
    },
    {
      icon: <MailOutlined className="text-2xl text-purple-600" />,
      title: "Email",
      details: ["info@timezonebd.com", "support@timezonebd.com"],
    },
    {
      icon: <ClockCircleOutlined className="text-2xl text-orange-600" />,
      title: "Business Hours",
      details: ["Mon - Sat: 10:00 AM - 10:00 PM", "Sunday: 12:00 PM - 8:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CONTACT US</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for any inquiries about our watches,
              services, or store locations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                TIME ZONE
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-gray-600 mb-8">
              Send us a message and we'll respond as soon as possible
            </p>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
              size="large"
            >
              <Form.Item
                name="name"
                label="Your Name"
                rules={[
                  { required: true, message: "Please enter your name" },
                  { min: 2, message: "Name must be at least 2 characters" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Enter your full name"
                  className="rounded-lg"
                />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label="Your Email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined className="text-gray-400" />}
                      placeholder="your.email@example.com"
                      className="rounded-lg"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="mobile"
                    label="Mobile"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile number",
                      },
                      {
                        pattern: /^[0-9+\-\s()]+$/,
                        message: "Please enter a valid mobile number",
                      },
                    ]}
                  >
                    <Input
                      prefix={<PhoneOutlined className="text-gray-400" />}
                      placeholder="+880 1XXXXXXXXX"
                      className="rounded-lg"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[
                  { required: true, message: "Please enter a subject" },
                  { min: 5, message: "Subject must be at least 5 characters" },
                ]}
              >
                <Input
                  placeholder="What is this regarding?"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="Your Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                  {
                    min: 10,
                    message: "Message must be at least 10 characters",
                  },
                ]}
              >
                <TextArea
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-full rounded-lg h-12 font-semibold"
                  icon={<MessageOutlined />}
                >
                  SEND MESSAGE
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Visit Our Stores
            </h2>
            <p className="text-gray-600">
              We have 65+ locations across Bangladesh. Find the nearest TIME
              ZONE store to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvironmentOutlined className="text-3xl text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Shopping Malls
              </h3>
              <p className="text-gray-600 text-sm">
                Find us at major shopping centers and malls across Dhaka and
                other cities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockCircleOutlined className="text-3xl text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Extended Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Most of our stores are open until 10 PM to serve you better
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneOutlined className="text-3xl text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600 text-sm">
                Our trained staff is ready to help you find the perfect
                timepiece
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
