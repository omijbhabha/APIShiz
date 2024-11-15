document.getElementById("name").addEventListener("submit", async (event) => {
    event.preventDefault(); 

    const nameData = document.getElementById("nameData").value;

    try {
        const response = await fetch("http://127.0.0.1:5000/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: nameData }),
        });

        const result = await response.json();
        document.getElementById("responseMessage").textContent = `Server Response: ${result.message}`;
    } catch (error) {
        console.error("Error sending data:", error);
        document.getElementById("responseMessage").textContent = "Error sending data to the server.";
    }
});
