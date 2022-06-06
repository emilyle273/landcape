import Container from '../../components/Container';
import ProjectItem from './ProjectItem';

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
        <ul className='flex justify-between text-center flex-wrap'>
          {projects.map((item, index) => (
            <ProjectItem item={item} key={index}/>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProjectSection;
