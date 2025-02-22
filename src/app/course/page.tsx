"use client";
import React, { useState } from "react";
import Courses from "@/components/Courses";
import Search from "@/components/Search";
export default function Course() {
  // const [filters, setFilters] = useState({
  //   courses: [],
  //   services: [],
  //   sourceCode: [],
  // });

  // const handleFilterChange = (newFilters: any) => {
  //   setFilters(newFilters);
  //   console.log("Selected Filters:", newFilters);
  // };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const [checkboxes, setCheckboxes] = useState([
    { label: "Tất cả", checked: true },
    { label: "Front end", checked: false },
    { label: "Back end", checked: false },
    { label: "Databases", checked: false },
    { label: "Mobile", checked: false },
  ]);

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = checked;
    setCheckboxes(newCheckboxes);
  };

  const courses = [
    {
      title: "Ly nhựa 1",
      description: "Chi tiết về ly nhựa 1",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 2",
      description: "Chi tiết về ly nhựa 2",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 3",
      description: "Chi tiết về ly nhựa 3",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 4",
      description: "Chi tiết về ly nhựa 4",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 5",
      description: "Chi tiết về ly nhựa 5",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 6",
      description: "Chi tiết về ly nhựa 6",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 7",
      description: "Chi tiết về ly nhựa 7",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 8",
      description: "Chi tiết về ly nhựa 8",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
  ];
  return (
    <div className="flex p-4 w-full">
      <div className="w-full">
        {/* Hiển thị kết quả dựa trên filters */}
        {/* <pre>{JSON.stringify(filters, null, 2)}</pre> */}
        <Search
          onSearch={handleSearch}
          checkboxes={checkboxes}
          onCheckboxChange={handleCheckboxChange}
        />
        <Courses
          courses={courses}
          title="Tất cả sản phẩm"
          allCoursesLink="#allcourse"
        />
      </div>
    </div>
  );
}
