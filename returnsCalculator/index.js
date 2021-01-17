let a = document.getElementById('a'),
    n = document.getElementById('n'),
    pre = document.getElementById('pre'),
    btn = document.getElementById('btn'),
    show = document.getElementById('show')


function calc() {

        let newA = parseInt(a.value),
            newN = parseInt(n.value),
            newPRE = parseInt(pre.value),
            preee = newPRE / 100,
            r = ((newA * preee) + newA) / newA,
            resualt = Math.pow(r, newN) * newA
            endResualt = Math.round(resualt)
    
    if (isNaN(endResualt)) {
        console.log('wrong')
    } else 
    { show.innerHTML = endResualt.toLocaleString()
    }

        
            
    
}


