import { Modal } from "react-bootstrap";
import "./DetallesPkmn.scss";

export default function DetallePkmn({ e, show, handleClose }) {
  return (
    <Modal className="detallesPkmn" show={show} onHide={handleClose}>
      <Modal.Header className={e.type1} closeButton>
        <Modal.Title className="modalTitle">
          #{e.id} {e.name[0].toUpperCase() + e.name.slice(1)}
          <span className="subtitle">{e.genera}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="detallesPkmn-Body">
        <figure>
          <img src={e.artwork} alt={e.name} />
        </figure>
        <div className="type-container">
          <div className={`${e.type1} type`}>
            <span>{e.type1.toUpperCase()}</span>
          </div>
          {e.type2.length > 0 && (
            <div className={`${e.type2} type`}>
              <span>{e.type2.toUpperCase()}</span>
            </div>
          )}
        </div>
        <div className={`description ${e.type1}Text`}>
          <h5>Description:</h5>
          <p>{e.description.replace("", " ")}</p>
        </div>
        <div className="wh-container">
          <p>
            <span>
              <b>Weight:</b> {e.weight} Kg
            </span>
            <span>
              <b>Height:</b> {e.height} m
            </span>{" "}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
