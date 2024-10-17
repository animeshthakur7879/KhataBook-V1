import Listitem from "./Listitem"

const Listgroup = ({transactions , removeTransaction , editTransaction , count}) => {
    return <>
        <ul className="list-group my-3">

            <h1 className={count>0 ? "text-center text-light display-3 my-3" : "d-none"}>Your Transactions :</h1>
                
                {
                    transactions.map((transaction)=> <Listitem key={transaction.id} transaction = {transaction} removeTransaction = {removeTransaction} editTransaction = {editTransaction}/>)
                }
                
            </ul>
    
    </>
}

export default Listgroup