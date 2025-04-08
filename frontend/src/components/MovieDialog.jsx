import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useRecoilState, useRecoilValue } from 'recoil';
import VideoBackground from './VideoBackground';
import { idState, openState } from '../recoil/movieState';

export default function MovieDialog() {
  const [open, setOpen] = useRecoilState(openState);
  const movieId = useRecoilValue(idState);

  const handleClose = () => {
    setOpen(false);
  };

  if (!movieId) return null; 

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="movie-dialog-title"
      aria-describedby="movie-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="movie-dialog-description">
          <VideoBackground movieId={movieId} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
