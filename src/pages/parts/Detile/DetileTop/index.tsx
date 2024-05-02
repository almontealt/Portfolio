import { worksType } from "../../../detileInfo";
import styles from "./index.module.scss";
import Image from "next/image";

const DetileTop = (props: worksType) => {
  if (typeof window === "object") {
    //documentを使う関数を入れる
  }

  return (
    <section className={styles.detileTop}>
      <div className={styles.detileTop__inner}>
        <Image
          src={props.TopImage}
          width={480}
          height={294}
          alt=""
          className={`${
            props.category === "Banner"
              ? styles.detileTop__mainImg_Banner
              : styles.detileTop__mainImg
          }`}
        />
        <ul className={styles.detileTop__itemList}>
          <li className={styles.detileTop__itemList_item}>
            <h2 className={styles.detileTop__itemList_item_ttl}>
              {props.title}
            </h2>
            <ul className={styles.detileTop__itemList_item_description}>
              <li className={styles.detileTop__itemList_item_description_txt}>
                {props.category}
              </li>
              <li className={styles.detileTop__itemList_item_description_txt}>
                /
              </li>
              <li className={styles.detileTop__itemList_item_description_txt}>
                {props.Isclient}
              </li>
            </ul>
          </li>
          <li className={styles.detileTop__itemList_item_description_overView}>
            {props.overView}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DetileTop;
