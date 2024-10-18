import { useState } from "react"
import Dashboard from "./components/Dashboard"
import Listgroup from "./components/Listgroup"
import Navbar from "./components/Navbar"
import "./index.css"
import Form from "./components/Form"

const App = () => {

    const [transactions , setTransactions] = useState ([])
    const [count , setCount] = useState(0)

    const addTransaction = (text , amount) => {
        const newTransaction = {
            id : crypto.randomUUID() ,
            text : text ,
            amount : Number(amount)
        }
        setTransactions([...transactions , newTransaction]);
        setCount(count+1)
    }
    // Remove Transaction

    const removeTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id))
        setCount(count-1)
    }

    // Edit Transaction

    const [edit , setEdit] = useState({
        edit : {} ,
        isEdit : false 
    })

    const editTransaction = (transaction) => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setEdit({
            edit : transaction , 
            isEdit : true
        })
        console.log(edit);
    }

    const updateTransaction = (oldId , newText , newAmount) => {
        setTransactions(transactions.map((transaction)=>{
            if(transaction.id === oldId){
                return {
                    id : oldId , 
                    text : newText ,
                    amount : Number(newAmount)
                }
            }
            else{
                return(transaction)
            }
        }))

    }

    

    

    return <>
    
        <Navbar/>
        <div style={{backgroundColor : '#424769'}} >
            <div id="main" className="container p-5">
                <Form addTransaction = {addTransaction} edit = {edit} setEdit = {setEdit} updateTransaction = {updateTransaction}/>
                <Dashboard transactions = {transactions} count = {count}/>
                <Listgroup transactions = {transactions} removeTransaction = {removeTransaction} editTransaction = {editTransaction} count = {count}/>
                

            </div>
        </div>
        
        

        
    </>


}

export default App



