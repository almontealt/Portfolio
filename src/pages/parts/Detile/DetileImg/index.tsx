import Image from "next/image";
import { worksType } from "../../../detileInfo";
import styles from "./index.module.scss";

const DetileImg = (props: worksType) => {
  return (
    <section className={styles.detileImg}>
      <Image
        src={props.mainVisual_sp}
        alt={""}
        width={100}
        height={100}
        className={`${styles.detileImg__img_sp} ${
          props.category === "Banner" ? styles.Banner : ""
        }`}
      />
      <Image
        src={props.mainVisual_tb}
        alt={""}
        width={100}
        height={100}
        className={`${styles.detileImg__img_tb} ${
          props.category === "Banner" ? styles.Banner : ""
        }`}
      />
      <Image
        src={props.mainVisual_pc}
        alt=""
        width={100}
        height={100}
        className={`${styles.detileImg__img_pc} ${
          props.category === "Banner" ? styles.detileImg__img_pc_Banner : ""
        }`}
      />
    </section>
  );
};

export default DetileImg;
