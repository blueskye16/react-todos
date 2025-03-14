import ButtonCreateTodo from './ButtonCreateTodo'
import ButtonSidebar from './ButtonSidebar'
import CategoryPanel from './CategoryPanel'
import TodosForm from './TodosForm'
import TodosHeader from './TodosHeader'
import TodosSection from './TodosSection'

export default function TodosCard({ todos }) {
    return (
        <main className="p-2">
            <ButtonSidebar />
            <CategoryPanel />
            <section className="p-4 sm:mr-10 sm:ml-72">
                <TodosHeader />
                <TodosSection todos={todos}/>
                <div className="flex flex-col">
                    <ButtonCreateTodo />
                    <TodosForm />
                </div>
            </section>
        </main>
    )
}
