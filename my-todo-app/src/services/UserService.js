
export async function getAllUsers() {

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}
