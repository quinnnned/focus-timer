import React from "react";
import getMinutesAndSecondsText from "./getMinutesAndSecondsText";

const SECONDS_PER_MINUTE = 60;
const FOCUS_PERIOD_SECONDS = 25 * SECONDS_PER_MINUTE;
const INTERRUPTION_SECONDS = 5 * SECONDS_PER_MINUTE;

const CYCLE_SECONDS = FOCUS_PERIOD_SECONDS + INTERRUPTION_SECONDS;

export default function StatusScreen(props) {
  const secondInCycle = props.second % CYCLE_SECONDS;

  const isFocusSession = secondInCycle < FOCUS_PERIOD_SECONDS;

  const secondsUntilNextTransition = isFocusSession
    ? FOCUS_PERIOD_SECONDS - secondInCycle
    : CYCLE_SECONDS - secondInCycle;

  const color = isFocusSession ? "#800" : "#084";

  return (
    <div>
      <header
        style={{
          backgroundColor: "#000",
          border: `5vh solid ${color}`,
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "calc(10px + 2vmin)",
          color
        }}
      >
        <h1
          style={{
            fontSize: "400%"
          }}
        >
          {isFocusSession ? "I AM FOCUSING" : "I AM HAPPY TO HELP"}
        </h1>
        <h1>{getMinutesAndSecondsText(secondsUntilNextTransition)}</h1>
        <p style={{ width: "80%", textAlign: "center" }}>
          {isFocusSession
            ? "If something time-sensitive needs my immediate attention, feel free to interrupt. Otherwise, please email me or wait for my current focus session to end."
            : "Please get my attention before my next focus session begins."}
        </p>
      </header>
    </div>
  );
}
