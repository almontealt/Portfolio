import Image from "next/image";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.header_logo}>
        <Image
          src="/almonte_logo.svg"
          width={120}
          height={30}
          alt=""
          className={styles.header_logo_img}
        />
      </a>
      <ul className={styles.header_snsWrap}>
        <li className={styles.header_snsWrap_listItem}>
          <a className={styles.header_snsWrap_listItem_x}>
            <Image
              src="x_logo.svg"
              width={24}
              height={24}
              alt=""
              className={styles.header_snsWrap_listItem_x_img}
            />
          </a>
        </li>
        <li className={styles.header_snsWrap_listItem}>
          <a className={styles.header_snsWrap_listItem_insta}>
            <Image
              src="insta_logo.svg"
              width={24}
              height={24}
              alt=""
              className={styles.header__snsWrap_listItem_insta_img}
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
