import './App.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from './apollo';
import Deck from './Deck';

function App() {
    const client = useApollo();

    return (
        <ApolloProvider client={client}>
            {/* <div className="App">
                <header className="App-header"></header>
            </div> */}
            <Deck />
        </ApolloProvider>
    );
}

export default App;
