import React from "react";
import "./sass/About.scss";
import AboutIcon from "../../assets/images/AboutIcon.png";

const About = () => {
  return (
    <>
      <div className="about-page" id="about-page-id">
        <h1 className="about-page__title">Sobre mim</h1>
        <div className="about-page__infos-wrapper">
          <img className="about-page__image" src={AboutIcon} alt="" />
          <div className="about-page__about-me">
            <h2 className="about-page__subtitle">Olá, me chamo Adriano de Castro!</h2>
            <p className="about-page__text">
              Faço Bacharel em TI na UNIVESP (Universidade Virtual do Estado de São Paulo)
              e sou Técnico em Desenvolvimento de Sistemas e Administração. Nesse período
              de faculdade venho me dedicando no aprendizado para o desenvolvimento em Front End usando React, 
              no Back End usando Python e NodeJS e no Mobile com React Native.
              Busco adquirir cada vez mais experiência como desenvolvedor
              FullStack e me desenvolver como pessoa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { About };
