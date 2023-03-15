const url = "https://v2-api.obilet.com/api/client/getsession";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Basic JEcYcEMyantZV095WVc3G2JtVjNZbWx1",
};

async function getSession() {
  try {
    fetch(url, {
      method: "POST",
      headers: headers,
      mode: "no-cors",
    }).then((res) => {
      console.log(res.text());
      return res.text();
    }).then(e=>{
      console.log(e);
    })

  } catch (error) {
    console.log(error);
  }
}

getSession();

// Swap destination values

function swapInputs() {
  const inputFrom = document.getElementById("from");
  const inputDestination = document.getElementById("destination");
  const temp = inputFrom.value;
  inputFrom.value = inputDestination.value;
  inputDestination.value = temp;

  console.log(inputFrom.value);
  console.log(inputDestination.value);
}

// Filtered data value to main value
const searchContainers = document.querySelectorAll(
  ".booking__form-item.-search"
);

searchContainers.forEach((searchItem) => {
  const searchInput = searchItem.querySelector(".search-input");
  const searchResults = searchItem.querySelector(
    ".booking__form-item_filtered"
  );

  searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.trim();
    if (inputValue.length > 0) {
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  });

  searchResults.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const clickedValue = event.target.textContent;
      searchInput.value = clickedValue;
      searchResults.style.display = "none";
    }
  });
});
