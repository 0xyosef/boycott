"use client";

import { useFilter } from "@/contexts/FilterContext";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

export default function Search() {
  const filter = useFilter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 300);

  useEffect(
    () => {
      filter(debouncedValue);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedValue],
  );

  return (
    <input
      onChange={(e) => {
        e.preventDefault();
        setValue(e.target.value);
      }}
      className="border dark:border-primary my-2 py-2 px-2 w-full dark:bg-background-light bg-white
                focus:outline-none focus:border-accent  sm:text-sm"
      placeholder="name ..."
      type="text"
      name="search"
    />
  );
}
