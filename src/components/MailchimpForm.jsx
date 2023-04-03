import Newsletter from "./Newsletter";

const MailchimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <>
        
               <Newsletter>
               url={postUrl}
               </Newsletter> 
                    
                
            
        </>
    );
}

export default MailchimpForm;