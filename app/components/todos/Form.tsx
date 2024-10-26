"use client";

import React, { useRef, useState } from "react";

type Props = { title: string };
export const Form = ({ title }: Props) => {
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {title}
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};
