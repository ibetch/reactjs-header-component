import React from 'react';
import Logo from './Logo';
import MainNav from './MainNav';
import SearchForm from './SearchForm';

const EditorNav = props => {
  return (
    <div>
      <Logo />
      <MainNav />
      <SearchForm />
    </div>
  );
};
export default EditorNav;
