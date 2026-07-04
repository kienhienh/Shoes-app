import Shoes from "@/app/components/Shoes";
import { fetchListProduct } from "@/app/server/action/product";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoes App - About",
  description:
    "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App - About",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - About",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
};

export default async function About() {
  const data = await fetchListProduct();

  const renderListProduct = () => {
    return data?.map((shoes) => {
      return <Shoes key={shoes.id} shoes={shoes} />;
    });
  };

  return (
    <div className="container">
      <h1>About</h1>
      <div className="row">{renderListProduct()}</div>
    </div>
  );
}
