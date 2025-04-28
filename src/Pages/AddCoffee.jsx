import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import swal from "sweetalert";
import BackToHomeBtn from "../components/BackToHomeBtn";


const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("https://coffee-store-server-coral-sigma.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "Coffee Added Successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="md:w-[75%] mx-auto p-4">
        <BackToHomeBtn />
        <div className="bg-[#F4F3F0] md:p-12 rounded-[10px] m-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]">
          <div className="text-center m-6 mt-0">
            <h1 className="text-6xl my-2 text-[#374151] font-rancho">
              Add New Coffee
            </h1>
            <p className="text-xl text-[#53565b]">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleAddCoffee}>
            {/* 1st Row Name & Quantity */}
            <div className="flex justify-center gap-6 p-4">
              <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="name" className="text-xl text-[#1b1a1acc]">
                  Name
                </label>
                <input
                  className="input w-full"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee name"
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="name" className="text-xl text-[#1b1a1acc]">
                  Quantity
                </label>
                <input
                  className="input w-full"
                  type="number"
                  name="quantity"
                  id=""
                  placeholder="Available Quantity"
                />
              </div>
            </div>
            {/* 2nd Row Supplier & Taste */}
            <div className="flex justify-center gap-6 p-4">
              <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="name" className="text-xl text-[#1b1a1acc]">
                  Supplier
                </label>
                <input
                  className="input w-full"
                  type="text"
                  name="supplier"
                  id=""
                  placeholder="Enter coffee supplier"
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="name" className="text-xl text-[#1b1a1acc]">
                  Taste
                </label>
                <input
                  className="input w-full"
                  type="text"
                  name="taste"
                  id=""
                  placeholder="Enter coffee taste"
                />
              </div>
            </div>
            {/* 3rd Row Category & Details */}
            <div className="flex justify-center gap-6 p-4">
              <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="name" className="text-xl text-[#1b1a1acc]">
                  Category
                </label>
                <input
                  className="input w-full"
                  type="text"
                  name="category"
                  id=""
                  placeholder="Enter coffee category"
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="name" className="text-xl text-[#1b1a1acc]">
                  Details
                </label>
                <input
                  className="input w-full"
                  type="text"
                  name="details"
                  id=""
                  placeholder="Enter coffee details"
                />
              </div>
            </div>
            {/* Photo URL */}
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="name" className="text-xl text-[#1b1a1acc]">
                Photo
              </label>
              <input
                className="input w-full"
                type="text"
                name="photo"
                id=""
                placeholder="Enter photo URL"
              />
            </div>
            {/* Form Action */}
            <div className="p-4 mt-2">
              <input
                type="submit"
                value="Add Coffee"
                className="text-xl font-rancho bg-[#D2B48C] w-full border-2 rounded-[10px] p-2 transition duration-200 active:scale-[98%] cursor-pointer"
              />
            </div>
          </form>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AddCoffee;
