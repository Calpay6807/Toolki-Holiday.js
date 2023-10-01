import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../redux/comment";

const CommitArea = () => {
  const state = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Redux eylemini tetikleyerek yorumu silin
    dispatch(deleteComment(id));
  };

  return (
    <div className="d-flex text-white flex-column justify-content-center align-items-center ">
      {state.map((item) => (
        <div className="d-flex justify-content-center align-items-center gap-5 border rounded m-2 p-4">
          <img
            className="rounded"
            width={"50px"}
            src="https://picsum.photos/200/300"
            alt=""
          />
          <span className="badge bg-secondary">Kullanıcı İsim:</span>
          <h1>
            {item.name} <span>{item.surname}</span>{" "}
          </h1>
          <p>
            E-Mail:
            <span className="badge bg-secondary">{item.email}</span>
          </p>
          <p>
            Kullanıcı Yorumu
            <span className="badge bg-secondary"> {item.comment}</span>
          </p>
          <button
            onClick={() => handleDelete(item.id)}
            className="btn btn-danger"
          >
            Yorumu Sil
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommitArea;
