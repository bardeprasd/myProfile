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

// Define the Experience interface
interface Experience {
  year: string;
  title: string;
  description: string;
}

// Define the ProjectCard component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const imagePath = `${process.env.PUBLIC_URL}/${project.image}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      {project.githubLink ? ( // Conditionally render CardActionArea with href
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
            <Typography variant="body2" color="text.secondary">
              {project.technologies.join(" | ")}
            </Typography>
          </CardContent>
        </CardActionArea>
      ) : (
        // Render without CardActionArea if no githubLink
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
            <Typography variant="body2" color="text.secondary">
              {project.technologies.join(" | ")}
            </Typography>
          </CardContent>
        </>
      )}
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

// Define the ExperienceCard component
const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        maxWidth: 600,
        bgcolor: "background.paper",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: "aqua",
          color: "white",
          p: 1,
          mr: 2,
          borderRadius: "50%",
          minWidth: 40,
          textAlign: "center",
        }}
      >
        {experience.year}
      </Box>
      <Box>
        <Typography variant="h6" component="div">
          {experience.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {experience.description}
        </Typography>
      </Box>
    </Box>
  );
};

// Define the project data
const projects: Project[] = [
  {
    title: "OTT Platform",
    image: "OTT.png",
    technologies: ["React", "Material UI", "Firebase","Axios"],
    githubLink: "https://github.com/bardeprasd/OTTPlatform-React",
  },
  
];

// Define the experience data
const experiences: Experience[] = [
  {
    year: "2023 - 2024",
    title: "Associate IT Consultant",
    description: "ITC INFOTECH",
  },
  {
    year: "MAR 2022 - APR 2022",
    title: "AI/ML Intern",
    description: "YBI FOUNDATION",
  },
];

// Define the component to render projects and experiences
const Portfolio: React.FC = () => {
  return (
    <div>
      {/* Projects Section */}
      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4 }}>
        Past Projects
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Experience Section */}
      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4 }}>
        Experience
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </Box>
    </div>
  );
};

export default Portfolio;