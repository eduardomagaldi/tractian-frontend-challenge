import fetchData from './fetchData'

const resource = fetchData('https://fake-api.tractian.com/companies')

const Todos = () => {
  const todos = resource.read()

  const renderTodos = todos.map((todo: any) => {
    const className = todo.status === 'Completed' ? 'todo-completed' : 'todo'
    return (
      <div className={`todo ${className}`} key={todo.id}>
        {todo.name}
      </div>
    )
  })

  return <div>{renderTodos}</div>
}

export default Todos
