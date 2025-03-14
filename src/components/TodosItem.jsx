import DeleteButton from './ButtonDeleteTodo'

export default function TodosItem({ title, icon }) {
    return (
        <div className="mt-3 flex w-full rounded-md bg-slate-200 p-2">
            <input
                type="checkbox"
                name=""
                id=""
                className="h-6.5 w-6.5 cursor-pointer rounded-md border-none"
            />
            <label for="" className="ml-2 flex-1">
                {title} <span>{icon}</span>
            </label>
            <div className="flex items-end">
                <DeleteButton />
            </div>
        </div>
    )
}
