import styles from "./index.module.scss";
import Image from "next/image";

const Top = () => {
  return (
    <section className={styles.top}>
      <Image
        src="/almonte_logo.svg"
        width={300}
        height={60}
        alt=""
        className={styles.top_img}
      />
      <p className={styles.top_t}>profile of almonte</p>
    </section>
  );
};

export default Top;
