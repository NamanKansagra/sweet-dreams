"use client";
import { useEffect, useState } from "react";
import TimedContent from "../components/TimedContent";

export default function Home() {
  // Create a state to force re-render every second
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set an interval to update the currentTime every second (1000 ms)
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // This will trigger a re-render every second
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Timed Content Demo</h1>

        {/* Example TimedContent components */}
        {/* You can adjust startTime and endTime for different time-based content */}

        {/* <TimedContent startTime="09:00" endTime="12:00">
        <div className="p-4 bg-green-200 rounded shadow">
          <h2 className="text-xl font-semibold">Morning Content</h2>
          <p>This content is visible between 9:00 AM and 12:00 PM.</p>
        </div>
      </TimedContent> */}

        {/* <TimedContent startTime="12:00" endTime="18:00">
        <div className="p-4 bg-blue-200 rounded shadow">
          <h2 className="text-xl font-semibold">Afternoon Content</h2>
          <p>This content is visible between 12:00 PM and 6:00 PM.</p>
        </div>
      </TimedContent> */}

        {/* Your example */}
        <TimedContent startTime="17:21" endTime="17:23">
          <div className="p-4 rounded shadow">
            <h2 className="text-xl font-semibold text-center pb-2">
              Sweet Dreams
            </h2>
            <p>This content is visible between 6:00 PM and midnight.</p>
          </div>
        </TimedContent>
      </div>
    </div>
  );
}
