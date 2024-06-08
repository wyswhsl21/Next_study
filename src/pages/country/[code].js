import React from "react";
import { useRouter } from "next/router";
import SubLayout from "../../../components/SubLayout";
import { getStaticProps } from "./[code]";
export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;

  if(!country){
    return <div>존재하지 않는 국가입니다.</div>
  }
  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;
// fallbacks option 에는 blocking, true ,false 가 있는데 
//false 는 없는 페이지에 대한 파라미터를 요청했을 경우  404를 띄운다.
// blocking 은 정해놓은 paths 에 대한 데이터는 ssg 로 보여주고 없는 페이지에 대한 요청은
// 정해놓지 않은 페이지에 대한 접근 요청은 없는 페이지를 ㅂ여준다
// ture 는 모든 페이지에 대한 요청이 들어오면 임시로 데이터를 받기전 페이지를 보여주고 서버에서 새 페이지를 생성하면 
//생성된 페이지를 보여준다.
// 동적 경로에서 SSG 적용 시킬땐 getStaticePaths 함수를 사용함.
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "KOR" } }],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;
  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }
  return {
    props: country,
  };
};
