import React, { useEffect, useState } from 'react'
import ExtractNationalIdUi from './ExtractNationalIdUi'
import useHttp from '../../../hooks/use-http';
import { useSnackbar } from 'notistack';

const ExtractNationalId = (props) =>
{
    const { setFieldValue } = props;
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const {
        isLoading: isLoadingExtractID,
        sendRequest: extractID
    } = useHttp();
    const [showNationalId, setShowNationalId] = useState(false)

    //extract national id from the selected file
    const idImageInput = document.getElementById('idImageInput');
    
    useEffect(() =>
    {
        const handleExtractID = (values) =>
        {
            const getResponse = ({ status, nationalId, message }) =>
            {
                if (!!status)
                {
                    setFieldValue("nationalId", nationalId)
                    setShowNationalId(true)
                } else
                {
                    popMessage(message || "Something went wrong", { variant: "error" })
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
            if (!isLoadingExtractID)
            {
                const selectedFile = event.target.files[0];
                const formData = new FormData();
                formData.append("file", selectedFile);
                handleExtractID(formData);
            }
        }
        idImageInput?.addEventListener('change', handleIdImageSelection);

    }, [extractID, idImageInput, isLoadingExtractID, popMessage, setFieldValue])
    return (
        <ExtractNationalIdUi
            isLoadingExtractID={isLoadingExtractID}
            showNationalId={showNationalId}
        />
    )
}

export default ExtractNationalId