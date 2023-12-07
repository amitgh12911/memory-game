let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
let inserted = [];
let initialInsertedLength = inserted.length;
let mainContainer = document.querySelector(".main-container");
let isInitiallyFlipped = false;
let matched = 0;
for (let i = 0; i < Math.pow(getComputedStyle(mainContainer).getPropertyValue("grid-template-rows").split(" ").length, 2); i++) {
    while (inserted.length == initialInsertedLength) {
        const insertElement = characters[Math.floor(Math.random() * characters.length)];
        const count = inserted.reduce((acc, current) => (current === insertElement ? acc + 1 : acc), 0);
        // console.log(`The count of ${insertElement} in the array is: ${count}`);
        if(count < 4 && insertElement != undefined) {
            inserted.push(insertElement);
            initialInsertedLength = inserted.length;
        } else {
            characters.splice(characters.indexOf(insertElement), 1);
            break;
        }
    }
    mainContainer.innerHTML += `<!-- Card container -->
    <div class="card-container" id="card-${i}">
        <!-- Card -->
        <div class="card">
            <!-- Front side content -->
            <div class="card-front">
                ${i + 1}
            </div>
            <!-- Back side content -->
            <div class="card-back">
                ${inserted[i]}
            </div>
        </div>
    </div>`;
}

let cards = document.querySelectorAll(".card-container");
Array.from(cards).forEach(e => {
    e.addEventListener("click", function cardFlip () {
        e.classList.toggle("flip");
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains("first-flip")) {
                if(cards[i].firstElementChild.lastElementChild.innerText.trim() == e.firstElementChild.lastElementChild.innerText.trim() && e.getAttribute("id") != cards[i].getAttribute("id")) {
                    if(!cards[i].classList.contains("bg-success") && !e.classList.contains("bg-success")) {
                        cards[i].classList.add("bg-success");
                        e.classList.add("bg-success");
                        matched++;
                        if(matched == cards.length / 2) {
                            setTimeout(() => {
                                alert("You won!");
                                location.reload();
                            }, 1000);
                        }
                    }
                } else {
                    setTimeout(() => {
                        cards[i].classList.remove("flip");
                        e.classList.remove("flip");
                    }, 1000);
                }
            }
        }
        if(!isInitiallyFlipped) {
            e.classList.add("first-flip");
            isInitiallyFlipped = true;
        } else {
            for (let i = 0; i < cards.length; i++) {
                if(cards[i].classList.contains("first-flip")) {
                    cards[i].classList.remove("first-flip");
                }
            }
            isInitiallyFlipped = false;
        }
    });
});

let arr = [25, 5612, 346, 211, 798, 31, 6546, 131];
let temp;
console.log(arr);
function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
sortArr(arr);
console.log(arr);