import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold text-blue-600">
        AI Interview Simulator
      </h1>
      <Button onClick={() => alert("Let's start the interview!")}>
        Start Interview
      </Button>
    </div>
  );
}

export default App;
