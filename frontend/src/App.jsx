import Input from "./components/Input";
function App() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-base-200">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full grid grid-cols-4 gap-4 p-4">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center text-4xl md:text-6xl lg:text-8xl font-bold transform -rotate-45 text-white md:text-white lg:text-black select-none"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                shorten it
              </div>
            ))}
          </div>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-8">
            Shorten it
          </h1>
          <div className="w-full max-w-md rounded-lg shadow-lg p-6 bg-base-100">
            <Input />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
