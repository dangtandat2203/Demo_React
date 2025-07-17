const TodoData = (props) => {
    //props là một object {}
    // {
    //     name: "Dang Tan Dat",
    //     age: 21,
    //     data: {}
    // }
    const { name, age, data } = props
    console.log(">>> check props: ", props)
    return (
        <div className='todo-data'>
            <div>My name is {props.name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}
export default TodoData;