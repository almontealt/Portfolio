import styles from "./index.module.scss";
import Image from "next/image";

type worksCardType = {
  imageURL: string;
  title: string;
  category: string;
  IsClient: string;
};
const WorksCard = ({ imageURL, title, category, IsClient }: worksCardType) => {
  return (
    <ul className={styles.worksCard}>
      <li className={styles.worksCard_imgWrap}>
        <Image
          src={imageURL}
          // width={317}
          // height={198}
          alt=""
          fill
          className={styles.worksCard_imgWrap_img}
        />
      </li>
      <li className={styles.worksCard_detile}>
        <h3 className={styles.worksCard_detile_ttl}>{title}</h3>
        <div className={styles.worksCard_detile_wrap}>
          <p className={styles.worksCard_detile_wrap_category}>{category}</p>
          <span className={styles.worksCard_detile_wrap_border}>/</span>
          <p className={styles.worksCard_detile_wrap_IsClient}>{IsClient}</p>
        </div>
      </li>
    </ul>
  );
};

export default WorksCard;
