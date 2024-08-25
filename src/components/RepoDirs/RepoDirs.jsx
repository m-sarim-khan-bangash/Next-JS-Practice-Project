import React from "react";
import styles from "./RepoDirs.module.css";

async function fetchRepoContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/m-sarim-khan-bangash/${name}/contents`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export default async function RepoDirs({ name }) {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  console.log(dirs);
  return (
    <>
     <div className={styles.container}>
     <h3 className={styles.h3}>Directories</h3>
      <ul className={styles.ul}>
        {dirs.map((dir, index) => (
          <li className={styles.li} key={index}>{dir.path}</li>
        ))}
      </ul>
     </div>
    </>
  );
}
