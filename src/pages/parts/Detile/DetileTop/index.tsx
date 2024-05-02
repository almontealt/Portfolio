import { DetileTopType } from "../../../../app/detileInfo";
import styles from "./index.module.scss";
import Image from "next/image";

const DetileTop = ({
  TopImage,
  category,
  title,
  Isclient,
  overView,
}: DetileTopType) => {
  if (typeof window === "object") {
    //documentを使う関数を入れる
  }

  return (
    <section className={styles.detileTop}>
      <div className={styles.detileTop__inner}>
        <Image
          src={TopImage}
          width={480}
          height={294}
          alt=""
          className={`${
            category === "Banner"
              ? styles.detileTop__mainImg_Banner
              : styles.detileTop__mainImg
          }`}
        />
        <ul className={styles.detileTop__itemList}>
          <li className={styles.detileTop__itemList_item}>
            <h2 className={styles.detileTop__itemList_item_ttl}>{title}</h2>
            <ul className={styles.detileTop__itemList_item_description}>
              <li className={styles.detileTop__itemList_item_description_txt}>
                {category}
              </li>
              <li className={styles.detileTop__itemList_item_description_txt}>
                /
              </li>
              <li className={styles.detileTop__itemList_item_description_txt}>
                {Isclient}
              </li>
            </ul>
          </li>
          <li className={styles.detileTop__itemList_item_description_overView}>
            {overView}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DetileTop;
