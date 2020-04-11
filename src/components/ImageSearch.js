// Adding Import
import React, {useState} from 'react';

// Adding the search component
const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }


    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            {/* Uses on submit above */}
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div
                    className="flex items-center border-b border-black
                py-2"
                >   
                    {/* When you start to type you need to update the state / On Change Event */}
                    <input onChange={e => setText(e.target.value)}
                        className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Please Search Image..."
                    />
                    <button
                        className="flex-shrink-0 bg-black hover:bg-red-700 border-black hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
          </button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;
