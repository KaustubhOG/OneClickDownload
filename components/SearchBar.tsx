'use client'

const SearchBar = ({ value, setvalue }: any) => {
    function validation(e: any) {
        const input = e.target.value;
        const validstring = input.toLowerCase();
        setvalue(validstring);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Game Name"
                value={value}
                onChange={validation}
            />
            <p>You typed: {value}</p>
        </div>
    );
};

export default SearchBar;
