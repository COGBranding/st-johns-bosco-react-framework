const outerPieces = document.querySelectorAll(".pie-chart--outer svg g g path");

outerPieces.forEach((piece, index) => {
    piece.setAttribute("id", `curve-${index + 1}`);
});

const outerPiecesText = document.querySelectorAll(
    ".pie-chart--outer svg g g:last-child g"
);

outerPiecesText.forEach((layer, index) => {
    // Get the parent path from Nivo's generated arc
    const parentPath = document.querySelector(`#curve-${index + 1}`);

    // Get the d value from the parent path
    let d = parentPath.getAttribute("d");

    // Create a new path
    const newPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );

    // Set the new path d attribute to the parentPath d attribute
    newPath.setAttribute("d", d);

    // Append the new path inside the existing group
    const text = layer.querySelector("text");

    // Store the innerHTML of the original text element in a variable
    const originalInnerHTML = text.innerHTML;

    // Set the innerHTML of the original text element to empty
    text.innerHTML = "";

    // Append the original text element to the new path
    newPath.appendChild(text);

    const svgTextPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "textPath"
    );

    // Set xlink:href attribute to "#curve-index+1" for the svgTextPath
    svgTextPath.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `#curve-${index + 1}`
    );

    // Create a new text element inside the new path
    const newText = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );
    svgTextPath.appendChild(newText);

    // Set the innerHTML of the new text element to the stored innerHTML
    newText.innerHTML = originalInnerHTML;

    text.appendChild(svgTextPath);
    console.log(svgTextPath);
});
