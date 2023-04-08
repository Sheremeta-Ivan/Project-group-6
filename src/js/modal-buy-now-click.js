const buyProductListItems = document.querySelectorAll('.buy-product-list-item');

buyProductListItems.forEach((buyProductListItem) => {
  buyProductListItem.addEventListener('click', () => {
    const buyProductListItemDescription = buyProductListItem.querySelector('.buy-product-list-item-description');
    if (buyProductListItemDescription.style.backgroundColor === '') {
        buyProductListItemDescription.style.backgroundColor = '#FD9222';
      buyProductListItemDescription.style.color = '#FFFFFF'  
    } else {
        buyProductListItemDescription.style.backgroundColor = '';
        buyProductListItemDescription.style.color = '';  
    }
  });
});
