import React,{Component} from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class CreateExercise extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id
        }
    };



    render () {
        return (
            <div>
                <DialogContent>
                    <TextField
                        label={"Exercise " + this.props.id}
                        onChange={this.props.changeTitle(this.state.id)}
                        error={this.props.errorExerciseTitle}
                        helperText="Required"
                        required={true}
                        multiline
                        fullWidth={true}
                        value={this.props.titleValue}
                    />
                </DialogContent>
                <DialogContent>
                    <RadioGroup
                        value={this.props.value}
                        onChange={this.props.changeRadio(this.state.id)}
                        row={true}>
                        <FormControlLabel
                            control={<Radio/>}
                            label={<TextField
                                multiline
                                onChange={this.props.changeAnswers(this.state.id, 1)}
                                error={Object.values(this.props.errorExerciseSolutionPossibilities[0])[0]}
                                label="Answer 1"
                                helperText="Required"
                                required={true}
                                value={Object.values(this.props.answersValues[0])[0]}
                            />}
                            value={"1"}
                        />
                        <FormControlLabel
                            control={<Radio/>}
                            label={<TextField
                                label="Answer 2"
                                onChange={this.props.changeAnswers(this.state.id, 2)}
                                error={Object.values(this.props.errorExerciseSolutionPossibilities[1])[0]}
                                multiline
                                helperText="Required"
                                required={true}
                                value={Object.values(this.props.answersValues[1])[0]}
                            />}
                            value={"2"}
                        />
                        <FormControlLabel
                            control={<Radio/>}
                            label={<TextField
                                onChange={this.props.changeAnswers(this.state.id, 3)}
                                error={Object.values(this.props.errorExerciseSolutionPossibilities[2])[0]}
                                multiline
                                label="Answer 3"
                                helperText="Required"
                                required={true}
                                value={Object.values(this.props.answersValues[2])[0]}
                            />}
                            value={"3"}
                        />
                        <FormControlLabel
                            control={<Radio/>}
                            label={<TextField
                                onChange={this.props.changeAnswers(this.state.id, 4)}
                                error={Object.values(this.props.errorExerciseSolutionPossibilities[3])[0]}
                                multiline
                                label="Answer 4"
                                helperText="Required"
                                required={true}
                                value={Object.values(this.props.answersValues[3])[0]}
                            />}
                            value={"4"}
                        />
                    </RadioGroup>
                </DialogContent>
                <Grid container justify={"center"}>
                    <DialogActions>
                        <Button
                            color={"secondary"}
                            variant={"raised"}
                            onClick={() => this.props.deleteExercise(this.state.id)}
                        >Delete exercise {this.state.id}</Button>
                    </DialogActions>
                </Grid>
            </div>
        )
    }
}

export default CreateExercise;