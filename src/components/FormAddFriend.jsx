import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
    const id = crypto.randomUUID();

    const newFriend = {
        id: id,
        name: name,
        image: `${image}?=${id}`,
        balance: 0
    }
 
    function handleSubmit(e) {
        e.preventDefault();
        if(name.length > 0 && image.length > 0) {
            onAddFriend(newFriend);
            setName("");
            setImage("https://i.pravatar.cc/48");
        };
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧍 Friend name</label>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
            <label>🖼️ IMAGE URL</label>
            <input type="text" value={image} onChange={(e) =>setImage(e.target.value)}/>
            <Button>Add</Button>
        </form>
    );
}

export default FormAddFriend;
