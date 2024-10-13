import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex justify-center" style={{ minHeight: '100vh' }}>
      <h1 className="bg-gradient-to-r from-orange-300 to-orange-700 inline-block text-transparent bg-clip-text text-4xl font-bold">Hola Mundo</h1>
    </div>
  );
}
