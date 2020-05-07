import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import OurWork from './pages/Work'
import Story from './pages/Story'
import { Legal } from './pages/Legal'



class Root extends React.Component {

    state = {
        language: 'en',
    }

    render() {
        return (
            <Router basename={'/'}>
                <Switch>
                    <Route exact path={'/'}>
                        <Home
                            lang={this.state.language}
                            langTranslatorTr={() => {
                                this.setState({ language: 'tr' })
                            }}
                            langTranslatorEn={() => {
                                this.setState({ language: 'en' })
                            }}
                        />
                    </Route>
                    <Route exact path={'/ourwork'}>
                        <OurWork
                            lang={this.state.language}
                            langTranslatorTr={() => {
                                this.setState({ language: 'tr' })
                            }}
                            langTranslatorEn={() => {
                                this.setState({ language: 'en' })
                            }}
                        />
                    </Route>
                    <Route exact path={'/ourstory'}>
                        <Story
                            lang={this.state.language}
                            langTranslatorTr={() => {
                                this.setState({ language: 'tr' })
                            }}
                            langTranslatorEn={() => {
                                this.setState({ language: 'en' })
                            }}
                        />
                    </Route>
                    <Route exact path={'/legal'}>
                        <Legal
                            lang={this.state.language}
                            langTranslatorTr={() => {
                                this.setState({ language: 'tr' })
                            }}
                            langTranslatorEn={() => {
                                this.setState({ language: 'en' })
                            }}
                        />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'))
