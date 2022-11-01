import './App.css';
import { useState } from 'react';

function App() {

    const Message = () => {
        const [message_, setMessage] = useState('Welcome to Starbucks');
        const [btnLabel_, setBtnLabel] = useState('Place your order');

        let [arrayMap_, setArrayMap_] = useState([
            { coffee: "Americano", size: "Medium" },
            { coffee: "Espresso", size: "Single" },
            { coffee: "Cappucino", size: "Medium" },
            { coffee: "Chocolatte", size: "Large" },
        ]);



        const handleClick_ = () => {
            setMessage('Thank you, here are your orders');

            setArrayMap_([
                { coffee: "Cappucino", size: "Medium" },
                { coffee: "Chocolatte", size: "Large" },
            ]);

            setBtnLabel('Done');
        }


        return (
            <div>
                <p>{message_}</p>
                <ol>
                {arrayMap_.map(({ coffee, size }) => (
                    <li key={coffee}>{coffee} in a {size} size.</li>
                ))}
                </ol>
                <button className="App-btn_" onClick={handleClick_}>{btnLabel_}</button>
            </div>
            )
    }

    return (
    <div className="App">
          <header className="App-header">
          <Message />
      </header>
    </div>
  );
}

export default App;
