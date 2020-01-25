import Header from './common/header/header'

const AppLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default AppLayout;