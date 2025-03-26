
let items =[];

const ItemDiv = document.getElementById("items")

function renderItem(){
    ItemDiv.innerHTML="";// to initially clear

    for (let i = 0; i < items.length; i++) {
        const element = items[i];

        const newDiv = document.createElement("div");
        newDiv.id=`itemDiv${i}`



        //new para tag
        const para = document.createElement("p");
        para.textContent=element
        para.style.display="inline-block"
        para.style.padding="4px 20px"
        para.style.fontSize="1em"

        // adding button
        const btn = document.createElement("button");
        btn.innerText="done ✅"
        btn.id=`done${i}`

        btn.style.backgroundColor="lightgreen"
        btn.style.borderRadius="4px"


        // styling of list items
        ItemDiv.style.fontFamily="sans-serif"
        

        newDiv.appendChild(para)
        newDiv.appendChild(btn)
        

        // adding to div
        ItemDiv.appendChild(newDiv)
        

        
    }
}


function removeItem(){
        for (let i = 0; i< items.length; i++) {   
            
            const btn = document.getElementById(`done${i}`)
            btn.addEventListener("click",()=>{
                document.getElementById(`itemDiv${i}`).remove()

                items.splice(i, 1);// to remove from list

                if(items==[]){
                    ItemDiv.innerText="No Tasks !"
                }
            })
        }
    
}


function loadItem(){

    const input = document.getElementById("inputvalue")
   
    items.push(input.value)
    input.innerText=""
    renderItem()
    removeItem()
}





document.getElementById("addItem").addEventListener("click",loadItem)