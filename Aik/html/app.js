let Prev = document.querySelector('.Prev')
let next = document.querySelector('.Next')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

Prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})