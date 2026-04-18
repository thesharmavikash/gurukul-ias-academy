import React from 'react';
import PageHero from '../../components/PageHero';

const Editorial: React.FC = () => {
  return (
    <div className='bg-white pb-20'>
      <PageHero title='Editorial' breadcrumb=' > Editorial' />
      <div className='max-w-7xl mx-auto px-6 mt-16 text-slate-600 font-medium'>
        Detailed information about Editorial is coming soon.
      </div>
    </div>
  );
};

export default Editorial;
