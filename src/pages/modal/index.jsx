import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCard({ show, handleClose, item }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item ? item.city : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="badge bg-secondary">{item ? item.name : ""}</p>
          <div>
            {item && (
              <div>
                <img width={"150px"} src={`/public/${item.photo[0]}`} alt="" />
              </div>
            )}
          </div>
          <p>
            {/* Fiyat: <span className="badge bg-primary">{item.price}$</span> */}
          </p>
          <div className="d-flex flex-column gap-2 ">
            <h3 className="badge bg-secondary">Oda özellikleri</h3>

            <span>
              <i class="bi bi-check2-all"></i>Şömineli
            </span>
            <span>
              <i class="bi bi-check2-all"></i>Ekstra Büyük Yatak
            </span>
            <span>
              <i class="bi bi-check2-all"></i>Kral Dairesi
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="warning">Sepet</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCard;
