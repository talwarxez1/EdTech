import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaRobot } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function MiniChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const messagesEndRef = useRef(null);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);

    // Add the user's question to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, type: "user" },
    ]);

    setQuestion(""); // Clear the input field

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBmly_bu3y4Oa1wv0HeQRc96ry7pChTev0",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const answer = response.data.candidates[0].content.parts[0].text;

      // Add the bot's answer to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: answer, type: "bot" },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry - Something went wrong. Please try again!",
          type: "bot",
        },
      ]);
    }

    setGeneratingAnswer(false);
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end z-50">
      {isPopupVisible && (
        <div className="relative mb-2 animate-fadeIn">
          <div className="relative bg-white text-black p-3 rounded-lg shadow-lg border border-gray-600 speech-bubble">
            <div className="flex justify-between items-center">
              <span>Need any help?</span>
              <button onClick={closePopup} className="ml-1 text-lg">
                <IoMdClose />
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-lg border-2 border-gray-600 hover:bg-gray-200 transition-transform duration-300"
      >
        <FaRobot size={24} />
      </button>
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 transition-all duration-500 ease-out transform bg-white text-black shadow-lg rounded-xl w-[300px] h-[400px] flex flex-col overflow-hidden border border-gray-300 z-50"
        >
          <div className="flex justify-between items-center p-3 border-b border-gray-300">
            <h1 className="text-lg font-semibold">Ask Me Anything</h1>
            <button onClick={() => setIsOpen(false)} className="text-xl">
              <IoMdClose />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
            {messages.map((message, index) => (
              <div key={index} className="flex items-start space-x-2">
                <img
                  src={
                    message.type === "user"
                      ? "https://cdn-icons-png.freepik.com/512/6596/6596121.png"
                      : "https://static-00.iconduck.com/assets.00/user-avatar-robot-icon-2048x2048-ehqvhi4d.png"
                  }
                  alt={`${message.type} avatar`}
                  className="w-8 h-8 rounded-full"
                />
                <div
                  className={`p-3 rounded-xl ${
                    message.type === "user"
                      ? "bg-orange-500 text-white self-end"
                      : "bg-gray-500 text-white self-start"
                  }`}
                >
                  <ReactMarkdown className="text-base">{message.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
          <form
            onSubmit={generateAnswer}
            className="p-4 border-t border-gray-300 flex items-center space-x-2 bg-white"
          >
            <textarea
              required
              className="flex-1 border border-gray-300 rounded-lg p-2 resize-none bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button
              type="submit"
              className={`bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-100 transition ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={generatingAnswer}
            >
              {generatingAnswer ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default MiniChatbot;
