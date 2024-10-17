const Listitem = ({transaction , removeTransaction , editTransaction}) => {

    return <>
    
    <li id={transaction.amount>0 ? "incomeStyle" : "expenseStyle"} className="list-group-item my-3 ">

                    <div id="inner-div" className="d-flex align-items-center justify-content-between border-0 flex-wrap">
                        <h1 className="w-75">{transaction.text} : {transaction.amount}</h1>
                        <span className="float-end">
                            <button onClick={()=> editTransaction(transaction)} className="btn btn-outline-warning px-4 border-3 rounded-0 me-3">Edit</button>
                            <button onClick={()=>removeTransaction(transaction.id)} className="btn btn-outline-danger border-3 px-4 rounded-0">Delete</button>
                        </span>
                    </div>
                    
    </li>
    </>
}
export default Listitem