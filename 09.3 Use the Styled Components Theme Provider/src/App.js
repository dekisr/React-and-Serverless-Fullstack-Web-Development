import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import Navbar from './components/Navbar';
import { GlobalStyle } from './styled/Global';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import { useAuth0 } from './auth';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styled/Themes';
function App() {
    const { loading } = useAuth0();

    const theme = 'dark';
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    return (
        <Router>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyle />
                <Main>
                    {loading && <p>Loading...</p>}
                    {!loading && (
                        <Container>
                            <Navbar />
                            <Switch>
                                <Route path="/game" component={Game} />
                                <Route
                                    path="/highScores"
                                    component={HighScores}
                                />
                                <Route path="/gameOver" component={GameOver} />
                                <Route path="/" component={Home} />
                            </Switch>
                        </Container>
                    )}
                </Main>
            </ThemeProvider>
        </Router>
    );
}

export default App;
