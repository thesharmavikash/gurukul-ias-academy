import React from 'react';
import PageHero from '../../components/PageHero';

const Faculty: React.FC = () => {
  return (
    <div className='bg-white pb-20'>
      <PageHero title='Faculty' breadcrumb=' > Faculty' />
      <div className='max-w-7xl mx-auto px-6 mt-16 text-slate-600 font-medium'>
        Detailed information about Faculty is coming soon.
      </div>
    </div>
  );
};

export default Faculty;
