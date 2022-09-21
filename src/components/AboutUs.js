import React from 'react'
import './../scss/components_scss/AboutUs.scss';
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import { ReactComponent as Signature } from "../assets/Signature.svg";
import { Element } from "react-scroll";


export default function AboutUs() {
  return (
    <Element name="test2">
    <div className="about-us-container">

      <div className="about-us-content">
        <div>
            <div className="about-us-header">O nas</div>
            <Decoration/>
            {/* <img src="./../assets/Decoration.svg" alt=""></img> */}
            <div className="about-us-text">Nori grape silver beet brocoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</div>
            <div className="about-us-signature"><Signature/></div>
            {/* <img src="../assets/Signature.png" alt=""></img> */}
        </div>



        {/* <div>
          <div>
            <p>O nas</p>
            <img src="../assets/Decoration.svg" alt=""/>
            <p>Nori grape silver beet brocoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <img src="../assets/Signature.svg" alt=""/>
          </div>
        </div> */}
      </div>

      <div className="about-us-image">
        <img src={require('../assets/People.jpg')} />
      </div>

    </div>
    </Element>
  )
}
