import React, { useState } from 'react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h3>Contact Me!</h3>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleSubmit}
            >
                <div className="col-12 col-lg-9">
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        className="form-input w-100"
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="form-input w-100"
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={handleMessageChange}
                        className="form-input w-100"
                        rows={5}
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <button className="btn btn-info btn-block py-3" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}