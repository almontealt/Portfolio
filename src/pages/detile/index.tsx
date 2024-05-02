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
  console.log(router.query.mainVisual_sp);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <BackToPage />
        <DetileTop
          {...router.query}
          TopImage={`${router.query.TopImage}`}
          category={`${router.query.category}`}
          title={`${router.query.title}`}
          Isclient={`${router.query.Isclient}`}
          overView={`${router.query.overView}`}
        />
        <DetileErea
          scoop={`${router.query.scoop}`}
          tool={`${router.query.tool}`}
          schedule={`${router.query.schedule}`}
          prototypeURL={`${router.query.prototypeURL}`}
          CreationFlow_spTb={`${router.query.CreationFlow_spTb}`}
          CreationFlow_pc={`${router.query.CreationFlow_pc}`}
        />
        <DetileOverView
          purpose1={`${router.query.purpose1}`}
          purpose2={`${router.query.purpose2}`}
          purpose3={`${router.query.purpose2}`}
          concept1={`${router.query.concept1}`}
          concept2={`${router.query.concept2}`}
          concept3={`${router.query.concept3}`}
          target1={`${router.query.target1}`}
          target2={`${router.query.target2}`}
          target3={`${router.query.target3}`}
          target4={`${router.query.target4}`}
          IllustrationSp={`${router.query.IllustrationSp}`}
          IllustrationPcTb={`${router.query.IllustrationPcTb}`}
          // ---
          oneKnotTtl={`${router.query.oneKnotTtl}`}
          oneKnotTxt1={`${router.query.oneKnotTxt1}`}
          oneKnotTxt2={`${router.query.oneKnotTxt2}`}
          oneKnotTxt3={`${router.query.oneKnotTxt3}`}
          oneKnotTxt4={`${router.query.oneKnotTxt4}`}
          oneKnotTxt5={`${router.query.oneKnotTxt5}`}
          twoKnotTtl={`${router.query.twoKnotTtl}`}
          twoKnotTxt1={`${router.query.twoKnotTxt1}`}
          twoKnotTxt2={`${router.query.twoKnotTxt2}`}
          ImprovementPoints1={`${router.query.ImprovementPoints1}`}
          ImprovementPoints2={`${router.query.ImprovementPoints2}`}
          ImprovementPoints3={`${router.query.ImprovementPoints3}`}
        />
        <DetileImg
          mainVisual_sp={`${router.query.mainVisual_sp}`}
          mainVisual_tb={`${router.query.mainVisual_tb}`}
          mainVisual_pc={`${router.query.mainVisual_pc}`}
          category={`${router.query.category}`}
          // {...router.query}
        />
        {/* <DetileImg props={router.query.mainVisual_sp,router.query.mainVisual_sp} /> */}
        <PageTopBtn />
        <Works />
      </main>
    </>
  );
};

export default Detile;
