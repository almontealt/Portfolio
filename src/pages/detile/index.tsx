import styles from "./index.module.scss";
import DetileErea from "../parts/Detile/DetileErea";
import DetileImg from "../parts/Detile/DetileImg";
import DetileOverView from "../parts/Detile/DetileOverView";
import DetileTop from "../parts/Detile/DetileTop";
import Works from "../parts/common/Work";
import { useRouter } from "next/router";
import Header from "../parts/common/Header/index";
import PageTopBtn from "../parts/common/PageTopBtn";
import BackToPage from "../parts/common/BackToPage";

if (typeof window === "object") {
  //documentを使う関数を入れる
}
const Detile = () => {
  const router = useRouter();

  if (typeof window === "object") {
    //documentを使う関数を入れる
  }
  return (
    <>
      <Header />
      <main className={styles.main}>
        <BackToPage />
        <DetileTop {...router.query} />
        <DetileErea {...router.query} />
        <DetileOverView {...router.query} />
        <DetileImg {...router.query} />
        <PageTopBtn />
        <Works />
      </main>
    </>
  );
};

export default Detile;
