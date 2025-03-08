import React from 'react'

export const ContactPage = () => {
  return (
    <div className='bg-black h-screen'>
      

<section className="contact-info py-12 bg-black text-white text-center">
  <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
  <p className="text-lg mb-6">We're here to help. Reach out to us directly using the following methods:</p>
  
  <div className="contact-details space-y-4">
    {/* Email */}
    <div className="email">
      <p className="text-lg">
        <strong>Email:tamjidahmed388@gmail.com</strong>
       
      </p>
    </div>
    
    {/* Phone Number */}
    <div className="phone">
      <p className="text-lg">
        <strong>Phone:</strong>
        <a href="tel:+1234567890" className=" hover:underline"> +88 01864943775</a>
      </p>
    </div>
  </div>
</section>

    </div>
  )
}
