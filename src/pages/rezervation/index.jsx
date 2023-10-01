import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHoliday } from "../../redux/holidaySlice";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ModalCard from "../modal";
import { addToCart } from "../../redux/cart";
import { useNavigate } from "react-router-dom";

const Rezervation = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Seçili öğeyi saklamak için state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (item) => {
    setSelectedItem(item); // Seçili öğeyi ayarla
    setShow(true);
  };

  const state = useSelector((state) => state.holiday.data);

  useEffect(() => {
    axios
      .get("http://localhost:3000/hotel")
      .then((res) => dispatch(setHoliday(res.data)));
  }, [dispatch]);

  const handleAddToCart = (item) => {
    // Redux'ta tanımladığınız "addToCart" eylemini kullanarak seçilen öğeyi sepete ekleyin
    dispatch(addToCart(item));

    // Sepete eklenen öğeyi sunucuya göndermek için POST isteği yapın
    axios
      .post("http://localhost:3000/sepet", { item: item }) // Öğeyi sunucuya gönderin
      .then((response) => {
        // Başarılı bir yanıtı işleyin (isteğe bağlı)
        console.log("Öğe başarıyla sepete eklendi:", response.data);
      })
      .catch((error) => {
        // Hataları işleyin
        console.error("Öğe sepete eklenirken hata oluştu:", error);
      });
    navigate("/sepet");
  };

  console.log(state);
  // Sepet içinde belirli bir öğeyi kontrol eden bir işlev

  return (
    <div className="mt-5 d-flex justify-content-center flex-wrap gap-2">
      {state.map((item) => (
        <Card
          key={item.id}
          className="bg-dark text-white"
          style={{ height: "550px", width: "700px" }}
        >
          <Card.Img
            style={{ height: "500px" }}
            src={item.photo}
            alt="Card image"
          />
          <Card.ImgOverlay className="d-flex flex-column align-items-center">
            <Card.Title className="badge bg-secondary">{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text className="rounded bg-secondary p-1">
              {item.city}
            </Card.Text>
            <div className="btn-group">
              <Button variant="primary" onClick={() => handleShow(item)}>
                Detaylar İçin ...
              </Button>
              <Button variant="warning" onClick={() => handleAddToCart(item)}>
                Sepete Ekle
              </Button>
            </div>
          </Card.ImgOverlay>
          <ModalCard
            show={show}
            handleClose={handleClose}
            item={selectedItem}
          />
        </Card>
      ))}
    </div>
  );
};

export default Rezervation;
