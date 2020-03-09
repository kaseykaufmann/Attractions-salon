import {
    AppBar,
    Button,
    Container,
    Hidden,
    Icon,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
    useScrollTrigger,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./NavBar.module.scss";
import NavDrawer from "./NavDrawer";

const navItems = [
    {
        name: "Home",
        path: "/",
        external: false,
    },
    {
        name: "Services",
        path: "/services",
        external: false,
    },
    {
        name: "Book Now",
        path: "/book",
        external: false,
    },
    {
        name: "Payments",
        path: "/payments",
        external: false,
    },
    {
        name: "Testimonials",
        path: "/testimonials",
        external: false,
    },
];

const useStyles = makeStyles(theme => ({
    activeNavButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            borderColor: theme.palette.primary.light,
        },
    },
}));

const NavBar = () => {
    const [mobileDrawer, setMobileDrawer] = React.useState(false);

    const closeMobileDrawer = () => setMobileDrawer(false);

    const location = useLocation();
    const classes = useStyles();
    const isScrolled =
        useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        }) &&
        (!location.state || location.state.disableNav === false);

    return (
        <CSSTransition
            in={!location.state || location.state.disableNav === false}
            classNames={styles.appBar}
            timeout={300}
            unmountOnExit
        >
            <AppBar
                color="default"
                position="fixed"
                elevation={!isScrolled ? 0 : 4}
                className={styles.appBar}
            >
                <Toolbar className={styles.toolbar}>
                    <Container className={styles.navWrapper}>
                        <Typography color="primary" className={styles.title}>
                            Attractions Salon
                        </Typography>
                        <span className="spacer"></span>
                        <Hidden smDown>
                            {navItems.map(item => {
                                let matched =
                                    location.pathname === "/" ||
                                    item.path === "/"
                                        ? item.path === location.pathname
                                        : location.pathname.startsWith(
                                              item.path
                                          );

                                return (
                                    <Button
                                        key={item.path}
                                        className={clsx(styles.navButton, {
                                            [classes.activeNavButton]: matched,
                                        })}
                                        href={
                                            item.external
                                                ? item.path
                                                : undefined
                                        }
                                        component={
                                            !item.external ? Link : undefined
                                        }
                                        to={
                                            !item.external
                                                ? item.path
                                                : undefined
                                        }
                                        variant="outlined"
                                        color={matched ? "primary" : "default"}
                                    >
                                        {item.name}
                                    </Button>
                                );
                            })}
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton onClick={() => setMobileDrawer(true)}>
                                <Icon>menu</Icon>
                            </IconButton>
                            <NavDrawer
                                open={mobileDrawer}
                                onBackdropClick={closeMobileDrawer}
                                onMenuClick={closeMobileDrawer}
                                items={navItems}
                            />
                        </Hidden>
                    </Container>
                </Toolbar>
            </AppBar>
        </CSSTransition>
    );
};

export default NavBar;