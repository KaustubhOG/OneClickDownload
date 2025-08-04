'use client'

import axios from 'axios'

const Button = ({ searchvalue }: any) => {
    function ButtonClick() {
        console.log('Sending:', searchvalue);
        axios.post('/api/ReturnGameLink', { game: searchvalue })
            .then(res => {
                console.log('Response:', res.data);
            })
            .catch(err => {
                console.error('Error:', err);
            });
    }

    return (
        <div>
            <button onClick={ButtonClick}>Click here</button>
        </div>
    );
};

export default Button;
