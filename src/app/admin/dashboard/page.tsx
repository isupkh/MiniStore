'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/app/components/ui/card";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div className="p-4 sm:p-6 text-center mt-28 sm:mt-44">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-purple-700">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg sm:text-xl text-gray-700">
        <Card className="p-4">Total Products: 10</Card>
        <Card className="p-4">Total Orders: 5</Card>
        <Card className="p-4">Total Revenue: $500</Card>
      </div>
    </div>
  );
};

export default DashboardPage;