import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SkeletonCard from "../components/SkeletonCard";
import HotelCard from "../components/HotelCard";
import Header2 from "../components/Header2";
import TopHeader from "../components/topHeader";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://63b44f0d9f50390584ad1c20.mockapi.io/api/v1/hotels"
  );
  const data = await res.json();
  return {
    props: { hotels: data },
  };
};

export default function Home({ hotels }) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (hotels) {
      setTimeout(() => {
        setLoading(false);
      });
    }
  }, [hotels]);
  return (
    <>
      <Head>
        <title>Hotel&Co</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header2 />
      <TopHeader/>
      <hr />
      <main className="max-w-full mx-auto px-8 py-8 sm:px-16">
        <div className="flex flex-wrap gap-6">
          {loading ? (
            <SkeletonCard />
          ) : (
            hotels.map((hotel,index) => 
              <HotelCard hotel={hotel} />
            )
          )}
        </div>
      </main>
    </>
  );
}
