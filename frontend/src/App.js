import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

// function handleSubmit(event) {
//   const start_point_lat = document.querySelector('#start-point-lat-input').value;
//   const start_point_lng = document.querySelector('#start-point-lng-input').value;
//   const end_point_lat = document.querySelector('#end-point-lat-input').value;
//   const end_point_lng = document.querySelector('#end-point-lng-input').value;
//
//     axios
//         .post('api/v1/calculate-distance/', {
//                 start_point_lat: start_point_lat,
//                 start_point_lng: start_point_lng,
//                 end_point_lat: end_point_lat,
//                 end_point_lng: end_point_lng
//             }
//         ).then(({data}) => {
//         document.querySelector('#distance').textContent = `${data.distance}`
//     })
//         .catch(err => console.log(err))
// }

function App() {
    const [startPointLat, setStartPointLat] = useState('');
    const [startPointLng, setStartPointLng] = useState('');
    const [endPointLat, setEndPointLat] = useState('');
    const [endPointLng, setEndPointLng] = useState('');
    const [distance, setDistance] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('api/v1/calculate-distance/', {
                start_point_lat: startPointLat,
                start_point_lng: startPointLng,
                end_point_lat: endPointLat,
                end_point_lng: endPointLng
            }
        ).then(({data}) => {
            setDistance(data.distance);
        })
            .catch(err => console.log(err))
    }
  return (
    <div className="App">
        <h1>Distance Calculator</h1>
      <div>
          <div className="point-container">
          <fieldset>
              <legend>Start Point</legend>
              <div className="input-container">
            <label htmlFor='start-point-lat-input'>Latitude:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id='start-point-lat-input' type='text'
                   value={startPointLat}
                   onChange={(event)=>{setStartPointLat(event.target.value)}}
            />
              </div>
              <div className="input-container">
            <label htmlFor='start-point-lng-input'>Longitude:&nbsp;&nbsp;</label>
            <input id='start-point-lng-input' type='text'
                   value={startPointLng}
                   onChange={(event)=>{setStartPointLng(event.target.value)}}
            />
              </div>
        </fieldset>
          </div>
          <div className="point-container">
          <fieldset>
              <legend>End Point</legend>
              <div className="input-container">
            <label htmlFor='end-point-lat-input'>Latitude:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id='end-point-lat-input' type='text'
                    value={endPointLat}
                   onChange={(event)=>{setEndPointLat(event.target.value)}}
            />
              </div>
              <div className="input-container">
            <label htmlFor='end-point-lng-input'>Longitude:&nbsp;&nbsp;</label>
            <input id='end-point-lng-input' type='text'
                    value={endPointLng}
                   onChange={(event)=>{setEndPointLng(event.target.value)}}
            />
              </div>
          </fieldset>
          </div>
        <button onClick={handleSubmit}>have?</button>
      </div>

      <div>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default App;
