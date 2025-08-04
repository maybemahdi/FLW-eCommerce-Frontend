"use client";

import {
  StarFilled,
  StarOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Progress, Rate, message } from "antd";
import { useState } from "react";

const { TextArea } = Input;

interface Review {
  id: string;
  customerName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  images?: string[];
}

interface CustomerReviewsProps {
  productId: string;
  productName: string;
  averageRating?: number;
  totalReviews?: number;
}

const CustomerReviews = ({
  productId,
  productName,
  averageRating = 4.8,
  totalReviews = 156,
}: CustomerReviewsProps) => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [form] = Form.useForm();

  // Sample reviews data
  const reviews: Review[] = [
    {
      id: "1",
      customerName: "Ahmed Rahman",
      rating: 5,
      title: "Excellent quality and authentic product!",
      comment:
        "I purchased this watch from TIME ZONE and I'm extremely satisfied with the quality. The watch is exactly as described and the delivery was very fast. The packaging was also premium. Highly recommended!",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: "2",
      customerName: "Fatima Khan",
      rating: 5,
      title: "Beautiful watch, great service",
      comment:
        "The watch is absolutely beautiful and the customer service was outstanding. They helped me choose the perfect size and answered all my questions. The warranty card and authenticity certificate were included.",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: "3",
      customerName: "Mohammad Ali",
      rating: 4,
      title: "Good quality but delivery was delayed",
      comment:
        "The watch quality is very good and it's definitely authentic. However, the delivery took longer than expected. But overall, I'm happy with my purchase and would buy again.",
      date: "2024-01-05",
      verified: true,
    },
    {
      id: "4",
      customerName: "Rashida Begum",
      rating: 5,
      title: "Perfect gift for my husband",
      comment:
        "Bought this as a gift for my husband's birthday. He absolutely loves it! The watch looks premium and the blue dial is stunning. TIME ZONE's service was excellent throughout.",
      date: "2023-12-28",
      verified: true,
    },
    {
      id: "5",
      customerName: "Karim Hassan",
      rating: 4,
      title: "Great watch, minor packaging issue",
      comment:
        "The watch itself is fantastic - good weight, beautiful design, and keeps perfect time. Only issue was a small dent in the box, but the watch was perfectly fine. Customer service was very responsive.",
      date: "2023-12-20",
      verified: true,
    },
  ];

  // Calculate rating distribution
  const ratingDistribution = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  const handleWriteReview = async (values: any) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success(
        "Review submitted successfully! It will be published after verification."
      );
      form.resetFields();
      setShowWriteReview(false);
    } catch (error) {
      message.error("Failed to submit review. Please try again.");
    }
  };

  const renderStars = (
    rating: number,
    size: "small" | "medium" | "large" = "medium"
  ) => {
    const sizeClass =
      size === "small" ? "text-sm" : size === "large" ? "text-xl" : "text-base";

    return (
      <div className={`flex items-center ${sizeClass}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= rating ? (
              <StarFilled className="text-yellow-400" />
            ) : (
              <StarOutlined className="text-gray-300" />
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 mt-8">
      {/* Reviews Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rating Summary */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-gray-900">
                {averageRating}
              </div>
              <div>
                {renderStars(Math.floor(averageRating), "large")}
                <p className="text-gray-600 mt-1">
                  Based on {totalReviews} reviews
                </p>
              </div>
            </div>
          </div>

          {/* Write Review */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Share your experience
            </h3>
            <p className="text-gray-600 mb-4">
              Help other customers by writing a review about this product.
            </p>
            <Button
              type="primary"
              size="large"
              onClick={() => setShowWriteReview(true)}
              className="w-full md:w-auto"
            >
              Write a Review
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews?.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-100 pb-6 last:border-b-0"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <UserOutlined className="text-gray-500 text-lg" />
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-900">
                    {review.customerName}
                  </h4>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  {renderStars(review.rating, "small")}
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h5 className="font-medium text-gray-900 mb-2">
                  {review.title}
                </h5>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
        <div className="text-center mt-8">
          <Button size="large" className="px-8">
            Load More Reviews
          </Button>
        </div>

      {/* Write Review Modal */}
      <Modal
        title="Write a Review"
        open={showWriteReview}
        onCancel={() => setShowWriteReview(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleWriteReview}
          className="mt-6"
        >
          <Form.Item
            name="rating"
            label="Overall Rating"
            rules={[{ required: true, message: "Please select a rating" }]}
          >
            <Rate allowHalf />
          </Form.Item>

          <Form.Item
            name="title"
            label="Review Title"
            rules={[
              { required: true, message: "Please enter a review title" },
              { min: 10, message: "Title must be at least 10 characters" },
            ]}
          >
            <Input placeholder="Summarize your experience in a few words" />
          </Form.Item>

          <Form.Item
            name="comment"
            label="Your Review"
            rules={[
              { required: true, message: "Please write your review" },
              { min: 50, message: "Review must be at least 50 characters" },
            ]}
          >
            <TextArea
              rows={6}
              placeholder="Tell others about your experience with this product..."
              showCount
              maxLength={1000}
            />
          </Form.Item>

          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email (will not be published)" />
          </Form.Item>

          <div className="flex gap-3 justify-end">
            <Button onClick={() => setShowWriteReview(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Submit Review
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CustomerReviews;
