/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './styles/loading.scss';
import ModelLoading from './models/loading';

const Loading: React.FC<ModelLoading> = (props) => {

    return (
        <React.Fragment>
            <Modal
                size="sm"
                show={props.showLoadingModal}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body>
                    <div className='d-flex justify-content-center'>
                        <div className={(props.spinnerType + ' ' + props.textType)} role='status'>
                            <span className='visually-hidden'>Loading...{props.loadingMessage}</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default Loading;