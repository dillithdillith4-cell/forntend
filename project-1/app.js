



const Collection= document.querySelector(".collection")
const Text=document.querySelector("#task")
const Search =document.querySelector(".search")
const clearTasks=  document.querySelector(".clear-tasks")


// loadeventlistner


function loadevEntlistner(){

    // removeTask
      Collection.addEventListener("click", removeTask)


      //gettask

      document.addEventListener("DOMContentLoaded",getTask)


    //  filterTask
      Search.addEventListener("keyup", filterTask)


    //   clearTask
      clearTasks.addEventListener("click", clearTask)

}

loadevEntlistner()



// get text & add text


// add task

   const submitForm=document.querySelector("#task-form").addEventListener("submit", (e)=>{

        e.preventDefault()


        if(Text.value ===""){
            alert("please fill the feilds")
        }
        else{


            // create Element

const li=document.createElement("li")

li.className="collection-item"

const link=document.createElement("a")
link.className="delete-item secondary-content"


link.innerHTML=`<i class="fa fa-remove"></i>`

li.textContent=Text.value

li.appendChild(link)


Collection.appendChild(li)


        storeTaskLocalStorage(Text.value) 

         Text.value=""

        }


        
   })


// remove task

function removeTask(e){

    if(e.target.parentElement.classList.contains("delete-item")){

      if(confirm("are you sure this want to delete")){
                      e.target.parentElement.parentElement.remove()

                      removetaskFromlocalstorage(e.target.parentElement.parentElement)

      }
      

    }

      
}

// removetaskFromlocalstorage


function removetaskFromlocalstorage(taskElement){


        let tasks

    if(localStorage.getItem("tasks")===null){
        tasks=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem("tasks"))
    }


    tasks.forEach((task,index)=> {


      if(taskElement.innerText===task){



             tasks.splice(index,1)

            
      }


    })


    localStorage.setItem("tasks",JSON.stringify(tasks))


}

// gettask from localStorage to add 





// filter task

function filterTask(e){


   
       let searchValue=e.target.value.toLowerCase();

        
     
        document.querySelectorAll("li").forEach((task)=> {


              let tasklist=task.innerText

 
              if(tasklist.toLowerCase().indexOf(searchValue) !=-1){

                   task.style.display="block"
              }
              else{
                      task.style.display="none"
            }

        })

        
             
    




       

         
    



}



// store Task LocalStorage

function storeTaskLocalStorage(inputValue){

 let task;

if(localStorage.getItem("tasks")===null){

    task=[]

    console.log("step-1")
}
else{

    task=JSON.parse(localStorage.getItem("tasks"))
    console.log("step-2")
}

 task.push(inputValue)

 localStorage.setItem("tasks",JSON.stringify(task))



}







function getTask(){

    let tasks

    if(localStorage.getItem("tasks")===null){
        tasks=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem("tasks"))
    }

    tasks.forEach((task)=> {



        
            // create Element

const li=document.createElement("li")

li.className="collection-item"

const link=document.createElement("a")
link.className="delete-item secondary-content"


link.innerHTML=`<i class="fa fa-remove"></i>`

li.textContent=task

li.appendChild(link)


Collection.appendChild(li)





    })
}

    



// clear tasks 

function clearTask(){


       Collection.innerHTML=""

       clearForm()       




    }


    function clearForm(){


    localStorage.removeItem("tasks")

    
}

 

   

        
        


   



