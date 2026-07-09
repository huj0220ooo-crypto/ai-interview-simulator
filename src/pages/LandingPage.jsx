import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        AI Interview Simulator
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Practice real interview questions, get instant AI-powered feedback, and
        build the confidence you need to land your next job.
      </p>
      <Button onClick={() => navigate("/interview")}>Start Interview</Button>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2">🎯 Real Questions</h3>
          <p className="text-gray-500 text-sm">
            Practice with realistic interview questions tailored to your role.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2">🤖 AI Feedback</h3>
          <p className="text-gray-500 text-sm">
            Get instant, actionable feedback on your answers powered by AI.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2">📈 Track Progress</h3>
          <p className="text-gray-500 text-sm">
            See how you improve over time with performance tracking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
