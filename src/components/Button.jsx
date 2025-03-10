function Button({ children, toggleAddFriendOpen}) {
    return <button className="button" onClick={toggleAddFriendOpen}>{children}</button>;
}

export default Button;
