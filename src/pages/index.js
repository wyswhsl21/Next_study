import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const code = "KOR";
  const router = useRouter();
  const onClickHandler = () => {
    router.push({
      pathname: "/country/[code]",
      query: { code: code },
    });
  };
  /**
   * router push 페이지 이동
   * router replace 새로고침 안하고 뒤로가기
   * router back 새로고침 하면서 뒤로가기
   * router reload 새로고침
   * 
   */
  return (
    <div>
      <div>
        <button onClick={() => onClickHandler()}>Search 페이지 이동</button>
      </div>
      <div>
        <Link href={"/search"}>Search Page 이동</Link>
      </div>

      <div>
        {/* url object 를 이용하여 구조화 하는것도 가능 
        아니면 href="/country/search" 처럼 경로를 지정해주는것도 가능
        */}
        <Link
          href={{
            pathname: "/country/[code]",
            query: { code: code },
          }}
        >
          {code} 페이지 이동
        </Link>
      </div>
    </div>
  );
}
