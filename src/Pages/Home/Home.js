import React from "react";
import Profile from "../../assets/home2.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Home.css' ; 

const Home = () => {
  return (
 
    <section className="home section grid">
      <img src={Profile} alt='' className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Rafik Bannour. </span>  QA Tester
          </h1>
          <p className="home__description">
            Hi there! I'm [Your Name], a seasoned full-stack developer with a
            passion for crafting comprehensive web solutions from concept to
            deployment. With a strong foundation in both front-end and back-end

          </p>
          <Link to='about' className="button">
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link> 
        </div>
      </div>

      <div className="color__block">

      </div>
    </section>
    

  );
};

export default Home;
