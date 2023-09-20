import './App.css';
import logo from './logo.svg';
import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const textState = atom({
    key: 'textState', // unique ID
    default: '', // default value (aka initial value)
});

const charCountState = selector({
    key: 'charCountState', // unique ID
    get: ({get}) => {
        const text = get(textState);
        return text.length;
    },
});

function CharacterCounter() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                <TextInput />
                <CharacterCount />
                </p>
            </header>
        </div> 
    );
}
function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div> );
}
function CharacterCount() {
    const count = useRecoilValue(charCountState); //selector

    return <>Character Count: {count}</>;
}

export default CharacterCounter;