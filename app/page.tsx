import { TodoList } from "./components/todos/TodoList";

export default function Home() {
  return (
    <TodoList
      todos={[
        {
          content: "",
          done: false,
          dateTime: new Date(),
        },
        // {
        //   content: "밥먹기",
        //   done: false,
        //   dateTime: new Date(),
        // },
        // {
        //   content: "밥먹기",
        //   done: false,
        //   dateTime: new Date(new Date().setDate(10)),
        // },
      ]}
    />
  );
}
