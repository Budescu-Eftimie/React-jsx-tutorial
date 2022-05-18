import "./App.css";

const displayEmojiName = (e) => alert(e.target.id);

const emojis = [
    { emoji: "😁", name: "grinning face" },
    { emoji: "🎉", name: "party popper" },
    { emoji: "🧨", name: "firecracker" },
];

function App() {
    const greeting = "greeting";
    const displayAction = true;
    return (
        <div className="container">
            <h1 id={greeting}>Hello, World</h1>
            {displayAction && <p>I am writting JSX</p>}
            <ul>
                {emojis.map((emoji) => (
                    <li key={emoji.name}>
                        <button onClick={displayEmojiName}>
                            <span
                                role="img"
                                aria-label={emoji.name}
                                id={emoji.name}
                            >
                                {emoji.emoji}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
