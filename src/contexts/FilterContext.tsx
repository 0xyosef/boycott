"use client";
import React, {
  MutableRefObject,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

type FilterContextType<K extends string, V> = {
  data: MutableRefObject<Record<K, V>[]>;
  filteredData: Record<K, V>[];
  setFilteredData: React.Dispatch<React.SetStateAction<Record<K, V>[]>>;
};

const FilterContext = createContext<FilterContextType<any, any>>(null!);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const data = useRef(null! as any);
  const [filteredData, setFilteredData] = useState(data.current);
  return (
    <FilterContext.Provider
      value={{
        data,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

// Get all the values in an object
const getValues = (obj: Object): string[] =>
  obj && typeof obj === "object"
    ? Object.values(obj).map(getValues).flat()
    : typeof obj === "string"
    ? [
        ...(obj as string)
          .split(" ")
          .filter((v) => !!v)
          .map((v) => v.toLowerCase()),
      ]
    : [obj];

// TODO: make it memory efficient
// use the ref instead of creating a new state
export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  const { data, setFilteredData } = context;

  return useCallback(
    (searchValue: string) => {
      searchValue
        ? setFilteredData(
            data.current.filter(
              (item) =>
                // TODO: make it better
                getValues(item).filter((v) =>
                  v.includes(searchValue.toLowerCase()),
                ).length > 0,
            ),
          )
        : setFilteredData(data.current);
    },
    [setFilteredData, data],
  );
}

export function useFilteredData<K extends string, V>(
  currentData: Record<K, V>[],
) {
  const context = useContext<FilterContextType<K, V>>(FilterContext);
  if (!context) {
    throw new Error("useFilteredData must be used within a FilterProvider");
  }

  const { data, filteredData } = context;
  data.current = currentData;
  return !filteredData ? data.current : filteredData;
}
