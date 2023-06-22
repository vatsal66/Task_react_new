import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Education = ({ educationData, setEducation, exp, setExp }) => {
  const [jobType, setJobType] = useState("Fresher");

  const handleType = (event) => {
    setJobType(event.target.value);
  };

  const handleChange = (i, e) => {
    let newFormValues = [...educationData];
    newFormValues[i][e.target.name] = e.target.value;
    setEducation(newFormValues);
  };

  const handleExp = (i, e) => {
    let newFormValues = [...exp];
    newFormValues[i][e.target.name] = e.target.value;
    setExp(newFormValues);
  };

  const handleRemoveItem = (i) => {
    let newFormValues = [...educationData];
    newFormValues.splice(i, 1);
    setEducation(newFormValues);
  };

  const handleRemoveExp = (i) => {
    let newFormValues = [...exp];
    newFormValues.splice(i, 1);
    setExp(newFormValues);
  };

  return (
    <div>
      {/* Education */}
      <Box p={2}>
        <Typography variant="h5">Education</Typography>
      </Box>
      {educationData.map((item, i) => (
        <Box p={1}>
          <Grid container spacing={2} key={i}>
            <Grid item lg={5} md={5} sm={5} xs={5}>
              <TextField
                name="university"
                label="University Name"
                fullWidth
                value={item.university}
                onChange={(e) => handleChange(i, e)}
              />
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={4}>
              <TextField
                name="course"
                label="Course"
                fullWidth
                value={item.course}
                onChange={(e) => handleChange(i, e)}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}>
              <TextField
                name="duration"
                label="Duration"
                fullWidth
                value={item.duration}
                onChange={(e) => handleChange(i, e)}
              />
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={1}>
              {i ? <Button onClick={handleRemoveItem}>Remove</Button> : null}
            </Grid>
          </Grid>
        </Box>
      ))}
      <Box p={2}>
        <Button
          variant="contained"
          onClick={() =>
            setEducation([...educationData, { university: "", course: "", duration: "" }])
          }
        >
          Add Education
        </Button>
      </Box>

      <Box p={2}>
        {/* <Typography variant="h5">Experience</Typography> */}
      </Box>
      {/* <RadioGroup row name="selection" value={jobType} onChange={handleType}>
        <FormControlLabel
          value="Fresher"
          control={<Radio color="primary" />}
          label="Fresher"
        />
        
      </RadioGroup> */}

      {jobType !== "Fresher" ? (
        <>
          {exp.map((item, i) => (
            <Box p={1}>
              <Grid container spacing={2} key={i}>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                  <TextField
                    name="company"
                    label="Company Name"
                    fullWidth
                    value={item.company}
                    onChange={(e) => handleExp(i, e)}
                  />
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    name="role"
                    label="Role"
                    fullWidth
                    value={item.role}
                    onChange={(e) => handleExp(i, e)}
                  />
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                  <TextField
                    name="duration"
                    label="Duration"
                    fullWidth
                    value={item.duration}
                    onChange={(e) => handleExp(i, e)}
                  />
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}>
                  {i ? <Button onClick={handleRemoveExp}>Remove</Button> : null}
                </Grid>
              </Grid>
            </Box>
          ))}
          
        </>
      ) : null}
    </div>
  );
};

export default Education;
