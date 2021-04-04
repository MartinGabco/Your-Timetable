import React from 'react';

const Messages = props => {
    const { messages, selectedDay, filteredMessage, filteredAllDaysMessage } = props;

    return (
        <React.Fragment>
            <p>{filteredMessage}{filteredAllDaysMessage}</p>
        </React.Fragment>
    )
}
 
export default Messages;