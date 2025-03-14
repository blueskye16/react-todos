export default function ButtonCreateTodo() {
    return (
        <button
            id="showFormButton"
            className="mx-auto mt-6 flex min-w-full cursor-pointer justify-between rounded-lg bg-zinc-900 p-3 text-white hover:bg-zinc-700 sm:min-w-96"
        >
            + Create new task
            <span className="rounded-full border-2 border-white px-1">N</span>
        </button>
    )
}
