"use client";
import React, { useEffect, useState } from "react";
import styles from "./CoursesView.module.css";
import CourseCard from "@/components/CourseCard/CourseCard";
import axios from "axios";

export default async function CoursesView() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const response = await axios.get("http://localhost:3000/api/courses");
    console.log(response?.data);
    setCourses(response?.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className={styles.container}>
      {courses &&
        courses?.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
    </div>
  );
}
