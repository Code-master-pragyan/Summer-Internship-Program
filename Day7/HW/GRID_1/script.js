// Body styling
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = "#222";


// main grid container
const container = document.createElement("div");


// Apply styles to container
container.style.width = "700px";
container.style.height = "400px";

container.style.display = "grid";

container.style.gridTemplateColumns = "repeat(4, 1fr)";
container.style.gridTemplateRows = "repeat(3, 1fr)";

container.style.gap = "10px";

container.style.backgroundColor = "#1e2f50";
container.style.padding = "10px";


// Grid item data
const items = [
    {
        column: "1 / 2",
        row: "1 / 4",
        color: "greenyellow"
    },

    {
        column: "2 / 4",
        row: "1 / 2",
        color: "greenyellow"
    },

    {
        column: "4 / 5",
        row: "1 / 2",
        color: "orangered"
    },

    {
        column: "2 / 3",
        row: "2 / 3",
        color: "orange"
    },

    {
        column: "3 / 4",
        row: "2 / 3",
        color: "orangered"
    },

    {
        column: "2 / 3",
        row: "3 / 4",
        color: "orangered"
    },

    {
        column: "3 / 4",
        row: "3 / 4",
        color: "orange"
    },

    {
        column: "4 / 5",
        row: "2 / 4",
        color: "greenyellow"
    }
];


// Create every grid item using JavaScript
items.forEach((item) => {

    const div = document.createElement("div");

    // Apply all styles using JavaScript
    div.style.gridColumn = item.column;
    div.style.gridRow = item.row;
    div.style.backgroundColor = item.color;

    // Add div inside container
    container.appendChild(div);
});

// Add container to body
document.body.appendChild(container);