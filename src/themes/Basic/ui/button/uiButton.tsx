/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import React from 'react';
import Button from 'react-bootstrap/Button';
import './button.scss'

const uiButton = (props: any) => {
    return (
        <Button 
            variant="primary"
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </Button>
    );
};

export default uiButton;
