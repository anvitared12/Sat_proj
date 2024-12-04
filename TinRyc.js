alert("application completed")


document.addEventListener('DOMContentLoaded', function() {
    // Array of card objects with value and HTML content
    let cardArray = [
        { value: 10, content: '<div class="card"><h4>Manjunatha Recycle</h4><p>Price:Rs 10</p></div>' },
        { value: 5, content: '<div class="card"><h4>Conco Recycling plant</h4><p>Price:Rs 5</p></div>' },
        { value: 8, content: '<div class="card"><h4>Tisco</h4><p>Price:Rs 8</p></div>' },
        { value: 3.5, content: '<div class="card"><h4>TinRyc </h4><p>Price:Rs 3.5</p></div>' }
    ];//from line 17 to 31 is the parent and children function for the above code

    // Function to display the cards
    function displayCards(arr) {
        let cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = ''; // Clear existing cards
        
        arr.forEach(function(card) {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = card.content;
            cardContainer.appendChild(tempDiv.firstChild);
        });
    }

    // Display the initial cards
    displayCards(cardArray);

    // Event listener for the button to sort cards
    document.getElementById('sortButton').addEventListener('click', function() {
        // Sort the card array by value in descending order
        cardArray.sort((a, b) => b.value - a.value);

        // Display the sorted cards
        displayCards(cardArray);
    });
});














// cursor: pointer;  line 36

//justify-content: center; line 20