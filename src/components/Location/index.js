import React from 'react';

const Location = () => {
    return(
        <div className = 'location_wrapper'>
            <iframe title = "title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9522186588456!2d77.47783951435763!3d28.691075888181242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf22da107b417%3A0xcb6e48beb3f5f146!2s41%2F42%2C%20Gali%20Number%205%2C%20Krishna%20Kunj%2C%20Kailash%20Puram%2C%20Krishna%20Garden%20Colony%2C%20Govindpuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201003!5e0!3m2!1sen!2sin!4v1595578002470!5m2!1sen!2sin" width="100%" height="500" frameBorder="0" allowFullScreen=""></iframe>
            <div className = 'location_tag'>
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location