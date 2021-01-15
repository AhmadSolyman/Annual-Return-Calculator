let a = document.getElementById('a'),
    n = document.getElementById('n'),
    pre = document.getElementById('pre'),
    btn = document.getElementById('btn'),
    show = document.getElementById('show'),
    btn = document.getElementById('btn')


function calc() {
     let newA = parseInt(a.value),
     newN = parseInt(n.value),
     newPRE = parseInt(pre.value),
     preee = newPRE / 100

    let r = ((newA * preee) + newA) / newA,
         resualt = Math.pow(r, newN) * newA

         rr = Math.round(resualt).toLocaleString()

    show.innerHTML = rr

}
