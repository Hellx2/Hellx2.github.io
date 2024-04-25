let list = document.getElementById("repos-list");

for (child of list.children) {
    let text = child.innerText;
    let parts = text.split(":", 3);
    // NOTE: Remove `target="_blank"` once testing done
    child.onclick = () => window.open(`https://github.com/Hellx2/${parts[0]}`, "_blank");
    child.innerHTML = `<a href="https://github.com/Hellx2/${parts[0]}" target="_blank">${parts[1]}</a><br>${parts[2]}`
}
