var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var tarefas = [];

app.get('/', function(req, res) {
    res.render('index', { tarefas: tarefas });
});

app.get('/tarefa/nova', function(req, res) {
    res.render('form');
});

app.post('/tarefa', function(req, res) {
    var novaTarefa = req.body.tarefa;

    var tarefaExistente = tarefas.find(t => t.nome === novaTarefa.nome);

    if (tarefaExistente) {
        return res.redirect('/?erro=Tarefa com esse nome já existe.'); 
    }

    novaTarefa.status = req.body.tarefa.status ? true : false;

    tarefas.push(novaTarefa);
    res.redirect('/');
});

app.get('/tarefa/:id/editar', function(req, res) {
    var id = req.params.id;
    res.render('edit', { tarefa: tarefas[id], id: id });
});

app.post('/tarefa/:id/editar', function(req, res) {
    var id = req.params.id;
    var tarefaEditada = req.body.tarefa;

    var tarefaExistente = tarefas.find((t, index) => t.nome === tarefaEditada.nome && index !== parseInt(id));

    if (tarefaExistente) {
        return res.redirect('/tarefa/' + id + '/editar?erro=Tarefa com esse nome já existe.');
    }

    tarefas[id].nome = tarefaEditada.nome;
    tarefas[id].status = tarefaEditada.status ? true : false;
    res.redirect('/');
});

app.post('/tarefa/:id/excluir', function(req, res) {
    var id = req.params.id;
    tarefas.splice(id, 1);
    res.redirect('/');
});

app.get('/tarefas/true', function(req, res) {
    var tarefasTrue = tarefas.filter(t => t.status === true);
    res.render('tarefasTrue', { tarefas: tarefasTrue });
});

app.get('/tarefas/false', function(req, res) {
    var tarefasFalse = tarefas.filter(t => t.status === false);
    res.render('tarefasFalse', { tarefas: tarefasFalse });
});

app.listen(3001, function() {
    console.log("Servidor rodando na porta http://localhost:3001");
});
