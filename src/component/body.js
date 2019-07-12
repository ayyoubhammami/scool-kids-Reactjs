import React, {Component} from 'react';
//import{Link} from 'react-router-dom';
import Card from '../component/card.js';
import math from '../math.jpg';
import alphabet from '../alphabet.jpg';
import fruit from '../fruit.jpg';
import bk2 from '../bk2.jpg';
import css from '../card.css';
import couleur from '../couleur.jpg'


class Body extends Component{
    render(){
        return(
            
            <div style={{backgroundImage: 'url(' + bk2 + ')', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                 <div className='container'>
                 <h1 className="text-center" style={{fontFamily:'Chalkduster, fantasy',marginTop:'95px'}}>School Kids </h1>
                <h1 style={{color:'red',width:'400px',textAlign:'center',marginLeft:'200px'}}>bodyyy </h1>
                <Card imgg={math} title='Mathématique' image = {math} question = "question2"/>
                <Card imgg={alphabet} title='Alphabet' image = {alphabet}/>
                <Card imgg={fruit} title='Fruit' image = {fruit} />
                <Card imgg={math} title='Couleur' image = {couleur} />
                    
                 </div>
            </div>
        );
    }
}
export default Body;