import Image from "next/image";
import { DetileOverViewType } from "../../../detileInfo";
import styles from "./index.module.scss";

const DetileOverView = ({
  purpose1,
  purpose2,
  purpose3,
  concept1,
  concept2,
  concept3,
  target1,
  target2,
  target3,
  target4,
  IllustrationSp,
  IllustrationPcTb,
  oneKnotTtl,
  oneKnotTxt1,
  oneKnotTxt2,
  oneKnotTxt3,
  oneKnotTxt4,
  oneKnotTxt5,
  twoKnotTtl,
  twoKnotTxt1,
  twoKnotTxt2,
  ImprovementPoints1,
  ImprovementPoints2,
  ImprovementPoints3,
}: DetileOverViewType) => {
  console.log(IllustrationSp);
  console.log(IllustrationPcTb);

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
                {purpose1}
              </li>
              {purpose2 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {purpose2}
                </li>
              ) : (
                <></>
              )}
              {purpose3 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {purpose3}
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
                {concept1}
              </li>
              {concept2 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {concept2}
                </li>
              ) : (
                <></>
              )}
              {concept3 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {concept3}
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
                {target1}
              </li>
              {target2 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {target2}
                </li>
              ) : (
                <></>
              )}

              {target3 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {target3}
                </li>
              ) : (
                <></>
              )}
              {target4 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {target4}
                </li>
              ) : (
                <></>
              )}
            </ul>
          </li>
        </ul>

        {/* 中間IMG  */}
        {IllustrationSp !== "undefined" ? (
          <Image
            src={IllustrationSp as string}
            width={375}
            height={50}
            // fill
            alt={""}
            className={styles.detileOverView__itemList_img_sp}
          />
        ) : (
          <></>
        )}
        {IllustrationPcTb !== "undefined" ? (
          <Image
            src={IllustrationPcTb as string}
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
              {oneKnotTtl !== "undefined" ? (
                <h4 className={styles.detileOverView__itemList_item_subTtl}>
                  {oneKnotTtl}
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
                  {oneKnotTxt1}
                </li>
                {oneKnotTxt2 !== "undefined" ? (
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
                    {oneKnotTxt2}
                  </li>
                ) : (
                  <></>
                )}
                {oneKnotTxt3 !== "undefined" ? (
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
                    {oneKnotTxt3}
                  </li>
                ) : (
                  <></>
                )}
                {oneKnotTxt4 !== "undefined" ? (
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
                    {oneKnotTxt4}
                  </li>
                ) : (
                  <></>
                )}
                {oneKnotTxt5 !== "undefined" ? (
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
                    {oneKnotTxt5}
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </div>

            {/* 情報設計・デザインの子要素2があれば表示する（出張経費申請サービスのみ表示） */}
            {twoKnotTtl !== "undefined" ? (
              <div className={styles.detileOverView__itemList_item_subWrap}>
                <h4 className={styles.detileOverView__itemList_item_subTtl}>
                  {twoKnotTtl}
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
                    {twoKnotTxt1}
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
                    {twoKnotTxt2}
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </li>

        {/* 改善点 */}
        {ImprovementPoints1 !== "undefined" ? (
          <li className={styles.detileOverView__itemList_item}>
            <h3 className={styles.detileOverView__itemList_item_ttl}>改善点</h3>
            <ul className={styles.detileOverView__itemList_item_detileWrap}>
              <li className={styles.detileOverView__itemList_item_detile_txt}>
                <span
                  className={styles.detileOverView__itemList_item_detile_icon}
                >
                  ・
                </span>
                {ImprovementPoints1}
              </li>
              {ImprovementPoints2 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {ImprovementPoints2}
                </li>
              ) : (
                <></>
              )}

              {ImprovementPoints3 !== "undefined" ? (
                <li className={styles.detileOverView__itemList_item_detile_txt}>
                  <span
                    className={styles.detileOverView__itemList_item_detile_icon}
                  >
                    ・
                  </span>
                  {ImprovementPoints3}
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
