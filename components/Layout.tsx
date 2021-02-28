import React, {Component} from 'react';
import Link from 'next/link'

class Layout extends Component {
    render() {
        return (
            <div>
                {/*nav area*/}
                <div className="bg-light fixed-top">
                    <nav className="navbar py-3 navbar-expand-lg navbar-light fw-bolder container">
                        <div className="container-fluid">
                            <Link href="/">
                                <a className="navbar-brand" href="/">UNIQUEBOTS</a>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#layout__navbarContent" aria-controls="layout__navbarContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="layout__navbarContent">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <Link href="/addbot">
                                            <a className="nav-link" href="/addbot">봇 추가하기</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;