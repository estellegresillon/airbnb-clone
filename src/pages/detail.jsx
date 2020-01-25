import React from 'react'

import AppLayout from "../components/app-layout";
import Detail from "../components/detail";

const Page = ({ id }) => (
  <AppLayout>
    <Detail id={id} />
  </AppLayout>
);

Page.getInitialProps = async ({ query }) => {
    return { id: query.id }
}

export default Page;
