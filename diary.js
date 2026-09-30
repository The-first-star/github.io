fetch("diary.json")
    .then(response => response.json())
    .then(entries => {

        // トップページ：最新2件
        const latestDiary = document.getElementById("latest-diary");

        if (latestDiary) {
            entries.slice(0, 2).forEach(entry => {

                const article = document.createElement("article");

                article.innerHTML = `
                    <h3>${entry.date}</h3>
                    <p>${entry.text}</p>
                    <small>written by ${entry.author}</small>
                `;

                latestDiary.appendChild(article);
            });
        }

        // 過去ログページ：全件
        const allDiary = document.getElementById("all-diary");

        if (allDiary) {
            entries.forEach(entry => {

                const article = document.createElement("article");

                article.innerHTML = `
                    <h3>${entry.date}</h3>
                    <p>${entry.text}</p>
                    <small>written by ${entry.author}</small>
                `;

                allDiary.appendChild(article);
            });
        }

    })
    .catch(error => {
        console.error("エラー:", error);
    });
