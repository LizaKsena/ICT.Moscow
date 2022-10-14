import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TransitionsModal from './Modal';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', m: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({
  city,
  country,
  title,
  id,
  dateUp,
  dateCr,
  solution,
  description,
  developer,
  direction,
  object,
  application,
}) {
  return (
    <div
      style={{
        marginTop: 30
      }}
      id={id}
    >
      <Card
        sx={{ width: 260, height: 250, position: 'relative', }}
        id={id}
      >
        <CardContent>
          {city
            ? (
              <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                {country}
                , &nbsp;
                {city}
              </Typography>
            )
            : (
              <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                {country}
              </Typography>
            ) }

          <Typography
            variant="h5"
            component="div"
            sx={{
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
        </CardContent>

        <CardActions>
          <TransitionsModal
            city={city}
            country={country}
            title={title}
            id={id}
            description={description}
            developer={developer}
            solution={solution}
            object={object}
            application={application}
          />
        </CardActions>
      </Card>
      {dateUp

        ? (
          <Typography
            variant="body2"
            sx={{
              fontStyle: 'italic',
              fontSize: 12,
              color: '#ABABAB',
              textAlign: 'right',
              marginTop: 1
            }}
          >
            Обновлено &nbsp;
            {new Date(dateUp).toLocaleDateString()}
          </Typography>
        )
        : (
          <Typography
            variant="body2"
            sx={{
              fontStyle: 'italic',
              fontSize: 12,
              color: '#ABABAB',
              textAlign: 'right',
              marginTop: 1
            }}
          >
            Добавлено &nbsp;
            {new Date(dateCr).toLocaleDateString()}
          </Typography>
        )}
    </div>
  );
}
