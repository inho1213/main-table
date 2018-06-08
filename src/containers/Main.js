import React from 'react';

import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

import Catalog from './Catalog';

import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {toggleNavBar} from "../actions/MainAction";

class Main extends React.Component {
    render() {
        const {dispatch, main} = this.props;

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Main Table</NavbarBrand>
                    <NavbarToggler onClick={() => dispatch(toggleNavBar())}/>
                    <Collapse isOpen={main.openNavBar} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/catalog">Catalog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/map">Map</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Catalog}/>
                    <Route path="/catalog" component={Catalog}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(state => {
    return {
        ...state
    };
})(Main));