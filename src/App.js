import React from "react";
import UnixSecond from "./UnixSecond";
import StatusScreen from "./StatusScreen";

export default function App() {
  return (
    <UnixSecond>
      {unixSecond => <StatusScreen second={unixSecond} />}
    </UnixSecond>
  );
}
