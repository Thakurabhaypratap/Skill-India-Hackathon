import React from "react";

const BuyAndSell = () => {
  return (
    <>
      <section className="bg-gray-2 dark:bg-dark lg:pb-10 lg:pt-[120px] mx-auto w-full max-w-7xl">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="1.jpg"
              CardTitle="50+ Best creative website themes & templates"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Rice is a staple grain, essential for global diets, requiring warm climates, abundant water, and careful cultivation for optimal yield."
              Button="View Details"
            />
            <SingleCard
              image="2.jpg"
              CardTitle="Creative Card Component designs graphic elements"
              CardDescription="Pulses are nutrient-rich crops, including lentils, beans, and peas, offering high protein, fiber, and essential vitamins for a balanced diet."
              Button="View Details"
            />
            <SingleCard
              image="9.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="Explore various grain crops: wheat, rice, corn, barley, oats, and more. Learn their uses, benefits, and cultivation techniques."
              Button="View Details"
            />
            <SingleCard
              image="3.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription=
"Wheat crops are essential for global food security, providing a staple source of carbohydrates and nutrients for millions worldwide."
              Button="View Details"
            />
            <SingleCard
              image="5.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <SingleCard
              image="6.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyAndSell;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      <div className="mb-10 rounded-lg bg-white shadow-1 duration-300 transform hover:scale-105 hover:text-red-400 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 transition-transform">
        <img src={image} alt="" className="w-full rounded-t-lg" />
        <div className="p-1 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="-mb-12 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-red-600 dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </>
  );
};
