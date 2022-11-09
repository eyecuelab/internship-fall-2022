import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import '../../index.css';

const FormTemplate = () => {

  return (
    <div style={{ position: 'relative', height: '80%' }}>
        <TextField fullWidth sx={{ mt: 0 }}
          id="standard-basic"
          variant="standard"
          name="FiveSyllables"
          type="text"
          multiline
          InputProps={{
            style: {
              fontFamily: "LuloCleanOneBold",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "42px",
              lineHeight: "50px",
              color: "#363636",
            }
          }}
        />
        <label><h5>5 Syllables</h5></label>
        <TextField fullWidth sx={{ mt: 0 }} 
          id="standard-basic"
          variant="standard"
          name="SevenSyllables"
          type="text"
          multiline
          InputProps={{
            style: {
              fontFamily: "LuloCleanOneBold",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "42px",
              lineHeight: "50px",
              color: "#363636",
            }
          }}
        />
        <label><h5>7 Syllables</h5></label>
        <TextField fullWidth sx={{ mt: 0 }} 
          id="standard-basic"
          variant="standard"
          name="FiveSyllables"
          type="text"
          multiline
          InputProps={{
            style: {
              fontFamily: "LuloCleanOneBold",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "42px",
              lineHeight: "50px",
              color: "#363636",
            }
          }}
        />
        <label><h5>5 Syllables</h5></label>
      <Button
        sx={{
          height: '95px',
          width: '46%',
          color: '#363636',
          border: '1px solid #363636',
          borderRadius: '10px',
          position: 'absolute',
          bottom: '0',
          left: '0'
        }}
        variant="outlined" 
      >
        <h3>Submit</h3>
      </Button>
    </div>
  )

}

export default FormTemplate;