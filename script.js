document.getElementById("translateButton").addEventListener("click", async () => {
    const sourceText = document.getElementById("sourceText").value;
    const targetLanguage = document.getElementById("targetLanguage").value;

    const response = await fetch('YOUR_API_GATEWAY_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: sourceText, target_language: targetLanguage }),
    });

    const data = await response.json();
    
    document.getElementById("result").innerText = data.translated_text;
});
