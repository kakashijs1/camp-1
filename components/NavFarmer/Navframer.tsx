'use client'
import { motion } from "framer-motion";
import { Suspense } from "react";
import { DarkMode } from "@/components/Navbar/DarkMode";
import DropdownListMenu from "@/components/Navbar/DropdownListMenu";
import Logo from "@/components/Navbar/Logo";
import Search from "@/components/Navbar/Search";

const Navframer = () => {
  return (
       <motion.nav
      className=" shadow-sm"
      initial={{ opacity: 0, y: -50 }} // 👉 เริ่มต้น: มองไม่เห็น (opacity 0) และลอยขึ้น 50px
      animate={{ opacity: 1, y: 0 }} // 👉 เมื่อโหลดเสร็จ: มองเห็นเต็ม (opacity 1) และลงมาอยู่ที่ตำแหน่งปกติ
      transition={{ duration: 0.5 }} // 👉 ใช้เวลา 0.5 วินาทีในการเคลื่อนท
    >
      <div className="container flex flex-col justify-between   py-6 sm:flex-row sm:items-center gap-4 ">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Suspense>
          <Search />
        </Suspense>

        <div className="flex items-center justify-between  lg:justify-center gap-4">
          {/* darkmode */}
          <DarkMode />
          <DropdownListMenu />
        </div>
      </div>
    </motion.nav>
  )
}
export default Navframer