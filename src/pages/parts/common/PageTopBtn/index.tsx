import Image from "next/image";
import styles from "./index.module.scss";

const PageTopBtn = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.pageTopBtn}>
      <div onClick={returnTop} className={styles.pageTopBtn_btnWrap}>
        <Image
          src="/KeyboardArrowUp.svg"
          width={32}
          height={32}
          alt=""
          className={styles.pageTopBtn_btnImg}
        />
        <p className={styles.pageTopBtn_btnTxt}>ページトップへもどる</p>
      </div>
    </div>
  );
};

export default PageTopBtn;
