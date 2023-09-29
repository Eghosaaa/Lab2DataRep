let MyTasks = [];

let addTask = (task)=>{
    let length = MyTasks.push(task);//legth defines
    console.log("Task: "+task+" added to Tasks.")
    return length;
}

let listAllTasks = ()=>{
    MyTasks.forEach((item)=>{
        console.log(item);
    })
}
let deleteTask=(task)=>{
    let index = MyTasks.indexOf(task);
    if(index > -1){
        MyTasks.splice(index, 1);
        console.log("Task: "+ task + "removed from Tasks");
    } else {
        console.log("Task: " + task + "not in Tasks!");
    }
}

addTask("Learn JS!");
addTask("Learn React!");
listAllTasks();//list all the task at the end
deleteTask("Learn JS!");