import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import { worksType } from "../../../../app/detileInfo";

const WorksCard = (props: worksType) => {
  return (
    <ul className={styles.worksCard}>
      <Link
        href={{ pathname: `/detile`, query: props }}
        className={styles.worksCard_inner}
      >
        <li className={styles.worksCard_imgWrap}>
          <Image
            src={props.ImageURL}
            width={317}
            height={198}
            alt=""
            className={styles.worksCard_imgWrap_img}
          />
        </li>
        <li className={styles.worksCard_detile}>
          <h3 className={styles.worksCard_detile_ttl}>{props.title}</h3>
          <div className={styles.worksCard_detile_wrap}>
            <p className={styles.worksCard_detile_wrap_category}>
              {props.category}
            </p>
            <span className={styles.worksCard_detile_wrap_border}>/</span>
            <p className={styles.worksCard_detile_wrap_IsClient}>
              {props.Isclient}
            </p>
          </div>
        </li>
      </Link>
    </ul>
  );
};

export default WorksCard;
