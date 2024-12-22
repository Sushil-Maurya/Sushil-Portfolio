import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
// import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  technologies: string[];
}

interface ProjectPreviewModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  open,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent>
        <Box
          sx={{ position: "relative", width: "100%", height: "300px", mb: 2 }}>
          <img
            src={project.image}
            alt={project.title}
            // layout='fill'
            // objectFit='cover'
          />
        </Box>
        <Typography variant='body1' paragraph>
          {project.longDescription}
        </Typography>
        <Typography variant='h6' gutterBottom>
          Technologies Used:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {project.technologies.map((tech, index) => (
            <Typography
              key={index}
              variant='body2'
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                px: 1,
                py: 0.5,
                borderRadius: 1,
              }}>
              {tech}
            </Typography>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectPreviewModal;
