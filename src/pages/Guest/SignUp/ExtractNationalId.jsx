import React, { useState } from 'react'

import ExtractNationalIdUi from './ExtractNationalIdUi'
import useHttp from '../../../hooks/use-http';

const ExtractNationalId = (props) =>
{
    const { setFieldValue, isHaveInitialData, error } = props;
    const {
        isLoading: isLoadingExtractID,
        sendRequest: extractID
    } = useHttp();
    const [showNationalId, setShowNationalId] = useState(!!isHaveInitialData);

    //extract national id from the selected file
    const handleExtractID = async(values) =>
    {
        const getResponse = ({ status, nationalId, message }) =>
        {
            if (!!status)
            {
                setFieldValue("nationalId", nationalId)
            }
        };

        await extractID(
            {
                url: "extract_nationalId",
                method: "POST",
                contentType: "form-data",
                body: values,
                baseUrl: "https://ocr-api-ysqv.onrender.com/"
            },
            getResponse
        );

        setShowNationalId(true)
    }

    const [images] = useState([]);

    //  pass selected image to handleExtractID
    const onChangeImage = (imageList) =>
    {
        const selectedFile = imageList[0];
        const formData = new FormData();
        formData.append("file", selectedFile.file);
        handleExtractID(formData);
    };

    return (
        <ExtractNationalIdUi
            isLoadingExtractID={isLoadingExtractID}
            showNationalId={showNationalId}
            images={images}
            onChangeImage={onChangeImage}
            error={error}
        />
    )
}

export default ExtractNationalId