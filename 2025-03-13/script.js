document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Netzwerkfehler');

        const data = await response.json();
        const formattedData = JSON.stringify(data, null, 2);

        document.getElementById('output').value = formattedData;
    } catch (error) {
        document.getElementById('output').value = 'Fehler: ' + error.message;
    }
});
