import Container from 'components/Container';
import Textbox from 'components/Textbox';
import Textarea from 'components/Textarea';
import Banner from 'components/Details/Banner';

const ContactUs = () => {
  return (
    <>
      <Banner title='' />
      <section className='bg-gray-200 relative'>
        <div className="bg-white absolute h-[50px] w-[820px] left-[50%] top-[-50px] translate-x-[-50%]"></div>
        <Container className=' text-center bg-white pb-6 px-[50px] flex-col items-between justify-center'>
          <h3 className='text-lg uppercase mb-[30px]'>Sign up for a consultation</h3>
          <div className='mb-[30px]'>
            <Textbox placeholder='Fullname' />
          </div>
          <div className='mb-[30px]'>
            <Textbox placeholder='Phone number' />
          </div>
          <div className='mb-[30px]'>
            <Textbox placeholder='Email' />
          </div>
          <div className='mb-[30px]'>
            <Textarea placeholder='Note' />
          </div>
          <button className='bg-orange-700 uppercase text-white w-[105px] h-[30px] rounded-[5px]'>
            Send
          </button>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
