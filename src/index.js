import app from './app.js'
import connectToDB from './databases/database.js'

async function main() {
    await connectToDB()

app.listen(app.get('PORT'), () => {
    console.log('Server on port http://localhost:' + app.get('PORT') + '/api');
}
)
}


main();