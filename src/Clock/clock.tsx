import React, {useEffect, useState} from "react";
import styles from './clock.module.css'


type PropsType = {
    mode?:'digital' |'analog'
}

const get2num=(number:number)=>number<10?'0'+number:number

const Clock: React.FC<PropsType> = (props) => {

    debugger
    const [date,setDate]=useState(new Date())
useEffect(()=>{

    const intervalId=setInterval(()=>{setDate(new Date())},
        1000)
    return ()=>{clearInterval(intervalId)}

},[])

    const secondString=get2num(date.getSeconds())

    const minutesString=get2num(date.getMinutes())

    const getHours=get2num(date.getHours())

    return <>
    {/*    {props.mode==='digital' ? <DigitalClockView date={date}/>*/}

    {/*:<AnalogClockView date={date}/>}*/}
        <DigitalClockView date={date}/>
        <AnalogClockView date={date}/>
    </>
}

export type ClockViewProps={
    date:Date
}

export const DigitalClockView:React.FC<ClockViewProps>=({date})=>{
    return <>
        <span>{get2num(date.getHours())}</span>:
        <span>{get2num(date.getMinutes())}</span>:
        <span>{get2num(date.getSeconds())}</span>
    </>
}

export const AnalogClockView:React.FC<ClockViewProps>=({date})=>{


    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };


    return <>
        <div className={styles.clock}>
            <div className={styles["analog-clock"]}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
            </div>

        </div>
    </>
}

export default Clock