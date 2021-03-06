import React from 'react';

const Weather = (props) => {
    return(
        <div>{!props.error ?
        (<div id="main" className="bd-highlight container">
            <div className="cards pt-4">
                {props.city?(<h1>{props.city}, {props.country}</h1>):null}
                <h5 className="py-4">
                    <i className={`wi ${props.weathericon} display-1`}></i>
                </h5>
                {props.temp_celsius?(<h1 className="py-2">{props.temp_celsius}&deg;</h1>):null}
                {minmaxTemp(props.temp_min,props.temp_max)}
                <h4 className="py-4">{props.description}</h4>
            </div>
        </div>): null }</div>
    );
};

function minmaxTemp(min,max) {
    if(min && max){
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        );
    }
}

export default Weather;