const addMarketButton = document.getElementById('addMarketButton')
const newmarketInput = document.getElementById('newmarketInput')
const marketList = document.getElementById('marketList')
const marketCount = document.getElementById('marketCount')




addMarketButton.addEventListener('click', addMarket)

// Find a way to add items to the market list.

function addMarket() {
    const marketText = newmarketInput.value.trim();
    if (marketText === '') return;

    // add it to the list

    const marketItem = document.createElement('li');
    marketItem.innerHTML = `
    <span class="market-text">${marketText}</span>
    <button class="delete-btn">X</button>
    `
    marketList.appendChild(marketItem);
    newmarketInput.value = '';
    updateCount();

}

function updateCount(){
    const marketItems = marketList.getElementsByTagName('li');
    const countValue = marketItems.length;
    marketCount.querySelector('strong').textContent = countValue;
}