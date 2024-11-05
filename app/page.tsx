/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import styles from "./page.module.scss";
import AppNav from "./GlobalComponent/AppNav";
import TopBlog from "./content/TopBlog";
import AllBlog from "./content/AllBlog";


export default function Home() {
  return (
    <div className="container-fluid">
    <TopBlog limit={4}/>
    <hr></hr>
    <AllBlog limit={5}/>
    </div>
  );
}
