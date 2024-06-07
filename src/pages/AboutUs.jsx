import React from "react";
import { Parallax } from "react-parallax";
import aboutUs from "../assets/about-us.png";

export const AboutUs = () => {
  return (
    <>
      <Parallax
        bgImage="./about-us-banner.jpg"
        bgImageAlt="Services Banner"
        strength={300}
      >
        <div className="hero h-[250px] bg-cover bg-no-repeat mb-8 md:h-[400px]">
          <div className="hero-content text-center">
            <div className="max-w-100">
              <h1 className="mb-5 text-6xl text-white">About Us</h1>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 my-10 items-center">
        <div>
          <img src={aboutUs} alt="About Us Background" />
        </div>
        <div className="md:px-20 px-10 text-start">
          <h2 className="text-4xl barlow-font uppercase font-bold">
            Café Robusta
          </h2>
          <p className="mt-10 mb-5">
            <strong>Café Robusta</strong> is situated at the corner of Route 20A
            and Route 19 in downtown Warsaw, New York.
          </p>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="divider lg:divider-horizontal "></div>
            <div
              className="grid flex-grow card rounded-box text-start text-2xl italic"
              id="quote"
            >
              Live your Best Coffee Life
            </div>
          </div>
          <p className="my-5">
            Robusta is a family-run coffee establishment that offers a
            small-town atmosphere with big-city appeal. Its warm and welcoming
            ambiance is ideal for enjoying a delicious cup of coffee or
            sandwich, catching up with friends, or doing some work with the FREE
            WiFi.
          </p>
          <p>Visit us today. We'd love to see you...</p>
        </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-4xl lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none barlow-font uppercase">
          Our Mission Statement
        </h1>
        <p className="mt-8 text-2xl uppercase text-center font-bold barlow-font">
          Café Robusta - PEOPLE OVER PROFITS
        </p>
        <p className="py-6 text-xl">
          We shall value people above profits. Profits will follow if people are
          prioritized.
        </p>
        <p className="pt-2 pb-6 text-xl">
          <strong>Our Mission:</strong> To offer the most appealing environment
          in the business by providing great customer service and hospitality to
          all of our guests while serving them superb cuisine and beverages. To
          be the finest stewards of what God has given us.
        </p>
        <h2 className="text-4xl barlow-font uppercase font-semibold">
          Our 4 C's of Focus
        </h2>
        <ol className="list-none mt-5 text-xl">
          <li>
            <strong>Cleanliness:</strong> We will prioritize cleanliness in
            order to provide a comfortable and clean environment for our clients
            and a hygienic environment for our workers to serve and work.
          </li>
          <li className="py-2">
            <strong>Customers:</strong> We shall do everything possible to
            ensure that our clients are welcomed and treated with decency and
            respect. Our objective is to make them feel valued and to ensure
            that they depart feeling better than when they arrived.
          </li>
          <li className="py-2">
            <strong>Coworkers:</strong> We shall treat each colleague as if they
            were a member of our family, with respect and caring. We shall try
            our best to encourage one another and to create a welcoming
            environment.
          </li>
          <li className="py-2">
            <strong>Community:</strong> Through sponsorships, volunteering,
            contributions, and leadership opportunities, we will participate in
            and support the communities in which we do business.
          </li>
        </ol>
      </div>
    </>
  );
};
