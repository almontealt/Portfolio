import styles from "./index.module.scss";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact_inner}>
        <h2 className={styles.contact_ttl}>Contact</h2>
        <div className={styles.contact_textWrap}>
          <p className={styles.contact_textWrap_txt}>
            ここまでご覧くださり、ありがとうございます。
          </p>
          <p className={styles.contact_textWrap_txt}>
            お仕事の依頼やご相談などは下のSNS、もしくはメールまでお願いいたします。
          </p>
        </div>
        <ul className={styles.contact_snsWrap}>
          <li className={styles.contact_snsWrap_item}>
            <a
              className={styles.contact_snsWrap_item_link}
              href="https://twitter.com/aimonte1994"
            >
              <Image
                src="/x_logo.svg"
                width={24}
                height={24}
                alt=""
                className={styles.contact_snsWrap_item_img}
              />
            </a>
          </li>
          <li className={styles.contact_snsWrap_item}>
            <a
              className={styles.contact_snsWrap_item_link}
              href="https://www.instagram.com/almonttteee/"
            >
              <Image
                src="/insta_logo.svg"
                width={24}
                height={24}
                alt=""
                className={styles.contact_snsWrap_item_img}
              />
            </a>
          </li>
          <li className={styles.contact_snsWrap_item}>
            <a
              className={styles.contact_snsWrap_item_link}
              href="mailto:almonte.almt@gmail.com"
            >
              <Image
                src="/MailOutline.svg"
                width={24}
                height={24}
                alt=""
                className={styles.contact_snsWrap_item_img}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
