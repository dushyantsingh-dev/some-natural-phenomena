let nav=["charge","thunderstorm","earthquake"]
    document.getElementById(nav[0]+"s").addEventListener("click",()=>{
        console.log(nav[0]+"_exp")
        exp=nav[0]+"_exp"
        console.log(exp)
        document.getElementById(exp).style.transform="translateY(-100vh)"
        document.getElementById("close1").addEventListener('click',()=>{
        document.getElementById(exp).style.transform="translateY(0vh)"
        })
    })

    document.getElementById(nav[1]+"s").addEventListener("click",()=>{
        console.log(nav[1]+"_exp")
        exp=nav[1]+"_exp"
        console.log(exp)
        document.getElementById(exp).style.transform="translateY(-100vh)"
        document.getElementById("close2").addEventListener('click',()=>{
        document.getElementById(exp).style.transform="translateY(0vh)"
        })
    })

    document.getElementById(nav[2]+"s").addEventListener("click",()=>{
        console.log(nav[2]+"_exp")
        exp=nav[2]+"_exp"
        console.log(exp)
        document.getElementById(exp).style.transform="translateY(-100vh)"
        document.getElementById("close3").addEventListener('click',()=>{
        document.getElementById(exp).style.transform="translateY(0vh)"
        })
    })