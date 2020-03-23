import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import {Image} from 'react-bootstrap';
import Carousel from "nuka-carousel";
// import Data from "../components/data/data";



class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, distance, pics, Breeder} = data[i];
    
    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            //transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel>
              {pics.map((pic, index) => (
                <img src={pic} key={index} alt="profilePicture" />
              ))}
            </Carousel>
            <div className="isi-tulisan">
              <h2>{name},</h2>
              <h5> <Image className="imgProfile" src={require("../img/list/breeder.png")}/> {Breeder}</h5>
              <h5> <Image className="imgProfile" src={require("../img/list/posisi.png")}/> {distance}</h5>
            </div>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
