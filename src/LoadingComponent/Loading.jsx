import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default Loading;
