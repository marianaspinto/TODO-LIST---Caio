let banco = [
    {'tarefa': '06:00 - Corrida na orla ', 'status': ''},
    {'tarefa': '07:00 - fazer o café matinal', 'status': ''},
    {'tarefa': '08:00 - Estudar programacao', 'status': ''}
]

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item')
    item.innerHTML = `
    <input type='checkbox' ${status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type='button' value='x' data-indice=${indice}>
    `

    document.getElementById('todoList').appendChild(item)
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList')
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}

const atualizarTela = () => {
    limparTarefas()
    banco.forEach((item,indice) =>  criarItem(item.tarefa, item.status, indice))
}

const adicionarItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value
    if(tecla === 'Enter'){
        banco.push({'tarefa': texto, 'status': ''})
        atualizarTela()
        evento.target.value = ''
    }
}

const removerItem = (indice) => {
    banco.splice(indice, 1)
    atualizarTela()
}

const clickItem = (evento) => {
    const elemento = evento.target
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice
        removerItem(indice)
    }
}

document.getElementById('newItem').addEventListener('keypress', adicionarItem)
document.getElementById('todoList').addEventListener('click', clickItem)

atualizarTela()