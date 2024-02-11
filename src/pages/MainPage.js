import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function MainPage() {
    // State for the form fields
    const [currencyNames, setCurrencyNames] = useState({});
    const [date, setDate] = useState('');
    const [sourceCurrency, setSourceCurrency] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        try {
            const response = await axios.get("http://localhost:3001/convert", {
                params: {
                    date,
                    sourceCurrency,
                    targetCurrency,
                    amountInSourceCurrency,
                },
            });
            console.log("Conversion response:", response.data);
            setAmountInTargetCurrency(response.data); // Update amountInTargetCurrency instead of amountInSourceCurrency
        } catch (error) {
            console.error("Error during conversion:", error);
            setAmountInTargetCurrency(0); // Reset amountInTargetCurrency in case of error
        }
    };

    // Fetch currency names from API on component mount
    useEffect(() => {
        const getCurrencyNames = async () => {
            try {
                const response = await axios.get("http://localhost:3001/getAllCurrencies");
                setCurrencyNames(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching currency names:", error);
            }
        };

        getCurrencyNames();
    }, []);

    return (
        <div>
            <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>
                Convert your Currencies Today
            </h1>
            <p className='lg:mx-32 opacity-40 py-6'>
                Welcome to "Convert your Currencies Today"! This application allows you
                to easily convert currencies based on latest exchange rates. Whether
                you're planning a trip, managing your finances, or simply curious about
                the value of your money in different currencies, this tool is here to
                help.
            </p>
            <div className='mt-5 flex items-center justify-center flex-col'>
                <section className='w-full lg:w-1/2'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                id="date"
                                name="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="Select date"
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="sourceCurrency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                            <select
                                onChange={(e) => setSourceCurrency(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                name="sourceCurrency"
                                id="sourceCurrency"
                                value={sourceCurrency}
                                required
                            >
                                <option value="">Select source Currency</option>
                                {Object.entries(currencyNames).map(([currencyCode, currencyName]) => (
                                    <option key={currencyCode} value={currencyCode}>{currencyName}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="targetCurrency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                            <select
                                onChange={(e) => setTargetCurrency(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                name="targetCurrency"
                                id="targetCurrency"
                                value={targetCurrency}
                                required
                            >
                                <option value="">Select target Currency</option>
                                {Object.entries(currencyNames).map(([currencyCode, currencyName]) => (
                                    <option key={currencyCode} value={currencyCode}>{currencyName}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="amountInSourceCurrency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source Currency</label>
                            <input
                                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                                type="number"
                                id="amountInSourceCurrency"
                                name="amountInSourceCurrency"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="Amount in source Currency"
                                required
                            />
                        </div>

                        <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>Get the target Currency</button>
                    </form>
                </section>
            </div>
            <section className='mt-5 lg:mx-60'>
                 {amountInSourceCurrency} {currencyNames[sourceCurrency]} is equals to {" "}
           <span className='text-green-500 font-bold'>{amountInTargetCurrency}</span>  in {currencyNames[targetCurrency]}
            </section>
           
           
        </div>
    );
}
