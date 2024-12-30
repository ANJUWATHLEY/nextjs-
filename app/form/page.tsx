'use client';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import DisplayData from './DisplayData';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dataList, setDataList] = useState<{ name: string; email: string; phone: string }[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEntry = { name, email, phone };
        setDataList((prevData) => [...prevData, newEntry]);
        setName('');
        setEmail('');
        setPhone('');
        alert('Form submitted successfully!');
    };

    const handleDelete = (index: number) => {
        setDataList((prevData) => prevData.filter((_, i) => i !== index));
    };

    return (
        <div className="surface-card p-4 shadow-2 border-round w-full sm:w-5 md:w-4 lg:w-3 mx-auto">
            <h2 className="text-center text-primary-600">Form</h2>
            <form onSubmit={handleSubmit} className="p-fluid">
                <div className="field">
                    <label htmlFor="name" className="block font-medium mb-2">Name:</label>
                    <InputText
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full"
                    />
                </div>

                <div className="field">
                    <label htmlFor="email" className="block font-medium mb-2">Email:</label>
                    <InputText
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full"
                    />
                </div>

                <div className="field">
                    <label htmlFor="phone" className="block font-medium mb-2">Phone Number:</label>
                    <InputText
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full"
                    />
                </div>

                <div className="text-center mt-4">
                    <Button 
                        type="submit" 
                        label="Submit" 
                        className="p-button-success w-full" 
                    />
                </div>
            </form>
            
            <DisplayData dataList={dataList} onDelete={handleDelete} />
        </div>
    );
};

export default Form;
