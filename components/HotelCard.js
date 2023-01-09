import Link from "next/link";
import Image from "next/image";
export const HotelCard = ({ hotel }) => {
  return (
    <div className="grid max-w-sm overflow-hidden" key={hotel.id}>
      <Link href={"/" + hotel.id}>
        <div key={hotel.id}>
          <Image
            src={hotel.avatar}
            width="300"
            height="300"
            className="rounded-lg"
            alt=""
          />
        </div>
        <div className="pt-2">
          <h2 className="inline-block text-sm font-semibold text-black-700 mr-2">
            {hotel.name}, {hotel.Country}
          </h2>
          <p className="text-sm text-gray-700 mr-2">
            {hotel.size} square meters
          </p>
          <span className="text-sm text-gray-700 mr-2">May1 - 6</span>
          <p className="text-sm text-black-700 mr-2">
            ${hotel.amount} <span className="text-gray-700">night</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;
