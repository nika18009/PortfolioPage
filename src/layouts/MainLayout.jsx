import PropTypes from "prop-types";
import Topbar from "../components/TopBar/TopBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div>{children}</div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
