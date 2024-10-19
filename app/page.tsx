/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import styles from "./page.module.scss";
import AppNav from "./GlobalComponent/AppNav";
import TopBlog from "./content/TopBlog";


export default function Home() {
  return (
    <div className="container-fluid">
    <TopBlog/>
    </div>
  );
}
