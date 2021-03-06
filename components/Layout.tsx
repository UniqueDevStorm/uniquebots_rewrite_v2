import React, { Component } from "react"
import Link from "next/link"

class Layout extends Component<any, any> {
  render() {
    const user = {
      id: "299895531701010442",
      avatar: "352a021b71062329b93f919d9c5bca35",
      name:
        "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ루",
      discriminator: "0000",
    }
    return (
      <div>
        {/*nav area*/}
        <div className="bg-dark sticky-top">
          <nav className="navbar py-lg-3 navbar-expand-lg navbar-dark fw-bolder container">
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand" href="/">
                  UNIQUEBOTS
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#layout__navbarContent"
                aria-controls="layout__navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="layout__navbarContent"
              >
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link href="/addbot">
                      <a className="nav-link" href="/addbot">
                        봇 추가하기
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className="ms-auto navbar-nav">
                  {user ? (
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        role="button"
                        href="#"
                      >
                        <img
                          alt="avatar"
                          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                          width={24}
                          height={24}
                          style={{
                            marginRight: 5,
                            borderRadius: "50%",
                          }}
                        />
                        {`${user.name.slice(0, 10)}..#${user.discriminator}`}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item">프로필</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item">로그아웃</a>
                        </li>
                      </ul>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
