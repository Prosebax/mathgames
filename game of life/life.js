document.addEventListener('DOMContentLoaded', () => {
    function generateTable(){
        let column = 30
        let field = 30
        const btn = document.querySelector('.button-start')
        let size = 20
        let tableHtml = '<table class="table">'
            for (let x = 0; x < column; x++){
                tableHtml += '<tr>'
                for (let i = 0; i < field; i++){
                    tableHtml += `<td id="${i + "." + x}" class="point">`
                    tableHtml +='</td>'
                }
                tableHtml += '</tr>'
            }
        tableHtml += "</table>"
        const tableBody = document.querySelector('.table-body')
        tableBody.innerHTML = tableHtml
        const table = document.querySelector('.table')
        table.style.width = column*size+'px'
        table.style.height = field*size+'px'


        table.addEventListener('click', (e)=>{
            console.log(e)
            if (e.target.tagName == 'TD' && e.target.style.background != 'black'){
                e.target.style.background = 'black'
            }else{
                e.target.style.background = ''
            }
        });
        btn.addEventListener('click', ()=>{
            let timerId = setInterval(()=>{
            const grid = document.querySelectorAll('.point')
            let arrDeath = []
            let arrLives = []
            grid.forEach(elem => {
                const values = elem.id.split('.')
                const column = parseFloat(values[0])
                const field = parseFloat(values[1])
                

                let sum = 0

                const curentPoint = document.getElementById(`${column}.${field}`)

                console.log(curentPoint)
                let neigboursPoint =[
                rightPoint = document.getElementById(`${column + 1}.${field}`),
                upPoint = document.getElementById(`${column}.${field - 1}`),
                upRightPoint = document.getElementById(`${column + 1}.${field - 1}`),
                downRightPoint = document.getElementById(`${column + 1}.${field + 1}`),
                downPoint = document.getElementById(`${column}.${field +1}`),
                downLeftPoint = document.getElementById(`${column - 1}.${field + 1}`),
                leftPoint = document.getElementById(`${column -1}.${field}`),
                leftUpPoint = document.getElementById(`${column - 1}.${field - 1}`)
                ]
                
                neigboursPoint.forEach(elem =>{
                    try{if(elem.style.background == 'black'){
                        sum = sum + 1
                        console.log(sum)
                    }
                    }catch{

                    }finally{

                    }
                })

                if (curentPoint.style.background == 'black'){
                    if (sum == 2 || sum ==3){
                        arrLives.push(curentPoint)
                    }
                    else if(sum > 3 || sum < 2){
                        arrDeath.push(curentPoint)
                    }
                }else if(curentPoint.style.background == ''){
                    if(sum == 3){
                        arrLives.push(curentPoint)
                    }
                }
            })
            arrDeath.forEach(e =>{
                e.style.background = ''
            })
            arrLives.forEach(e =>{
                e.style.background = 'black'
            })
            const btn = document.querySelector('.button-stop')
            btn.addEventListener('click', ()=>{
                clearInterval(timerId)
            })

        }, 300)
        })
    }
    generateTable()
})
