import React, { useState } from "react";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return <Captcha />;
}

const Captcha = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [question, setQuestion] = useState("");

  const images = [ONE, TWO, THREE, FOUR, FIVE, SIX];

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const setQuestionBasedOnAnswer = (correct) => {
    switch (correct) {
      case 1:
        setQuestion("How many Allah's out there?");
        break;
      case 2:
        setQuestion(
          "How many times Dogan Duymaz lost bet against Oktay for Baklava?"
        );
        break;
      case 3:
        setQuestion("How many kills Dogan Duymaz got in Laser Tag?");
        break;
      case 4:
        setQuestion("How many times Canberk attended class during the course?");
        break;
      case 5:
        setQuestion("What was the Emre Aydin's favorite rank in Kahoot Games?");
        break;
      case 6:
        setQuestion("What did Yunus name himself most of the Kahoot games?");
        break;
      default:
        setQuestion("");
    }
  };

  const handleButtonClick = () => {
    const correct = generateRandomNumber();
    setSelectedImage(images[correct - 1]);
    setCorrectAnswer(correct);
    setQuestionBasedOnAnswer(correct);
    setIsOpen(true);
  };

  const handleImageClick = (selected) => {
    if (selected === correctAnswer) {
      setIsOpen(false);
      setSelectedImage(null);
      setCorrectAnswer(null);
      setQuestion("");
    } else {
      alert("Wrong selection. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Show Captcha
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Question:</h2>
            <p className="mb-4">{question}</p>
            <div className="flex flex-wrap justify-center">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Captcha ${index + 1}`}
                  onClick={() => handleImageClick(index + 1)}
                  className="w-48 h-48 m-4 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
