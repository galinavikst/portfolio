import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ChangeEvent, FocusEvent, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import lottieSent from "../../assets/lottie-sent.json";
import { theme } from "../../theme";

interface FormProps {
  open: boolean;
  handleClose: () => void;
}

const PUBLIC_KEY = "fVTabzzFp9drlX-3e";
const SERVICE_ID = "service_ljgta5t";
const TEMPLATE_ID = "contact_form";

export default function Form({ open, handleClose }: FormProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmited, setSubmited] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    position: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    company: false,
    position: false,
    email: false,
    message: false,
  });

  const isFormValid = () => {
    return !Object.values(formErrors).some((error) => error) && isNotEmpty();
  };

  const isNotEmpty = () => {
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: false }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: true }));
    }
  };

  const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.trim() === "" || !emailPattern.test(value)) {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: true }));
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //checking for null before calling sendForm // ts
    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        function (response) {
          console.log("EMAIL HAS BEEN SENT!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }
    setSubmited(true);
    setTimeout(() => {
      handleClose();
      setSubmited(false);
      setFormData({
        fullName: "",
        company: "",
        position: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      disableScrollLock={true}
      sx={{
        textAlign: "center",
      }}
    >
      <DialogTitle
        variant="h2"
        sx={{ m: 2, fontSize: { xs: "2.5rem", sm: "3rem" } }}
      >
        Stay in Touch!
      </DialogTitle>
      <DialogContent>
        <form
          ref={form}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 35,
          }}
          onSubmit={sendEmail}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              error={formErrors.fullName}
              helperText={formErrors.fullName ? "Required field" : ""}
              label="Full Name"
              variant="standard"
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              sx={{ "& input": { fontSize: "16px" } }}
            />
            <TextField
              error={formErrors.company}
              helperText={formErrors.company ? "Required field" : ""}
              label="Company"
              variant="standard"
              required
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              onBlur={handleBlur}
              sx={{ "& input": { fontSize: "16px" } }}
            />
            <TextField
              error={formErrors.position}
              helperText={formErrors.position ? "Required field" : ""}
              label="Position"
              variant="standard"
              required
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              onBlur={handleBlur}
              sx={{ "& input": { fontSize: "16px" } }}
            />
            <TextField
              error={formErrors.email}
              helperText={
                formErrors.email ? "Please enter a valid email address" : " "
              }
              label="Email"
              variant="standard"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleEmailBlur}
              sx={{ "& input": { fontSize: "16px" } }}
            />
            <TextField
              error={formErrors.message}
              helperText={formErrors.message ? "Required field" : ""}
              label="Type Message"
              multiline
              rows={5}
              variant="standard"
              required
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              sx={{ "& textarea": { fontSize: "16px" } }}
            />
          </Box>
          <Button
            sx={{ minWidth: "150px", width: "30%", m: "auto" }}
            variant="contained"
            type="submit"
            disabled={!isFormValid()}
          >
            Submit
          </Button>
        </form>
        <IconButton
          onClick={handleClose}
          size="large"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            m: "5px",
            "& svg": { fill: theme.palette.primary.main },
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        {isSubmited && (
          <Lottie
            animationData={lottieSent}
            style={{ position: "absolute", top: 0, bottom: 0 }}
            loop={0.5}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
