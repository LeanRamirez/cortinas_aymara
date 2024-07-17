import React from "react";
import img from "../../assets/soldadura.jpg";
import style from "./form.module.css";

const Form = () => {
  return (
    <div className={`container-fluid ${style.container}`}>
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-lg-6">
          <div className="card card-body shadow-lg p-5 blur align-items-center">
            <h3 className="text-center">Contactanos</h3>
            <form role="form" id="contact-form" method="post" autoComplete="off">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <label>Nombre</label>
                    <div className="input-group mb-4">
                      <input className="form-control" placeholder="" aria-label="First Name..." type="text" />
                    </div>
                  </div>
                  <div className="col-md-6 ps-2">
                    <label>Apellido</label>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="" aria-label="Last Name..." />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label>Email</label>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label>Tu consulta</label>
                  <textarea name="message" className="form-control" id="message" rows="4"></textarea>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {/* <div className="form-check form-switch mb-4">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked=""/>
                      <label className="form-check-label" for="flexSwitchCheckDefault">I agree to the <a href="javascript:;" class="text-dark"><u>Terms and Conditions</u></a>.</label>
                    </div> */}
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn bg-gradient-dark w-100">Enviar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img src={img} alt="Background" className={`img-fluid ${style.bgImage}`} />
        </div>
      </div>
    </div>
  );
};

export default Form;

