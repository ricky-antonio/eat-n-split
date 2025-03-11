import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ friend, onSplitBill }) {
    const [bill, setBill] = useState(0);
    const [yourExpense, setYourExpense] = useState(0);
    const [paying, setPaying] = useState("user");

    const friendExpense = bill - yourExpense;
    let newBalance;

    function handleSubmit(e) {
        e.preventDefault();
        if(paying === "user") {
            newBalance = friend.balance + friendExpense;
        } else {
            newBalance = friend.balance - friendExpense;
        }

        onSplitBill(friend, newBalance);
    }

    return (
        <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
            <h2>Split a bill with {friend.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={bill} onChange={(e) => setBill(e.target.value)}/>

            <label>🧍 Your expense</label>
            <input type="text" value={yourExpense} onChange={(e) => setYourExpense(e.target.value)}/>

            <label>👫 {friend.name}'s expense</label>
            <input type="text" disabled value={friendExpense} />

            <label>💰 Who is paying the bill</label>
            <select value={paying} onChange={(e) => setPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}

export default FormSplitBill;
