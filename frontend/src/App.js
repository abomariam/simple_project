import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function PointInput({title, point, changePoint}) {
    return (
        <div className="point-container">
            <fieldset>
                <legend>{title}</legend>
                <div className="input-container">
                    <label htmlFor='start-point-lat-input'>Latitude:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input id='start-point-lat-input' type='text'
                           value={point.x}
                           onChange={(event) => {
                               changePoint({x: event.target.value, y: point.y})
                           }}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor='start-point-lng-input'>Longitude:&nbsp;&nbsp;</label>
                    <input id='start-point-lng-input' type='text'
                           value={point.y}
                           onChange={(event) => {
                               changePoint({x: point.x, y: event.target.value})
                           }}
                    />
                </div>
            </fieldset>
        </div>
    )
}

function App() {
    const [startPoint, setStartPoint] = useState({x: '', y: ''});
    const [endPoint, setEndPoint] = useState({x: '', y: ''});

    const [distance, setDistance] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(startPoint);
        axios
            .post('api/v1/calculate-distance/', {
                    start_point_lat: startPoint.x,
                    start_point_lng: startPoint.y,
                    end_point_lat: endPoint.x,
                    end_point_lng: endPoint.y
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
                <PointInput title="Start Point" point={startPoint} changePoint={setStartPoint}/>
                <PointInput title="End Point" point={endPoint} changePoint={setEndPoint}/>
                <button onClick={handleSubmit}>have?</button>
            </div>

            <div>
                <h3>{distance}</h3>
            </div>
        </div>
    );
}

export default App;
