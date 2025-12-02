import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const experiences = [
  {
    title: "Front-End Developer",
    company: "Reg-X Innovations",
    location: "Pune, India",
    dates: "Dec. 2024 - Present",
    responsibilities: [
      "Projects: RegAssure and RegData — EU RTS24, EMIR Refit, MiFID II and AIFMD regulatory reporting platforms.",
      "Implemented AG-Grid Enterprise supporting 1M+ records/day with server-side row model, async filtering, pivoting, grouping and infinite scroll for high-volume regulatory analytics.",
      "Developed interactive analytics dashboards using React + ApexCharts — KPI cards, time-series trends, drill-down analytics, comparative reporting and visual data exploration.",
      "Reduced ~60% REST API calls via caching, debounced filters, staged API fetch, lazy rendering and memoization — improving dashboard performance and user responsiveness.",
      "Implemented SSO + MFA authentication (SAML) for secure multi-client access with encrypted request payload APIs.",
      "Designed a reusable UI component library using React + MUI, improving UI development speed and consistency across regulatory modules.",
      "Recognized by product team for accelerating analytics delivery through reusable UI patterns and optimized API interaction models.",
    ],
  },
  {
    title: "Associate IT Consultant",
    company: "ITC Infotech",
    location: "Bangalore, India",
    dates: "Nov. 2023 - Oct. 2024",
    responsibilities: [
      "Developed high-performance SPA for ERP Billing & AR modules — invoice, payments & customer account workflows.",
      "Optimized routing and UI rendering reducing page-switch latency significantly.",
      "Built Cypress automation scripts reducing manual testing effort by ~40%.",
      "Resolved UI defects & workflow gaps via ServiceNow while meeting SLA release timelines.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
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
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        {experiences.map((role) => (
          <Box
            key={role.title}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              padding: 2,
              borderRadius: 2,
              backgroundColor: "#1c1c1c",
              color: "#66fcf1",
              boxShadow: "0px 6px 15px rgba(102, 252, 241, 0.8)",
              transform: "translateY(-5px)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {role.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#66fcf1" }}>
              {role.company} | {role.location} | {role.dates}
            </Typography>
            <Box component="ul" sx={{ mt: 1.5, pl: 3, color: "#ccefed", mb: 1 }}>
              {role.responsibilities.map((item) => (
                <li key={item}>
                  <Typography variant="body2" sx={{ color: "#ccefed", lineHeight: 1.6 }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
