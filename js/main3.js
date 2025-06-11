fetch("https://hn.algolia.com/api/v1/search_by_date?query=optimistic technology")
  .then(res => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then(result => {
    const data = result.hits;
    const seen = new Set();
    const ul = document.getElementById("ul");

    data.forEach(item => {
      const title = item.story_title;
      const url = item.story_url;

      if (!title || seen.has(title)) return;
      seen.add(title);

      const li = document.createElement("li");

      const titleText = document.createElement("div");
      titleText.textContent = title;

      li.appendChild(titleText);

      if (url) {
        const link = document.createElement("a");
        link.href = url;
        link.textContent = "Read more";
        link.target = "_blank";
        link.style.display = "block";
        link.style.marginTop = "5px";
        link.style.color = "#4169E1";
        li.appendChild(link);
      }

      ul.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
