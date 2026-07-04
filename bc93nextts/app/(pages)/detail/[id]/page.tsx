import { fetchDetailProduct } from "@/app/server/action/product";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const prodDetail = await fetchDetailProduct(id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}

export default async function Detail(props: Props) {
  const { params } = props;
  const { id } = await params;

  const data = await fetchDetailProduct(id);

  return (
    <div>
      <h1>Detail</h1>
      <Image src={data.image} alt={data.name} width={200} height={200} />
      <h1>Tên: {data.name}</h1>
      <p>Mô tả: {data.description}</p>
    </div>
  );
}