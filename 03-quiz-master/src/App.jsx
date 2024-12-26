import React, { useState, useEffect } from "react"
import Menu from "./components/Menu"
import SectionHTML from "./components/sectionsComponents/SectionHTML";
import SectionCss from "./components/sectionsComponents/SectionCss";
import SectionJS from "./components/sectionsComponents/SectionJS";
import SectionReact from "./components/sectionsComponents/SectionReact";
import SectionGitHub from "./components/sectionsComponents/SectionGitHub";
import AsideForm from "./components/asidebarComponents/AsideForm";
import { getQuestion } from "./helpers/GetStored";
import AsideScore from "./components/asidebarComponents/AsideScore";
import SectionDefault from "./components/sectionsComponents/SectionDefault";

function App() {

  const [selectedTopic, setSelectedTopic] = useState('');
  const [question, setQuestion] = useState([]);
  const [score, setScore] = useState({HTML: 0});
  const [highScore, setHighScore] = useState({HTML: 0})

  useEffect(() =>{
    console.log("Componentes donde se caraga las preguntas montado!!");

    const storedQuestions = getQuestion("question", setQuestion);

    if(storedQuestions.length > 0){
      setQuestion(storedQuestions);
    }
  }, []);

  const updateScore = (category, isCorrect) => {
    if (isCorrect) {
      setScore((prev) => {
        const newScore = {
          ...prev,
          [category]: prev[category] ? prev[category] + 1 : 1,
        };
        
        // Actualizar highScore solo después de actualizar score
        setHighScore((prevHighScore) => {
          const newHighScore = {
            ...prevHighScore,
            [category]: Math.max(prevHighScore[category] || 0, newScore[category]),
          };
          return newHighScore;
        });

        return newScore;
      });
    }
  };

  const showQuestionnaire = () =>{
    switch(selectedTopic){
      case 'HTML':
        return <SectionHTML 
          question = {question}  
          setQuestion = {setQuestion}
          updateScore = {updateScore}
              />;
      case 'CSS':
        return <SectionCss/>;
      case 'JS':
        return <SectionJS/>;
      case 'REACT':
        return <SectionReact/>
      case 'GIT':
        return <SectionGitHub/>
      
      default:
        return <SectionDefault/>
    }
  }

  return (
    <div className='general-container'>

      {/* 01 - ENCABEZADO*/}
      <header className="header">
        <h1>Quiz Master</h1>

        <img src="public/img/cortanagif.gif" alt="Logo-Cortana" />
      </header>
    
      {/* 02 - DESCRIPCION WEB*/}
      <div className="description">
        <p>
          Esta es una aplicación para repasar conceptos de las diferentes tecnologías utilizadas en el 
          desarrollo web, enfocándose en la parte del Front-End.
        </p>
      </div>

      {/* 03 - MENÚ DE NAVEGACIÓN*/}
      <Menu setSelectedTopic = {setSelectedTopic}/>

      {/* 04 - CONTENDIO PRINCIPAL*/}
      <div className="content-main">
        {/* 05 - CONTENEDORES HTML, CSS, JavaScript, React, GIT-HUB*/}
        {showQuestionnaire()}

        {/* 06 - BARRA LATERAL*/}
        <AsideScore score = {score} highScore={highScore} setHighScore = {setHighScore}/>
        <AsideForm
          setQuestion = { setQuestion }
        />
      </div>

      {/* 07 - PIE DE PÁGINA*/}
      <footer className="footer">
          <p>Una Página Desarrollada por Farid Ávila &copy;</p>
        </footer>
    </div>
  )
}
export default App
