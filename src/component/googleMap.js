import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Googlemap extends Component {
  static defaultProps = {
    center: {
      lat: 36.8340957734919,
      lng: 10.239141014641682
    },
    zoom: 15
  };
 
  render() {
    return (
     
      <div style={{ height: '50vh' ,fontSize:'10px',}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.8340957734919}
            lng={10.239141014641682}
            text={'GOM{/}CODE'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Googlemap;