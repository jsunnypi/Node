const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({user_id: id, password}),
});