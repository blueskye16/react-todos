import TodosItem from './TodosItem'

export default function TodosSection({ todos }) {
    const doRows = []
    const scheduleRows = []
    const deletedRows = []

    todos.forEach((todo) => {
        if (todo.section === 'do') {
            doRows.push(<TodosItem {...todo} key={todo.id} />)
        } else if (todo.section === 'schedule') {
            scheduleRows.push(<TodosItem {...todo} key={todo.id} />)
        } else if (todo.section === 'deleted') {
            deletedRows.push(<TodosItem {...todo} key={todo.id} />)
        }
    })

    return (
        <div className="mt-5 text-lg">
            <div className="pt-4">
                <h2 className="ml-4 inline rounded-md bg-green-300 px-2 py-1">
                    Do
                </h2>
                {doRows}
            </div>
            <div className="pt-4">
                <h2 className="ml-4 inline rounded-md bg-yellow-200 px-2 py-1">
                    Schedule
                </h2>
                {scheduleRows}
            </div>
            <div className="pt-4">
                <h2 className="ml-4 inline rounded-md bg-orange-200 px-2 py-1">
                    Deleted
                </h2>
                {deletedRows}
            </div>
        </div>
    )
    /* <TodosItem title={title} icon={icon} />
            <TodosItem title={title} icon={icon} /> */
}
