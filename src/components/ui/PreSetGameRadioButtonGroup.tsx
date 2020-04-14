import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
      <Radio
          className={classes.root}
          disableRipple
          color="primary"
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
          {...props}
      />
  );
}

export default function PreSetGamesRadioButtonGroup() {

  return (
      <FormControl component="fieldset">

        <FormLabel component="legend">Choose a pre-set game:</FormLabel>
        <RadioGroup defaultValue="game1" aria-label="choose-game" name="customized-radios" >
          <FormControlLabel value="game1" control={<StyledRadio />}
                            label="Game 1, 1-2 coalition: 50, 1-3 coalition: 70, 2-3 coalition: 50, 1-2-3 coalition: 100" />
          <FormControlLabel value="game2" control={<StyledRadio />}
                            label="Game 2, 1-2 coalition: 60, 1-3 coalition: 50, 2-3 coalition: 70, 1-2-3 coalition: 100" />
          <FormControlLabel value="game3" control={<StyledRadio />}
                            label="Game 3, 1-2 coalition: 60, 1-3 coalition: 20, 2-3 coalition: 70, 1-2-3 coalition: 100"/>
        </RadioGroup>
      </FormControl>
  );
}