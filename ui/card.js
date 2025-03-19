import Card from "./ui/card";  // ✅ Correct import inside `src/`

function Card({ title, description }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Card;
