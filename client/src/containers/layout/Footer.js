import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 3rem;
  background-color: #1e1e1e;
  color: #fff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  @media (min-width: 768px) {
    margin-top: 80px;
  }
  @media (max-width: 767px) {
    margin-top: 60px;
  }
  div:nth-child(1) {
    a {
      text-decoration: none;
      color: #348ac7;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  div:nth-child(2) {
    span {
      color: red;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>
       Prueba Shop{" "}
        <a href="https://github.com/maicolffsa" target="_blank">
          GitHub
        </a>
      </div>
      <div>
        Creado por <span>♥</span> por Felix Sullon Aguirre
      </div>
    </FooterWrapper>
  );
};
