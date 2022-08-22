
import type { NextPage, NextPageContext } from "next";
import { useEffect, useState } from "react";
import Banner from "../components/banner";
import Header from "../components/header";
import useFetch from "../lib/usefetch";

interface DataProps {
  image: string;
  videoUrl: string;
  title: string;
  jp_title: string;
  description: string;
  rating: string;
  released: string;
  type: string;
}
type Props = {
  data: DataProps[]
}
const IndexPage = ({ data }: Props) => {
  
  return (
    <> 
      <Header />
      <div>
        <Banner
          title={data[0].title}
          videourl={data[0].videoUrl}
          synopsis={data[0].description}
          rating={data[0].rating}
          airingtime={data[0].type}
          released={data[0].released}
          onWatchClick={() => {alert("Watch")}}
          onAddClick={() => {alert("Add")}}
        />
      </div>
      
     
    </>
  )
}
export async function getServerSideProps(context: NextPageContext) {
  
  const res = await fetch(`https://api.kitari.ml/v1/banner`, {
    method: "GET",
    headers: new Headers({
      token: process.env.KITARI_TOKEN || ""
    }),
  });

  const data = await res.json() as Promise<DataProps[]>
  return { props: { data } }
}

export default IndexPage;
