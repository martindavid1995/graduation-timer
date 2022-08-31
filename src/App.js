import React, { useEffect, useState } from "react";
import moment from "moment";
import { calcTimeDelta } from "react-countdown";
import "./styles.css";

export default function () {
  const [time, setTime] = useState(Date.now());
  const delt = calcTimeDelta(moment("2023-05-19"));

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function leadingZeros(num) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <div className="body">
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-x3s1" colSpan="4">
              Time until I graduate
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-bwtg">{leadingZeros(delt.days)}</td>
            <td className="tg-bwtg">{leadingZeros(delt.hours)}</td>
            <td className="tg-bwtg">{leadingZeros(delt.minutes)}</td>
            <td className="tg-bwtg">{leadingZeros(delt.seconds)}</td>
          </tr>
          <tr>
            <td className="tg-baqh">Days</td>
            <td className="tg-baqh">Hours</td>
            <td className="tg-baqh">Minutes</td>
            <td className="tg-baqh">Seconds</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
