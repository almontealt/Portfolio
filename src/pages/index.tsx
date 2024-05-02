import Top from "@/pages/parts/Top";
import styles from "./index.module.css";
import Header from "@/pages/parts/common/Header";
import Appeal from "@/pages/parts/Top/Appeal";
import Profile from "@/pages/parts/Top/Profile";
import Works from "@/pages/parts/common/Work";
import Contact from "@/pages/parts/Top/Contact";
import MainImage from "@/pages/parts/Top/MainImage";
import PageTopBtn from "./parts/common/PageTopBtn";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Top />
        <Appeal />
        <Profile />
        <Works />
        <MainImage />
        <Contact />
        <PageTopBtn />
      </main>
    </>
  );
}
