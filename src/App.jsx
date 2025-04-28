import React, { useState } from "react";
import swal from "sweetalert";
import { Link, useLoaderData } from "react-router";
import { FaPen, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme1 from "./assets/theme1.png"
import theme2 from "./assets/theme2.png"
import item1 from "./assets/icons/1.png"
import item2 from "./assets/icons/2.png"
import item3 from "./assets/icons/3.png"
import item4 from "./assets/icons/4.png"

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your coffee has been deleted!", {
          icon: "success",
        });
        fetch(`https://coffee-store-server-coral-sigma.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
            }
          });
      } else {
        swal("Your data is safe!");
      }
    });
  };
  return (
    <>
      <header>
        <Header />
        <div
          id="banner"
          className="min-h-[85vh] flex justify-end items-center "
        >
          <div className="text-white w-[45%] me-[5%]">
            <h1 className="text-6xl font-rancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p>
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
          </div>
        </div>
        <div id="sub-banner" className="bg-[#ECEAE3]">
          <div className="w-[80%] mx-auto text-center flex justify-center items-center gap-6 p-4">
            {/* Item-01 */}
            <div className="flex flex-col items-center">
              <img
                src={item1}
                alt="icon"
                width="50px"
                height="50px"
              />
              <h3 className="text-[#331A15] font-rancho text-2xl">
                Awesome Aroma
              </h3>
              <p className="text-xs">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
            {/* Item-02 */}
            <div className="flex flex-col items-center">
              <img
                src={item2}
                alt="icon"
                width="50px"
                height="50px"
              />
              <h3 className="text-[#331A15] font-rancho text-2xl">
                High Quality
              </h3>
              <p className="text-xs">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
            {/* Item-03 */}
            <div className="flex flex-col items-center">
              <img
                src={item3}
                alt="icon"
                width="50px"
                height="50px"
              />
              <h3 className="text-[#331A15] font-rancho text-2xl">
                Pure Grades
              </h3>
              <p className="text-xs">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
            {/* Item-04 */}
            <div className="flex flex-col items-center">
              <img
                src={item4}
                alt="icon"
                width="50px"
                height="50px"
              />
              <h3 className="text-[#331A15] font-rancho text-2xl">
                Proper Roasting
              </h3>
              <p className="text-xs">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="relative">
        <img className="absolute -left-[8%] top-[2%] md:top-[0%] w-[140px] md:w-[300px] h-auto" src={theme1} alt="theme" />
        <img className="absolute -right-[9%]  top-[30%] md:top-[10%] w-[140px] md:w-[300px] h-auto" src={theme2} alt="theme" />
        <h4 className="text-lg text-center mt-[5%]">--- Sip & Savor ---</h4>
        <h1 className="text-3xl text-center font-bold font-rancho">
          Our Popular Products
        </h1>
        <div className="flex justify-center mt-1">
          <Link
            to={"/addCoffee"}
            className="btn bg-[#E3B577] font-rancho text-[#fdf0f0]"
          >
            Add Coffee
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[3%] w-[75%] mx-auto">
          {coffees.map((coffee) => (
            <div key={coffee._id} className="bg-[#F5F4F1] rounded-[10px] p-4 pe-6">
              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center">
                  {/* Image */}
                  <figure className="w-[165px] h-[219px] flex items-center">
                    <img
                      src={coffee.photo}
                      alt="image"
                      width="100%"
                      height="100%"
                    />
                  </figure>
                  {/* Details */}
                  <div className="">
                    <h3>
                      <span className="font-semibold">Name:</span> {coffee.name}
                    </h3>
                    <h4>
                      <span className="font-semibold">Chef:</span>{" "}
                      {coffee.supplier}
                    </h4>
                    <h4>
                      <span className="font-semibold">Quantity:</span>{" "}
                      {coffee.quantity}
                    </h4>
                  </div>
                </div>
                {/* Buttons */}
                <div className="join join-vertical gap-2">
                  <div className="tooltip tooltip-right" data-tip="View">
                    <Link to={`/coffeeView/${coffee._id}`} className="btn w-fit h-fit p-1 text-white rounded-[5px] bg-[#D2B48C]">
                      <FaEye />
                    </Link>
                  </div>
                  <div className="tooltip tooltip-right" data-tip="Edit">
                    <Link to={`/updateCoffee/${coffee._id}`} className="btn w-fit h-fit p-1 text-white rounded-[5px] bg-[#3C393B]">
                      <FaPen />
                    </Link>
                  </div>
                  <div className="tooltip tooltip-right" data-tip="Delete">
                    <button
                      onClick={() => handleDelete(coffee._id)}
                      className="btn w-fit h-fit p-1 text-white rounded-[5px] bg-[#EA4744]"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
