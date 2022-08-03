let body = document.body 
let heart = body.childNodes 
let all = []
heart.forEach((key, index) => {
    if(index % 2 !== 0) {
        all.push(key)
    }
})
setTimeout(() => {
    all[2].classList.add('active3')
    
    setTimeout(() => {
        all[1].classList.add('active2')
  
        setTimeout(() => {
            all[0].classList.add('active')
        }, 200);
    }, 200);
}, 200);