## Tasklist 

1 Display all tasks in TaskList by passing down the data from App to TaskList

    a. add the prop you want to pass down into TaskLIst element 

    b. Deconstruct tasks in TaskList and map
        ```const allTasks = tasks.map(task => (
            <Task
                key={task.text}
                task={task.text}
                category={task.category}
            />))```

    c. Pass new const in your div
        ```<div className="tasks">
            {allTasks}
            </div>```

    d. Use deconstructed props to pass through info to your divs
        ```<div className="label">{category}</div>
            <div className="text">{task}</div>```

2 Make tasks deletable

    a. Add state to Task and create state variables
        ```const [delTask, setDelTask] = useState(false)```
    
    b. Add an event listener to the button
        ```  <button className="delete" onClick={() => setDelTask(true)}>X</button>```

    c. Add if statement
        ```if (delTask) return (null)```
