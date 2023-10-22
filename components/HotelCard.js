import Link from "next/link";
import Image from "next/image";

export const HotelCard = ({ hotel }) => {
  return (
    <div className="max-w-sm overflow-hidden border border-gray-300 rounded-lg shadow-lg">
      <div className="relative">
        <button className="absolute right-0 p-1 -mt-1 -mr-1 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <Link href={"/" + hotel.id}>
          <div>
            <Image
              src={hotel.avatar}
              className="rounded-t-lg"
              alt=""
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </Link>
      </div>
      <div className="p-4">
        <Link href={"/" + hotel.id}>
          <div>
            <h2 className="text-sm md:text-base font-semibold text-black-700 mb-1 break-words">
              {hotel.name}, {hotel.country}
            </h2>
            <p className="text-sm text-gray-700 mb-1">
              {hotel.size} square meters
            </p>
            <span className="text-sm text-gray-700 mb-1">May 1 - 6</span>
            <p className="text-sm text-black-700">
              ${hotel.amount} <span className="text-gray-700">per night</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
