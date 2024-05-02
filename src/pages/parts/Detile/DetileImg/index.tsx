import Image from "next/image";
import { DetileImgType } from "../../../../app/detileInfo";
import styles from "./index.module.scss";

const DetileImg = ({
  mainVisual_sp,
  mainVisual_tb,
  mainVisual_pc,
  category,
}: DetileImgType) => {
  return (
    <section className={styles.detileImg}>
      <Image
        src={mainVisual_sp}
        alt={""}
        width={100}
        height={100}
        className={`${styles.detileImg__img_sp} ${
          category === "Banner" ? styles.Banner : ""
        }`}
      />
      <Image
        src={mainVisual_tb}
        alt={""}
        width={100}
        height={100}
        className={`${styles.detileImg__img_tb} ${
          category === "Banner" ? styles.Banner : ""
        }`}
      />
      <Image
        src={mainVisual_pc}
        alt=""
        width={100}
        height={100}
        className={`${styles.detileImg__img_pc} ${
          category === "Banner" ? styles.detileImg__img_pc_Banner : ""
        }`}
      />
    </section>
  );
};

export default DetileImg;
