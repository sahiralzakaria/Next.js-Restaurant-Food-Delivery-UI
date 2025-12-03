'use client'
import Countown from "react-countdown"

const endingTime = new Date('2025-12-24');

const CountDown = () => {
    return (
        <Countown date={endingTime} className="text-yellow-300 font-bold text-5xl" />
    )
}

export default CountDown