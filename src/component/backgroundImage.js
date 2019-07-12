import React, {Component} from 'react';
//import{Link} from 'react-router-dom';
import styled from 'styled-components';
import bk2 from '../bk2.jpg';
class BackgroundImage extends Component{
    render(){
     const BackgroundImage = styled.div` background: ${props => `url(${props.background})`};
  background-position: center;
  background-size: cover;
`;
        return(

            <div>
           
               
           <BackgroundImage background={bk2} />


                
            </div>
        );
    }
}
export default BackgroundImage;