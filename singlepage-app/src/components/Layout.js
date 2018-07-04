import React from 'react';
import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function handleClick(selected){
    g = selected;
}

let g = 1;
export default props => (    
    <div>        
        <Grid>
            <Row className="show-grid" >
                <Col>
                    <Nav bsStyle="pills" activeKey={g} onSelect={handleClick}>
                        <NavItem componentClass={Link} eventKey={1} href="/home" to="/home" > Home</NavItem>
                        <NavItem componentClass={Link} eventKey={2} href="/about" to="/about" > About</NavItem>
                    </Nav>
                </Col>
            </Row> <br/>
            <Row className="show-grid">
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Grid>
    </div>
);