import { fetchListByKeyword } from "@/app/server/action/product";
import Shoes from "@/app/components/Shoes";

type Props = {
  searchParams: {
    q: string;
  };
};

export default async function Search(props: Props) {
  const { searchParams } = props;
  const { q } = await searchParams;

  const data = await fetchListByKeyword(q);

  const renderListProduct = () => {
    return data?.map((shoes) => {
      return <Shoes key={shoes.id} shoes={shoes} />;
    });
  };

  return (
    <div className="container">
      <h1>Search</h1>
      <div className="row">{renderListProduct()}</div>
    </div>
  );
}
