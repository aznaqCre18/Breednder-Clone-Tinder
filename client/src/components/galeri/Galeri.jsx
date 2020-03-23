import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import Data from './../data/data';

const data = Data.galerys;


export class Galeri extends Component {
  render() {
    return (
      <>
        {data.map((isi, index) => {
          return (
            isi.galeri.map(isiData => {
              return(
              <div key={isiData.key}>
                <div className="new-div">
                  <Image src={isiData.pict} className='new-foto-galeri' />
                  <div className="new-pet-name">{isiData.name}</div>
                </div>
              </div>
              )
            })

          )
        })}
      </>
    );
  }
}

export default Galeri;
