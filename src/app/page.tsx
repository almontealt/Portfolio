import Top from "@/page/TOP";
import styles from "./page.module.css";
import Header from "@/page/common/Header";
import Appeal from "@/page/ Appeal";
import Profile from "@/page/Profile";
import Works from "@/page/Work";
import Contact from "@/page/Contact";
import Image from "next/image";
import MainImage from "@/page/MainImage";

export default function Home() {
  return (
    <>
      {/* header */}
      <Header />

      <main className={styles.main}>
        <Top />
        <Appeal />
        <Profile />
        <Works />
        <MainImage />
        <Contact />
      </main>
    </>
  );
}
