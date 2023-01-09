import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://63b44f0d9f50390584ad1c20.mockapi.io/api/v1/hotels"
  );
  const data = await res.json();

  const paths = data.map((hotel) => {
    return {
      params: { id: hotel.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://63b44f0d9f50390584ad1c20.mockapi.io/api/v1/hotels/" + id
  );
  const data = await res.json();
  return {
    props: { hotel: data },
  };
};
const hotelDetail = ({ hotel }) => {
  return (
    <>
      <Header />
      <hr />
      <div className="max-w-7xl mx-auto px-8 pt-8 sm:px-16 pb-4">
        <div className="mb-4 pb-4 w-32">
          <h1 className="text-2xl font-bold">{hotel.houseName}</h1>
          <span className="text-sm font-semibold underline">
            {hotel.name}, {hotel.Country}
          </span>
        </div>
        <div className="flex ">
          <div className="rounded-l-lg">
            <Image
              src={hotel.avatar}
              width="620"
              height="420"
              className="rounded-l-lg"
            />
          </div>
          <div className="grid pl-2 rounded-r-lg">
            <div className="pb-1">
              <Image src={hotel.image2} width="300" height="200" />
            </div>
            <div className="pt-1">
              <Image src={hotel.image1} width="300" height="200" />
            </div>
          </div>
          <div className="grid pl-2 rounded-r-lg">
            <div className="pb-1">
              <Image
                src={hotel.image1}
                width="300"
                height="200"
                className="rounded-tr-lg"
              />
            </div>
            <div className="pt-1">
              <Image
                src={hotel.image2}
                width="300"
                height="200"
                className="rounded-br-lg"
              />
            </div>
          </div>
        </div>
        <div className="main-content flex pt-6 mt-6">
          <div>
            <div className="pb-4">
              <h2 className="font-semibold text-2xl">{hotel.houseName}</h2>
              <span className="text-sm text-gray-700 mr-2">
                {hotel.nGuest}guest • {hotel.bedroom}bedroom • {hotel.beds} beds
                • {hotel.bath}bath
              </span>
            </div>
            <hr />
            <div className="experience grid mt-3 pt-4 pb-4">
              <h3 className="font-semibold text-sm">Experienced host</h3>
              <span className="text-sm text-gray-700">
                Marina has 180 reviews for other places
              </span>
              <h3 className="font-semibold text-sm mt-4">
                Great communication
              </h3>
              <span className="text-sm text-gray-700">
                95% of recent guests rated Marina 5-star in communication.
              </span>
              <h3 className="font-semibold text-sm mt-4">
                Free cancellation for 48 hours.
              </h3>
            </div>
            <hr />
            <div className="aircover mt-4 pb-4">
              <h3 className="font-semibold text-2xl">aircover</h3>
              <p className="mt-3 text-sm">
                Every booking includes free protection from Host cancellations,
                listing inaccuracies, and other issues like trouble checking in.
              </p>
              <button className="font-semibold underline">
                <a>Learn more</a>
              </button>
            </div>
            <hr />
            <div className="description mt-3 text-sm pb-4">
              <p>
                The Porer lighthouse was built in 1833 on the islet of the same
                name, 2.5 km in front of the southern cape of Istria and the
                town of Premantura. Its tower is 35 meters high and it's located
                in the center of the lighthouse. There are two apartments at the
                lighthouse. This apartment can accommodate 4 persons with two
                bedrooms, one bathroom with shower and a kitchen.
              </p>
              <button className="font-semibold underline">
                <a>show more</a>
              </button>
            </div>
            <hr />
            <div className="offer mt-4">
              <h3 className="font-semibold text-2xl">What this place offers</h3>
              <div className="offer-list flex mt-3 text-sm">
                <ul className="p-4">
                  <li>Sea view</li>
                  <li>Kitchen</li>
                  <li>Refrigerator</li>
                  <li className="line-through">Carbon monoxide alarm</li>
                </ul>
                <ul className="p-4">
                  <li>Waterfront</li>
                  <li>TV</li>
                  <li>Long term stays allowed</li>
                  <li className="line-through">Smoke alarm</li>
                </ul>
              </div>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <a>Show all 17 amenities</a>
              </button>
            </div>
          </div>
          <div className="card-reservation w-full">
            <div className="experience grid mt-3 pt-4 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:border-gray-700">
              <h3 className="font-semibold text-2xl">
                ${hotel.amount}{" "}
                <span className="text-gray-700 text-sm"> night</span>
              </h3>
              <div className="grid pt-3">
                <div date-rangepicker className="flex items-center">
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      name="start"
                      type="text"
                      className="border text-sm rounded-tl-lg block w-full pl-10 p-2.5  dark:border-gray-900 dark:placeholder-gray-900"
                      placeholder="CHECK-IN"
                    />
                  </div>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      name="end"
                      type="text"
                      className="border text-sm rounded-tr-lg block w-full pl-10 p-2.5  dark:border-gray-900 dark:placeholder-gray-900"
                      placeholder="CHECK-OUT"
                    />
                  </div>
                </div>
                <div>
                  <input
                    name="end"
                    type="text"
                    className="border text-sm rounded-b-lg block w-full  p-2.5  dark:border-gray-900 dark:placeholder-gray-900"
                    placeholder="GUESTS"
                  />
                </div>
                <div className="pt-4">
                  <button className="bg-red-500 hover:bg-red-700 w-full text-white font-semibold py-2 px-4 border border-red-700 rounded">
                    Reserve
                  </button>
                </div>
                <span className="w-full text-center pt-4 pb-3 text-gray-700">
                  You won't be charged yet
                </span>
                <div className="flex pt-3 justify-between">
                  <span className="underline">$421 x 5 nights</span>
                  <span>$2,105</span>
                </div>
                <div className="flex pt-3 pb-3 justify-between">
                  <span className="underline">Service fee</span>
                  <span>$2,105</span>
                </div>
                <hr />
                <div className="flex pt-3 font-semibold justify-between">
                  <span className="">Total before taxes</span>
                  <span>$2,402</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-gray-100">
        <Footer />
      </div>
    </>
  );
};

export default hotelDetail;
