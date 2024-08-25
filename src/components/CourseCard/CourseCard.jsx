import React from "react";
import styles from "./CourseCard.module.css";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div>
      <div className={styles.card}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <Link href={course.link} className={styles.link}>
          {course.link}
        </Link>
        <p>{course.level}</p>
      </div>
    </div>
  );
}
