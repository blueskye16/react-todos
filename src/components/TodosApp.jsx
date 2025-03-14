import DrawerCreateCategory from "./DrawerCreateCategory";
import TodosCard from "./TodosCard";
import { TODOS } from "../utils/todos";

export default function TodosApp() {
    return (
        <>
          <DrawerCreateCategory />
          <TodosCard todos={TODOS} />
        </>
    )
}
