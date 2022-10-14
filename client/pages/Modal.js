import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Slide, useScrollTrigger } from '@mui/material';
import Fade from '@mui/material/Fade';
import BoxSx from './Block_modal';
import styles from '../styles/Index.module.sass';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: ' #E5E5E5',
  border: '0px 4px 40px rgba(0, 0, 0, 0.15)',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({
  city,
  country,
  title,
  id,
  description,
  developer,
  solution,
  object,
  application,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        size="small"
        sx={{
          fontSize: 14,
          color: '#2B8580',
          position: 'absolute',
          top: 215,
        }}
        onClick={handleOpen}
      >
        подробнее
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={id}
        aria-describedby="modal-modal-description"
      >

        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ marginBottom: 2 }}
            >
              <button className={styles.modal_app} type="button">
                {application}
              </button>
            </Typography>
            {city
              ? (
                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#888888',
                  }}
                >
                  {country}
                  , &nbsp;
                  {city}
                </Typography>
              )
              : (
                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#888888'
                  }}
                >
                  {country}
                </Typography>
              ) }
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 700,
                color: '#000000',
                marginBottom: 6,
              }}
              gutterBottom
            >
              {title}
            </Typography>

            <Box sx={{
              backgroundColor: '#2B8580',
              color: '#FFFFFF',
              margin: -4,
              marginBottom: 3,
            }}
            >

              <Grid
                container
                spacing={0}
                sx={{
                  padding: 3,
                }}
              >
                {object
                  ? (
                    <BoxSx
                      name="объект внедрения"
                      discription={object}
                    />
                  )
                  : null}
                {solution
                  ? (
                    <BoxSx
                      name="применяемое решение"
                      discription={solution.description}
                    />
                  )
                  : null }
                {developer
                  ? (
                    <BoxSx
                      name="разработчик"
                      discription={developer}
                    />
                  )
                  : null }
              </Grid>
            </Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 1,
              }}
            >
              описание
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: '#000000',

              }}
            >
              {description.replace(/<\/?[^>]+>/g, '')}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
