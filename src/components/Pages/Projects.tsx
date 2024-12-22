"use client";

import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import StarWrapper from "../hoc/SelectionWrapper";
import ProjectPreviewModal from "./ProjectPreviewModal";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "A cool project",
    image: "/placeholder.svg?height=200&width=300",
    longDescription:
      "This is a longer description of Project 1. It includes more details about the project, its goals, and the challenges overcome during development.",
    technologies: ["React", "TypeScript", "Material-UI"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Another awesome project",
    image: "/placeholder.svg?height=200&width=300",
    longDescription:
      "Project 2 is an innovative solution that addresses a specific problem in the industry. It demonstrates advanced skills in frontend development and user experience design.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Yet another great project",
    image: "/placeholder.svg?height=200&width=300",
    longDescription:
      "Project 3 showcases the ability to work with complex data structures and algorithms. It includes features like real-time updates and data visualization.",
    technologies: ["Vue.js", "Express", "D3.js"],
  },
];

interface ProjectsContentProps {}

const ProjectsContent: React.FC<ProjectsContentProps> = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenPreview = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
  };

  return (
    <Element name='projects'>
      <Container>
        <Box sx={{ my: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Typography variant='h3' component='h2' gutterBottom>
              My Projects
            </Typography>
          </motion.div>
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}>
                  <Card>
                    <CardMedia
                      component='img'
                      height='140'
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {project.title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {project.description}
                      </Typography>
                      <Button
                        onClick={() => handleOpenPreview(project)}
                        variant='outlined'
                        color='primary'
                        sx={{ mt: 2 }}>
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <ProjectPreviewModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={handleClosePreview}
      />
    </Element>
  );
};

const Projects = StarWrapper(ProjectsContent, "projects");

export default Projects;
