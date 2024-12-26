export  const getQuestion = (key, setData) =>{ 
    let question = JSON.parse(localStorage.getItem(key)) || [];

    setData(question)

    return question;
}
