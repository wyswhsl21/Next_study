import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ name }) {
  /**
   * router push 페이지 이동
   * router replace 새로고침 안하고 뒤로가기
   * router back 새로고침 하면서 뒤로가기
   * router reload 새로고침
   *
   */
  return <div>{name}</div>;
}
//SSR 을 위해 서버 측에서 컴포넌트에게 전달할 데이터를 설정하는 함수
export const getServerSideProps = async () => {
  return {
    props: {
      name: "KOREA",
    },
  };
};
