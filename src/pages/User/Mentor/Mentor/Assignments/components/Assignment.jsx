import React, { useState } from 'react'
import AssignmentUi from './AssignmentUi'

const Assignment = (props) =>
{
    const [files, setFiles] = useState([]);

    const onChangeFile = (event) =>
    {
        setFiles([...event.target.files])
    }

    return (
        <AssignmentUi
            onChangeFile={onChangeFile}
            files={files}
            {...props}
        />
    )
}

export default Assignment