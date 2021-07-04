import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Browser() {
    return (
        <div id='browserComponent'>
            <FontAwesomeIcon  icon={faBars} />

            <h2>Desde BrowserComponent</h2>
        </div>
    )
}
