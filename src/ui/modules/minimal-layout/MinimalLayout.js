import { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      width: "100%",
      position: "relative",
    },
    content: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.grey[100],
      position: "relative",
      overflow: "auto",
    },
  };
});
const MinimalLayout = ({
  Sidebar = null,
  Topbar = null,
  children,
  disableSidebar = false,
  crumbs,
}) => {
  const styles = useStyles();

  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarClose = useCallback(() => {
    setShowSidebar(false);
  });

  const topBar = useMemo(() => {
    if (Topbar) {
      return <Topbar crumbs={crumbs} />;
    }
  }, [Topbar]);

  const sideBar = useMemo(() => {
    if (disableSidebar || !Sidebar) {
      return null;
    }
    return <Sidebar onClose={handleSidebarClose} open={showSidebar} />;
  }, [Sidebar, disableSidebar]);

  return (
    <div className={styles.root}>
      {sideBar}
      <main className={clsx(styles.content, Sidebar === null && styles.contentPadding)}>
        {topBar}
        {children}
      </main>
    </div>
  );
};
MinimalLayout.propTypes = {
  Sidebar: PropTypes.any,
  Topbar: PropTypes.any,
  children: PropTypes.node,
  crumbs: PropTypes.array,
  disableSidebar: PropTypes.bool,
};
export default MinimalLayout;
