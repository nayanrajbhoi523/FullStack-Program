async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users data");
        }

        const users = await response.json();

        console.log("Users Information");

        users.forEach(user => {
            console.log("----------------------------");
            console.log("ID :", user.id);
            console.log("Name :", user.name);
            console.log("Email :", user.email);
            console.log("City :", user.address.city);
        });
    } catch (error) {
        console.log("Error while fetching data :", error.message);
    }
}

fetchUsers();