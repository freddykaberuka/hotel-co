import Link from "next/link";
import Image from "next/image";
export const HotelCard = ({ hotel }) => {
  return (
    <div className="grid max-w-sm overflow-hidden" key={hotel.id}>
      <div className="text-right w-full pr-8">
        <button className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
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
          <h2 className="inline-block text-sm font-semibold text-black-700 mr-2 break-words">
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
