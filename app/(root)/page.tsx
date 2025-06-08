import Image from "next/image";
import Hello from "./conponents/hello";

export default function Home() {
  console.log("Server or Client????");

  return (
    <>
      <h1 className="text-3xl">Helloooooo</h1>
      <Hello />
    </>
  );
}
