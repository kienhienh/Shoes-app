"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { TInitialState, TShoes } from "./type";
import Shoes from "./components/Shoes";

export default function Home() {
  const [state, setState] = useState<TInitialState<TShoes[]>>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchListProduct = async () => {
      setState({
        ...state,
        loading: true,
      });
      try {
        const response = await fetch(
          "https://apistore.cybersoft.edu.vn/api/Product",
        );
        const rs = await response.json();
        console.log(rs);
        setState({
          ...state,
          loading: false,
          data: rs.content,
          error: null,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          data: null,
          error: error,
        });
      }
    };

    fetchListProduct();
  }, []);

  const renderListProduct = () => {
    return state.data?.map((shoes: TShoes) => {
      return <Shoes key={shoes.id} shoes={shoes} />;
    });
  };

  return (
    <div className="container">
      <h1>Learn Nextjs</h1>
      <div className="row">{renderListProduct()}</div>
    </div>
  );
}