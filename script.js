//Code visant à utiliser l'API de chat GPT pour générer dynamiquement les différentes recettes sur la page. La fonctionnalité n'est pas totalement implementée




// document.addEventListener("DOMContentLoaded", function () {
//     const apiKey = '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';
//     const searchButton = document.getElementById("search-button");
//     const recipeQuery = document.getElementById("recipe-query");
//     const recipeResult = document.getElementById("recipe-result");

//     searchButton.addEventListener("click", async function () {
//         const query = recipeQuery.value;

//         if (query) {
//             recipeResult.innerHTML = "En cours de recherche...";

//             const apiUrl = 'https://api.openai.com/v1/chat/completions';

//             const requestBody = {
//                 prompt: `Trouve-moi une recette de ${query}`,
//                 max_tokens: 150 // Limite de la longueur de la réponse
//             };

//             try {
//                 const response = await fetch(apiUrl, {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': `Bearer ${apiKey}`,
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(requestBody)
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     const recipeText = data.choices[0].text;
//                     recipeResult.innerHTML = recipeText;
//                 } else {
//                     recipeResult.innerHTML = "Erreur lors de l'appel à l'API";
//                 }
//             } catch (error) {
//                 recipeResult.innerHTML = "Erreur lors de l'appel à l'API";
//                 console.error('Erreur lors de l\'appel à l\'API', error);
//             }
//         } else {
//             recipeResult.innerHTML = "Veuillez entrer une recette à rechercher.";
//         }
//     });
// });

