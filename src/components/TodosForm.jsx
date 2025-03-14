export default function TodosForm() {
    return (
        <form
            id="taskForm"
            className="mx-auto mt-5 w-full max-w-96 -translate-y-5 transform rounded-lg bg-white p-6 opacity-0 shadow-md transition-all duration-300 ease-in-out"
        >
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                >
                    Judul
                </label>
                <input
                    type="text"
                    id="inputTitle"
                    name="title"
                    placeholder="Masukkan judul task"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                >
                    Kategori
                </label>
                <select
                    id="inputCategory"
                    name="category"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    <option value="" selected="">
                        No list
                    </option>
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="normal">Normal</option>
                </select>
            </div>
            <div className="mb-2 flex">
                <label
                    htmlFor="inputDo1"
                    className="flex w-1/2 cursor-pointer items-center rounded-md border-gray-300 bg-blue-200 p-2.5 focus:ring-blue-500"
                >
                    <input
                        type="radio"
                        name="inputDo"
                        id="inputDo1"
                        className="cursor-pointer"
                    />
                    <span className="w-full pl-2">Do</span>
                </label>
                <label
                    htmlFor="inputDo2"
                    className="ml-2 flex w-1/2 cursor-pointer items-center rounded-md border-gray-300 bg-yellow-200 p-2.5 focus:ring-blue-500"
                >
                    <input
                        type="radio"
                        name="inputDo"
                        id="inputDo2"
                        className="cursor-pointer"
                    />
                    <span className="w-full pl-2">Schedule</span>
                </label>
            </div>
            <button
                type="submit"
                id="submitButton"
                className="cursor-pointerk w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
                Simpan Task
            </button>
        </form>
    )
}
