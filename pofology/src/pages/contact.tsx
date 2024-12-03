import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import emailjs from '@emailjs/browser';

type Props = {};

const Contact = (props: Props) => {

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
        // show on UI
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },);
  };

  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Arushi Jain</p>
              <p>Mumbai, India</p>

              <p>arushijain016@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid gap-8 md:grid-cols-2">
              <Input placeholder="Your Name" id="from_name" name="from_name" />
              <Input placeholder="Email Address" id="from_email" name="from_email" />
            </div>

            <div className="mt-8">
              <Input placeholder="Subject" id="subject" name="subject" />
            </div>
            <div className="mt-8">
              <TextArea placeholder="Message" id="message" name="message"/>
            </div>
            <div className="mt-8">
              <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200" onClick={sendEmail}>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
