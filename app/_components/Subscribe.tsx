"use client";
import React, { useEffect } from 'react';

function Subscribe() {
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState('');

    const sendEmail = async () => {
        if (!email) {
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            setMessage(data.message);
            console.log(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (message && !loading) {
            console.log(message);
        }
    }, [message, loading])

    return (
        <div className="relative w-[80%] h-full flex items-center text-xs">
            <div className='border-2 w-full border-black border-solid rounded-md shadow-2xl flex'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-l-md shadow-sm focus:outline-none"
                />
                <button onClick={() => {
                    sendEmail();
                }}
                    className="px-6 py-3 h-full text-white bg-black hover:bg-[#252525] rounded-r-sm font-semibold shadow-md transition-all focus:ring-2 focus:ring-black border-black border-2 border-solid w-[30%] lg:w-max flex justify-center items-center"
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    );
}

export default Subscribe;
