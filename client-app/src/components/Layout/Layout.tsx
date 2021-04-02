import Header from 'components/Header/Header';
import React, { useState } from 'react';

const Layout: any = (props: any) => {
  const { children, name, setName, queryName, setQueryName } = props;
  return (
    <>
      <Header setQueryName={setQueryName} name={name} setName={setName} />
      {children}
    </>
  );
};
export default Layout;
