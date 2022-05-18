import * as React from "react";
import { Container, Divider, Grid, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import VisiterDetails from "./VisitersDetails"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Visiteurs: 60000 },
  { name: "Fév", Visiteurs: 90000 },
  { name: "Mars", Visiteurs: 98000 },
  { name: "Avril", Visiteurs: 39080 },
  { name: "Mai", Visiteurs: 75000 },
  { name: "Juin", Visiteurs: 25000 },
  { name: "Juillet", Visiteurs: 38000 },
  { name: "Août", Visiteurs: 43000 },
  { name: "Sep", Visiteurs: 75000 },
  { name: "Oct", Visiteurs: 45000 },
  { name: "Nov", Visiteurs: 90000 },
  { name: "Déc", Visiteurs: 39008 },
];

export default function VisitersStatics() {
  return (
    <>
      <Paper elevation={9} fullWidth className="paper">
        <Container>
          <Typography variant="h5" component="div" className="title">
            Visiteurs du site
          </Typography>
          <Grid container spacing={3} sx={{ marginBottom: 4 }}>
            <Grid item md={9} sx={12} sx={{ height: 400 }}>
              <ResponsiveContainer>
                <BarChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Visiteurs" fill="#34685C" />
                </BarChart>
              </ResponsiveContainer>
            </Grid>
            {/* <Grid > */}
            <Stack
              component={Grid}
              item
              md={3}
              xs={12}
              direction="row"
              justifyContent="center"
              alignItems="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={5}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Typography variant="subsubTitle1" className="subTitle">
                  Croissance
                </Typography>
                <QueryStatsIcon fontSize="large" sx={{ color: "#D51E08" }} />
                <Typography
                  variant="h5"
                  sx={{ color: "#EF7401" }}
                  className="subTitle"
                >
                  37%
                </Typography>
              </Stack>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Typography variant="subsubTitle1" className="subTitle">
                  Mensuelle
                </Typography>
                <EqualizerIcon fontSize="large" sx={{ color: "#D51E08" }} />
                <Typography
                  variant="h5"
                  sx={{ color: "#EF7401" }}
                  className="subTitle"
                >
                  23%
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="subsubTitle1" className="subTitle">
                  Détails
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <VisiterDetails/>
              </AccordionDetails>
            </Accordion>
          </div>
        </Container>
      </Paper>
    </>
  );
}
