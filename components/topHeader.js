import Image from "next/image";

const TopHeader = () => {
  return (
    <div className="pt-6">
      <ul className="flex flex-wrap justify-center items-center space-x-4">
        <li className="flex items-center mb-2">
          <div className="pr-2">
            <Image
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              width={24}
              height={24}
            />
          </div>
          OMG
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-4">
            <Image
              src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
              width={24}
              height={24}
            />
          </div>
          Lakefront
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-2">
            <Image
              src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
              width={24}
              height={24}
            />
          </div>
          Yurts
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-4">
            <Image
              src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
              width={24}
              height={24}
            />
          </div>
          Countryside
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-4">
            <Image
              src="https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg"
              width={24}
              height={24}
            />
          </div>
          Ski-in/out
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-3">
            <Image
              src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
              width={24}
              height={24}
            />
          </div>
          Cabins
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-7">
            <Image
              src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
              width={24}
              height={24}
            />
          </div>
          Amazing views
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-4">
            <Image
              src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
              width={24}
              height={24}
            />
          </div>
          Trending
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-2">
            <Image
              src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
              width={24}
              height={24}
            />
          </div>
          Luxe
        </li>
        <li className="flex items-center mb-2">
          <div className="pr-6">
            <Image
              src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
              width={24}
              height={24}
            />
          </div>
          Tiny homes
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
