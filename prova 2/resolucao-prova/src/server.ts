import app from '../app'

try {
    app.listen(3001, 'localhost', () => {
        console.log('Server running at http://localhost:3001');
    })
} catch (error) {
    console.log(error);   
}