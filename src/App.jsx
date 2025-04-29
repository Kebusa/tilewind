import React from 'react'
// import "./index.css"
function App() {
  return (<> 
   <div className='ml-10'>
  <h1 className='text-2xl text-bold '>Компании-работадателя</h1>
    <p>Познакомьтесь нашими партнерами-работадателями и совместными программами подготовки</p>
  </div>
    <div className="grid grid-cols-3 gap-9 ml-15 mt-10">
      <span className="bg-stone-200">
        <nav className='flex'> 
        <img src="https://pngimg.com/d/plane_PNG101234.png" alt=""  width={"50px"} />
        <h3>Слетать.ру</h3>
        </nav>
        <p>Cервис для работы с текстом и не только. С 2011 года мы помогаем нашим пользователям создавать по-настоящему качественный контент, который привлекает внимание и хорошо продвигается в поисковых системах. </p>
         <button className="bg-green-500 ml-40 text-white p-3">Программа</button>
      </span>
      <span className="bg-stone-200">
        <nav className='flex'>
        <img src="https://ouch-prod-var-cdn.icons8.com/zt/illustrations/previews/G0BDpKqa70fuir4R.webp" alt="" width={"50px"} />
        <h3>Максимум</h3>
        </nav>
        <p>Cервис для работы с текстом и не только. С 2011 года мы помогаем нашим пользователям создавать по-настоящему качественный контент, который привлекает внимание и хорошо продвигается в поисковых системах. </p>
         <button className="bg-green-500 ml-40 text-white p-3">Программа</button>
      </span>
      <span className="bg-stone-200">
        <h3>Контур</h3>
        <p>Cервис для работы с текстом и не только. С 2011 года мы помогаем нашим пользователям создавать по-настоящему качественный контент, который привлекает внимание и хорошо продвигается в поисковых системах. </p>
         <button className="bg-green-500 ml-40 text-white p-3">Программа</button>
      </span>
      <span className="bg-stone-200">
        <nav className='flex'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="" width={"50px"} />
        <h3>Nauka</h3>
        </nav>
        <p>Cервис для работы с текстом и не только. С 2011 года мы помогаем нашим пользователям создавать по-настоящему качественный контент, который привлекает внимание и хорошо продвигается в поисковых системах. </p>
         <button className="bg-green-500 ml-40 text-white p-3">Программа</button>
      </span>
      <span className="bg-stone-200">
        <nav className='flex'>
        <img src="https://static-00.iconduck.com/assets.00/react-icon-2048x1793-eq4a5voh.png" alt="" width={"50px"} />
        <h3>Открые решение_</h3>
        </nav>
        <p>Cервис для работы с текстом и не только. С 2011 года мы помогаем нашим пользователям создавать по-настоящему качественный контент, который привлекает внимание и хорошо продвигается в поисковых системах. </p>
         <button className="bg-green-500 ml-40 text-white p-3">Программа</button>
      </span>
      <span className="bg-stone-200">
        <img style={{objectFit: "width-content"}} src="https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?semt=ais_hybrid&w=740" alt="" />
        <h2 className='absolute top-100 right-20 text-5xl text-white'>еще более 20шт.</h2>
      </span>
    </div>
  </>)
}

export default App