const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username, password, role } = req.body;
    // Aquí iría la lógica para verificar el username y password

    if (role === 'rector') {
        res.redirect('/pagina_rector');
    } else {
        // Redirigir a la página correspondiente según el rol
        res.redirect(`/pagina_${role}`);
    }
});

app.get('/pagina_rector', (req, res) => {
    res.send('Bienvenido, Rector!');
});

// Define las otras rutas para los otros roles
app.get('/pagina_admin', (req, res) => {
    res.send('Bienvenido, Administrador!');
});
app.get('/pagina_docente', (req, res) => {
    res.send('Bienvenido, Docente!');
});
app.get('/pagina_estudiante', (req, res) => {
    res.send('Bienvenido, Estudiante!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
