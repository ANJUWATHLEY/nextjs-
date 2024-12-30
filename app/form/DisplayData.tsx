'use client';

import React from 'react';
import { Button } from 'primereact/button'; // Import Primereact Button

const DisplayData = ({ dataList, onDelete }: { dataList: { name: string; email: string; phone: string }[], onDelete: (index: number) => void }) => {
    return (
        <div className="surface-card p-3 shadow-2 border-round mt-4">
            <h3 className="text-center text-primary-600">Submitted Data</h3>
            <ul className="list-none p-0">
                {dataList.map((data, index) => (
                    <li key={index} className="mb-3 flex align-items-center justify-content-between">
                        <div>
                            <strong>Entry {index + 1}:</strong>
                            <ul>
                                <li><strong>Name:</strong> {data.name}</li>
                                <li><strong>Email:</strong> {data.email}</li>
                                <li><strong>Phone:</strong> {data.phone}</li>
                            </ul>
                        </div>
                        <Button
                            icon="pi pi-trash"
                            className="p-button-rounded p-button-danger p-button-sm"
                            onClick={() => onDelete(index)}
                            tooltip="Delete" // Tooltip for better UX
                            tooltipOptions={{ position: 'top' }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayData;
