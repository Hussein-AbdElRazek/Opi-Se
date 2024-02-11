import { Modal, Rating } from '@mui/material'
import React, { useState } from 'react'
import Card from '../../EditProfile/Card';
import { Btn } from '../../../../components/inputs';
import classes from '../styles/DisMatchPop.module.css'
import { useSnackbar } from 'notistack';
import { useSearchParams } from 'react-router-dom';
import useDisMatch from '../hooks/use-dis-match';
const DisMatchPop = (props) =>
{
    const { open, onClose } = props;
    const [partnerRateValue, setPartnerRateValue] = useState(null);
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const [searchParams] = useSearchParams();
    const partnerId = searchParams.get("userId");
    const {
        handleDisMatch,
        isLoadingDisMatch
    } = useDisMatch()

    // handle change rate
    const handleChange = (event, newPartnerRateValue) =>
    {
        setPartnerRateValue(newPartnerRateValue);
    };

    // handle disMatch
    const onDisMatch = () =>
    {
        // doesn't rate yet
        if (!partnerRateValue)
        {
            popMessage("Rate is required to dis match", { variant: "error" })
            return
        }
        // handleDisMatch api + socket + update store data
        handleDisMatch({ partnerId, rate: partnerRateValue }, onClose)
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            className='center-x center-y'
        >
            <div
                className={`center-x center-y ${classes.container}`}
            >
                <Card
                    title={"Feed Back"}
                >
                    <p>
                        Please rate your study partner before dis match.
                    </p>

                    <Rating
                        name="rate-partner"
                        value={partnerRateValue}
                        onChange={handleChange}
                        size="large"
                    />

                    <Btn
                        onClick={onDisMatch}
                        isLoading={isLoadingDisMatch}
                    >
                        Confirm
                    </Btn>
                </Card>
            </div>

        </Modal>
    )
}

export default DisMatchPop