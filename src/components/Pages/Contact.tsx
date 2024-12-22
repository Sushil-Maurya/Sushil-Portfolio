import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert,
  useTheme,
} from "@mui/material";
// import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SelectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState<{ type?: string; message?: string }>({});
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setAlert({});
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, message } = form;
    let alertMessage;
    if (!message) alertMessage = "message";
    if (!email) alertMessage = "email";
    if (!name) alertMessage = "name";

    if (alertMessage) {
      return setAlert({
        type: "error",
        message: `Please enter your ${alertMessage}!`,
      });
    }

    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          to_name: process.env.REACT_APP_EMAILJS_SEND_MAIL_TO_NAME,
          from_email: email,
          to_email: process.env.REACT_APP_EMAILJS_SEND_MAIL_TO,
          message: message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setAlert({
            type: "success",
            message: "Thank you. I will get back to you as soon as possible.",
          });
          dismissAlert();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          setLoading(false);
          setAlert({
            type: "error",
            message: "Ahh, something went wrong. Please try again.",
          });
          dismissAlert();
        }
      );
  };

  const dismissAlert = () => {
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  return (
    <Box
      display='flex'
      flexDirection={{ xs: "column-reverse", xl: "row" }}
      gap={4}
      overflow='hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        style={{ flex: 0.75 }}>
        <Box
          sx={{
            backgroundColor: theme.palette.grey[900],
            borderRadius: theme.shape.borderRadius,
            padding: theme.spacing(4),
            color: theme.palette.common.white,
          }}>
          <Typography variant='h6' gutterBottom>
            Get in touch
          </Typography>
          <Typography variant='h4' gutterBottom>
            Contact.
          </Typography>

          {alert?.message && (
            <Alert severity={alert?.type as any} sx={{ mb: 2 }}>
              {alert?.message}
            </Alert>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <Box display='flex' flexDirection='column' gap={2}>
              <TextField
                label='Your Name'
                variant='outlined'
                name='name'
                value={form.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label='Your Email'
                variant='outlined'
                name='email'
                value={form.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label='Your Message'
                variant='outlined'
                name='message'
                value={form.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={loading}
                startIcon={loading && <CircularProgress size={20} />}>
                {loading ? "Sending..." : "Send"}
              </Button>
            </Box>
          </form>
        </Box>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        style={{ flex: 1, height: "auto" }}>
        {/* <EarthCanvas /> */}
      </motion.div>
    </Box>
  );
};

export default SectionWrapper(Contact, "contact");
