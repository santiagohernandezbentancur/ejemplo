const OA = {
  "storagePrefix": "oaJavaListasV1",
  "challenges": [
    {
      "title": "Desafío 1 · Recorrer una lista",
      "level": "nivel 1/6",
      "kicker": "size() + get()",
      "objective": "Recorrer un ArrayList mediante índice.",
      "prompt": "Completá el método para mostrar todos los nombres de la lista utilizando size() y get().",
      "lines": [
        "public static void mostrar(ArrayList<String> nombres) {",
        "    for (int i = {{0}}; i < nombres.{{1}}; i++) {",
        "        System.out.println(nombres.{{2}});",
        "    }",
        "}"
      ],
      "answers": [
        [
          "^0$"
        ],
        [
          "^size\\s*\\(\\s*\\)$"
        ],
        [
          "^get\\s*\\(\\s*i\\s*\\)$"
        ]
      ],
      "hint": "En ArrayList la cantidad actual se obtiene con size() y un elemento por índice con get(i).",
      "console": "Ana\nBruno\nCarla",
      "explanation": "Correcto: size() reemplaza a length y get(i) permite acceder al elemento de una posición."
    },
    {
      "title": "Desafío 2 · Sumar una lista de enteros",
      "level": "nivel 2/6",
      "kicker": "Integer + acumulador",
      "objective": "Procesar una ArrayList<Integer> y devolver una suma.",
      "prompt": "Completá el método que suma todos los valores almacenados en una ArrayList<Integer>.",
      "lines": [
        "public static int sumar(ArrayList<Integer> numeros) {",
        "    int total = {{0}};",
        "    for (int i = 0; i < numeros.size(); i++) {",
        "        total += numeros.{{1}};",
        "    }",
        "    return {{2}};",
        "}"
      ],
      "answers": [
        [
          "^0$"
        ],
        [
          "^get\\s*\\(\\s*i\\s*\\)$"
        ],
        [
          "^total$"
        ]
      ],
      "hint": "El acceso por índice se hace con get(i). El acumulador funciona igual que con vectores.",
      "console": "Lista: [4, 8, 2, 9]\nSuma: 23",
      "explanation": "Bien: el patrón de acumulación se mantiene, pero ArrayList usa size() y get()."
    },
    {
      "title": "Desafío 3 · Buscar un elemento",
      "level": "nivel 3/6",
      "kicker": "contains()",
      "objective": "Usar una operación propia de ArrayList para consultar existencia.",
      "prompt": "El método debe devolver si un nombre está o no registrado. Aprovechá contains() en lugar de programar el recorrido manual.",
      "lines": [
        "public static boolean existe(ArrayList<String> nombres, String buscado) {",
        "    return nombres.{{0}};",
        "}"
      ],
      "answers": [
        [
          "^contains\\s*\\(\\s*buscado\\s*\\)$"
        ]
      ],
      "hint": "ArrayList ya incluye un método que responde si contiene un objeto.",
      "console": "Lista: [Ana, Bruno, Carla]\nBuscar: Bruno\nExiste: true",
      "explanation": "Excelente: contains() expresa directamente la intención de búsqueda y simplifica el método."
    },
    {
      "title": "Desafío 4 · Agregar sin duplicar",
      "level": "nivel 4/6",
      "kicker": "contains() + add()",
      "objective": "Modificar una lista solo cuando se cumple una condición.",
      "prompt": "Completá el método: si el nombre no está en la lista, agregalo y devolvé true; si ya existe, devolvé false.",
      "lines": [
        "public static boolean agregarSiNoExiste(ArrayList<String> nombres, String nuevo) {",
        "    if (!nombres.{{0}}) {",
        "        nombres.{{1}};",
        "        return {{2}};",
        "    }",
        "    return {{3}};",
        "}"
      ],
      "answers": [
        [
          "^contains\\s*\\(\\s*nuevo\\s*\\)$"
        ],
        [
          "^add\\s*\\(\\s*nuevo\\s*\\)$"
        ],
        [
          "^true$"
        ],
        [
          "^false$"
        ]
      ],
      "hint": "Primero preguntá si NO contiene nuevo. Solo entonces usá add(nuevo).",
      "console": "Antes: [Ana, Bruno]\nAgregar Carla: true\nDespués: [Ana, Bruno, Carla]",
      "explanation": "Correcto: el método modifica la lista recibida y además informa con un boolean si realmente agregó el dato."
    },
    {
      "title": "Desafío 5 · Filtrar y devolver otra lista",
      "level": "nivel 5/6",
      "kicker": "crear + recorrer + add()",
      "objective": "Construir una nueva ArrayList con los elementos que cumplen una condición.",
      "prompt": "Completá el método que recibe números y devuelve una nueva lista con los valores estrictamente mayores que limite.",
      "lines": [
        "public static ArrayList<Integer> mayoresQue(ArrayList<Integer> numeros, int limite) {",
        "    ArrayList<Integer> resultado = new {{0}};",
        "    for (int i = 0; i < numeros.size(); i++) {",
        "        if (numeros.get(i) > limite) {",
        "            resultado.{{1}};",
        "        }",
        "    }",
        "    return {{2}};",
        "}"
      ],
      "answers": [
        [
          "^ArrayList\\s*<\\s*Integer\\s*>\\s*\\(\\s*\\)$"
        ],
        [
          "^add\\s*\\(\\s*numeros\\.get\\s*\\(\\s*i\\s*\\)\\s*\\)$"
        ],
        [
          "^resultado$"
        ]
      ],
      "hint": "Instanciá new ArrayList<Integer>() y agregá al resultado solo el elemento actual que supera el límite.",
      "console": "Original: [4, 12, 7, 18, 3]\nLímite: 10\nResultado: [12, 18]",
      "explanation": "Muy bien: ahora un método recibe una colección y devuelve otra construida a partir de un criterio."
    },
    {
      "title": "Desafío 6 · Eliminar según una condición",
      "level": "nivel 6/6",
      "kicker": "removeIf() + lambda",
      "objective": "Aplicar una operación funcional de ArrayList con un predicado.",
      "prompt": "Completá el método que elimina de la lista todos los números negativos utilizando removeIf().",
      "lines": [
        "public static void eliminarNegativos(ArrayList<Integer> numeros) {",
        "    numeros.{{0}}(n -> {{1}});",
        "}"
      ],
      "answers": [
        [
          "^removeIf$"
        ],
        [
          "^n\\s*<\\s*0$"
        ]
      ],
      "hint": "removeIf recibe una condición. Cada elemento se representa con n y debe eliminarse cuando n < 0.",
      "console": "Antes: [4, -2, 7, -8, 3]\nDespués: [4, 7, 3]",
      "explanation": "Completaste el recorrido: removeIf() expresa una eliminación condicional sin escribir manualmente el bucle."
    }
  ],
  "finalAssignments": [
    {
      "title": "A · Eliminar nombres repetidos",
      "text": "Programá un método que reciba una ArrayList<String> y devuelva una nueva lista sin nombres repetidos, conservando la primera aparición de cada uno.",
      "requirements": [
        "Firma sugerida: public static ArrayList<String> sinRepetidos(ArrayList<String> nombres)",
        "No modifiques la lista original.",
        "Podés usar contains() sobre la lista resultado.",
        "Probá con varios nombres duplicados."
      ]
    },
    {
      "title": "B · Promedio de una lista",
      "text": "Programá un método que reciba una ArrayList<Integer> y devuelva el promedio de sus valores como double.",
      "requirements": [
        "Firma sugerida: public static double promedio(ArrayList<Integer> numeros)",
        "Reutilizá un método sumar() si lo considerás adecuado.",
        "Probá con al menos dos listas.",
        "Controlá que la lista no esté vacía antes de dividir."
      ]
    },
    {
      "title": "C · Buscar la palabra más larga",
      "text": "Programá un método que reciba una lista de palabras y devuelva la palabra con mayor cantidad de caracteres.",
      "requirements": [
        "Firma sugerida: public static String masLarga(ArrayList<String> palabras)",
        "Usá length() para comparar Strings.",
        "En caso de empate, conservá la primera.",
        "Probá con al menos 5 palabras."
      ]
    },
    {
      "title": "D · Crear una lista de números pares",
      "text": "Programá un método que reciba una lista de enteros y devuelva otra lista conteniendo únicamente los valores pares.",
      "requirements": [
        "Firma sugerida: public static ArrayList<Integer> pares(ArrayList<Integer> numeros)",
        "No modifiques la lista original.",
        "Usá % para decidir si el valor es par.",
        "Mostrá ambas listas."
      ]
    },
    {
      "title": "E · Eliminar palabras cortas",
      "text": "Programá un método que elimine de una ArrayList<String> todas las palabras cuya longitud sea menor que un mínimo recibido por parámetro.",
      "requirements": [
        "Firma sugerida: public static void eliminarCortas(ArrayList<String> palabras, int minimo)",
        "Usá removeIf() con una lambda.",
        "Probá con al menos dos valores de mínimo.",
        "Mostrá la lista antes y después."
      ]
    },
    {
      "title": "F · Ordenar y transformar nombres",
      "text": "Programá un método que reciba una lista de nombres, convierta todos a mayúsculas y luego los ordene alfabéticamente.",
      "requirements": [
        "Firma sugerida: public static void normalizar(ArrayList<String> nombres)",
        "Podés usar replaceAll() y sort().",
        "Mostrá la lista original y el resultado.",
        "Explicá en un comentario qué modifica cada operación."
      ]
    }
  ]
};

let current = 0;
let student = "";
let completed = new Set();
let savedAnswers = {};

const $ = (id) => document.getElementById(id);
const welcomeScreen = $("welcomeScreen");
const learningScreen = $("learningScreen");
const finalScreen = $("finalScreen");
const nameForm = $("nameForm");
const studentName = $("studentName");
const studentLabel = $("studentLabel");
const finalStudent = $("finalStudent");
const challengeKicker = $("challengeKicker");
const challengeTitle = $("challengeTitle");
const challengeLevel = $("challengeLevel");
const challengePrompt = $("challengePrompt");
const objectiveText = $("objectiveText");
const codeArea = $("codeArea");
const hintBtn = $("hintBtn");
const checkBtn = $("checkBtn");
const hintBox = $("hintBox");
const feedbackBox = $("feedbackBox");
const consoleBox = $("consoleBox");
const consoleOutput = $("consoleOutput");
const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");
const progressText = $("progressText");
const progressBar = $("progressBar");
const restartBtn = $("restartBtn");
const assignmentTitle = $("assignmentTitle");
const assignmentText = $("assignmentText");
const assignmentRequirements = $("assignmentRequirements");
const copyAssignmentBtn = $("copyAssignmentBtn");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = studentName.value.trim();
  if (!value) return;
  student = value;
  localStorage.setItem(`${OA.storagePrefix}:lastStudent`, student);
  loadStudentProgress();
  studentLabel.textContent = student;
  welcomeScreen.classList.add("hidden");
  finalScreen.classList.add("hidden");
  learningScreen.classList.remove("hidden");
  renderChallenge();
});

hintBtn.addEventListener("click", () => {
  hintBox.textContent = OA.challenges[current].hint;
  hintBox.classList.remove("hidden");
});
checkBtn.addEventListener("click", checkAnswers);
prevBtn.addEventListener("click", () => {
  saveCurrentDraft();
  if (current > 0) { current--; saveProgress(); renderChallenge(); }
});
nextBtn.addEventListener("click", () => {
  if (!completed.has(current)) return;
  saveCurrentDraft();
  if (current < OA.challenges.length - 1) {
    current++;
    saveProgress();
    renderChallenge();
  } else {
    saveProgress();
    showFinal();
  }
});

restartBtn.addEventListener("click", () => {
  const ok = window.confirm("¿Querés reiniciar este recorrido? Se borrará el progreso guardado para este nombre en este Objeto de Aprendizaje.");
  if (!ok) return;
  const oldStudent = student;
  localStorage.removeItem(progressKey(oldStudent));
  localStorage.removeItem(assignmentKey(oldStudent));
  completed = new Set(); savedAnswers = {}; current = 0; student = "";
  studentName.value = oldStudent;
  learningScreen.classList.add("hidden");
  finalScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

copyAssignmentBtn.addEventListener("click", async () => {
  const text = `${assignmentTitle.textContent}\n\n${assignmentText.textContent}\n\n${assignmentRequirements.innerText}\n\nEntrega: archivo .java por CREA.`;
  try {
    await navigator.clipboard.writeText(text);
    copyAssignmentBtn.textContent = "copiado ✓";
    setTimeout(() => (copyAssignmentBtn.textContent = "copiar_consigna()"), 1600);
  } catch {
    window.prompt("Copiá la consigna:", text);
  }
});

function renderChallenge() {
  const data = OA.challenges[current];
  challengeKicker.textContent = data.kicker;
  challengeTitle.textContent = data.title;
  challengeLevel.textContent = data.level;
  challengePrompt.textContent = data.prompt;
  objectiveText.textContent = data.objective;
  hintBox.classList.add("hidden");
  feedbackBox.className = "feedback hidden";
  consoleBox.classList.add("hidden");
  codeArea.innerHTML = "";

  data.lines.forEach((line) => {
    const div = document.createElement("div");
    div.className = "code-line";
    div.append(...parseLine(line));
    codeArea.appendChild(div);
  });

  const draft = savedAnswers[String(current)] || [];
  const inputs = [...codeArea.querySelectorAll(".code-blank")];
  inputs.forEach((input, i) => {
    if (draft[i] !== undefined) input.value = draft[i];
    if (completed.has(current) && draft[i] !== undefined) input.classList.add("correct");
  });
  if (completed.has(current)) {
    feedbackBox.className = "feedback ok";
    feedbackBox.textContent = data.explanation;
    consoleOutput.textContent = data.console;
    consoleBox.classList.remove("hidden");
  }

  prevBtn.disabled = current === 0;
  nextBtn.disabled = !completed.has(current);
  nextBtn.textContent = current === OA.challenges.length - 1 ? "finalizar_recorrido() →" : "siguiente →";
  updateProgress();
}

function parseLine(line) {
  const nodes = [];
  const regex = /\{\{(\d+)\}\}/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(line)) !== null) {
    nodes.push(document.createTextNode(line.slice(lastIndex, match.index)));
    const input = document.createElement("input");
    input.type = "text";
    input.className = "code-blank";
    input.dataset.answerIndex = match[1];
    input.setAttribute("aria-label", `Espacio ${Number(match[1]) + 1} del desafío ${current + 1}`);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") checkAnswers(); });
    input.addEventListener("input", saveCurrentDraft);
    nodes.push(input);
    lastIndex = regex.lastIndex;
  }
  nodes.push(document.createTextNode(line.slice(lastIndex)));
  return nodes;
}

function checkAnswers() {
  const data = OA.challenges[current];
  const inputs = [...codeArea.querySelectorAll(".code-blank")];
  let allOk = true;
  inputs.forEach((input) => {
    const idx = Number(input.dataset.answerIndex);
    const value = normalize(input.value);
    const rules = data.answers[idx] || [];
    const valid = rules.some((source) => new RegExp(source).test(value));
    input.classList.toggle("correct", valid);
    input.classList.toggle("incorrect", !valid);
    if (!valid) allOk = false;
  });
  saveCurrentDraft();
  feedbackBox.classList.remove("hidden", "ok", "error");
  if (allOk) {
    completed.add(current);
    feedbackBox.classList.add("ok");
    feedbackBox.textContent = data.explanation;
    consoleOutput.textContent = data.console;
    consoleBox.classList.remove("hidden");
    nextBtn.disabled = false;
    saveProgress();
    updateProgress();
  } else {
    feedbackBox.classList.add("error");
    feedbackBox.textContent = data.error || "Todavía hay uno o más espacios para revisar. Mirá los tipos, los índices y el valor que debería devolver el método.";
  }
}

function normalize(value) {
  return value.trim().replace(/;$/, "").replace(/\s+/g, " ");
}
function updateProgress() {
  const count = completed.size;
  progressText.textContent = `${count} de ${OA.challenges.length} desafíos`;
  progressBar.style.width = `${(count / OA.challenges.length) * 100}%`;
}
function saveCurrentDraft() {
  if (!student || !codeArea) return;
  const inputs = [...codeArea.querySelectorAll(".code-blank")];
  if (!inputs.length) return;
  savedAnswers[String(current)] = inputs.map((input) => input.value);
  saveProgress();
}
function saveProgress() {
  if (!student) return;
  const state = { current, completed: [...completed], answers: savedAnswers };
  localStorage.setItem(progressKey(student), JSON.stringify(state));
}
function loadStudentProgress() {
  completed = new Set(); savedAnswers = {}; current = 0;
  const raw = localStorage.getItem(progressKey(student));
  if (!raw) return;
  try {
    const state = JSON.parse(raw);
    if (Array.isArray(state.completed)) completed = new Set(state.completed.filter(i => Number.isInteger(i) && i >= 0 && i < OA.challenges.length));
    if (state.answers && typeof state.answers === "object") savedAnswers = state.answers;
    if (Number.isInteger(state.current)) current = Math.min(Math.max(state.current, 0), OA.challenges.length - 1);
  } catch { /* si el estado está corrupto, se inicia desde cero */ }
}
function showFinal() {
  learningScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");
  finalStudent.textContent = student;
  progressText.textContent = `${OA.challenges.length} de ${OA.challenges.length} desafíos`;
  progressBar.style.width = "100%";
  const assignment = getOrCreateAssignment(student);
  assignmentTitle.textContent = assignment.title;
  assignmentText.textContent = assignment.text;
  assignmentRequirements.innerHTML = `<ul>${assignment.requirements.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function getOrCreateAssignment(name) {
  const key = assignmentKey(name);
  const stored = localStorage.getItem(key);
  let index;
  if (stored !== null && Number.isInteger(Number(stored)) && OA.finalAssignments[Number(stored)]) {
    index = Number(stored);
  } else {
    index = Math.floor(Math.random() * OA.finalAssignments.length);
    localStorage.setItem(key, String(index));
  }
  return OA.finalAssignments[index];
}
function slugName(name) { return name.trim().toLowerCase().replace(/\s+/g, "_"); }
function progressKey(name) { return `${OA.storagePrefix}:progress:${slugName(name)}`; }
function assignmentKey(name) { return `${OA.storagePrefix}:assignment:${slugName(name)}`; }
function escapeHtml(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

const lastStudent = localStorage.getItem(`${OA.storagePrefix}:lastStudent`);
if (lastStudent) studentName.value = lastStudent;
updateProgress();
