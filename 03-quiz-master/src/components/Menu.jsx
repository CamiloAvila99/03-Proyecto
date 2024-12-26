const Menu = ({setSelectedTopic}) => {

    const viewVentana = e =>{
        e.preventDefault();

        setVentana(!ventana);
    }

  return (
    <nav className='menu'>
        <h2>¿Que Deseas Practicar Hoy? :</h2>
        
        <ul>
            <li>
                <a href="#" onClick={() => setSelectedTopic('HTML')}>HTML</a> 
            </li>
            <li> 
                <a href="#" onClick={() => setSelectedTopic('CSS')}>CSS</a> 
            </li>
            <li>
                <a href="#" onClick={() => setSelectedTopic('JS')}>JavaScript</a> 
            </li>
            <li>
                <a href="#" onClick={()=> setSelectedTopic('REACT')}>Framework React</a> 
            </li>
            <li> 
                <a href="#" onClick={()=> setSelectedTopic('GIT')}>Git - Hub</a> 
            </li>
        </ul>
    </nav>
  )
}

export default Menu
