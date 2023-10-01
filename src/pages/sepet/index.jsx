import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../../redux/counterSlice";

const Sepet = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cart", cartItems);
  const totalPrice = useSelector((state) => state.counters.totalPrice);

  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementCounter({ selectedHoliday: item }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementCounter({ selectedHoliday: item }));
  };
  return (
    <>
      <h1
        className="mt-5 p-4 rounded shadow "
        style={{ background: "rgba(255, 255, 255, 0.202)" }}
      >
        Sepete Hoşgeldiniz..
      </h1>
      <div className="text-dark mt-5 d-flex justify-content-center gap-5 shadow border rounded align-items-center">
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.name}
            <div className="d-flex justify-content-between align-items-center  gap-5">
              <h1>{item.city}</h1>
              <img className="rounded" width={"50px"} src={item.photo} alt="" />
              <p className="bg-primary rounded text-white">
                {item.description}
              </p>
              <p>
                <span>
                  Kişi Başı{" "}
                  <span className="badge bg-secondary">{item.price}$</span>
                </span>
              </p>

              <div className=" btn-group ">
                <button
                  className="btn btn-primary"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
        <div>
          toplam<span className="badge bg-secondary">{totalPrice}</span>$
        </div>
      </div>
      <div>
        {cartItems.map((item) => (
          <img
            className="mt-5"
            style={{ borderRadius: "50%" }}
            height={"500px"}
            src={item.photo}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default Sepet;
