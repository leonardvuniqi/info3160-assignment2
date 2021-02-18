import React from 'react';
import {Fab } from '@material-ui/core';

const FloatingActionButton = ({label, onClick}) => {
    return (
        <Fab variant="extended" style={{ position: 'fixed', bottom: '32px', right: '32px'}} onClick={onClick}>
            {/* <NavigationIcon className={classes.extendedIcon} /> */}
            {label}
        </Fab>
    )
}

export default FloatingActionButton