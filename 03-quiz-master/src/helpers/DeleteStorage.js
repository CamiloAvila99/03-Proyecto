 export const deleteDataQuestion = (key, id, data, setData) => {
    let newArrayQuetion = data.filter(i => i.id !== id);

    setData(newArrayQuetion);

    localStorage.setItem(key, JSON.stringify(newArrayQuetion));
  }