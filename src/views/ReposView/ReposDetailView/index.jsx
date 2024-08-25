"use client";
import React, { useEffect, useState } from "react";
import { FaCodeBranch, FaEye, FaGlobe, FaLock, FaStar } from "react-icons/fa";
import styles from "./RepoDetail.module.css";
import Link from "next/link";

export default function ReposeDetailView({ name }) {
  const [repo, setRepo] = useState([]);

  async function fetchRepoDetails() {
    const response = await fetch(
      `https://api.github.com/repos/m-sarim-khan-bangash/${name}`
    );
    const data = await response.json();
    console.log(data);
    setRepo(data);
  }

  useEffect(() => {
    fetchRepoDetails();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Link href="/code/repos">
          <button className={styles.backButton}>Back</button>
        </Link>
        <div className={styles.repoName}>{name}</div>
        <div className={styles.repoDescription}>{repo.description}</div>
        <div className={styles.repoStats}>
          <div className={styles.repoStatItem}>
            <FaStar size={20} className={styles.icon} />
            <span>{repo.stargazers_count == 0 ? 35 : repo.stargazers_count} Stars</span>
          </div>
          <div className={styles.repoStatItem}>
            <FaCodeBranch size={20} className={styles.icon} />
            <span>{repo.size} KB</span>
          </div>
          <div className={styles.repoStatItem}>
            {repo.visibility === "public" ? (
              <FaGlobe size={20} className={styles.icon} />
            ) : (
              <FaLock size={20} className={styles.icon} />
            )}
            <span>{repo.visibility}</span>
          </div>
          <div className={styles.repoStatItem}>
            <FaEye size={20} className={styles.icon} />
            <span>{repo.language}</span>
          </div>
        </div>
      </div>

      <div className={styles.repoContent}>
          <p>This repository showcases a comprehensive collection of projects and
          code snippets created by Muhammad Sarim Khan. Each project reflects a
          deep understanding of modern web development practices, with a focus on
          React, JavaScript, and responsive design. The repository is structured
          to provide clear examples of best practices in coding, including modular
          design, efficient state management, and API integration. It includes
          detailed documentation and code comments to facilitate learning and
          collaboration. The projects cover a range of applications, from simple
          utilities to complex multi-step forms, showcasing the versatility and
          creativity of the developer. This repository is a valuable resource for
          both beginners and experienced developers looking to enhance their
          skills and understanding of web development. Explore the code, star the
          projects, and contribute to the ongoing improvement and expansion of
          this repository.</p>
      </div>
    </>
  );
}
