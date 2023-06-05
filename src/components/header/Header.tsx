import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { saveAs } from "file-saver";

export default function Header() {
  //for responsive hamburger
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:960px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:961px)");

  const handleDownload = () => {
    fetch("../src/assets/CV_Frontend_Developer_Stepanenko.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "CV_Frontend_Developer_Stepanenko");
      })
      .catch((error) => {
        console.error("Error downloading", error);
      });
  };

  return (
    <AppBar position="sticky" sx={{}}>
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
              sx={{ color: "#fff", textDecoration: "none" }}
            >
              H.S.
            </Typography>
            <Typography
              variant="button"
              component="a"
              href="#footer"
              sx={{ color: "#fff", textDecoration: "none" }}
            >
              Footer
            </Typography>
            <Typography
              variant="button"
              component="a"
              href="#footer"
              sx={{ color: "#fff", textDecoration: "none" }}
            >
              Footer
            </Typography>
          </Box>
        )}
        <Button variant="contained" onClick={handleDownload}>
          Download CV
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
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <Typography
                        variant="button"
                        component="a"
                        href="/"
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
                        href="#footer"
                        sx={{
                          flexGrow: 1,
                          color: "#000",
                          textDecoration: "none",
                        }}
                      >
                        Footer
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Typography
                        variant="button"
                        component="a"
                        href="#footer"
                        sx={{
                          flexGrow: 1,
                          color: "#000",
                          textDecoration: "none",
                        }}
                      >
                        Footer
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Typography
                        variant="button"
                        component="a"
                        href="#footer"
                        sx={{
                          flexGrow: 1,
                          color: "#000",
                          textDecoration: "none",
                        }}
                      >
                        Footer
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
