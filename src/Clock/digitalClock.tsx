import React from "react";
import './clock.module.css'

type AnalogClockPropsType={

}

export const AnalogClock:React.FC<AnalogClockPropsType>=(props)=> {

    return <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"}  />
                <div className={"dial minutes"}  />
                <div className={"dial hours"}  />
            </div>
            </div>

}