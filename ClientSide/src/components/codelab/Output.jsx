function Output({ output, error }) {
  return (
    <div className="bg-primary text-blue-50 rounded-b-xl overflow-hidden">
      <div className="px-2 py-1">Output
      </div>
      <div
        className={`h-50  overflow-auto p-2 ${
          error ? "border-2 border-red-500 text-red-500" : "border-2 border-slate-500"
        }`}
      >
        <pre>
          {output.length > 0
            ? output.map((line, index) => <pre key={index}>{line}</pre>)
            : "Click on Run to execute the code"}
        </pre>
      </div>
    </div>
  );
}

export default Output;
