'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/app/components/ui/card"


const DashboardPage = () => {
  const router = useRouter()

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin")
    if (!isAdmin) {
      router.push("/admin/login")
    }
  }, [])

  return (
    <div className="p-6 text-center mt-44">
      <h1 className="text-3xl font-bold mb-8 text-purple-700 ">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 text-xl text-gray-700">
        <Card className="p-4 ">Total Products: 10</Card>
        <Card className="p-4">Total Orders: 5</Card>
        <Card className="p-4 flex">Total Revenue:$500
  </Card>
      </div>
    </div>
  )
}

export default DashboardPage