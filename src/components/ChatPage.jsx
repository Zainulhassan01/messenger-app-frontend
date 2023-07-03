import React, { useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000/api';


const ChatPage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');


  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestioning = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/chat`, {
        question: question,
      });
      setAnswer(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Welcome to Chat Bot</h2>
      <form onSubmit={handleQuestioning}>
        <div>
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={handleQuestionChange}
          />
        </div>
        {answer && <>
            <p>{answer}</p>
        </>}
        <button type="submit">Sent</button>
      </form>
    </div>
  );
};

export default ChatPage;
