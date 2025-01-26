import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Define the Project interface
interface Project {
  title: string;
  image: string;
  technologies: string[];
  githubLink?: string; // Optional GitHub link
}

// Define the ProjectCard component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const imagePath = `${process.env.PUBLIC_URL}/${project.image}`;

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#1c1c1c",
        color: "#66fcf1",
        boxShadow: "0px 6px 15px rgba(102, 252, 241, 0.8)", // Shadow by default
        transform: "translateY(-5px)", // Lift effect by default
        transition: "all 0.3s ease-in-out", // Smooth animation
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
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "#1c1c1c",
            backgroundColor: "#66fcf1",
            "&:hover": { backgroundColor: "#55b3d0" },
          }}
          onClick={() => {
            if (project.githubLink) {
              window.open(project.githubLink, "_blank", "noopener noreferrer");
            }
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

// Define the project data
const projects: Project[] = [
  {
    title: "OTT Platform",
    image: "OTT.png",
    technologies: ["React", "Material UI", "Firebase", "Axios"],
    githubLink: "https://github.com/bardeprasd/OTTPlatform-React",
  },
];

// Define the Portfolio component
const Portfolio: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowY: "auto",
        backgroundColor: "#1c1c1c",
        paddingBottom: 8,
        color: "#66fcf1",
      }}
    >
      {/* Projects Section */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ mt: 4, color: "#66fcf1" }}
      >
        Past Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 4,
          mt: 4,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>

      {/* Experience Section */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ mt: 6, color: "#66fcf1" }}
      >
        Professional Experience
      </Typography>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: 3,
          backgroundColor: "#1c1c1c",
          borderRadius: 2,
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: 2,
            borderRadius: 2,
            backgroundColor: "#1c1c1c",
            color: "#66fcf1",
            boxShadow: "0px 6px 15px rgba(102, 252, 241, 0.8)", // Shadow by default
            transform: "translateY(-5px)", // Lift effect by default
            transition: "all 0.3s ease-in-out", // Smooth animation
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Front End Developer
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#66fcf1" }}>
            Reg-X Innovations | Pune | December 2024 - Present
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: 2,
            borderRadius: 2,
            backgroundColor: "#1c1c1c",
            color: "#66fcf1",
            boxShadow: "0px 6px 15px rgba(102, 252, 241, 0.8)", // Shadow by default
            transform: "translateY(-5px)", // Lift effect by default
            transition: "all 0.3s ease-in-out", // Smooth animation
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Associate IT Consultant
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#66fcf1" }}>
            ITC Infotech | Bangalore | November 2023 - November 2024
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
