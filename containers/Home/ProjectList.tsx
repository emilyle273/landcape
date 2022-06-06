import { memo } from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = memo(({ list }) => {
  return (
    <div className='flex justify-between text-center flex-wrap'>
      {list.map((item, index) => (
        <ProjectItem item={item} key={index} />
      ))}
    </div>
  );
});

export default ProjectList;
