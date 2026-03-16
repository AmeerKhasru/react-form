import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Accessing uncontrolled email field via name attribute
        console.log("Email:", e.target.email.value);
        console.log("Password:", password);

        if (password.length < 6) {
            setError("Password should be 6 characters or longer");
        } else {
            setError('');
            alert("Form submitted successfully!");
        }
    };

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Email remains uncontrolled (fine for simple cases) */}
                <input type="email" name="email" placeholder='Email' required />
                <br />
                
                {/* Fixed: changed defaultValue to value */}
                <input 
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={handlePasswordOnChange} 
                    placeholder='Password' 
                    required 
                />
                <br />

                {/* Display the error message if it exists */}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;