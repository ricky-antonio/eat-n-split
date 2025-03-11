import { useState } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App() {
    const [addFriendOpen, setAddFriendOpen] = useState(false);
    const [friendList, setFriendList] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function toggleAddFriendOpen() {
        setAddFriendOpen((addFriendOpen) => !addFriendOpen);
    }

    function handleAddFriend(newFriend) {
        setFriendList((curFriends) => [...curFriends, newFriend]);
        setAddFriendOpen(false);
    }

    function handleSelectFriend(selectFriend) {
        if (selectFriend.id === selectedFriend?.id) {
            setSelectedFriend(null);
        } else {
            setSelectedFriend(selectFriend);
        }
        setAddFriendOpen(false);
    }

    function handleSplitBill(splitFriend, newBalance) {
        setFriendList((friends) =>
            [...friends].map((friend) =>
                friend.id === splitFriend.id
                    ? { ...friend, balance: newBalance }
                    : friend
            )
        );
        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friendList}
                    onSelectFriend={handleSelectFriend}
                    selectedFriend={selectedFriend}
                />
                {addFriendOpen && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <Button onClick={toggleAddFriendOpen}>
                    {addFriendOpen ? "close" : "Add friend"}
                </Button>
            </div>

            {selectedFriend && (
                <FormSplitBill
                    onSplitBill={handleSplitBill}
                    friend={selectedFriend}
                />
            )}
        </div>
    );
}

export default App;
