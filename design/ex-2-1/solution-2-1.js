// Inform the user about the font weights
document.addEventListener("DOMContentLoaded", function () {
    const infoDiv = document.createElement("div");
    infoDiv.style.border = "1px solid #ccc";
    infoDiv.style.padding = "10px";
    infoDiv.style.margin = "20px 0";
    infoDiv.style.backgroundColor = "#f9f9f9";

    infoDiv.innerHTML = `
        <h4>Font Weights Information:</h4>
        <ul>
            <li><strong>Headers (h1, h2):</strong> Bold (900)</li>
            <li><strong>Subheaders (h3):</strong> Medium (500)</li>
            <li><strong>Paragraphs (p):</strong> Regular (400)</li>
            <li><strong>Warnings:</strong> Light (300)</li>
        </ul>
    `;

    document.querySelector(".page-wrapper").prepend(infoDiv);
});

// This code snippet is useful for dynamically providing informational messages to users without modifying the HTML source directly. It's a common pattern in interactive web applications.