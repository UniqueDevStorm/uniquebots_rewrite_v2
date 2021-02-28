import React, {Component} from 'react';
import Link from 'next/link'

class Layout extends Component {
    render() {
        return (
            <div>
                {/*nav area*/}
                <nav className="navbar py-3 navbar-expand-lg navbar-light bg-light fw-bolder">
                    <div className="container-fluid">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand" href="/">UNIQUEBOTS</a>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#layout__navbarContent" aria-controls="layout__navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="layout__navbarContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;