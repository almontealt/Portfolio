import styles from "./index.module.scss";
import Image from "next/image";

const Profile = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.profile_inner}>
        <h2 className={styles.profile_ttl}>Profile</h2>
        <div className={styles.profile_wrap}>
          <div className={styles.profile_imgWrap}>
            <Image
              src="/profile.svg"
              width={183}
              height={183}
              alt=""
              className={styles.profile_imgWrap_img}
            />
          </div>
          <ul className={styles.profile_detile}>
            <li className={styles.profile_detile_item}>
              <h3 className={styles.profile_detile_item_ttl}>経歴</h3>
              <p className={styles.profile_detile_item_txt}>
                ・東京都八王子市出身
              </p>
              <p className={styles.profile_detile_item_txt}>
                ・不動産賃貸販売営業、事務を経て、エンジニアへ転職しIT業界へ。案件で携わったUIUXデザイナーに感銘を受け、デザインの道へ
              </p>
              <p className={styles.profile_detile_item_txt}>
                ・長年接客業を行っていたため、社内の共有やクライアント様との対応もスムーズに行います。
              </p>
            </li>
            <li className={styles.profile_detile_item}>
              <h3 className={styles.profile_detile_item_ttl}>スキル</h3>
              <ul className={styles.profile_detile_item_skil}>
                <li className={styles.profile_detile_item_skil_design}>
                  <h4 className={styles.profile_detile_item_skil_design_ttl}>
                    デザイン
                  </h4>
                  <p className={styles.profile_detile_item_skil_design_txt}>
                    Figma / adobeXD / Photoshop / Illustrator
                  </p>
                </li>
                <li className={styles.profile_detile_item_skil_coding}>
                  <h4 className={styles.profile_detile_item_skil_coding_ttl}>
                    コーディング
                  </h4>
                  <p className={styles.profile_detile_item_skil_coding_txt}>
                    HTML / CSS / JS /react/ next / veu
                  </p>
                </li>
              </ul>
            </li>
            <li className={styles.profile_detile_item}>
              <h3 className={styles.profile_detile_item_ttl}>強み</h3>
              <p className={styles.profile_detile_item_txt}>
                問題解決ができる・CVRの向上につながる・ユーザーが使いやすいデザインを目指しています。
              </p>
              <p className={styles.profile_detile_item_txt}>
                ユーザー目線での使いやすいを意識し、要件定義から携わることで素敵なユーザー体験になれるようお手伝いします。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
