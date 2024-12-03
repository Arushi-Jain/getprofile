import Image from 'next/image';
import React from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';
import emailjs from '@emailjs/browser';

const ContactSection = () => {

  const sendEmail = () =>{
    // subject, from_name, message
    let params = {
      subject: (document.getElementById('subject') as HTMLInputElement).value,
      from_name: (document.getElementById('from_name') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLInputElement).value,
      from_email: (document.getElementById('from_email') as HTMLInputElement).value
    };

    console.log('params', params);

    emailjs.send('service_9ax2y1n', 'template_wqkf1gl', params, {
      publicKey: 'KG1ORxNK8i8t_1Svt',
    })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },);
  };

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            <Input placeholder="Your Name" id="from_name" name="from_name"/>
            <Input placeholder="Email Address" id="from_email" name="from_email"/>
          </div>

          <div className="mt-8">
            <Input placeholder="Subject" id="subject" name="subject"/>
          </div>
          <div className="mt-8">
            <TextArea placeholder="Message" id="message" name="message" />
          </div>
          <div className="mt-8">
            <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200" onClick={sendEmail}>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
