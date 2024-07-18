import React from 'react'

export default function Table({ customers, transactions, filteredTransactions, setIsRowClicked, setUserChartData }) {
    return <>
        <table className="table w-100 table-dark mb-5 table-hover">
            <thead>
                <tr>
                    <th scope="col"><i className="fa-solid fa-id-badge text-custom"></i>Transaction ID</th>
                    <th scope="col"><i className="fa-solid fa-signature"></i>Customer Name</th>
                    <th scope="col"><i className="fa-solid fa-id-badge text-custom"></i>Customer ID</th>
                    <th scope="col"><i className="fa-solid fa-money-bill"></i>Amount</th>
                    <th scope="col"><i className="fa-solid fa-calendar-days"></i>Date</th>
                </tr>
            </thead>
            <tbody>
                {filteredTransactions.length ?
                    filteredTransactions?.map((transaction) => <tr key={transaction.id}
                        onClick={() => {
                            setIsRowClicked(true);
                            setUserChartData(transaction);
                        }}
                    >
                        <td>{transaction.id}</td>
                        <td>{customers?.find((customer) => customer.id === transaction.customer_id).name}</td>
                        <td>{transaction.customer_id}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.date}</td>
                    </tr>) :
                    transactions?.map((transaction) => <tr
                        onClick={() => {
                            setIsRowClicked(true);
                            setUserChartData(transaction);
                        }}
                        key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{customers?.find((customer) => customer.id === transaction.customer_id).name}</td>
                        <td>{transaction.customer_id}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.date}</td>
                    </tr>)}
            </tbody>
        </table>
    </>
}
