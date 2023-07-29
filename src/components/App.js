import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(questions => setQuestions(questions));
  },[])

  function handleSubmitQuestion(postedQuestion) {
    setQuestions([...questions,postedQuestion]);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
