const parentContainer =  document.querySelector('.products-container');

parentContainer.addEventListener('click', event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes('show-btn');
    if(!isReadMoreBtn) return;
    const currentText = event.target.parentNode;
    currentText.classList.toggle('products-card:nth-child');
    current.textContent = current.textContent.includes('Show More...')
    document.querySelectorAll(".products-card").forEach(a=>a.style.display = "initial");
    document.getElementById("show-more").style.display= "none";
})