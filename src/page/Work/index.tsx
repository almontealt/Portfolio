import WorksCard from "../WorksCard";
import styles from "./index.module.scss";

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.works_inner}>
        <h2 className={styles.works_ttl}>Works</h2>
        <ul className={styles.works_itemList}>
          {/* SP~TB */}
          <li className={`${styles.works_itemList_item} ${styles.tb}`}>
            <h3 className={styles.works_itemList_item_ttl}>UIUX</h3>
            <div className={styles.works_itemList_item_detile}>
              <WorksCard
                imageURL={"/出張経費申請サービス.png"}
                title={"出張経費申請サービス"}
                category={"UIUX"}
                IsClient={"自主制作"}
              />
              <WorksCard
                imageURL={"/出張経費申請サービス.png"}
                title={"出張経費申請サービス"}
                category={"UIUX"}
                IsClient={"自主制作"}
              />
              <WorksCard
                imageURL={"/出張経費申請サービス.png"}
                title={"出張経費申請サービス"}
                category={"UIUX"}
                IsClient={"自主制作"}
              />
            </div>
          </li>
          <li className={`${styles.works_itemList_item} ${styles.tb}`}>
            <h3 className={styles.works_itemList_item_ttl}>BANNER</h3>
            <div className={styles.works_itemList_item_detile}>
              <WorksCard
                imageURL={"/出張経費申請サービス.png"}
                title={"出張経費申請サービス"}
                category={"UIUX"}
                IsClient={"自主制作"}
              />{" "}
              <WorksCard
                imageURL={"/出張経費申請サービス.png"}
                title={"出張経費申請サービス"}
                category={"UIUX"}
                IsClient={"自主制作"}
              />{" "}
              <WorksCard
                imageURL={"/出張経費申請サービス.png"}
                title={"出張経費申請サービス"}
                category={"UIUX"}
                IsClient={"自主制作"}
              />{" "}
              <WorksCard
                imageURL={"/出張経費申請サービス.png"}
                title={"出張経費申請サービス"}
                category={"UIUX"}
                IsClient={"自主制作"}
              />
            </div>
          </li>

          {/* pc */}
          <li className={styles.works_itemList_item_detile}>
            <WorksCard
              imageURL={"/出張経費申請サービス.png"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />
            <WorksCard
              imageURL={"/ttt 1.jpg"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />
            <WorksCard
              imageURL={"/pcのみ.png"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />
          </li>
          <li className={styles.works_itemList_item_detile}>
            <WorksCard
              imageURL={"/出張経費申請サービス.png"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />
            <WorksCard
              imageURL={"/出張経費申請サービス.png"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />
            <WorksCard
              imageURL={"/出張経費申請サービス.png"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />
          </li>
          <li className={styles.works_itemList_item_detile}>
            <WorksCard
              imageURL={"/出張経費申請サービス.png"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />{" "}
            <WorksCard
              imageURL={"/出張経費申請サービス.png"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />
            <WorksCard
              imageURL={"/出張経費申請サービス.png"}
              title={"出張経費申請サービス"}
              category={"UIUX"}
              IsClient={"自主制作"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
