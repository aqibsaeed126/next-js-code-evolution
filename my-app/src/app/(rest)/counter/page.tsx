import { Counter } from "./counter";


export const metadata = {
    title: "COunter App",
    description: "My COunter Description",
  };

export default function CounterPage() {
    return <div>
        <Counter />
    </div>;
}