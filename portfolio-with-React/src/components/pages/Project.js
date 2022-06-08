import React from "react";
import moviepic from "../../images/Movie-1200-630.jpg";
import restaurantimg from "../../images/restaurant-portfolio-img.webp";
import weather from '../../images/weatherimg.jpg'

export default function Project() {
  return (
    <div>
      <section class="card">
        <a href="https://roogle-2022.herokuapp.com/" target="no_blank">
          {" "}
          <img src={restaurantimg} alt="restaurant finder app" />{" "}
        </a>
        <h3>Restaurant Finder</h3>
      </section>
      <section class="card">
        <a
          href="https://jnbanks.github.io/Project1-Movie-Beverage/"
          target="no_blank"
        >
          {" "}
          <img src={moviepic} alt="movie finder" />{" "}
        </a>
        <h3>Boozy Movies</h3>
      </section>
      <section class="card">
        {" "}
        <a href="https://jnbanks.github.io/WeatherApp/" target="no_blank">
          {" "}
          <img src={weather} alt="weather" />
        </a>
        <h3>Weather Analysis</h3>
      </section>
    </div>
  );
}
