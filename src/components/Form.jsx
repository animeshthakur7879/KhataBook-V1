import {useEffect ,  useState } from "react";

const Form = ({addTransaction , edit , setEdit , updateTransaction}) => {

    const [text , setText] = useState("");
    const [amount , setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(edit.isEdit){
            updateTransaction(edit.edit.id , text , amount)
        }
        else{
            addTransaction(text , amount)
        }
        setText("")
        setAmount("")
        setEdit({
            edit : {},
            isEdit : false
        })
        
    }

    useEffect(() => {
        setText(edit.edit.text);
        setAmount(edit.edit.amount);
    } , [edit]);


    return <>

        <h1 id="heading" className="text-center fw-bold fs-1 display-6">KhataBook – Your Personal Finance Tracker</h1>

        <form style={{backgroundColor : '#2D3250'}} onSubmit={(e) => handleSubmit(e)} className="form-control container border-0 shadow-lg mt-5 rounded-0 px-5 py-5 d-flex flex-column align-items-center justify-content-center ">
            <input id="formInput" style={{backgroundColor : '#7077A1'}} onChange={(e)=> setText(e.target.value)} value={text} type="text" required className="form-control text-light border-0 shadow-lg fs-4 rounded-0 px-3 py-3 " placeholder="Enter Transaction" />
            <input id="formInput" style={{backgroundColor : '#7077A1'}} onChange={(e) => setAmount(e.target.value)} value={amount} type="number" required className="form-control text-light shadow-lg border-0 fs-4 rounded-0 px-3 py-3 mt-4" placeholder="Enter Ammount" />
            <button id="btn" className="btn py-2 px-3 mt-5 fs-4 rounded-0 w-50  mt-4 flex-wrap">Add Transaction</button>
        </form>
    
    </>
}

export default Form