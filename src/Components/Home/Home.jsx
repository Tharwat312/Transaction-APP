import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '../Table/Table';
import Bargraph from '../Bar/Bargraph';
import Search from '../Search/Search';
export default function Home() {
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [userChartData, setUserChartData] = useState([]);
    const [isRowClicked, setIsRowClicked] = useState(false);
    const searchByName = (customerName) => {
        const filteredCustomers = (customers.filter((customer) =>
            customer.name.toLowerCase().includes(customerName.toLowerCase())
        ));
        setFilteredTransactions(transactions.filter((transaction) => {
            return filteredCustomers.find((customer) => customer.id === transaction.customer_id);
        }));
    }
    const searchByAmount = (customerAmount) => {
        const filteredAmount = transactions.filter((transaction) => transaction.amount == customerAmount);
        setFilteredTransactions(filteredAmount);
    }
    const getCustomers = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/customers`);
            setCustomers(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    const getTransactions = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/transactions`);
            setTransactions(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCustomers();
        getTransactions();
    }, []);
    function getUserAmount() {
        const tempTransactions = transactions.filter((transaction) => transaction.customer_id === userChartData.customer_id);
        const amountsByDay = tempTransactions.reduce((acc, item) => {
            const date = item.date;
            const amount = parseFloat(item.amount);
            if (!acc[date]) {
                acc[date] = 0;
            }
            acc[date] += amount;
            return acc;
        }, {});
        const [dates, values] = [
            Object.keys(amountsByDay),
            Object.values(amountsByDay),
        ];
        return [dates, values];
    }
    return <>
        <Search searchByName={searchByName} searchByAmount={searchByAmount} />
        <Table customers={customers} transactions={transactions}
            filteredTransactions={filteredTransactions}
            setUserChartData={setUserChartData}
            setIsRowClicked={setIsRowClicked} />
        {isRowClicked ? <Bargraph
            user={userChartData}
            transactions={transactions}
            userAmount={getUserAmount()}
        /> : null}
    </>
};