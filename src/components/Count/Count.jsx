import { useState } from "react";

const Count = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        if (counter < 1) {
            return
        } else {
            setCounter(counter - 1)
        }
    }


    const [displayText, setDisplayText] = useState("");

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const display = form.display.value;
        setDisplayText(display)
        form.reset()
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-5">
            <h1 className="py-12 text-xl px-5">Display: {counter}</h1>
            <button onClick={handleIncrement} className="p-2 bg-slate-400">Increment</button>
            <button onClick={handleDecrement} className="p-2 bg-slate-400">Decrement</button>

            <h1 className="py-5">Display: {!displayText ? "Empty" : displayText}</h1>
            <form className="flex flex-col w-1/2" onSubmit={handleForm}>
                <input type="text" name="username" className="ring mb-3" placeholder="user name" />
                <input type="email" name="email" className="ring mb-3" placeholder="email" />
                <input type="number" name="phone" className="ring mb-3" placeholder="phone number" />
                <button className="bg-amber-400 text-black text-sm p-2">Submit</button>
            </form>

            <div className={`${isOpen ? "bg-yellow-500" : "bg-black"} h-[100px] w-[100px]`}></div>
            <button className="p-2 bg-slate-300" onClick={() => setIsOpen(true)}>On</button>
            <button className="p-2 bg-slate-300" onClick={() => setIsOpen(false)}>Off</button>
        </div>
    );
};

export default Count;