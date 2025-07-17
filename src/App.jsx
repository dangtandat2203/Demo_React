import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg'
const App = () => {


  const name = "Dang Tan Dat aka DTD";
  const age = 21;
  const data = {
    address: "Tay Ninh",
    country: "Viet Nam"
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData
          name={name}
          age={age}
          data={data}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>

    </>
  )
}

export default App
