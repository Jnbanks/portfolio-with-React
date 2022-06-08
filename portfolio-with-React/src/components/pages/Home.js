import React from 'react';
import '../../styles/style.css';
import background from '../../images/UtahBackground.jpg';
import profilePic from '../../images/ProfPic.JPG';


export default function Home() {
  return (
    <div class="homediv">
      <img class="profpic"  src={profilePic} alt="Profile Picture"></img>
      <img class="background" src={background} alt="Utah-landscape"></img>
      <main class="homemain">
      <h1 class="homeh1">Jonathan Banks</h1>
      <p class="homep">
        Hello and welcome to my portfolio! <br/>
        Here you can take a look at a few of my projects, read a little about me and get in touch if you'd like. 
      </p>
      </main>
    </div>
  );
}
