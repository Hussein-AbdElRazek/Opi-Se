import React, { useEffect, useState } from 'react'
import ExtractNationalIdUi from './ExtractNationalIdUi'
import useHttp from '../../../hooks/use-http';

const ExtractNationalId = (props) =>
{
    const { setFieldValue } = props;
    const {
        isLoading: isLoadingExtractID,
        sendRequest: extractID
    } = useHttp();
    const [showNationalId, setShowNationalId] = useState(false)

    //extract national id from the selected file
    useEffect(() =>
    {
        const idImageInput = document.getElementById('idImageInput');

        const handleExtractID = (values) =>
        {
            const getResponse = ({ status, nationalId, message }) =>
            {
                if (!!status)
                {
                    setFieldValue("nationalId", nationalId)
                    setShowNationalId(true)
                }
            };
            extractID(
                {
                    url: "extract_nationalId",
                    method: "POST",
                    contentType: "form-data",
                    body: values,
                    baseUrl: "https://ml-api-x5og.onrender.com/"
                },
                getResponse
            );
        }
        const handleIdImageSelection = (event) =>
        {
            console.log("event", event)
            if (!isLoadingExtractID)
            {
                const selectedFile = event.target.files[0];
                const formData = new FormData();
                formData.append("file", selectedFile);
                handleExtractID(formData);
            }
        }
        if (idImageInput) idImageInput.addEventListener('change', handleIdImageSelection);

    }, [extractID, isLoadingExtractID, setFieldValue])
    return (
        <ExtractNationalIdUi
            isLoadingExtractID={isLoadingExtractID}
            showNationalId={showNationalId}
        />
    )
}

export default ExtractNationalId