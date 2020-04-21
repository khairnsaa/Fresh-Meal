import DataSource from '../data/data-source.js';

const main = () => {
    const black = document.querySelector('.black');
    const menu = document.querySelector('.menu-list');
    const close = document.querySelector('.close');
    const search = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchFood");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchFood(searchInput.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        menu.innerHTML = "";
        results.forEach(function (food) {
            const { name, thumbnail, area, category, instruction } = food;

            const foodElement = document.createElement("div");
            foodElement.setAttribute("class", "menu");

            foodElement.innerHTML = `
                <h2> ${food.strMeal} </h2>\n
                <img width="200" src="${food.strMealThumb}" alt="thumbnail">\n
                <p class = "category">Category : ${food.strMealThumb} </p>\n
                <p class="area">Made in : ${food.strArea}</p>
                <p class = "cook-desc"> Instruction :</p>\n
                <p class="desc">${food.strInstructions}</p>`;
            menu.appendChild(foodElement);

        })
    };

    const fallbackResult = message => {
        menu.innerHTML = "";
        menu.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    search.addEventListener('click', () => {
        black.classList.toggle('visibility');
        menu.classList.toggle('visibility');

        onButtonSearchClicked();

    });

    close.addEventListener('click', () => {
        black.classList.toggle('visibility');
        menu.classList.toggle('visibility');
    })
}

export default main;