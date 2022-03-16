// import express model
const express = require('express')
// The Database
// const carsData = require('./data.json')
// import the writeFile module
const {writeFile} = require('./module')
// init a port to map the server
const port = 2020

// the abstraction of the server
const app = express()
app.use(express.json())


// this is database
const carsData = [
    {
        id: 1,
        name: "Benz",
        model: "DFYS545",
        year: 2024,
        available: false
    },
    {
        id: 2,
        name: "Volks",
        model: "DFYS545",
        year: 1998,
        available: true
    },
    {
        id: 3,
        name: "Toyota",
        model: "DFYS545",
        year: 2000,
        available: false
    },
    {
        id: 4,
        name: "Volkswagen",
        model: "DFYS545",
        year: 1997,
        available: false
    },
    {
        id: 5,
        name: "Porche",
        model: "DFYS545",
        year: 2022,
        available: true
    },
    {
        id: 6,
        name: "Lamboghini",
        model: "DFYS545",
        year: 2020,
        available: false
    },
    {
        id: 7,
        name: "Corola Bank",
        model: "DFYS545",
        year: 2021,
        available: true
    },
    {
        id: 8,
        name: "Kawasaki",
        model: "DFYS545",
        year: 2001,
        available: false
    },
    {
        id: 9,
        name: "Bentley",
        model: "DFYS545",
        year: 2009,
        available: true
    },
    {
        id: 10,
        name: "Audi Mx",
        model: "DFYS545",
        year: 1981,
        available: false
    }
]

app.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome to set 05 API"})
})
// Get all the cars
// Get method
app.get("/carsdata", (req, res)=>{
    res.status(200).json({message: "Cars in the warehouse", data: carsData})
})

// // get one car
// // Get method
// // app.get("/carsdata/:id", (req, res)=>{
    
// //     try{
// //         // get id for url parameters
// //         const id = parseInt(req.params.id)

// //         // get hold of all the ids in the database
// //         const car = carsData.find((el) => el.id === id)

// //         if(!car){
// //             res.status(404).json({message: `The car with the id: ${id} is not in this  warehouse please check the other warehouse`})
// //         }else{
// //             res.status(200).json({message: `car with id: ${id} is found please proceed to pay at the counter`, data: car})
// //         }
// //     } catch(error){
// //         console.log(error.message)
// //     }
// // })

// // Add a car to the warehouse
// // Post methods

// app.post("/carsdata/add", (req, res) =>{
//     try{

//         // create an instance of a car to be added with it attribute
//         const newCar = {
//             id: carsData.length +1,
//             name: req.body.name,
//             model: req.body.model,
//             year: req.body.year,
//             available: req.body.available
//         }

//         // Add the new car the cars in the warehouse
//         carsData.push(newCar)

//         // update the database
//         writeFile("./data.json", JSON.stringify(carsData))

//         // send a response
//         res.status(201).json({message: `new car is now available in the warehouse`, data: newCar})
//     }catch(error){
//         console.log(error.message)
//     }
// })


// // To update cars in the warehouse
// app.patch("/carsdata/update/:id", (req, res)=>{
//     try{

//         // get the id for url parameters
//         const id = parseInt(req.params.id)

//         // get hold of cars ids
//         const car = carsData.find((el)=> el.id === id)

//         if(!car){
//             res.status(404).json({message: `Dear client car with  the id: ${id} cannot be found in the warehouse, please contact the customer support`})
//         } else{
//             car.name = req.body.name,
//             car.model = req.body.model,
//             car.year = req.body.year,
//             car.available = req.body.available

//             writeFile("./data.json", JSON.stringify(carsData))
//             res.status(200).json({message: `car with id: ${id} has been successfully updated`, data: car})
//         }

//     }catch(error){
//         console.log(error.message)
//     }
// })


// // Remove a car from the warehouse
// app.delete("/carsdata/remove/:id", (req, res)=>{
//     try{

//         // get the id for url parameters
//         const id = parseInt(req.params.id)

//         // get hold of car ids
//         const car = carsData.find((el) => el.id === id)

//         if(!car){
//             res.status(404).json({message: `car with id: ${id} is not available in this warehouse please check the other warehouse`})
//         }else{

//             // grab position of the car
//             const index = carsData.indexOf(car)

//             // remove only this car
//             carsData.splice(index, 1)

//             res.status(200).json({message: `car with id: ${id} has successfully been removed from the warehouse`})
//         }

//     }catch(error){
//         console.log(error.message)
//     }
// })


// the server must listen to a server
app.listen(port, ()=>{
    console.log(`listening to port: ${port}`);
})