import React from 'react'
import logo from '../assets/img/ytubist4.png'
import Navigation from './Navigation'
import SlideToggle from 'react-slide-toggle'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    state = {
        toggleEvent: 0,
        show: false,
        collapseEvent: 0,
    }
    onToggle = () => {
        this.setState({ toggleEvent: Date.now() })
    }
    onCollapsed = () => {
        this.setState({ collapseEvent: Date.now() })
    }
    render() {
        const {lang} = this.props

        return (
            <header className="header-sec">
                <div className="container-fluid">
                    <div className="header">
                        <div className="d-flex align-items-center">
                            <Link
                                className="logo"
                                to={'/'}
                                onClick={() => {
                                    this.onCollapsed()
                                    this.setState({ show: false })
                                }}
                            >
                                <img src={logo} alt="logo image" width={80} />
                            </Link>
                            <div className="menu-wrap">
                                <Navigation lang={lang} />
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="language-trigger">
                                <Link onClick={this.props.langTranslatorEn} className={lang === 'en' ? 'active' : ''}>
                                    EN
                                </Link>
                                <Link onClick={this.props.langTranslatorTr} className={lang === 'tr' ? 'active' : ''}>
                                    TR
                                </Link>
                            </div>
                            <div
                                className={`menu-trigger ${this.state.show ? 'active' : ''}`}
                                onClick={() => {
                                    this.onToggle()
                                    this.setState({ show: !this.state.show })
                                }}
                            >
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
                <SlideToggle collapsed toggleEvent={this.state.toggleEvent} collapseEvent={this.state.collapseEvent}>
                    {({ setCollapsibleElement }) => (
                        <div className="mobile-menu" ref={setCollapsibleElement}>
                            <Navigation
                                collapsed={() => {
                                    this.onCollapsed()
                                    this.setState({ show: false })
                                }}
                            />
                        </div>
                    )}
                </SlideToggle>
            </header>
        )
    }
}
export default Header
