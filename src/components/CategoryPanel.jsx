export default function CategoryPanel() {
    return (
        <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-0 h-screen w-64 -translate-x-full p-2 transition-transform sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full overflow-y-auto rounded-md bg-gray-50 px-3 py-4 dark:bg-gray-800">
                <h1 className="text-3xl font-semibold">Notes App</h1>
                <ul className="space-y-2 pt-2 font-medium">
                    <li>
                        <a
                            href="#"
                            className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            <span className="">💡</span>
                            <span className="ms-3 flex-1 whitespace-nowrap">
                                Research
                            </span>
                            <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                3
                            </span>
                        </a>
                    </li>
                    <button
                        data-action="create"
                        id="btnCreateCategory"
                        className="group w-full cursor-pointer rounded-lg p-2 text-left text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                    >
                        + Create new category
                    </button>
                </ul>
            </div>
        </aside>
    )
}
