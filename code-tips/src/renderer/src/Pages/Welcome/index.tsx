import { Code } from "@icon-park/react";

export default function Welcome(): React.JSX.Element {
    return (
        <div className="h-screen flex flex-col  items-center justify-center text-sm ">
            <Code theme="outline" size="32" fill="#0a0707ab" strokeWidth={3} />
            <h1 className="text-xl font-bold mt-1 ">
                Welcome to Code Tips
            </h1>
        </div>
    )
}