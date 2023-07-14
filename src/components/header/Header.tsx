import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { saveAs } from "file-saver";
import cvPath from "../../assets/CV_Frontend_Developer_Stepanenko.pdf";

export default function Header() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);

  useEffect(() => {
    const getPosition = () => setScrolling(window.scrollY > 55 ? true : false);
    window.addEventListener("scroll", getPosition);

    setTimeout(() => {
      scrolling ? setShadow(true) : setShadow(false);
    }, 200);

    return () => {
      window.removeEventListener("scroll", getPosition);
    };
  }, [scrolling]);

  //for responsive hamburger
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:960px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:961px)");

  //download cv
  const handleDownload = () => {
    fetch(cvPath)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "CV_Frontend_Developer_Stepanenko");
      })
      .catch((error) => {
        alert("Error downloading");
        console.error("Error downloading", error);
      });
  };

  return (
    <AppBar
      position={scrolling ? "sticky" : "static"}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        color: "#000",
        background: "linear-gradient(to left, #fff 50%, #E6E8EB 50%) right", //set animation bg
        backgroundSize: "200% 100%",
        transition: ".2s ease-out",
        boxShadow:
          scrolling && shadow ? "0px 2px 5px 0px rgba(0,0,0,0.15)" : "none",
        backgroundPosition: scrolling ? "right" : "left",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          boxSizing: "border-box",
          width: "100%",
          m: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {isSmallScreen && <MenuListHamb />}
        {(isMediumScreen || isLargeScreen) && (
          <Box
            component="nav"
            sx={{ display: "flex", gap: "25px", alignItems: "center" }}
          >
            <Typography
              variant="button"
              component="a"
              href="/"
              sx={{
                color: "#000",
                textDecoration: "none",
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              H.S.
            </Typography>
            <Typography
              variant="button"
              component="a"
              href="#about"
              sx={{
                color: "#000",
                textDecoration: "none",
                fontSize: "1.3rem",
                ":hover": { color: "primary.main" },
              }}
            >
              About
            </Typography>
            <Typography
              variant="button"
              component="a"
              href="#projects"
              sx={{
                color: "#000",
                textDecoration: "none",
                fontSize: "1.3rem",
                ":hover": { color: "primary.main" },
              }}
            >
              Projects
            </Typography>
            <Typography
              variant="button"
              component="a"
              href="#contacts"
              sx={{
                color: "#000",
                textDecoration: "none",
                fontSize: "1.3rem",
                ":hover": { color: "primary.main" },
              }}
            >
              Get in touch
            </Typography>
          </Box>
        )}
        <Button
          variant="outlined"
          sx={{
            color: "#000",
            borderColor: "inherit",
            textDecoration: "none",
            fontSize: "1.3rem",
            ":hover svg": { color: "primary.main" },
          }}
          endIcon={<FileDownloadIcon />}
          onClick={handleDownload}
        >
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function MenuListHamb() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
                onKeyDown={handleListKeyDown}
                sx={{ mt: "60px" }}
              >
                <MenuItem onClick={handleClose}>
                  <Typography
                    variant="button"
                    component="a"
                    href="./"
                    sx={{
                      flexGrow: 1,
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    H.S.
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography
                    variant="button"
                    component="a"
                    href="#about"
                    sx={{
                      flexGrow: 1,
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    About
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography
                    variant="button"
                    component="a"
                    href="#projects"
                    sx={{
                      flexGrow: 1,
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    Projects
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography
                    variant="button"
                    component="a"
                    href="#contacts"
                    sx={{
                      flexGrow: 1,
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    Get in touch
                  </Typography>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    </Stack>
  );
}
