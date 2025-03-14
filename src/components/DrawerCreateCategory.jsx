export default function DrawerCreateCategory() {
    return (
        <>
            <div
                node-create-form=""
                className="fixed z-10 hidden h-screen w-screen bg-slate-700 opacity-80"
            />
            <form
                node-create-form=""
                id="formCreateCategory"
                className="fixed top-5 z-10 hidden w-screen"
            >
                <div className="mx-auto w-10/12 rounded-md bg-slate-300 p-2 sm:w-1/2">
                    <div className="flex justify-between">
                        <h1 className="text-lg font-semibold">
                            Create Category
                        </h1>
                        <button
                            type="button"
                            className="mr-2 cursor-pointer rounded-full bg-red-600 px-2 font-medium text-slate-200 hover:bg-red-800"
                            data-action="cancel"
                        >
                            X
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter category name"
                        className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mt-2 flex">
                        <input
                            type="text"
                            name="categoryIcon"
                            id="categoryIcon"
                            placeholder="Category icon"
                            className="w-[40%] rounded-md border-2 border-blue-500"
                        />
                        <button
                            type="submit"
                            className="ml-2 w-full cursor-pointer rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
