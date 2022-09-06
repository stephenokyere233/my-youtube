let wrap=document.querySelector('.wrapper')
const change=()=>{
    let color=Math.floor(Math.random()*(1e7).toString(16))
    wrap.style.background=`#${color}`
}
setInterval(change,1000)