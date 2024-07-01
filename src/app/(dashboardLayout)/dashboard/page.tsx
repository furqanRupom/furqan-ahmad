import * as React from 'react';
import DashboardLayout from '../layout';
import HomePage from '@/components/dashboard/home/HomePage';

interface IdashboardHomeProps {
}

const dashboardHome: React.FunctionComponent<IdashboardHomeProps> = async (props) => {

  const data = await fetch('http://localhost:3000/api/blogs',{
    method:"GET"
  })
  const response = await data.json();
  console.log(response);
  return <><HomePage /></>
};

export default dashboardHome;
