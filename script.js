const btn = document.querySelector('.btn-open');
const allItems = document.querySelectorAll('.items');
const ligne = document.querySelector('.ligne');


btn.addEventListener('click', () => {

    btn.classList.toggle('active')
    ligne.classList.toggle('active-ligne');

    allItems.forEach(item => {

        item.classList.toggle('apparition')

        if(item.classList.contains('apparition') === true){

            setTimeout(() => {
                item.classList.toggle('real');
            }, 200)

        } else {
            item.classList.toggle('real');
        }

    })

})

allItems.forEach(item => {
    item.addEventListener('click', () => {

        btn.classList.toggle('active');
        ligne.classList.toggle('active-ligne');

        allItems.forEach(item => {
            item.classList.toggle('real')
            item.classList.toggle('apparition')
        })
    })
})