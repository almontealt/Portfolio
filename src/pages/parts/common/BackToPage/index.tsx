import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

const BackToPage = () => {
  return (
    <div className={styles.backToPage}>
      <Link className={styles.backToPage_wrap} href="/">
        <Image
          src="/ArrowBack.svg"
          width={24}
          height={24}
          alt=""
          className={styles.backToPage_img}
        />
        <p className={styles.backToPage_txt}>もどる</p>
      </Link>
    </div>
  );
};

export default BackToPage;
