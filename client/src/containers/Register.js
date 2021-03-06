import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions";
const RegisterInWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .register {
    border: 2px solid black;
    padding: 1rem;
    width: 400px;
    height: 550px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    @media (max-width: 767px) {
      width: 300px;
      margin: 100px auto 140px auto;
    }
    @media (min-width: 768px) {
      margin: 150px auto 200px auto;
    }
    &-head {
      justify-self: flex-start;
      font-size: 1.5rem;
    }
    &-text {
      margin-top: 1rem;
      font-size: 0.9rem;
    }
    .msg {
      margin-top: 1rem;
      font-size: 1rem;
      color: grey;
    }
    .first-name {
      margin-top: 2rem;
      input {
        height: 40px;
        box-shadow: none;
        -webkit-appearance: none;
        outline: none;
        border-radius: 0;
        border: 1px solid black;
        padding: 10px 16px;
      }
    }
    .last-name {
      margin-top: 2rem;
      input {
        height: 40px;
        box-shadow: none;
        -webkit-appearance: none;
        outline: none;
        border-radius: 0;
        border: 1px solid black;
        padding: 10px 16px;
      }
    }
    &-email {
      margin-top: 2rem;
      input {
        height: 40px;
        box-shadow: none;
        -webkit-appearance: none;
        outline: none;
        border-radius: 0;
        border: 1px solid black;
        padding: 10px 16px;
      }
    }
    &-password {
      margin-top: 2rem;
      input {
        height: 40px;
        box-shadow: none;
        -webkit-appearance: none;
        outline: none;
        border-radius: 0;
        border: 1px solid black;
        padding: 10px 16px;
      }
    }
    &-button {
      height: 40px;
      margin-top: 2rem;
      border: 1px solid black;
      width: 80.5%;
      height: 37px;
      background-color: rgb(28, 25, 25);
      color: #fff;
      text-align: center;
      line-height: 37px;
      @media (min-width: 768px) {
        width: 59.5%;
      }
      &:hover {
        background-color: #fff;
        color: rgb(28, 25, 25);
        border: 2px solid rgb(28, 25, 25);
        font-weight: 700;
      }
    }
    &-tip {
      margin-top: 1rem;
      font-size: 0.8rem;
      a {
        color: black;
        text-decoration: none;
        &:hover {
          border-bottom: 1px solid black;
        }
      }
    }
  }
`;

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.register);
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(fname, lname, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);

  return (
    <RegisterInWrapper>
      <form onSubmit={submitHandler} className="register">
        <div className="register-head">Bienvenido a Prueba Shop</div>
        <div className="register-text">Registrar una cuenta</div>
        <div className="msg">
          {loading ? "Loading..." : error ? `${error.msg}` : null}
        </div>
        <div className="first-name">
          <input
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="last-name">
          <input
            type="text"
            placeholder="Last Name"
            name="lname"
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <div className="register-email">
          <input
            type="email"
            placeholder="E-Mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            email="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">
        Registrarse
        </button>
        <div className="register-tip">
        ??Ya tienes una cuenta?{" "}
          <Link
            to={redirect === "/" ? "/signin" : "/signin?redirect=" + redirect}
          >
            Inicia Sesi??n
          </Link>
        </div>
      </form>
    </RegisterInWrapper>
  );
};
