const Dashboard = ({transactions , count}) => {

    const income = transactions.filter((transaction) => transaction.amount > 0).reduce((p , c)=> p+c.amount , 0)

    const expense = transactions.filter((transaction)=> transaction.amount<0).reduce((p , c)=> p+c.amount , 0)

    const balance = transactions.reduce((p , c)=> p+c.amount , 0)

    return <>
        <div className="row g-5 my-4">
                <div className="col-sm-12 col-md-4">
                    <div id="income" className={count>0 ? "card p-3 rounded-0 border-0" : "d-none"}>
                        <h1 className="display-3 fw-bold">Income  </h1>
                        <h1 className="display-6 fw-semibold">{income}</h1>
                    </div>
                </div>
                <div className="col-sm-12  col-md-4">
                    <div id="expense" className={count>0 ? "card p-3 rounded-0 border-0" : "d-none"}>
                        <h1 className="display-3 fw-bold">Expense </h1>
                        <h1 className="display-6 fw-semibold">{expense}</h1>
                    </div>
                </div>
                <div className="col-sm-12  col-md-4">
                    <div id="balance" className={count>0 ? "card p-3 rounded-0 border-0" : "d-none"}>
                        <h1 className="display-3 fw-bold">Balance </h1>
                        <h1 className="display-6 fw-semibold">{balance}</h1>
                    </div>
                </div>
            </div>
    </>
}

export default Dashboard