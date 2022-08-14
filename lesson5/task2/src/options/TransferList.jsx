import React from 'react'
import SelectedOptions from './SelectedOptions'
import AvailableOptions from './AvailableOptons'
const TransferList = () => {
    return (
        <div className="transfer-list">
            <AvailableOptions title="Available option" />
            <SelectedOptions title="Selected option" />
        </div>
    )
}

export default TransferList
