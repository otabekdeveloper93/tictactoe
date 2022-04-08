const aray =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

const container = document.querySelector('.container');

for (let i = 0; i < aray.length; i++) {
    let ul = document.createElement('ul');
    ul.className = 'ul';
    for (let j = 0; j < aray[i].length; j++) {
        let li = document.createElement('li');
        li.innerHTML = `
            <span class="span1" id="bx-x"><i class='bx bx-x' ></i></span>
            <span class="span2" id="bx-o"><i class='bx bx-circle'></i></span>
        `
        ul.appendChild(li);
    }
    container.appendChild(ul);
}
const listItem = document.querySelectorAll('li');
const btnListO = document.querySelectorAll('#bx-o');
const btnListX = document.querySelectorAll('#bx-x');

// refresh
const refreshSec = document.querySelector('.refresh-section');
const h1 = document.querySelector('#h1');
const refreshBtn = document.querySelector('#submit');

// event

btnListX.forEach((item, idx) => {
    item.addEventListener('click', (e)=>{
        changeDisplay1(btnListX)
        item.classList.add('opacity1');
        switch (idx) {
            case 8:
                aray[2][2] = 1;
                e.target.style.display = "flex !important";
            break;
            case 7:
                aray[2][1] = 1
                e.target.style.display = "flex !important";
            break;
            case 6:
                aray[2][0] = 1
                e.target.style.display = "flex !important";
            break;
            case 5:
                aray[1][2] = 1
                e.target.style.display = "flex !important";
            break;
            case 4:
                aray[1][1] = 1
                e.target.style.display = "flex !important";
            break;
            case 3:
                aray[1][0] = 1
                e.target.style.display = "flex !important";
            break;
            case 2:
                aray[0][2] = 1
                e.target.style.display = "flex !important";
            break;
            case 1:
                aray[0][1] = 1
                e.target.style.display = "flex !important";
            break;
            case 0:
                aray[0][0] = 1
                e.target.style.display = "flex !important";
            break;
        }
        aray.forEach((item) =>{
            if(item[0] === 1  && item[1] === 1 && item[2] === 1){
                funcRefresh1();
                return;
            }else
            if(aray[0][0] === 1 && aray[1][0] === 1 && aray[2][0] === 1){
                funcRefresh1();
                return;
            }else
            if(aray[0][1] === 1 && aray[1][1] === 1 && aray[2][1] === 1){
                funcRefresh1();
                return;
            }else
            if(aray[0][2] === 1 && aray[1][2] === 1 && aray[2][2] === 1){
                funcRefresh1();
                return;
            }else
            if(aray[0][0] === 1 && aray[1][1] === 1 && aray[2][2] === 1){
                funcRefresh1();
                return;
            }else
            if(aray[0][2] === 1 && aray[1][1] === 1 && aray[2][0] === 1){
                funcRefresh1();
                return;
            }
        })
        aray.forEach((it, idm) =>{
            if(it[0] == 2) {
                e.target.style.display = "flex";
            }else
            if(it[1] == 2) {
                e.target.style.display = "flex";
            }else
            if(it[2] == 2) {
                e.target.style.display = "flex";
            }
        })
    })

});
btnListO.forEach((item, idx) => {
    item.addEventListener('click', (e)=>{
        changeDisplay2(btnListO)
        item.classList.add('opacity2');
        switch (idx) {
            case 8:
                aray[2][2] = 2;
                e.target.style.display = "flex !important";
            break;
            case 7:
                aray[2][1] = 2;
                e.target.style.display = "flex !important";
            break;
            case 6:
                aray[2][0] = 2;
                e.target.style.display = "flex !important";
            break;
            case 5:
                aray[1][2] = 2
                e.target.style.display = "flex !important";
            break;
            case 4:
                aray[1][1] = 2
                e.target.style.display = "flex !important";
            break;
            case 3:
                aray[1][0] = 2
                e.target.style.display = "flex !important";
            break;
            case 2:
                aray[0][2] = 2
                e.target.style.display = "flex !important";
            break;
            case 1:
                aray[0][1] = 2
                e.target.style.display = "flex !important";
            break;
            case 0:
                aray[0][0] = 2
                e.target.style.display = "flex !important";
            break;
        }
        aray.forEach((item) =>{
            if(item[0] === 2  && item[1] === 2 && item[2] === 2){
                funcRefresh2();
                return;
            }else
            if(aray[0][0] === 2 && aray[1][0] === 2 && aray[2][0] === 2){
                funcRefresh2();
                return;
            }else
            if(aray[0][1] === 2 && aray[1][1] === 2 && aray[2][1] === 2){
                funcRefresh2();
                return;
            }else
            if(aray[0][2] === 2 && aray[1][2] === 2 && aray[2][2] === 2){
                funcRefresh2();
                return;
            }else
            if(aray[0][0] === 2 && aray[1][1] === 2 && aray[2][2] === 2){
                funcRefresh2();
                return;
            }else
            if(aray[0][2] === 2 && aray[1][1] === 2 && aray[2][0] === 2){
                funcRefresh2();
                return;
            }
        })
        aray.forEach((it, idm) =>{
            if(it[0] == 2) {
                e.target.style.display = "flex";
            }else
            if(it[1] == 2) {
                e.target.style.display = "flex";
            }else
            if(it[2] == 2) {
                e.target.style.display = "flex";
            }
        })
        
    })

});

function changeDisplay1(changeItem){
    changeItem.forEach(i =>{
        i.style.display = 'none';
    })
    btnListO.forEach(i =>{
        i.style.display = 'flex';
    })
}
function changeDisplay2(changeItem){
    changeItem.forEach(i =>{
        i.style.display = 'none';
    })
    btnListX.forEach(i =>{
        i.style.display = 'flex';
    })
}

function funcRefresh1(){
    refreshSec.style.display = 'flex';
    h1.textContent = "1-player wins";
}
function funcRefresh2(){
    refreshSec.style.display = 'flex';
    h1.textContent = "2-player wins";
}
