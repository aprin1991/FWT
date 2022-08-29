import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircleLoading } from "src/icons";
import { services } from "src/services/fetch.service";
import bg from "./../../assets/images/bg1.png";
const Hero = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCharacters();
  }, [id]);

  const getCharacters = async () => {
    const { data } = await services.fetch({
      endPoint: `v1/public/characters/${id}`,
    });
    if (data) {
      setData(data?.data?.results[0]);
    }
    setLoading(false);
  };
  return (
    <div className="mx-auto flex w-8/12 h-screen justify-center items-center hero-detail">
      {loading ? (
        CircleLoading
      ) : (
        <div className="">
          <figure className="flex flex-col md:flex-row gap-12 ">
            <img
              className="w-full md:w-72 h-64 object-cover md:-rotate-12 hover:rotate-0 transition-all"
              src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
              alt={data?.name}
            />
            <figcaption className="w-full md:w-2/3 mt-8 md:mt-0">
              <h1 className="text-xl text-white mb-4 font-bold text-center md:text-left">
                {data?.name}
              </h1>
              <p className="text-md text-white mb-4">{data?.description}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default Hero;
