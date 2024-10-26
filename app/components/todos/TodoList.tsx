import React from "react";
import { Form } from "./Form";

type A = (string | number)[]; // 유니온 Union
type B = [Date, Date];

const a: A = ["a", "b", 2]; // array 배열
const date: B = [new Date(), new Date()]; // Tuple 튜플

// 제네릭 Generic
type Props = {
  todos: {
    content: string;
    done: boolean;
    dateTime: Date;
  }[];
};

export const TodoList = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((it, idx) => (
        <div key={"dateTime" in it ? it.dateTime.toDateString() : idx}>
          {JSON.stringify(it)}
        </div>
      ))}
      <Form title="투두리스트" />
    </div>
  );
};
