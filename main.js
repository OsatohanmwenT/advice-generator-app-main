    const advice = document.getElementById("advice");
    const adviceText = document.getElementById("adviceText")
    const newAdviceBtn = document.getElementById("btn");
    const adviceTitle = document.getElementById("advicetitle");
    newAdviceBtn.addEventListener("click", () => {
            fetchArray();
    });

    async function fetchArray() {
        try {
            let response = await fetch("https://api.adviceslip.com/advice");
            let data = await response.json();
            
            adviceText.innerHTML = `"${data.slip.advice}"`;
            adviceTitle.innerHTML = `ADVICE #${data.slip.id}`;
        } catch (error) {
            console.error("Error fetching advice:", error.message);
        }
    }

    // Initial advice fetch
    fetchArray();