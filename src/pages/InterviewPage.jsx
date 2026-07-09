import { getAIFeedback } from "../services/geminiService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { interviewQuestions } from "../constants/questions";

function InterviewPage() {
  const testAI = async () => {
    console.log("Testing AI connection...");
    const result = await getAIFeedback(
      "Tell me about yourself",
      "I am a software engineer with 3 years of experience.",
    );
    console.log("AI Response:", result);
  };
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const currentQuestion = interviewQuestions[currentIndex];
  const isLastQuestion = currentIndex === interviewQuestions.length - 1;

  const handleNext = () => {
    const updatedAnswers = [
      ...answers,
      { questionId: currentQuestion.id, answer },
    ];
    setAnswers(updatedAnswers);
    setAnswer("");

    if (isLastQuestion) {
      console.log("All answers:", updatedAnswers);
      alert("Interview complete! (Results page coming soon)");
      navigate("/");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        {/* Progress indicator */}
        <p className="text-sm text-gray-500 mb-2">
          Question {currentIndex + 1} of {interviewQuestions.length}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{
              width: `${((currentIndex + 1) / interviewQuestions.length) * 100}%`,
            }}
          />
        </div>

        {/* TEST BUTTON — add it here */}
        <button
          onClick={testAI}
          className="text-sm text-gray-400 underline mb-4"
        >
          Test AI Connection
        </button>

        {/* Question */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>

        {/* Answer input */}
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          rows={6}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />

        {/* Next / Finish button */}
        <div className="flex justify-end">
          <Button onClick={handleNext} disabled={!answer.trim()}>
            {isLastQuestion ? "Finish Interview" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InterviewPage;
