import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {withStyles} from '@material-ui/core/styles';

import UserService from '../../services/UserService';
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";


const styles = theme => ({
    rightIcon: {
        color: theme.palette.primary.main,
        fontSize: 36,
        marginRight: 5
    },
    linkStyle: {
        textDecoration: 'none'
    },
    summary: {
        padding: 10
    },
    primaryContent: {
        flexBasis: '80%',
        textAlign: 'left',
    },
    secondaryContent: {
        flexBasis: '20%',
        textAlign: 'right',
        paddingTop: 10,
        marginRight: 10
    },
    subtitle: {
        marginLeft: theme.spacing.unit + 5
    },
    titleButton: {
        padding: 10,
        borderRadius: 12,
        color: 'black',
        fontWeight: 'normal',
        textTransform: 'none'
    },
    panelDisabled: {
        /*borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        border: 2*/
        backgroundColor: 'rgba(158,158,158,0.2)'
    }
});


const Homework = (props) => {

    const {classes} = props;

    let buttonsForTeacher = <div></div>;
    let homeworkVisibleButton = <div></div>;

    if (UserService.isTeacher()) {
        buttonsForTeacher =
            <Typography>
                Statistics of homework<br/>
                Here will be some statistics<br/>
                Here will be some statistics<br/>
                <Button variant="raised" color="primary" style={{marginRight: '10px', marginTop: '10px'}}
                        onClick={() => props.updateHomeworkTitle(props.id, props.title)}>
                    Update homework title</Button>
                <Button variant="raised" color="secondary" style={{marginLeft: '10px', marginTop: '10px'}}
                        onClick={() => props.deleteHomework(props.id)}>
                    Delete homework</Button>
            </Typography>;
        homeworkVisibleButton = <Tooltip id="tooltip-bottom" title="Activate to make homework invisible">
            <Switch checked={props.homeworkVisible} color={"primary"}
                    onChange={props.changeSwitch(props.id)}/>
        </Tooltip>;
    }
    return (
        <ExpansionPanel className={!props.homeworkVisible ? classes.panelDisabled : null}>
            <ExpansionPanelSummary className={classes.summary} expandIcon={<ExpandMoreIcon/>}>
                <div className={classes.primaryContent}>
                    <Link
                        className={classes.linkStyle} to={
                        {
                            pathname: `/myclasses/${props.classTitle}/homework/${props.title}`,
                            state:
                                {
                                    title: props.title,
                                    id: props.id,
                                    classId: props.classId,
                                    classTitle: props.classTitle
                                }
                        }
                    }>

                        <Button variant="flat"
                                className={classes.titleButton}>
                            <AssignmentIcon className={classes.rightIcon}/>
                            {props.title}
                        </Button></Link>
                    <Typography variant={'caption'} className={classes.subtitle}>Created
                        at: {new Date(props.createdAt).toLocaleDateString()} - {new Date(props.createdAt).toLocaleTimeString()}</Typography>
                </div>
                <div className={classes.secondaryContent}>
                    {homeworkVisibleButton}
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {buttonsForTeacher}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles(styles)(Homework);
