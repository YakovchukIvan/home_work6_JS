"use strict"

const taskInput1 = document.querySelector(".taskInput1")
const taskInput2 = document.querySelector(".taskInput2")

const taskBtn1 = document.querySelector(".taskBtn1")
const taskBtn2 = document.querySelector(".taskBtn2")




function task1 () {

    taskBtn1.addEventListener("click", () => {
        console.log(taskInput1.value);
        taskInput1.value = ""
    })

    taskBtn2.addEventListener("click", () => {
        console.log(taskInput2.value);
        taskInput2.value = ""
    })
}
task1 ()
