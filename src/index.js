import app from './app.js'

app.listen(app.get('PORT'), () => {
    console.log('Server on port http://localhost:' + app.get('PORT') + '/api');
}
)