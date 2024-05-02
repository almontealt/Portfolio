import Image from "next/image";
import { worksType } from "../../../detileInfo";
import styles from "./index.module.scss";

const DetileOverView = (props: worksType) => {
  console.log(props.IllustrationSp);
  return (
    <div className={styles.detileOverView}>
      <div className={styles.detileOverView__inner}>
        <ul className={styles.detileOverView__itemList}>
          {/* 目的・ゴール */}
          <li className={styles.detileOverView__itemList_item}>
            <h3 className={styles.detileOverView__itemList_item_ttl}>
              目的・ゴール
            </h3>
            <ul className={styles.detileOverView__itemList_item_detileWrap}>
              <li className={styles.detileOverView__itemList_item_detile_txt}>
                <span
                  className={styles.detileOverView__itemList_item_detile_icon}
                >
                  ・
                </span>
                {props.purpose1}
              </li>
              {props.purpose2 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.purpose2}
                </li>
              ) : (
                <></>
              )}
              {props.purpose3 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.purpose3}
                </li>
              ) : (
                <></>
              )}
            </ul>
          </li>

          {/* コンセプト */}
          <li className={styles.detileOverView__itemList_item}>
            <h3 className={styles.detileOverView__itemList_item_ttl}>
              コンセプト
            </h3>
            <ul className={styles.detileOverView__itemList_item_detileWrap}>
              <li className={styles.detileOverView__itemList_item_detile_txt}>
                <span
                  className={styles.detileOverView__itemList_item_detile_icon}
                >
                  ・
                </span>
                {props.concept1}
              </li>
              {props.concept2 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.concept2}
                </li>
              ) : (
                <></>
              )}
              {props.concept3 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.concept3}
                </li>
              ) : (
                <></>
              )}
            </ul>
          </li>

          {/* ターゲット */}
          <li className={styles.detileOverView__itemList_item}>
            <h3 className={styles.detileOverView__itemList_item_ttl}>
              ターゲット
            </h3>
            <ul className={styles.detileOverView__itemList_item_detileWrap}>
              <li className={styles.detileOverView__itemList_item_detile_txt}>
                <span
                  className={styles.detileOverView__itemList_item_detile_icon}
                >
                  ・
                </span>
                {props.target1}
              </li>
              {props.target2 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.target2}
                </li>
              ) : (
                <></>
              )}

              {props.target3 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.target3}
                </li>
              ) : (
                <></>
              )}
              {props.target4 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.target4}
                </li>
              ) : (
                <></>
              )}
            </ul>
          </li>
        </ul>

        {/* 中間IMG  */}
        {props.IllustrationSp ? (
          <Image
            src={props.IllustrationSp}
            width={375}
            height={50}
            // fill
            alt={""}
            className={styles.detileOverView__itemList_img_sp}
          />
        ) : (
          <></>
        )}
        {props.IllustrationPcTb ? (
          <Image
            src={props.IllustrationPcTb}
            width={375}
            height={50}
            // fill
            alt={""}
            className={styles.detileOverView__itemList_img_pcTb}
          />
        ) : (
          <></>
        )}
      </div>
      <ul className={styles.detileOverView__itemList}>
        {/* 情報・デザイン */}
        <li className={styles.detileOverView__itemList_item}>
          <h3 className={styles.detileOverView__itemList_item_ttl}>
            情報設計・
            <span className={styles.detileOverView__itemList_item_ttl_br}>
              デザイン
            </span>
          </h3>
          <div className={styles.detileOverView__itemList_item_subOverWrap}>
            <div className={styles.detileOverView__itemList_item_subWrap}>
              {/* 情報設計・デザインの子要素2があれば,子要素のタイトルを表示する（出張経費申請サービスのみ表示） */}
              {props.oneKnotTtl ? (
                <h4 className={styles.detileOverView__itemList_item_subTtl}>
                  {props.oneKnotTtl}
                </h4>
              ) : (
                <></>
              )}
              <ul className={styles.detileOverView__itemList_item_detileWrap}>
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.oneKnotTxt1}
                </li>
                {props.oneKnotTxt2 ? (
                  <li
                    className={styles.detileOverView__itemList_item_detile_txt}
                  >
                    <span
                      className={
                        styles.detileOverView__itemList_item_detile_icon
                      }
                    >
                      ・
                    </span>
                    {props.oneKnotTxt2}
                  </li>
                ) : (
                  <></>
                )}
                {props.oneKnotTxt3 ? (
                  <li
                    className={styles.detileOverView__itemList_item_detile_txt}
                  >
                    <span
                      className={
                        styles.detileOverView__itemList_item_detile_icon
                      }
                    >
                      ・
                    </span>
                    {props.oneKnotTxt3}
                  </li>
                ) : (
                  <></>
                )}
                {props.oneKnotTxt4 ? (
                  <li
                    className={styles.detileOverView__itemList_item_detile_txt}
                  >
                    <span
                      className={
                        styles.detileOverView__itemList_item_detile_icon
                      }
                    >
                      ・
                    </span>
                    {props.oneKnotTxt4}
                  </li>
                ) : (
                  <></>
                )}
                {props.oneKnotTxt5 ? (
                  <li
                    className={styles.detileOverView__itemList_item_detile_txt}
                  >
                    <span
                      className={
                        styles.detileOverView__itemList_item_detile_icon
                      }
                    >
                      ・
                    </span>
                    {props.oneKnotTxt5}
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </div>

            {/* 情報設計・デザインの子要素2があれば表示する（出張経費申請サービスのみ表示） */}
            {props.twoKnotTtl ? (
              <div className={styles.detileOverView__itemList_item_subWrap}>
                <h4 className={styles.detileOverView__itemList_item_subTtl}>
                  {props.twoKnotTtl}
                </h4>
                <ul className={styles.detileOverView__itemList_item_detileWrap}>
                  <li
                    className={styles.detileOverView__itemList_item_detile_txt}
                  >
                    <span
                      className={
                        styles.detileOverView__itemList_item_detile_icon
                      }
                    >
                      ・
                    </span>
                    {props.twoKnotTxt1}
                  </li>
                  <li
                    className={styles.detileOverView__itemList_item_detile_txt}
                  >
                    <span
                      className={
                        styles.detileOverView__itemList_item_detile_icon
                      }
                    >
                      ・
                    </span>
                    {props.twoKnotTxt2}
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </li>

        {/* 改善点 */}
        {props.ImprovementPoints1 ? (
          <li className={styles.detileOverView__itemList_item}>
            <h3 className={styles.detileOverView__itemList_item_ttl}>改善点</h3>
            <ul className={styles.detileOverView__itemList_item_detileWrap}>
              <li className={styles.detileOverView__itemList_item_detile_txt}>
                <span
                  className={styles.detileOverView__itemList_item_detile_icon}
                >
                  ・
                </span>
                {props.ImprovementPoints1}
              </li>
              {props.ImprovementPoints2 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.ImprovementPoints2}
                </li>
              ) : (
                <></>
              )}

              {props.ImprovementPoints3 ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {props.ImprovementPoints3}
                </li>
              ) : (
                <></>
              )}
            </ul>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default DetileOverView;
