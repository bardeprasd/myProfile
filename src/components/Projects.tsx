import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface Project {
  title: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const imagePath =
    project.image.startsWith("http") || project.image.startsWith("//")
      ? project.image
      : `${process.env.PUBLIC_URL}/${project.image}`;

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#1c1c1c",
        color: "#66fcf1",
        boxShadow: "0px 6px 15px rgba(102, 252, 241, 0.8)",
        transform: "translateY(-5px)",
        transition: "all 0.3s ease-in-out",
        borderRadius: 2,
      }}
    >
      {project.githubLink ? (
        <CardActionArea
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia
            component="img"
            height="140"
            image={imagePath}
            alt={project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="inherit">
              {project.technologies.join(" | ")}
            </Typography>
          </CardContent>
        </CardActionArea>
      ) : (
        <>
          <CardMedia
            component="img"
            height="140"
            image={imagePath}
            alt={project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="inherit">
              {project.technologies.join(" | ")}
            </Typography>
          </CardContent>
        </>
      )}
      <CardActions sx={{ display: "flex", gap: 1 }}>
        {project.liveLink && (
          <Button
            size="small"
            sx={{
              color: "#1c1c1c",
              backgroundColor: "#66fcf1",
              "&:hover": { backgroundColor: "#55b3d0" },
            }}
            onClick={() =>
              window.open(project.liveLink, "_blank", "noopener noreferrer")
            }
          >
            Live Demo
          </Button>
        )}
        {project.githubLink && (
          <Button
            size="small"
            sx={{
              color: "#1c1c1c",
              backgroundColor: "#66fcf1",
              "&:hover": { backgroundColor: "#55b3d0" },
            }}
            onClick={() =>
              window.open(project.githubLink!, "_blank", "noopener noreferrer")
            }
          >
            GitHub
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const projects: Project[] = [
  {
    title: "OTT Platform",
    image: "OTT.png",
    technologies: ["React", "Material UI", "Firebase", "Axios"],
    githubLink: "https://github.com/bardeprasd/OTTPlatform-React",
  },
  {
    title: "GoPlaces",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    technologies: ["React", "Express", "MongoDB", "Google API"],
    githubLink: "https://github.com/bardeprasd/GoPlaces",
    liveLink: "https://go-places-3fle.vercel.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowY: "auto",
        backgroundColor: "#1c1c1c",
        paddingBottom: 8,
        color: "#66fcf1",
        pt: 2,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ mt: 4, color: "#66fcf1" }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 3,
          mt: 4,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
