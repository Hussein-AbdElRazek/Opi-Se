import { ButtonBase, ButtonGroup, Modal } from '@mui/material'
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
    const handleChange = (newPartnerRateValue) => () =>
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
                    className={classes.card}
                >
                    <p >
                        On a scale of 1-5
                        <br />
                        What is your rate for studying with the partner?
                    </p>

                    <ButtonGroup className={classes.rate}>
                        {[1, 2, 3, 4, 5].map(rate => (
                            <ButtonBase
                                key={rate}
                                onClick={handleChange(rate)}
                                className={`${classes.btnContainer} ${partnerRateValue === rate ? classes.chosen : ''}`}
                            >
                                {rate}
                            </ButtonBase>
                        ))}
                    </ButtonGroup>

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