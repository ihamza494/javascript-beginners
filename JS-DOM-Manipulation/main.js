class CartItem {
    title;
    price;

    constructor(title,pVal){
        this.title = title;
        this.price = pVal;
    }

    render(){
        return `
        
                    <div class="cart-list-item">
                        <div class="cart-item-primary">
                        <div class="item-text">${this.title}</div>
                        <div class="item-price">${this.price}</div>
                        </div>
                    </div>
                    <div class="action">
                        <div class="action-left">-</div>
                        <div class="quantity">1</div>
                        <div class="action-right">+</div>
                    </div>
                    `;
    }
}

const elementExistAlready = (itemId) => {
const existingItem = document.querySelector(`.cart .cart-list .cart-list-group-item[data-id = "${itemId}"]`)
return{
    exist: Boolean(existingItem),
    existingItem, 
};
}


const onMenuItemClick=(clickEvent) =>{
    const listItem = clickEvent.currentTarget;
    const itemTextEl = listItem.querySelector(".item-text")
    const itemText = itemTextEl.textContent
    const itemPriceEl = listItem.querySelector(".item-price")
    const itemPrice = itemPriceEl.textContent
    const itemId = listItem.dataset.id; 
    const {exist, existingItem} = elementExistAlready(itemId);
    if(!exist){
    const cItem = new CartItem(itemText, itemPrice);
    const cItemHTML = cItem.render();
    const cartList = document.querySelector(".cart-list");
    const newCartElement = document.createElement("DIV");
    newCartElement.classList.add("cart-list-group-item");
    newCartElement.innerHTML = cItemHTML;
    newCartElement.dataset.id = itemId;
    cartList.append(newCartElement);
    }
    else{
        console.log("Update the Quantity");
        const quantityEl = existingItem.querySelector(".action .quantity")
        const quantityValue = parseFloat(quantityEl.textContent);
        quantityEl.textContent = quantityValue + 1;
    }
}


const bindEventHandlers = () => {
    const menuItems = document.querySelectorAll(
        ".menu .list-group .list-group-item"
        )
    menuItems.forEach((item)=> {
        item.addEventListener("click", (clickEvent)=>{
            onMenuItemClick(clickEvent)
})
    })

}

const main = () => {
    bindEventHandlers();
}

window.onload = () => {
    main();
}