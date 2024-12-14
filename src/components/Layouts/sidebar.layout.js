import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
const SidebarLayout = () => {
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);
    const handleCloseShow = () => setShow(false);
    return (
        <React.Fragment>
            <Button onClick={handleShow}>
                klik
            </Button>
            <Offcanvas show={show} onHide={handleCloseShow}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}

export default SidebarLayout