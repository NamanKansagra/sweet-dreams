import TimedContent from "../components/TimedContent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Timed Content Demo</h1>

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

      <TimedContent startTime="15:38" endTime="15:39">
        <div className="p-4 bg-purple-200 rounded shadow">
          <h2 className="text-xl font-semibold">Evening Content</h2>
          <p>This content is visible between 6:00 PM and midnight.</p>
        </div>
      </TimedContent>
    </div>
  );
}
