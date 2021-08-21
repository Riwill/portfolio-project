import React, { Component } from "react";
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLink, NavLinkRoute} from './HeaderElement'
import { ScrollTo } from "react-scroll-to";

const Header = ()=>{
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>RICHARD WILLIAM</NavLogo>
                <NavMenu>
                    <NavItem>
                        <ScrollTo>
                        {({ scroll }) => (
                            <NavLinkRoute onClick={() => scroll({ x: 0, y: 0, smooth: true })}>Home</NavLinkRoute>
                        )}
                        </ScrollTo>
                    </NavItem>
                    <NavItem>
                        <ScrollTo>
                        {({ scroll }) => (
                            <NavLinkRoute onClick={() => scroll({ x: 0, y: 680, smooth: true })}>About Me</NavLinkRoute>
                        )}
                        </ScrollTo>
                    </NavItem>
                    <NavItem>
                        <ScrollTo>
                        {({ scroll }) => (
                            <NavLinkRoute onClick={() => scroll({ x: 0, y: 1730, smooth: true })}>Latest Project</NavLinkRoute>
                        )}
                        </ScrollTo>
                    </NavItem>
                    <NavItem>
                        <ScrollTo>
                        {({ scroll }) => (
                            <NavLinkRoute onClick={() => scroll({ x: 0, y: 2750, smooth: true })}>Other Say</NavLinkRoute>
                        )}
                        </ScrollTo>
                    </NavItem>
                    <NavItem>
                        <ScrollTo>
                        {({ scroll }) => (
                            <NavLinkRoute onClick={() => scroll({ x: 0, y: 3200, smooth: true })}>Say Hello</NavLinkRoute>
                        )}
                        </ScrollTo>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Header