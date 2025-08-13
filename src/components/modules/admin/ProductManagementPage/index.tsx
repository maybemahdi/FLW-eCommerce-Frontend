"use client";

import { Column, DataTable } from "@/components/ui/core/DataTable/DataTable";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, message, Pagination } from "antd";
import type React from "react";
import { useEffect, useState } from "react";

interface Offer {
  id: string;
  date: string;
  title: string;
  expiblueate: string;
  originalPrice: number;
  discountPrice: number;
  location: string;
}

const ProductManagementPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [objectQuery, setObjectQuery] = useState<
    { name: string; value: any }[]
  >([
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "limit",
      value: pageSize,
    },
  ]);
  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  useEffect(() => {
    setObjectQuery([
      {
        name: "page",
        value: currentPage,
      },
      {
        name: "limit",
        value: pageSize,
      },
    ]);
  }, [currentPage, pageSize]);

  const data: Offer[] = [
    {
      id: "1",
      date: "15 Feb, 2025",
      title: "Food",
      expiblueate: "25 Feb, 2025",
      originalPrice: 30,
      discountPrice: 20,
      location: "Branch name",
    },
    {
      id: "2",
      date: "15 Feb, 2025",
      title: "Food",
      expiblueate: "25 Feb, 2025",
      originalPrice: 30,
      discountPrice: 20,
      location: "Branch name",
    },
    {
      id: "3",
      date: "15 Feb, 2025",
      title: "Food",
      expiblueate: "25 Feb, 2024", // Expiblue date for testing
      originalPrice: 30,
      discountPrice: 20,
      location: "Branch name",
    },
    {
      id: "4",
      date: "15 Feb, 2025",
      title: "Food",
      expiblueate: "25 Feb, 2025",
      originalPrice: 30,
      discountPrice: 20,
      location: "Branch name",
    },
    {
      id: "5",
      date: "15 Feb, 2025",
      title: "Food",
      expiblueate: "25 Feb, 2025",
      originalPrice: 30,
      discountPrice: 20,
      location: "Branch name",
    },
    {
      id: "6",
      date: "15 Feb, 2025",
      title: "Food",
      expiblueate: "25 Feb, 2024", // Expiblue date for testing
      originalPrice: 30,
      discountPrice: 20,
      location: "Branch name",
    },
  ];

  const columns: Column<Offer>[] = [
    { header: "Date", accessor: "date" },
    { header: "Title", accessor: "title" },
    {
      header: "Original price",
      accessor: (item: any) => `$${item.originalPrice}`,
    },
    {
      header: "Discount Price",
      accessor: (item: any) => `$${item.discountPrice}`,
    },
  ];

  const handleCreateOffer = () => {
    message.info("Create Offer button clicked!");
    // In a real application, navigate to an offer creation form
  };

  const handleViewOffer = (item: Offer) => {
    message.info(`Viewing offer: ${item.title} (ID: ${item.id})`);
    // In a real application, navigate to the offer details page
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl">
        <div className="mb-5 flex justify-between items-center flex-col md:flex-row gap-5">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Management
          </h1>
          <MyButton
            label="Create Product"
            onClick={handleCreateOffer}
            customIcon={<PlusOutlined />}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
          <DataTable
            title="" // Title is not needed here as per image
            data={data}
            columns={columns}
            keyField="id"
            renderActions={(item: any) => (
              <div className="flex gap-2">
                <Button
                  type="default"
                  onClick={() => handleViewOffer(item)}
                  icon={<EyeOutlined />}
                />
                <Button type="default" icon={<EditOutlined />} />
                <Button type="default" icon={<DeleteOutlined />} />
              </div>
            )}
          />
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            // total={response?.data?.meta?.total}
            total={20}
            onChange={handlePageChange}
            className="custom-pagination"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductManagementPage;
