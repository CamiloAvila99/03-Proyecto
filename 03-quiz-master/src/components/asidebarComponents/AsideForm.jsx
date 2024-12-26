import React, { useState } from 'react'
import { saveQuestion } from '../../helpers/SaveStorage'

const AsideForm = ({setQuestion}) => {

    const [categoryQuestion, setCategoryQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleChange = e =>{
        setCategoryQuestion(e.target.value);
    };

    const handleCorrectAnswerSelection = e =>{
        setCorrectAnswer(e.target.value);
    };

    const captureDataQuestion = e =>{
        e.preventDefault()

        const {question, optionA, optionB, optionC, optionD} = e.target;

        const questionData = {
            id: new Date().getTime(),
            pregunta: question.value,
            categoria: categoryQuestion,
            opciones: [
              {texto: optionA.value, esCorrecta: correctAnswer === 'A'},
              {texto: optionB.value, esCorrecta: correctAnswer === 'B'},
              {texto: optionC.value, esCorrecta: correctAnswer === 'C'},
              {texto: optionD.value, esCorrecta: correctAnswer === 'D'}
            ]
        };

        setQuestion(elemet => {
            return [...elemet, questionData];
        });

        saveQuestion("question", questionData);

        e.target.reset();
        setCorrectAnswer('');
      };

  return (
    <aside className='asidebar'>
        <div className='enter'>
            <h4>Ingresa la pregunta</h4>

            <form onSubmit={captureDataQuestion} className='select-option'>
                <input
                    className='question'
                    type="text" 
                    name='question'
                    placeholder='Introduce tu Pregunta...'
                    required
                />

                <label 
                    htmlFor="category" 
                    className='label-container'
                > 
                    Selecciona la Categoria de la pregunta
                    <select name="category" id="category" onChange={handleChange} required>
                        <option value="">Selecciona una Categoria</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JS">JavaScript</option>
                        <option value="REACT">React</option>
                        <option value="GIT">Git-Hub</option>
                    </select>
                </label>

                    <h5>Escribe las Respuestas de la Pregunta</h5>

                    <label htmlFor="optionA" className='answer-option'>
                        Opcion A:
                        <input 
                            type="text" 
                            name='optionA'
                            id='optionA'
                            placeholder='Opción A...'
                            required
                        />
                    </label>
                    

                    <label htmlFor="optionB" className='answer-option'>
                        Opcion B:
                        <input 
                            type="text" 
                            name='optionB'
                            id='optionB'
                            placeholder='Opción B...'
                            required
                        />
                    </label>
                    

                    <label htmlFor="optionC" className='answer-option'>
                        Opcion C:
                        <input 
                            type="text" 
                            name='optionC'
                            id='optionC'
                            placeholder='Opción C...'
                            required
                        />
                    </label>
                    
                    
                    <label htmlFor="optionD" className='answer-option'>
                        Opción D:
                        <input 
                            type="text" 
                            name='optionD'
                            id='optionD'
                            placeholder='Opción D...'
                            required
                        />
                    </label>

                    <label 
                        htmlFor="correctAnswer" 
                        className='label-container'
                    > 
                        Selecciona la respuesta a la pregunta
                        <select 
                            id="correctAnswer" 
                            name="correctAnswer" 
                            onChange={handleCorrectAnswerSelection} required
                        >
                            <option value="">--Selecciona una opción--</option>
                            <option value="A">Opción A</option>
                            <option value="B">Opción B</option>
                            <option value="C">Opción C</option>
                            <option value="D">Opción D</option>
                        </select>
                    </label>

                    <input type="submit" name="save" value="Guardar" />
                    
            </form>
        </div>
    </aside>
  )
}

export default AsideForm