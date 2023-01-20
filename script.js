// Selecionar o formulário em uma variável
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

// Selecionar botão na variável
const button = document.querySelector('header button')

// Verificar se o botão foi clicado
button.addEventListener("click", add)
form.addEventListener("change", save)

// Função de adicionar dia
function add() {
  // Variável com a data atual a ser adicionada
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  // Verificar se o dia já existe
  const dayExists = nlwSetup.dayExists(today)
  
  // Teste condicional com base na existência do dia
  if (dayExists) {
    alert("🚨 Dia já adicionado! 🛑")

    // Finalizar a função
    return
  }

  // Adicionar o dia
  nlwSetup.addDay(today)
  alert("Dia adicionado com sucesso! ✅")
}

// Função para salvar dia
function save() {
  // Guardando dia no armazenamento local
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// Transformando data de volta em objeto e adicionando na variável
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

// Carregar data na página
nlwSetup.setData(data)
nlwSetup.load()