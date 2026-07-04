import type { TShoes } from "./../../type";
import Image from "next/image";
import Link from "next/link";

type Props = {
  shoes: TShoes;
};

export default function Shoes(props: Props) {
  const { shoes } = props;
  return (
    <div className="col-4">
      <div className="card">
        {/* <img className="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <Image src={shoes.image} alt={shoes.name} width={200} height={200} />
        <div className="card-body">
          <h4 className="card-title">{shoes.name}</h4>
        </div>
        <Link href={`/detail/${shoes.id}`} className="btn btn-success">
          Detail
        </Link>
      </div>
    </div>
  );
}
