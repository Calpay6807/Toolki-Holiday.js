import React from "react";
import { addComment } from "../../redux/comment";
import { useDispatch } from "react-redux";
import CommitArea from "../../components/commit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserCommit = () => {
  const notify = () => toast("Başarıyla Eklendi");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      name: e.target[0].value,
      surname: e.target[1].value,
      email: e.target[2].value,
      comment: e.target[3].value,
    };

    dispatch(addComment(comment));
    notify();
  };
  return (
    <>
      <ToastContainer />
      <h1 className="mt-5">Form Alanı...</h1>

      <div className="form rounded shadow p-3 ">
        <form onSubmit={handleSubmit} className="text-start">
          <label className="badge bg-primary mb-2" htmlFor="">
            Adiniz
          </label>
          <input className="form-control" type="text" />

          <label className="badge bg-primary mb-2" htmlFor="">
            Soyadiniz
          </label>
          <input className="form-control" type="text" />

          <label className="badge bg-primary mb-2" htmlFor="">
            Soyadiniz
          </label>
          <input className="form-control" type="email" />

          <label className="badge bg-primary mb-2" htmlFor="">
            Görüş Öneri{" "}
          </label>
          <textarea className="w-100"></textarea>
          <button className="btn btn-primary">Yorum Yap</button>
        </form>
      </div>
      <div className="shadow rounded">
        <h1 className="text-white mt-5">Kullanıcı Yorumları</h1>
        <CommitArea />
      </div>
    </>
  );
};

export default UserCommit;
