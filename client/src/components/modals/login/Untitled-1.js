<Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal"
                show={this.state.show}
                onHide={() => this.handleModal()}
            >
                <Modal.Body>
                    <Button className="btn-block" variant="outline-info" type="submit">
                    Login
                    </Button>
                </Modal.Body>
            </Modal>