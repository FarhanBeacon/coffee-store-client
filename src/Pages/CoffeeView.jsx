import React from "react";
import { useLoaderData } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToHomeBtn from "../components/BackToHomeBtn";


const CoffeeView = () => {
  const coffee = useLoaderData();
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="md:w-[75%] mx-auto p-4">
        <BackToHomeBtn />
        <div className="bg-[#F4F3F0] border-2 border-blue-300 p-6 rounded-md max-w-xl mx-auto shadow-md relative min-h-[70vh]">
          <h2 className="text-6xl font-semibold mb-4 text-gray-800 text-center font-rancho drop-shadow-sm">
            Niceties
          </h2>
          <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={coffee.photo}
              alt="Coffee Cup"
              className="w-[200px] h-auto object-contain"
            />
            <div className="text-lg text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Name:</span> {coffee.name}
              </p>
              <p>
                <span className="font-semibold">Quantity:</span>{" "}
                {coffee.quantity}
              </p>
              <p>
                <span className="font-semibold">Supplier:</span>{" "}
                {coffee.supplier}
              </p>
              <p>
                <span className="font-semibold">Taste:</span> {coffee.taste}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {coffee.category}
              </p>
              <p>
                <span className="font-semibold">Details:</span> {coffee.details}
              </p>
            </div>
          </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CoffeeView;
