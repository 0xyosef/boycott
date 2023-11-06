"use client";
import Button from "@/components/Button";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import SpanTheme from "@/components/SpanTheme";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        classname="px-2 flex items-center p-1 dark:bg-background bg-white rounded-full"
      >
        {theme === "light" ? (
          <SpanTheme
            name={theme}
            icon={
              <MdOutlineLightMode
                className="dark:bg-accent-light  p-1 rounded-full text-black  "
                size={30}
              />
            }
          />
        ) : (
          <SpanTheme
            name={theme}
            icon={
              <MdOutlineLightMode
                className="dark:bg-accent-light  p-1 rounded-full text-black  "
                size={30}
              />
            }
          />
        )}
      </Button>
    </>
  );
}
