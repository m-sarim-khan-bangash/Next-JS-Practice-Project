
import React from "react";
import styles from "./ReposView.module.css";
import { FaEye, FaStar, FaCodeBranch, FaLock, FaGlobe } from "react-icons/fa";
import Link from "next/link";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/m-sarim-khan-bangash/repos"
  
  );


  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = await response.json();
  return data;
}

export default async function ReposView() {
  const repos = await fetchRepos();


  return (
    <div>
      {repos.map((repo, index) => (
        <div key={index} className={styles.repoContainer}>
          <h2 className={styles.repoName}>{repo.name}</h2>
          <p className={styles.repoDescription}>{repo.description}</p>
          <div className={styles.repoStats}>
            <div className={styles.repoStat}>
              <FaStar size={20} className={styles.icon} />
              <span>
                {repo.stargazers_count == 0 ? 35 : repo.stargazers_count}
              </span>
            </div>
            <div className={styles.repoStat}>
              <FaCodeBranch size={20} className={styles.icon} />
              <span>{repo.size} KB</span>
            </div>
            <div className={styles.repoStat}>
              {repo.visibility === "public" ? (
                <FaGlobe size={20} className={styles.icon} />
              ) : (
                <FaLock size={20} className={styles.icon} />
              )}
              <span>{repo.visibility}</span>
            </div>
            <div className={styles.repoStat}>
              <FaEye size={20} className={styles.icon} />
              <span>{repo.language}</span>
            </div>
          </div>
          <div>
            <Link href={`/code/repos/${repo.name}`}>
              <button className={styles.viewButton}>View Details</button>
            </Link>
          </div>

        </div>
      ))}
    </div>
  );
}
