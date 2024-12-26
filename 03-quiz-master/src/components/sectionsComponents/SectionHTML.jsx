import React from 'react';
import { deleteDataQuestion } from '../../helpers/DeleteStorage';

const SectionHTML = ({ question, setQuestion, updateScore }) => {

  const deleteQuestion = (id) => {
    deleteDataQuestion('question', id, question, setQuestion);
  };

  const filteredQuestion = question.filter(c => c.categoria === 'HTML');

  const scoreHandle = (ask, selectionOption) => {
    // Verificar si las opciones están bien definidas y si se puede acceder correctamente a `option.text` y `option.esCorrecta`
    const isCorrect = ask.opciones.some(
      (option) => option.text === selectionOption && option.esCorrecta
    );

    // Asegúrate de que updateScore se llama correctamente
    updateScore('HTML', isCorrect);
  };

  return (
    <div className='section'>
      <h2 className='title-main'>Preguntas HTML</h2>

      {filteredQuestion.length > 0 ? (
        filteredQuestion.map((ask, id) => (
          <div className='form-question' key={id}>
            <h3 className='title-question'>{id + 1}) {ask.pregunta}</h3>

            <div className='answer-question'>
              {ask.opciones.map((opcion, index) => (
                <label
                  key={index}
                  htmlFor={`opcion-${index}-${ask.id}`}
                  className="label-answer"
                >
                  {`${String.fromCharCode(97 + index)}) ${opcion.text}`}
                  <input
                    type="radio"
                    id={`opcion-${index}-${ask.id}`}
                    name={`opcion-${ask.id}`}
                    onClick={() => scoreHandle(ask, opcion.text)}
                  />
                </label>
              ))}
            </div>
            <button onClick={() => deleteQuestion(ask.id)}>Eliminar pregunta</button>
          </div>
        ))
      ) : (
        <p>No hay preguntas disponibles en HTML.</p>
      )}
    </div>
  );
};

export default SectionHTML;

