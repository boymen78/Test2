//task1
// const extractNumbers = (str) => {
//     return str.match(/\d+/g)?.map(Number) || [];
// };
//
// console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]
// console.log(extractNumbers("abc")); // []
// console.log(extractNumbers("12and34and56")); // [12, 34, 56]

//task2
// function fibonacciRecursive(a = 0, b = 1) {
//     if (a > 144) return;
//     console.log(a);
//     setTimeout(() => fibonacciRecursive(b, a + b), 1000);
// }
//
// fibonacciRecursive();
//

//task3

// const fetchProductTitles = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//
//         if (!response.ok) {
//             throw new Error(`Ошибка HTTP: ${response.status}`);
//         }
//
//         const products = await response.json();
//
//         products.forEach(product => {
//             console.log(product.title);
//         });
//     } catch (error) {
//         console.error('Произошла ошибка при выполнении запроса:', error);
//     }
// };
//
// fetchProductTitles();

//task4

// document.getElementById('button-container').addEventListener('click', function(event) {
//     if (event.target.tagName === 'BUTTON') {
//         document.body.style.backgroundColor = event.target.textContent;
//     }
// });

//task5

// const block = document.getElementById('block');
// const toggleButton = document.getElementById('toggleButton');
//
// toggleButton.addEventListener('click', () => {
//     if (block.style.display === 'none') {
//         block.style.display = 'block';
//         toggleButton.textContent = 'Скрыть';
//     } else {
//         block.style.display = 'none';
//         toggleButton.textContent = 'Показать';
//     }
// });

//task 6

// let count = 0;
// const counterElement = document.getElementById("counter");
//
// const interval = setInterval(() => {
//     counterElement.textContent = count;
//     if (count >= 100) {
//         clearInterval(interval);
//     } else {
//         count++;
//     }
// }, 1);

//task7

document.getElementById('fetchDataButton').addEventListener('click', anyInfo);

async function anyInfo() {
    try {
        const response = await fetch('any.json', {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const any = await response.json();

        console.log(any);
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}


