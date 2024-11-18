// 1. Alert při kliknutí na tlačítko
document.getElementById("alertButton").onclick = () => alert("ja jsem alert");

// 2. Změna textu uvnitř tlačítka
document.getElementById("changeTextButton").onclick = function() {
    this.innerText = "změněno";
};

// 3. Změna textu na stránce
document.getElementById("changeDynamicTextButton").onclick = () => {
    document.getElementById("textChange").innerText = "změnil jsi text";
};

// 4. Napsání textu
document.getElementById("writeTextButton").onclick = () => {
    document.getElementById("outputText").innerText = "Něco.";
};

// 5. Pozdrav podle jména
document.getElementById("greetButton").onclick = () => {
    const name = document.getElementById("nameInput").value;
    alert(name ? `Ahoj, ${name}!` : "napiš jméno pak tě pozdravím");
};

// 8. Zobrazení aktuálního času
document.getElementById("showTimeButton").onclick = () => {
    document.getElementById("timeOutput").innerText = new Date().toLocaleTimeString();
};

// 9. Zobrazení aktuálního data
document.getElementById("showDateButton").onclick = () => {
    document.getElementById("dateOutput").innerText = new Date().toLocaleDateString();
};

// 10. Přičítání 3
function addThree() {
    const input = document.getElementById("input1").value;
    document.getElementById("result1").textContent = `Vysledek: ${parseFloat(input) + 3}`;
}

// 11. Sečtení čísel
function sumNumbers() {
    const num1 = parseFloat(document.getElementById("input2").value);
    const num2 = parseFloat(document.getElementById("input3").value);
    document.getElementById("result2").textContent = `Vysledek: ${num1 + num2}`;
}

// 12. Přidání úkolů
document.getElementById("addTaskButton").onclick = () => {
    const taskInput = document.getElementById("taskInput").value.trim();
    const tasks = document.getElementById("tasks");

    if (taskInput) {
        const task = document.createElement("p");
        task.textContent = taskInput;

        task.onclick = () => tasks.removeChild(task); 
        tasks.appendChild(task);
        document.getElementById("taskInput").value = ""; 
    }
};
