import Image from "next/image";
import { worksType } from "../../../detileInfo";
import styles from "./index.module.scss";
import Link from "next/link";

const DetileErea = (props: worksType) => {
  return (
    <div className={styles.detileErea}>
      <div className={styles.detileErea__inner}>
        <ul className={styles.detileErea__itemList}>
          <li className={styles.detileErea__itemList_item}>
            <p className={styles.detileErea__itemList_item_ttl}>担当範囲</p>
            <p className={styles.detileErea__itemList_item_txt}>
              {props.scoop}
            </p>
          </li>
          <li className={styles.detileErea__itemList_item}>
            <p className={styles.detileErea__itemList_item_ttl}>ツール</p>
            <p className={styles.detileErea__itemList_item_txt}>{props.tool}</p>
          </li>
          <li className={styles.detileErea__itemList_item}>
            <p className={styles.detileErea__itemList_item_ttl}>制作期間</p>
            <p className={styles.detileErea__itemList_item_txt}>
              {props.schedule}
            </p>
          </li>
          {props.prototypeURL ? (
            <li className={styles.detileErea__itemList_item}>
              <p className={styles.detileErea__itemList_item_ttl}>
                プロトタイプ
              </p>
              <a
                className={`${styles.detileErea__itemList_item_txt} ${styles.detileErea__itemList_item_protoTypeURL}`}
                href={props.prototypeURL}
              >
                表示する
                <span className={styles.detileErea__itemList_item_iconWrap}>
                  <Image
                    src="/OpenInNew.svg"
                    alt=""
                    width={16}
                    height={16}
                    className={styles.detileErea__itemList_item_Protoicon}
                  />
                </span>
              </a>
            </li>
          ) : (
            <></>
          )}
        </ul>
        <ul className={styles.detileErea__itemList_itemList}>
          <li className={styles.detileErea__itemList_item_flow}>
            <p className={styles.detileErea__itemList_item_ttl}>作成フロー</p>
            <Image
              src={props.CreationFlow_spTb}
              width={343}
              height={119.78}
              alt={""}
              className={styles.detileErea__itemList_item_img_spTb}
            />
            <Image
              src={props.CreationFlow_pc}
              width={343}
              height={119.78}
              alt={""}
              className={styles.detileErea__itemList_item_img_pc}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetileErea;
