import React from "react";

const TechnicalParameters = ({product}) => {
  return (
    <>
      <div className="md:flex flex-wrap -mx-6 md:px-20">
        <div className="my-6 px-6 w-1/2">
          <div className="mb-5 flex md:block flex-col gap-2">
            <h3 className="font-semibold">Əsas göstəricilər</h3>
            <div className="flex gap-40 pl-4 md:pt-2">
              <p>İstehsalçı</p>
              <p>{product?.categories[0]?.name}</p>
            </div>
            <div className="flex gap-40 pl-4 md:pt-2">
              <p>İstehsalçı</p>
              <p>{product?.categories[0]?.name}</p>
            </div>
            <div className="flex gap-40 pl-4 md:pt-2">
              <p>İstehsalçı</p>
              <p>{product?.categories[0]?.name}</p>
            </div>
          </div>
          <div className="flex md:block flex-col gap-2">
            <h3 className="font-semibold">Əlavə göstəricilər</h3>
            <div className="flex gap-40 pl-4 md:pt-2">
              <p>İstehsalçı</p>
              <p>{product?.categories[0]?.name}</p>
            </div>
            <div className="flex gap-40 pl-4 md:pt-2">
              <p>İstehsalçı</p>
              <p>{product?.categories[0]?.name}</p>
            </div>
            <div className="flex gap-40 pl-4 md:pt-2">
              <p>İstehsalçı</p>
              <p>{product?.categories[0]?.name}</p>
            </div>
          </div>
        </div>

        <div className="my-6 px-6 md:w-1/2 w-full">
          <h3 className="font-semibold">Məhsul Haqqında</h3>
          <p className="pl-4 pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ut omnis in iure iste dolores necessitatibus animi minima, sed id.
            Fugiat reprehenderit eveniet cum accusantium ullam aut dignissimos
            quam ut.
          </p>
        </div>
      </div>
    </>
  );
};

export default TechnicalParameters;
