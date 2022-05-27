import Container from '../common/Container';
import Link from 'next/link';
import Image from 'next/image'

const ProjectSection = () => {
  const projects = [
    {
      id: '1',
      city: 'Ho chi minh',
      title: 'Lorem ipsum dolor sub amet',
      image:
        'https://toprealty.vn/mp-up/2020/03/quy-trinh-cac-buoc-trien-khai-du-an-dau-tu-xay-dung-cong-trinh.jpg',
    },
    {
      id: '2',
      city: 'Ho chi minh',
      title: 'Lorem ipsum dolor sub amet',
      image:
        'https://toprealty.vn/mp-up/2020/03/quy-trinh-cac-buoc-trien-khai-du-an-dau-tu-xay-dung-cong-trinh.jpg',
    },
    {
      id: '3',
      city: 'Ho chi minh',
      title: 'Lorem ipsum dolor sub amet',
      image:
        'https://toprealty.vn/mp-up/2020/03/quy-trinh-cac-buoc-trien-khai-du-an-dau-tu-xay-dung-cong-trinh.jpg',
    },
  ];

  return (
    <section className='bg-gray-200 pb-[20px]'>
      <Container>
      <h2 className='uppercase text-[32px]'>Projects</h2>
        <ul className='flex justify-between text-center'>
          {projects.map((item, index) => (
            <li className='w-[260px] bg-white' key={item.id}>
              <div className='relative'>
                <Image src={item.image} alt={`project-${index}`} width="260" height="150"/>
                <span className='absolute left-[50%] text-white w-[107px] text-[10px] bg-[#0096FF] p-2 block top-[100%]  translate-x-[-50%] translate-y-[-50%]'>
                  {item.city}
                </span>
              </div>
              <h3 className='uppercase py-[25px] px-2'>{item.title}</h3>
              <p className='border-t border-gray-400 py-3 text-[10px] text-orange-700'>
                <Link href={`/news/${item?.id}`}>See details</Link>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProjectSection
