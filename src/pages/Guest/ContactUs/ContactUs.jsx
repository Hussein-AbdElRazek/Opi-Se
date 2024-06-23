import React from 'react'
import ContactUsUi from './ContactUsUi'

const ContactUs = () =>
{
    const onSendMessage = (values) =>
    {
        const emailDraft = `mailto:graduation.project.info@gmail.com?subject=Email from ${values.name}&body=${values.message}`
        window.open(emailDraft, '_blank');
    }
    return (
        <ContactUsUi onSendMessage={onSendMessage} />
    )
}

export default ContactUs