import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Card extends Component {
  render() {
    return (
        <div style={{ display: 'inline-block' }} className=' col-6'>
          <div className='' >
            <h2 style={{ fontFamily: 'Chalkduster, fantasy', color: 'blue', textAlign: 'center' }}>{this.props.title}</h2>
            
              <div className="fancy-cards">

                <div className="fancy-card" >

                  <div className="top" style={{ backgroundImage : "url( " + this.props.image + ")"}} >

                    <div className="caption">
                      <h3 className="title">Beautiful Summer</h3>
                      <Link className="button" to={"/"+ this.props.question }>Find Out </Link>  
                    </div>
                  </div>
                  <div className="middle"></div>
                  <div className="bottom"></div>
                </div>
              </div>

          </div>
        </div>
    );
  }
}
export default Card;