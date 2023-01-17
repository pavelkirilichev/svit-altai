import { useRef, useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function LoginForm({ modal, setModal }) {
  const [error, setError] = useState("");
  const inputLogin = useRef();
  const inputPass = useRef();

  function sendLoginForm() {
    const login = inputLogin.current.value;
    const pass = inputPass.current.value;

    if (login.length > 0 && pass.length > 0) {
      const loginData = {
        login: login,
        pass: pass,
      };
      fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.text())
        .then((data) => {
          if (data != "Неверный логин или пароль!") {
            data = JSON.parse(data);
            console.log(data);
            cookies.set("id", data.ID);
            cookies.set("pass", data.password);
            setModal();
          } else {
            setError(data);
          }
        });
    } else {
      setError("Заполнены не все поля!");
    }
  }

  return (
    <div className="modal_form">
      <div className="reg login">
        <img src="../images/auth/logo.svg" className="reg__logo" />
        <span className="reg__title">Войти</span>
        <form className="reg__form">
          <div className="reg__input__list">
            <div className="reg__input__item">
              <span className="reg__input__title">Логин</span>
              <input className="reg__input" ref={inputLogin} />
            </div>
            <div className="reg__input__item">
              <span className="reg__input__title">Пароль</span>
              <input className="reg__input" ref={inputPass} type="password" />
            </div>
          </div>
          <span className="modal__error">
            {typeof error == "undefined" ? "" : error}
          </span>
          <div className="reg__form__buttons login__form__buttons">
            <div className="reg__form__buttons__row">
              <button
                className="reg__form__btn reg__btn-white"
                onClick={(e) => {
                  e.preventDefault();
                  sendLoginForm();
                  //setModal();
                }}
              >
                Войти
              </button>
              <button
                type="button"
                className="reg__form__btn reg__btn-orange"
                onClick={() => {
                  setModal("reg");
                }}
              >
                Регистрация
              </button>
            </div>

            <button
              className="reg__form__btn reg__btn-white"
              type="button"
              onClick={() => {
                setModal();
              }}
            >
              Назад
            </button>
          </div>
        </form>
        <span className="login__recovery">Восстановить пароль или логин</span>
        <div className="reg__footer login__footer">
          <span className="reg__footer__content">
            © 2010-2018 <br />
            Торговая марка «Свит»
          </span>
          <span className="reg__footer__content">
            Пользовательское <br />
            соглашение
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
