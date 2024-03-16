import { HeaderText, ModalCard } from '../ui'
import { Btn, FormikContainer } from '../inputs'
import classes from './styles/ItemCard.module.css'
export const ItemCard = (props) =>
{
    const {
        children,
        type,
        initialValues,
        validationSchema,
        title,
        onSubmit,
        onClose,
        isLoading,
    } = props;

    return (
        <ModalCard
            open={true}
            onClose={onClose}
        >
            <div
                className={classes.content}
            >
                {title && <HeaderText
                    size='medium'
                >
                    {title}
                </HeaderText>}
                <FormikContainer
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                >
                    {children}

                    {/* actions btns */}
                    {type !== "details" && (
                        <div
                            className={classes.actions}
                        >
                            <Btn
                                isLoading={isLoading}
                                type="submit"
                            >
                                {type === "add" ? "Add" : "Save"}
                            </Btn>

                            <Btn
                                onClick={onClose}
                                className='cancel-btn'
                            >
                                Cancel
                            </Btn>
                        </div>
                    )}
                </FormikContainer>
            </div>
        </ModalCard>
    )
}
