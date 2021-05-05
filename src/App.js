import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import { Button, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Typography variant="h5" component="h5">
        <AccessAlarmIcon color="primary" />
        Todo App
      </Typography>
      <Button variant="contained" color="secondary">
        Primary
      </Button>
    </div>
  );
}

export default App;
